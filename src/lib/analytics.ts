/**
 * Conversion tracking + GA4 transport (single source of truth).
 *
 * Provider status
 * ---------------
 * - Google Analytics 4: supported, but INACTIVE until a real Measurement ID
 *   is supplied through the Vite env var `VITE_GA_MEASUREMENT_ID` at build
 *   time. No ID is hardcoded and none is fabricated.
 * - Google Tag Manager: if a GTM container is ever added, events are pushed to
 *   `window.dataLayer` automatically (no component changes needed).
 * - Vercel Analytics / Speed Insights, Meta Pixel, Plausible, Umami: not
 *   installed and intentionally not added.
 *
 * Measurement rules
 * -----------------
 * - Production only: development traffic never reaches a production property.
 * - No PII is ever sent (no names, emails, phone numbers, message contents or
 *   form values) — only the event name and non-identifying context.
 * - Isomorphic-safe and failure-proof: analytics can never break the UI.
 */

export const CONVERSION_EVENTS = [
  'page_view',
  'hero_cta_click',
  'navbar_cta_click',
  'service_cta_click',
  'portfolio_click',
  'whatsapp_click',
  'contact_form_start',
  'contact_form_submit',
  'contact_form_success',
  'contact_form_error',
  'faq_open',
  // Supporting engagement metric (section reach), see SCROLL_THRESHOLDS.
  'scroll_depth'
] as const;

export type ConversionEvent = (typeof CONVERSION_EVENTS)[number];

export type TrackingParams = Record<string, string | number | boolean | undefined>;

/** Scroll milestones that map to a visitor's progress through the page. */
export const SCROLL_THRESHOLDS = [25, 50, 75, 90] as const;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Loads GA4 asynchronously and configures it, but only when:
 *   1. we are in a production build, and
 *   2. a real `VITE_GA_MEASUREMENT_ID` is present.
 *
 * `send_page_view: false` is deliberate: the single-page `page_view` is emitted
 * by `initConversionTracking()` so the initial view is counted exactly once.
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined') return;

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!import.meta.env.PROD || !measurementId) return;

  // Already configured (e.g. by a GTM container or a previous call).
  if (typeof window.gtag === 'function') return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: false });

  // Official gtag.js loading pattern: async, never render-blocking.
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

/** Fire one named conversion event. Safe to call anywhere, including SSR. */
export function track(event: ConversionEvent, params: TrackingParams = {}): void {
  if (typeof window === 'undefined') return;
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, params);
    } else if (Array.isArray(window.dataLayer)) {
      // GTM-style fallback: only used when no gtag is present, so an event is
      // never dispatched twice to the same endpoint.
      window.dataLayer.push({ event, ...params });
    }
  } catch {
    /* Analytics must never get in the way of the visitor. */
  }
}

let initialized = false;

/** Reads the non-identifying context carried by a tracked anchor. */
function readAnchorParams(anchor: Element): TrackingParams {
  // `data-source` is the historical attribute name; it now maps to the public
  // `cta_location` parameter. `data-cta-location` is also honoured.
  const ctaLocation =
    anchor.getAttribute('data-cta-location') ?? anchor.getAttribute('data-source') ?? undefined;
  const service = anchor.getAttribute('data-service') ?? undefined;
  const project = anchor.getAttribute('data-project') ?? undefined;

  const params: TrackingParams = {};
  if (ctaLocation) params.cta_location = ctaLocation;
  if (service) params.service = service;
  if (project) params.project = project;
  return params;
}

/**
 * Installs the initial `page_view` plus one delegated click listener for the
 * whole document. Any anchor can opt in with:
 *
 *   data-source="hero"           -> cta_location (also data-cta-location)
 *   data-track="hero_cta_click"  -> additionally fires the named event
 *   data-service="landing-page"  -> service parameter
 *   data-project="Aura Luxe"     -> project parameter
 *   wa.me links                  -> always fire whatsapp_click
 *
 * Idempotent, so React StrictMode's double effect cannot attach twice.
 */
export function initConversionTracking(): void {
  if (typeof window === 'undefined' || initialized) return;
  initialized = true;

  track('page_view', { page: 'landing' });

  document.addEventListener(
    'click',
    (event) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') ?? '';
      const params = readAnchorParams(anchor);

      if (href.includes('wa.me')) {
        // Per the event spec, whatsapp_click carries only cta_location.
        track('whatsapp_click', params.cta_location ? { cta_location: params.cta_location } : {});
      }

      const explicit = anchor.getAttribute('data-track');
      if (explicit && (CONVERSION_EVENTS as readonly string[]).includes(explicit)) {
        track(explicit as ConversionEvent, params);
      }
    },
    { capture: true }
  );

  initScrollDepth();
}

/** Emits one `scroll_depth` event per threshold, throttled and passive. */
function initScrollDepth(): void {
  const fired = new Set<number>();
  let ticking = false;

  const measure = () => {
    ticking = false;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;

    const percent = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
    for (const threshold of SCROLL_THRESHOLDS) {
      if (percent >= threshold && !fired.has(threshold)) {
        fired.add(threshold);
        track('scroll_depth', { percent: threshold });
      }
    }
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(measure);
    },
    { passive: true }
  );

  window.addEventListener('resize', measure, { passive: true });
}

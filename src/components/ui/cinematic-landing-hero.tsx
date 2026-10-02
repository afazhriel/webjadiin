import React, { useEffect, useState } from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppLink } from '../../data/config';

/**
 * Hero Section — background & decorative typography layer only.
 *
 * The large glass hero card (headline block, 3D phone mockup, stat badges and
 * the CTA buttons) has been removed. What remains is the environment: the dark
 * navy canvas, the subtle grid, the ambient light blooms and the oversized
 * "HAFI DIGITAL" background typography.
 *
 * `CinematicHeroProps` is intentionally left untouched so the public API of
 * this component — and therefore every call site — keeps working unchanged.
 * Only `brandName` is rendered, because it is what the background typography
 * needs.
 */
export interface CinematicHeroProps {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  cardHeading?: string;
  cardDescription?: React.ReactNode;
  metricValue?: number;
  metricLabel?: string;
  ctaHeading?: string;
  ctaDescription?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({
  brandName = BRAND_CONFIG.name,
  tagline1,
  tagline2,
  cardDescription
}) => {
  // Phones & tablets have no hover, so the background typography stays
  // completely static there instead of drifting on every touch move.
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Capability detection: the drift only makes sense for a real hovering
  // pointer, never for touch.
  useEffect(() => {
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const sync = () => {
      setIsFinePointer(pointerQuery.matches);
    };

    sync();
    pointerQuery.addEventListener('change', sync);
    return () => {
      pointerQuery.removeEventListener('change', sync);
    };
  }, []);

  // Gentle counter-drift for the giant background wordmark.
  useEffect(() => {
    if (!isFinePointer) {
      setMousePos({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isFinePointer]);

  // Parallax drift for the giant background wordmark.
  const wordmarkDriftStyle = isFinePointer
    ? { transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }
    : undefined;

  return (
    <section
      className="relative w-full max-w-full min-h-[100svh] lg:h-screen lg:min-h-[700px] flex items-center justify-center bg-slate-950 overflow-hidden film-grain select-none"
    >
      {/* Subtle background ambient lights & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="absolute -top-24 -left-24 w-64 h-64 sm:-top-40 sm:-left-40 sm:w-96 sm:h-96 bg-sky-500/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 sm:-bottom-40 sm:-right-40 sm:w-[500px] sm:h-[500px] bg-blue-600/25 rounded-full blur-[110px] sm:blur-[160px] pointer-events-none" />

      {/* GIANT CINEMATIC TYPOGRAPHY IN BACKGROUND
          Decorative only: the brand name is already rendered as real text in
          the navbar, so this layer is hidden from assistive technology. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 will-change-transform"
      >
        <div
          className="w-full max-w-full px-4 flex items-center justify-center transition-transform duration-75 ease-out"
          style={wordmarkDriftStyle}
        >
          <span className="text-[16vw] sm:text-[14vw] font-extrabold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-400 to-transparent leading-none select-none font-grotesk text-center">
            {brandName}
          </span>
        </div>
      </div>

      {/* Copy layer — the part of the hero that actually speaks.
          Sits above the decorative wordmark. One primary CTA is enough here:
          it appears under the offer, then repeats contextually in the
          sections below. */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-[26px] leading-[1.18] sm:text-5xl sm:leading-[1.12] lg:text-6xl lg:leading-[1.06] font-extrabold font-grotesk text-foreground text-balance">
          {tagline1}
          {tagline2 && (
            <>
              {' '}
              <span className="text-muted-foreground">{tagline2}</span>
            </>
          )}
        </h1>

        {cardDescription && (
          <p className="mt-4 sm:mt-6 mx-auto max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground text-pretty">
            {cardDescription}
          </p>
        )}

        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={getWhatsAppLink("Halo Hafi Digital, saya tertarik membuat website untuk bisnis saya. Saya ingin konsultasi mengenai kebutuhan dan jenis website yang paling sesuai.")}
            target="_blank"
            rel="noopener noreferrer"
            data-track="hero_cta_click"
            data-source="hero"
            className="inline-flex w-full sm:w-auto items-center justify-center min-h-[52px] gap-2.5 px-7 sm:px-9 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm sm:text-base shadow-theme transition-all hover:opacity-90 active:scale-95"
          >
            <MessageSquare className="w-5 h-5 shrink-0" />
            <span>Konsultasikan Bisnis Anda</span>
          </a>

          <a
            href="#portfolio"
            data-source="hero"
            className="inline-flex w-full sm:w-auto items-center justify-center min-h-[52px] gap-2.5 px-7 sm:px-9 py-4 rounded-xl bg-secondary text-secondary-foreground border border-border font-bold text-sm sm:text-base transition-all hover:bg-accent hover:text-accent-foreground active:scale-95"
          >
            <span>Lihat Project Kami</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
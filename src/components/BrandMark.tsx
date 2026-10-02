import React from 'react';
import { BRAND_CONFIG } from '../data/config';

/** Plus Jakarta Sans ExtraBold — the brand wordmark face (loaded in index.html). */
export const BRAND_FONT = "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif";

/** Inter — the shared UI/body face for the header and footer (loaded in index.html). */
export const BRAND_FONT_UI = "Inter, 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif";

/* ============================================================
   BRAND MARK — the geometric "H" of Hafi Digital.

   Philosophy, expressed as shape only:
     · left stem   = FOUNDATION     — the base, where the business starts
     · right stem  = GROWTH         — the objective, where it is heading
     · diagonal    = TRANSFORMATION  — the digital bridge between the two,
                                      always ascending

   Construction notes:
     · Drawn with round-capped strokes rather than filled shapes, so every
       terminal is rounded by the geometry itself instead of by ornament.
     · Both stems are identical in height and weight, which keeps the
       silhouette reading unmistakably as "H" all the way down to ~20px.
     · The diagonal's round caps are absorbed inside the stems (it is drawn
       slightly past each stem's inner edge), so the three strokes resolve
       into one continuous connected shape with no visible seams or overlaps.
     · viewBox is 48x48 with the artwork spanning 9→39, leaving even optical
       margins so the mark stays centred at any rendered size.
   ============================================================ */

export interface BrandMarkProps {
  /** Rendered size. Stays crisp from ~20px (header) up to social/favicon use. */
  className?: string;
  /** Accessible name. Omit when the mark already sits inside a labelled link. */
  title?: string;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ className, title }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={title ? 'img' : undefined}
    aria-hidden={title ? undefined : true}
  >
    {title ? <title>{title}</title> : null}
    <g stroke="currentColor" strokeLinecap="round">
      {/* Left stem — foundation */}
      <path d="M13.25 13.25V34.75" strokeWidth="8.5" />
      {/* Right stem — growth */}
      <path d="M34.75 13.25V34.75" strokeWidth="8.5" />
      {/* Ascending bridge — transformation */}
      <path d="M13.25 31.5 34.75 21.5" strokeWidth="7" />
    </g>
  </svg>
);

/* ============================================================
   BRAND WORDMARK — "Hafi Digital."
   Kept as one unbroken visual unit: the electric-blue period acts
   as the single brand accent, and the name stays a single string
   sourced from config rather than being re-typed per usage.
   ============================================================ */

export interface BrandWordmarkProps {
  className?: string;
}

export const BrandWordmark: React.FC<BrandWordmarkProps> = ({ className = '' }) => (
  <span
    className={`text-white truncate ${className}`.trim()}
    style={{ fontFamily: BRAND_FONT }}
  >
    {BRAND_CONFIG.name}
    <span className="text-[#0EA5FF]">.</span>
  </span>
);
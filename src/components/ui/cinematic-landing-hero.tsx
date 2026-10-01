import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, ArrowRight, ShieldCheck, Sparkles, TrendingUp, Star, CheckCircle2, Zap } from 'lucide-react';
import { getWhatsAppLink, BRAND_CONFIG } from '../../data/config';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
  tagline1 = "Bangun bisnis Anda,",
  tagline2 = "lebih profesional.",
  cardHeading = "Digital presence, redefined.",
  cardDescription = "Tingkatkan kredibilitas & skala bisnis Anda dengan website modern, ultra-fast, dan conversion-focused.",
  metricValue = 100,
  metricLabel = "Projects Built",
  ctaHeading = "Siap mendominasi pasar digital?",
  ctaDescription = "Dapatkan konsultasi gratis dan wujudkan website impian untuk pertumbuhan bisnis Anda.",
  primaryCtaText = "Mulai Konsultasi",
  secondaryCtaText = "Lihat Paket",
  onPrimaryClick,
  onSecondaryClick
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const textBgRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);
  const badge3Ref = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Desktop / precise-pointer capabilities.
  // On phones & tablets there is no hover, so the 3D mouse parallax is
  // skipped entirely (it would otherwise re-render on every touch move and
  // fight with the GSAP transforms).
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Capability detection: desktop layout starts at the `lg` breakpoint,
  // and mouse parallax requires a real hovering pointer.
  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const sync = () => {
      setIsDesktop(desktopQuery.matches);
      setIsFinePointer(pointerQuery.matches);
    };

    sync();
    desktopQuery.addEventListener('change', sync);
    pointerQuery.addEventListener('change', sync);
    return () => {
      desktopQuery.removeEventListener('change', sync);
      pointerQuery.removeEventListener('change', sync);
    };
  }, []);

  // 3D Parallax Mouse movement (precise pointers only)
  useEffect(() => {
    if (!isFinePointer) {
      setMousePos({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isFinePointer]);

  // GSAP ScrollTrigger storytelling.
  // Desktop keeps the full cinematic composition (pin + scrub + 3D depth).
  // Mobile keeps the same visual but drops the pin and uses a very subtle,
  // in-bounds scroll motion so nothing is ever pushed outside the screen.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    let context: gsap.Context | null = null;

    const build = () => {
      context?.revert();
      context = null;

      if (!containerRef.current || !cardRef.current || !phoneRef.current) return;

      const desktop = mediaQuery.matches;

      context = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: desktop ? '+=100%' : '+=45%',
            pin: desktop,
            scrub: 1,
            anticipatePin: 1,
            refreshPriority: 1,
            invalidateOnRefresh: true
          }
        });

        // Background text subtle scale & move
        if (textBgRef.current) {
          tl.to(textBgRef.current, {
            scale: desktop ? 1.15 : 1.05,
            opacity: 0.15,
            ease: 'power2.out'
          }, 0);
        }

        if (desktop) {
          // Card 3D tilt transformation & scale on scroll
          tl.to(cardRef.current, {
            rotateX: 12,
            rotateY: -8,
            scale: 0.94,
            y: -30,
            ease: 'power1.inOut'
          }, 0);

          // Phone mockup depth slide forward & rotate
          tl.to(phoneRef.current, {
            y: -50,
            z: 60,
            rotateY: 10,
            scale: 1.05,
            ease: 'power1.inOut'
          }, 0);

          // Floating badges parallax
          if (badge1Ref.current) {
            tl.to(badge1Ref.current, { y: -80, x: -20, rotate: -6 }, 0);
          }
          if (badge2Ref.current) {
            tl.to(badge2Ref.current, { y: -100, x: 30, rotate: 8 }, 0);
          }
          if (badge3Ref.current) {
            tl.to(badge3Ref.current, { y: -60, x: -10, rotate: -4 }, 0);
          }
        } else {
          // Mobile / tablet: minimal, in-bounds motion only.
          tl.to(cardRef.current, { scale: 0.985, ease: 'none' }, 0);
          tl.to(phoneRef.current, { y: -12, ease: 'none' }, 0);

          if (badge1Ref.current) {
            tl.to(badge1Ref.current, { y: -10, ease: 'none' }, 0);
          }
          if (badge2Ref.current) {
            tl.to(badge2Ref.current, { y: -14, ease: 'none' }, 0);
          }
        }
      }, containerRef);
    };

    build();

    const handleBreakpoint = () => build();
    mediaQuery.addEventListener('change', handleBreakpoint);

    // Layout height changes between breakpoints (phone mockup is rescaled),
    // so ScrollTrigger needs to recalculate once the new layout settles.
    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 220);

    return () => {
      window.clearTimeout(refreshTimer);
      mediaQuery.removeEventListener('change', handleBreakpoint);
      context?.revert();
    };
  }, []);

  const handleDefaultPrimary = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      window.open(getWhatsAppLink("Halo Hafi Digital, saya ingin mulai konsultasi untuk pembuatan website bisnis."), "_blank");
    }
  };

  const handleDefaultSecondary = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      const el = document.getElementById("pricing");
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Mouse tilt for the whole cinematic composition (container level, so it
  // never overwrites the GSAP transform that owns the card itself).
  const tiltStyle = isFinePointer
    ? { transform: `rotateY(${mousePos.x * 6}deg) rotateX(${mousePos.y * -6}deg)` }
    : undefined;

  // Mouse depth for the phone mockup.
  const phoneTiltStyle = isFinePointer
    ? { transform: `translateZ(40px) rotateY(${mousePos.x * -8}deg)` }
    : undefined;

  // Parallax drift for the giant background wordmark.
  const wordmarkDriftStyle = isFinePointer
    ? { transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }
    : undefined;

  return (
    <section
      ref={containerRef}
      className="relative w-full max-w-full min-h-[100svh] lg:h-screen lg:min-h-[700px] flex items-center justify-center bg-slate-950 overflow-hidden film-grain select-none"
    >
      {/* Subtle background ambient lights & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="absolute -top-24 -left-24 w-64 h-64 sm:-top-40 sm:-left-40 sm:w-96 sm:h-96 bg-sky-500/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 sm:-bottom-40 sm:-right-40 sm:w-[500px] sm:h-[500px] bg-blue-600/25 rounded-full blur-[110px] sm:blur-[160px] pointer-events-none" />

      {/* GIANT CINEMATIC TYPOGRAPHY IN BACKGROUND */}
      <div
        ref={textBgRef}
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

      {/* MAIN DEEP 3D PHYSICAL CARD CONTAINER */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 perspective-1000 transition-transform duration-200 ease-out will-change-transform"
        style={tiltStyle}
      >
        <div
          ref={cardRef}
          className="relative bg-gradient-to-br from-slate-900/90 via-sky-950/80 to-slate-900/95 rounded-3xl border border-sky-500/30 p-5 sm:p-10 lg:p-12 card-physical-depth transform-style-3d backdrop-blur-xl will-change-transform"
        >
          {/* Card Ambient Glow Line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* LEFT CONTENT COLUMN */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-5 sm:space-y-6">
              
              {/* Floating Top Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-medium w-fit max-w-full shadow-inner">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 animate-spin shrink-0" style={{ animationDuration: '8s' }} />
                <span className="truncate">Next-Gen Web Architecture</span>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping shrink-0" />
              </div>

              {/* Main Headline */}
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-[27px] leading-[1.15] sm:text-5xl sm:leading-[1.1] lg:text-6xl font-extrabold tracking-tight text-white max-w-full">
                  {tagline1}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300">
                    {tagline2}
                  </span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal max-w-xl leading-relaxed">
                  {cardDescription}
                </p>
              </div>

              {/* Metrics & Progress Ring */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-2 border-y border-white/10">
                <div className="flex items-center gap-3">
                  {/* Glowing SVG Progress Ring */}
                  <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-12 h-12 transform -rotate-90">
                      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" className="text-slate-800" fill="transparent" />
                      <circle 
                        cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" 
                        className="text-sky-400" fill="transparent"
                        strokeDasharray={125.6}
                        strokeDashoffset={125.6 * (1 - 0.98)}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-xs font-bold text-sky-300">98%</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-lg sm:text-xl font-bold text-white leading-none">98.9% Satisfied</div>
                    <div className="text-[11px] sm:text-xs text-slate-400">Client Retention Rate</div>
                  </div>
                </div>

                <div className="h-8 w-[1px] bg-slate-800 hidden sm:block" />

                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400 font-grotesk">
                    {metricValue}+ {metricLabel}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400">High-Converting Delivery</div>
                </div>
              </div>

              {/* Tactile CTA Buttons — stacked full-width on mobile */}
              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={handleDefaultPrimary}
                  className="relative group w-full sm:w-auto min-h-[48px] px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-sky-500/25 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 border border-sky-300/30"
                >
                  <MessageSquare className="w-5 h-5 shrink-0 fill-white/20 group-hover:scale-110 transition-transform" />
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleDefaultSecondary}
                  className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm sm:text-base border border-slate-700/80 hover:border-slate-500 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-inner"
                >
                  <span>{secondaryCtaText}</span>
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN: REALISTIC 3D PHONE MOCKUP WITH INTERACTIVE GLASS BADGES */}
            <div className="lg:col-span-5 relative flex justify-center items-center mt-2 lg:mt-0">
              
              {/* Phone layout box: holds the space on screen while the mockup
                  itself is scaled down on small viewports (never overflows). */}
              <div className="relative w-[152px] h-[318px] sm:w-[216px] sm:h-[390px] lg:w-80 lg:h-[520px] flex items-center justify-center">
                
                {/* GSAP depth layer — transform owned exclusively by GSAP */}
                <div
                  ref={phoneRef}
                  className="absolute inset-0 flex items-center justify-center transform-style-3d will-change-transform"
                >
                  {/* Mouse depth layer + scaled phone visual.
                      The base mockup is deliberately taller on small screens so the
                      "app screen" content is never cut off once it is scaled down. */}
                  <div 
                    className="relative w-[264px] h-[560px] sm:w-72 sm:h-[520px] lg:w-80 lg:h-[520px] rounded-[44px] p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-2xl border-4 border-slate-700/60 transform-style-3d origin-center scale-[0.575] sm:scale-[0.75] lg:scale-100 transition-transform duration-300 ease-out"
                    style={phoneTiltStyle}
                  >
                    {/* iPhone Notch Dynamic Island */}
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
                      <div className="w-2 h-2 rounded-full bg-blue-900/60" />
                    </div>

                    {/* Glass Mockup Screen Content */}
                    <div className="relative w-full h-full bg-slate-950 rounded-[34px] overflow-hidden border border-slate-800/80 flex flex-col justify-between p-4 text-left">
                      
                      {/* App Screen Header */}
                      <div className="pt-8 pb-3 border-b border-slate-800 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-7 h-7 flex-shrink-0 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold text-xs">
                            {BRAND_CONFIG.monogram}
                          </div>
                          <span className="text-xs font-bold text-slate-200 tracking-wider truncate">{BRAND_CONFIG.nameUpper}</span>
                        </div>
                        <span className="flex-shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                          LIVE
                        </span>
                      </div>

                      {/* App Screen Body Stats Demo */}
                      <div className="space-y-3 my-auto py-2">
                        <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                          <div className="flex justify-between text-[11px] text-slate-400">
                            <span>Conversion Rate</span>
                            <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                              <TrendingUp className="w-3 h-3" /> +340%
                            </span>
                          </div>
                          <div className="text-xl font-bold text-white font-grotesk">12.4% Avg</div>
                          {/* Mini Bar Chart Demo */}
                          <div className="flex items-end gap-1.5 h-10 pt-2">
                            {[40, 65, 50, 85, 70, 95, 100].map((h, i) => (
                              <div key={i} className="flex-1 bg-slate-800 rounded-t overflow-hidden h-full flex items-end">
                                <div 
                                  className="w-full bg-gradient-to-t from-sky-600 to-sky-400 rounded-t transition-all duration-1000" 
                                  style={{ height: `${h}%` }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Features checklist inside screen */}
                        <div className="p-3 rounded-2xl bg-sky-950/40 border border-sky-500/20 space-y-1.5">
                          <div className="text-xs font-semibold text-sky-200 flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5 shrink-0 text-sky-400" /> PageSpeed Score 99/100
                          </div>
                          <div className="text-[11px] text-slate-300 leading-snug">
                            Layanan website ultra cepat & teroptimasi SEO otomatis.
                          </div>
                        </div>
                      </div>

                      {/* App Screen Bottom CTA */}
                      <div className="pt-2">
                        <button className="w-full min-h-[44px] py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs tracking-wide transition-colors">
                          DEMO EXPERIENCE
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              {/* FLOATING GLASS BADGES AROUND PHONE — anchored inside the
                  card on small screens so they never leave the viewport. */}
              
              {/* Badge 1: Top Left */}
              <div 
                ref={badge1Ref}
                className="absolute top-0 left-0 sm:-top-4 sm:-left-8 glass-badge rounded-2xl p-2 sm:p-3.5 text-left flex items-center gap-2 sm:gap-3 z-30 animate-float"
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0 rounded-lg sm:rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">100% Secure</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-300 whitespace-nowrap">Free SSL & Backup</div>
                </div>
              </div>

              {/* Badge 2: Bottom Right */}
              <div 
                ref={badge2Ref}
                className="absolute bottom-0 right-0 sm:-bottom-4 sm:-right-8 glass-badge rounded-2xl p-2 sm:p-3.5 text-left flex items-center gap-2 sm:gap-3 z-30 animate-float-delayed"
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0 rounded-lg sm:rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">5.0 Star Rating</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-300 whitespace-nowrap">Over 100+ Reviews</div>
                </div>
              </div>

              {/* Badge 3: Middle Left (tablet & up only) */}
              <div 
                ref={badge3Ref}
                className="absolute top-1/2 -translate-y-1/2 -left-8 sm:-left-12 glass-badge rounded-2xl p-2.5 sm:p-3 text-left hidden md:flex items-center gap-2.5 z-30"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span className="text-xs font-medium text-slate-200 whitespace-nowrap">Responsive All Screen</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;

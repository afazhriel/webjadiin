import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, ArrowRight, ShieldCheck, Sparkles, TrendingUp, Star, CheckCircle2, Zap } from 'lucide-react';
import { getWhatsAppLink, BRAND_CONFIG } from '../../data/config';

gsap.registerPlugin(ScrollTrigger);

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

  // 3D Parallax Mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // GSAP ScrollTrigger Animation Pinning & Storytelling
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !cardRef.current || !phoneRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          refreshPriority: 1
        }
      });

      // Background text subtle scale & move
      if (textBgRef.current) {
        tl.to(textBgRef.current, {
          scale: 1.15,
          opacity: 0.15,
          ease: 'power2.out'
        }, 0);
      }

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleDefaultPrimary = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      window.open(getWhatsAppLink("Halo NEXADIGITAL, saya ingin mulai konsultasi untuk pembuatan website bisnis."), "_blank");
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

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-slate-950 overflow-hidden film-grain select-none"
    >
      {/* Subtle background ambient lights & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[160px] pointer-events-none" />

      {/* GIANT CINEMATIC TYPOGRAPHY IN BACKGROUND */}
      <div 
        ref={textBgRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`
        }}
      >
        <span className="text-[14vw] font-extrabold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-400 to-transparent leading-none select-none font-grotesk">
          {brandName}
        </span>
      </div>

      {/* MAIN DEEP 3D PHYSICAL CARD CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 perspective-1000">
        <div 
          ref={cardRef}
          className="relative bg-gradient-to-br from-slate-900/90 via-sky-950/80 to-slate-900/95 rounded-3xl border border-sky-500/30 p-6 sm:p-10 lg:p-12 card-physical-depth transform-style-3d transition-transform duration-200 ease-out backdrop-blur-xl"
          style={{
            transform: `rotateY(${mousePos.x * 6}deg) rotateX(${mousePos.y * -6}deg)`
          }}
        >
          {/* Card Ambient Glow Line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT CONTENT COLUMN */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
              
              {/* Floating Top Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-medium w-fit shadow-inner">
                <Sparkles className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
                <span>Next-Gen Web Architecture</span>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
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
              <div className="flex flex-wrap items-center gap-6 py-2 border-y border-white/10">
                <div className="flex items-center gap-3">
                  {/* Glowing SVG Progress Ring */}
                  <div className="relative w-12 h-12 flex items-center justify-center">
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
                  <div>
                    <div className="text-xl font-bold text-white leading-none">98.9% Satisfied</div>
                    <div className="text-xs text-slate-400">Client Retention Rate</div>
                  </div>
                </div>

                <div className="h-8 w-[1px] bg-slate-800 hidden sm:block" />

                <div>
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400 font-grotesk">
                    {metricValue}+ {metricLabel}
                  </div>
                  <div className="text-xs text-slate-400">High-Converting Delivery</div>
                </div>
              </div>

              {/* Tactile CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={handleDefaultPrimary}
                  className="relative group px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-sky-500/25 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 border border-sky-300/30"
                >
                  <MessageSquare className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleDefaultSecondary}
                  className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm sm:text-base border border-slate-700/80 hover:border-slate-500 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-inner"
                >
                  <span>{secondaryCtaText}</span>
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN: REALISTIC 3D PHONE MOCKUP WITH INTERACTIVE GLASS BADGES */}
            <div className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0">
              
              {/* Phone Container with Mouse Depth */}
              <div 
                ref={phoneRef}
                className="relative w-64 sm:w-72 lg:w-80 h-[480px] sm:h-[520px] rounded-[44px] p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-2xl border-4 border-slate-700/60 transform-style-3d transition-transform duration-300 ease-out"
                style={{
                  transform: `translateZ(40px) rotateY(${mousePos.x * -8}deg)`
                }}
              >
                {/* iPhone Notch Dynamic Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
                  <div className="w-2 h-2 rounded-full bg-blue-900/60" />
                </div>

                {/* Glass Mockup Screen Content */}
                <div className="relative w-full h-full bg-slate-950 rounded-[34px] overflow-hidden border border-slate-800/80 flex flex-col justify-between p-4 text-left">
                  
                  {/* App Screen Header */}
                  <div className="pt-8 pb-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold text-xs">
                        N
                      </div>
                      <span className="text-xs font-bold text-slate-200 tracking-wider">NEXADIGITAL</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
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
                        <Zap className="w-3.5 h-3.5 text-sky-400" /> PageSpeed Score 99/100
                      </div>
                      <div className="text-[11px] text-slate-300 leading-snug">
                        Layanan website ultra cepat & teroptimasi SEO otomatis.
                      </div>
                    </div>
                  </div>

                  {/* App Screen Bottom CTA */}
                  <div className="pt-2">
                    <button className="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs tracking-wide transition-colors">
                      DEMO EXPERIENCE
                    </button>
                  </div>

                </div>

              </div>

              {/* FLOATING GLASS BADGES AROUND PHONE */}
              
              {/* Badge 1: Top Left */}
              <div 
                ref={badge1Ref}
                className="absolute -top-4 -left-4 sm:-left-8 glass-badge rounded-2xl p-3 sm:p-3.5 text-left flex items-center gap-3 z-30 animate-float"
              >
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">100% Secure</div>
                  <div className="text-[10px] text-slate-300">Free SSL & Backup</div>
                </div>
              </div>

              {/* Badge 2: Bottom Right */}
              <div 
                ref={badge2Ref}
                className="absolute -bottom-4 -right-4 sm:-right-8 glass-badge rounded-2xl p-3 sm:p-3.5 text-left flex items-center gap-3 z-30 animate-float-delayed"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">5.0 Star Rating</div>
                  <div className="text-[10px] text-slate-300">Over 100+ Reviews</div>
                </div>
              </div>

              {/* Badge 3: Middle Left */}
              <div 
                ref={badge3Ref}
                className="absolute top-1/2 -translate-y-1/2 -left-8 sm:-left-12 glass-badge rounded-2xl p-2.5 sm:p-3 text-left hidden sm:flex items-center gap-2.5 z-30"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-medium text-slate-200">Responsive All Screen</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

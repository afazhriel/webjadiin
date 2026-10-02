import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, PhoneCall } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppLink } from '../data/config';
import { BrandMark, BrandWordmark, BRAND_FONT_UI } from './BrandMark';

/** Static anchor list — hoisted to module scope so the scroll-spy effect can
 *  read it without depending on render order. */
const navLinks = [
  { name: 'Layanan', href: '#services' },
  { name: 'Harga', href: '#pricing' },
  { name: 'Keunggulan', href: '#benefits' },
  { name: 'Galeri 3D', href: '#gallery' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'FAQ', href: '#faq' }
];

/* ============================================================
   HEADER DESIGN TOKENS
   Kept local to this file (plain strings instead of Tailwind
   config entries) so the header polish can never leak into
   another section's colours or font stacks. The brand mark and
   wordmark live in components/BrandMark.tsx.
   ============================================================ */

/** Navigation / phone / CTA face: Inter (BRAND_FONT_UI, shared with the footer). */
const FONT_UI = BRAND_FONT_UI;

/** Height of the fixed header, mirrored by `scroll-margin-top` in index.css. */
const HEADER_PROBE_OFFSET = 140;

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: marks the nav item whose section currently owns the viewport.
  // Uses rect+scrollY (not offsetTop) so it stays correct no matter which
  // ancestor ends up being the offsetParent.
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));

    const resolveActiveSection = () => {
      // At the very bottom the last anchor can never reach the probe line,
      // so pin it explicitly instead of leaving the last item inactive.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      const probe = window.scrollY + HEADER_PROBE_OFFSET;
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top + window.scrollY <= probe) current = id;
      }
      setActiveSection(current);
    };

    resolveActiveSection();
    window.addEventListener('scroll', resolveActiveSection, { passive: true });
    window.addEventListener('resize', resolveActiveSection);
    return () => {
      window.removeEventListener('scroll', resolveActiveSection);
      window.removeEventListener('resize', resolveActiveSection);
    };
  }, []);

  // Close the mobile menu as soon as the desktop layout takes over.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) setIsMobileMenuOpen(false);
    };
    handleChange(mq);
    mq.addEventListener('change', handleChange as (e: MediaQueryListEvent) => void);
    return () => mq.removeEventListener('change', handleChange as (e: MediaQueryListEvent) => void);
  }, []);

  // Prevent background scroll while the mobile sheet is open.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-[16px] border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled
          ? 'bg-[rgba(2,2,56,0.96)] border-white/[0.12] shadow-[0_10px_34px_rgba(0,0,0,0.38)]'
          : 'bg-[rgba(2,2,56,0.88)] border-white/[0.08]'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-[72px] sm:h-[76px] flex items-center justify-between gap-3 sm:gap-4">

        {/* 1. BRAND LOCKUP — strongest element on the left.
            No plate, no tile, no glow: the mark sits directly on the header
            navy and carries the brand on its own. Two colours only —
            white mark, electric-blue period on the wordmark. */}
        <a href="#" onClick={closeMenu} className="group flex items-center gap-2.5 min-w-0 shrink">
          <BrandMark className="w-[34px] h-[34px] flex-shrink-0 text-white transition-transform duration-200 group-hover:scale-105" />
          <BrandWordmark className="text-[19px] sm:text-[20px] lg:text-[21px] font-extrabold tracking-[-0.03em]" />
        </a>

        {/* 3. NAVIGATION — readable, never grey */}
        <div className="hidden md:flex items-center gap-4 lg:gap-7 xl:gap-8 flex-shrink-0">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(id)}
                aria-current={isActive ? 'true' : undefined}
                className={`relative inline-flex items-center justify-center min-h-[44px] px-0.5 whitespace-nowrap text-[13px] lg:text-sm transition-colors duration-200 after:absolute after:left-0 after:right-0 after:bottom-2 after:h-[2px] after:rounded-full after:bg-[#0EA5FF] after:transition-opacity after:duration-200 ${
                  isActive
                    ? 'text-[#38BDF8] font-semibold after:opacity-100'
                    : 'text-white/[0.72] hover:text-white after:opacity-0 hover:after:opacity-60'
                }`}
                style={{ fontFamily: FONT_UI }}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* 2 + 4. PRIMARY CTA, then secondary phone button */}
        <div className="hidden md:flex items-center gap-2.5 lg:gap-3 flex-shrink-0">
          <a
            href={getWhatsAppLink("Halo Hafi Digital, saya ingin bertanya mengenai jasa pembuatan website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center justify-center min-h-[44px] gap-2 px-4 rounded-xl border border-[rgba(14,165,255,0.22)] bg-[rgba(14,165,255,0.08)] text-white font-semibold text-xs hover:bg-[rgba(14,165,255,0.14)] hover:border-[rgba(14,165,255,0.40)] transition-colors duration-200"
            style={{ fontFamily: FONT_UI }}
          >
            <PhoneCall className="w-3.5 h-3.5 shrink-0 text-[#38BDF8]" />
            <span>{BRAND_CONFIG.phone}</span>
          </a>

          <a
            href={getWhatsAppLink("Halo Hafi Digital, saya ingin pesan website untuk bisnis saya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] gap-2 px-4 lg:px-5 py-2.5 rounded-xl text-white font-bold text-xs sm:text-[13px] shadow-[0_8px_24px_rgba(14,165,255,0.22)] hover:-translate-y-px hover:shadow-[0_12px_28px_rgba(14,165,255,0.30)] active:translate-y-0 active:scale-[0.98] transition-all duration-200 bg-[linear-gradient(135deg,#0EA5FF,#2563EB)] hover:bg-[linear-gradient(135deg,#38BDF8,#4F46E5)]"
            style={{ fontFamily: FONT_UI }}
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>Konsultasi Gratis</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden shrink-0 w-11 h-11 -mr-2 rounded-xl bg-[rgba(14,165,255,0.08)] border border-[rgba(14,165,255,0.22)] text-white hover:bg-[rgba(14,165,255,0.14)] hover:border-[rgba(14,165,255,0.40)] flex items-center justify-center transition-colors duration-200"
          aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay — same navy language as the header bar */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden w-full max-w-full bg-[rgba(2,2,56,0.97)] backdrop-blur-[16px] border-b border-white/[0.08] px-4 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] max-h-[calc(100svh-72px)] overflow-y-auto overscroll-contain"
        >
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive ? 'true' : undefined}
                  className={`min-h-[48px] py-3 flex items-center text-[15px] border-b border-white/[0.07] transition-colors duration-200 ${
                    isActive ? 'text-[#38BDF8] font-semibold' : 'text-white/[0.72]'
                  }`}
                  style={{ fontFamily: FONT_UI }}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 mt-1 flex flex-col gap-3">
            <a
              href={getWhatsAppLink("Halo Hafi Digital, saya ingin pesan website.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full min-h-[48px] py-3 px-4 rounded-xl text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(14,165,255,0.22)] bg-[linear-gradient(135deg,#0EA5FF,#2563EB)]"
              style={{ fontFamily: FONT_UI }}
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Konsultasi Via WhatsApp</span>
            </a>

            <a
              href={getWhatsAppLink("Halo Hafi Digital, saya ingin bertanya mengenai jasa pembuatan website.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full min-h-[48px] py-3 px-4 rounded-xl border border-[rgba(14,165,255,0.22)] bg-[rgba(14,165,255,0.08)] text-white font-semibold text-sm text-center flex items-center justify-center gap-2 hover:bg-[rgba(14,165,255,0.14)] hover:border-[rgba(14,165,255,0.40)] transition-colors duration-200"
              style={{ fontFamily: FONT_UI }}
            >
              <PhoneCall className="w-4 h-4 shrink-0 text-[#38BDF8]" />
              <span>{BRAND_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
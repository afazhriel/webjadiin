import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, PhoneCall } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppLink } from '../data/config';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: 'Layanan', href: '#services' },
    { name: 'Harga', href: '#pricing' },
    { name: 'Keunggulan', href: '#benefits' },
    { name: 'Galeri 3D', href: '#gallery' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' }
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border py-2 sm:py-3 shadow-theme'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        
        {/* Brand Logo */}
        <a href="#" onClick={closeMenu} className="flex items-center gap-2 sm:gap-2.5 group min-w-0 min-h-[44px] flex-shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary flex-shrink-0 flex items-center justify-center text-primary-foreground font-black text-base sm:text-lg shadow-md group-hover:scale-105 transition-transform">
            N
          </div>
          <span className="text-base sm:text-lg lg:text-xl font-extrabold tracking-tight text-foreground font-sans truncate">
            {BRAND_CONFIG.name}
            <span className="text-secondary-foreground">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6 xl:gap-8 flex-shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="inline-flex items-center justify-center min-h-[44px] px-0.5 whitespace-nowrap text-xs lg:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA Action */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 flex-shrink-0">
          <a
            href={getWhatsAppLink("Halo NEXADIGITAL, saya ingin bertanya mengenai jasa pembuatan website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center justify-center min-h-[44px] gap-2 px-4 py-2.5 rounded-xl bg-accent text-accent-foreground border border-border text-xs font-semibold transition-all hover:scale-105"
          >
            <PhoneCall className="w-3.5 h-3.5 shrink-0" />
            <span>{BRAND_CONFIG.phone}</span>
          </a>

          <a
            href={getWhatsAppLink("Halo NEXADIGITAL, saya ingin pesan website untuk bisnis saya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow-theme hover:opacity-90 transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 shrink-0 fill-primary-foreground/20" />
            <span>Konsultasi Gratis</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden shrink-0 w-11 h-11 -mr-2 rounded-xl bg-card border border-border text-card-foreground hover:text-primary flex items-center justify-center transition-colors"
          aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden w-full max-w-full bg-background/97 backdrop-blur-xl border-b border-border px-4 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] max-h-[calc(100svh-4rem)] overflow-y-auto overscroll-contain"
        >
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="min-h-[48px] py-3 flex items-center text-base font-medium text-muted-foreground hover:text-foreground border-b border-border/70 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 mt-1 flex flex-col gap-3">
            <a
              href={getWhatsAppLink("Halo NEXADIGITAL, saya ingin pesan website.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm text-center flex items-center justify-center gap-2 shadow-theme"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Konsultasi Via WhatsApp</span>
            </a>

            <a
              href={getWhatsAppLink("Halo NEXADIGITAL, saya ingin bertanya mengenai jasa pembuatan website.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-accent text-accent-foreground border border-border font-semibold text-sm text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 shrink-0" />
              <span>{BRAND_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

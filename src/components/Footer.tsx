import React from 'react';
import { BRAND_CONFIG, getWhatsAppLink } from '../data/config';
import { BrandMark, BrandWordmark, BRAND_FONT, BRAND_FONT_UI } from './BrandMark';
import { MessageSquare, Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

/* ============================================================
   FOOTER — follows the same design language as the header:
   deep navy + white + electric blue, with the exact same vector
   BrandMark / BrandWordmark component used in the navbar.

   Every value here is a literal hex rather than a theme token on
   purpose: the navy/electric-blue identity is now owned by the
   header and the footer, and must not drift back to the generic
   muted-grey tokens that the other (lightweight) sections use.
   ============================================================ */

/** Column heading: Plus Jakarta Sans 800, uppercase, wide tracking. */
const HEADING_FONT = BRAND_FONT;
/** Body, links and buttons: Inter. */
const UI_FONT = BRAND_FONT_UI;

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#020238_0%,#03035E_100%)] text-[#C7D2FE]">

      {/* ==========================================================
          ATMOSPHERE — same recipe as the hero: subtle grid + two very
          soft blue blooms + one hairline arc. All decorative, all
          behind the content, and deliberately dim so the footer
          stays corporate rather than glowing.
          ========================================================== */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="absolute -top-24 left-[12%] w-[380px] h-[380px] bg-[#0EA5FF]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-32 right-[4%] w-[460px] h-[460px] bg-[#2563EB]/10 rounded-full blur-[150px] pointer-events-none" />

      <svg
        className="absolute top-0 left-0 w-full h-20 sm:h-24 pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 118C300 24 900 24 1200 118"
          stroke="#0EA5FF"
          strokeOpacity="0.18"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-0 max-w-full">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 lg:pr-10 space-y-5">
            {/* Same vector mark + wordmark as the navbar, just larger. */}
            <a href="#" className="group flex items-center gap-2.5 min-w-0 min-h-[44px]">
              <BrandMark className="w-12 h-12 flex-shrink-0 text-white transition-transform duration-200 group-hover:scale-105" />
              <BrandWordmark className="text-[23px] font-extrabold tracking-[-0.03em]" />
            </a>

            <p
              className="text-[14px] sm:text-[15px] leading-[1.7] max-w-sm"
              style={{ fontFamily: UI_FONT, color: '#C7D2FE' }}
            >
              {BRAND_CONFIG.description}
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={BRAND_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[rgba(14,165,255,0.08)] border border-[rgba(14,165,255,0.22)] flex items-center justify-center text-white hover:bg-[#0EA5FF] hover:border-[#0EA5FF] hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[rgba(14,165,255,0.08)] border border-[rgba(14,165,255,0.22)] flex items-center justify-center text-white hover:bg-[#0EA5FF] hover:border-[#0EA5FF] hover:-translate-y-0.5 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={BRAND_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[rgba(14,165,255,0.08)] border border-[rgba(14,165,255,0.22)] flex items-center justify-center text-white hover:bg-[#0EA5FF] hover:border-[#0EA5FF] hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BRAND_CONFIG.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[rgba(14,165,255,0.08)] border border-[rgba(14,165,255,0.22)] flex items-center justify-center text-white hover:bg-[#0EA5FF] hover:border-[#0EA5FF] hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:pl-10 lg:border-l lg:border-white/[0.06]">
            <h4
              className="text-[13px] sm:text-[14px] font-extrabold text-white uppercase mb-5 sm:mb-6"
              style={{ fontFamily: HEADING_FONT, letterSpacing: '0.04em' }}
            >
              Navigasi Utama
            </h4>
            <span className="block w-8 h-[3px] rounded-full bg-[#0EA5FF] mb-1" aria-hidden="true" />
            <ul className="space-y-0.5" style={{ fontFamily: UI_FONT }}>
              <li><a href="#services" className="inline-flex items-center min-h-[44px] text-[14px] font-medium text-[#C7D2FE] hover:text-[#38BDF8] transition-colors duration-200">Layanan Kami</a></li>
              <li><a href="#pricing" className="inline-flex items-center min-h-[44px] text-[14px] font-medium text-[#C7D2FE] hover:text-[#38BDF8] transition-colors duration-200">Paket &amp; Harga</a></li>
              <li><a href="#benefits" className="inline-flex items-center min-h-[44px] text-[14px] font-medium text-[#C7D2FE] hover:text-[#38BDF8] transition-colors duration-200">Keunggulan Fitur</a></li>
              <li><a href="#portfolio" className="inline-flex items-center min-h-[44px] text-[14px] font-medium text-[#C7D2FE] hover:text-[#38BDF8] transition-colors duration-200">Portfolio Karya</a></li>
              <li><a href="#faq" className="inline-flex items-center min-h-[44px] text-[14px] font-medium text-[#C7D2FE] hover:text-[#38BDF8] transition-colors duration-200">Tanya Jawab FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:pl-10 lg:border-l lg:border-white/[0.06]">
            <h4
              className="text-[13px] sm:text-[14px] font-extrabold text-white uppercase mb-5 sm:mb-6"
              style={{ fontFamily: HEADING_FONT, letterSpacing: '0.04em' }}
            >
              Solusi Layanan
            </h4>
            <span className="block w-8 h-[3px] rounded-full bg-[#0EA5FF] mb-1" aria-hidden="true" />
            <ul className="space-y-0.5" style={{ fontFamily: UI_FONT }}>
              <li><a href="#services" className="inline-flex items-center min-h-[44px] text-[14px] font-medium text-[#C7D2FE] hover:text-[#38BDF8] transition-colors duration-200">Company Profile</a></li>
              <li><a href="#services" className="inline-flex items-center min-h-[44px] text-[14px] font-medium text-[#C7D2FE] hover:text-[#38BDF8] transition-colors duration-200">Sales Landing Page</a></li>
              <li><a href="#services" className="inline-flex items-center min-h-[44px] text-[14px] font-medium text-[#C7D2FE] hover:text-[#38BDF8] transition-colors duration-200">Toko Online / E-Commerce</a></li>
              <li><a href="#services" className="inline-flex items-center min-h-[44px] text-[14px] font-medium text-[#C7D2FE] hover:text-[#38BDF8] transition-colors duration-200">Custom Web Application</a></li>
              <li><a href="#services" className="inline-flex items-center min-h-[44px] text-[14px] font-medium text-[#C7D2FE] hover:text-[#38BDF8] transition-colors duration-200">Website Care &amp; Maintenance</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:pl-10 lg:border-l lg:border-white/[0.06]">
            <h4
              className="text-[13px] sm:text-[14px] font-extrabold text-white uppercase mb-5 sm:mb-6"
              style={{ fontFamily: HEADING_FONT, letterSpacing: '0.04em' }}
            >
              Hubungi Kami
            </h4>
            <span className="block w-8 h-[3px] rounded-full bg-[#0EA5FF] mb-1" aria-hidden="true" />
            <ul className="space-y-2" style={{ fontFamily: UI_FONT }}>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 mt-1 text-[#38BDF8]" />
                {/* Contact card address: stacked so nothing is truncated */}
                <address className="min-w-0 not-italic text-[14px] text-[#C7D2FE]">
                  {BRAND_CONFIG.addressLines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 shrink-0 mt-1 text-[#25D366]" />
                <a href={`tel:${BRAND_CONFIG.phone}`} className="inline-flex items-center min-h-[36px] py-0.5 text-[14px] text-[#C7D2FE] hover:text-[#25D366] transition-colors duration-200">{BRAND_CONFIG.phone}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 shrink-0 mt-1 text-[#38BDF8]" />
                <a href={`mailto:${BRAND_CONFIG.email}`} className="inline-flex items-center min-h-[36px] py-0.5 text-[14px] text-[#C7D2FE] hover:text-[#38BDF8] transition-colors duration-200">{BRAND_CONFIG.email}</a>
              </li>
              <li className="pt-2">
                <a
                  href={getWhatsAppLink("Halo Hafi Digital, saya ingin pesan website.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl text-white font-bold text-[14px] shadow-[0_8px_24px_rgba(12,136,62,0.26)] bg-[linear-gradient(135deg,#0C883E,#075E54)] hover:bg-[linear-gradient(135deg,#0A7638,#063E48)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Chat Direct WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 sm:mt-14 pt-6 sm:pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ fontFamily: UI_FONT }}
        >
          <p className="text-center sm:text-left text-[13px] text-[#94A3B8]">&copy; 2026 {BRAND_CONFIG.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-6 gap-y-1">
            <a href="#" className="inline-flex items-center min-h-[36px] text-[13px] text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="inline-flex items-center min-h-[36px] text-[13px] text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200">Terms of Service</a>
            <a href="#" className="inline-flex items-center min-h-[36px] text-[13px] text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
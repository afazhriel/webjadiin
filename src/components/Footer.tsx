import React from 'react';
import { BRAND_CONFIG, getWhatsAppLink } from '../data/config';
import { MessageSquare, Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 max-w-full">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2 group min-w-0 min-h-[44px]">
              <div className="w-8 h-8 shrink-0 rounded-xl bg-sky-500 flex items-center justify-center text-slate-950 font-black text-base shadow-md">
                N
              </div>
              <span className="text-lg sm:text-xl font-extrabold text-white font-grotesk tracking-tight truncate">
                {BRAND_CONFIG.name}
                <span className="text-sky-400">.</span>
              </span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {BRAND_CONFIG.description} Didesain khusus dengan visual premium, daya muat super cepat, dan arsitektur conversion-focused.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={BRAND_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={BRAND_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BRAND_CONFIG.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-grotesk">Navigasi Utama</h4>
            <ul className="space-y-1 text-xs">
              <li><a href="#services" className="inline-flex items-center min-h-[44px] hover:text-sky-400 transition-colors">Layanan Kami</a></li>
              <li><a href="#pricing" className="inline-flex items-center min-h-[44px] hover:text-sky-400 transition-colors">Paket & Harga</a></li>
              <li><a href="#benefits" className="inline-flex items-center min-h-[44px] hover:text-sky-400 transition-colors">Keunggulan Fitur</a></li>
              <li><a href="#portfolio" className="inline-flex items-center min-h-[44px] hover:text-sky-400 transition-colors">Portfolio Karya</a></li>
              <li><a href="#faq" className="inline-flex items-center min-h-[44px] hover:text-sky-400 transition-colors">Tanya Jawab FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-grotesk">Solusi Layanan</h4>
            <ul className="space-y-1 text-xs">
              <li><a href="#services" className="inline-flex items-center min-h-[44px] hover:text-sky-400 transition-colors">Company Profile</a></li>
              <li><a href="#services" className="inline-flex items-center min-h-[44px] hover:text-sky-400 transition-colors">Sales Landing Page</a></li>
              <li><a href="#services" className="inline-flex items-center min-h-[44px] hover:text-sky-400 transition-colors">Toko Online / E-Commerce</a></li>
              <li><a href="#services" className="inline-flex items-center min-h-[44px] hover:text-sky-400 transition-colors">Custom Web Application</a></li>
              <li><a href="#services" className="inline-flex items-center min-h-[44px] hover:text-sky-400 transition-colors">Website Care & Maintenance</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-grotesk">Hubungi Kami</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-sky-400" />
                <span className="min-w-0">{BRAND_CONFIG.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-sky-400" />
                <a href={`tel:${BRAND_CONFIG.phone}`} className="inline-flex items-center min-h-[36px] py-0.5 hover:text-sky-400 transition-colors">{BRAND_CONFIG.phone}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 shrink-0 mt-0.5 text-sky-400" />
                <a href={`mailto:${BRAND_CONFIG.email}`} className="inline-flex items-center min-h-[36px] py-0.5 hover:text-sky-400 transition-colors">{BRAND_CONFIG.email}</a>
              </li>
              <li className="pt-1">
                <a
                  href={getWhatsAppLink("Halo NEXADIGITAL, saya ingin pesan website.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 w-full sm:w-auto px-3.5 py-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-semibold text-xs hover:bg-sky-500/20 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                  <span>Chat Direct WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">&copy; 2026 {BRAND_CONFIG.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-6 gap-y-1">
            <a href="#" className="inline-flex items-center min-h-[36px] hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="inline-flex items-center min-h-[36px] hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="inline-flex items-center min-h-[36px] hover:text-slate-400 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

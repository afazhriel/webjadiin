import React from 'react';
import { PRICING_PACKAGES, PricingPackage } from '../data/pricing';
import { Check, Sparkles, MessageSquare, HelpCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-900/90 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1 rounded-full">
            PAKET HARGA TRANSPARAN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-grotesk leading-tight">
            Investasi Terbaik Terjangkau untuk Masa Depan Bisnis Anda
          </h2>
          <p className="text-base text-slate-300">
            Tanpa biaya tersembunyi. Dapatkan hasil maksimal berkelas profesional dengan garansi penuh dan layanan maintenance.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg: PricingPackage) => {
            const isPopular = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 border-2 border-sky-400 shadow-2xl shadow-sky-500/20 lg:-translate-y-3 z-20'
                    : 'bg-slate-950/80 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-slate-950 font-black text-xs tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>PALING POPULER & DIIMPIKAN</span>
                  </div>
                )}

                <div>
                  {/* Package Title & Tagline */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-white font-grotesk tracking-wide">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing Tag */}
                  <div className="mb-8 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-xs font-semibold text-rose-400 line-through">
                      {pkg.originalPrice}
                    </div>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-3xl sm:text-4xl font-black text-white font-grotesk tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-slate-400">/sekali bayar</span>
                    </div>
                    <div className="mt-2 text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                      <span>✓ Tanpa biaya bulanan berulang</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      FASILITAS LENGKAP:
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPopular ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-sky-400'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <div className="space-y-3 pt-6 border-t border-slate-800">
                  <a
                    href={getWhatsAppLink(pkg.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-lg ${
                      isPopular
                        ? 'bg-sky-400 hover:bg-sky-300 text-slate-950 shadow-sky-400/25'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{pkg.ctaText}</span>
                  </a>

                  <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
                    <HelpCircle className="w-3 h-3 text-slate-500" />
                    <span>{pkg.supportInfo}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Project Note */}
        <div className="mt-12 text-center text-sm text-slate-400 bg-slate-950/60 p-4 rounded-2xl border border-slate-800 max-w-2xl mx-auto">
          Butuh fitur spesifik di luar paket standar? Kami siap membuatkan sistem <span className="text-sky-300 font-semibold">Custom Web App</span> sesuai kebutuhan unik bisnis Anda.{" "}
          <a href={getWhatsAppLink("Halo NEXADIGITAL, saya butuh penawaran harga custom project khusus.")} target="_blank" rel="noopener noreferrer" className="text-sky-400 underline font-semibold hover:text-sky-300">
            Hubungi Tim Teknis
          </a>
        </div>

      </div>
    </section>
  );
};

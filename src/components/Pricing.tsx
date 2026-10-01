import React from 'react';
import { PRICING_PACKAGES, PricingPackage } from '../data/pricing';
import { Check, Sparkles, MessageSquare, HelpCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-14 sm:py-20 lg:py-24 bg-background relative overflow-hidden border-b border-border">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[600px] sm:h-[600px] bg-accent/20 rounded-full blur-[110px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-widest text-accent-foreground uppercase bg-accent border border-border px-3 py-1 rounded-full">
            PAKET HARGA TRANSPARAN
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-sans leading-tight max-w-full">
            Investasi Terbaik Terjangkau untuk Masa Depan Bisnis Anda
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Tanpa biaya tersembunyi. Dapatkan hasil maksimal berkelas profesional dengan garansi penuh dan layanan maintenance.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg: PricingPackage) => {
            const isPopular = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 card-surface max-w-full ${
                  isPopular
                    ? 'bg-secondary border-2 border-primary shadow-theme lg:-translate-y-3 z-20'
                    : 'bg-card border border-border hover:border-ring hover:-translate-y-1'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 max-w-[calc(100%-0.75rem)] px-3 sm:px-4 py-1 rounded-full bg-primary text-primary-foreground font-black text-[10px] sm:text-xs tracking-wide sm:tracking-wider uppercase shadow-theme flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span className="truncate">PALING POPULER & DIIMPIKAN</span>
                  </div>
                )}

                <div>
                  {/* Package Title & Tagline */}
                  <div className="mb-5 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-black text-card-foreground font-sans tracking-wide">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing Tag — inner surface tier differs per plan so the
                      featured card keeps a readable inset panel */}
                  <div className={`mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl border ${
                    isPopular ? 'bg-card border-border' : 'bg-muted/60 border-border'
                  }`}>
                    <div className="text-xs font-semibold text-destructive line-through">
                      {pkg.originalPrice}
                    </div>
                    <div className="flex flex-wrap items-baseline gap-1 mt-0.5">
                      <span className="text-2xl sm:text-4xl font-black text-card-foreground font-sans tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-[11px] sm:text-xs text-muted-foreground">/sekali bayar</span>
                    </div>
                    <div className="mt-2 text-[11px] text-accent-foreground font-medium flex items-start gap-1">
                      <span>✓ Tanpa biaya bulanan berulang</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-6 sm:mb-8">
                    <div className="text-[11px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      FASILITAS LENGKAP:
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-card-foreground">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPopular ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="min-w-0">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <div className="space-y-3 pt-5 sm:pt-6 border-t border-border">
                  <a
                    href={getWhatsAppLink(pkg.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full min-h-[48px] py-3.5 sm:py-4 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-theme ${
                      isPopular
                        ? 'bg-primary hover:opacity-90 text-primary-foreground'
                        : 'bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground border border-border'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>{pkg.ctaText}</span>
                  </a>

                  <div className="text-center text-[11px] text-muted-foreground flex items-start justify-center gap-1">
                    <HelpCircle className="w-3 h-3 shrink-0 mt-0.5 text-muted-foreground" />
                    <span>{pkg.supportInfo}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Project Note */}
        <div className="mt-10 sm:mt-12 text-center text-xs sm:text-sm text-muted-foreground bg-secondary p-4 rounded-xl border border-border max-w-2xl mx-auto shadow-theme">
          Butuh fitur spesifik di luar paket standar? Kami siap membuatkan sistem <span className="text-accent-foreground font-semibold">Custom Web App</span> sesuai kebutuhan unik bisnis Anda.{" "}
          <a href={getWhatsAppLink("Halo Hafi Digital, saya butuh penawaran harga custom project khusus.")} target="_blank" rel="noopener noreferrer" className="text-accent-foreground underline font-semibold hover:opacity-80">
            Hubungi Tim Teknis
          </a>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { SERVICES, ServiceItem } from '../data/services';
import { Building2, Zap, ShoppingBag, Code2, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Building2,
  Zap,
  ShoppingBag,
  Code2,
  ShieldCheck
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-14 sm:py-20 lg:py-24 bg-background relative overflow-hidden border-b border-border">
      
      {/* Background Lights */}
      <div className="absolute top-1/3 -left-40 w-72 h-72 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-widest text-accent-foreground uppercase bg-accent border border-border px-3 py-1 rounded-full">
            SOLUSI DARI KAMI
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-sans leading-tight max-w-full">
            Layanan Pembuatan Website & Digital Presence Profesional
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan ekosistem solusi digital terlengkap, dikerjakan oleh tim teknis & UI/UX designer berpengalaman.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {SERVICES.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.icon] || Building2;
            // Featured service gets a tinted surface + primary icon/badge so the
            // hierarchy is readable without turning every card blue.
            const isFeatured = service.badge === 'Most Popular';

            return (
              <div
                key={service.id}
                className={`group relative rounded-xl border p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-ring card-surface max-w-full ${
                  isFeatured
                    ? 'bg-secondary border-border'
                    : 'bg-card border-border'
                }`}
              >
                {/* Top Badge if any */}
                {service.badge && (
                  <div className="absolute top-5 right-5 sm:top-6 sm:right-6 max-w-[55%]">
                    <span className={`block text-[10px] sm:text-[11px] font-bold border px-2.5 sm:px-3 py-1 rounded-full truncate ${
                      isFeatured
                        ? 'bg-primary text-primary-foreground border-transparent'
                        : 'bg-accent text-accent-foreground border-border'
                    }`}>
                      {service.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Service Icon — hierarchy: normal = secondary, featured = primary */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl border flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform ${
                    isFeatured
                      ? 'bg-primary text-primary-foreground border-transparent'
                      : 'bg-secondary text-secondary-foreground border-border group-hover:bg-accent group-hover:text-accent-foreground'
                  }`}>
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-2xl font-bold text-card-foreground font-sans mb-2 sm:mb-3 group-hover:text-accent-foreground transition-colors max-w-full">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5 sm:mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-border mb-5 sm:mb-6">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[11px] sm:text-xs text-muted-foreground">
                        <Check className="w-4 h-4 text-accent-foreground shrink-0 mt-0.5" />
                        <span className="min-w-0">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer & Action */}
                <div className="pt-4 space-y-4">
                  <div className="text-[11px] text-muted-foreground italic bg-muted/60 p-2.5 rounded-xl border border-border">
                    <span className="font-semibold text-foreground">Rekomendasi:</span> {service.recommendedFor}
                  </div>

                  <a
                    href={getWhatsAppLink(`Halo Hafi Digital, saya berminat dengan layanan ${service.title}. Mohon info harga & prosedurnya.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full min-h-[48px] py-3 rounded-xl font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-2 group/btn ${
                      isFeatured
                        ? 'bg-primary text-primary-foreground hover:opacity-90'
                        : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 shrink-0 group/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

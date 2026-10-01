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
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background Lights */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1 rounded-full">
            SOLUSI DARI KAMI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-grotesk leading-tight">
            Layanan Pembuatan Website & Digital Presence Profesional
          </h2>
          <p className="text-base text-slate-300">
            Kami menyediakan ekosistem solusi digital terlengkap, dikerjakan oleh tim teknis & UI/UX designer berpengalaman.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.icon] || Building2;
            
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10"
              >
                {/* Top Badge if any */}
                {service.badge && (
                  <div className="absolute top-6 right-6">
                    <span className="text-[11px] font-bold text-sky-300 bg-sky-500/15 border border-sky-500/30 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Service Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-blue-600/20 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white font-grotesk mb-3 group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-6">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer & Action */}
                <div className="pt-4 space-y-4">
                  <div className="text-[11px] text-slate-400 italic bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <span className="font-semibold text-slate-300">Rekomendasi:</span> {service.recommendedFor}
                  </div>

                  <a
                    href={getWhatsAppLink(`Halo NEXADIGITAL, saya berminat dengan layanan ${service.title}. Mohon info harga & prosedurnya.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-slate-800 hover:bg-sky-500 text-slate-200 hover:text-slate-950 font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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

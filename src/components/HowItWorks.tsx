import React from 'react';
import { MessageSquareCode, FileCheck2, Laptop, Rocket } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Konsultasi & Strategi",
      description: "Diskusi kebutuhan bisnis, target audiens, serta rekomendasi struktur website terbaik.",
      icon: MessageSquareCode
    },
    {
      number: "02",
      title: "Pengumpulan Brief",
      description: "Penyerahan logo, materi teks, foto produk, dan referensi desain sesuai preferensi Anda.",
      icon: FileCheck2
    },
    {
      number: "03",
      title: "Proses Development",
      description: "Tim ahli merancang UI/UX, coding responsive, optimasi SEO, dan integrasi fitur.",
      icon: Laptop
    },
    {
      number: "04",
      title: "Review & Launch",
      description: "Uji coba penuh di semua perangkat, revisi final, dan peluncuran resmi website Anda.",
      icon: Rocket
    }
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 atm-deepblue relative overflow-hidden border-b border-white/[0.06]">
      {/* Atmosphere: deep blue with an indigo bloom centred on the step
          timeline, plus two hairline rails that echo the connector line. */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] sm:w-[680px] sm:h-[680px] atm-bloom-indigo opacity-80 pointer-events-none" />
      <div className="atm-deco-lg absolute inset-x-0 top-1/2 h-[340px] -translate-y-1/2 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 340" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <path d="M0 170C300 40 900 300 1200 170" stroke="#6366F1" strokeOpacity="0.16" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 space-y-3 sm:space-y-4">
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-widest text-accent-foreground uppercase bg-accent border border-border px-3 py-1 rounded-full">
            ALUR KERJA
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-sans leading-tight max-w-full">
            4 Langkah Mudah Memiliki Website Profesional
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Proses transparan, terstruktur, dan cepat tanpa menyita banyak waktu berharga Anda.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative max-w-full">
          
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-12 right-12 h-[2px] bg-border -translate-y-8 z-0 opacity-60" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative z-10 p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-ring transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group card-surface max-w-full"
              >
                {/* Step Icon — sequential steps share the neutral tier on purpose */}
                <div className="w-16 h-16 rounded-xl bg-secondary border border-border flex items-center justify-center text-secondary-foreground font-extrabold text-xl mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>

                <span className="text-xs font-bold text-accent-foreground tracking-wider uppercase mb-1 font-sans">
                  LANGKAH {step.number}
                </span>

                <h3 className="text-lg font-bold text-card-foreground font-sans mb-2 group-hover:text-accent-foreground transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-5 sm:space-y-6 relative pl-5 sm:pl-6 border-l-2 border-border max-w-full">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative pl-3 sm:pl-4 group">
                {/* Node Bullet */}
                <div className="absolute -left-[30px] sm:-left-[35px] top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-card border-2 border-ring flex items-center justify-center text-accent-foreground text-[11px] sm:text-xs font-bold">
                  {step.number}
                </div>

                <div className="p-4 sm:p-6 rounded-xl bg-card border border-border card-surface max-w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 shrink-0 text-accent-foreground" />
                    <h3 className="text-base font-bold text-card-foreground font-sans min-w-0">{step.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

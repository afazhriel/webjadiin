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
    <section className="py-24 bg-slate-950 relative border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1 rounded-full">
            ALUR KERJA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-grotesk leading-tight">
            4 Langkah Mudah Memiliki Website Profesional
          </h2>
          <p className="text-base text-slate-300">
            Proses transparan, terstruktur, dan cepat tanpa menyita banyak waktu berharga Anda.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative">
          
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-sky-500 via-blue-500 to-sky-400 -translate-y-8 z-0 opacity-40" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative z-10 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group"
              >
                {/* Step Number Circle */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-slate-950 to-slate-900 border-2 border-sky-500/50 flex items-center justify-center text-sky-400 font-extrabold text-xl mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>

                <span className="text-xs font-bold text-sky-400 tracking-wider uppercase mb-1 font-grotesk">
                  LANGKAH {step.number}
                </span>

                <h3 className="text-lg font-bold text-white font-grotesk mb-2 group-hover:text-sky-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6 relative pl-6 border-l-2 border-sky-500/30">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative pl-4 group">
                {/* Node Bullet */}
                <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center text-sky-400 text-xs font-bold">
                  {step.number}
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-sky-400" />
                    <h3 className="text-base font-bold text-white font-grotesk">{step.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

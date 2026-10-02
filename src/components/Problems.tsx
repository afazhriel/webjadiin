import React, { useState } from 'react';
import { AlertCircle, UserX, Globe, Layers, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export const Problems: React.FC = () => {
  const problems = [
    {
      icon: UserX,
      title: "Sulit Mendapatkan Kepercayaan Pelanggan",
      description: "Calon pembeli sering meragukan kredibilitas bisnis Anda karena tidak memiliki alamat digital resmi yang terlihat profesional dan tepercaya."
    },
    {
      icon: Globe,
      title: "Belum Memiliki Website Profesional",
      description: "Hanya mengandalkan sosial media membuat bisnis Anda terlihat seadanya, terbatasi oleh algoritma platform, dan mudah tersaing lawan."
    },
    {
      icon: Layers,
      title: "Informasi Bisnis Tersebar & Berantakan",
      description: "Pelanggan kesulitan menemukan informasi produk, harga, dan profil usaha secara terstruktur, menyebabkan calon pembeli beralih ke kompetitor."
    },
    {
      icon: AlertCircle,
      title: "Sulit Mengubah Visitor Menjadi Customer",
      description: "Trafik pengunjung sosial media tinggi tetapi tingkat penjualan (konversi) rendah karena tidak ada landing page dengan alur penawaran yang terarah."
    }
  ];

  /* Accent per card, drawn from the Hafi Digital palette. Fed to the
     stylesheet as --card-accent so all four cards share one interaction
     rule set instead of four duplicated blocks of CSS. */
  const accents = ['#0EA5FF', '#2563EB', '#6366F1', '#3B82F6'];

  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-14 sm:py-20 atm-teal relative overflow-hidden border-b border-white/[0.06]">
      {/* Atmosphere: cool teal-cast light, desaturated so this block still
          reads as the "problem" space without turning murky. */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -left-24 w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] atm-bloom-teal pointer-events-none" />
      <div className="absolute -bottom-28 right-0 w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] atm-bloom-cyan opacity-60 pointer-events-none" />
      <div className="absolute inset-0 atm-vignette pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-widest text-destructive-foreground uppercase bg-destructive border border-destructive/20 px-3 py-1 rounded-full">
            MASALAH UTAMA BISNIS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight font-sans max-w-full">
            Bisnis Bagus, Tapi Belum Terlihat Profesional Secara Online?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Tanpa website profesional, potensi penjualan bisnis Anda bisa terhambat hingga 70%. Apakah bisnis Anda mengalami kendala berikut?
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            const isActive = activeCard === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCard(idx)}
                aria-pressed={isActive}
                style={{ '--card-accent': accents[idx] } as React.CSSProperties}
                data-active={isActive ? 'true' : 'false'}
                className="problem-card p-5 sm:p-6 lg:p-7 rounded-xl relative overflow-hidden max-w-full"
              >
                {/* Active indicator: single left accent rail */}
                <span className="problem-card-rail" aria-hidden="true" />

                {/* Accent Highlight */}
                <span className="problem-card-corner absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 rounded-bl-full pointer-events-none" />

                <span className="flex items-start gap-4 sm:gap-5">
                  {/* Icon container — driven by the card's own accent */}
                  <span className="problem-card-icon w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                  <span className="block space-y-2 min-w-0">
                    <h3 className="problem-card-title text-lg sm:text-xl font-bold text-card-foreground font-sans">
                      {problem.title}
                    </h3>
                    <span className="block text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {problem.description}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom Solution Transition Banner */}
        <div className="mt-10 sm:mt-16 p-5 sm:p-8 rounded-xl bg-secondary border border-border text-center flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-theme">
          <div className="text-left space-y-1 w-full sm:w-auto">
            <h4 className="text-lg sm:text-xl font-bold text-foreground font-sans max-w-full">
              Jangan Biarkan Kompetitor Mengambil Pelanggan Anda
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Ubah masalah di atas menjadi peluang emas dengan website baru berstandar tinggi dari Hafi Digital.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Halo Hafi Digital, saya ingin mengatasi masalah website bisnis saya dan konsultasi gratis.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] px-5 sm:px-6 py-3.5 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-bold text-sm flex items-center justify-center gap-2 shrink-0 transition-all active:scale-95 shadow-theme"
          >
            <span>Dapatkan Solusinya</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};

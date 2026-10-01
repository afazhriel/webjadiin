import React from 'react';
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

  return (
    <section className="py-14 sm:py-20 bg-muted/40 relative border-b border-border">
      <div className="max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8">
        
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
            return (
              <div
                key={idx}
                className="p-5 sm:p-8 rounded-xl bg-card border border-border hover:border-destructive/40 transition-all duration-300 relative overflow-hidden group shadow-theme max-w-full"
              >
                {/* Accent Highlight */}
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-destructive/5 rounded-bl-full pointer-events-none group-hover:bg-destructive/10 transition-colors" />

                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center text-destructive shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="space-y-2 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-card-foreground font-sans group-hover:text-destructive transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Solution Transition Banner */}
        <div className="mt-10 sm:mt-16 p-5 sm:p-8 rounded-xl bg-accent border border-border text-center flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-theme">
          <div className="text-left space-y-1 w-full sm:w-auto">
            <h4 className="text-lg sm:text-xl font-bold text-accent-foreground font-sans max-w-full">
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

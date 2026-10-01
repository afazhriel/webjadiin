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
    <section className="py-20 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-rose-400 uppercase bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full">
            MASALAH UTAMA BISNIS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-grotesk">
            Bisnis Bagus, Tapi Belum Terlihat Profesional Secara Online?
          </h2>
          <p className="text-base text-slate-300">
            Tanpa website profesional, potensi penjualan bisnis Anda bisa terhambat hingga 70%. Apakah bisnis Anda mengalami kendala berikut?
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-950/70 border border-slate-800 hover:border-rose-500/40 transition-all duration-300 relative overflow-hidden group shadow-lg"
              >
                {/* Accent Highlight */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-bl-full pointer-events-none group-hover:bg-rose-500/10 transition-colors" />

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-grotesk group-hover:text-rose-300 transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Solution Transition Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 border border-sky-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left space-y-1">
            <h4 className="text-xl font-bold text-white font-grotesk">
              Jangan Biarkan Kompetitor Mengambil Pelanggan Anda
            </h4>
            <p className="text-sm text-slate-300">
              Ubah masalah di atas menjadi peluang emas dengan website baru berstandar tinggi dari NEXADIGITAL.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Halo NEXADIGITAL, saya ingin mengatasi masalah website bisnis saya dan konsultasi gratis.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm flex items-center gap-2 shrink-0 transition-all hover:scale-105 active:scale-95 shadow-md shadow-sky-500/20"
          >
            <span>Dapatkan Solusinya</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

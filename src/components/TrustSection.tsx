import React from 'react';
import { Award, Users, CheckCircle, Star } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const stats = [
    {
      value: "100+",
      label: "Project Website Selesai",
      subtext: "Company Profile, Landing Page, & E-Commerce",
      icon: CheckCircle
    },
    {
      value: "98.9%",
      label: "Tingkat Kepuasan Klien",
      subtext: "Berdasarkan ulasan positif dan garansi kepuasan",
      icon: Star
    },
    {
      value: "5+ Thn",
      label: "Pengalaman Industri",
      subtext: "Pengalaman mendalam di digital agency & UI/UX",
      icon: Award
    },
    {
      value: "2.5s",
      label: "Rata-rata Speed Loading",
      subtext: "Teroptimasi ultra-fast untuk kenyamanan visitor",
      icon: Users
    }
  ];

  const clientLogos = [
    "Apex Logistics",
    "Aura Skincare",
    "Verve Studio",
    "FinPulse Capital",
    "OmniHealth",
    "Kopi Nusantara"
  ];

  return (
    <section className="relative py-16 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
            TRUST & SOCIAL PROOF
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 font-grotesk">
            Solusi Digital Tepercaya untuk Membantu Bisnis Berkembang
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Dipercaya oleh puluhan brand ternama, bisnis nasional, dan perusahaan berkembang di Indonesia.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white font-grotesk tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Brand Badges */}
        <div className="mt-14 pt-8 border-t border-slate-900/80">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
            DILETAK KAN DI PORTFOLIO UNGGULAN KLIEN KAMI
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70">
            {clientLogos.map((client, i) => (
              <span key={i} className="text-sm sm:text-base font-bold text-slate-400 hover:text-sky-300 transition-colors tracking-wide font-grotesk">
                {client}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export const FinalCTA: React.FC = () => {
  const handleScrollToPricing = () => {
    const el = document.getElementById("pricing");
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-gradient-to-br from-sky-950 via-slate-900 to-sky-950 border-2 border-sky-400/40 p-10 sm:p-16 text-center space-y-8 shadow-2xl card-physical-depth">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>TRANSFORMASI DIGITAL SEKARANG</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-grotesk leading-tight max-w-4xl mx-auto">
            Siap Membuat Bisnis Anda Terlihat Lebih Profesional?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Jangan tunggu hingga kompetitor mendahului Anda. Dapatkan penawaran website eksklusif dengan garansi hasil maksimal dan dukungan penuh.
          </p>

          {/* Quick Value Proof */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300 pt-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Garansi Garansi Garansi Maintenance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Gratis Domain & Hosting 1 Thn</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Proses Cepat 3-7 Hari</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink("Halo NEXADIGITAL, saya siap mulai konsultasi untuk pembuatan website bisnis.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-black text-base flex items-center justify-center gap-3 shadow-xl shadow-sky-500/30 transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950/20" />
              <span>Mulai Konsultasi Gratis</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={handleScrollToPricing}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-base border border-slate-700 transition-all active:scale-95"
            >
              Lihat Paket & Harga
            </button>
          </div>

          <div className="text-xs text-slate-400 flex items-center justify-center gap-1.5 pt-2">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Tanpa komitmen awal — konsultasi 100% Bebas Biaya</span>
          </div>

        </div>

      </div>
    </section>
  );
};

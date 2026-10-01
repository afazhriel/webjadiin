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
    <section className="py-14 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[700px] sm:h-[700px] bg-accent/25 rounded-full blur-[130px] sm:blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-full rounded-3xl bg-gradient-to-br from-primary/30 via-card to-accent border-2 border-ring p-6 sm:p-10 lg:p-16 text-center space-y-6 sm:space-y-8 shadow-2xl card-physical-depth">
          
          <div className="inline-flex max-w-full items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-primary text-primary-foreground border border-transparent font-bold text-[10px] sm:text-xs uppercase tracking-wide sm:tracking-wider">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>TRANSFORMASI DIGITAL SEKARANG</span>
          </div>

          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black text-foreground font-grotesk leading-tight max-w-4xl mx-auto">
            Siap Membuat Bisnis Anda Terlihat Lebih Profesional?
          </h2>

          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Jangan tunggu hingga kompetitor mendahului Anda. Dapatkan penawaran website eksklusif dengan garansi hasil maksimal dan dukungan penuh.
          </p>

          {/* Quick Value Proof */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground pt-2">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
              <span className="text-left sm:text-center">Garansi Garansi Garansi Maintenance</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
              <span className="text-left sm:text-center">Gratis Domain & Hosting 1 Thn</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
              <span className="text-left sm:text-center">Proses Cepat 3-7 Hari</span>
            </div>
          </div>

          {/* Action CTAs — primary / secondary hierarchy */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href={getWhatsAppLink("Halo Hafi Digital, saya siap mulai konsultasi untuk pembuatan website bisnis.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[52px] px-6 sm:px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 font-black text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 shadow-theme transition-all active:scale-95"
            >
              <MessageSquare className="w-5 h-5 shrink-0 fill-primary-foreground/20" />
              <span>Mulai Konsultasi Gratis</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>

            <button
              onClick={handleScrollToPricing}
              className="w-full sm:w-auto min-h-[52px] px-6 sm:px-8 py-4 rounded-xl bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground font-bold text-sm sm:text-base border border-border transition-all active:scale-95"
            >
              Lihat Paket & Harga
            </button>
          </div>

          <div className="text-[11px] sm:text-xs text-muted-foreground flex items-start sm:items-center justify-center gap-1.5 pt-2 text-center">
            <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 sm:mt-0 text-accent-foreground" />
            <span>Tanpa komitmen awal — konsultasi 100% Bebas Biaya</span>
          </div>

        </div>

      </div>
    </section>
  );
};

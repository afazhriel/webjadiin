import React, { useState, useEffect } from 'react';
import { PROMO_DEADLINE, getWhatsAppLink } from '../data/config';
import { Tag, Clock, ArrowRight, MessageSquare, Gift, CheckCircle2 } from 'lucide-react';

export const Promotion: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = PROMO_DEADLINE - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const promoBonus = [
    "Gratis Registrasi Domain (.com / .id) 1 Tahun",
    "Gratis Cloud Hosting NVMe High-Speed 1 Tahun",
    "Gratis Sertifikat SSL Keamanan (HTTPS)",
    "Free Bonus Integrasi Chat WhatsApp Otomatis",
    "Free Garansi & Pendampingan Penuh Maintenance"
  ];

  return (
    <section className="py-14 sm:py-20 bg-background relative overflow-hidden border-b border-border">
      
      {/* Visual Background Lighting */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-[110px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative max-w-full rounded-xl bg-accent/30 border-2 border-border p-5 sm:p-12 lg:p-16 shadow-theme overflow-hidden">
          
          {/* Top Promo Tag */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-border">
            <div className="inline-flex max-w-full items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg sm:rounded-full bg-destructive text-destructive-foreground font-bold text-[10px] sm:text-xs uppercase tracking-wide sm:tracking-wider">
              <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>PROMO SPESIAL OKTOBER 2026 — DISKON HINGGA 45%</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-accent-foreground">
              <Gift className="w-4 h-4 shrink-0 text-primary" />
              <span>Sisa Kuota: Terbatas 7 Slot Bulan Ini</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              <h2 className="text-2xl sm:text-5xl font-extrabold text-foreground font-sans leading-tight max-w-full">
                Klaim Penawaran Pembuatan Website Profesional Hari Ini!
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Dapatkan paket pembuatan website berkinerja tinggi dengan potongan harga khusus dan bonus eksklusif bernilai jutaan rupiah.
              </p>

              {/* Bonus List */}
              <div className="space-y-2.5 pt-2">
                <div className="text-[11px] sm:text-xs font-bold text-primary uppercase tracking-wider">
                  BONUS GRATIS TERMASUK:
                </div>
                {promoBonus.map((bonus, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                    <span className="min-w-0">{bonus}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={getWhatsAppLink("Halo Hafi Digital, saya ingin klaim Promo Spesial Oktober 2026 dan mengambil slot diskon.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-4 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-theme transition-all hover:scale-105 active:scale-95"
                >
                  <MessageSquare className="w-5 h-5 shrink-0 fill-primary-foreground/20" />
                  <span>Ambil Promo Spesial Sekarang</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>

            {/* Right Column: REAL RUNNING COUNTDOWN TIMER CARD */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md p-4 sm:p-8 rounded-xl bg-card border border-border text-center space-y-5 sm:space-y-6 shadow-theme backdrop-blur-xl">
                
                <div className="flex items-center justify-center gap-2 text-destructive font-bold text-[10px] sm:text-xs uppercase tracking-widest">
                  <Clock className="w-4 h-4 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>PROMO BERAKHIR DALAM:</span>
                </div>

                {/* Countdown Numbers Grid */}
                <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
                  {[
                    { label: "Hari", value: timeLeft.days },
                    { label: "Jam", value: timeLeft.hours },
                    { label: "Menit", value: timeLeft.minutes },
                    { label: "Detik", value: timeLeft.seconds }
                  ].map((item, idx) => (
                    <div key={idx} className="p-2 sm:p-4 rounded-xl bg-muted border border-border flex flex-col items-center justify-center min-w-0">
                      <span className="text-xl sm:text-3xl font-black text-primary font-sans tabular-nums">
                        {String(item.value).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-muted-foreground font-semibold uppercase mt-1 truncate max-w-full">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-accent border border-border text-[11px] sm:text-xs text-accent-foreground font-medium">
                  ⚡ Penawaran ini otomatis diperbarui setelah kuota habis.
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

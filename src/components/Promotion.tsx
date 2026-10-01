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
        // Fallback if deadline reached: keep 00:00:00 or active state
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
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      
      {/* Visual Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-950/40 via-blue-900/30 to-slate-950 opacity-80" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-sky-500/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-sky-950 via-slate-900 to-sky-950 border-2 border-sky-500/40 p-8 sm:p-12 lg:p-16 card-physical-depth overflow-hidden">
          
          {/* Top Promo Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-sky-500/20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 font-bold text-xs uppercase tracking-wider">
              <Tag className="w-4 h-4" />
              <span>PROMO SPESIAL OKTOBER 2026 — DISKON HINGGA 45%</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-sky-300">
              <Gift className="w-4 h-4 text-amber-400" />
              <span>Sisa Kuota: Terbatas 7 Slot Bulan Ini</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-grotesk leading-tight">
                Klaim Penawaran Pembuatan Website Profesional Hari Ini!
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                Dapatkan paket pembuatan website berkinerja tinggi dengan potongan harga khusus dan bonus eksklusif bernilai jutaan rupiah.
              </p>

              {/* Bonus List */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  BONUS GRATIS TERMASUK:
                </div>
                {promoBonus.map((bonus, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{bonus}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href={getWhatsAppLink("Halo NEXADIGITAL, saya ingin klaim Promo Spesial Oktober 2026 dan mengambil slot diskon.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-sky-500/25 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageSquare className="w-5 h-5 fill-slate-950/20" />
                  <span>Ambil Promo Spesial Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: REAL RUNNING COUNTDOWN TIMER CARD */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-sky-500/30 text-center space-y-6 shadow-2xl backdrop-blur-xl">
                
                <div className="flex items-center justify-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-widest">
                  <Clock className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>PROMO BERAKHIR DALAM:</span>
                </div>

                {/* Countdown Numbers Grid */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {[
                    { label: "Hari", value: timeLeft.days },
                    { label: "Jam", value: timeLeft.hours },
                    { label: "Menit", value: timeLeft.minutes },
                    { label: "Detik", value: timeLeft.seconds }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center">
                      <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-sky-300 font-grotesk">
                        {String(item.value).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase mt-1">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs text-sky-300 font-medium">
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

import React from 'react';
import { Globe, ShieldCheck, Wrench, ListChecks } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const deliverables = [
    {
      value: "1 Tahun",
      label: "Domain & Hosting",
      subtext: "Sudah termasuk saat Anda memesan paket website.",
      icon: Globe,
      featured: true
    },
    {
      value: "HTTPS",
      label: "Koneksi Aman",
      subtext: "Sertifikat SSL aktif di setiap halaman website.",
      icon: ShieldCheck
    },
    {
      value: "1-6 Bln",
      label: "Masa Perawatan",
      subtext: "Sesuai paket, termasuk backup dan pembaruan.",
      icon: Wrench
    },
    {
      value: "4",
      label: "Langkah Pengerjaan",
      subtext: "Diskusi, desain, development, lalu rilis.",
      icon: ListChecks
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
    <section className="relative py-14 sm:py-16 atm-bridge overflow-hidden border-b border-white/[0.06]">
      {/* Atmosphere: quiet cyan bloom bridging the hero into the navy field. */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute -top-28 left-1/4 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] atm-bloom-cyan pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-9 sm:mb-12">
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-widest text-accent-foreground uppercase bg-accent border border-border px-3 py-1 rounded-full">
            YANG SUDAH TERMASUK
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-foreground mt-3 font-sans leading-tight max-w-full">
            Yang Sudah Termasuk di Setiap Project
          </h2>
          <p className="text-xs sm:text-base text-muted-foreground mt-2">
            Bukan janji angka. Ini bagian yang benar-benar kami kerjakan dan sertakan.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            const isFeatured = item.featured === true;
            return (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-xl border hover:border-ring transition-all duration-300 hover:-translate-y-1 group card-surface max-w-full ${
                  isFeatured ? 'bg-secondary border-border' : 'bg-card border-border'
                }`}
              >
                {/* Icon container tiers: important = primary, normal = secondary */}
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                  isFeatured
                    ? 'bg-primary text-primary-foreground border-transparent'
                    : 'bg-secondary text-secondary-foreground border-border group-hover:bg-accent group-hover:text-accent-foreground'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-4xl font-black text-card-foreground font-sans tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-foreground mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Brand Badges */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-border">
          <p className="text-center text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5 sm:mb-6 px-4">
            PROJECT YANG PERNAH KAMI KERJAKAN
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-8 lg:gap-12 gap-y-3 opacity-80">
            {clientLogos.map((client, i) => (
              <span key={i} className="text-xs sm:text-base font-bold text-muted-foreground hover:text-foreground transition-colors tracking-wide font-sans">
                {client}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

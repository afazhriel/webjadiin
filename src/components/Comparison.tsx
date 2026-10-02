import React from 'react';
import { Check, Minus } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

interface MatrixRow {
  feature: string;
  starter: boolean | string;
  professional: boolean | string;
  business: boolean | string;
}

export const Comparison: React.FC = () => {
  const comparisonMatrix: MatrixRow[] = [
    { feature: "Jumlah halaman", starter: "1 halaman", professional: "hingga 7 halaman", business: "jumlah halaman bebas" },
    { feature: "Tampilan di HP dan Komputer", starter: true, professional: true, business: true },
    { feature: "Domain (.com / .id)", starter: "Termasuk 1 tahun", professional: "Termasuk 1 tahun", business: "Termasuk 1 tahun" },
    { feature: "Hosting", starter: "Standar", professional: "Kapasitas lebih besar", business: "Kapasitas terbesar" },
    { feature: "Tombol WhatsApp", starter: true, professional: true, business: true },
    { feature: "Formulir kontak", starter: false, professional: true, business: true },
    { feature: "Penulisan teks halaman", starter: false, professional: true, business: true },
    { feature: "SEO dasar", starter: false, professional: true, business: true },
    { feature: "Katalog produk dan keranjang", starter: false, professional: false, business: true },
    { feature: "Pembayaran online", starter: false, professional: false, business: true },
    { feature: "Hitung ongkir otomatis", starter: false, professional: false, business: true },
    { feature: "Perkiraan waktu pengerjaan", starter: "3 - 5 Hari", professional: "5 - 7 Hari", business: "10 - 14 Hari" },
    { feature: "Perawatan setelah selesai", starter: "1 Bulan", professional: "3 Bulan", business: "6 Bulan" }
  ];

  const renderValue = (val: boolean | string, isPopular = false) => {
    if (typeof val === 'boolean') {
      return val ? (
        <div className="flex justify-center">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isPopular ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}>
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <Minus className="w-5 h-5 text-muted-foreground" />
        </div>
      );
    }
    return <span className={`text-xs font-semibold ${isPopular ? 'text-accent-foreground' : 'text-card-foreground'}`}>{val}</span>;
  };

  return (
    <section className="py-14 sm:py-20 atm-indigo-lift relative overflow-hidden border-b border-white/[0.06]">
      {/* Atmosphere: lifted indigo, the brightest structural tone on the page,
          so the comparison table reads as a focal surface. */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute -top-24 left-1/3 w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] atm-bloom-indigo pointer-events-none" />
      <div className="atm-deco-lg atm-ring absolute -bottom-40 -left-32 w-[440px] h-[440px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-widest text-accent-foreground uppercase bg-accent border border-border px-3 py-1 rounded-full">
            COCOKKAN PAKET
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground font-sans max-w-full">
            Pilih Paket yang Paling Cocok untuk Anda
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Lihat apa saja yang termasuk di setiap paket, lalu pilih yang paling sesuai dengan kebutuhan Anda.
          </p>
        </div>

        {/* Desktop / Tablet Comparison Table */}
        <div className="hidden md:block w-full max-w-full overflow-x-auto rounded-xl border border-border bg-card shadow-theme">
          <table className="w-full min-w-[560px] text-center border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-5 text-left text-sm font-bold text-card-foreground uppercase tracking-wider w-2/5">Yang Anda Dapatkan</th>
                <th className="p-5 text-sm font-bold text-card-foreground w-1/5">STARTER</th>
                <th className="p-5 text-sm font-black text-accent-foreground bg-accent/40 border-x border-border w-1/5">
                  PROFESSIONAL ★
                </th>
                <th className="p-5 text-sm font-bold text-card-foreground w-1/5">BUSINESS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparisonMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 text-left text-xs sm:text-sm font-medium text-card-foreground">{row.feature}</td>
                  <td className="p-4">{renderValue(row.starter)}</td>
                  <td className="p-4 bg-accent/20 border-x border-border">{renderValue(row.professional, true)}</td>
                  <td className="p-4">{renderValue(row.business)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-border bg-muted/60">
                <td className="p-5 text-left text-xs text-muted-foreground font-medium">Tinggal pilih paket yang cocok.</td>
                <td className="p-4">
                  <a
                    href={getWhatsAppLink("Halo Hafi Digital, saya berminat pesan paket Starter.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-source="comparison"
                    className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-bold text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Pilih Starter
                  </a>
                </td>
                <td className="p-4 bg-accent/40 border-x border-border">
                  <a
                    href={getWhatsAppLink("Halo Hafi Digital, saya berminat pesan paket Professional.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-source="comparison"
                    className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow-theme hover:opacity-90 transition-all"
                  >
                    Pilih Professional
                  </a>
                </td>
                <td className="p-4">
                  <a
                    href={getWhatsAppLink("Halo Hafi Digital, saya berminat pesan paket Business.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-source="comparison"
                    className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-bold text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Pilih Business
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mobile Stacked Cards Comparison Fallback */}
        <div className="block md:hidden space-y-5 sm:space-y-6">
          {[
            { name: "STARTER", price: "Rp 1.999.000", features: comparisonMatrix.filter(m => m.starter !== false).map(m => `${m.feature}: ${typeof m.starter === 'string' ? m.starter : 'Termasuk'}`) },
            { name: "PROFESSIONAL (Populer)", price: "Rp 3.999.000", popular: true, features: comparisonMatrix.filter(m => m.professional !== false).map(m => `${m.feature}: ${typeof m.professional === 'string' ? m.professional : 'Termasuk'}`) },
            { name: "BUSINESS", price: "Rp 7.999.000", features: comparisonMatrix.filter(m => m.business !== false).map(m => `${m.feature}: ${typeof m.business === 'string' ? m.business : 'Termasuk'}`) }
          ].map((card, i) => (
            <div key={i} className={`p-5 sm:p-6 rounded-xl max-w-full card-surface transition-all duration-300 ${card.popular ? 'bg-secondary border-2 border-primary' : 'bg-card border border-border hover:border-ring hover:-translate-y-1'}`}>
              <h3 className="text-lg font-bold text-card-foreground font-sans">{card.name}</h3>
              <p className="text-xl font-extrabold text-foreground mt-1 mb-4">{card.price}</p>
              <div className="space-y-2 mb-6">
                {card.features.map((f, j) => (
                  <div key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-accent-foreground shrink-0 mt-0.5" />
                    <span className="min-w-0">{f}</span>
                  </div>
                ))}
              </div>
              <a
                href={getWhatsAppLink(`Halo Hafi Digital, saya berminat dengan paket ${card.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                data-source="comparison"
                className={`w-full min-h-[48px] py-3 rounded-xl font-bold text-xs text-center flex items-center justify-center ${card.popular ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
              >
                Pilih Paket Ini
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

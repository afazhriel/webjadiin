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
    { feature: "Jumlah Halaman", starter: "1 Landing Page", professional: "Hingga 7 Halaman", business: "Unlimited / Custom" },
    { feature: "Desain Mobile Responsive", starter: true, professional: true, business: true },
    { feature: "Domain (.com / .id)", starter: "Free 1 Tahun", professional: "Free 1 Tahun", business: "Free 1 Tahun" },
    { feature: "High-Speed SSD Hosting", starter: "Standard", professional: "Cloud Ultra Fast", business: "Private Enterprise" },
    { feature: "Integrasi Tombol WhatsApp", starter: true, professional: true, business: true },
    { feature: "Form Leads / Lead Capture", starter: false, professional: true, business: true },
    { feature: "Copywriting Persuasif Standard", starter: false, professional: true, business: true },
    { feature: "Advanced SEO & Schema Org", starter: false, professional: true, business: true },
    { feature: "Katalog Produk & Cart", starter: false, professional: false, business: true },
    { feature: "Payment Gateway Integration", starter: false, professional: false, business: true },
    { feature: "Hitung Ongkir Otomatis", starter: false, professional: false, business: true },
    { feature: "Waktu Pengerjaan", starter: "3 - 5 Hari", professional: "5 - 7 Hari", business: "10 - 14 Hari" },
    { feature: "Garansi Maintenance", starter: "1 Bulan", professional: "3 Bulan", business: "6 Bulan" }
  ];

  const renderValue = (val: boolean | string, isPopular = false) => {
    if (typeof val === 'boolean') {
      return val ? (
        <div className="flex justify-center">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isPopular ? 'bg-primary text-primary-foreground' : 'bg-muted text-primary'}`}>
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <Minus className="w-5 h-5 text-muted-foreground" />
        </div>
      );
    }
    return <span className={`text-xs font-semibold ${isPopular ? 'text-primary' : 'text-card-foreground'}`}>{val}</span>;
  };

  return (
    <section className="py-14 sm:py-20 bg-background relative border-b border-border">
      <div className="max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-widest text-accent-foreground uppercase bg-accent border border-border px-3 py-1 rounded-full">
            PERBANDINGAN FITUR
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground font-sans max-w-full">
            Bandingkan Setiap Paket Sesuai Kebutuhan Bisnis Anda
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Transparansi penuh fasilitas untuk membantu Anda menentukan keputusan terbaik.
          </p>
        </div>

        {/* Desktop / Tablet Comparison Table */}
        <div className="hidden md:block w-full max-w-full overflow-x-auto rounded-xl border border-border bg-card shadow-theme">
          <table className="w-full min-w-[560px] text-center border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-5 text-left text-sm font-bold text-card-foreground uppercase tracking-wider w-2/5">Fitur & Layanan</th>
                <th className="p-5 text-sm font-bold text-card-foreground w-1/5">STARTER</th>
                <th className="p-5 text-sm font-black text-primary bg-accent/40 border-x border-border w-1/5">
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
                <td className="p-5 text-left text-xs text-muted-foreground font-medium">Siap untuk memulai?</td>
                <td className="p-4">
                  <a
                    href={getWhatsAppLink("Halo NEXADIGITAL, saya berminat pesan paket Starter.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-bold text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Pilih Starter
                  </a>
                </td>
                <td className="p-4 bg-accent/40 border-x border-border">
                  <a
                    href={getWhatsAppLink("Halo NEXADIGITAL, saya berminat pesan paket Professional.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow-theme hover:opacity-90 transition-all"
                  >
                    Pilih Professional
                  </a>
                </td>
                <td className="p-4">
                  <a
                    href={getWhatsAppLink("Halo NEXADIGITAL, saya berminat pesan paket Business.")}
                    target="_blank"
                    rel="noopener noreferrer"
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
            <div key={i} className={`p-5 sm:p-6 rounded-xl max-w-full ${card.popular ? 'bg-accent/40 border-2 border-primary' : 'bg-card border border-border'}`}>
              <h3 className="text-lg font-bold text-card-foreground font-sans">{card.name}</h3>
              <p className="text-xl font-extrabold text-primary mt-1 mb-4">{card.price}</p>
              <div className="space-y-2 mb-6">
                {card.features.map((f, j) => (
                  <div key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span className="min-w-0">{f}</span>
                  </div>
                ))}
              </div>
              <a
                href={getWhatsAppLink(`Halo NEXADIGITAL, saya berminat dengan paket ${card.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
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

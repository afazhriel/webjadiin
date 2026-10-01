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
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isPopular ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-sky-400'}`}>
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <Minus className="w-5 h-5 text-slate-600" />
        </div>
      );
    }
    return <span className={`text-xs font-semibold ${isPopular ? 'text-sky-300' : 'text-slate-300'}`}>{val}</span>;
  };

  return (
    <section className="py-20 bg-slate-950 relative border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1 rounded-full">
            PERBANDINGAN FITUR
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-grotesk">
            Bandingkan Setiap Paket Sesuai Kebutuhan Bisnis Anda
          </h2>
          <p className="text-sm text-slate-400">
            Transparansi penuh fasilitas untuk membantu Anda menentukan keputusan terbaik.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-md shadow-2xl">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80">
                <th className="p-5 text-left text-sm font-bold text-slate-300 uppercase tracking-wider w-2/5">Fitur & Layanan</th>
                <th className="p-5 text-sm font-bold text-slate-200 w-1/5">STARTER</th>
                <th className="p-5 text-sm font-black text-sky-400 bg-sky-950/40 border-x border-sky-500/30 w-1/5">
                  PROFESSIONAL ★
                </th>
                <th className="p-5 text-sm font-bold text-slate-200 w-1/5">BUSINESS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {comparisonMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-left text-xs sm:text-sm font-medium text-slate-200">{row.feature}</td>
                  <td className="p-4">{renderValue(row.starter)}</td>
                  <td className="p-4 bg-sky-950/20 border-x border-sky-500/20">{renderValue(row.professional, true)}</td>
                  <td className="p-4">{renderValue(row.business)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-slate-800 bg-slate-950/90">
                <td className="p-5 text-left text-xs text-slate-400 font-medium">Siap untuk memulai?</td>
                <td className="p-4">
                  <a
                    href={getWhatsAppLink("Halo NEXADIGITAL, saya berminat pesan paket Starter.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
                  >
                    Pilih Starter
                  </a>
                </td>
                <td className="p-4 bg-sky-950/40 border-x border-sky-500/30">
                  <a
                    href={getWhatsAppLink("Halo NEXADIGITAL, saya berminat pesan paket Professional.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs shadow-md"
                  >
                    Pilih Professional
                  </a>
                </td>
                <td className="p-4">
                  <a
                    href={getWhatsAppLink("Halo NEXADIGITAL, saya berminat pesan paket Business.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
                  >
                    Pilih Business
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mobile Stacked Cards Comparison Fallback */}
        <div className="block md:hidden space-y-6">
          {[
            { name: "STARTER", price: "Rp 1.999.000", features: comparisonMatrix.filter(m => m.starter !== false).map(m => `${m.feature}: ${typeof m.starter === 'string' ? m.starter : 'Termasuk'}`) },
            { name: "PROFESSIONAL (Populer)", price: "Rp 3.999.000", popular: true, features: comparisonMatrix.filter(m => m.professional !== false).map(m => `${m.feature}: ${typeof m.professional === 'string' ? m.professional : 'Termasuk'}`) },
            { name: "BUSINESS", price: "Rp 7.999.000", features: comparisonMatrix.filter(m => m.business !== false).map(m => `${m.feature}: ${typeof m.business === 'string' ? m.business : 'Termasuk'}`) }
          ].map((card, i) => (
            <div key={i} className={`p-6 rounded-2xl ${card.popular ? 'bg-sky-950/60 border-2 border-sky-400' : 'bg-slate-900 border border-slate-800'}`}>
              <h3 className="text-lg font-bold text-white font-grotesk">{card.name}</h3>
              <p className="text-xl font-extrabold text-sky-400 mt-1 mb-4">{card.price}</p>
              <div className="space-y-2 mb-6">
                {card.features.map((f, j) => (
                  <div key={j} className="text-xs text-slate-300 flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <a
                href={getWhatsAppLink(`Halo NEXADIGITAL, saya berminat dengan paket ${card.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-bold text-xs text-center block ${card.popular ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-white'}`}
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

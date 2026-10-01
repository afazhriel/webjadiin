import React from 'react';
import { Palette, Smartphone, Gauge, Search, ShieldCheck, Headset } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      number: "01",
      title: "Desain Visual Kelas Dunia",
      description: "Tampilan website modern, bernuansa cinematic, dan mencerminkan kelas bisnis profesional yang tepercaya.",
      icon: Palette
    },
    {
      number: "02",
      title: "100% Mobile Responsive",
      description: "Tata letak otomatis menyesuaikan ukuran layar smartphone, tablet, hingga desktop tanpa ada yang terpotong.",
      icon: Smartphone
    },
    {
      number: "03",
      title: "Loading Super Cepat (Fast)",
      description: "Optimasi struktur kode & asset gambar agar website terbuka dalam hitungan detik untuk mencegah visitor kabur.",
      icon: Gauge
    },
    {
      number: "04",
      title: "SEO-Friendly Architecture",
      description: "Dimengerti oleh algoritma mesin pencari Google agar website Anda lebih mudah nangkring di rangking teratas.",
      icon: Search
    },
    {
      number: "05",
      title: "Keamanan Tingkat Tinggi",
      description: "Dilengkapi SSL HTTPS certificate, proteksi firewall, dan skema backup rutin untuk menjaga data bisnis Anda.",
      icon: ShieldCheck
    },
    {
      number: "06",
      title: "Support & Pendampingan 24/7",
      description: "Garansi maintenance teknis serta pendampingan WhatsApp ramah kapan pun Anda membutuhkan bantuan.",
      icon: Headset
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-slate-900/40 relative border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1 rounded-full">
            KEUNGGULAN UTAMA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-grotesk leading-tight">
            Kenapa Memilih Layanan NEXADIGITAL?
          </h2>
          <p className="text-base text-slate-300">
            6 alasan utama mengapa pemilik bisnis mempercayakan pengerjaan website profesional kepada tim kami.
          </p>
        </div>

        {/* 6 Benefits Numbered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-slate-950/70 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 font-grotesk">
                      {benefit.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-grotesk mb-2 group-hover:text-sky-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between text-xs text-sky-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Standard Kualitas Tinggi</span>
                  <span>✓ Verified</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

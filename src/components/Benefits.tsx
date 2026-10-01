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
    <section id="benefits" className="py-14 sm:py-20 lg:py-24 bg-background relative border-b border-border">
      <div className="max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-widest text-accent-foreground uppercase bg-accent border border-border px-3 py-1 rounded-full">
            KEUNGGULAN UTAMA
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-sans leading-tight max-w-full">
            Kenapa Memilih Layanan Hafi Digital?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            6 alasan utama mengapa pemilik bisnis mempercayakan pengerjaan website profesional kepada tim kami.
          </p>
        </div>

        {/* 6 Benefits Numbered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="group relative p-5 sm:p-8 rounded-xl bg-card border border-border hover:border-ring transition-all duration-300 sm:hover:-translate-y-1.5 flex flex-col justify-between shadow-theme max-w-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                    <span className="text-2xl sm:text-3xl font-black text-primary font-sans">
                      {benefit.number}
                    </span>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent border border-border flex items-center justify-center text-accent-foreground group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-card-foreground font-sans mb-2 group-hover:text-primary transition-colors max-w-full">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-4 border-t border-border flex items-center justify-between gap-2 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
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

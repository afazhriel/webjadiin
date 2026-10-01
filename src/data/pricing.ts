export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  supportInfo: string;
  whatsappMessage: string;
}

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "starter",
    name: "STARTER",
    tagline: "Cocok untuk UMKM & Bisnis Baru merintis presensi online",
    price: "Rp 1.999.000",
    originalPrice: "Rp 3.500.000",
    features: [
      "1 Halaman Landing Page Premium",
      "Desain Responsive Mobile & Desktop",
      "Free Domain .com / .id (1 Thn)",
      "Free SSD Hosting 1 Thn",
      "Tombol WhatsApp Integration",
      "Basic SEO Setup",
      "Proses Pengerjaan 3-5 Hari Kerja",
      "Garansi Maintenance 1 Bulan"
    ],
    ctaText: "Pilih Paket Starter",
    supportInfo: "Dukungan via Email & Chat WhatsApp",
    whatsappMessage: "Halo Hafi Digital, saya tertarik dengan paket STARTER (Rp 1.999.000). Mohon informasi selengkapnya."
  },
  {
    id: "professional",
    name: "PROFESSIONAL",
    tagline: "Solusi lengkap untuk Bisnis yang siap meningkatkan Conversion Rate",
    price: "Rp 3.999.000",
    originalPrice: "Rp 6.500.000",
    isPopular: true,
    features: [
      "Hingga 7 Halaman Custom Profile / Sales Page",
      "Desain High-End Cinematic Visuals",
      "Free Domain .com / .co.id (1 Thn)",
      "Free High-Performance Cloud Hosting (1 Thn)",
      "Optimasi Ultra-Fast Loading (PageSpeed 90+)",
      "Advanced SEO On-Page & Schema Setup",
      "Form Lead Capture & Auto WhatsApp Alert",
      "Copywriting Persuasif Standard",
      "Proses Pengerjaan 5-7 Hari Kerja",
      "Garansi Maintenance 3 Bulan"
    ],
    ctaText: "Pilih Paket Professional",
    supportInfo: "Dukungan Prioritas 24/7 via WhatsApp Dedicated",
    whatsappMessage: "Halo Hafi Digital, saya tertarik dengan paket PROFESSIONAL (Rp 3.999.000). Saya ingin berkonsultasi mengenai paket ini."
  },
  {
    id: "business",
    name: "BUSINESS",
    tagline: "Platform E-Commerce atau Custom Web Aplikasi skala tumbuh",
    price: "Rp 7.999.000",
    originalPrice: "Rp 12.500.000",
    features: [
      "Fitur Custom / Toko Online Kompleks",
      "Katalog Produk & Payment Gateway Integration",
      "Hitung Ongkir Automatic All Ekspedisi",
      "Multi-currency / Multi-language Ready",
      "Private Server / High Spec Cloud Hosting",
      "UI/UX Design Wireframing & Prototyping",
      "Full Training CMS Admin Dashboard",
      "Advanced Analytics & Event Tracking",
      "Proses Pengerjaan 10-14 Hari Kerja",
      "Garansi Maintenance 6 Bulan Full Support"
    ],
    ctaText: "Pilih Paket Business",
    supportInfo: "Dedicated Account Manager & Technical Team",
    whatsappMessage: "Halo Hafi Digital, saya sangat tertarik dengan paket BUSINESS (Rp 7.999.000). Mohon bantu jadwalkan diskusi teknis."
  }
];

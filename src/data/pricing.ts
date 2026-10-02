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
    tagline: "Untuk UMKM dan bisnis yang baru mulai membangun presence online",
    price: "Rp 1.999.000",
    originalPrice: "Rp 3.500.000",
    features: [
      "1 Halaman Landing Page",
      "Tampil Rapi di HP dan Desktop",
      "Domain (.com / .id) Gratis 1 Tahun",
      "Hosting SSD Gratis 1 Tahun",
      "Tombol WhatsApp",
      "Penataan Dasar SEO",
      "Proses Pengerjaan 3-5 Hari Kerja",
      "Perawatan Gratis 1 Bulan"
    ],
    ctaText: "Diskusikan Paket Starter",
    supportInfo: "Dukungan lewat Email dan WhatsApp",
    whatsappMessage: "Halo Hafi Digital, saya tertarik dengan paket STARTER (Rp 1.999.000). Mohon informasi selengkapnya."
  },
  {
    id: "professional",
    name: "PROFESSIONAL",
    tagline: "Untuk bisnis yang sudah berjalan dan butuh website yang lebih lengkap",
    price: "Rp 3.999.000",
    originalPrice: "Rp 6.500.000",
    isPopular: true,
    features: [
      "Hingga 7 Halaman Custom",
      "Desain Visual Disesuaikan Brand",
      "Domain (.com / .co.id) Gratis 1 Tahun",
      "Cloud Hosting Gratis 1 Tahun",
      "Optimasi Kecepatan Muat",
      "SEO On-Page & Schema",
      "Form Penampung Data & Notifikasi WhatsApp",
      "Copywriting Disesuaikan dengan Bisnis",
      "Proses Pengerjaan 5-7 Hari Kerja",
      "Perawatan Gratis 3 Bulan"
    ],
    ctaText: "Diskusikan Paket Professional",
    supportInfo: "Pendampingan lewat WhatsApp dengan prioritas",
    whatsappMessage: "Halo Hafi Digital, saya tertarik dengan paket PROFESSIONAL (Rp 3.999.000). Saya ingin berkonsultasi mengenai paket ini."
  },
  {
    id: "business",
    name: "BUSINESS",
    tagline: "Untuk toko online atau sistem web custom dengan kebutuhan lebih besar",
    price: "Rp 7.999.000",
    originalPrice: "Rp 12.500.000",
    features: [
      "Toko Online atau Fitur Custom",
      "Katalog Produk & Pembayaran Otomatis",
      "Perhitungan Ongkir Otomatis",
      "Siap Multi-Mata Uang & Multi-Bahasa",
      "Hosting dengan Spesifikasi Lebih Tinggi",
      "Wireframe & Prototipe Desain",
      "Pelatihan CMS untuk Admin",
      "Analytics & Pelacakan Event",
      "Proses Pengerjaan 10-14 Hari Kerja",
      "Perawatan Gratis 6 Bulan"
    ],
    ctaText: "Diskusikan Paket Business",
    supportInfo: "Pendampingan khusus dan tim teknis",
    whatsappMessage: "Halo Hafi Digital, saya sangat tertarik dengan paket BUSINESS (Rp 7.999.000). Mohon bantu jadwalkan diskusi teknis."
  }
];

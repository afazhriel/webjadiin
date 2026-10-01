export interface ServiceItem {
  id: string;
  title: string;
  badge?: string;
  icon: string;
  description: string;
  features: string[];
  recommendedFor: string;
  ctaText: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "company-profile",
    title: "Website Company Profile",
    badge: "Most Popular",
    icon: "Building2",
    description: "Tampilkan kredibilitas perusahaan Anda dengan visual kelas dunia, cepat, dan responsif di semua perangkat.",
    features: [
      "5-10 Halaman Kustom & Premium",
      "Desain Visual modern & Cinematic",
      "Formulir Kontak & Integrasi WhatsApp",
      "Optimasi SEO On-Page Dasar",
      "Domain & High-Speed Hosting 1 Tahun"
    ],
    recommendedFor: "Perusahaan, Korporat, Firm, & Konsultan",
    ctaText: "Pesan Company Profile"
  },
  {
    id: "landing-page",
    title: "High-Converting Landing Page",
    badge: "Best ROI",
    icon: "Zap",
    description: "Halaman penjualan khusus yang dirancang secara psikologis untuk merubah visitor menjadi pembeli dalam hitungan detik.",
    features: [
      "Structure Conversion-Focused",
      "Visual Hero Section Menawan",
      "Integrasi Tracking (Pixel / Analytics)",
      "Fast Loading Speed (< 1.5s)",
      "Copywriting Persuasif Standard"
    ],
    recommendedFor: "Peluncuran Produk, Campaign Ads, & Event",
    ctaText: "Buat Landing Page"
  },
  {
    id: "e-commerce",
    title: "Toko Online / E-Commerce",
    badge: "Scale Up",
    icon: "ShoppingBag",
    description: "Platform jualan online lengkap dengan sistem katalog, keranjang belanja, kalkulasi ongkir, dan payment gateway.",
    features: [
      "Manajemen Produk Unlimited",
      "Integrasi Payment Gateway (Midtrans/Xendit)",
      "Kalkulasi Ongkir Otomatis All Ekspedisi",
      "Dashboard Order & Stok Barang",
      "Laporan Penjualan Real-time"
    ],
    recommendedFor: "Brand Fashion, Retail, & Distributor Product",
    ctaText: "Bangun Toko Online"
  },
  {
    id: "custom-web",
    title: "Custom Web Application",
    badge: "Enterprise",
    icon: "Code2",
    description: "Sistem aplikasi web sesuai kebutuhan unik bisnis Anda (SaaS, Internal Portal, CRM, Booking System).",
    features: [
      "Full Custom Architecture (React/Node)",
      "Database High-Scalability",
      "Custom API & Third-party Integration",
      "Multi-level User Access / Auth",
      "Garansi Maintenance & SLA Security"
    ],
    recommendedFor: "Startup, SaaS, System Integrator",
    ctaText: "Konsultasi Custom Project"
  },
  {
    id: "maintenance",
    title: "Website Maintenance & Care",
    badge: "Peace of Mind",
    icon: "ShieldCheck",
    description: "Jaminan website Anda selalu aman dari hacker, cepat, beroperasi 24/7 tanpa error, dan selalu up to date.",
    features: [
      "Daily Cloud Backup",
      "Security Monitoring & Firewall",
      "Speed Optimization Regular",
      "Update Content & Minor Design Changes",
      "Priority Tech Support via WhatsApp"
    ],
    recommendedFor: "Semua Pemilik Website Bisnis",
    ctaText: "Ambil Paket Care"
  }
];

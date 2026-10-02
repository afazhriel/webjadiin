export interface ServiceItem {
  id: string;
  title: string;
  badge?: string;
  icon: string;
  description: string;
  features: string[];
  recommendedFor: string;
  ctaText: string;
  featured?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "company-profile",
    title: "Company Profile",
    badge: "Paling Banyak Dipilih",
    featured: true,
    icon: "Building2",
    description: "Website yang menjelaskan siapa Anda, apa yang Anda tawarkan, dan bagaimana cara menghubungi Anda. Didierancang supaya calon pelanggan bisa menilai kredibilitas bisnis Anda dalam satu kali baca.",
    features: [
      "5-10 Halaman Sesuai Kebutuhan",
      "Desain Disesuaikan dengan Karakter Brand",
      "Formulir Kontak & Tombol WhatsApp",
      "Penataan Dasar untuk Mesin Pencari",
      "Domain (.com / .id) & Hosting 1 Tahun"
    ],
    recommendedFor: "Perusahaan, badan usaha, konsultan, dan layanan profesional",
    ctaText: "Diskusikan Kebutuhan Website"
  },
  {
    id: "landing-page",
    title: "Landing Page Promosi",
    badge: "Untuk Iklan & Promosi",
    icon: "Zap",
    description: "Satu halaman yang fokus menjelaskan satu penawaran atau satu promo, lalu mengarahkan pengunjung untuk melakukan satu tindakan: menghubungi Anda, mengisi formulir, atau mendaftar.",
    features: [
      "Struktur Halaman yang Mengarah ke satu Tindakan",
      "Bagian Hero yang Menjawab Pertanyaan Utama",
      "Integrasi Pelacakan (Pixel / Analytics)",
      "Optimasi Kecepatan Muat di Koneksi Seluler",
      "Penulisan Copy yang Disesuaikan dengan Offer"
    ],
    recommendedFor: "Peluncuran produk, iklan Meta/Google Ads, dan promo terbatas",
    ctaText: "Konsultasi Landing Page"
  },
  {
    id: "e-commerce",
    title: "Toko Online",
    badge: "Untuk Berjualan",
    icon: "ShoppingBag",
    description: "Toko online dengan katalog produk, keranjang belanja, dan pembayaran otomatis, sehingga pelanggan bisa melihat produk dan menyelesaikan pembelian tanpa bertanya banyak.",
    features: [
      "Katalog Produk Tanpa Batas Item",
      "Pembayaran Otomatis (Midtrans / Xendit)",
      "Perhitungan Ongkir Otomatis",
      "Dashboard Pesanan & Stok",
      "Laporan Penjualan"
    ],
    recommendedFor: "Toko retail, brand, dan distributor produk",
    ctaText: "Konsultasi Toko Online"
  },
  {
    id: "custom-web",
    title: "Sistem Web Custom",
    badge: "Untuk Kebutuhan Khusus",
    icon: "Code2",
    description: "Aplikasi web yang dibuat khusus untuk kebutuhan yang tidak bisa dipenuhi halaman statis — misalnya sistem booking, portal internal, atau dashboard berbasis data.",
    features: [
      "Arsitektur Disesuaikan Kebutuhan Bisnis",
      "Basis Data yang Bisa Dikembangkan",
      "Integrasi API & Sistem pihak ketiga",
      "Akses Pengguna Bertingkat dengan Login",
      "Pendampingan Teknis Setelah Rilis"
    ],
    recommendedFor: "Startup, penyedia sistem, dan bisnis dengan alur kerja khusus",
    ctaText: "Diskusikan Sistem Custom"
  },
  {
    id: "maintenance",
    title: "Perawatan Website",
    badge: "Setelah Website Rilis",
    icon: "ShieldCheck",
    description: "Paket pemeliharaan agar website tetap aktif, aman, dan bisa diperbarui tanpa Anda perlu repot dealing dengan teknis setiap kali ada perubahan kecil.",
    features: [
      "Backup Berkala",
      "Pemantauan Keamanan",
      "Optimasi Kecepatan Muat Rutin",
      "Pembaruan Konten & Perubahan Kecil",
      "Pendampingan lewat WhatsApp"
    ],
    recommendedFor: "Semua pemilik website yang tidak ingin repot mengurus sendiri",
    ctaText: "Tanya tentang Paket Perawatan"
  }
];

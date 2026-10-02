export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "project-1",
    title: "Apex Logistics & Fleet",
    category: "Company Profile",
    description: "Untuk perusahaan logistik yang butuh profil bisnis lebih terstruktur: halaman layanan, pelacakan armada, dan kalkulator estimasi pengiriman.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["Logistics", "Company Profile", "Tracking"]
  },
  {
    id: "project-2",
    title: "Aura Luxe Skincare",
    category: "E-Commerce",
    description: "Untuk brand skincare yang ingin berjualan langsung: katalog produk, pembayaran otomatis, dan sistem poin untuk member.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    tags: ["E-Commerce", "Beauty", "Payment Gateway"]
  },
  {
    id: "project-3",
    title: "Verve Architecture Studio",
    category: "Portfolio & Agency",
    description: "Untuk studio arsitektur yang butuh showcase karya: galeri proyek dan animasi ringan saat halaman digulir.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    tags: ["Architecture", "Interactive 3D", "Portfolio"]
  },
  {
    id: "project-4",
    title: "FinPulse Capital Management",
    category: "Fintech Landing Page",
    description: "Untuk produk investasi yang butuh halaman penawaran: grafik pergerakan harga dan kalkulator simulasi.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    tags: ["Fintech", "Landing Page", "Analytics"]
  },
  {
    id: "project-5",
    title: "Kopi Nusantara Co.",
    category: "Landing Page & Sales",
    description: "Untuk pemasok kopi B2B yang butuh permintaan sampel tertata: form yang langsung masuk ke email.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    tags: ["F&B", "B2B Sales", "Landing Page"]
  },
  {
    id: "project-6",
    title: "OmniHealth Clinic & Diagnostic",
    category: "Company Profile & Booking",
    description: "Untuk klinik yang butuh pendaftaran online: jadwal dokter, form pendaftaran pasien, dan artikel edukasi kesehatan.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    tags: ["Healthcare", "Booking System", "Profile"]
  }
];

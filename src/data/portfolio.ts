export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  metrics: string;
  tags: string[];
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "project-1",
    title: "Apex Logistics & Fleet",
    category: "Company Profile",
    description: "Company profile untuk perusahaan logistik nasional, lengkap dengan pelacakan armada dan kalkulator estimasi pengiriman.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    metrics: "+145% Lead Enquiries",
    tags: ["Logistics", "React", "Corporate"]
  },
  {
    id: "project-2",
    title: "Aura Luxe Skincare",
    category: "E-Commerce",
    description: "Toko online untuk brand skincare, dengan pembayaran otomatis dan sistem poin untuk member.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    metrics: "Rp 450M Sales / Month",
    tags: ["E-Commerce", "Beauty", "Payment Gateway"]
  },
  {
    id: "project-3",
    title: "Verve Architecture Studio",
    category: "Portfolio & Agency",
    description: "Website portofolio untuk studio arsitektur, dengan galeri proyek dan animasi ringan saat digulir.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    metrics: "Awarded Site of the Month",
    tags: ["Architecture", "Interactive 3D", "Portfolio"]
  },
  {
    id: "project-4",
    title: "FinPulse Capital Management",
    category: "Fintech Landing Page",
    description: "Landing page untuk produk investasi, lengkap dengan grafik pergerakan harga dan kalkulator simulasi.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    metrics: "8.4% Conversion Rate",
    tags: ["Fintech", "Landing Page", "Analytics"]
  },
  {
    id: "project-5",
    title: "Kopi Nusantara Co.",
    category: "Landing Page & Sales",
    description: "Landing page untuk pemasok biji kopi B2B, dengan form permintaan sampel yang langsung masuk ke email.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    metrics: "+210% B2B Inquiries",
    tags: ["F&B", "B2B Sales", "Landing Page"]
  },
  {
    id: "project-6",
    title: "OmniHealth Clinic & Diagnostic",
    category: "Company Profile & Booking",
    description: "Website klinik dengan jadwal dokter online, pendaftaran pasien, dan artikel edukasi kesehatan.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    metrics: "1,200+ Online Bookings/Mo",
    tags: ["Healthcare", "Booking System", "Profile"]
  }
];

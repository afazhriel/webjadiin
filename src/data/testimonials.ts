export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Bambang Wijaya",
    role: "Managing Director",
    company: "PT Apex Logistics Indonesia",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "Desain websitenya sangat luar biasa profesional. Setelah relaunching website baru buatan NEXADIGITAL, kepercayaan klien korporat naik drastis dan enquiry kontrak mingguan meningkat hingga 2x lipat.",
    rating: 5
  },
  {
    id: "t2",
    name: "Siska Pertiwi",
    role: "Founder & CMO",
    company: "Aura Luxe Skincare",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    quote: "Landing page dan toko online dari NEXADIGITAL sangat cepat! Loading di bawah 2 detik buat conversion rate iklan Meta Ads kami naik drastis dari 2.1% jadi 5.8%. Timnya sangat solutif.",
    rating: 5
  },
  {
    id: "t3",
    name: "Hendrik Santoso",
    role: "Co-Founder",
    company: "Verve Architecture Studio",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "Sensasi visual dan efek animasi 3D yang dibawakan benar-benar membuat calon klien kami terkagum. Sangat sepadan dengan investasi yang dikeluarkan untuk brand kelas atas.",
    rating: 5
  },
  {
    id: "t4",
    name: "Davin Iskandar",
    role: "CEO",
    company: "FinPulse Capital",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote: "Kombinasi antara copywriting conversion-focused dan visual premium menjadikan landing page kami mesin pencetak lead terbaik tahun ini. Pelayanan luar biasa tajam!",
    rating: 5
  }
];

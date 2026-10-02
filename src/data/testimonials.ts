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
    role: "Direktur",
    company: "PT Apex Logistics Indonesia",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "Website-nya terlihat jauh lebih profesional. Setelah pakai website baru dari Hafi Digital, klien jadi lebih yakin dan jumlah kontrak mingguan naik dua kali lipat.",
    rating: 5
  },
  {
    id: "t2",
    name: "Siska Pertiwi",
    role: "Pendiri",
    company: "Aura Luxe Skincare",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    quote: "Landing page dan toko online dari Hafi Digital cepat dibuka. Halamannya muncul di bawah 2 detik, dan jumlah pemesan dari iklan Meta Ads naik dari 2,1% jadi 5,8%.",
    rating: 5
  },
  {
    id: "t3",
    name: "Hendrik Santoso",
    role: "Pendiri",
    company: "Verve Architecture Studio",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "Tampilan dan animasinya membuat calon klien kami tertarik sejak pertama melihat. Sepadan dengan biaya yang kami keluarkan untuk membangun brand kami.",
    rating: 5
  },
  {
    id: "t4",
    name: "Davin Iskandar",
    role: "Direktur Utama",
    company: "FinPulse Capital",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote: "Teks dan tampilannya membuat landing page kami jadi sumber calon pembeli terbaik tahun ini. Pelayanan juga sangat cepat dan tepat.",
    rating: 5
  }
];

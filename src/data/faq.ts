export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Berapa lama proses pembuatan website dari awal sampai siap di-launch?",
    answer: "Waktu pengerjaan bergantung pada paket yang dipilih. Paket Starter memakan waktu 3-5 hari kerja, Paket Professional 5-7 hari kerja, dan Paket Business 10-14 hari kerja setelah materi (logo, teks, dan foto) diserahkan."
  },
  {
    id: "faq-2",
    question: "Apakah saya harus menyiapkan domain dan hosting sendiri?",
    answer: "Tidak perlu! Semua paket layanan NEXADIGITAL sudah mencakup GRATIS Domain (.com / .id) serta Cloud Hosting ultra-cepat selama 1 tahun pertama."
  },
  {
    id: "faq-3",
    question: "Apakah website buatan NEXADIGITAL mudah diakses via handphone?",
    answer: "Sangat responsif! Kami mendesain website dengan pendekatan Mobile-First. Website Anda akan tampil sempurna, cepat, dan rapi di layar smartphone, tablet, laptop, hingga monitor 4K."
  },
  {
    id: "faq-4",
    question: "Bagaimana jika nanti saya ingin mengubah atau menambah konten di website?",
    answer: "Kami menggunakan Content Management System (CMS) yang ramah pengguna. Kami juga menyediakan panduan video serta layanan garansi maintenance gratis untuk membantu Anda melakukan update konten kapan saja."
  },
  {
    id: "faq-5",
    question: "Apakah website disukai oleh mesin pencari Google (SEO Friendly)?",
    answer: "Ya! Struktur website kami dibangun sesuai kaidah SEO modern (Clean Heading Hierarchy, Meta Tags, OpenGraph, Fast Loading, Mobile Responsive, dan XML Sitemap) agar lebih mudah terindeks di halaman pertama Google."
  },
  {
    id: "faq-6",
    question: "Bagaimana sistem pembayaran pembuatan website di NEXADIGITAL?",
    answer: "Sistem pembayaran sangat fleksibel dan aman. Pembayaran dilakukan dengan Down Payment (DP) 50% di awal saat persetujuan proposal, dan pelunasan 50% setelah website selesai diuji coba & siap diluncurkan."
  }
];

export const WHATSAPP_NUMBER = "6281234567890";

export const BRAND_CONFIG = {
  name: "NEXADIGITAL",
  tagline: "Digital Presence, Redefined",
  description: "Bantu bisnis Anda tampil 10x lebih profesional dengan website modern, ultra-fast, dan high-converting.",
  email: "halo@nexadigital.co.id",
  phone: "+62 812-3456-7890",
  address: "Grand Slipi Tower 18th Fl, Jl. S. Parman, Jakarta Barat",
  socials: {
    instagram: "https://instagram.com/nexadigital.id",
    linkedin: "https://linkedin.com/company/nexadigital",
    facebook: "https://facebook.com/nexadigital.id",
    twitter: "https://x.com/nexadigital_id"
  }
};

// Fixed promo deadline (stored in config so it doesn't reset on refresh)
// Set to 7 days from fixed reference date or end of month 2026
export const PROMO_DEADLINE = new Date(2026, 9, 31, 23, 59, 59).getTime();

export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

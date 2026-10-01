export const WHATSAPP_NUMBER = "6288226173208";

export const BRAND_CONFIG = {
  name: "Hafi Digital",
  nameUpper: "HAFI DIGITAL",
  monogram: "H",
  tagline: "Digital Presence, Redefined",
  description: "Bantu bisnis Anda tampil 10x lebih profesional dengan website modern, ultra-fast, dan high-converting.",
  website: "https://hafi.digital",
  email: "halo@nexadigital.co.id",
  phone: "+62 882-2617-3208",
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

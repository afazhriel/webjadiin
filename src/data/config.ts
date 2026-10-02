export const WHATSAPP_NUMBER = "6288226173208";

/**
 * Official registered address of Hafi Digital.
 * Single source of truth for the Footer contact card and the
 * Organization JSON-LD structured data in index.html.
 */
export const BRAND_ADDRESS = {
  streetAddress: "Griya Kelapa Gading, Desa Tanimulya",
  addressLocality: "Bandung Barat",
  postalCode: "40552"
} as const;

/** Stacked form used inside contact cards so nothing gets truncated. */
export const BRAND_ADDRESS_LINES: string[] = [
  BRAND_ADDRESS.streetAddress,
  "Kabupaten Bandung Barat",
  BRAND_ADDRESS.postalCode
];

export const BRAND_CONFIG = {
  name: "Hafi Digital",
  nameUpper: "HAFI DIGITAL",
  monogram: "H",
  tagline: "Digital Presence, Redefined",
  description: "Bantu bisnis Anda tampil 10x lebih profesional dengan website modern, ultra-fast, dan high-converting.",
  website: "https://hafi.digital",
  email: "halo@hafi.digital",
  phone: "+62 882-2617-3208",
  address: `${BRAND_ADDRESS.streetAddress}, Kabupaten Bandung Barat ${BRAND_ADDRESS.postalCode}`,
  addressLines: BRAND_ADDRESS_LINES,
  addressDetail: BRAND_ADDRESS,
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

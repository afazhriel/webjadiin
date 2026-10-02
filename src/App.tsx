import React, { useEffect } from 'react';
import { BRAND_CONFIG } from '@/data/config';
import { initAnalytics, initConversionTracking } from '@/lib/analytics';
import { CinematicHero } from '@/components/ui/cinematic-landing-hero';
import { Navbar } from '@/components/Navbar';
import { TrustSection } from '@/components/TrustSection';
import { Problems } from '@/components/Problems';
import { Services } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { Comparison } from '@/components/Comparison';
import { Benefits } from '@/components/Benefits';
import { Promotion } from '@/components/Promotion';
import { HowItWorks } from '@/components/HowItWorks';
import { Portfolio } from '@/components/Portfolio';
import { InfiniteGallerySection } from '@/components/InfiniteGallerySection';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export default function App() {
  useEffect(() => {
    initAnalytics();
    initConversionTracking();
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-sans">
      
      {/* Navigation Header */}
      <Navbar />

      {/* 1. CINEMATIC HERO (Main Opening Section)
          Introduces the offer and gives one low-friction WhatsApp CTA. */}
      <CinematicHero
        brandName={BRAND_CONFIG.nameUpper}
        tagline1="Bisnis Anda Sudah Bagus."
        tagline2="Jangan Biarkan Website Membuatnya Terlihat Biasa."
        cardDescription="Dari company profile, landing page, sampai toko online, kami membuat website yang menyatukan informasi bisnis Anda dalam satu tempat, sehingga calon pelanggan lebih mudah memahami dan menghubungi Anda."
      />

      {/* 2. PROBLEM SECTION — the visitor's pain first, so the offer lands
          as the answer rather than an interruption. */}
      <Problems />

      {/* 3. SERVICES SECTION — what we do, framed as business value. */}
      <Services />

      {/* 4. BENEFITS SECTION — what the website does for the business. */}
      <Benefits />

      {/* 5. HOW IT WORKS SECTION — the process, to make the work feel safe. */}
      <HowItWorks />

      {/* 6. INFINITE 3D PHOTOGRAPHY GALLERY — visual palette cleanser. */}
      <InfiniteGallerySection />

      {/* 7. PORTFOLIO SECTION — proof of real work. */}
      <Portfolio />

      {/* 8. TRUST / SOCIAL PROOF — named projects and what is included. */}
      <TrustSection />

      {/* 9. TESTIMONIALS SECTION — third-party validation. */}
      <Testimonials />

      {/* 10. PRICING SECTION — price after the value and proof are understood. */}
      <Pricing />

      {/* 11. COMPARISON SECTION */}
      <Comparison />

      {/* 12. PROMOTION SECTION */}
      <Promotion />

      {/* 13. FAQ SECTION — last objections before the ask. */}
      <FAQ />

      {/* 14. CONTACT FORM SECTION */}
      <ContactForm />

      {/* 15. FINAL CTA SECTION */}
      <FinalCTA />

      {/* 16. FOOTER */}
      <Footer />

    </div>
  );
}

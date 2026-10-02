import React from 'react';
import { BRAND_CONFIG } from '@/data/config';
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
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-sans">
      
      {/* Navigation Header */}
      <Navbar />

      {/* 1. CINEMATIC HERO (Main Opening Section) */}
      <CinematicHero
        brandName={BRAND_CONFIG.nameUpper}
        tagline1="Bangun bisnis Anda,"
        tagline2="lebih profesional."
        cardHeading="Digital presence, redefined."
        cardDescription="Tingkatkan kredibilitas & skala bisnis Anda dengan website cinematic, berkinerja ultra-cepat, dan conversion-focused."
        metricValue={100}
        metricLabel="Projects Built"
        ctaHeading="Siap mendominasi pasar digital?"
        ctaDescription="Dapatkan konsultasi gratis dan wujudkan website impian untuk pertumbuhan bisnis Anda."
        primaryCtaText="Mulai Konsultasi"
        secondaryCtaText="Lihat Paket"
      />

      {/* 2. TRUST / SOCIAL PROOF */}
      <TrustSection />

      {/* 3. PROBLEM SECTION */}
      <Problems />

      {/* 4. SERVICES SECTION */}
      <Services />

      {/* 5. PRICING SECTION */}
      <Pricing />

      {/* 6. COMPARISON SECTION */}
      <Comparison />

      {/* 7. BENEFITS SECTION */}
      <Benefits />

      {/* 8. PROMOTION SECTION */}
      <Promotion />

      {/* 9. HOW IT WORKS SECTION */}
      <HowItWorks />

      {/* 10. INFINITE 3D PHOTOGRAPHY GALLERY */}
      <InfiniteGallerySection />

      {/* 11. PORTFOLIO SECTION */}
      <Portfolio />

      {/* 11. TESTIMONIALS SECTION */}
      <Testimonials />

      {/* 12. FAQ SECTION */}
      <FAQ />

      {/* 13. CONTACT FORM SECTION */}
      <ContactForm />

      {/* 14. FINAL CTA SECTION */}
      <FinalCTA />

      {/* 14. FOOTER */}
      <Footer />

    </div>
  );
}

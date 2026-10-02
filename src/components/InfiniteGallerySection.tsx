import React, { useState, useEffect } from 'react';
import { InfiniteGallery } from './ui/3d-gallery-photography';
import { galleryImages } from '../data/gallery';
import { Sparkles, MoveVertical } from 'lucide-react';

export const InfiniteGallerySection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="gallery"
      className="relative w-full max-w-full atm-teal-deep py-14 sm:py-20 overflow-hidden border-b border-white/[0.06]"
    >
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-96 sm:h-96 atm-bloom-teal pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3 sm:space-y-4">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-2 max-w-full px-3 sm:px-3.5 py-1.5 rounded-full bg-accent border border-border text-[10px] sm:text-xs font-bold tracking-wide sm:tracking-widest text-accent-foreground uppercase text-center">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>INFINITE 3D PHOTOGRAPHY GALLERY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-sans leading-tight max-w-full">
            Pengalaman Visual 3D Tanpa Batas
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Jelajahi karya desain & fotografi dalam dimensi perspektif 3D yang interaktif, responsif, dan sinematik.
          </p>
        </div>
      </div>

      {/* 3D Gallery Canvas Container */}
      <div className="relative w-full max-w-full h-[58svh] min-h-[340px] max-h-[560px] sm:h-[70vh] sm:min-h-[500px] sm:max-h-[800px] my-4">
        <InfiniteGallery
          images={galleryImages}
          speed={1.2}
          zSpacing={3.2}
          visibleCount={isMobile ? 8 : 12}
          falloff={{ near: 0.8, far: 14 }}
          className="h-full w-full"
          autoplay={true}
        />

        {/* Subtle UX Interaction Indicator */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full max-w-full px-4 flex justify-center">
          <div className="flex items-center gap-2 sm:gap-3 max-w-full px-3 sm:px-4 py-2 rounded-full bg-card/90 backdrop-blur-md border border-border text-[10px] sm:text-xs text-muted-foreground shadow-theme text-center">
            <MoveVertical className="w-3.5 h-3.5 shrink-0 text-accent-foreground animate-bounce" />
            <span>Scroll mouse atau geser layar untuk menjelajah</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteGallerySection;

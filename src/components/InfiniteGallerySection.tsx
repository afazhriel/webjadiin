import React, { Suspense, useState, useEffect, useRef } from 'react';
import { galleryImages } from '../data/gallery';
import { Sparkles, MoveVertical } from 'lucide-react';

// The 3D gallery pulls in the entire three.js / @react-three stack. It is
// mapped only to this below-the-fold section, so it is code-split and mounted
// lazily once the canvas is near the viewport. This keeps three.js out of the
// initial bundle without changing how the gallery looks or behaves.
const InfiniteGallery = React.lazy(() =>
  import('./ui/3d-gallery-photography').then((m) => ({ default: m.InfiniteGallery }))
);

export const InfiniteGallerySection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShowGallery(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShowGallery(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
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
            Galeri Desain dari Bermacam Sudut
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Geser galeri untuk melihat paduan desain dan foto kami seperti yang tampil di website klien.
          </p>
        </div>
      </div>

      {/* 3D Gallery Canvas Container */}
      <div
        ref={canvasRef}
        className="relative w-full max-w-full h-[58svh] min-h-[340px] max-h-[560px] sm:h-[70vh] sm:min-h-[500px] sm:max-h-[800px] my-4"
      >
        {showGallery ? (
          <Suspense fallback={null}>
            <InfiniteGallery
              images={galleryImages}
              speed={1.2}
              zSpacing={3.2}
              visibleCount={isMobile ? 8 : 12}
              falloff={{ near: 0.8, far: 14 }}
              className="h-full w-full"
              autoplay={true}
            />
          </Suspense>
        ) : null}

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

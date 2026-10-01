import React from 'react';
import { TESTIMONIALS, TestimonialItem } from '../data/testimonials';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-background relative overflow-hidden border-b border-border">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 -right-40 w-72 h-72 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-[110px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-widest text-accent-foreground uppercase bg-accent border border-border px-3 py-1 rounded-full">
            KATA MEREKA
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-grotesk leading-tight max-w-full">
            Ulasan Jujur Dari Klien Kemitraan Kami
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Dengar langsung kesan para pemimpin bisnis setelah mempercayakan transformasi website kepada Hafi Digital.
          </p>
        </div>

        {/* Testimonial Cards Grid — a homogeneous set, so every card stays on the
            neutral surface and the hierarchy lives inside each card instead. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {TESTIMONIALS.map((t: TestimonialItem) => (
            <div
              key={t.id}
              className="p-5 sm:p-6 lg:p-7 rounded-3xl bg-card border border-border hover:border-ring transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between group card-surface max-w-full"
            >
              {/* Quote Mark Watermark */}
              <Quote className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground/25 pointer-events-none group-hover:text-accent-foreground/25 transition-colors" />

              <div>
                {/* Rating Stars — rating keeps its own semantic colour */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 shrink-0 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Body */}
                <p className="text-sm sm:text-base text-foreground leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Bio */}
              <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-border">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-secondary border-2 border-border overflow-hidden shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-foreground font-grotesk">{t.name}</h4>
                  <p className="text-[11px] sm:text-xs text-accent-foreground font-medium">{t.role} — <span className="text-muted-foreground">{t.company}</span></p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

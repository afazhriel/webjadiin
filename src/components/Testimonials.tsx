import React from 'react';
import { TESTIMONIALS, TestimonialItem } from '../data/testimonials';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-b border-slate-900">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1 rounded-full">
            KATA MEREKA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-grotesk leading-tight">
            Ulasan Jujur Dari Klien Kemitraan Kami
          </h2>
          <p className="text-base text-slate-300">
            Dengar langsung kesan para pemimpin bisnis setelah mempercayakan transformasi website kepada NEXADIGITAL.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t: TestimonialItem) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 relative flex flex-col justify-between group shadow-xl"
            >
              {/* Quote Mark Watermark */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-800/40 pointer-events-none group-hover:text-sky-500/20 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Body */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Bio */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-sky-400/40"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-grotesk">{t.name}</h4>
                  <p className="text-xs text-sky-400 font-medium">{t.role} — <span className="text-slate-400">{t.company}</span></p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

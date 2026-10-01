import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolio';
import { ExternalLink, TrendingUp, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Company Profile', 'E-Commerce', 'Landing Page', 'Portfolio & Agency'];

  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category.includes(selectedCategory) || (selectedCategory === 'Landing Page' && item.category.includes('Sales')));

  return (
    <section id="portfolio" className="py-14 sm:py-20 lg:py-24 bg-slate-900/60 relative overflow-hidden border-b border-slate-900">
      <div className="max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-9 sm:mb-12 space-y-3 sm:space-y-4">
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
            KARYA TERBAIK KAMI
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-grotesk leading-tight max-w-full">
            Portfolio Project yang Telah Diluncurkan
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Lihat secara nyata kualitas desain visual dan hasil konversi tinggi dari proyek-proyek klien kami.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-9 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`min-h-[44px] min-w-[44px] px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-lg shadow-sky-500/20'
                  : 'bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid: 3 cols desktop, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredItems.map((item: PortfolioItem) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/50 overflow-hidden transition-all duration-300 sm:hover:-translate-y-2 flex flex-col justify-between shadow-xl max-w-full"
            >
              <div>
                {/* Image Showcase with Hover Zoom */}
                <div className="relative h-44 sm:h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                   
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 max-w-[60%]">
                    <span className="block px-2.5 sm:px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700 text-sky-300 text-[10px] sm:text-[11px] font-semibold backdrop-blur-md truncate">
                      {item.category}
                    </span>
                  </div>

                  {/* Metrics Overlay */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 max-w-[55%] px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-bold text-[10px] sm:text-xs flex items-center gap-1.5 backdrop-blur-md">
                    <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span className="truncate">{item.metrics}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-grotesk group-hover:text-sky-300 transition-colors max-w-full">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Bottom CTA Action */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2">
                <a
                  href={getWhatsAppLink(`Halo Hafi Digital, saya sangat suka desain seperti project portfolio ${item.title}. Bisa buatkan konsep seperti ini?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] py-2.5 rounded-xl bg-slate-900 hover:bg-sky-500 text-slate-300 hover:text-slate-950 font-semibold text-xs transition-all flex items-center justify-center gap-2 border border-slate-800 hover:border-sky-400"
                >
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>Minta Konsep Serupa</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

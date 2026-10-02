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
    <section id="portfolio" className="py-14 sm:py-20 lg:py-24 atm-indigo relative overflow-hidden border-b border-white/[0.06] atm-accent-top">
      {/* Atmosphere: back to the core indigo, with a cyan bloom top-left. */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute -top-24 -left-16 w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] atm-bloom-cyan pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-9 sm:mb-12 space-y-3 sm:space-y-4">
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-widest text-accent-foreground uppercase bg-accent border border-border px-3 py-1 rounded-full">
            PORTOFOLIO KAMI
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-grotesk leading-tight max-w-full">
            Website yang Sudah Kami Kerjakan
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Lihat hasil kerja kami pada beberapa jenis bisnis. Ingin yang serupa untuk bisnis Anda?
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
                  ? 'bg-primary text-primary-foreground font-bold shadow-theme'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border'
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
              className="group rounded-3xl bg-card border border-border hover:border-ring overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between card-surface max-w-full"
            >
              <div>
                {/* Image Showcase with Hover Zoom */}
                <div className="relative h-44 sm:h-56 w-full overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle readability overlay — never a heavy solid block */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                   
                  {/* Category Pill — accent used only for the category indicator */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 max-w-[60%]">
                    <span className="block px-2.5 sm:px-3 py-1 rounded-full bg-background/80 border border-border text-accent-foreground text-[10px] sm:text-[11px] font-semibold backdrop-blur-md truncate">
                      {item.category}
                    </span>
                  </div>

                  {/* Metrics Overlay — status indicator keeps its own colour */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 max-w-[55%] px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-bold text-[10px] sm:text-xs flex items-center gap-1.5 backdrop-blur-md">
                    <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span className="truncate">{item.metrics}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground font-grotesk group-hover:text-accent-foreground transition-colors max-w-full">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-muted border border-border text-muted-foreground">
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
                  className="w-full min-h-[44px] py-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground font-semibold text-xs transition-all flex items-center justify-center gap-2 border border-border hover:border-transparent"
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

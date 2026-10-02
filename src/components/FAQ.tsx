import React, { useState } from 'react';
import { FAQ_ITEMS, FAQItem } from '../data/faq';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
<section id="faq" className="py-14 sm:py-20 lg:py-24 atm-quiet relative overflow-hidden border-b border-white/[0.06]">
      {/* Atmosphere: deliberately the calmest block on the page — FAQ is a
          reading section, so light is soft and centred rather than cornered. */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] atm-bloom-cyan opacity-60 pointer-events-none" />
      <div className="max-w-4xl mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-widest text-accent-foreground uppercase bg-accent border border-border px-3 py-1 rounded-full">
            TANYA JAWAB (FAQ)
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-grotesk leading-tight max-w-full">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Segala informasi penting mengenai layanan, harga, dan proses kerja kami.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((faq: FAQItem) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border overflow-hidden transition-all duration-200 max-w-full ${
                  isOpen
                    ? 'bg-accent border-ring'
                    : 'bg-card border-border hover:border-ring'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleAccordion(faq.id);
                    }
                  }}
                  aria-expanded={isOpen}
                  className={`w-full min-h-[56px] p-4 sm:p-6 text-left flex items-start justify-between gap-3 sm:gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl transition-colors ${
                    isOpen ? 'bg-transparent' : 'hover:bg-secondary'
                  }`}
                >
                  <span className="text-sm sm:text-lg font-bold text-foreground font-grotesk flex items-start gap-2.5 sm:gap-3 min-w-0">
                    {/* Icon container: important tier = primary surface */}
                    <span className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 mt-0.5 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                      <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <span className="min-w-0">{faq.question}</span>
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 shrink-0 mt-0.5 text-accent-foreground transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Animated Body Content */}
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-3 text-sm text-muted-foreground leading-relaxed border-t border-border">
                    <p className="pl-10 sm:pl-12">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unresolved Questions Callout */}
        <div className="mt-10 sm:mt-12 text-center p-5 sm:p-6 rounded-2xl bg-secondary border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1 w-full sm:w-auto">
            <h4 className="text-sm font-bold text-foreground font-grotesk max-w-full">Punya pertanyaan lain?</h4>
            <p className="text-xs text-muted-foreground">Tanyakan langsung ke tim kami lewat WhatsApp.</p>
          </div>
          <a
            href={getWhatsAppLink("Halo Hafi Digital, saya punya pertanyaan mengenai pengerjaan website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] px-5 py-2.5 rounded-xl bg-primary hover:opacity-90 text-primary-foreground font-bold text-xs flex items-center justify-center gap-2 shrink-0 transition-all"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

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
    <section id="faq" className="py-24 bg-slate-900/40 relative border-b border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1 rounded-full">
            TANYA JAWAB (FAQ)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-grotesk leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Segala informasi penting mengenai layanan, harga, dan proses kerja kami.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq: FAQItem) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-slate-950/80 border border-slate-800 overflow-hidden transition-all duration-200"
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
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-sky-500/50 rounded-2xl transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white font-grotesk flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-sky-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-sky-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Animated Body Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-900 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="pl-8">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unresolved Questions Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-sm font-bold text-white font-grotesk">Punya Pertanyaan Lain yang Belum Terjawab?</h4>
            <p className="text-xs text-slate-400">Tim kami siap menjawab pertanyaan teknis Anda 24/7 via WhatsApp.</p>
          </div>
          <a
            href={getWhatsAppLink("Halo NEXADIGITAL, saya punya pertanyaan mengenai pengerjaan website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-2 shrink-0 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

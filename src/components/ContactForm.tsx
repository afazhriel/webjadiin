import React, { useRef, useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';
import { track } from '../lib/analytics';

export type FormState = 'idle' | 'submitting' | 'success' | 'error';

const SERVICE_OPTIONS = [
  'Company Profile',
  'Landing Page',
  'Toko Online',
  'Belum yakin',
  'Lainnya'
];

const GENERIC_ERROR =
  'Pesan belum berhasil dikirim. Silakan coba lagi, atau hubungi kami langsung melalui WhatsApp.';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const startedRef = useRef(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Fire the "start" event once, the first time the visitor touches a field.
  const handleFirstInteraction = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    track('contact_form_start', { source: 'contact_form' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    track('contact_form_submit', { source: 'contact_form' });
    setState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setState('success');
        track('contact_form_success', { source: 'contact_form' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        startedRef.current = false;
      } else {
        // Never surface a raw server message to the visitor.
        setErrorMessage(GENERIC_ERROR);
        setState('error');
        track('contact_form_error', { source: 'contact_form' });
      }
    } catch (error) {
      setErrorMessage(GENERIC_ERROR);
      setState('error');
      track('contact_form_error', { source: 'contact_form' });
    }
  };

  const buttonText =
    state === 'submitting' ? 'Mengirim...' : state === 'success' ? 'Terkirim' : 'Kirim Permintaan Konsultasi';

  const fallbackMessage =
    state === 'error'
      ? 'Halo Hafi Digital, saya mencoba mengisi form konsultasi tetapi belum berhasil. Saya ingin dibantu terkait pembuatan website bisnis saya.'
      : 'Halo Hafi Digital, saya baru mengisi form konsultasi dan ingin lanjut diskusi lewat WhatsApp.';

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 atm-emerald-deep relative overflow-hidden">
      {/* Atmosphere: deep navy with a cyan bloom behind the form card and a
          curved light trail on top, so this block flows into FinalCTA. */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] atm-bloom-emerald pointer-events-none" />
      <svg
        className="absolute top-0 left-0 w-full h-20 sm:h-28 pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 118C300 24 900 24 1200 118" stroke="#0EA5FF" strokeOpacity="0.14" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-foreground font-grotesk leading-tight">
            Ceritakan Kebutuhan Website Anda
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ceritakan singkat tentang bisnis dan website yang Anda butuhkan. Tim kami akan menghubungi Anda lewat WhatsApp.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
            Belum yakin jenis website yang dibutuhkan? Kami bisa membantu menentukan struktur yang paling sesuai.
          </p>
        </div>

        <div className="rounded-3xl bg-card border-2 border-border p-6 sm:p-10 shadow-theme">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  Nama <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={handleFirstInteraction}
                  disabled={state === 'submitting'}
                  className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Nama lengkap"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={handleFirstInteraction}
                  disabled={state === 'submitting'}
                  className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="nama@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                  Telepon / WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={handleFirstInteraction}
                  disabled={state === 'submitting'}
                  className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                  Website apa yang Anda butuhkan?
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={handleFirstInteraction}
                  disabled={state === 'submitting'}
                  className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Pilih jenis website (opsional)</option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-foreground">
                Kebutuhan <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFirstInteraction}
                disabled={state === 'submitting'}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-y min-h-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Contoh: saya butuh company profile untuk bisnis saya di Bandung"
              />
            </div>

            {state === 'success' && (
              <div className="flex flex-col gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">Terima kasih, permintaan Anda sudah kami terima.</p>
                    <p className="text-sm mt-1">
                      Tim Hafi Digital akan menghubungi Anda lewat WhatsApp untuk mendiskusikan kebutuhan website.
                    </p>
                  </div>
                </div>
                <a
                  href={getWhatsAppLink(fallbackMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-source="contact_success"
                  className="self-start inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-[linear-gradient(135deg,#0C883E,#075E54)] text-white font-bold text-xs transition-all hover:opacity-90 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Lanjut Diskusi via WhatsApp</span>
                </a>
              </div>
            )}

            {state === 'error' && (
              <div className="flex flex-col gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm">{errorMessage || GENERIC_ERROR}</p>
                </div>
                <a
                  href={getWhatsAppLink(fallbackMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-source="contact_error"
                  className="self-start inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-[linear-gradient(135deg,#0C883E,#075E54)] text-white font-bold text-xs transition-all hover:opacity-90 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={state === 'submitting' || state === 'success'}
              className="w-full sm:w-auto min-h-[52px] px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-theme transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state === 'submitting' && <Loader2 className="w-5 h-5 animate-spin shrink-0" />}
              {state !== 'submitting' && <Send className="w-5 h-5 shrink-0" />}
              <span>{buttonText}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

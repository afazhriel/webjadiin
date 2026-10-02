import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export type FormState = 'idle' | 'submitting' | 'success' | 'error';

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(data.message || 'Gagal mengirim pesan. Silakan coba lagi.');
        setState('error');
      }
    } catch (error) {
      setErrorMessage('Gagal mengirim pesan. Silakan coba lagi.');
      setState('error');
    }
  };

  const buttonText = state === 'submitting' ? 'Mengirim...' : state === 'success' ? 'Terkirim' : 'Kirim Pesan';

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-background relative">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-foreground font-grotesk leading-tight">
            Hubungi Kami
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Punya pertanyaan tentang proyek Anda? Kirim pesan dan kami akan segera menghubungi Anda.
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
                  disabled={state === 'submitting'}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={state === 'submitting'}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="nama@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                  Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={state === 'submitting'}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="+62 812 3456 7890"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                  Layanan yang Dibutuhkan
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={state === 'submitting'}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Website Company Profile, Landing Page, dll."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-foreground">
                Pesan <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={state === 'submitting'}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-y min-h-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Ceritakan kebutuhan proyek Anda di sini..."
              />
            </div>

            {state === 'success' && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-sm">
                  Pesan berhasil dikirim. Kami akan segera menghubungi Anda.
                </p>
              </div>
            )}

            {state === 'error' && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-sm">
                  {errorMessage || 'Gagal mengirim pesan. Silakan coba lagi.'}
                </p>
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
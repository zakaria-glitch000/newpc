import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { COMPANY } from '@/data/content';
import { Reveal, SectionTag } from './ui/Reveal';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot anti-spam : ce champ doit rester vide.
    if (String(data.get('botcheck') ?? '').trim() !== '') return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError(
        "Les variables EmailJS ne sont pas chargées. Vérifiez le fichier .env.local puis redémarrez le serveur (npm run dev).",
      );
      return;
    }

    const userName = String(data.get('name') ?? '').trim();
    const userEmail = String(data.get('email') ?? '').trim();

    const templateParams = {
      name: userName,
      from_name: userName,
      company: String(data.get('company') ?? '').trim(),
      email: userEmail,
      from_email: userEmail,
      phone: String(data.get('phone') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
      subject: `Nouveau message de ${userName} — site PC MAROC`,
    };

    setLoading(true);
    setError(null);

    try {
      const res = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      console.log('SUCCESS EmailJS:', res.status, res.text);
      setSubmitted(true);
      form.reset();
    } catch (err: unknown) {
      console.error('Erreur EmailJS détaillée :', err);
      
      let errorMsg = "Une erreur est survenue lors de l'envoi.";
      if (typeof err === 'object' && err !== null) {
        const e = err as Record<string, unknown>;
        if (typeof e.text === 'string') errorMsg = e.text;
        else if (typeof e.message === 'string') errorMsg = e.message;
        else errorMsg = JSON.stringify(err);
      }

      setError(`Erreur EmailJS : ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-8 lg:py-12"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-orange-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-200/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="max-w-2xl">
          <SectionTag>Contact</SectionTag>

          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Parlons de votre{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              projet.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            Décrivez-nous vos besoins, nous vous recontactons sous 24h avec
            une proposition adaptée.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          {/* Contact form */}
          <Reveal delay={0.1}>
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/5 sm:p-8">
              {/* Animated vertical accent */}
              <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-400 to-orange-600 transition-transform duration-300 group-hover:scale-y-100" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50">
                    <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">
                    Message envoyé !
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    Merci pour votre intérêt. Nous vous recontactons très
                    rapidement.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-semibold text-orange-600 transition-colors hover:text-amber-500"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="font-display text-xl font-semibold text-slate-900">
                      Envoyez-nous un message
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Complétez le formulaire ci-dessous pour nous parler de
                      votre projet.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot anti-spam (invisible) */}
                    <input
                      type="text"
                      name="botcheck"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field
                        label="Nom & prénom :"
                        name="name"
                        type="text"
                        placeholder=""
                        required
                      />

                      <Field
                        label="Entreprise :"
                        name="company"
                        type="text"
                        placeholder=""
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field
                        label="Téléphone :"
                        name="phone"
                        type="tel"
                        placeholder=""
                        required
                      />
                      <Field
                        label="Email :"
                        name="email"
                        type="email"
                        placeholder=""
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Message :
                        <span className="ml-1 text-orange-600">*</span>
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        placeholder=""
                        className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm leading-6 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
                      />
                    </div>

                    {/* Erreur */}
                    {error && (
                      <div
                        role="alert"
                        className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700"
                      >
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group/button relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-600/30 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/button:translate-x-full" />

                      <span className="relative z-10">
                        {loading ? 'Envoi en cours…' : 'Envoyer le message'}
                      </span>

                      {loading ? (
                        <Loader2 className="relative z-10 h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                      )}
                    </button>

                    <p className="text-xs leading-5 text-slate-400">
                      Les informations transmises seront utilisées pour
                      répondre à votre demande.
                    </p>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          {/* Contact details */}
          <Reveal delay={0.2}>
            <div className="space-y-4">
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-900/5">
                <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-400 to-orange-600 transition-transform duration-300 group-hover:scale-y-100" />

                <h3 className="font-display text-base font-semibold text-slate-900">
                  Nos coordonnées
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Notre équipe est à votre disposition pour vous accompagner.
                </p>

                <div className="mt-4 space-y-2">
                  <InfoRow
                    icon={MapPin}
                    label="Adresse"
                    value={COMPANY.address}
                  />

                  <InfoRow
                    icon={Phone}
                    label="Téléphone"
                    value={COMPANY.phone}
                  />

                  <InfoRow
                    icon={Mail}
                    label="Email"
                    value={COMPANY.email}
                  />

                  <InfoRow
                    icon={Clock}
                    label="Horaires"
                    value={COMPANY.hours}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  const id = `contact-${name}`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-slate-700"
      >
        {label}
        {required && <span className="ml-1 text-orange-600">*</span>}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete={
          name === 'name'
            ? 'name'
            : name === 'company'
              ? 'organization'
              : name === 'email'
                ? 'email'
                : name === 'phone'
                  ? 'tel'
                  : undefined
        }
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="group/row flex items-start gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-orange-100 hover:bg-orange-50/60">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300 group-hover/row:border-orange-200 group-hover/row:bg-gradient-to-br group-hover/row:from-amber-500 group-hover/row:to-orange-600">
        <Icon className="h-4 w-4 text-orange-600 transition-colors duration-300 group-hover/row:text-white" />
      </div>

      <div className="min-w-0 flex-1 pt-0.5">
        <div className="text-xs text-slate-400">{label}</div>
        <div className="mt-0.5 break-words text-sm leading-5 text-slate-700 transition-colors duration-300 group-hover/row:text-orange-700">
          {value}
        </div>
      </div>
    </div>
  );
}
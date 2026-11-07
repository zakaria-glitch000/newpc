import React from 'react';
import type { MouseEvent } from 'react';
import {
  Calendar,
  Phone,
  ArrowRight,
  Clock,
  Settings,
  Monitor,
  Users,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

import caisseImage from '@/assets/2.jpg';

export default function Affcsi() {
  // Remplace ce numéro par ton numéro WhatsApp professionnel.
  // Format international sans +, sans espaces.
  const whatsappNumber = '212661973253';

  const handleWhatsAppDemo = () => {
    const message = encodeURIComponent(
      'Bonjour PC MAROC, je souhaite demander une démonstration gratuite de votre solution de caisse et de gestion pour mon établissement.'
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const contactSection = document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      window.location.href = '/#contact';
    }
  };

  const benefits = [
    {
      icon: Clock,
      title: 'Une présentation adaptée à votre activité',
    },
    {
      icon: Settings,
      title: 'Des conseils personnalisés selon vos besoins',
    },
    {
      icon: Monitor,
      title: 'Une démonstration de notre logiciel en direct',
    },
    {
      icon: Users,
      title: 'Un accompagnement par nos experts',
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-800 selection:bg-orange-500 selection:text-white">
      {/* Décoration du fond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -left-32 -top-32 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-orange-200/70 via-amber-100/50 to-transparent blur-3xl" />

        <div className="absolute -right-24 -top-24 h-[550px] w-[550px] rounded-full bg-gradient-to-bl from-orange-300/40 via-amber-200/20 to-transparent blur-2xl" />

        <div className="absolute -right-40 top-1/2 h-[800px] w-[800px] rounded-full bg-orange-50/80 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* En-tête de la page */}
        <header className="mb-10 flex items-center justify-between py-2 md:mb-14">
         
        </header>

        {/* Section principale */}
        <main>
          <section className="mb-16 grid grid-cols-1 items-center gap-10 lg:mb-20 lg:grid-cols-12 lg:gap-12">
            {/* Colonne gauche */}
            <div className="space-y-6 text-left lg:col-span-5">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-orange-100/80 bg-orange-50 px-4 py-2 shadow-sm">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-500" />

                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Solution CHR
                </span>
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                Découvrez
                <br />
                notre solution
                <br />

                <span className="relative inline-block text-orange-600">
                  en action
                  <span className="font-black text-amber-500">.</span>
                </span>
              </h1>

              <p className="max-w-lg text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
                Demandez une démonstration personnalisée et découvrez comment
                nos solutions de caisse et de gestion peuvent simplifier le
                quotidien de votre restaurant, café ou commerce.
              </p>

              {/* Boutons d'action */}
              <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={handleWhatsAppDemo}
                  className="group inline-flex items-center justify-between gap-4 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-4 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-orange-700 hover:to-orange-600 hover:shadow-xl hover:shadow-orange-500/35 active:translate-y-0"
                >
                  <span className="flex items-center gap-3">
                    <span className="rounded-full bg-white/20 p-1.5">
                      <Calendar className="h-4 w-4" />
                    </span>

                    <span className="text-sm sm:text-base">
                      Demander une démo
                    </span>
                  </span>

                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="/#contact"
                  onClick={scrollToContact}
                  className="group inline-flex items-center justify-between gap-4 rounded-full border-2 border-slate-900 bg-white px-6 py-4 font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <Phone className="h-4 w-4" />

                    <span className="text-sm sm:text-base">
                      Nous contacter
                    </span>
                  </span>

                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Avantages */}
              <div className="flex flex-wrap gap-x-5 gap-y-3 border-t border-slate-200/80 pt-5 text-xs text-slate-500 sm:gap-x-6">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-orange-600" />
                  <span>Installation rapide</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-orange-600" />
                  <span>Support 7j/7</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-orange-600" />
                  <span>Sans engagement</span>
                </div>
              </div>
            </div>

            {/* Colonne droite : image de présentation */}
            <div className="relative lg:col-span-7">
              <div
                aria-hidden="true"
                className="absolute inset-0 scale-95 rotate-1 rounded-3xl bg-gradient-to-tr from-orange-600/20 to-amber-400/20 blur-2xl"
              />

              <div className="relative rounded-2xl border border-slate-200/80 bg-white p-2 shadow-2xl shadow-orange-900/10 transition-all duration-300 hover:shadow-orange-900/15 sm:p-3">
                <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/85 px-3.5 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md sm:left-6 sm:top-6">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />

                  <span>Interface POS & caisse tactile</span>
                </div>

                <img
                  src={caisseImage}
                  alt="Présentation du système de caisse PC MAROC"
                  loading="eager"
                  fetchPriority="high"
                  className="h-[320px] w-full rounded-xl object-cover sm:h-[420px] lg:h-[480px]"
                />
              </div>

              {/* Élément décoratif */}
              <div className="absolute -bottom-5 -left-4 -z-10 h-24 w-24 rounded-2xl border border-orange-200/70 bg-orange-100/50 sm:-left-6 sm:h-32 sm:w-32" />

              <div className="absolute -right-3 -top-4 -z-10 h-20 w-20 rounded-full border border-amber-200/70 bg-amber-100/50 sm:-right-5 sm:h-24 sm:w-24" />
            </div>
          </section>

          {/* Cartes des avantages */}
          <section
            aria-label="Les avantages de notre démonstration"
            className="mb-8 mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="text-sm font-semibold leading-snug text-slate-800">
                    {benefit.title}
                  </p>
                </div>
              );
            })}
          </section>

          {/* Dernier appel à l'action */}
          <section className="relative mt-12 overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-r from-orange-50 via-white to-amber-50 p-7 sm:p-10">
            <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                  Votre projet, notre expertise
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Prêt à découvrir notre solution ?
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  Échangeons sur vos besoins et trouvons ensemble la solution
                  adaptée à votre établissement.
                </p>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppDemo}
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-orange-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-600/20 transition-all hover:-translate-y-0.5 hover:bg-orange-700"
              >
                Parler à un conseiller

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
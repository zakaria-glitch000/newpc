
import { useId } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ClipboardCheck } from 'lucide-react';

import {
  Handshake,
  Settings,
  GraduationCap,
  Headset,
  Code,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Users,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

import teamTrainingImage from '@/assets/accom.jpeg';
import teamImage from '@/assets/choisir.jpeg';

// ==========================================
// TYPES
// ==========================================

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

// ==========================================
// SERVICES
// ==========================================

const services: Service[] = [
  {
    title: 'Conseil & Accompagnement',
    description:
      'Analyse de vos besoins et solution adaptée à votre activité.',
    icon: Handshake,
  },
  {
    title: 'Installation & Déploiement',
    description:
      'Mise en service, configuration et paramétrage de vos solutions.',
    icon: Settings,
  },
  {
    title: 'Formation des Équipes',
    description:
      'Une prise en main simple et efficace pour vos collaborateurs.',
    icon: GraduationCap,
  },
  {
    title: 'Support & Maintenance',
    description:
      'Une assistance réactive et un suivi continu pour garantir la disponibilité de vos solutions.',
    icon: Headset,
  },
  {
    title: 'Développement sur Mesure',
    description:
      'Des applications métier personnalisées selon vos besoins spécifiques.',
    icon: Code,
  },
    {
    title: 'Audit & Optimisation',
    description:
      'Nous analysons vos installations et vos méthodes de travail pour améliorer les performances de vos solutions et accompagner la évolution de votre activité.',
    icon: ClipboardCheck,
  },
];

// ==========================================
// ANIMATIONS
// ==========================================

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// COMPONENT
// ==========================================

export function Services() {
  const id = useId().replace(/:/g, '');

  return (
    <main
      id="services"
      className="w-full overflow-hidden bg-white font-sans text-slate-800 antialiased"
    >

      {/* =====================================
          HERO / INTRODUCTION
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-slate-50 to-orange-50/70 py-20 sm:py-24">

        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* LEFT : TEXT */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={container}
              className="relative z-10"
            >

              <motion.div variants={item}>
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-orange-100 bg-orange-50 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-orange-700 sm:text-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
                  Nos services
                </div>
              </motion.div>

              <motion.h1
                variants={item}
                className="max-w-2xl text-4xl font-black leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              >
                Un accompagnement complet.

                <span className="mt-3 block bg-gradient-to-r from-amber-500 via-orange-500 to-orange-700 bg-clip-text text-transparent">
                  À chaque étape de votre projet.
                </span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
              >
                Nous vous accompagnons dans tous vos projets informatiques,
                de l'analyse de vos besoins à la mise en service de vos
                solutions. Notre équipe met son expertise à votre disposition
                pour vous proposer des services fiables, performants et adaptés
                à votre activité.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-8 space-y-4"
              >
                {[
                  'Des solutions adaptées à votre métier',
                  'Une équipe qualifiée à votre écoute',
                  'Un accompagnement technique durable',
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-700 sm:text-base"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    {feature}
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={item}
                className="mt-9 flex flex-wrap gap-4"
              >
                <a
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl"
                >
                  Parlons de votre projet
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>

              <motion.div
                variants={item}
                className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 pt-6 text-sm text-slate-600"
              >
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-orange-600" />
                  Expertise professionnelle
                </span>

                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-600" />
                  Support dédié
                </span>
              </motion.div>

            </motion.div>

            {/* RIGHT : IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-xl lg:ml-auto"
            >

              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-orange-200/70 via-amber-100/50 to-orange-100/60 blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white p-2 shadow-2xl shadow-orange-900/10">

                <div className="relative overflow-hidden rounded-[1.35rem]">

                  <img
                    src={teamTrainingImage}
                    alt="Notre équipe accompagnant ses clients"
className="h-[400px] w-full object-cover sm:h-[500px]"                 loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/5 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Votre partenaire technologique
                    </div>

                    <h2 className="max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
                      Votre réussite est notre priorité.
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
                      Des experts à vos côtés pour vous accompagner
                      dans tous vos projets.
                    </p>

                  </div>
                </div>
              </div>

              {/* FLOATING CARD */}

              <div className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-left-6">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Accompagnement personnalisé
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    À chaque étape
                  </p>
                </div>

              </div>

              <div className="absolute -right-3 top-8 hidden h-16 w-16 items-center justify-center rounded-2xl border border-white bg-white/95 text-orange-600 shadow-lg sm:flex">
                <Sparkles className="h-8 w-8" />
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================
          NOS SERVICES
      ===================================== */}

      <section className="relative bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* SECTION HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >

            <span className="inline-flex rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-700">
              Nos expertises
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Découvrez nos services
            </h2>

            <div className="mx-auto my-5 h-1 w-14 rounded-full bg-orange-500" />

            <p className="leading-7 text-slate-600">
              Une gamme complète de services pour vous accompagner,
              optimiser vos opérations et faire évoluer votre entreprise.
            </p>

          </motion.div>

          {/* SERVICE CARDS */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  variants={item}
                  className="group relative flex flex-col items-start overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/5 sm:p-8"
                >

                  {/* DECORATION */}

                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-orange-50 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                  {/* ICON */}

                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">

                    <Icon className="h-7 w-7" strokeWidth={1.8} />

                  </div>

                  {/* TITLE */}

                  <h3 className="relative mb-3 text-lg font-bold text-slate-900 transition-colors group-hover:text-orange-700">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="relative flex-1 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  {/* BOTTOM */}

                  <div className="relative mt-6 flex items-center gap-2 text-sm font-bold text-orange-600">

                    En savoir plus

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

                  </div>

                </motion.div>
              );

            })}

          </motion.div>

        </div>
      </section>

      {/* =====================================
          POURQUOI NOUS CHOISIR
      ===================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-orange-50/70 py-20 sm:py-24">

        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-700">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Notre engagement
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Pourquoi choisir{' '}
                <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  PC MAROC
                </span>
                {' '}?
              </h2>

              <div className="my-5 h-1 w-14 rounded-full bg-orange-500" />

              <p className="max-w-xl text-base leading-8 text-slate-600">
                Nous mettons notre savoir-faire et notre expertise
                au service de votre entreprise afin de vous proposer
                un accompagnement fiable et durable.
              </p>

              <div className="mt-8 space-y-6">

                {[
                  {
                    icon: ShieldCheck,
                    title: 'Une expertise professionnelle',
                    desc: 'Des solutions fiables pensées pour répondre à vos besoins.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Un gain de productivité',
                    desc: 'Optimisez vos processus et améliorez votre organisation.',
                  },
                  {
                    icon: Sparkles,
                    title: 'Des solutions modernes',
                    desc: 'Des outils intuitifs et adaptés à votre environnement.',
                  },
                  {
                    icon: Users,
                    title: 'Un accompagnement durable',
                    desc: 'Une équipe disponible pour vous conseiller et vous assister.',
                  },
                ].map((feature) => {

                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="group flex items-start gap-4"
                    >

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-100 bg-orange-50 text-orange-600 transition-all duration-300 group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-orange-700">
                          {feature.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {feature.desc}
                        </p>
                      </div>

                    </div>
                  );
                })}

              </div>

              <a
                href="/#contact"
                className="group mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700"
              >
                Contactez notre équipe
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

            </div>

            {/* IMAGE */}

            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-orange-200/70 via-amber-100/50 to-orange-100/60 blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white p-2 shadow-2xl shadow-orange-900/10">

                <img
                  src={teamImage}
                  alt="Équipe professionnelle"
className="h-auto w-full rounded-[1.35rem] object-contain"                  loading="lazy"
                />

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="bg-white py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">

            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-100/60 blur-3xl" />

            <div className="relative">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <Handshake className="h-7 w-7" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Construisons ensemble votre réussite.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Vous avez un projet ou besoin d'un accompagnement
                informatique ? Notre équipe est à votre disposition
                pour étudier vos besoins et vous proposer la solution
                la plus adaptée.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">

                <a
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700"
                >
                  Discutons de votre projet
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

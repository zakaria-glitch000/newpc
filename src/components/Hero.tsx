import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  Lightbulb,
  Settings,
  Users,
  Headphones,
} from 'lucide-react';
import heroImage from '@/assets/IMAGE.jpg';

const expertiseSteps = [
  {
    icon: Lightbulb,
    title: 'Conseil & Analyse',
    description: 'Une étude personnalisée de vos besoins.',
  },
  {
    icon: Settings,
    title: 'Solutions performantes',
    description: 'Des technologies fiables et adaptées à votre métier.',
  },
  {
    icon: Users,
    title: 'Installation & Formation',
    description: 'Un accompagnement complet sur site.',
  },
  {
    icon: Headphones,
    title: 'Support réactif',
    description: 'Une équipe à vos côtés dans la durée.',
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  return (
    <section id="home" className="bg-white pt-16">
      {/* HERO */}
      <div className="relative">
        <div className="relative z-10 lg:absolute lg:inset-0 lg:flex lg:items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8 lg:py-0"
          >
            <div className="max-w-[30rem]">
              <motion.p
                variants={item}
                className="text-xs font-semibold tracking-[0.18em] text-brand-600"
              >
                TECHNOLOGIE · LOGICIELS · INNOVATION
              </motion.p>

              <motion.h1
                variants={item}
                className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl"
              >
                Des solutions technologiques qui font{' '}
                <span className="text-brand-500">
                  avancer votre entreprise.
                </span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg"
              >
                Nous accompagnons les professionnels avec des solutions
                d'encaissement, des logiciels de gestion et des applications
                développées sur mesure.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-7 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#solutions"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-500/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                >
                  Découvrir nos solutions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                >
                  <Phone className="h-4 w-4 text-brand-500" />
                  Parler à un expert
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <img
          src={heroImage}
          alt="Solutions technologiques"
          className="block h-auto w-full"
        />

        <div
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 28%, rgba(255,255,255,0) 55%)',
          }}
        />
      </div>

      {/* NOTRE EXPERTISE */}
      <div className="relative overflow-hidden border-y border-slate-100 bg-slate-50/70 px-6 py-10 lg:px-8 lg:py-12">
        {/* Décoration de fond */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.span
              variants={item}
              className="mb-4 inline-flex rounded-full border border-orange-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-600 shadow-sm"
            >
              Notre Expertise
            </motion.span>

            <motion.h2
              variants={item}
              className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl"
            >
              Un partenaire pour la réussite de{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                vos projets
              </span>
            </motion.h2>

            <motion.p
              variants={item}
              className="mx-auto mb-8 mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base"
            >
              Nous concevons, intégrons et déployons des solutions
              technologiques adaptées aux besoins des professionnels. De
              l'encaissement au développement d'applications sur mesure, nous
              vous accompagnons à chaque étape de votre transformation digitale.
            </motion.p>

            {/* Cartes expertise */}
            <motion.div
              variants={container}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {expertiseSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.title}
                    variants={item}
                    className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-200/60"
                  >
                    <div className="absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-400 to-orange-600 transition-transform duration-300 group-hover:scale-y-100" />

                    <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-orange-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Icône */}
                    <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 transition-all duration-300 group-hover:scale-105 group-hover:border-orange-200 group-hover:bg-orange-600 group-hover:shadow-lg group-hover:shadow-orange-600/20">
                      <Icon
                        className="h-8 w-8 text-brand-600 transition-colors duration-300 group-hover:text-white"
                        strokeWidth={1.75}
                      />
                    </div>

                    <h3 className="relative z-10 mb-3 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-orange-700">
                      {step.title}
                    </h3>

                    <p className="relative z-10 max-w-xs text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
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
    <section id="home" className="relative overflow-hidden bg-white pt-[calc(4rem+0.5cm)]">
      {/* HERO SECTION */}
      <div className="relative">
        <div className="relative z-10 lg:absolute lg:inset-0 lg:flex lg:items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 lg:py-0"
          >
            <div className="max-w-[34rem]">
              {/* Titre b la barre orange 3la l-isser */}
              <motion.div
                variants={item}
                className="border-l-4 border-amber-600 pl-4"
              >
                <h1 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
                  La technologie au service <br />
                  de votre activité.
                </h1>
              </motion.div>

              <motion.p
                variants={item}
                className="mt-5 max-w-md text-base font-medium leading-relaxed text-slate-600 sm:text-lg"
              >
                Des solutions d'encaissement et de gestion adaptées à votre métier.
              </motion.p>

              {/* Boutonat */}
              <motion.div
                variants={item}
                className="mt-7 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#solutions"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-600/25 transition-all hover:bg-amber-700 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                >
                  Découvrir nos solutions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                >
                  Demander une démo
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Taswira dyal la caisse */}
        <img
          src={heroImage}
          alt="La technologie au service de votre activité"
          className="block h-auto w-full object-cover lg:min-h-[520px]"
        />

        {/* Gradient fade f desktop */}
        <div
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.85) 32%, rgba(255,255,255,0) 60%)',
          }}
        />

        {/* Wave / Wave shape orange l-taht dyal l-hero */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            className="relative block w-full h-8 sm:h-12 lg:h-16"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C150,90 400,0 600,40 C800,80 1050,10 1200,50 L1200,120 L0,120 Z"
              fill="#ea580c"
              fillOpacity="0.9"
            ></path>
          </svg>
        </div>
      </div>

      {/* SECTION NOTRE EXPERTISE */}
      <div className="relative overflow-hidden border-y border-slate-100 bg-slate-50/70 px-6 py-12 lg:px-8 lg:py-16">
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
              className="mb-3 inline-flex rounded-full border border-orange-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-600 shadow-sm"
            >
              Notre Expertise
            </motion.span>

            <motion.h2
              variants={item}
              className="mx-auto mt-2 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl"
            >
              Un partenaire pour la réussite de{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                vos projets
              </span>
            </motion.h2>

            <motion.p
              variants={item}
              className="mx-auto mb-10 mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base"
            >
              Nous concevons, intégrons et déployons des solutions technologiques adaptées aux besoins des professionnels. De l'encaissement au développement d'applications sur mesure, nous vous accompagnons à chaque étape de votre transformation digitale.
            </motion.p>

            {/* Cartes d'expertise */}
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

                    <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 transition-all duration-300 group-hover:scale-105 group-hover:border-orange-200 group-hover:bg-orange-600 group-hover:shadow-lg group-hover:shadow-orange-600/20">
                      <Icon
                        className="h-8 w-8 text-amber-600 transition-colors duration-300 group-hover:text-white"
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
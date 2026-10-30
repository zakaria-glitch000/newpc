import { motion, type Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '@/data/content';
import {
  SectionTag,
  staggerContainer,
  fadeUp,
} from './ui/Reveal';

import teamTrainingImage from '@/assets/accompagnement.jpeg';

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

const highlights = [
  'Installation et configuration',
  'Formation personnalisée',
  'Support technique réactif',
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-950 pt-6 text-slate-100 selection:bg-orange-600 selection:text-white">
      {/* HERO SERVICES AVEC IMAGE EN FOND ET EFFET DABAB (GRADIENT) */}
      <div className="relative">
        {/* Contenu texte par-dessus l'image sur les grands écrans */}
        <div className="relative z-10 lg:absolute lg:inset-0 lg:flex lg:items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8 lg:py-0"
          >
            <div className="max-w-[34rem]">
              <motion.div variants={item}>
                <SectionTag>Nos services</SectionTag>
              </motion.div>

              <motion.h1
                variants={item}
                className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl"
              >
                Un accompagnement{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  de A à Z.
                </span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg"
              >
                De l’installation initiale au support permanent, nous sommes
                présents à chaque étape de la vie de vos systèmes pour garantir
                le succès de votre entreprise.
              </motion.p>

              {/* Points forts */}
              <motion.div variants={item} className="mt-5 space-y-2.5">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 text-sm font-medium text-slate-200 sm:text-base"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-600 text-white shadow-sm shadow-orange-600/20">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    {highlight}
                  </div>
                ))}
              </motion.div>

              <motion.div variants={item} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/25 transition-all hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-600/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  Parlons de votre projet
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* L'image de fond */}
        <img
          src={teamTrainingImage}
          alt="Accompagnement et services"
          className="block h-auto w-full object-cover min-h-[380px] lg:min-h-[480px] opacity-60 lg:opacity-100"
        />

        {/* Effet de dégradé/dabab sombre (Gradient overlay) */}
        <div
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(to right, rgba(2, 6, 23, 0.98) 0%, rgba(2, 6, 23, 0.85) 30%, rgba(2, 6, 23, 0) 60%)',
          }}
        />
        {/* Dégradé pour mobile */}
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px] lg:hidden" />
      </div>

      {/* CARTES SERVICES EN BAS */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Nos étapes d'intervention
          </h2>
          <p className="mt-2 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Une méthodologie structurée pour vous offrir une tranquillité d'esprit totale.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              className="group relative overflow-hidden bg-slate-900 p-6 transition-all duration-300 hover:z-10 hover:bg-slate-900 hover:shadow-xl hover:shadow-orange-950/20 sm:p-7"
            >
              {/* Ligne verticale animée */}
              <div className="absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-400 to-orange-600 transition-transform duration-300 ease-out group-hover:scale-y-100" />

              {/* Halo au survol */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-orange-600/0 blur-3xl transition-all duration-500 group-hover:bg-orange-600/20" />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 transition-all duration-300 group-hover:scale-105 group-hover:border-orange-500/30 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-600 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    <service.icon className="h-5 w-5 text-orange-400 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <span className="font-display text-3xl font-bold text-slate-800 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:text-orange-500/60">
                    {service.step}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-white transition-colors duration-300 group-hover:text-orange-400">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  {service.description}
                </p>

                <div className="mt-4 h-0.5 w-8 origin-left rounded-full bg-gradient-to-r from-amber-400 to-orange-600 transition-all duration-300 group-hover:w-16" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
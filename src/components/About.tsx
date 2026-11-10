import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal, SectionTag } from './ui/Reveal';

import teamTrainingImage from '@/assets/propos.jpeg';

const ABOUT_POINTS = [
  'Expertise technique et savoir-faire reconnu',
  'Solutions fiables et accompagnement durable',
  'Approche sur mesure et conseil personnalisé',
];

export function About() {
  return (
    <section
      id="About"
      className="relative overflow-hidden bg-white py-8 lg:py-12"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-orange-400/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-amber-400/[0.06] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: visual */}
          <Reveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="group relative"
            >
              {/* Image glow */}
              <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-400/10 via-orange-500/5 to-transparent opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-300/20">
                <img
                  src={teamTrainingImage}
                  alt="Équipe PC MAROC en collaboration"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />

                {/* Animated vertical accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-amber-400 to-orange-600 transition-transform duration-500 group-hover:scale-x-100" />
              </div>

              {/* Floating experience card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -bottom-5 -right-2 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-xl shadow-slate-900/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 sm:-right-4 sm:p-5"
              >
                <div className="font-display text-3xl font-bold tracking-tight text-transparent bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text sm:text-4xl">
                  25+
                </div>

                <div className="mt-0.5 text-xs font-medium text-slate-500 sm:text-sm">
                  ans d'expertise IT
                </div>

                <div className="mt-2 h-0.5 w-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-600" />
              </motion.div>

              {/* Decorative corner */}
              <div className="pointer-events-none absolute -left-3 -top-3 -z-10 h-20 w-20 rounded-tl-3xl border-l-2 border-t-2 border-orange-300/60 sm:-left-4 sm:-top-4" />
            </motion.div>
          </Reveal>

          {/* Right: content */}
          <div className="pt-2 lg:pt-0">
            <Reveal>
              <SectionTag>À propos</SectionTag>

              <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                La technologie au service de {' '}
                <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  votre métier.
                </span>
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
                PC MAROC, intégrateur de solutions d’encaissement et de gestion, accompagne les professionnels de la restauration, du commerce, des services et les réseaux de points de vente dans leur transformation digitale.
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                Fort de 25 ans d’expérience, PC MAROC met son expertise technique et sa connaissance des métiers au service des entreprises, en proposant des solutions fiables, performantes et adaptées à leurs besoins.
              </p>
            </Reveal>

            {/* Advantages checklist */}
            <Reveal delay={0.15}>
              <div className="mt-6 space-y-2">
                {ABOUT_POINTS.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.1,
                    }}
                    className="group/point flex items-start gap-3 rounded-xl border border-transparent px-3 py-2 transition-all duration-300 hover:border-orange-100 hover:bg-orange-50/60"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500 transition-colors duration-300 group-hover/point:text-orange-600" />

                    <span className="text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover/point:text-slate-900">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.3}>
              <a
                href="#contact"
                className="group relative mt-6 inline-flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:text-orange-700 hover:shadow-lg hover:shadow-orange-900/5 sm:mt-8"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-orange-50 to-amber-50 transition-transform duration-500 group-hover:translate-x-0" />

                <span className="relative z-10">
                  Discutons de votre projet
                </span>

                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
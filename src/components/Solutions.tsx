
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SOLUTIONS } from '@/data/content';
import { Reveal, SectionTag, staggerContainer, fadeUp } from './ui/Reveal';

export function Solutions() {
  return (
    <section
      id="solutions"
      className="relative isolate overflow-hidden bg-[#080d18] py-20 text-white lg:py-28"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-600/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:55px_55px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionTag>NOTRE SAVOIR-FAIRE</SectionTag>

              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Des solutions
                <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                  pensées pour vous.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Un ensemble de technologies complémentaires pour optimiser
                votre organisation, faciliter votre quotidien et accompagner
                durablement la croissance de votre entreprise.
              </p>
            </div>

            <div className="flex items-center gap-3 pb-2 text-sm text-slate-400">
              <Sparkles className="h-5 w-5 text-orange-400" />
              <span>La technologie au service de votre activité</span>
            </div>
          </div>
        </Reveal>

        {/* SOLUTIONS GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SOLUTIONS.map((solution, index) => (
            <motion.div
              key={solution.title}
              variants={fadeUp}
              className="h-full"
            >
              <Link
                to={`/solutions/${solution.slug}`}
                aria-label={`Découvrir ${solution.title}`}
                className="group block h-full rounded-3xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
              >
                <article className="relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#151d2d] to-[#0d1422] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_25px_70px_-20px_rgba(249,115,22,0.2)]">

                  {/* HOVER LIGHT */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-500/0 blur-[80px] transition-all duration-700 group-hover:bg-orange-500/15" />

                  <div className="relative flex flex-1 flex-col">

                    {/* TOP */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 transition-all duration-500 group-hover:scale-110 group-hover:border-orange-400/50 group-hover:bg-orange-500/20">
                        <solution.icon className="h-7 w-7 text-orange-400 transition-transform duration-500 group-hover:rotate-6" />
                      </div>

                      <span className="font-mono text-sm tracking-widest text-slate-600 transition-colors group-hover:text-orange-400/70">
                        0{index + 1}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-8 text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-orange-400">
                      {solution.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {solution.description}
                    </p>

                    {/* FEATURES */}
                    <ul className="mt-6 flex-1 space-y-3">
                      {solution.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/10">
                            <Check className="h-3 w-3 text-orange-400" />
                          </span>
                          <span className="leading-6">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* BOTTOM LINK */}
                    <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-5">
                      <span className="text-sm font-semibold text-orange-400 transition-colors group-hover:text-orange-300">
                        Découvrir la solution
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                      </div>
                    </div>

                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM MESSAGE */}
        <Reveal>
          <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500/50" />
            <p className="text-sm text-slate-500">
              Des outils adaptés à vos besoins, une technologie pensée pour votre réussite.
            </p>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500/50" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}

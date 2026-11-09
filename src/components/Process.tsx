import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '@/data/content';
import { Reveal, SectionTag } from './ui/Reveal';

export function Process() {
  return (
    <section className="relative overflow-hidden bg-white py-8 lg:py-12">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 grid-bg-fine opacity-30" />

      {/* Background glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-200/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <Reveal className="max-w-2xl">
          <SectionTag>Aproche</SectionTag>

          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Votre projet, notre expertise
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              .
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            Une approche structurée et transparente, de l'analyse initiale à
            l'accompagnement long terme.
          </p>
        </Reveal>

        {/* Process steps */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-950/5 xl:p-6"
              >
                {/* Animated vertical line */}
                <div className="absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-400 to-orange-600 transition-transform duration-300 ease-out group-hover:scale-y-100" />

                {/* Soft hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-100/0 blur-3xl transition-all duration-500 group-hover:bg-orange-100/80" />

                <div className="relative z-10">
                  {/* Step number and connector */}
                  <div className="relative flex items-center">
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-300 group-hover:scale-105 group-hover:border-orange-200 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-600 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                      <span className="font-display text-xl font-bold text-orange-600 transition-colors duration-300 group-hover:text-white">
                        {step.step}
                      </span>
                    </div>

                    {/* Connector arrow */}
                    {i < PROCESS_STEPS.length - 1 && (
                      <div className="ml-auto hidden items-center text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500 lg:flex">
                        <div className="mr-1 h-px w-6 bg-gradient-to-r from-amber-300 to-orange-400 xl:w-8" />
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </div>

                  {/* Step title */}
                  <h3 className="mt-4 font-display text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-orange-700 xl:text-xl">
                    {step.title}
                  </h3>

                  {/* Step description */}
                  <p className="mt-2 text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                    {step.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-4 h-0.5 w-8 origin-left rounded-full bg-gradient-to-r from-amber-400 to-orange-600 transition-all duration-300 group-hover:w-16" />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-8 lg:py-12">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      {/* Background glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/[0.08] blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/[0.06] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          {/* CTA panel */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 px-6 py-8 text-center shadow-xl shadow-slate-900/[0.04] backdrop-blur-sm sm:px-10 sm:py-10 lg:px-16 lg:py-12"
          >
            {/* Animated border accent */}
            <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 transition-transform duration-700 group-hover:scale-x-100" />

            {/* Panel glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-100/0 blur-3xl transition-all duration-700 group-hover:bg-orange-100/80" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-100/0 blur-3xl transition-all duration-700 group-hover:bg-amber-100/70" />

            <div className="relative z-10">
              {/* Label */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-700">
                <Sparkles className="h-4 w-4 text-orange-500" />
                Donnons vie à vos projets
              </div>

              {/* Heading */}
              <h2 className="mx-auto max-w-3xl text-balance font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Prêt à faire évoluer{' '}
                <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                  votre entreprise ?
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
                Parlons de votre projet et construisons ensemble la solution
                adaptée à vos besoins.
              </p>

              {/* CTA button */}
              <div className="mt-8 flex justify-center">
                <a
                  href="#contact"
                  className="group/button relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/30 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 sm:px-7 sm:text-base"
                >
                  {/* Button hover shine */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/button:translate-x-full" />

                  <span className="relative z-10">Demander une démo</span>

                  <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                </a>
              </div>

              {/* Bottom note */}
              <p className="mt-4 text-xs text-slate-400 sm:text-sm">
                Une équipe à votre écoute pour vous accompagner.
              </p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
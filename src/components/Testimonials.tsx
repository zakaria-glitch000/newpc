import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/content';
import {
  Reveal,
  SectionTag,
  staggerContainer,
  fadeUp,
} from './ui/Reveal';

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-8 lg:py-12 text-slate-100 selection:bg-orange-600 selection:text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-orange-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <Reveal className="max-w-2xl">
          <SectionTag>Témoignages</SectionTag>

          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            La confiance de nos clients,{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              notre meilleure preuve.
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            La satisfaction de nos clients reflète notre engagement pour des
            solutions fiables, un service de qualité et un accompagnement durable.
          </p>
        </Reveal>

        {/* Testimonials cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition-all duration-300 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-950/40 sm:p-7"
            >
              {/* Animated vertical line */}
              <div className="absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-400 to-orange-600 transition-transform duration-300 ease-out group-hover:scale-y-100" />

              {/* Soft hover glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-600/0 blur-3xl transition-all duration-500 group-hover:bg-orange-600/20" />

              <div className="relative z-10 flex h-full flex-col">
                {/* Quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 transition-all duration-300 group-hover:border-orange-500/30 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-600 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                    <Quote className="h-4 w-4 text-orange-400 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <span className="font-display text-4xl font-bold leading-none text-slate-800 transition-colors duration-300 group-hover:text-orange-500/40">
                    ”
                  </span>
                </div>

                {/* Testimonial text */}
                <blockquote className="mt-4 flex-1 text-sm leading-6 text-slate-300 transition-colors duration-300 group-hover:text-slate-200 sm:text-base">
                  « {t.quote} »
                </blockquote>

                {/* Author */}
                <figcaption className="mt-5 border-t border-slate-800 pt-4 transition-colors duration-300 group-hover:border-orange-500/30">
                  <div className="font-display text-sm font-semibold text-white transition-colors duration-300 group-hover:text-orange-400">
                    {t.name}
                  </div>

                  <div className="mt-0.5 text-xs leading-5 text-slate-400">
                    {t.role} · {t.company}
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-3 h-0.5 w-8 origin-left rounded-full bg-gradient-to-r from-amber-400 to-orange-600 transition-all duration-300 group-hover:w-14" />
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
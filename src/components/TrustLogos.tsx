import { motion } from 'framer-motion';
import { TRUST_LOGOS } from '@/data/content';

export function TrustLogos() {
  const logos = [...TRUST_LOGOS, ...TRUST_LOGOS];

  return (
    <section className="relative border-y border-slate-800 bg-slate-950 py-16 text-slate-100 selection:bg-orange-600 selection:text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-sm font-medium text-slate-400"
        >
          Des solutions pensées pour les entreprises qui exigent le meilleur.
        </motion.p>

        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-16">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="font-display text-2xl font-bold tracking-tight text-slate-400 transition-colors hover:text-orange-400"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
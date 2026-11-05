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
    <section id="home" className="relative overflow-hidden bg-[#121212] pt-24 text-white">
      {/* HERO SECTION */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* TEXT CONTENT (LEFT) */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6"
          >
            {/* SUBTITLE UPPERCASE */}
            <motion.p
              variants={item}
              className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400"
            >
              PLATEFORME PDV ET PAIEMENT
            </motion.p>

            {/* MAIN TITLE */}
            <motion.h1
              variants={item}
              className="mt-4 font-sans text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl"
            >
              La technologie au service de votre activité
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base font-normal leading-relaxed text-gray-300 sm:text-lg"
            >
              Des solutions d'encaissement et de gestion adaptées à votre métier. Une plateforme intégrée qui propulse les entreprises performantes.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-red-700 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Voir une démo
              </a>

              <a
                href="#solutions"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-700 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-gray-500 hover:bg-white/5"
              >
                Découvrir nos solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* IMAGES DISPLAY (RIGHT - DIAMOND CARDS) */}
          <div className="relative flex items-center justify-center lg:col-span-6 lg:justify-end">
            <div className="relative flex h-[360px] w-full max-w-[500px] items-center justify-center sm:h-[450px]">
              
              {/* LARGE DIAMOND CARD (MAIN IMAGE) */}
              <div className="relative h-64 w-64 overflow-hidden rounded-[40px] rotate-45 shadow-2xl sm:h-80 sm:w-80">
                <img
                  src={heroImage}
                  alt="La technologie au service de votre activité"
                  className="h-full w-full -rotate-45 scale-150 object-cover"
                />
              </div>

              {/* SMALL DIAMOND CARD (SECONDARY IMAGE OVERLAY) */}
              <div className="absolute right-0 top-4 h-36 w-36 overflow-hidden rounded-[28px] rotate-45 border-4 border-[#121212] shadow-2xl sm:right-4 sm:h-48 sm:w-48">
                <img
                  src={heroImage}
                  alt="Terminal de paiement"
                  className="h-full w-full -rotate-45 scale-150 object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* SECTION NOTRE EXPERTISE */}
      <div className="relative border-t border-zinc-800 bg-zinc-900/50 px-6 py-16 lg:px-8 lg:py-24">
        <div className="relative mx-auto max-w-7xl text-center">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.span
              variants={item}
              className="mb-3 inline-flex rounded-full border border-zinc-700 bg-zinc-800 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-red-500"
            >
              Notre Expertise
            </motion.span>

            <motion.h2
              variants={item}
              className="mx-auto mt-2 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
            >
              Un partenaire pour la réussite de{' '}
              <span className="text-red-600">vos projets</span>
            </motion.h2>

            <motion.p
              variants={item}
              className="mx-auto mb-12 mt-4 max-w-3xl text-sm leading-relaxed text-gray-400 sm:text-base"
            >
              Nous concevons, intégrons et déployons des solutions technologiques adaptées aux besoins des professionnels. De l'encaissement au développement d'applications sur mesure.
            </motion.p>

            {/* EXPERTISE CARDS */}
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
                    className="group relative flex h-full flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/80 px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-red-600/50 hover:bg-zinc-900"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-800 transition-colors duration-300 group-hover:border-red-600 group-hover:bg-red-600">
                      <Icon
                        className="h-7 w-7 text-red-500 transition-colors duration-300 group-hover:text-white"
                        strokeWidth={1.75}
                      />
                    </div>

                    <h3 className="mb-3 text-lg font-bold text-white transition-colors duration-300 group-hover:text-red-500">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-400">
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
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Monitor,
  BarChart3,
  Headphones,
} from 'lucide-react';
import heroImage from '@/assets/IMAGE.jpg'; // Hna dir la photo dyal l-POS terminal

// Les 3 cartes dyal la deuxième section (Fond blanc)
const benefits = [
  {
    icon: Monitor,
    title: 'Simple et performant',
    description:
      'Des solutions intuitives pour encaisser rapidement et optimiser vos opérations quotidiennes.',
  },
  {
    icon: BarChart3,
    title: 'Gardez le contrôle',
    description:
      'Suivez vos ventes, analysez vos performances et pilotez votre activité avec précision.',
  },
  {
    icon: Headphones,
    title: 'Un partenaire à vos côtés',
    description:
      'Du conseil à l’installation, profitez d’un accompagnement, de formations et d’un support de proximité.',
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
    <div className="w-full">
      {/* SECTION 1: HERO (FOND NOIR) */}
      <section id="home" className="relative overflow-hidden bg-[#0c0d10] pt-12 pb-16 lg:pt-20 lg:pb-24 text-white">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            
            {/* TEXT CONTENT (LEFT) */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="z-10 lg:col-span-7"
            >
              {/* LOGO / BRAND NAME */}
              <motion.div variants={item} className="mb-6 sm:mb-8">
              
              </motion.div>

              {/* MAIN TITLE WITH ORANGE GRADIENT EFFECT */}
              <motion.h2
                variants={item}
                className="font-sans text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                La solution d'encaissement pour tous les{' '}
                <span className="bg-gradient-to-r from-[#ff8c00] via-[#f96302] to-[#e05500] bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(249,99,2,0.3)]">
                  points de vente
                </span>
              </motion.h2>

              {/* ORANGE SEPARATOR BAR */}
              <motion.div
                variants={item}
                className="my-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#ff8c00] to-[#f96302]"
              />

              {/* DESCRIPTION */}
              <motion.p
                variants={item}
                className="max-w-xl text-base font-normal leading-relaxed text-gray-300 sm:text-lg"
              >
                Encaissement, gestion, suivi des ventes et reporting : une solution complète, fiable et évolutive, adaptée à votre activité.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                variants={item}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff8c00] via-[#f96302] to-[#e05500] px-8 py-4 text-base font-bold text-white shadow-[0_10px_25px_-5px_rgba(249,99,2,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_30px_-5px_rgba(249,99,2,0.6)] active:scale-[0.98]"
                >
                  Demander une démo gratuite
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center rounded-2xl border border-gray-500 bg-transparent px-7 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
                >
                  Nos solutions
                </a>
              </motion.div>

            </motion.div>

            {/* IMAGE WITH ORANGE INCUT CARD FRAME (RIGHT) */}
            <div className="relative flex items-center justify-center lg:col-span-5">
              <div className="relative w-full max-w-[500px]">
                
                {/* ORANGE BACKDROP / INCUT FRAME */}
                <div className="absolute -inset-2 rounded-[35px] border-4 border-[#f96302] transform rotate-3 sm:rotate-6 scale-95 opacity-90" />
                <div className="absolute -inset-1 rounded-[35px] bg-[#f96302] transform -rotate-2 opacity-20 blur-sm" />

                {/* MAIN TERMINAL CONTAINER */}
                <div className="relative overflow-hidden rounded-[28px] border border-gray-700 bg-gradient-to-b from-gray-900 to-black p-2 shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Terminal POS"
                    className="w-full rounded-[20px] object-cover"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: BIEN PLUS QU'UNE CAISSE ENREGISTREUSE (FOND BLANC) */}
      <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24 text-slate-900">
        
        {/* TRIANGLE DECORATION TOP-LEFT & BOTTOM-RIGHT */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#f96302] clip-path-top-left pointer-events-none opacity-90" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#f96302] clip-path-bottom-right pointer-events-none opacity-90" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* HEADER */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            {/* LITTLE ORANGE BAR */}
            <motion.div
              variants={item}
              className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#ff8c00] to-[#f96302]"
            />

            {/* TITLE */}
            <motion.h2
              variants={item}
              className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-[#0c0d10]"
            >
              Bien plus qu’une{' '}
              <span className="bg-gradient-to-r from-[#ff8c00] via-[#f96302] to-[#e05500] bg-clip-text text-transparent">
                caisse enregistreuse.
              </span>
            </motion.h2>

            {/* SUBTITLE */}
            <motion.p
              variants={item}
              className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg"
            >
              Simplifiez votre quotidien, maîtrisez votre gestion et développez votre activité grâce à des solutions d’encaissement performantes, adaptées à vos besoins.
            </motion.p>
          </motion.div>

          {/* 3 CARDS GRID */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 sm:mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  variants={item}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-100"
                >
                  <div>
                    {/* ICON */}
                    <div className="mb-6 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-50 text-[#f96302]">
                        <Icon className="h-10 w-10 text-[#f96302]" strokeWidth={2} />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-center text-xl font-bold text-slate-900">
                      {benefit.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-center text-sm leading-relaxed text-slate-600">
                      {benefit.description}
                    </p>
                  </div>

                  {/* ORANGE BOTTOM-RIGHT CORNER DECORATION */}
                  <div 
                    className="absolute bottom-0 right-0 h-7 w-7 bg-gradient-to-br from-[#ff8c00] to-[#f96302]"
                    style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
                  />
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
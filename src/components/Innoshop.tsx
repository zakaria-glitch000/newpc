import {
  Calendar,
  Phone,
  ArrowRight,
  ShoppingCart,
  Settings,
  TrendingUp,
  Users,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';

import innoshopImage from '@/assets/inno.jpeg';

/* =====================================================
    ANIMATIONS
===================================================== */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* =====================================================
    PAGE INNOSHOP (noir / blanc / orange)
===================================================== */

export default function Innoshop() {
  const whatsappNumber = '212661973253';

  const handleWhatsAppDemo = () => {
    const message = encodeURIComponent(
      'Bonjour, je souhaite demander une démonstration de la solution INNOSHOP.'
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleContact = () => {
    window.location.href = '/#contact';
  };

  const features = [
    {
      icon: ShoppingCart,
      title: 'Une solution complète',
      description: 'Pour votre magasin',
    },
    {
      icon: Settings,
      title: 'Une démonstration',
      description: 'Adaptée à vos besoins',
    },
    {
      icon: TrendingUp,
      title: 'Des fonctionnalités',
      description: 'Dédiées au retail',
    },
    {
      icon: Users,
      title: 'Un accompagnement',
      description: 'Par nos experts',
    },
  ];

  const steps = [
    { n: '01', label: 'Solution complète' },
    { n: '02', label: 'Démo personnalisée' },
    { n: '03', label: 'Accompagnement' },
  ];

  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* =====================================================
          HERO (sombre + orange)
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-[#0d0d0f] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* swoosh orange */}
          <div className="absolute -left-20 top-0 hidden h-full w-[45%] origin-top-left -skew-x-12 border-r-[10px] border-[#f26522] lg:block" />
          {/* lueurs */}
          <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#f26522]/20 blur-[110px]" />
          <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-[#ff8a1f]/15 blur-[110px]" />
          {/* grille de points */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-2 lg:pb-20 lg:pt-36">
          {/* TEXTE */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f26522] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-orange-600/30">
              <Sparkles className="h-3.5 w-3.5" />
              Solution Retail
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl xl:text-[3.4rem]">
              Découvrez notre solution{' '}
              <span className="text-[#ff8a1f]">en action.</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-white/90">
              Demandez une démonstration personnalisée et découvrez comment
              INNOSHOP peut simplifier la gestion de votre magasin, optimiser
              vos ventes et faciliter votre quotidien.
            </p>

            <div className="mt-5 h-1 w-24 rounded-full bg-[#f26522]" />

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleWhatsAppDemo}
                className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-[#f26522] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d95316] focus:outline-none focus:ring-4 focus:ring-orange-300/40"
              >
                <Calendar className="h-[18px] w-[18px]" />
                Demander une démo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={handleContact}
                className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff8a1f] hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-orange-300/30"
              >
                <Phone className="h-[18px] w-[18px]" />
                Nous contacter
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white/80">
              <CheckCircle2 className="h-[18px] w-[18px] text-[#ff8a1f]" />
              Une solution adaptée à votre activité
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[40px] bg-gradient-to-br from-[#ff8a1f]/30 to-[#f26522]/10 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-3xl rounded-tl-[90px] shadow-2xl shadow-black/50 ring-1 ring-white/15">
              <img
                src={innoshopImage}
                alt="Solution de caisse et logiciel de gestion INNOSHOP"
                decoding="async"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* carte sur l'image */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl bg-black/55 p-4 ring-1 ring-white/15 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-orange-300">
                    Solution de gestion
                  </span>
                  <strong className="block text-xl font-black tracking-tight text-white">
                    INNO<span className="text-[#ff8a1f]">O</span>SHOP
                  </strong>
                  <small className="text-xs text-white/75">
                    La gestion de votre magasin, simplifiée.
                  </small>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff8a1f] to-[#f26522] text-white shadow-lg shadow-orange-600/40">
                  <ShoppingCart className="h-6 w-6" />
                </span>
              </div>
            </div>

            {/* badge flottant */}
            <div className="absolute -bottom-5 left-3 hidden items-center gap-3 rounded-2xl bg-white p-3.5 shadow-xl shadow-black/30 sm:flex sm:-left-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#f26522]">
                <TrendingUp className="h-5 w-5" />
              </span>
              <div>
                <strong className="block text-sm font-black text-[#0b1b3a]">
                  Gestion optimisée
                </strong>
                <span className="text-xs text-slate-500">
                  Votre activité sous contrôle
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bandeau 3 points */}
        <div className="border-t border-white/10 bg-[#111113]">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-4 px-5 py-6 sm:grid-cols-3 sm:px-8 sm:divide-x sm:divide-white/15">
            {steps.map(({ n, label }) => (
              <div
                key={n}
                className="flex items-center justify-center gap-3 px-2"
              >
                <span className="text-3xl font-black text-[#ff8a1f]">{n}</span>
                <span className="text-sm font-bold sm:text-base">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FONCTIONNALITÉS (blanc + orange)
      ===================================================== */}

      <section className="relative bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#d95316] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#f26522]" />
              L’univers INNOSHOP
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#0b1b3a] sm:text-4xl lg:text-[2.6rem]">
              Une solution pensée{' '}
              <span className="text-[#f26522]">pour votre magasin.</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Tous les outils nécessaires pour simplifier votre gestion et
              développer votre activité au quotidien.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  variants={fadeUp}
                  transition={{ duration: 0.45 }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_32px_-16px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-[0_22px_44px_-18px_rgba(242,101,34,0.35)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff8a1f] to-[#f26522] text-white shadow-md shadow-orange-500/30 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </span>

                    <span className="text-3xl font-black text-slate-200 transition-colors duration-300 group-hover:text-orange-200">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-black tracking-tight text-[#0b1b3a]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {feature.description}
                  </p>

                  <div className="mt-5 h-1 w-12 rounded-full bg-[#f26522] transition-all duration-300 group-hover:w-full" />
                </motion.article>
              );
            })}
          </motion.div>

          {/* =====================================================
              CTA FINAL (noir → orange)
          ===================================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="relative isolate mt-14 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#111113] via-[#d95316] to-[#ff8a1f] px-6 py-10 sm:px-10 sm:py-12 lg:mt-16"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-28 left-1/3 -z-10 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl" />

            <div className="grid items-center gap-6 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-orange-100">
                  <Sparkles className="h-3.5 w-3.5" />
                  Passez à l’action
                </span>

                <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl">
                  Prêt à découvrir{' '}
                  <span className="whitespace-nowrap">
                    INNO<span className="text-[#0d0d0f]">O</span>SHOP
                  </span>{' '}
                  ?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-orange-50 sm:text-[15px]">
                  Contactez notre équipe pour découvrir la solution adaptée à
                  votre magasin.
                </p>
              </div>

              <div className="flex lg:justify-end">
                <button
                  type="button"
                  onClick={handleWhatsAppDemo}
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#0d0d0f] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a2a2e] focus:outline-none focus:ring-4 focus:ring-orange-200 sm:w-auto"
                >
                  Demander une démo
                  <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
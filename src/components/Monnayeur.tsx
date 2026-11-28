import {
  ArrowRight,
  Calendar,
  ChartNoAxesCombined,
  CheckCircle2,
  Clock,
  Coins,
  Phone,
  RefreshCw,
  Settings,
  ShieldCheck,
  Sparkles,
  Banknote,
} from 'lucide-react';
import { motion } from 'framer-motion';

/* Image du produit : caisse + monnayeur CashMag (sans les textes de l'affiche).
   Mettez votre fichier dans src/assets et adaptez le nom si besoin. */
import cashmagImage from '@/assets/cashmag.jpeg';

/* =====================================================
    CONTACT
===================================================== */

const CONTACT_LINK = '/#contact';
const WHATSAPP_NUMBER = '212661973253';

/* =====================================================
    DATA
===================================================== */

const BENEFITS: { icon: typeof ShieldCheck; title: string; lines: [string, string] }[] = [
  {
    icon: ShieldCheck,
    title: 'Sécurité renforcée',
    lines: ['Encaissement sans erreur', 'et moins de risque de fraude'],
  },
  {
    icon: Clock,
    title: 'Gain de temps',
    lines: ['Un encaissement plus rapide', 'et un service client fluide'],
  },
  {
    icon: Sparkles,
    title: 'Hygiène optimale',
    lines: ['Aucun contact direct', 'avec l’argent'],
  },
  {
    icon: Coins,
    title: 'Gestion simplifiée',
    lines: ['Comptage automatique', 'et clôture de caisse sans écart'],
  },
];

const FEATURES: { icon: typeof Coins; lines: [string, string] }[] = [
  { icon: Coins, lines: ['Accepte', 'pièces et billets'] },
  { icon: RefreshCw, lines: ['Rend la monnaie', 'automatiquement'] },
  { icon: ChartNoAxesCombined, lines: ['Suivi et reporting', 'des encaissements'] },
  { icon: Settings, lines: ['Intégration directe à', 'votre solution d’encaissement'] },
];

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
    PAGE CASHMAG (noir / blanc / orange)
===================================================== */

export default function CashMag() {
  const handleWhatsAppDemo = () => {
    const message = encodeURIComponent(
      'Bonjour, je souhaite une démonstration du monnayeur CashMag.'
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

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
              <Banknote className="h-3.5 w-3.5" />
              Solutions d’encaissement
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl xl:text-[3.4rem]">
              Le Monnayeur
              <br />
              <span className="text-[#ff8a1f]">CashMag</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-white/90">
              Automatisez vos encaissements en espèces et sécurisez votre
              activité. Une solution pour tous types de points de vente.
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

              <a
                href={CONTACT_LINK}
                className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff8a1f] hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-orange-300/30"
              >
                <Phone className="h-[18px] w-[18px]" />
                Nous contacter
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white/80">
              <CheckCircle2 className="h-[18px] w-[18px] text-[#ff8a1f]" />
              Intégration directe à votre solution d’encaissement
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

            <div className="relative overflow-hidden rounded-3xl bg-[#111113] shadow-2xl shadow-black/50 ring-1 ring-white/15">
              <img
                src={cashmagImage}
                alt="Caisse tactile avec monnayeur CashMag"
                decoding="async"
                className="block h-auto w-full"
              />

              <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-[#111113] p-4 sm:p-5">
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-orange-300">
                    Monnayeur automatique
                  </span>
                  <strong className="block text-xl font-black tracking-tight text-white">
                    Cash<span className="text-[#ff8a1f]">Mag</span>
                  </strong>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff8a1f] to-[#f26522] text-white shadow-lg shadow-orange-600/40">
                  <Coins className="h-6 w-6" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          AVANTAGES (blanc + orange)
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
              Pourquoi CashMag ?
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#0b1b3a] sm:text-4xl lg:text-[2.6rem]">
              Encaissez en espèces,{' '}
              <span className="text-[#f26522]">sans stress.</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Un monnayeur automatique qui sécurise vos espèces, accélère le
              passage en caisse et supprime les écarts.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4"
          >
            {BENEFITS.map(({ icon: Icon, title, lines }, index) => (
              <motion.article
                key={title}
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
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </p>

                <div className="mt-5 h-1 w-12 rounded-full bg-[#f26522] transition-all duration-300 group-hover:w-full" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FONCTIONNALITÉS (bandeau noir)
      ===================================================== */}

      <section className="bg-[#111113] text-white">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-white/15"
          >
            {FEATURES.map(({ icon: Icon, lines }) => (
              <motion.div
                key={lines.join(' ')}
                variants={fadeUp}
                className="flex flex-col items-center px-3 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#ff8a1f] text-[#ff8a1f]">
                  <Icon className="h-8 w-8" strokeWidth={1.6} />
                </span>

                <p className="mt-3 text-sm font-bold leading-tight sm:text-base">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CTA FINAL (noir → orange)
      ===================================================== */}

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="relative isolate overflow-hidden rounded-[32px] bg-gradient-to-r from-[#111113] via-[#d95316] to-[#ff8a1f] px-6 py-10 sm:px-10 sm:py-12"
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
                  Prêt à automatiser vos{' '}
                  <span className="text-[#0d0d0f]">encaissements</span> ?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-orange-50 sm:text-[15px]">
                  Contactez PC MAROC pour découvrir comment le monnayeur
                  CashMag s’intègre à votre solution d’encaissement.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <button
                  type="button"
                  onClick={handleWhatsAppDemo}
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#0d0d0f] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a2a2e] focus:outline-none focus:ring-4 focus:ring-orange-200 sm:w-auto"
                >
                  Demander une démo
                  <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <a
                  href={CONTACT_LINK}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#d95316] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-50 focus:outline-none focus:ring-4 focus:ring-orange-200 sm:w-auto"
                >
                  <Phone className="h-5 w-5" />
                  Nous contacter
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
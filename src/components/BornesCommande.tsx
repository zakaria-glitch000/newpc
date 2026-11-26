import type { ElementType } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CreditCard,
  Monitor,
  QrCode,
  Radio,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Store,
  Users,
  Zap,
  Clock3,
  BarChart3,
  Languages,
  Wifi,
} from 'lucide-react';

const advantages = [
  {
    icon: Monitor,
    title: 'Interface intuitive',
    description:
      'Une interface tactile claire et moderne qui permet à vos clients de parcourir vos produits et services en toute simplicité.',
  },
  {
    icon: Zap,
    title: 'Commande rapide',
    description:
      'Réduisez les files d’attente et facilitez la prise de commande grâce à un parcours client fluide et optimisé.',
  },
  {
    icon: CreditCard,
    title: 'Paiement intégré',
    description:
      'Une expérience de commande pensée pour faciliter le passage du panier au paiement.',
  },
];

const features = [
  {
    icon: ShoppingCart,
    title: 'Commande en autonomie',
    description:
      'Vos clients sélectionnent leurs produits, personnalisent leur commande et la valident directement depuis la borne.',
    items: [
      'Catalogue produits interactif',
      'Personnalisation des commandes',
      'Suggestions de produits',
      'Validation rapide du panier',
    ],
  },
  {
    icon: CreditCard,
    title: 'Paiement simplifié',
    description:
      'Facilitez le règlement grâce à une expérience de paiement intégrée et adaptée à votre environnement.',
    items: [
      'Paiement par carte',
      'Paiement sans contact',
      'Parcours de paiement fluide',
      'Confirmation de commande',
    ],
  },
  {
    icon: Radio,
    title: 'Technologie RFID',
    description:
      'La technologie RFID peut être intégrée selon votre besoin afin d’automatiser certaines étapes du parcours client.',
    items: [
      'Identification rapide',
      'Lecture des produits compatibles',
      'Gestion automatisée',
      'Expérience client enrichie',
    ],
  },
  {
    icon: BarChart3,
    title: 'Suivi et analyse',
    description:
      'Centralisez les informations issues de vos bornes pour mieux comprendre l’activité de vos points de vente.',
    items: [
      'Suivi des commandes',
      'Analyse des ventes',
      'Indicateurs de performance',
      'Données centralisées',
    ],
  },
];

const sectors = [
  {
    icon: Store,
    title: 'Restauration',
    description:
      'Fluidifiez la prise de commande dans les restaurants, snacks, fast-foods et espaces de restauration.',
    items: [
      'Menus interactifs',
      'Personnalisation des produits',
      'Commande autonome',
      'Réduction des files d’attente',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Commerce',
    description:
      'Proposez un parcours autonome pour présenter vos produits et simplifier l’expérience d’achat.',
    items: [
      'Présentation des produits',
      'Informations détaillées',
      'Recherche rapide',
      'Parcours d’achat optimisé',
    ],
  },
  {
    icon: Users,
    title: 'Services',
    description:
      'Adaptez la borne à vos besoins pour accueillir, orienter ou accompagner vos clients.',
    items: [
      'Accueil client',
      'Prise de rendez-vous',
      'Orientation',
      'Services en autonomie',
    ],
  },
];

const smartFeatures = [
  {
    icon: Settings2,
    title: 'Interface personnalisable',
    description:
      'Adaptez l’interface à votre identité visuelle, votre catalogue et votre parcours client.',
  },
  {
    icon: Languages,
    title: 'Expérience multilingue',
    description:
      'Proposez une interface adaptée à votre clientèle et à votre environnement commercial.',
  },
  {
    icon: Wifi,
    title: 'Solution connectée',
    description:
      'Connectez vos bornes à votre environnement informatique et à vos outils de gestion.',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité des données',
    description:
      'Une architecture pensée pour protéger les informations échangées lors des commandes.',
  },
  {
    icon: Smartphone,
    title: 'Expérience omnicanale',
    description:
      'Créez une continuité entre vos différents canaux de vente et points de contact.',
  },
  {
    icon: BarChart3,
    title: 'Pilotage centralisé',
    description:
      'Suivez et administrez votre solution depuis un environnement centralisé.',
  },
];

const rfidBenefits = [
  'Identification rapide des produits ou utilisateurs',
  'Automatisation de certaines opérations',
  'Réduction des manipulations',
  'Expérience client plus fluide',
];

function FeatureCard({
  index,
  icon: Icon,
  title,
  description,
  items,
}: {
  index: string;
  icon: ElementType;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="group relative h-full bg-white p-7 transition-colors duration-300 hover:bg-slate-50">
      <span className="absolute right-6 top-6 font-mono text-xs font-bold text-orange-500">
        {index}
      </span>

      <div className="flex h-12 w-12 items-center justify-center bg-slate-950 text-orange-400">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-5 font-display text-xl font-extrabold text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      <ul className="mt-5 space-y-2.5 border-t border-slate-200 pt-5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-slate-700"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectorCard({
  index,
  icon: Icon,
  title,
  description,
  items,
}: {
  index: string;
  icon: ElementType;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="group relative h-full border border-slate-200 border-t-4 border-t-orange-500 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-950 hover:shadow-xl">
      <span className="absolute right-6 top-6 font-mono text-xs font-bold text-orange-500">
        {index}
      </span>

      <div className="flex h-12 w-12 items-center justify-center bg-slate-950 text-orange-400 transition-colors group-hover:bg-orange-500 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-5 font-display text-xl font-extrabold text-slate-950 transition-colors group-hover:text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-slate-300">
        {description}
      </p>

      <ul className="mt-5 space-y-2 border-t border-slate-200 pt-5 transition-colors group-hover:border-white/20">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 text-sm text-slate-700 transition-colors group-hover:text-white"
          >
            <Check className="h-4 w-4 shrink-0 text-orange-600 group-hover:text-orange-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BornesCommande() {
  return (
    <div className="bg-white text-slate-800">
      {/* =========================================================
          HERO (inchangé)
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/70 via-transparent to-amber-50/30" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            to="/#solutions"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-orange-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux solutions
          </Link>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
                <Monitor className="h-4 w-4" />
                Bornes interactives
              </div>

              <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Bornes de commande
                <span className="block text-orange-600">
                  intelligentes
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
                Offrez à vos clients une expérience rapide, autonome et
                intuitive grâce à des bornes interactives conçues pour
                simplifier la commande et améliorer la fluidité de votre
                point de vente.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'Écran tactile',
                  'Commande autonome',
                  'Paiement intégré',
                  'RFID en option',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-700 hover:shadow-lg"
                >
                  Demander une étude
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <a
                  href="#fonctionnalites"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-orange-200 hover:text-orange-600"
                >
                  Découvrir la solution
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-premium">
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 p-8 sm:p-12">
                  <div className="mx-auto max-w-sm">
                    <div className="rounded-2xl border-4 border-slate-600 bg-slate-950 p-3 shadow-2xl">
                      <div className="overflow-hidden rounded-xl bg-white">
                        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="h-7 w-7 rounded-lg bg-orange-600" />
                            <span className="text-sm font-semibold text-slate-900">
                              Votre enseigne
                            </span>
                          </div>

                          <QrCode className="h-5 w-5 text-slate-400" />
                        </div>

                        <div className="grid grid-cols-2 gap-3 p-4">
                          {['Menu', 'Produits', 'Promotions', 'Commande'].map(
                            (item) => (
                              <div
                                key={item}
                                className="rounded-xl bg-slate-50 p-4 text-center"
                              >
                                <div className="mx-auto h-9 w-9 rounded-lg bg-orange-100" />
                                <p className="mt-2 text-xs font-medium text-slate-700">
                                  {item}
                                </p>
                              </div>
                            )
                          )}
                        </div>

                        <div className="m-4 rounded-xl bg-orange-600 px-4 py-3 text-center text-sm font-semibold text-white">
                          Commencer ma commande
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto mt-4 h-8 w-32 rounded-b-xl bg-slate-600" />
                    <div className="mx-auto h-3 w-52 rounded-full bg-slate-700" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                    <Zap className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Expérience</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Rapide & autonome
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 border-t-2 border-slate-950 pt-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                Une nouvelle expérience client
              </span>

              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Plus d’autonomie pour vos clients,
                <span className="block text-orange-600">plus de fluidité pour vos équipes.</span>
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-slate-600">
              Les bornes interactives permettent à vos clients de découvrir
              vos produits, passer leur commande et avancer dans leur parcours
              d’achat en toute autonomie. Une solution idéale pour réduire
              les temps d’attente et améliorer l’efficacité de votre point de
              vente.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative border border-slate-200 border-t-4 border-t-orange-500 bg-white p-7 transition-colors duration-300 hover:bg-orange-500"
                >
                  <span className="absolute right-6 top-6 font-mono text-xs font-bold text-orange-500 transition-colors group-hover:text-white/80">
                    0{index + 1}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center bg-slate-950 text-orange-400 transition-colors group-hover:bg-white group-hover:text-orange-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-extrabold text-slate-950 transition-colors group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-orange-50">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FONCTIONNALITES
      ========================================================== */}
      <section
        id="fonctionnalites"
        className="border-y border-slate-200 bg-slate-100 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:gap-10">
            {/* Panneau noir */}
            <div className="border-t-[6px] border-orange-500 bg-slate-950 p-8 text-white sm:p-10 lg:sticky lg:top-28">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                Fonctionnalités
              </span>

              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Une borne pensée <span className="text-orange-400">pour votre activité.</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                Chaque fonctionnalité est conçue pour rendre le parcours client
                plus simple tout en donnant à vos équipes les outils nécessaires
                pour piloter votre activité.
              </p>

              <p className="mt-8 font-mono text-6xl font-extrabold text-orange-500">04</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                modules clés
              </p>
            </div>

            {/* Grille */}
            <div className="grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  <FeatureCard index={`0${index + 1}`} {...feature} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOGICIEL / PERSONNALISATION (bande noire)
      ========================================================== */}
      <section className="border-t-[6px] border-orange-500 bg-slate-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                Logiciel & personnalisation
              </span>

              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Une expérience adaptée <span className="text-orange-400">à votre marque et à vos clients.</span>
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
                Votre borne doit s’intégrer naturellement dans votre
                environnement. Nous adaptons l’interface, les fonctionnalités
                et les connexions nécessaires à votre activité.
              </p>

              <div className="mt-8 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
                {smartFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="flex gap-3 bg-slate-950 p-5 transition-colors duration-300 hover:bg-slate-900"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-orange-500 text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-bold text-white">
                          {feature.title}
                        </h3>

                        <p className="mt-1 text-sm leading-relaxed text-slate-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="border border-white/15 bg-white/5 p-6 sm:p-8">
                <div className="border-t-4 border-orange-500 bg-slate-900 p-6">
                  <div className="flex items-center justify-between border-b border-white/15 pb-5">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                        Pilotage
                      </p>
                      <p className="mt-1 text-lg font-bold text-white">
                        Parc de bornes
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center bg-orange-500 text-white">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-px bg-white/15">
                    <div className="bg-slate-900 p-4">
                      <p className="text-xs text-slate-400">Bornes actives</p>
                      <p className="mt-2 text-2xl font-extrabold text-white">
                        Actives
                      </p>
                    </div>

                    <div className="bg-slate-900 p-4">
                      <p className="text-xs text-slate-400">Commandes</p>
                      <p className="mt-2 text-2xl font-extrabold text-white">
                        Temps réel
                      </p>
                    </div>
                  </div>

                  <div className="mt-px bg-slate-800/60 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">
                        État du système
                      </span>

                      <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Connecté
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RFID
      ========================================================== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid border border-slate-200 lg:grid-cols-2">
            <div className="border-t-[6px] border-orange-500 bg-slate-50 p-8 sm:p-12 lg:p-14">
              <div className="flex h-14 w-14 items-center justify-center bg-slate-950 text-orange-400">
                <Radio className="h-7 w-7" />
              </div>

              <span className="mt-7 block font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                Technologie RFID
              </span>

              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                RFID : une technologie pour aller plus loin.
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Selon votre activité, la RFID peut compléter votre solution
                afin d’automatiser certaines opérations et accélérer
                l’identification des produits ou des utilisateurs.
              </p>

              <ul className="mt-7 border-t border-slate-200">
                {rfidBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 border-b border-slate-200 py-3 text-sm font-medium text-slate-800"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-orange-600">
                      <Check className="h-3 w-3 text-white" />
                    </div>

                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-slate-950 p-10">
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
                aria-hidden="true"
              />

              <div className="relative text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-orange-400/40 bg-orange-500/10">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-orange-400/60 bg-orange-500/20">
                    <Radio className="h-10 w-10 text-orange-400" />
                  </div>
                </div>

                <div className="mt-7">
                  <p className="text-xl font-extrabold text-white">
                    Identification connectée
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Une technologie disponible selon vos besoins
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTEURS
      ========================================================== */}
      <section className="border-y border-slate-200 bg-slate-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 border-b-2 border-slate-950 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                Secteurs d’activité
              </span>

              <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Une solution adaptée à différents environnements.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Nous adaptons la borne à votre parcours client, vos contraintes
              et vos objectifs opérationnels.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <SectorCard index={`0${index + 1}`} {...sector} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ACCOMPAGNEMENT
      ========================================================== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                Notre accompagnement
              </span>

              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                De l’idée au déploiement.
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                PC MAROC vous accompagne dans l’étude, la configuration
                et l’intégration de votre solution de borne interactive.
              </p>

              <Link
                to="/#contact"
                className="group mt-8 inline-flex items-center gap-3 bg-slate-950 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-orange-600"
              >
                Parler de votre projet
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {[
                {
                  number: '01',
                  title: 'Analyse',
                  text: 'Compréhension de votre activité et de votre parcours client.',
                },
                {
                  number: '02',
                  title: 'Configuration',
                  text: 'Paramétrage de la borne selon vos besoins et votre environnement.',
                },
                {
                  number: '03',
                  title: 'Installation',
                  text: 'Mise en place et intégration de la solution sur site.',
                },
                {
                  number: '04',
                  title: 'Formation & support',
                  text: 'Accompagnement de vos équipes et assistance après déploiement.',
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="group bg-white p-7 transition-colors duration-300 hover:bg-slate-950"
                >
                  <span className="font-mono text-3xl font-extrabold text-orange-500">
                    {step.number}
                  </span>

                  <h3 className="mt-4 font-display text-lg font-extrabold text-slate-950 transition-colors group-hover:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-slate-300">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="bg-white px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-slate-950">
          <div className="absolute left-0 top-0 h-2 w-full bg-orange-500" aria-hidden="true" />

          <div className="relative px-8 py-14 sm:px-12 lg:px-16 lg:py-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-600/25 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-orange-400" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                    Modernisez votre parcours client
                  </span>
                </div>

                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Prêt à intégrer une borne interactive dans votre activité ?
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  Échangeons sur votre projet et définissons ensemble une
                  solution adaptée à votre point de vente, votre clientèle et
                  vos objectifs.
                </p>
              </div>

              <Link
                to="/#contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 bg-orange-500 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-slate-950"
              >
                Demander une étude
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
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
  icon: Icon,
  title,
  description,
  items,
}: {
  icon: typeof Monitor;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-premium"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-100 bg-orange-50">
        <Icon className="h-6 w-6 text-orange-600" />
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-slate-700"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function SectorCard({
  icon: Icon,
  title,
  description,
  items,
}: {
  icon: typeof Store;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-slate-200 bg-white p-7"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900">
        <Icon className="h-6 w-6 text-white" />
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      <ul className="mt-5 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm text-slate-700"
          >
            <Check className="h-3.5 w-3.5 text-amber-500" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function SmartFeature({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Settings2;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange-200 bg-orange-50">
        <Icon className="h-5 w-5 text-orange-600" />
      </div>

      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export function BornesCommande() {
  return (
    <div className="bg-white">
      {/* =========================================================
          HERO
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
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              Une nouvelle expérience client
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Plus d’autonomie pour vos clients,
              <span className="block">plus de fluidité pour vos équipes.</span>
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              Les bornes interactives permettent à vos clients de découvrir
              vos produits, passer leur commande et avancer dans leur parcours
              d’achat en toute autonomie. Une solution idéale pour réduire
              les temps d’attente et améliorer l’efficacité de votre point de
              vente.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
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
        className="bg-slate-50 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              Fonctionnalités
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Une borne pensée pour votre activité.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              Chaque fonctionnalité est conçue pour rendre le parcours client
              plus simple tout en donnant à vos équipes les outils nécessaires
              pour piloter votre activité.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LOGICIEL / PERSONNALISATION
      ========================================================== */}
      <section className="bg-slate-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-orange-300">
                Logiciel & personnalisation
              </span>

              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Une expérience adaptée à votre marque et à vos clients.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
                Votre borne doit s’intégrer naturellement dans votre
                environnement. Nous adaptons l’interface, les fonctionnalités
                et les connexions nécessaires à votre activité.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {smartFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div key={feature.title} className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <Icon className="h-5 w-5 text-orange-300" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-white">
                          {feature.title}
                        </h3>

                        <p className="mt-1 text-sm leading-relaxed text-slate-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Pilotage
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        Parc de bornes
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10">
                      <BarChart3 className="h-5 w-5 text-orange-300" />
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/5 p-4">
                      <p className="text-xs text-slate-500">Bornes actives</p>
                      <p className="mt-2 text-2xl font-bold text-white">
                        Actives
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/5 p-4">
                      <p className="text-xs text-slate-500">Commandes</p>
                      <p className="mt-2 text-2xl font-bold text-white">
                        Temps réel
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">
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
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-orange-100 bg-orange-50/50">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-14">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Radio className="h-7 w-7 text-orange-600" />
                </div>

                <span className="mt-7 block text-sm font-semibold uppercase tracking-wider text-orange-600">
                  Technologie RFID
                </span>

                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  RFID : une technologie pour aller plus loin.
                </h2>

                <p className="mt-5 text-lg leading-relaxed text-slate-500">
                  Selon votre activité, la RFID peut compléter votre solution
                  afin d’automatiser certaines opérations et accélérer
                  l’identification des produits ou des utilisateurs.
                </p>

                <ul className="mt-7 space-y-3">
                  {rfidBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-600">
                        <Check className="h-3 w-3 text-white" />
                      </div>

                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-slate-900 p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-950/80 to-slate-950" />

                <div className="relative text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-orange-400/30 bg-orange-500/10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-orange-400/40 bg-orange-500/10">
                      <Radio className="h-10 w-10 text-orange-300" />
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="text-xl font-semibold text-white">
                      Identification connectée
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      Une technologie disponible selon vos besoins
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTEURS
      ========================================================== */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              Secteurs d’activité
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Une solution adaptée à différents environnements.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              Nous adaptons la borne à votre parcours client, vos contraintes
              et vos objectifs opérationnels.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <SectorCard {...sector} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ACCOMPAGNEMENT
      ========================================================== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                Notre accompagnement
              </span>

              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                De l’idée au déploiement.
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-slate-500">
                ORALI SYSTEMS vous accompagne dans l’étude, la configuration
                et l’intégration de votre solution de borne interactive.
              </p>

              <Link
                to="/#contact"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700"
              >
                Parler de votre projet
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
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
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <span className="text-sm font-bold text-orange-600">
                    {step.number}
                  </span>

                  <h3 className="mt-3 font-display text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
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
      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-900">
          <div className="relative px-8 py-14 sm:px-12 lg:px-16 lg:py-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-orange-300" />
                  <span className="text-sm font-semibold text-orange-300">
                    Modernisez votre parcours client
                  </span>
                </div>

                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
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
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-100"
              >
                Demander une étude
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
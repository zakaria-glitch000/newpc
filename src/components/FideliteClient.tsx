import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Check,
  ChevronDown,
  Gift,
  HeartHandshake,
  Layers3,
  Megaphone,
  Smartphone,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  WalletCards,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const programTypes = [
  {
    icon: Star,
    title: 'Programme à points',
    description:
      'Récompensez chaque achat en permettant à vos clients de cumuler des points échangeables contre des avantages.',
  },
  {
    icon: Trophy,
    title: 'Programme par paliers',
    description:
      'Créez différents niveaux de fidélité avec des avantages progressifs pour encourager vos meilleurs clients.',
  },
  {
    icon: WalletCards,
    title: 'Cashback',
    description:
      'Offrez un crédit fidélité basé sur les achats afin d’inciter vos clients à revenir régulièrement.',
  },
];

const customerFeatures = [
  'Carte de fidélité digitale',
  'Consultation du solde en temps réel',
  'Accès aux récompenses disponibles',
  'Offres et avantages personnalisés',
];

const businessFeatures = [
  'Configuration des règles de fidélité',
  'Segmentation de la clientèle',
  'Suivi des habitudes d’achat',
  'Campagnes marketing ciblées',
];

const advancedFeatures = [
  {
    icon: BarChart3,
    title: 'Analyse comportementale',
    description:
      'Identifiez les habitudes d’achat de vos clients et utilisez ces informations pour construire des actions marketing plus pertinentes.',
  },
  {
    icon: Sparkles,
    title: 'Gamification',
    description:
      'Ajoutez des objectifs, niveaux et récompenses pour rendre votre programme plus engageant et encourager la participation.',
  },
  {
    icon: Users,
    title: 'Parrainage',
    description:
      'Encouragez vos clients satisfaits à recommander votre enseigne grâce à un système de parrainage simple et avantageux.',
  },
];

const journeySteps = [
  {
    number: '01',
    title: 'Inscription',
    description:
      'Le client rejoint votre programme directement en point de vente ou via vos canaux digitaux.',
  },
  {
    number: '02',
    title: 'Accumulation',
    description:
      'Chaque achat peut générer des points ou avantages selon les règles que vous avez définies.',
  },
  {
    number: '03',
    title: 'Engagement',
    description:
      'Des offres adaptées aux habitudes du client permettent de maintenir son intérêt et de favoriser son retour.',
  },
  {
    number: '04',
    title: 'Récompense',
    description:
      'Lorsque les conditions sont atteintes, le client profite simplement de ses avantages et récompenses.',
  },
];

const couponFeatures = [
  {
    icon: Gift,
    title: 'Coupons personnalisés',
    description:
      'Créez des réductions, cadeaux ou offres spéciales adaptées à vos objectifs commerciaux.',
  },
  {
    icon: Zap,
    title: 'Distribution ciblée',
    description:
      'Déclenchez vos offres selon le profil, les achats ou le niveau de fidélité de vos clients.',
  },
  {
    icon: Check,
    title: 'Validation rapide',
    description:
      'Contrôlez les conditions d’utilisation directement lors du passage en caisse.',
  },
  {
    icon: BarChart3,
    title: 'Suivi des performances',
    description:
      'Mesurez l’utilisation de vos campagnes et identifiez les offres qui fonctionnent le mieux.',
  },
];

const couponTypes = [
  {
    symbol: '%',
    title: 'Réduction en pourcentage',
    description: 'Une remise de 10 %, 20 % ou selon votre stratégie.',
  },
  {
    symbol: '€',
    title: 'Réduction fixe',
    description: 'Une remise définie directement sur le montant de l’achat.',
  },
  {
    symbol: '🎁',
    title: 'Produit offert',
    description: 'Offrez un produit ou un avantage sous certaines conditions.',
  },
  {
    symbol: '2×',
    title: 'Offre groupée',
    description: 'Créez des offres comme 2 pour 1 ou 3 pour 2.',
  },
];

const restrictions = [
  {
    icon: Bell,
    title: 'Période de validité',
    description: 'Définissez les dates de début et de fin de vos offres.',
  },
  {
    icon: WalletCards,
    title: 'Montant minimum',
    description: 'Déterminez un seuil d’achat avant activation de l’offre.',
  },
  {
    icon: Layers3,
    title: 'Produits éligibles',
    description: 'Limitez une offre à certaines catégories ou références.',
  },
  {
    icon: Target,
    title: 'Nombre d’utilisations',
    description: 'Contrôlez si le coupon est utilisable une ou plusieurs fois.',
  },
];

const faqs = [
  {
    question: 'Puis-je personnaliser le programme de fidélité ?',
    answer:
      'Oui. Les règles du programme peuvent être adaptées à votre activité : points, récompenses, paliers, avantages et conditions d’utilisation.',
  },
  {
    question: 'Mes clients doivent-ils installer une application ?',
    answer:
      'Non. Une application mobile peut compléter l’expérience, mais vos clients peuvent également être identifiés avec leurs informations habituelles selon la configuration retenue.',
  },
  {
    question: 'Peut-on utiliser le programme sur plusieurs points de vente ?',
    answer:
      'Oui. Une stratégie de fidélité peut être pensée pour plusieurs magasins ou sites afin de centraliser les données clients et conserver une expérience cohérente.',
  },
  {
    question: 'Pouvez-vous nous accompagner dans la mise en place ?',
    answer:
      'Oui. PC MAROC vous accompagne dans la définition des règles, la configuration, le déploiement et la prise en main de la solution.',
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </span>

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Star;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand-200 hover:shadow-xl hover:shadow-slate-200/50"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>

      <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-brand-600">
        En savoir plus
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </motion.div>
  );
}

function CheckItem({ children }: { children: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
        <Check className="h-3 w-3" />
      </span>

      <span className="text-sm leading-6 text-slate-600">{children}</span>
    </div>
  );
}

export function FideliteClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.10),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.08),_transparent_35%)]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600">
                <HeartHandshake className="h-4 w-4" />
                Fidélité client
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Transformez vos clients fidèles en{' '}
                <span className="text-brand-500">ambassadeurs</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
                Mettez en place un programme de fidélisation adapté à votre
                activité pour récompenser vos clients, renforcer la relation
                client et encourager les achats récurrents.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-all hover:bg-brand-600"
                >
                  Demander une démo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#fonctionnalites"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-brand-200 hover:text-brand-600"
                >
                  Découvrir la solution
                </a>
              </div>
            </motion.div>

            {/* Loyalty dashboard visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-brand-400/20 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/70">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Programme fidélité
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      Mon programme
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-white/50">Client fidèle</p>
                      <p className="mt-1 font-semibold">Programme Premium</p>
                    </div>

                    <Star className="h-5 w-5 text-amber-300" />
                  </div>

                  <div className="mt-8">
                    <p className="text-xs text-white/50">Solde fidélité</p>
                    <p className="mt-1 text-3xl font-bold">2 450 pts</p>
                  </div>

                  <div className="mt-5">
                    <div className="mb-2 flex justify-between text-[11px] text-white/50">
                      <span>Progression</span>
                      <span>82 %</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[82%] rounded-full bg-brand-400" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <Users className="h-5 w-5 text-brand-500" />
                    <p className="mt-3 text-xl font-bold text-slate-900">
                      +28%
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Clients actifs
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <Gift className="h-5 w-5 text-brand-500" />
                    <p className="mt-3 text-xl font-bold text-slate-900">
                      186
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Récompenses
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-600">
                    <Megaphone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Offre personnalisée
                    </p>
                    <p className="text-xs text-slate-500">
                      Nouvelle campagne disponible
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
      <section className="border-y border-slate-100 bg-slate-50/70 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Une fidélité mieux pensée"
            title="Créez une relation durable avec vos clients"
            description="Une bonne stratégie de fidélisation ne se limite pas à distribuer des remises. Elle permet de mieux connaître vos clients, de valoriser leur engagement et de créer des raisons concrètes de revenir."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: HeartHandshake,
                title: 'Relation client',
                text: 'Renforcez la proximité avec vos clients grâce à une expérience plus personnalisée.',
              },
              {
                icon: Target,
                title: 'Actions ciblées',
                text: 'Adressez la bonne offre au bon client selon ses habitudes et son niveau de fidélité.',
              },
              {
                icon: BarChart3,
                title: 'Pilotage',
                text: 'Suivez les performances de votre programme et ajustez votre stratégie.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TYPES DE PROGRAMMES
      ========================================================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Programmes"
            title="Choisissez le modèle qui correspond à votre activité"
            description="Construisez une mécanique de fidélisation simple à comprendre pour vos clients et facile à piloter pour vos équipes."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {programTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <FeatureCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FONCTIONNALITES
      ========================================================== */}
      <section
        id="fonctionnalites"
        className="overflow-hidden bg-slate-900 py-20 text-white sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                <Sparkles className="h-3.5 w-3.5" />
                Fonctionnalités
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Une solution pensée pour vos clients et vos équipes
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                Centralisez les informations utiles et donnez à vos équipes les
                moyens de piloter simplement votre programme de fidélité.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Règles personnalisables',
                  'Données centralisées',
                  'Campagnes ciblées',
                  'Suivi des performances',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                      <Check className="h-4 w-4" />
                    </div>

                    <span className="text-sm font-medium text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Vue client</p>
                  <p className="mt-1 text-lg font-semibold">Fidélité</p>
                </div>

                <div className="rounded-xl bg-brand-500/15 p-3 text-brand-300">
                  <Star className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-3">
                {customerFeatures.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-brand-300">
                        {index === 0 && <WalletCards className="h-4 w-4" />}
                        {index === 1 && <BarChart3 className="h-4 w-4" />}
                        {index === 2 && <Gift className="h-4 w-4" />}
                        {index === 3 && <Bell className="h-4 w-4" />}
                      </div>

                      <span className="text-sm text-slate-300">{item}</span>
                    </div>

                    <Check className="h-4 w-4 text-brand-400" />
                  </div>
                ))}
              </div>

              <div className="my-6 h-px bg-white/10" />

              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Côté commerce
              </p>

              <div className="space-y-3">
                {businessFeatures.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <Check className="h-4 w-4 shrink-0 text-brand-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AVANCE
      ========================================================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Fonctionnalités avancées"
            title="Allez plus loin dans l'engagement client"
            description="Combinez données, animation commerciale et communication pour construire une expérience de fidélité qui évolue avec votre clientèle."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {advancedFeatures.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION MOBILE
      ========================================================== */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-8 rounded-full bg-brand-400/10 blur-3xl" />

                <div className="relative mx-auto w-[270px] rounded-[2.5rem] border-[7px] border-slate-900 bg-white p-3 shadow-2xl">
                  <div className="overflow-hidden rounded-[2rem] bg-slate-50">
                    <div className="bg-slate-900 px-5 pb-7 pt-8 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-white/50">
                            Bonjour
                          </p>
                          <p className="mt-1 text-sm font-semibold">
                            Votre fidélité
                          </p>
                        </div>

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                          <Bell className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="mt-7">
                        <p className="text-[10px] text-white/50">
                          Mes points
                        </p>
                        <p className="mt-1 text-3xl font-bold">2 450</p>
                      </div>
                    </div>

                    <div className="space-y-3 p-4">
                      <div className="rounded-xl bg-white p-3 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                            <Gift className="h-4 w-4" />
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-slate-800">
                              Récompense disponible
                            </p>
                            <p className="mt-0.5 text-[10px] text-slate-400">
                              Profitez de votre avantage
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl bg-white p-3 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                            <Megaphone className="h-4 w-4" />
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-slate-800">
                              Offre personnalisée
                            </p>
                            <p className="mt-0.5 text-[10px] text-slate-400">
                              Disponible aujourd'hui
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl bg-white p-3 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                            <BarChart3 className="h-4 w-4" />
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-slate-800">
                              Mon historique
                            </p>
                            <p className="mt-0.5 text-[10px] text-slate-400">
                              Consultez vos achats
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                <Smartphone className="h-3.5 w-3.5" />
                Expérience digitale
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Une expérience de fidélité à votre image
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-500">
                Donnez à vos clients un accès simple à leurs avantages, leurs
                récompenses et leurs offres. Une expérience digitale peut
                compléter votre programme et renforcer l'engagement.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Consulter les points et avantages',
                  'Découvrir les récompenses disponibles',
                  'Recevoir des offres personnalisées',
                  'Consulter l’historique de fidélité',
                ].map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PARCOURS CLIENT
      ========================================================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Parcours client"
            title="Une expérience simple du premier achat à la récompense"
            description="Construisez un parcours clair qui donne envie à vos clients de revenir et de progresser dans votre programme."
          />

          <div className="relative mt-16">
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-slate-200 lg:block" />

            <div className="grid gap-10 lg:grid-cols-4">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-brand-500 text-sm font-bold text-white shadow-lg shadow-brand-500/20">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COUPONS
      ========================================================== */}
      <section className="overflow-hidden bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                <Gift className="h-3.5 w-3.5" />
                Coupons & offres
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Animez votre programme avec des offres ciblées
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-500">
                Complétez votre programme de fidélité avec des coupons et des
                avantages adaptés à vos objectifs commerciaux.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {couponFeatures.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <item.icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-sm font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-xs text-slate-400">Exemples</p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      Types d'offres
                    </p>
                  </div>

                  <Gift className="h-6 w-6 text-brand-500" />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {couponTypes.map((coupon) => (
                    <div
                      key={coupon.title}
                      className="rounded-2xl bg-slate-50 p-5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-brand-600 shadow-sm">
                        {coupon.symbol}
                      </div>

                      <h3 className="mt-4 text-sm font-semibold text-slate-900">
                        {coupon.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {coupon.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-t border-slate-100 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Conditions configurables
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {restrictions.map((item) => (
                      <div
                        key={item.title}
                        className="flex gap-3 rounded-xl border border-slate-100 p-3"
                      >
                        <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />

                        <div>
                          <p className="text-xs font-semibold text-slate-800">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[11px] leading-4 text-slate-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="FAQ"
            title="Les questions fréquentes"
            description="Quelques réponses aux questions que vous pouvez vous poser avant de mettre en place votre programme."
          />

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-brand-500' : ''
                      }`}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-100 px-6 pb-6 pt-4">
                      <p className="text-sm leading-6 text-slate-500">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-7 py-14 sm:px-12 sm:py-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                <HeartHandshake className="h-7 w-7" />
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Faites de la fidélité un véritable levier de croissance
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
                Parlons de votre activité et construisons ensemble un
                programme de fidélisation adapté à vos objectifs et à vos
                clients.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-400"
                >
                  Demander une démo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  Retour à l'accueil
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
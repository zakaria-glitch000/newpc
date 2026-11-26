import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Check,
  Gift,
  HeartHandshake,
  Layers3,
  Megaphone,
  Minus,
  Plus,
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
import type { ElementType } from 'react';

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

function SectionHead({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-4 border-b-2 border-slate-950 pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
          {eyebrow}
        </span>

        <h2 className="mt-3 max-w-2xl font-extrabold tracking-tight text-slate-950 text-3xl sm:text-4xl">
          {title}
        </h2>
      </div>

      {description && (
        <p className="max-w-sm text-sm leading-6 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function IconBox({
  icon: Icon,
  size = 'md',
}: {
  icon: ElementType;
  size?: 'sm' | 'md';
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center bg-slate-950 text-orange-400 transition-colors group-hover:bg-orange-600 group-hover:text-white ${
        size === 'sm' ? 'h-10 w-10' : 'h-12 w-12'
      }`}
    >
      <Icon className={size === 'sm' ? 'h-5 w-5' : 'h-6 w-6'} />
    </div>
  );
}

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3 border-b border-slate-200 py-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-orange-600 text-white">
        <Check className="h-3 w-3" />
      </span>

      <span className="text-sm font-medium leading-6 text-slate-800">
        {children}
      </span>
    </li>
  );
}

export function FideliteClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white text-slate-800">
      {/* =========================================================
          HERO (structure inchangée)
      ========================================================== */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.10),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(234,88,12,0.08),_transparent_35%)]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                <HeartHandshake className="h-4 w-4" />
                Fidélité client
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Transformez vos clients fidèles en{' '}
                <span className="text-orange-500">ambassadeurs</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
                Mettez en place un programme de fidélisation adapté à votre
                activité pour récompenser vos clients, renforcer la relation
                client et encourager les achats récurrents.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-600"
                >
                  Demander une démo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#fonctionnalites"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-orange-200 hover:text-orange-600"
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
              <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-orange-400/20 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />

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

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
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
                      <div className="h-full w-[82%] rounded-full bg-orange-400" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <Users className="h-5 w-5 text-orange-500" />
                    <p className="mt-3 text-xl font-bold text-slate-900">
                      +28%
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Clients actifs
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <Gift className="h-5 w-5 text-orange-500" />
                    <p className="mt-3 text-xl font-bold text-slate-900">
                      186
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Récompenses
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-3 rounded-2xl border border-orange-100 bg-orange-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-orange-600">
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
      <section className="border-y border-slate-200 bg-slate-100 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 border-t-2 border-slate-950 pt-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                Une fidélité mieux pensée
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Créez une relation durable
                <span className="block text-orange-600">
                  avec vos clients.
                </span>
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-slate-600">
              Une bonne stratégie de fidélisation ne se limite pas à
              distribuer des remises. Elle permet de mieux connaître vos
              clients, de valoriser leur engagement et de créer des raisons
              concrètes de revenir.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
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
                className="group relative border border-slate-200 border-t-4 border-t-orange-600 bg-white p-7 transition-colors duration-300 hover:bg-orange-600"
              >
                <span className="absolute right-6 top-6 font-mono text-xs font-bold text-orange-600 transition-colors group-hover:text-white/80">
                  0{index + 1}
                </span>

                <div className="flex h-12 w-12 items-center justify-center bg-slate-950 text-orange-400 transition-colors group-hover:bg-white group-hover:text-orange-600">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-slate-950 transition-colors group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-white">
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
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHead
            eyebrow="Programmes"
            title="Choisissez le modèle qui correspond à votre activité."
            description="Construisez une mécanique de fidélisation simple à comprendre pour vos clients et facile à piloter pour vos équipes."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {programTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative h-full border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-950 hover:shadow-xl"
              >
                <span className="absolute right-6 top-6 font-mono text-xs font-bold text-orange-600">
                  0{index + 1}
                </span>

                <IconBox icon={item.icon} />

                <h3 className="mt-5 text-xl font-extrabold text-slate-950 transition-colors group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-slate-300">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-1 border-t border-slate-200 pt-4 font-mono text-xs font-bold uppercase tracking-wider text-orange-600 transition-colors group-hover:border-white/20">
                  En savoir plus
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
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
        className="overflow-hidden border-t-[6px] border-orange-500 bg-slate-950 py-20 text-white sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                Fonctionnalités
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Une solution pensée{' '}
                <span className="text-orange-400">
                  pour vos clients et vos équipes.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                Centralisez les informations utiles et donnez à vos équipes
                les moyens de piloter simplement votre programme de fidélité.
              </p>

              <div className="mt-8 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
                {[
                  'Règles personnalisables',
                  'Données centralisées',
                  'Campagnes ciblées',
                  'Suivi des performances',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-slate-950 p-4 transition-colors hover:bg-slate-900"
                  >
                    <div className="flex h-8 w-8 items-center justify-center bg-orange-600 text-white">
                      <Check className="h-4 w-4" />
                    </div>

                    <span className="text-sm font-medium text-slate-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/15 border-t-4 border-t-orange-500 bg-slate-900 p-6">
              <div className="mb-6 flex items-center justify-between border-b border-white/15 pb-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                    Vue client
                  </p>
                  <p className="mt-1 text-lg font-bold">Fidélité</p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center bg-orange-600 text-white">
                  <Star className="h-5 w-5" />
                </div>
              </div>

              <div className="grid gap-px bg-white/15">
                {customerFeatures.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between bg-slate-900 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center bg-white/10 text-orange-400">
                        {index === 0 && <WalletCards className="h-4 w-4" />}
                        {index === 1 && <BarChart3 className="h-4 w-4" />}
                        {index === 2 && <Gift className="h-4 w-4" />}
                        {index === 3 && <Bell className="h-4 w-4" />}
                      </div>

                      <span className="text-sm text-slate-200">{item}</span>
                    </div>

                    <Check className="h-4 w-4 text-orange-400" />
                  </div>
                ))}
              </div>

              <p className="mb-4 mt-7 font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                Côté commerce
              </p>

              <div className="space-y-3">
                {businessFeatures.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-200"
                  >
                    <Check className="h-4 w-4 shrink-0 text-orange-400" />
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
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHead
            eyebrow="Fonctionnalités avancées"
            title="Allez plus loin dans l'engagement client."
            description="Combinez données, animation commerciale et communication pour construire une expérience de fidélité qui évolue avec votre clientèle."
          />

          <div className="grid gap-px border border-slate-300 bg-slate-300 lg:grid-cols-3">
            {advancedFeatures.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative bg-white p-8 transition-colors duration-300 hover:bg-slate-950"
              >
                <span className="font-mono text-4xl font-extrabold text-orange-600">
                  0{index + 1}
                </span>

                <div className="mt-5">
                  <IconBox icon={item.icon} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-slate-950 transition-colors group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-slate-300">
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
      <section className="border-y border-slate-200 bg-slate-100 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-x-6 -bottom-4 top-4 bg-orange-500" aria-hidden="true" />

                <div className="relative mx-auto w-[270px] border-[7px] border-slate-950 bg-white p-3 shadow-2xl">
                  <div className="overflow-hidden bg-slate-50">
                    <div className="border-b-4 border-orange-500 bg-slate-950 px-5 pb-7 pt-8 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-white/50">Bonjour</p>
                          <p className="mt-1 text-sm font-semibold">
                            Votre fidélité
                          </p>
                        </div>

                        <div className="flex h-8 w-8 items-center justify-center bg-white/10">
                          <Bell className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="mt-7">
                        <p className="text-[10px] text-white/50">Mes points</p>
                        <p className="mt-1 text-3xl font-bold text-orange-400">
                          2 450
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 p-4">
                      {[
                        {
                          icon: Gift,
                          title: 'Récompense disponible',
                          text: 'Profitez de votre avantage',
                        },
                        {
                          icon: Megaphone,
                          title: 'Offre personnalisée',
                          text: "Disponible aujourd'hui",
                        },
                        {
                          icon: BarChart3,
                          title: 'Mon historique',
                          text: 'Consultez vos achats',
                        },
                      ].map((row) => (
                        <div
                          key={row.title}
                          className="border border-slate-200 bg-white p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center bg-slate-950 text-orange-400">
                              <row.icon className="h-4 w-4" />
                            </div>

                            <div>
                              <p className="text-xs font-semibold text-slate-800">
                                {row.title}
                              </p>
                              <p className="mt-0.5 text-[10px] text-slate-400">
                                {row.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex h-14 w-14 items-center justify-center bg-slate-950 text-orange-400">
                <Smartphone className="h-7 w-7" />
              </div>

              <span className="mt-7 block font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                Expérience digitale
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Une expérience de fidélité à votre image.
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Donnez à vos clients un accès simple à leurs avantages, leurs
                récompenses et leurs offres. Une expérience digitale peut
                compléter votre programme et renforcer l'engagement.
              </p>

              <ul className="mt-7 border-t border-slate-200">
                {[
                  'Consulter les points et avantages',
                  'Découvrir les récompenses disponibles',
                  'Recevoir des offres personnalisées',
                  'Consulter l’historique de fidélité',
                ].map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PARCOURS CLIENT (bande orange)
      ========================================================== */}
      <section className="bg-orange-600 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 border-b-2 border-white pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white/80">
                Parcours client
              </span>

              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                Une expérience simple du premier achat à la récompense.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/90">
              Construisez un parcours clair qui donne envie à vos clients de
              revenir et de progresser dans votre programme.
            </p>
          </div>

          <div className="grid gap-px border border-white/40 bg-white/40 sm:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-orange-600 p-7 transition-colors duration-300 hover:bg-slate-950"
              >
                <span className="font-mono text-4xl font-extrabold">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-extrabold">{step.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          COUPONS
      ========================================================== */}
      <section className="overflow-hidden bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="flex h-14 w-14 items-center justify-center bg-slate-950 text-orange-400">
                <Gift className="h-7 w-7" />
              </div>

              <span className="mt-7 block font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                Coupons & offres
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Animez votre programme avec des offres ciblées.
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Complétez votre programme de fidélité avec des coupons et des
                avantages adaptés à vos objectifs commerciaux.
              </p>

              <div className="mt-8 grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2">
                {couponFeatures.map((item) => (
                  <div
                    key={item.title}
                    className="group bg-white p-5 transition-colors duration-300 hover:bg-slate-950"
                  >
                    <IconBox icon={item.icon} size="sm" />

                    <h3 className="mt-4 text-sm font-extrabold text-slate-950 transition-colors group-hover:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-600 transition-colors group-hover:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-slate-200 border-t-[6px] border-t-orange-500 bg-slate-50 p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                    Exemples
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-slate-950">
                    Types d'offres
                  </p>
                </div>

                <Gift className="h-6 w-6 text-orange-600" />
              </div>

              <div className="mt-5 grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2">
                {couponTypes.map((coupon) => (
                  <div key={coupon.title} className="bg-white p-5">
                    <div className="flex h-10 w-10 items-center justify-center bg-orange-600 text-sm font-bold text-white">
                      {coupon.symbol}
                    </div>

                    <h3 className="mt-4 text-sm font-extrabold text-slate-950">
                      {coupon.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {coupon.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                  Conditions configurables
                </p>

                <div className="mt-4 grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2">
                  {restrictions.map((item) => (
                    <div key={item.title} className="flex gap-3 bg-white p-4">
                      <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />

                      <div>
                        <p className="text-xs font-bold text-slate-900">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[11px] leading-4 text-slate-500">
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
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section className="border-y border-slate-200 bg-slate-100 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                FAQ
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Les questions <span className="text-orange-600">fréquentes.</span>
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Quelques réponses aux questions que vous pouvez vous poser
                avant de mettre en place votre programme.
              </p>
            </div>

            <div className="border-t-2 border-slate-950">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className={`border-b border-slate-300 transition-colors ${
                      isOpen ? 'bg-white' : 'bg-transparent'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                    >
                      <span className="flex items-center gap-4">
                        <span className="font-mono text-xs font-bold text-orange-600">
                          0{index + 1}
                        </span>
                        <span className="text-sm font-bold text-slate-950 sm:text-base">
                          {faq.question}
                        </span>
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center text-white transition-colors ${
                          isOpen ? 'bg-orange-600' : 'bg-slate-950'
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-6 pl-14 text-sm leading-6 text-slate-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="bg-white px-6 py-20 sm:py-28 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-slate-950">
          <div className="absolute left-0 top-0 h-2 w-full bg-orange-500" aria-hidden="true" />

          <div className="relative px-8 py-14 sm:px-12 lg:px-16 lg:py-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-600/25 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <HeartHandshake className="h-5 w-5 text-orange-400" />

                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                    Fidélisation
                  </span>
                </div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Faites de la fidélité un véritable levier de croissance.
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  Parlons de votre activité et construisons ensemble un
                  programme de fidélisation adapté à vos objectifs et à vos
                  clients.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-3 bg-orange-600 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-slate-950"
                >
                  Demander une démo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
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
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Check,
  ChevronRight,
  Clock3,
  Download,
  FileBarChart,
  Globe2,
  Mail,
  PackageSearch,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react';

const dashboards = [
  {
    icon: TrendingUp,
    title: 'Performance commerciale',
    description:
      'Visualisez l’évolution de vos ventes par période, produit, catégorie et canal de vente.',
    features: [
      'Suivi du chiffre d’affaires et de la marge',
      'Top et flop des produits',
      'Analyse du panier moyen',
      'Performance par période',
    ],
  },
  {
    icon: Users,
    title: 'Analyse clients',
    description:
      'Comprenez mieux les habitudes de votre clientèle pour adapter vos actions commerciales.',
    features: [
      'Segmentation de la clientèle',
      'Suivi de la fréquence d’achat',
      'Analyse des comportements',
      'Identification des clients actifs',
    ],
  },
  {
    icon: Clock3,
    title: 'Analyse opérationnelle',
    description:
      'Suivez les indicateurs de votre activité quotidienne afin d’optimiser vos opérations.',
    features: [
      'Analyse des périodes de forte activité',
      'Suivi de la productivité',
      'Analyse des horaires de vente',
      'Identification des pics d’activité',
    ],
  },
  {
    icon: PackageSearch,
    title: 'Analyse des stocks',
    description:
      'Croisez les données de vente et de stock pour mieux anticiper vos besoins.',
    features: [
      'Rotation des stocks',
      'Suivi de la couverture',
      'Identification des produits à faible rotation',
      'Alertes sur les seuils définis',
    ],
  },
];

const decisions = [
  {
    icon: Target,
    title: 'Identifier les opportunités',
    description:
      'Repérez rapidement les produits, périodes et segments qui présentent le meilleur potentiel.',
  },
  {
    icon: TrendingUp,
    title: 'Améliorer les performances',
    description:
      'Comparez vos résultats et identifiez les actions qui contribuent réellement à votre croissance.',
  },
  {
    icon: Users,
    title: 'Mieux comprendre vos clients',
    description:
      'Analysez les comportements d’achat pour adapter votre offre et vos actions commerciales.',
  },
  {
    icon: Wallet,
    title: 'Optimiser vos ressources',
    description:
      'Prenez de meilleures décisions concernant vos stocks, équipes et investissements.',
  },
];

const accessOptions = [
  {
    icon: Globe2,
    title: 'Web',
    description: 'Accédez à vos indicateurs depuis votre navigateur.',
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    description: 'Consultez vos données importantes depuis vos appareils mobiles.',
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Recevez vos rapports selon une fréquence définie.',
  },
  {
    icon: Download,
    title: 'Export',
    description: 'Exportez vos données dans les formats adaptés à vos besoins.',
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
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
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

function DashboardMockup({
  variant,
}: {
  variant: 'sales' | 'clients' | 'operations' | 'stocks';
}) {
  const isSales = variant === 'sales';
  const isClients = variant === 'clients';
  const isOperations = variant === 'operations';

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div>
          <div className="h-2 w-20 rounded-full bg-slate-200" />
          <div className="mt-2 h-3 w-32 rounded-full bg-slate-900/80" />
        </div>

        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 p-5">
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="h-2 w-12 rounded-full bg-slate-200" />
          <div className="mt-3 h-5 w-16 rounded-full bg-slate-900/80" />
          <div className="mt-2 h-2 w-10 rounded-full bg-orange-200" />
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <div className="h-2 w-12 rounded-full bg-slate-200" />
          <div className="mt-3 h-5 w-16 rounded-full bg-slate-900/80" />
          <div className="mt-2 h-2 w-10 rounded-full bg-orange-200" />
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <div className="h-2 w-12 rounded-full bg-slate-200" />
          <div className="mt-3 h-5 w-16 rounded-full bg-slate-900/80" />
          <div className="mt-2 h-2 w-10 rounded-full bg-orange-200" />
        </div>
      </div>

      <div className="mx-5 rounded-xl border border-slate-100 p-4">
        <div className="flex items-end justify-between gap-2">
          {[35, 58, 42, 72, 50, 84, 65, 92, 70, 88, 76, 96].map(
            (height, index) => (
              <div
                key={index}
                className="flex flex-1 items-end"
                style={{ height: '100px' }}
              >
                <div
                  className="w-full rounded-t-md bg-orange-200 transition-all"
                  style={{
                    height: `${height}%`,
                    opacity: isSales ? 1 : 0.65,
                  }}
                />
              </div>
            ),
          )}
        </div>

        <div className="mt-3 flex justify-between">
          <span className="text-[9px] text-slate-400">Jan</span>
          <span className="text-[9px] text-slate-400">Fév</span>
          <span className="text-[9px] text-slate-400">Mar</span>
          <span className="text-[9px] text-slate-400">Avr</span>
          <span className="text-[9px] text-slate-400">Mai</span>
          <span className="text-[9px] text-slate-400">Juin</span>
        </div>
      </div>

      <div className="grid gap-3 p-5 sm:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-400">
              {isClients
                ? 'Clients actifs'
                : isOperations
                  ? 'Activité'
                  : 'Performance'}
            </span>

            <TrendingUp className="h-3.5 w-3.5 text-orange-500" />
          </div>

          <div className="mt-3 h-3 w-24 rounded-full bg-slate-800/80" />
          <div className="mt-2 h-2 w-16 rounded-full bg-orange-200" />
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-400">
              {isClients
                ? 'Fidélité'
                : isOperations
                  ? 'Productivité'
                  : 'Évolution'}
            </span>

            <BarChart3 className="h-3.5 w-3.5 text-orange-500" />
          </div>

          <div className="mt-3 h-3 w-20 rounded-full bg-slate-800/80" />
          <div className="mt-2 h-2 w-12 rounded-full bg-orange-200" />
        </div>
      </div>
    </div>
  );
}

export function AnalyseVentes() {
  return (
    <div className="bg-white">
      {/* =========================================================
          HER
      ========================================================== */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.10),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.08),_transparent_35%)]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                <BarChart3 className="h-4 w-4" />
                Analyse des ventes
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Transformez vos données en{' '}
                <span className="text-orange-500">
                  décisions plus intelligentes
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
                Analysez vos performances commerciales grâce à des rapports
                clairs et des tableaux de bord conçus pour vous aider à mieux
                comprendre votre activité.
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
                  href="#tableaux-de-bord"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-orange-200 hover:text-orange-600"
                >
                  Découvrir les analyses
                </a>
              </div>
            </motion.div>

            {/* Dashboard visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-orange-400/20 blur-3xl" />
              <div className="absolute -right-10 bottom-10 h-44 w-44 rounded-full bg-amber-400/20 blur-3xl" />

              <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Tableau de bord
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      Performance commerciale
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                </div>

                <DashboardMockup variant="sales" />

                <div className="mt-4 flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-orange-600">
                    <TrendingUp className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Performance en progression
                    </p>
                    <p className="text-xs text-slate-500">
                      Suivez l’évolution de vos indicateurs clés.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TABLEAUX DE BORD
      ========================================================== */}
      <section
        id="tableaux-de-bord"
        className="border-y border-slate-100 bg-slate-50/70 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Tableaux de bord"
            title="Une vision complète de votre activité"
            description="Regroupez les indicateurs essentiels dans des tableaux de bord faciles à lire afin de suivre votre activité sous différents angles."
          />

          <div className="mt-16 space-y-10">
            {dashboards.map((dashboard, index) => {
              const reverse = index % 2 !== 0;

              return (
                <motion.div
                  key={dashboard.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <div
                    className={`grid items-center lg:grid-cols-2 ${
                      reverse ? 'lg:[&>div:first-child]:order-2' : ''
                    }`}
                  >
                    <div className="p-7 sm:p-10 lg:p-12">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                        <dashboard.icon className="h-6 w-6" />
                      </div>

                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-orange-500">
                        Analyse
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                        {dashboard.title}
                      </h3>

                      <p className="mt-4 text-base leading-7 text-slate-500">
                        {dashboard.description}
                      </p>

                      <div className="mt-7 space-y-3">
                        {dashboard.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                              <Check className="h-3 w-3" />
                            </span>

                            <span className="text-sm leading-6 text-slate-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-50 p-5 sm:p-8 lg:p-10">
                      <DashboardMockup
                        variant={
                          index === 0
                            ? 'sales'
                            : index === 1
                              ? 'clients'
                              : index === 2
                                ? 'operations'
                                : 'stocks'
                        }
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          DECISIONS
      ========================================================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                <Target className="h-3.5 w-3.5" />
                Pilotage
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Prenez des décisions basées sur des données concrètes
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
                Les données de votre activité deviennent plus utiles lorsqu’elles
                sont organisées et présentées de manière claire. Identifiez
                les tendances, comparez vos résultats et agissez au bon moment.
              </p>

              <a
                href="/#contact"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-orange-600"
              >
                Parlons de vos besoins
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {decisions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          KPI
      ========================================================== */}
      <section className="overflow-hidden bg-slate-900 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                <FileBarChart className="h-3.5 w-3.5" />
                Indicateurs clés
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Les informations essentielles, au même endroit
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                Suivez les indicateurs les plus importants pour votre activité
                sans devoir parcourir plusieurs sources d’information.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  'Chiffre d’affaires',
                  'Panier moyen',
                  'Marge',
                  'Volume des ventes',
                  'Produits les plus vendus',
                  'Évolution par période',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <Check className="h-4 w-4 text-orange-400" />

                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-orange-500/10 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Vue synthétique</p>
                    <p className="mt-1 text-lg font-semibold">
                      Indicateurs commerciaux
                    </p>
                  </div>

                  <BarChart3 className="h-6 w-6 text-orange-300" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    ['CA', '+18.4%'],
                    ['Marge', '+11.2%'],
                    ['Panier', '+7.8%'],
                    ['Ventes', '+23.1%'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <p className="text-xs text-slate-500">{label}</p>

                      <p className="mt-2 text-2xl font-bold">{value}</p>

                      <div className="mt-3 flex items-center gap-1 text-[11px] text-orange-300">
                        <TrendingUp className="h-3 w-3" />
                        Évolution
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">
                      Évolution des ventes
                    </p>

                    <span className="text-xs text-orange-300">12 mois</span>
                  </div>

                  <div className="mt-6 flex h-32 items-end gap-2">
                    {[30, 45, 38, 55, 48, 65, 58, 72, 67, 82, 76, 94].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-orange-400/70"
                          style={{ height: `${height}%` }}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ACCESSIBILITE
      ========================================================== */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Accessibilité"
            title="Vos rapports, là où vous en avez besoin"
            description="Consultez, partagez et exploitez vos données avec des modes d’accès adaptés à votre organisation."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {accessOptions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center justify-center gap-1 text-xs font-semibold text-orange-600">
                  Disponible selon votre configuration
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-7 py-14 sm:px-12 sm:py-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                <BarChart3 className="h-7 w-7" />
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Pilotez votre activité avec plus de visibilité
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
                Découvrez comment PC MAROC  peut vous aider à centraliser
                vos données commerciales et à transformer vos résultats en
                décisions concrètes.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-orange-400"
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
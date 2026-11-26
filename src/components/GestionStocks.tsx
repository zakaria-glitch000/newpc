import type { ElementType } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Check,
  ClipboardList,
  Database,
  PackageCheck,
  PackageOpen,
  RefreshCw,
  Search,
  Settings2,
  ShieldCheck,
  Store,
  Truck,
  Users,
  Warehouse,
  Zap,
  BellRing,
  ArrowDownToLine,
  ArrowUpFromLine,
  ArrowRightLeft,
} from 'lucide-react';

const advantages = [
  {
    icon: Boxes,
    title: 'Vision globale',
    description:
      'Centralisez les informations essentielles de votre stock pour savoir rapidement ce qui est disponible, ce qui manque et ce qui doit être réapprovisionné.',
  },
  {
    icon: RefreshCw,
    title: 'Mouvements maîtrisés',
    description:
      'Suivez les entrées, sorties, transferts et ajustements afin de conserver un historique clair de vos opérations.',
  },
  {
    icon: BellRing,
    title: 'Anticipation',
    description:
      'Identifiez les produits qui approchent de leur seuil minimum et anticipez vos besoins avant les ruptures.',
  },
];

const features = [
  {
    icon: PackageOpen,
    title: 'Gestion des produits',
    description:
      'Organisez votre catalogue et retrouvez rapidement les informations nécessaires à la gestion quotidienne de vos références.',
    items: [
      'Catalogue produits',
      'Catégories et références',
      'Informations produits',
      'Gestion des quantités',
    ],
  },
  {
    icon: ArrowDownToLine,
    title: 'Entrées de stock',
    description:
      'Enregistrez les réceptions et les approvisionnements pour maintenir vos niveaux de stock à jour.',
    items: [
      'Réception des marchandises',
      'Mise à jour des quantités',
      'Historique des entrées',
      'Suivi des approvisionnements',
    ],
  },
  {
    icon: ArrowUpFromLine,
    title: 'Sorties de stock',
    description:
      'Gardez une trace des produits sortis du stock et facilitez le suivi des consommations et ventes.',
    items: [
      'Sorties de produits',
      'Consommations',
      'Historique des opérations',
      'Traçabilité des mouvements',
    ],
  },
  {
    icon: BellRing,
    title: 'Alertes de réapprovisionnement',
    description:
      'Définissez des seuils adaptés à votre activité afin d’identifier rapidement les références nécessitant une intervention.',
    items: [
      'Seuil minimum',
      'Produits à surveiller',
      'Alertes de stock faible',
      'Anticipation des ruptures',
    ],
  },
];

const managementFeatures = [
  {
    icon: Search,
    title: 'Recherche rapide',
    description:
      'Retrouvez facilement un produit, une référence ou une opération grâce à une recherche centralisée.',
  },
  {
    icon: ClipboardList,
    title: 'Inventaires',
    description:
      'Facilitez les opérations de comptage et comparez les quantités enregistrées avec les quantités réellement disponibles.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Transferts',
    description:
      'Organisez les transferts de marchandises entre vos différents sites ou emplacements.',
  },
  {
    icon: BarChart3,
    title: 'Analyse',
    description:
      'Disposez d’une meilleure visibilité sur les mouvements et l’évolution de votre stock.',
  },
  {
    icon: Database,
    title: 'Données centralisées',
    description:
      'Conservez les informations importantes dans un environnement structuré et accessible.',
  },
  {
    icon: Settings2,
    title: 'Configuration adaptée',
    description:
      'Adaptez la gestion des stocks à votre organisation, vos produits et vos méthodes de travail.',
  },
];

const sectors = [
  {
    icon: Store,
    title: 'Commerce',
    description:
      'Gardez le contrôle sur vos références et vos disponibilités dans vos magasins et points de vente.',
    items: [
      'Gestion des références',
      'Suivi des disponibilités',
      'Inventaires',
      'Alertes de stock faible',
    ],
  },
  {
    icon: PackageCheck,
    title: 'Restauration',
    description:
      'Suivez vos matières premières, consommables et produits nécessaires au fonctionnement quotidien.',
    items: [
      'Suivi des consommables',
      'Gestion des entrées',
      'Suivi des sorties',
      'Anticipation des besoins',
    ],
  },
  {
    icon: Warehouse,
    title: 'Dépôts & entreprises',
    description:
      'Centralisez vos stocks et facilitez la gestion de plusieurs emplacements ou sites.',
    items: [
      'Stocks par emplacement',
      'Transferts',
      'Inventaires',
      'Vue centralisée',
    ],
  },
];

const workflow = [
  {
    number: '01',
    title: 'Analyse',
    text: 'Nous étudions votre organisation, vos produits et vos méthodes actuelles de gestion.',
  },
  {
    number: '02',
    title: 'Configuration',
    text: 'Nous adaptons la solution à vos catégories, emplacements, seuils et besoins opérationnels.',
  },
  {
    number: '03',
    title: 'Déploiement',
    text: 'La solution est mise en place et intégrée dans votre environnement de travail.',
  },
  {
    number: '04',
    title: 'Formation & support',
    text: 'Vos équipes sont accompagnées afin de prendre rapidement en main les outils disponibles.',
  },
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
      <span className="absolute right-6 top-6 font-mono text-xs font-bold text-orange-600">
        {index}
      </span>

      <div className="flex h-12 w-12 items-center justify-center bg-slate-950 text-orange-400">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-5 pr-8 font-display text-xl font-extrabold text-slate-950">
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
    <div className="group relative h-full border border-slate-200 border-t-4 border-t-orange-600 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-950 hover:shadow-xl">
      <span className="absolute right-6 top-6 font-mono text-xs font-bold text-orange-600">
        {index}
      </span>

      <div className="flex h-12 w-12 items-center justify-center bg-slate-950 text-orange-400 transition-colors group-hover:bg-orange-600 group-hover:text-white">
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

export function GestionStocks() {
  return (
    <div className="bg-white text-slate-800">
      {/* =========================================================
          HERO (inchangé)
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/70 via-transparent to-orange-100/40" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            to="/#solutions"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-orange-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux solutions
          </Link>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* HERO TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
                <Boxes className="h-4 w-4" />
                Gestion des stocks
              </div>

              <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Une gestion des stocks
                <span className="block text-orange-600">
                  plus simple et plus précise
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
                Gardez une vision claire de vos inventaires, suivez les
                mouvements de vos produits et anticipez vos besoins de
                réapprovisionnement grâce à une solution adaptée à votre
                activité.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'Inventaire',
                  'Suivi des mouvements',
                  'Alertes',
                  'Multi-sites',
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

            {/* HERO DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-premium">
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-5 sm:p-7">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Tableau de bord
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        Gestion des stocks
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10">
                      <BarChart3 className="h-5 w-5 text-orange-400" />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/5 p-4">
                      <p className="text-xs text-slate-500">
                        Produits suivis
                      </p>
                      <p className="mt-2 text-2xl font-bold text-white">
                        Catalogue
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/5 p-4">
                      <p className="text-xs text-slate-500">
                        État du stock
                      </p>
                      <p className="mt-2 text-2xl font-bold text-white">
                        En direct
                      </p>
                    </div>
                  </div>

                  {/* Movements */}
                  <div className="mt-3 rounded-xl bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">
                        Mouvements récents
                      </span>

                      <span className="text-xs text-slate-500">
                        Suivi
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
                          <ArrowDownToLine className="h-4 w-4 text-emerald-400" />
                        </div>

                        <div className="flex-1">
                          <div className="h-2 w-24 rounded-full bg-white/10" />
                          <div className="mt-1.5 h-1.5 w-16 rounded-full bg-white/5" />
                        </div>

                        <span className="text-xs text-emerald-400">
                          Entrée
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10">
                          <ArrowRightLeft className="h-4 w-4 text-orange-400" />
                        </div>

                        <div className="flex-1">
                          <div className="h-2 w-28 rounded-full bg-white/10" />
                          <div className="mt-1.5 h-1.5 w-20 rounded-full bg-white/5" />
                        </div>

                        <span className="text-xs text-orange-400">
                          Transfert
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10">
                          <BellRing className="h-4 w-4 text-amber-400" />
                        </div>

                        <div className="flex-1">
                          <div className="h-2 w-20 rounded-full bg-white/10" />
                          <div className="mt-1.5 h-1.5 w-14 rounded-full bg-white/5" />
                        </div>

                        <span className="text-xs text-amber-400">
                          Alerte
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                    <Zap className="h-5 w-5 text-orange-600" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Gestion
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      Simple & organisée
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
                Une meilleure visibilité
              </span>

              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Gardez le contrôle sur chaque
                <span className="block text-orange-600">
                  mouvement de votre stock.
                </span>
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-slate-600">
              Une bonne gestion des stocks permet de limiter les ruptures,
              mieux organiser les approvisionnements et donner à vos équipes
              une vision claire des produits disponibles.
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
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="group relative border border-slate-200 border-t-4 border-t-orange-600 bg-white p-7 transition-colors duration-300 hover:bg-orange-600"
                >
                  <span className="absolute right-6 top-6 font-mono text-xs font-bold text-orange-600 transition-colors group-hover:text-white/80">
                    0{index + 1}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center bg-slate-950 text-orange-400 transition-colors group-hover:bg-white group-hover:text-orange-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-extrabold text-slate-950 transition-colors group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-white">
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
                Tout ce qu’il faut <span className="text-orange-400">pour piloter votre stock.</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                Une solution structurée pour suivre vos produits, vos
                mouvements et vos besoins de réapprovisionnement au quotidien.
              </p>

              <p className="mt-8 font-mono text-6xl font-extrabold text-orange-400">04</p>
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
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                >
                  <FeatureCard index={`0${index + 1}`} {...feature} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PILOTAGE (bande noire)
      ========================================================== */}
      <section className="border-t-[6px] border-orange-500 bg-slate-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                Pilotage & organisation
              </span>

              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Une gestion pensée <span className="text-orange-400">pour simplifier votre quotidien.</span>
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
                Centralisez vos informations et donnez à vos équipes les
                outils nécessaires pour gérer les stocks de manière plus
                claire, plus structurée et plus efficace.
              </p>

              <div className="mt-8 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
                {managementFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="flex gap-3 bg-slate-950 p-5 transition-colors duration-300 hover:bg-slate-900"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-orange-600 text-white">
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

            {/* Dashboard illustration */}
            <div className="relative">
              <div className="border border-white/15 bg-white/5 p-6 sm:p-8">
                <div className="border-t-4 border-orange-500 bg-slate-900 p-6">
                  <div className="flex items-center justify-between border-b border-white/15 pb-5">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                        Vue générale
                      </p>

                      <p className="mt-1 text-lg font-bold text-white">
                        État des stocks
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center bg-orange-600 text-white">
                      <Boxes className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-px bg-white/15">
                    <div className="bg-slate-900 p-4">
                      <p className="text-xs text-slate-400">
                        Références
                      </p>

                      <div className="mt-3 h-2 w-20 bg-orange-400/60" />
                      <div className="mt-2 h-2 w-28 bg-white/15" />
                    </div>

                    <div className="bg-slate-900 p-4">
                      <p className="text-xs text-slate-400">
                        Disponibilité
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        <span className="text-sm font-medium text-emerald-400">
                          Suivie
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-px bg-slate-800/60 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">
                        Niveau de stock
                      </span>

                      <span className="text-sm font-medium text-orange-400">
                        Suivi
                      </span>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden bg-white/15">
                      <div className="h-full w-3/4 bg-orange-500" />
                    </div>

                    <div className="mt-3 flex justify-between text-xs text-slate-400">
                      <span>Minimum</span>
                      <span>Disponible</span>
                      <span>Objectif</span>
                    </div>
                  </div>

                  <div className="mt-px grid grid-cols-3 gap-px bg-white/15">
                    <div className="bg-slate-900 p-3 text-center">
                      <ArrowDownToLine className="mx-auto h-4 w-4 text-emerald-400" />
                      <p className="mt-2 text-xs text-slate-300">
                        Entrées
                      </p>
                    </div>

                    <div className="bg-slate-900 p-3 text-center">
                      <ArrowRightLeft className="mx-auto h-4 w-4 text-orange-400" />
                      <p className="mt-2 text-xs text-slate-300">
                        Transferts
                      </p>
                    </div>

                    <div className="bg-slate-900 p-3 text-center">
                      <BellRing className="mx-auto h-4 w-4 text-amber-400" />
                      <p className="mt-2 text-xs text-slate-300">
                        Alertes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          REAPPROVISIONNEMENT
      ========================================================== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid border border-slate-200 lg:grid-cols-2">
            <div className="border-t-[6px] border-orange-500 bg-slate-50 p-8 sm:p-12 lg:p-14">
              <div className="flex h-14 w-14 items-center justify-center bg-slate-950 text-orange-400">
                <BellRing className="h-7 w-7" />
              </div>

              <span className="mt-7 block font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                Réapprovisionnement
              </span>

              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Anticipez vos besoins avant la rupture.
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Définissez des seuils adaptés à vos produits et identifiez
                rapidement les références qui nécessitent une attention
                particulière.
              </p>

              <ul className="mt-7 border-t border-slate-200">
                {[
                  'Seuils minimum personnalisables',
                  'Identification des produits sensibles',
                  'Alertes de stock faible',
                  'Meilleure anticipation des besoins',
                ].map((benefit) => (
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

              <div className="relative w-full max-w-sm">
                <div className="border border-white/15 border-t-4 border-t-orange-500 bg-slate-900 p-5">
                  <div className="flex items-center gap-3 border-b border-white/15 pb-4">
                    <div className="flex h-10 w-10 items-center justify-center bg-amber-500/15">
                      <BellRing className="h-5 w-5 text-amber-400" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        Alerte stock
                      </p>

                      <p className="text-xs text-slate-400">
                        Action recommandée
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-px bg-white/15">
                    {[
                      'Stock faible',
                      'Réapprovisionnement',
                      'Seuil minimum',
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center justify-between bg-slate-900 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${
                              index === 0
                                ? 'bg-amber-400'
                                : index === 1
                                  ? 'bg-orange-400'
                                  : 'bg-slate-500'
                            }`}
                          />

                          <span className="text-sm text-slate-200">
                            {item}
                          </span>
                        </div>

                        <ArrowUpRight className="h-4 w-4 text-slate-400" />
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
          MULTI SITES
      ========================================================== */}
      <section className="border-y border-slate-200 bg-slate-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center bg-slate-950 text-orange-400">
                <Warehouse className="h-7 w-7" />
              </div>

              <span className="mt-7 block font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                Multi-sites
              </span>

              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Un seul pilotage pour plusieurs emplacements.
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Si votre activité fonctionne avec plusieurs magasins,
                agences, dépôts ou sites, centralisez les informations tout
                en conservant une visibilité sur chaque emplacement.
              </p>

              <Link
                to="/#contact"
                className="group mt-8 inline-flex items-center gap-3 bg-slate-950 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-orange-600"
              >
                Parler de votre organisation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2">
              {[
                {
                  icon: Warehouse,
                  title: 'Stocks par site',
                  text: 'Visualisez les disponibilités et les niveaux de stock de chaque emplacement.',
                },
                {
                  icon: ArrowRightLeft,
                  title: 'Transferts',
                  text: 'Facilitez le déplacement de produits entre vos différents sites.',
                },
                {
                  icon: ClipboardList,
                  title: 'Inventaires',
                  text: 'Organisez les opérations d’inventaire de manière structurée.',
                },
                {
                  icon: BarChart3,
                  title: 'Vue globale',
                  text: 'Conservez une vision centralisée de l’ensemble de votre activité.',
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group bg-white p-6 transition-colors duration-300 hover:bg-slate-950"
                  >
                    <div className="flex h-11 w-11 items-center justify-center bg-slate-950 text-orange-400 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 font-display text-lg font-extrabold text-slate-950 transition-colors group-hover:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-slate-300">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTEURS
      ========================================================== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 border-b-2 border-slate-950 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                Secteurs d’activité
              </span>

              <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Une solution adaptée à votre environnement.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Nous adaptons la gestion des stocks à votre organisation, vos
              produits et vos contraintes opérationnelles.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
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
      <section className="border-y border-slate-200 bg-slate-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                Notre accompagnement
              </span>

              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                De l’analyse au déploiement.
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                PC MAROC vous accompagne dans la mise en place d’une
                organisation de stock adaptée à votre activité et à vos
                objectifs.
              </p>

              <Link
                to="/#contact"
                className="group mt-8 inline-flex items-center gap-3 bg-slate-950 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-orange-600"
              >
                Parler de votre projet
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2">
              {workflow.map((step) => (
                <div
                  key={step.number}
                  className="group bg-white p-7 transition-colors duration-300 hover:bg-slate-950"
                >
                  <span className="font-mono text-3xl font-extrabold text-orange-600">
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
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-slate-950">
          <div className="absolute left-0 top-0 h-2 w-full bg-orange-500" aria-hidden="true" />

          <div className="relative px-8 py-14 sm:px-12 lg:px-16 lg:py-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-600/25 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <PackageCheck className="h-5 w-5 text-orange-400" />

                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                    Optimisez votre gestion
                  </span>
                </div>

                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Prêt à mieux maîtriser vos stocks ?
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  Échangeons sur votre organisation et définissons ensemble
                  une solution adaptée à votre activité, vos produits et vos
                  différents points de stockage.
                </p>
              </div>

              <Link
                to="/#contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 bg-orange-600 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-slate-950"
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
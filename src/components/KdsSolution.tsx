import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  ChefHat,
  Clock3,
  Coffee,
  Monitor,
  PackageCheck,
  PlayCircle,
  RefreshCw,
  ShoppingBag,
  Smartphone,
  Timer,
  Utensils,
  Wifi,
  Zap,
} from 'lucide-react';
import type { ElementType } from 'react';
import { Link } from 'react-router-dom';

// ============================================================
// TYPES
// ============================================================

type FeatureCardProps = {
  index: string;
  icon: ElementType;
  title: string;
  description: string;
  items: string[];
};

type SourceCardProps = {
  index: string;
  icon: ElementType;
  title: string;
  description: string;
};

// ============================================================
// FEATURE CARD
// ============================================================

function FeatureCard({
  index,
  icon: Icon,
  title,
  description,
  items,
}: FeatureCardProps) {
  return (
    <div className="group relative h-full bg-white p-8 transition-colors duration-300 hover:bg-slate-950">
      <span className="absolute right-6 top-6 font-mono text-xs font-bold text-orange-600">
        {index}
      </span>

      <div className="flex h-12 w-12 items-center justify-center bg-slate-950 text-orange-400 transition-colors group-hover:bg-orange-600 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-5 pr-8 text-xl font-extrabold text-slate-950 transition-colors group-hover:text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-slate-300">
        {description}
      </p>

      <ul className="mt-6 space-y-2.5 border-t border-slate-200 pt-5 transition-colors group-hover:border-white/20">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-slate-700 transition-colors group-hover:text-white"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-600 group-hover:text-orange-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================================
// KDS SCREEN MOCKUP (hero)
// ============================================================

function KdsScreen() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Glow */}
      <div className="absolute -inset-8 rounded-[3rem] bg-orange-500/10 blur-3xl" />

      {/* Monitor */}
      <div className="relative rounded-[1.8rem] border border-slate-300 bg-slate-950 p-3 shadow-2xl">
        <div className="overflow-hidden rounded-[1.25rem] bg-slate-100">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-600 text-white">
                <ChefHat className="h-5 w-5" />
              </div>

              <div>
                <div className="text-sm font-bold text-slate-900">
                  Cuisine — Production
                </div>
                <div className="text-xs text-slate-500">Service du midi</div>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Connecté
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-hidden border-b border-slate-200 bg-white px-4 py-3">
            <span className="whitespace-nowrap rounded-lg bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white">
              Toutes
            </span>

            <span className="whitespace-nowrap rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
              Chaud
            </span>

            <span className="whitespace-nowrap rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
              Froid
            </span>

            <span className="whitespace-nowrap rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
              Bar
            </span>
          </div>

          {/* Orders */}
          <div className="grid gap-3 p-4 sm:grid-cols-2">
            {/* Order 1 */}
            <div className="rounded-2xl border border-slate-300 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900">
                    Commande #1048
                  </span>

                  <div className="mt-1 text-[11px] text-slate-500">
                    Table 12 · Salle
                  </div>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-700">
                  <Clock3 className="h-3 w-3" />
                  04:18
                </div>
              </div>

              <div className="my-4 h-px bg-slate-100" />

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Burger Maison
                  </span>
                  <span className="font-bold text-slate-900">×2</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Frites fraîches
                  </span>
                  <span className="font-bold text-slate-900">×2</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Salade César
                  </span>
                  <span className="font-bold text-slate-900">×1</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-xl bg-orange-600 py-2.5 text-xs font-bold text-white"
              >
                Démarrer
              </button>
            </div>

            {/* Order 2 */}
            <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900">
                    Commande #1049
                  </span>

                  <div className="mt-1 text-[11px] text-slate-500">
                    Borne · Sur place
                  </div>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-[10px] font-bold text-amber-600">
                  <Timer className="h-3 w-3" />
                  08:32
                </div>
              </div>

              <div className="my-4 h-px bg-slate-100" />

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Pizza 4 Fromages
                  </span>
                  <span className="font-bold text-slate-900">×1</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Pâtes Carbonara
                  </span>
                  <span className="font-bold text-slate-900">×1</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">Coca-Cola</span>
                  <span className="font-bold text-slate-900">×2</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-xl bg-amber-500 py-2.5 text-xs font-bold text-white"
              >
                En préparation
              </button>
            </div>

            {/* Order 3 */}
            <div className="rounded-2xl border border-red-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900">
                    Commande #1050
                  </span>

                  <div className="mt-1 text-[11px] text-slate-500">
                    Click & Collect
                  </div>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-[10px] font-bold text-red-600">
                  <Bell className="h-3 w-3" />
                  14:27
                </div>
              </div>

              <div className="my-4 h-px bg-slate-100" />

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">Menu Poulet</span>
                  <span className="font-bold text-slate-900">×3</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">Frites</span>
                  <span className="font-bold text-slate-900">×3</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-xl bg-red-500 py-2.5 text-xs font-bold text-white"
              >
                Prioritaire
              </button>
            </div>

            {/* Order 4 */}
            <div className="rounded-2xl border border-emerald-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900">
                    Commande #1047
                  </span>

                  <div className="mt-1 text-[11px] text-slate-500">
                    Table 08 · Salle
                  </div>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                  <PackageCheck className="h-3 w-3" />
                  Prête
                </div>
              </div>

              <div className="my-4 h-px bg-slate-100" />

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Steak Frites
                  </span>
                  <span className="font-bold text-slate-900">×2</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">
                    Eau minérale
                  </span>
                  <span className="font-bold text-slate-900">×2</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-2.5 text-xs font-bold text-white"
              >
                <Check className="h-4 w-4" />
                Prête à servir
              </button>
            </div>
          </div>
        </div>

        {/* Monitor stand */}
        <div className="mx-auto mt-2 h-5 w-32 rounded-b-xl bg-slate-800" />
        <div className="mx-auto h-2 w-48 rounded-full bg-slate-700" />
      </div>
    </div>
  );
}

// ============================================================
// SOURCE CARD
// ============================================================

function SourceCard({
  index,
  icon: Icon,
  title,
  description,
}: SourceCardProps) {
  return (
    <div className="group relative bg-white p-7 transition-colors duration-300 hover:bg-slate-950">
      <span className="absolute right-6 top-6 font-mono text-xs font-bold text-orange-600">
        {index}
      </span>

      <div className="flex h-12 w-12 items-center justify-center bg-slate-950 text-orange-400 transition-colors group-hover:bg-orange-600 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-5 text-lg font-extrabold text-slate-950 transition-colors group-hover:text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-slate-300">
        {description}
      </p>
    </div>
  );
}

// ============================================================
// PAGE
// ============================================================

export function KdsSolution() {
  return (
    <div className="overflow-hidden bg-white text-slate-800">
      {/* ======================================================
          HERO (inchangé, sans bleu)
      ====================================================== */}

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50/70 via-white to-white" />

        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-200/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Text */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
                <Monitor className="h-4 w-4" />
                KDS · Kitchen Display System
              </div>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Une cuisine plus
                <span className="block text-orange-600">
                  connectée et organisée.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Organisez votre production et affichez les commandes en temps
                réel directement sur les écrans de votre cuisine. Chaque équipe
                reçoit les informations dont elle a besoin, au bon moment.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/20 transition-all hover:-translate-y-0.5 hover:bg-orange-700"
                >
                  Demander une démo
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#fonctionnement"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-orange-200 hover:text-orange-600"
                >
                  Découvrir le fonctionnement
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* Trust points */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="h-4 w-4 text-orange-600" />
                  Temps réel
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="h-4 w-4 text-orange-600" />
                  Sans papier
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="h-4 w-4 text-orange-600" />
                  Multi-postes
                </div>
              </div>
            </div>

            {/* Mockup */}
            <div className="relative">
              <KdsScreen />

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block lg:-left-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Zap className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-xs font-medium text-slate-500">
                      Production
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      Optimisée en temps réel
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          INTRO
      ====================================================== */}

      <section
        id="fonctionnement"
        className="border-y border-slate-200 bg-slate-100"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-8 border-t-2 border-slate-950 pt-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                Cuisine connectée
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Chaque commande au bon poste,
                <span className="block text-orange-600">au bon moment.</span>
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-slate-600">
              Le KDS centralise les commandes et facilite leur préparation.
              Vos équipes travaillent avec une information claire, actualisée
              et adaptée à chaque poste de production.
            </p>
          </div>

          <div className="mt-14 grid gap-px border border-slate-300 bg-slate-300 lg:grid-cols-3">
            <FeatureCard
              index="01"
              icon={RefreshCw}
              title="Affichage en temps réel"
              description="Chaque nouvelle commande apparaît instantanément sur les écrans de production."
              items={[
                'Commandes affichées en quelques secondes',
                'Origine visible : salle, borne ou en ligne',
                'Réduction des erreurs liées au papier',
              ]}
            />

            <FeatureCard
              index="02"
              icon={ChefHat}
              title="Zones de production"
              description="Chaque équipe visualise uniquement les produits qui concernent son poste."
              items={[
                'Un écran par zone de production',
                'Filtrage automatique des produits',
                'Configuration flexible des postes',
              ]}
            />

            <FeatureCard
              index="03"
              icon={Timer}
              title="Orchestration & timing"
              description="Suivez les temps de préparation pour synchroniser les différents éléments d'une commande."
              items={[
                'Synchronisation des préparations',
                'Minuteurs et alertes',
                'Gestion des commandes prioritaires',
              ]}
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          WORKFLOW
      ====================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            {/* Left : panneau noir sticky */}
            <div className="border-t-[6px] border-orange-500 bg-slate-950 p-8 text-white sm:p-10 lg:sticky lg:top-28">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                Parcours d'une commande
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                De la prise de commande
                <span className="block text-orange-400">jusqu'au service.</span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-300">
                Chaque étape de préparation est visible en temps réel,
                permettant aux équipes de cuisine et de salle de rester
                parfaitement coordonnées.
              </p>

              <div className="mt-8 border-t border-white/15">
                {[
                  {
                    icon: Wifi,
                    title: 'Réception',
                    text: "La commande arrive immédiatement sur l'écran correspondant à la zone de production.",
                  },
                  {
                    icon: PlayCircle,
                    title: 'En préparation',
                    text: 'Le cuisinier prend en charge la commande et démarre le suivi de préparation.',
                  },
                  {
                    icon: Clock3,
                    title: 'Suivi du temps',
                    text: "Les minuteurs permettent de surveiller les délais et d'identifier rapidement les retards.",
                  },
                  {
                    icon: PackageCheck,
                    title: 'Prêt à servir',
                    text: "Une fois la préparation terminée, l'équipe en salle est informée pour assurer le service.",
                  },
                ].map((step, index) => (
                  <div
                    key={step.title}
                    className="flex gap-4 border-b border-white/15 py-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-orange-600 text-white">
                      <step.icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">
                        <span className="mr-2 font-mono text-xs text-orange-400">
                          0{index + 1}
                        </span>
                        {step.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="border border-slate-200 border-t-[6px] border-t-orange-500 bg-slate-50 p-6 sm:p-8">
              <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-5">
                <div>
                  <div className="text-lg font-extrabold text-slate-950">
                    Suivi de production
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                    Vue cuisine
                  </div>
                </div>

                <div className="bg-orange-600 px-3 py-1.5 text-xs font-bold text-white">
                  8 commandes
                </div>
              </div>

              <div className="grid gap-px border border-slate-300 bg-slate-300">
                {[
                  {
                    label: '#1048 · Table 12',
                    status: 'Nouvelle',
                    badge: 'bg-slate-100 text-slate-700',
                    bar: 'bg-slate-700',
                    width: 'w-[18%]',
                  },
                  {
                    label: '#1049 · Borne',
                    status: 'En cours',
                    badge: 'bg-amber-50 text-amber-600',
                    bar: 'bg-amber-500',
                    width: 'w-[62%]',
                  },
                  {
                    label: '#1050 · Click & Collect',
                    status: 'En retard',
                    badge: 'bg-red-50 text-red-600',
                    bar: 'bg-red-500',
                    width: 'w-[92%]',
                  },
                  {
                    label: '#1047 · Table 08',
                    status: 'Prête',
                    badge: 'bg-emerald-50 text-emerald-600',
                    bar: 'bg-emerald-500',
                    width: 'w-full',
                  },
                ].map((order) => (
                  <div key={order.label} className="bg-white p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">
                        {order.label}
                      </span>

                      <span
                        className={`px-2.5 py-1 text-[10px] font-bold ${order.badge}`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden bg-slate-100">
                      <div className={`h-full ${order.width} ${order.bar}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          STATUS COLORS
      ====================================================== */}

      <section className="border-t-[6px] border-orange-500 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-12 flex flex-col gap-4 border-b-2 border-white pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                Pilotage visuel
              </span>

              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Une lecture immédiate de
                <span className="text-orange-400"> l'état des commandes.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-300">
              Un système visuel simple permet à vos équipes de comprendre
              instantanément quelles commandes nécessitent leur attention.
            </p>
          </div>

          <div className="grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: RefreshCw,
                title: 'Nouvelle',
                text: "La commande vient d'arriver et attend sa prise en charge.",
                tone: 'bg-slate-500',
              },
              {
                icon: Timer,
                title: 'En cours',
                text: 'La préparation est en cours et le temps est suivi.',
                tone: 'bg-amber-500',
              },
              {
                icon: Bell,
                title: 'En retard',
                text: "Une alerte signale qu'une commande dépasse le délai prévu.",
                tone: 'bg-red-500',
              },
              {
                icon: Check,
                title: 'Prête',
                text: 'Tous les éléments sont terminés et peuvent être envoyés.',
                tone: 'bg-emerald-500',
              },
            ].map((status, index) => (
              <div
                key={status.title}
                className="relative bg-slate-950 p-7 transition-colors duration-300 hover:bg-slate-900"
              >
                <span
                  className={`absolute left-0 top-0 h-1 w-full ${status.tone}`}
                  aria-hidden="true"
                />

                <span className="absolute right-6 top-6 font-mono text-xs font-bold text-orange-400">
                  0{index + 1}
                </span>

                <div className="flex h-12 w-12 items-center justify-center bg-orange-600 text-white">
                  <status.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-white">
                  {status.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {status.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SOURCES
      ====================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-12 flex flex-col gap-4 border-b-2 border-slate-950 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                Commandes centralisées
              </span>

              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Toutes vos sources de commande
                <span className="block text-orange-600">
                  réunies au même endroit.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Salle, bornes, commandes en ligne ou livraison : vos flux
              peuvent être centralisés pour simplifier l'organisation de votre
              production.
            </p>
          </div>

          <div className="grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            <SourceCard
              index="01"
              icon={Utensils}
              title="Salle"
              description="Commandes provenant de la caisse ou des PDA utilisés par vos équipes."
            />

            <SourceCard
              index="02"
              icon={Monitor}
              title="Bornes"
              description="Commandes autonomes transmises directement au système de production."
            />

            <SourceCard
              index="03"
              icon={Smartphone}
              title="Click & Collect"
              description="Commandes passées en ligne et préparées avant l'arrivée du client."
            />

            <SourceCard
              index="04"
              icon={ShoppingBag}
              title="Livraison"
              description="Centralisation des commandes issues de vos canaux de livraison."
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          BENEFITS
      ====================================================== */}

      <section className="border-y border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                Optimisé pour vos équipes
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Plus de visibilité,
                <span className="block text-orange-600">
                  moins de friction en cuisine.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                Le KDS transforme la manière dont vos équipes reçoivent,
                priorisent et terminent les commandes.
              </p>

              <ul className="mt-7 border-t border-slate-300">
                {[
                  {
                    title: "Moins d'erreurs",
                    text: 'Les informations sont affichées clairement et au bon poste.',
                  },
                  {
                    title: 'Meilleure coordination',
                    text: "Cuisine et salle partagent une vision commune de l'avancement.",
                  },
                  {
                    title: 'Service plus fluide',
                    text: 'Les commandes terminées sont immédiatement identifiées.',
                  },
                  {
                    title: 'Production plus organisée',
                    text: 'Chaque poste travaille avec les informations qui lui sont utiles.',
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 border-b border-slate-300 py-4"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-orange-600 text-white">
                      <Check className="h-4 w-4" />
                    </div>

                    <div>
                      <div className="font-bold text-slate-950">
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        {item.text}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid gap-px border border-slate-300 bg-slate-300 sm:grid-cols-2">
              {[
                {
                  icon: Zap,
                  title: 'Temps réel',
                  text: 'Les nouvelles commandes apparaissent immédiatement.',
                },
                {
                  icon: ChefHat,
                  title: 'Multi-postes',
                  text: 'Organisez facilement plusieurs zones de production.',
                },
                {
                  icon: Clock3,
                  title: 'Suivi',
                  text: "Surveillez les délais de préparation en un coup d'œil.",
                },
                {
                  icon: Coffee,
                  title: 'Flexible',
                  text: 'Adaptez les zones et les flux à votre organisation.',
                },
              ].map((stat) => (
                <div
                  key={stat.title}
                  className="group bg-white p-7 transition-colors duration-300 hover:bg-slate-950"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-slate-950 text-orange-400 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                    <stat.icon className="h-6 w-6" />
                  </div>

                  <div className="mt-6 text-2xl font-extrabold text-slate-950 transition-colors group-hover:text-white">
                    {stat.title}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-600 transition-colors group-hover:text-slate-300">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CTA
      ====================================================== */}

      <section className="bg-orange-600">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <Monitor className="h-5 w-5 text-white" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  KDS
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Prêt à digitaliser votre cuisine ?
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-white/90">
                Découvrez comment une solution KDS peut améliorer
                l'organisation de votre production et fluidifier le service de
                vos équipes.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="/#contact"
                className="group inline-flex items-center justify-center gap-3 bg-slate-950 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-slate-950"
              >
                Demander une démo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 border border-white/60 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
              >
                Retour à l'accueil
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
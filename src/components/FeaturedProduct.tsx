import { motion } from 'framer-motion';
import {
  Check,
  ArrowRight,
  BarChart3,
  Boxes,
  Users,
  FileText,
  Layers,
  Lock,
} from 'lucide-react';

import { FEATURE_LIST } from '@/data/content';
import { Reveal, SectionTag } from './ui/Reveal';

const FEATURE_ICONS = [
  BarChart3,
  Boxes,
  FileText,
  Users,
  Layers,
  Users,
  Lock,
];

export function FeaturedProduct() {
  return (
    <section
      id="featured"
      className="relative scroll-mt-24 overflow-hidden bg-white py-8 lg:py-12"
    >
      {/* Fond décoratif */}
      <div className="pointer-events-none absolute inset-0 grid-bg-fine opacity-50" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Mockup produit */}
          <Reveal>
            <ProductMockup />
          </Reveal>

          {/* Contenu */}
          <div>
            <Reveal>
              <SectionTag>Solution phare</SectionTag>

              <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                Une technologie pensée pour{' '}
                <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  votre quotidien.
                </span>
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
                Notre plateforme de gestion et de point de vente centralise
                vos ventes, votre stock et votre clientèle dans une interface
                moderne, intuitive et sécurisée.
              </p>
            </Reveal>

            {/* Fonctionnalités */}
            <Reveal delay={0.15}>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {FEATURE_LIST.map((feature, i) => {
                  const Icon = FEATURE_ICONS[i] ?? Check;

                  return (
                    <div
                      key={feature}
                      className="group/feature relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200/80 bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md hover:shadow-orange-100/50"
                    >
                      {/* Ligne orange au survol */}
                      <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-400 to-orange-600 transition-transform duration-300 group-hover/feature:scale-y-100" />

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 transition-all duration-300 group-hover/feature:bg-orange-600">
                        <Icon className="h-4 w-4 text-orange-600 transition-colors duration-300 group-hover/feature:text-white" />
                      </div>

                      <span className="text-sm font-medium text-slate-700 transition-colors duration-300 group-hover/feature:text-orange-700">
                        {feature}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.3}>
              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-600/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Demander une démo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductMockup() {
  return (
    <div className="group/mockup relative">
      {/* Halo */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-orange-500/8 blur-3xl transition-colors duration-500 group-hover/mockup:bg-orange-500/15" />

      {/* Fenêtre du logiciel */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-orange-100/70">
        {/* Barre supérieure */}
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 shadow-sm">
              <Layers className="h-4 w-4 text-white" />
            </div>

            <span className="font-display text-xs font-semibold text-slate-900 sm:text-sm">
PC MAROC            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[10px] font-medium text-emerald-700">
              En ligne
            </span>
          </div>
        </div>

        {/* Corps */}
        <div className="grid grid-cols-[145px_minmax(0,1fr)] sm:grid-cols-[180px_minmax(0,1fr)]">
          {/* Sidebar */}
          <div className="hidden border-r border-slate-100 bg-slate-50/40 p-3 sm:block">
            <div className="mb-3 px-3 pt-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Menu principal
            </div>

            <div className="space-y-1">
              {[
                'Tableau de bord',
                'Ventes',
                'Stock',
                'Clients',
                'Produits',
                'Rapports',
              ].map((label, i) => (
                <div
                  key={label}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-[10px] transition-colors ${
                    i === 0
                      ? 'bg-orange-50 font-semibold text-orange-600'
                      : 'text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  <div
                    className={`h-3.5 w-3.5 shrink-0 rounded ${
                      i === 0 ? 'bg-orange-400/60' : 'bg-slate-200'
                    }`}
                  />
                  {label}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-slate-100 bg-white p-3">
              <div className="mb-2 flex items-center gap-1.5">
                <Lock className="h-3 w-3 text-emerald-600" />
                <span className="text-[9px] font-semibold text-slate-600">
                  Espace sécurisé
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-4/5 rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>

          {/* Panneau principal */}
          <div className="min-w-0 space-y-3 p-3 sm:p-4">
            {/* En-tête */}
            <div className="flex items-center justify-between gap-2">
              <div>
                <div className="font-display text-sm font-semibold text-slate-900 sm:text-base">
                  Vue d'ensemble
                </div>
                <div className="mt-0.5 text-[10px] text-slate-400">
                  Octobre 2026
                </div>
              </div>

              <div className="flex gap-1.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100">
                  <BarChart3 className="h-3.5 w-3.5 text-slate-500" />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100">
                  <Users className="h-3.5 w-3.5 text-slate-500" />
                </div>
              </div>
            </div>

            {/* Indicateurs */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {[
                { label: 'Revenu', value: '€48.2k', trend: '+12%' },
                { label: 'Commandes', value: '1,847', trend: '+8%' },
                { label: 'Panier moyen', value: '€26', trend: '+3%' },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="min-w-0 rounded-xl border border-slate-100 bg-slate-50/80 p-2 sm:p-2.5"
                >
                  <div className="truncate text-[9px] text-slate-400 sm:text-[10px]">
                    {kpi.label}
                  </div>
                  <div className="mt-0.5 truncate font-display text-xs font-bold text-slate-900 sm:text-sm">
                    {kpi.value}
                  </div>
                  <div className="mt-0.5 text-[9px] font-medium text-emerald-600">
                    {kpi.trend}
                  </div>
                </div>
              ))}
            </div>

            {/* Graphique */}
            <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="text-[10px] font-medium text-slate-600 sm:text-xs">
                  Ventes / jour
                </span>

                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-orange-500" />
                  <span className="text-[9px] text-slate-400 sm:text-[10px]">
                    Cette semaine
                  </span>
                </div>
              </div>

              <div className="flex h-20 items-end gap-1.5 sm:h-24 sm:gap-2">
                {[55, 72, 48, 90, 65, 100, 78].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.08,
                      ease: 'easeOut',
                    }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-orange-600/40 to-amber-400/80 transition-opacity duration-300 hover:opacity-70 sm:rounded-t-md"
                  />
                ))}
              </div>

              <div className="mt-2 flex justify-between text-[9px] text-slate-400">
                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                  <span key={`${day}-${i}`}>{day}</span>
                ))}
              </div>
            </div>

            {/* Transactions récentes */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-semibold text-slate-600 sm:text-xs">
                Dernières ventes
              </div>

              {[
                {
                  id: '#1042',
                  label: 'Commande restaurant',
                  amount: '€84.50',
                  status: 'Payé',
                },
                {
                  id: '#1041',
                  label: 'Boutique – 3 articles',
                  amount: '€156.00',
                  status: 'Payé',
                },
              ].map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex min-w-0 items-center gap-2 rounded-lg border border-slate-100 bg-white px-2 py-2 transition-colors duration-300 hover:border-orange-100 hover:bg-orange-50/30 sm:gap-3 sm:px-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-orange-50">
                    <FileText className="h-3 w-3 text-orange-600" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[10px] font-medium text-slate-900 sm:text-xs">
                      {transaction.label}
                    </div>
                    <div className="text-[9px] text-slate-400">
                      {transaction.id}
                    </div>
                  </div>

                  <div className="shrink-0 text-[10px] font-semibold text-slate-900 sm:text-xs">
                    {transaction.amount}
                  </div>

                  <div className="hidden rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] text-emerald-700 sm:block">
                    {transaction.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
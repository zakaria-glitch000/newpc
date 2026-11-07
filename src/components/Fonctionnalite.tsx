import React from 'react';
import {
  ShoppingCart,
  Box,
  Users,
  TrendingUp,
  Tag,
  ClipboardCheck,
  Settings,
  Check,
  BadgeCheck,
} from 'lucide-react';

const NAVY = '#0B1F4B';
const GOLD = '#EA580C';
const ORANGE_GRADIENT = 'linear-gradient(90deg, #F59E0B 0%, #EA580C 50%, #C2410C 100%)';
const TEAL = '#1AA7B8';

const ACCENTS = {
  gold: {
    border: 'linear-gradient(135deg, #FBBF24 0%, #F97316 50%, #FBBF24 100%)',
    fillLeft: 'linear-gradient(110deg, #FFFFFF 35%, #FFF7ED 100%)',
    fillRight: 'linear-gradient(250deg, #FFFFFF 35%, #FFF7ED 100%)',
  },
  teal: {
    border: 'linear-gradient(135deg, #1AA7B8 0%, #8ADCE5 50%, #1AA7B8 100%)',
    fillLeft: 'linear-gradient(110deg, #FFFFFF 35%, #E3F5F8 100%)',
    fillRight: 'linear-gradient(250deg, #FFFFFF 35%, #E3F5F8 100%)',
  },
};

const leftFeatures = [
  {
    id: 'encaissement',
    icon: ShoppingCart,
    badge: true,
    title: 'Encaissement & ventes',
    description: 'Enregistrez vos transactions rapidement et en toute sécurité.',
    accent: 'gold',
    offset: 'lg:ml-10',
  },
  {
    id: 'clients',
    icon: Users,
    title: 'Clients & fidélité',
    description: "Suivez votre clientèle, historique d'achats et programmes de fidélité.",
    accent: 'teal',
    offset: 'lg:ml-0',
  },
  {
    id: 'remises',
    icon: Tag,
    title: 'Remises & promotions',
    description: 'Appliquez des remises, offres spéciales et programmes de fidélisation.',
    accent: 'gold',
    offset: 'lg:ml-10',
  },
];

const rightFeatures = [
  {
    id: 'articles',
    icon: Box,
    title: 'Articles, services & tarifs',
    description: 'Gérez vos produits ou prestations, vos catégories et vos prix.',
    accent: 'teal',
    offset: 'lg:mr-10',
  },
  {
    id: 'suivi',
    icon: TrendingUp,
    title: 'Suivi & reporting',
    description: 'Analysez vos ventes, suivez vos performances et prenez les bonnes décisions.',
    accent: 'gold',
    offset: 'lg:mr-0',
  },
  {
    id: 'controle',
    icon: ClipboardCheck,
    title: 'Contrôle de caisse',
    description:
      'Clôturez vos ventes, suivez les règlements et les mouvements de caisse en toute simplicité.',
    accent: 'teal',
    offset: 'lg:mr-10',
  },
];

function FeatureCard({ item, side }) {
  const Icon = item.icon;
  const acc = ACCENTS[item.accent];
  const radius =
    side === 'left'
      ? '48px 130px 130px 48px / 48px 55px 55px 48px'
      : '130px 48px 48px 130px / 55px 48px 48px 55px';

  return (
    <div
      className={`${item.offset} transition-transform duration-300 hover:-translate-y-0.5`}
      style={{
        background: acc.border,
        padding: '2px',
        borderRadius: radius,
        boxShadow: '0 8px 24px -10px rgba(11,31,75,0.25)',
      }}
    >
      <div
        className="flex items-center px-6 py-5 sm:px-7 sm:py-6"
        style={{
          background: side === 'left' ? acc.fillLeft : acc.fillRight,
          borderRadius: radius,
        }}
      >
        {/* Icône */}
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
          <Icon className="h-10 w-10" style={{ color: NAVY }} strokeWidth={1.6} />
          {item.badge && (
            <BadgeCheck
              className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-white"
              style={{ color: GOLD }}
              strokeWidth={2.4}
            />
          )}
        </div>

        {/* Séparateur */}
        <div className="mx-4 h-14 w-px shrink-0 bg-slate-300" />

        {/* Texte */}
        <div>
          <h3 className="mb-1 text-base font-extrabold sm:text-lg" style={{ color: NAVY }}>
            {item.title}
          </h3>
          <p className="text-xs leading-snug sm:text-[13px]" style={{ color: '#1F2D52' }}>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function Hub() {
  return (
    <div className="relative hidden min-h-[420px] items-center justify-center lg:flex">
      {/* Connexions */}
      <svg
        className="pointer-events-none absolute inset-y-0 -inset-x-16 h-full w-[calc(100%+8rem)]"
        viewBox="0 0 400 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M 0,70 C 120,90 150,170 200,200" stroke="#F97316" strokeOpacity="0.45" strokeWidth="2" />
        <path d="M 0,200 L 200,200" stroke="#1AA7B8" strokeOpacity="0.45" strokeWidth="2" />
        <path d="M 0,330 C 120,310 150,230 200,200" stroke="#F97316" strokeOpacity="0.45" strokeWidth="2" />
        <path d="M 400,70 C 280,90 250,170 200,200" stroke="#1AA7B8" strokeOpacity="0.45" strokeWidth="2" />
        <path d="M 400,200 L 200,200" stroke="#F97316" strokeOpacity="0.45" strokeWidth="2" />
        <path d="M 400,330 C 280,310 250,230 200,200" stroke="#1AA7B8" strokeOpacity="0.45" strokeWidth="2" />
      </svg>

      {/* Cercle central */}
      <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-[0_10px_40px_-8px_rgba(11,31,75,0.35)]">
        {/* Anneau coloré */}
        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="44" stroke="#EEF2F7" strokeWidth="1.5" />
          {/* quatre arcs */}
          <circle cx="50" cy="50" r="46" stroke={TEAL} strokeWidth="5" strokeLinecap="butt"
            strokeDasharray="55 234" strokeDashoffset="-4" />
          <circle cx="50" cy="50" r="46" stroke={GOLD} strokeWidth="5" strokeLinecap="butt"
            strokeDasharray="55 234" strokeDashoffset="-76" />
          <circle cx="50" cy="50" r="46" stroke={GOLD} strokeWidth="5" strokeLinecap="butt"
            strokeDasharray="55 234" strokeDashoffset="-148" />
          <circle cx="50" cy="50" r="46" stroke={TEAL} strokeWidth="5" strokeLinecap="butt"
            strokeDasharray="55 234" strokeDashoffset="-220" />
        </svg>

        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-inner">
          <Settings className="h-20 w-20" style={{ color: NAVY }} strokeWidth={1.4} />
          <Check className="absolute h-8 w-8" style={{ color: GOLD }} strokeWidth={3.5} />
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-10 pt-12 sm:px-6 lg:pb-12 lg:pt-14">
      {/* Halo de fond léger */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,#F4F8FC_0%,#FFFFFF_70%)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* EN-TÊTE */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-5">
            <span className="h-[3px] w-14 rounded-full" style={{ background: ORANGE_GRADIENT }} />
            <span className="text-sm font-extrabold uppercase tracking-[0.12em]" style={{ color: NAVY }}>
              Fonctionnalités clés
            </span>
            <span className="h-[3px] w-14 rounded-full" style={{ background: ORANGE_GRADIENT }} />
          </div>

          <h2
            className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: NAVY }}
          >
            Les fonctionnalités essentielles
            <span
              className="mt-1 block"
              style={{
                backgroundImage: ORANGE_GRADIENT,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              pour piloter votre activité
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: '#1F2D52' }}>
            Une solution complète et évolutive qui centralise la gestion de vos ventes,
            de vos clients et de votre activité, quel que soit votre secteur.
          </p>
        </div>

        {/* GRILLE */}
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[1fr_190px_1fr] lg:gap-0">
          <div className="flex flex-col gap-5 lg:gap-6">
            {leftFeatures.map((item) => (
              <FeatureCard key={item.id} item={item} side="left" />
            ))}
          </div>

          <Hub />

          <div className="flex flex-col gap-5 lg:gap-6">
            {rightFeatures.map((item) => (
              <FeatureCard key={item.id} item={item} side="right" />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
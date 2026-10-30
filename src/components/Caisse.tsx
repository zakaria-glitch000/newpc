import React, { useState } from 'react';
import {
  Tv, ShieldCheck, Gauge, Layers, Maximize, Wrench, Utensils,
  LayoutGrid, Soup, Tag, Users, BarChart3, Printer, Share2,
  Settings, Store, Headphones, ChevronRight,
  KeyRound, CreditCard, Fingerprint, Monitor, PanelTop, ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import pcImage from '@/assets/pc.jpeg';
import caisseImage from '@/assets/00.png';
import caissePeripheriquesImage from '@/assets/tf15.jpeg';
import tca from '@/assets/tca.jpeg';

/* 👉 Importation de la nouvelle image pour CSI MINI */
import csiMiniDoubleImage from '@/assets/39.jpeg';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

type SupportItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ProductImage = { src: string; alt: string; label: string };
type Spec = { icon: React.ReactNode; label: string };
type Extra = { icon: React.ReactNode; title: string; brand?: string; description: string };

type Product = {
  name: string;
  tagline: string;
  description: string;
  images: ProductImage[];
  specs: Spec[];
  extras?: Extra[];
};

const products: Product[] = [
  {
    name: 'CSI TF-15',
    tagline: 'La performance au quotidien',
    description:
      'Un terminal tactile fiable et robuste, idéal pour les restaurants, cafés, bars et commerces de proximité.',
    images: [
      { src: caisseImage, alt: 'Caisse enregistreuse CSI TF-15', label: 'Caisse' },
      {
        src: caissePeripheriquesImage,
        alt: 'Caisse CSI TF-15 avec écran client, afficheur et lecteurs',
        label: 'Périphériques',
      },
    ],
    specs: [
      { icon: <Tv className="h-5 w-5" />, label: 'Écran tactile 15"' },
      { icon: <ShieldCheck className="h-5 w-5" />, label: 'Robuste et fiable' },
      { icon: <Gauge className="h-5 w-5" />, label: 'Usage intensif' },
      { icon: <Layers className="h-5 w-5" />, label: 'Compatible périphériques' },
    ],
    extras: [
      {
        icon: <KeyRound className="h-5 w-5" />,
        title: 'Lecteur de clef Dallas',
        brand: 'Varipos 850',
        description: 'Identification rapide du personnel',
      },
      {
        icon: <CreditCard className="h-5 w-5" />,
        title: 'Lecteur de badge',
        description: 'Contrôle d’accès par carte RFID',
      },
      {
        icon: <Fingerprint className="h-5 w-5" />,
        title: 'Lecteur d’empreinte',
        brand: 'Varipos 850',
        description: 'Identification sécurisée du personnel',
      },
      {
        icon: <PanelTop className="h-5 w-5" />,
        title: 'Afficheur client',
        description: 'Affichage du montant',
      },
      {
        icon: <Monitor className="h-5 w-5" />,
        title: 'Écran client 10"',
        description: 'Publicité et affichage',
      },
      {
        icon: <Monitor className="h-5 w-5" />,
        title: 'Écran client 7"',
        description: 'Publicité et affichage',
      },
    ],
  },
  {
    name: ' CSI LAW 12',
    tagline: 'Compacte et efficace',
    description:
      'Une caisse tactile tout-en-un, parfaite pour les petits espaces et les activités à taille humaine.',
    images: [
      { src: pcImage, alt: 'Caisse enregistreuse  CSI LAW C', label: 'Caisse' },
      {
        src: csiMiniDoubleImage,
        alt: 'Caisse  CSI LAW C avec double écran',
        label: 'Périphériques',
      },
    ],
    specs: [
      { icon: <Tv className="h-5 w-5" />, label: 'Écran tactile 12"' },
      { icon: <Maximize className="h-5 w-5" />, label: 'Design compact' },
      { icon: <ShieldCheck className="h-5 w-5" />, label: 'Robuste et fiable' },
      { icon: <Wrench className="h-5 w-5" />, label: 'Installation rapide' },
    ],
    extras: [
      {
        icon: <KeyRound className="h-5 w-5" />,
        title: 'Lecteur de clef Dallas',
        description: 'Identification rapide et sécurisée du personnel',
      },
      {
        icon: <Monitor className="h-5 w-5" />,
        title: 'Écran client / Afficheur',
        description: 'Double écran pour affichage des prix et offres',
      },
    ],
  },
];

const features: FeatureProps[] = [
  { icon: <Utensils className="h-5 w-5" />, title: 'Gestion des ventes', description: 'Encaissement rapide et intuitif, en salle, au bar ou en magasin.', color: 'orange' },
  { icon: <LayoutGrid className="h-5 w-5" />, title: 'Gestion des tables et plans de salle', description: 'Organisation simple du service et suivi en temps réel.', color: 'amber' },
  { icon: <Soup className="h-5 w-5" />, title: 'Menus et formules', description: 'Gestion des menus, formules, options et suppléments.', color: 'rose' },
  { icon: <Tag className="h-5 w-5" />, title: 'Promotions et offres', description: 'Création de promotions, remises et prix spéciaux.', color: 'emerald' },
  { icon: <Users className="h-5 w-5" />, title: 'Gestion des clients', description: 'Fidélisation et suivi de la clientèle.', color: 'purple' },
  { icon: <BarChart3 className="h-5 w-5" />, title: 'Rapports et statistiques', description: "Suivi du chiffre d'affaires, annulations, retours, pertes et offres.", color: 'amber' },
  { icon: <Printer className="h-5 w-5" />, title: 'Impression et cuisine', description: 'Impression des tickets, commandes cuisine et bons de préparation.', color: 'indigo' },
  { icon: <Share2 className="h-5 w-5" />, title: 'Multi-postes et périphériques', description: 'Connexion des imprimantes, tiroirs-caisses, écrans cuisine KDS et PDA.', color: 'teal' },
  { icon: <Settings className="h-5 w-5" />, title: 'Paramétrage simple', description: 'Interface claire et personnalisable selon votre activité.', color: 'red' },
  { icon: <Store className="h-5 w-5" />, title: 'Adaptée à plusieurs secteurs', description: 'Restauration, cafés, bars, commerces de proximité et retail.', color: 'orange' },
];

const supportItems: SupportItemProps[] = [
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'Une solution fiable', description: 'Conçue pour un usage professionnel et intensif.' },
  { icon: <Wrench className="h-5 w-5" />, title: 'Un matériel polyvalent', description: 'Compatible avec les équipements de votre installation.' },
  { icon: <Headphones className="h-5 w-5" />, title: 'Un accompagnement sur mesure', description: 'Notre équipe vous conseille et vous accompagne à chaque étape.' },
];

export default function OraliPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-white pt-24 font-sans text-slate-800">
      {/* HERO */}
      <section className="relative isolate flex min-h-[390px] items-center overflow-hidden bg-slate-950 md:min-h-[490px]">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center blur-[2px]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=90')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-slate-950/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/65 to-slate-950/15" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-orange-300 md:text-xs">
            <span className="h-2 w-2 rounded-full bg-orange-400" /> Caisses enregistreuses CSI
          </span>
          <h1 className="mb-5 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            Deux modèles,<br />la même <span className="text-orange-400">performance.</span>
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-slate-100 sm:text-base">
            Des terminaux tactiles fiables et modernes, avec toutes les fonctionnalités de notre solution d'encaissement CSI. Choisissez le format qui correspond le mieux à votre espace.
          </p>
          <Link to="/#contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-orange-600">
            Demander une démo <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent" />
      </section>

      <main className="mx-auto w-full max-w-7xl space-y-16 px-5 py-12 sm:px-8 md:space-y-20 md:px-12 md:py-16 lg:px-16">
        {/* PRODUITS */}
        <section aria-labelledby="products-title">
          <div className="mx-auto mb-9 max-w-2xl text-center">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-600">Nos terminaux CSI</p>
            <h2 id="products-title" className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl md:text-4xl">Choisissez le format qui vous convient</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600">Deux formats pensés pour vous accompagner au quotidien, avec une solution d'encaissement complète et performante.</p>
          </div>
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        {/* FONCTIONNALITÉS */}
        <section className="relative overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50/80 via-white to-slate-50 p-5 sm:p-8 md:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="relative z-10 mx-auto mb-9 max-w-3xl space-y-3 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-600">Les fonctionnalités de la caisse CSI</p>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Une solution complète, identique sur les deux modèles</h2>
            <p className="text-sm leading-6 text-slate-600">Quel que soit le modèle choisi, vous bénéficiez des mêmes fonctionnalités avancées pour gérer votre activité.</p>
          </div>
          <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((feature) => <Feature key={feature.title} {...feature} />)}
          </div>
        </section>

        {/* ACCOMPAGNEMENT */}
        <section>
          <div className="overflow-hidden rounded-3xl bg-orange-50/50 shadow-lg shadow-slate-200/50 border border-orange-100/80">
            <div className="grid lg:grid-cols-[2fr_3fr]">
              <div className="relative min-h-[260px] bg-slate-200/70 lg:min-h-full">
                <img
                  src={tca}
                  alt="Notre accompagnement"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <span className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-orange-600">
                  NOTRE ACCOMPAGNEMENT
                </span>

                <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                  Installation, formation et support
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Notre équipe technique vous accompagne à chaque étape pour une mise en service rapide et une utilisation en toute sérénité.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="flex flex-col items-center rounded-2xl bg-white p-3 text-center shadow-sm border border-slate-100">
                      <Wrench className="h-6 w-6 text-orange-500" strokeWidth={2} />
                      <span className="mt-2 text-[11px] font-bold leading-tight text-slate-700">
                        Installation et paramétrage
                      </span>
                    </div>

                    <div className="flex flex-col items-center rounded-2xl bg-white p-3 text-center shadow-sm border border-slate-100">
                      <Users className="h-6 w-6 text-orange-500" strokeWidth={2} />
                      <span className="mt-2 text-[11px] font-bold leading-tight text-slate-700">
                        Formation des équipes
                      </span>
                    </div>

                    <div className="flex flex-col items-center rounded-2xl bg-white p-3 text-center shadow-sm border border-slate-100">
                      <Headphones className="h-6 w-6 text-orange-500" strokeWidth={2} />
                      <span className="mt-2 text-[11px] font-bold leading-tight text-slate-700">
                        Assistance technique
                      </span>
                    </div>

                    <div className="flex flex-col items-center rounded-2xl bg-white p-3 text-center shadow-sm border border-slate-100">
                      <Settings className="h-6 w-6 text-orange-500" strokeWidth={2} />
                      <span className="mt-2 text-[11px] font-bold leading-tight text-slate-700">
                        Suivi et maintenance
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/#contact"
                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-orange-700"
                  >
                    Demander une démonstration <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACCCOMPAGNEMENT POINTS */}
        <section>
          <div className="mb-7 text-center">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-600">À vos côtés</p>
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">Bien plus qu'un terminal de caisse</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {supportItems.map((item) => <SupportItem key={item.title} {...item} />)}
          </div>
        </section>

      </main>
    </div>
  );
}

/* =====================================================
   CARTE PRODUIT (2 images switchables + périphériques)
===================================================== */

function ProductCard({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const current = product.images[active];
  const hasMany = product.images.length > 1;

  return (
    <article className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 sm:p-6">
      {/* Image principale */}
      <div className="relative mb-3 flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-orange-50/50 p-6 md:h-80">
        <div className="absolute right-4 top-4 z-10 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          CSI
        </div>

        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          loading="lazy"
          className="h-full max-h-full w-full max-w-full object-contain transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Miniatures */}
      {hasMany && (
        <div className="mb-6 flex items-center justify-center gap-3">
          {product.images.map((img, i) => (
            <button
              key={img.label}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Voir : ${img.label}`}
              aria-pressed={i === active}
              className={`flex items-center gap-2 rounded-xl border bg-white p-1.5 pr-3 text-xs font-bold transition duration-200 ${
                i === active
                  ? 'border-orange-400 text-orange-600 ring-2 ring-orange-100'
                  : 'border-slate-200 text-slate-500 hover:border-orange-200 hover:text-orange-600'
              }`}
            >
              <img
                src={img.src}
                alt=""
                aria-hidden="true"
                className="h-10 w-12 rounded-lg bg-slate-50 object-contain"
              />
              {img.label}
            </button>
          ))}
        </div>
      )}

      {!hasMany && <div className="mb-3" />}

      <div className="flex flex-1 flex-col px-1">
        <h3 className="text-2xl font-black text-slate-900 md:text-3xl">{product.name}</h3>
        <p className="mb-3 mt-2 text-xs font-extrabold uppercase tracking-[0.14em] text-orange-600">{product.tagline}</p>
        <p className="mb-6 max-w-xl text-sm leading-6 text-slate-600">{product.description}</p>

        {/* Specs */}
        <div className="mt-auto grid grid-cols-2 gap-3 border-t border-slate-200 pt-5 sm:grid-cols-4">
          {product.specs.map((spec) => (
            <div key={spec.label} className="flex flex-col items-center text-center">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-orange-100">{spec.icon}</div>
              <span className="text-[11px] font-semibold leading-4 text-slate-700 sm:text-xs">{spec.label}</span>
            </div>
          ))}
        </div>

        {/* Périphériques compatibles */}
        {product.extras && (
          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-orange-600">
              Périphériques compatibles
            </p>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.extras.map((extra) => (
                <li
                  key={extra.title}
                  className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-orange-50/40 p-3 transition duration-200 hover:border-orange-200 hover:bg-orange-50"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white shadow-sm shadow-orange-500/30">
                    {extra.icon}
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-5 text-slate-900">{extra.title}</p>
                    {extra.brand && (
                      <p className="text-xs font-bold leading-4 text-orange-600">{extra.brand}</p>
                    )}
                    <p className="mt-0.5 text-xs leading-5 text-slate-500">{extra.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}

function Feature({ icon, title, description, color }: FeatureProps) {
  const colorClasses: Record<string, string> = {
    orange: 'bg-orange-50 text-orange-600 ring-orange-100',
    amber: 'bg-amber-50 text-amber-600 ring-amber-100',
    rose: 'bg-rose-50 text-rose-600 ring-rose-100',
    emerald: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
    purple: 'bg-purple-50 text-purple-600 ring-purple-100',
    indigo: 'bg-indigo-50 text-indigo-600 ring-indigo-100',
    teal: 'bg-teal-50 text-teal-600 ring-teal-100',
    red: 'bg-red-50 text-red-600 ring-red-100',
  };

  return (
    <article className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition group-hover:scale-105 ${colorClasses[color] ?? colorClasses.orange}`}>{icon}</div>
      <h3 className="text-sm font-bold leading-5 text-slate-900">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
    </article>
  );
}

function SupportItem({ icon, title, description }: SupportItemProps) {
  return (
    <article className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-lg">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-orange-100">{icon}</div>
      <div>
        <h3 className="text-sm font-bold text-slate-900">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
      </div>
    </article>
  );
}
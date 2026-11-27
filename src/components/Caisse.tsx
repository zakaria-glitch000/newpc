import React, { useState } from 'react';
import {
  Tv, ShieldCheck, Gauge, Layers, Maximize, Wrench, Utensils,
  LayoutGrid, Soup, Tag, Users, BarChart3, Printer, Share2,
  Settings, Store, Headphones, ChevronRight, ArrowRight, Plus, Minus,
  KeyRound, CreditCard, Fingerprint, Monitor, PanelTop,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/bn.jpg';

import pcImage from '@/assets/pc.jpeg';
import caisseImage from '@/assets/00.png';
import caissePeripheriquesImage from '@/assets/tf15.jpeg';
import tca from '@/assets/supportt.jpeg';
import csiMiniDoubleImage from '@/assets/39.jpeg';

type FeatureProps = { icon: React.ReactNode; title: string; description: string; index: number };
type SupportItemProps = { icon: React.ReactNode; title: string; description: string };
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
    name: 'CSI LAW 12',
    tagline: 'Compacte et efficace',
    description:
      'Une caisse tactile tout-en-un, parfaite pour les petits espaces et les activités à taille humaine.',
    images: [
      { src: pcImage, alt: 'Caisse enregistreuse CSI LAW 12', label: 'Caisse' },
      { src: csiMiniDoubleImage, alt: 'Caisse CSI LAW 12 avec double écran', label: 'Périphériques' },
    ],
    specs: [
      { icon: <Tv className="h-4 w-4" />, label: 'Écran tactile 12"' },
      { icon: <Maximize className="h-4 w-4" />, label: 'Design compact' },
      { icon: <ShieldCheck className="h-4 w-4" />, label: 'Robuste et fiable' },
      { icon: <Wrench className="h-4 w-4" />, label: 'Installation rapide' },
    ],
    extras: [
      { icon: <KeyRound className="h-4 w-4" />, title: 'Lecteur de clef Dallas', description: 'Identification rapide et sécurisée du personnel' },
      { icon: <Monitor className="h-4 w-4" />, title: 'Écran client / Afficheur', description: 'Double écran pour affichage des prix et offres' },
    ],
  },
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
      { icon: <Tv className="h-4 w-4" />, label: 'Écran tactile 15"' },
      { icon: <ShieldCheck className="h-4 w-4" />, label: 'Robuste et fiable' },
      { icon: <Gauge className="h-4 w-4" />, label: 'Usage intensif' },
      { icon: <Layers className="h-4 w-4" />, label: 'Compatible périphériques' },
    ],
    extras: [
      { icon: <KeyRound className="h-4 w-4" />, title: 'Lecteur de clef Dallas', brand: 'Varipos 850', description: 'Identification rapide du personnel' },
      { icon: <CreditCard className="h-4 w-4" />, title: 'Lecteur de badge', description: 'Contrôle d’accès par carte RFID' },
      { icon: <Fingerprint className="h-4 w-4" />, title: 'Lecteur d’empreinte', brand: 'Varipos 850', description: 'Identification sécurisée du personnel' },
      { icon: <PanelTop className="h-4 w-4" />, title: 'Afficheur client', description: 'Affichage du montant' },
      { icon: <Monitor className="h-4 w-4" />, title: 'Écran client 10"', description: 'Publicité et affichage' },
      { icon: <Monitor className="h-4 w-4" />, title: 'Écran client 7"', description: 'Publicité et affichage' },
    ],
  },
];

const features = [
  { icon: <Utensils className="h-5 w-5" />, title: 'Gestion des ventes', description: 'Encaissement rapide et intuitif, en salle, au bar ou en magasin.' },
  { icon: <LayoutGrid className="h-5 w-5" />, title: 'Tables et plans de salle', description: 'Organisation simple du service et suivi en temps réel.' },
  { icon: <Soup className="h-5 w-5" />, title: 'Menus et formules', description: 'Gestion des menus, formules, options et suppléments.' },
  { icon: <Tag className="h-5 w-5" />, title: 'Promotions et offres', description: 'Création de promotions, remises et prix spéciaux.' },
  { icon: <Users className="h-5 w-5" />, title: 'Gestion des clients', description: 'Fidélisation et suivi de la clientèle.' },
  { icon: <BarChart3 className="h-5 w-5" />, title: 'Rapports et statistiques', description: "Suivi du chiffre d'affaires, annulations, retours, pertes et offres." },
  { icon: <Printer className="h-5 w-5" />, title: 'Impression et cuisine', description: 'Impression des tickets, commandes cuisine et bons de préparation.' },
  { icon: <Share2 className="h-5 w-5" />, title: 'Multi-postes et périphériques', description: 'Connexion des imprimantes, tiroirs-caisses, écrans cuisine KDS et PDA.' },
  { icon: <Settings className="h-5 w-5" />, title: 'Paramétrage simple', description: 'Interface claire et personnalisable selon votre activité.' },
  { icon: <Store className="h-5 w-5" />, title: 'Adaptée à plusieurs secteurs', description: 'Restauration, cafés, bars, commerces de proximité et retail.' },
];

const accompagnement = [
  {
    title: 'Conseil et formation',
    text: 'Notre équipe vous accompagne dans le choix et la prise en main de votre solution. Nous analysons vos besoins afin de vous proposer les meilleures solutions et de former vos équipes à leur utilisation.',
  },
  {
    title: 'Installation et paramétrage',
    text: 'Nos techniciens installent votre matériel, configurent le logiciel selon votre activité et connectent vos périphériques pour une mise en service rapide et sans surprise.',
  },
  {
    title: 'Support technique',
    text: 'Une assistance réactive et un suivi régulier pour garantir la continuité de votre activité, avec maintenance et interventions en cas de besoin.',
  },
];

const supportItems: SupportItemProps[] = [
  { icon: <ShieldCheck className="h-6 w-6" />, title: 'Une solution fiable', description: 'Conçue pour un usage professionnel et intensif.' },
  { icon: <Wrench className="h-6 w-6" />, title: 'Un matériel polyvalent', description: 'Compatible avec les équipements de votre installation.' },
  { icon: <Headphones className="h-6 w-6" />, title: 'Un accompagnement sur mesure', description: 'Notre équipe vous conseille et vous accompagne à chaque étape.' },
];

export default function OraliPage() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-white pt-24 font-sans text-slate-900">
      {/* HERO */}
      <section className="relative isolate flex min-h-[390px] items-center overflow-hidden bg-slate-950 md:min-h-[490px]">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center blur-[2px]"
         style={{ backgroundImage: `url(${heroImage})` }}
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

      <main>
        {/* PRODUITS */}
        <section id="modeles" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16" aria-labelledby="products-title">
          <div className="mb-12 flex flex-col justify-between gap-4 border-b-2 border-slate-900 pb-6 md:flex-row md:items-end">
            <h2 id="products-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Nos terminaux
            </h2>
            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Deux formats pensés pour vous accompagner au quotidien, avec une solution d'encaissement complète et performante.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {products.map((product, i) => (
              <ProductRow key={product.name} product={product} index={i} />
            ))}
          </div>
        </section>

        {/* FONCTIONNALITÉS */}
        <section className="bg-white">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16">
            <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:gap-10">
              {/* Panneau noir */}
              <div className="relative overflow-hidden bg-slate-950 p-8 text-white sm:p-10 lg:sticky lg:top-28">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/30 blur-3xl" aria-hidden="true" />
                <div className="absolute left-0 top-0 h-1.5 w-full bg-orange-500" aria-hidden="true" />
                <p className="relative text-xs font-extrabold uppercase tracking-[0.25em] text-orange-400">
                  Fonctionnalités
                </p>
                <h2 className="relative mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                  Une solution complète, <span className="text-orange-400">identique sur les deux modèles</span>
                </h2>
                <p className="relative mt-4 text-sm leading-7 text-slate-300">
                  Quel que soit le modèle choisi, vous bénéficiez des mêmes fonctionnalités avancées pour gérer votre activité.
                </p>
                <p className="relative mt-8 font-mono text-6xl font-black text-orange-500">10</p>
                <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-slate-400">fonctionnalités incluses</p>
                <Link
                  to="/#contact"
                  className="group relative mt-8 inline-flex items-center gap-3 bg-orange-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-orange-600"
                >
                  Demander une démo
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Grille blanche */}
              <ol className="grid grid-cols-1 gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2">
                {features.map((f, i) => (
                  <Feature key={f.title} {...f} index={i + 1} />
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ACCOMPAGNEMENT */}
        <AccompagnementSection />

        {/* À VOS CÔTÉS */}
        <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16">
          <div className="mb-10 text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-orange-700">À vos côtés</p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Bien plus qu'un terminal de caisse</h2>
          </div>
          <div className="grid grid-cols-1 divide-y divide-slate-300 border-y border-slate-300 md:grid-cols-3 md:divide-x md:divide-y-0">
            {supportItems.map((item) => (
              <SupportItem key={item.title} {...item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

/* =====================================================
   LIGNE PRODUIT (alternée gauche / droite)
===================================================== */

function ProductRow({ product, index }: { product: Product; index: number }) {
  const [active, setActive] = useState(0);
  const current = product.images[active];
  const reversed = index % 2 === 1;

  return (
    <article className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
      {/* Visuel */}
      <div className={reversed ? 'lg:order-2' : ''}>
        <div className="relative bg-white p-4 ring-1 ring-slate-300">
          <span className="absolute left-0 top-0 bg-slate-900 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-orange-300">
            Modèle 0{index + 1}
          </span>
          <div className="flex h-72 items-center justify-center bg-gradient-to-br from-slate-50 to-orange-50/60 p-8 md:h-96">
            <img
              key={current.src}
              src={current.src}
              alt={current.alt}
              loading="lazy"
              className="h-full max-h-full w-full max-w-full object-contain"
            />
          </div>
        </div>

        {product.images.length > 1 && (
          <div className="mt-3 grid grid-cols-2 gap-3">
            {product.images.map((img, i) => (
              <button
                key={img.label}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Voir : ${img.label}`}
                aria-pressed={i === active}
                className={`flex items-center gap-3 border-b-4 bg-white p-2 text-left text-xs font-bold uppercase tracking-wider transition ${
                  i === active
                    ? 'border-orange-500 text-slate-900'
                    : 'border-transparent text-slate-400 hover:border-slate-300 hover:text-slate-700'
                }`}
              >
                <img src={img.src} alt="" aria-hidden="true" className="h-10 w-14 bg-slate-50 object-contain" />
                {img.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Texte */}
      <div className={reversed ? 'lg:order-1' : ''}>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-orange-700">{product.tagline}</p>
        <h3 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">{product.name}</h3>
        <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">{product.description}</p>

        <ul className="mt-6 grid grid-cols-1 border-t border-slate-300 sm:grid-cols-2">
          {product.specs.map((spec) => (
            <li key={spec.label} className="flex items-center gap-3 border-b border-slate-300 py-3 text-sm font-semibold">
              <span className="flex h-8 w-8 items-center justify-center bg-slate-900 text-orange-300">{spec.icon}</span>
              {spec.label}
            </li>
          ))}
        </ul>

        {product.extras && (
          <div className="mt-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-slate-500">Périphériques compatibles</p>
            <ul className="divide-y divide-slate-200 border border-slate-300 bg-white">
              {product.extras.map((extra) => (
                <li key={extra.title} className="flex items-center gap-4 px-4 py-3 transition hover:bg-orange-50">
                  <span className="text-orange-700">{extra.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold leading-5">
                      {extra.title}
                      {extra.brand && (
                        <span className="ml-2 bg-orange-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase text-orange-800">
                          {extra.brand}
                        </span>
                      )}
                    </p>
                    <p className="text-xs leading-5 text-slate-500">{extra.description}</p>
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

function Feature({ icon, title, description, index }: FeatureProps) {
  return (
    <li className="group relative bg-white p-6 transition duration-300 hover:bg-orange-500 sm:p-7">
      <span className="absolute right-5 top-5 font-mono text-xs font-bold text-orange-500 transition group-hover:text-white/80">
        {String(index).padStart(2, '0')}
      </span>
      <div className="mb-4 flex h-11 w-11 items-center justify-center bg-slate-950 text-orange-400 transition group-hover:bg-white group-hover:text-orange-600">
        {icon}
      </div>
      <h3 className="text-base font-extrabold text-slate-950 transition group-hover:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 transition group-hover:text-orange-50">{description}</p>
    </li>
  );
}

function SupportItem({ icon, title, description }: SupportItemProps) {
  return (
    <article className="px-6 py-10 text-center transition hover:bg-white">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center bg-slate-900 text-orange-300">{icon}</div>
      <h3 className="text-base font-bold">{title}</h3>
      <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">{description}</p>
    </article>
  );
}

/* =====================================================
   ACCOMPAGNEMENT (image + accordéon)
===================================================== */

function AccompagnementSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative isolate overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-16">
        {/* Visuel */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="rounded-[2rem] bg-white p-2 shadow-[0_20px_60px_-15px_rgba(249,115,22,0.35)] ring-1 ring-slate-200">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <img src={tca} alt="Notre accompagnement" className="absolute inset-0 h-full w-full object-cover" />
              <div
                className="absolute right-0 top-0 h-3/5 w-1/5 bg-orange-600"
                style={{ clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 0 100%)' }}
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 left-0 h-2/5 w-1/4 bg-indigo-800"
                style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}
                aria-hidden="true"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <Headphones className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">PC MAROC</p>
                  <p className="text-xs text-slate-500">À vos côtés à chaque étape</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Texte + accordéon */}
        <div>
          <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-orange-600">
            Notre accompagnement
          </span>
          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Bien plus qu'un logiciel,{' '}
            <span className="text-orange-600">un véritable accompagnement.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
            Chez PC MAROC, nous vous accompagnons à chaque étape pour garantir une utilisation optimale de votre solution.
            Notre équipe met son expertise à votre service pour simplifier votre quotidien et développer votre activité.
          </p>

          <div className="mt-8 space-y-3">
            {accompagnement.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border bg-white transition duration-200 ${
                    isOpen ? 'border-orange-300 shadow-lg shadow-orange-100' : 'border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 p-4 text-left"
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold ${
                        isOpen ? 'bg-orange-500 text-white' : 'bg-orange-50 text-orange-600'
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span className={`flex-1 text-sm font-bold ${isOpen ? 'text-orange-600' : 'text-slate-900'}`}>
                      {item.title}
                    </span>
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                        isOpen ? 'bg-orange-500 text-white' : 'bg-slate-50 text-slate-900'
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-4 pb-5 pl-[4.5rem] pr-8 text-sm leading-7 text-slate-500">{item.text}</p>
                  )}
                </div>
              );
            })}
          </div>

          <Link
            to="/#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-slate-900 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Besoin d'accompagnement ? <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
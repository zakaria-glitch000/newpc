import React from 'react';
import { Quote, Star } from 'lucide-react';

// 1. Imports de tes photos/logos (Assure-toi que les chemins correspondent à ton arborescence de dossiers)
import logoGrandBazar from '../assets/gb.jpeg';
import logo555 from '../assets/555.jpeg';
import logoVerde from '../assets/verde.jpeg';
import logoEricMeignat from '../assets/eric.jpeg';
import logoChampion from '../assets/champion.jpeg';
import logoCleanzy from '../assets/cleanzy.jpeg';

const DARK = '#0F0F0F';
const ORANGE_MAIN = '#EA580C';
const ORANGE_GRADIENT = 'linear-gradient(90deg, #F59E0B 0%, #EA580C 50%, #C2410C 100%)';
const CHARCOAL = '#27272A';

const reviews = [
  {
    id: 1,
    name: 'Eric Meignat',
    role: 'Fondateur Eric Meignat',
    comment:'Avec plusieurs magasins à travers le Maroc, nous avions besoin d’une solution fiable pour gérer efficacement notre activité. PC MAROC a parfaitement répondu à nos attentes en nous offrant une gestion simplifiée et un meilleur suivi de nos points de vente. Nous sommes pleinement satisfaits de cette collaboration et de la qualité de l’accompagnement.',
    rating: 5,
    photo: logoEricMeignat,
    accent: 'gold',
  },
  {
    id: 2,
    name: 'M. Rachid',
    role: 'FONDATEUR CLUB 555',
    comment: 'Depuis plus de 15 ans, PC MAROC accompagne le CLUB 555 dans la gestion de son activité. Une collaboration durable, fondée sur la confiance, la fiabilité de nos solutions et un accompagnement constant au fil des années.',
    rating: 5,
    photo: logo555,
    accent: 'dark',
  },
  {
    id: 3,
    name: 'YOUNESS BIUAL',
    role: 'DIRECTEUR RESTAURANT VERDE',
    comment: 'Connaissant déjà cette solution d’encaissement en France, nous avons naturellement choisi PC MAROC pour équiper notre nouveau restaurant. Nous retrouvons un système fiable, performant et parfaitement adapté à nos besoins, avec l’avantage d’un accompagnement local et d’une équipe disponible et réactive.',
    rating: 5,
    photo: logoVerde,
    accent: 'gold',
  },
  {
    id: 4,
    name: 'M . MOUAD',
    role: 'DIRECTEUR CHAMPION EXPRESS',
    comment:'En pleine expansion, nous avions besoin d’une solution capable d’accompagner notre croissance. Avec INNOSHOP, proposé par PC MAROC, nous bénéficions d’une gestion efficace et d’un suivi centralisé de nos différents magasins. Une solution fiable et évolutive qui nous donne confiance pour poursuivre notre développement.'  ,
    rating: 5,
    photo: logoChampion,
    accent: 'dark',
  },
  {
    id: 5,
    name: 'M . MICHEAL',
    role: 'Fondateur RESTAURNT GRAND BAZRD',
    comment: 'Depuis l’installation de la solution PC MAROC (caisse, KDS et reporting), notre service est plus rapide, la coordination avec la cuisine plus efficace et nous avons une meilleure visibilité sur notre activité.',
    rating: 5,
    photo: logoGrandBazar,
    accent: 'gold',
  },
  {
    id: 6,
    name: 'Mohamed Khachani',
    role: 'Franchise Fondateur CLEANZY PRESSING',
    comment: 'Depuis plusieurs années, nous faisons confiance à PC MAROC pour équiper nos pressings à travers le Maroc. Une collaboration solide qui nous permet de développer notre réseau en toute sérénité, avec des solutions fiabilité, adaptées à notre métier et un accompagnement de qualité. PC MAROC est devenu un véritable partenaire de notre croissance.',
    rating: 5,
    photo: logoCleanzy,
    accent: 'dark',
  },
];

const ACCENTS = {
  gold: {
    border: 'linear-gradient(135deg, #FBBF24 0%, #EA580C 50%, #C2410C 100%)',
    fill: 'linear-gradient(160deg, #FFFFFF 45%, #FFF7ED 100%)',
    color: ORANGE_MAIN,
  },
  dark: {
    border: 'linear-gradient(135deg, #3F3F46 0%, #18181B 50%, #09090B 100%)',
    fill: 'linear-gradient(160deg, #FFFFFF 45%, #F4F4F5 100%)',
    color: DARK,
  },
};

function getInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

function Stars({ value = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`Note : ${value} sur 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className="h-4 w-4"
          style={{ color: ORANGE_MAIN }}
          fill={n <= value ? ORANGE_MAIN : 'none'}
          strokeWidth={1.8}
        />
      ))}
    </div>
  );
}

function Avatar({ photo, name, color }) {
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 bg-white p-1 text-lg font-extrabold shadow-sm"
      style={{ borderColor: color, color: DARK }}
    >
      {photo ? (
        <img src={photo} alt={name} className="h-full w-full object-contain rounded-full" loading="lazy" />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </div>
  );
}

function ReviewCard({ review }) {
  const acc = ACCENTS[review.accent] || ACCENTS.gold;
  return (
    <article
      className="h-full transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: acc.border,
        padding: '2px',
        borderRadius: '36px 36px 90px 36px',
        boxShadow: '0 10px 28px -12px rgba(15,15,15,0.25)',
      }}
    >
      <div
        className="relative flex h-full flex-col p-6 sm:p-7"
        style={{ background: acc.fill, borderRadius: '34px 34px 88px 34px' }}
      >
        <Quote
          className="absolute right-6 top-5 h-10 w-10 opacity-20"
          style={{ color: acc.color }}
          strokeWidth={2}
        />

        <Stars value={review.rating} />

        <p className="mt-4 flex-1 text-sm leading-relaxed sm:text-[15px]" style={{ color: CHARCOAL }}>
          « {review.comment} »
        </p>

        <div className="mt-6 flex items-center gap-4 border-t border-zinc-200 pt-5">
          <Avatar photo={review.photo} name={review.name} color={acc.color} />
          <div>
            <h3 className="text-base font-extrabold" style={{ color: DARK }}>
              {review.name}
            </h3>
            <p className="text-xs text-zinc-500">{review.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ReferencesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-10 pt-12 sm:px-6 lg:pb-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,#FAFAFA_0%,#FFFFFF_70%)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* EN-TÊTE */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-5">
            <span className="h-[3px] w-14 rounded-full" style={{ background: ORANGE_GRADIENT }} />
            <span className="text-sm font-extrabold uppercase tracking-[0.12em]" style={{ color: DARK }}>
              Nos références
            </span>
            <span className="h-[3px] w-14 rounded-full" style={{ background: ORANGE_GRADIENT }} />
          </div>

          <h2
            className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: DARK }}
          >
            Ils nous font confiance
            <span
              className="mt-1 block"
              style={{
                backgroundImage: ORANGE_GRADIENT,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              et en parlent mieux que nous
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: CHARCOAL }}>
            Découvrez les avis de nos clients et leur expérience au quotidien avec notre solution.
          </p>
        </div>

        {/* GRILLE D'AVIS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
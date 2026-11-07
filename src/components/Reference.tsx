import React from 'react';
import { Quote, Star } from 'lucide-react';

const NAVY = '#0B1F4B';
const GOLD = '#F5A800';
const TEAL = '#1AA7B8';

/**
 * ⚠️ A REMPLIR avec vos VRAIS avis clients.
 * Les entrées ci-dessous sont des modèles (placeholders), pas de vrais témoignages.
 *
 * Champs :
 *  - name      : nom du client
 *  - role      : fonction / activité (ex: "Gérante, Boutique X")
 *  - comment   : le commentaire réel du client
 *  - rating    : note de 1 à 5
 *  - photo     : URL de la photo (ex: "/clients/client1.jpg"). Laissez vide pour afficher les initiales.
 *  - accent    : 'gold' ou 'teal' (couleur de la bordure)
 *
 * Pensez à avoir l'accord du client avant de publier son nom et sa photo.
 */
const reviews = [
  {
    id: 1,
    name: 'Nom du client',
    role: 'Fonction, Entreprise',
    comment: 'commantaire',
    rating: 5,
    photo: '',
    accent: 'gold',
  },
  {
    id: 2,
    name: 'Nom du client',
    role: 'Fonction, Entreprise',
    comment: 'commantaire',
    rating: 5,
    photo: '',
    accent: 'teal',
  },
  {
    id: 3,
    name: 'Nom du client',
    role: 'Fonction, Entreprise',
    comment: 'commantaire',
    rating: 5,
    photo: '',
    accent: 'gold',
  },
  {
    id: 4,
    name: 'Nom du client',
    role: 'Fonction, Entreprise',
    comment: 'commantaire',
    rating: 5,
    photo: '',
    accent: 'teal',
  },
  {
    id: 5,
    name: 'Nom du client',
    role: 'Fonction, Entreprise',
    comment: 'commantaire',
    rating: 5,
    photo: '',
    accent: 'gold',
  },
  {
    id: 6,
    name: 'Nom du client',
    role: 'Fonction, Entreprise',
    comment: 'commantaire',
    rating: 5,
    photo: '',
    accent: 'teal',
  },
];

const ACCENTS = {
  gold: {
    border: 'linear-gradient(135deg, #F5A800 0%, #FDD97A 50%, #F5A800 100%)',
    fill: 'linear-gradient(160deg, #FFFFFF 45%, #FFF3D6 100%)',
    color: GOLD,
  },
  teal: {
    border: 'linear-gradient(135deg, #1AA7B8 0%, #8ADCE5 50%, #1AA7B8 100%)',
    fill: 'linear-gradient(160deg, #FFFFFF 45%, #E3F5F8 100%)',
    color: TEAL,
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
          style={{ color: GOLD }}
          fill={n <= value ? GOLD : 'none'}
          strokeWidth={1.8}
        />
      ))}
    </div>
  );
}

function Avatar({ photo, name, color }) {
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 bg-white text-lg font-extrabold shadow-sm"
      style={{ borderColor: color, color: NAVY }}
    >
      {photo ? (
        <img src={photo} alt={name} className="h-full w-full object-cover" loading="lazy" />
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
        boxShadow: '0 10px 28px -12px rgba(11,31,75,0.3)',
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

        <p className="mt-4 flex-1 text-sm leading-relaxed sm:text-[15px]" style={{ color: '#1F2D52' }}>
          « {review.comment} »
        </p>

        <div className="mt-6 flex items-center gap-4 border-t border-slate-200 pt-5">
          <Avatar photo={review.photo} name={review.name} color={acc.color} />
          <div>
            <h3 className="text-base font-extrabold" style={{ color: NAVY }}>
              {review.name}
            </h3>
            <p className="text-xs text-slate-500">{review.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ReferencesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-40 pt-12 sm:px-6 lg:pt-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,#F4F8FC_0%,#FFFFFF_70%)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* EN-TÊTE */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-5">
            <span className="h-[3px] w-14 rounded-full" style={{ background: GOLD }} />
            <span className="text-sm font-extrabold uppercase tracking-[0.12em]" style={{ color: NAVY }}>
              Nos références
            </span>
            <span className="h-[3px] w-14 rounded-full" style={{ background: GOLD }} />
          </div>

          <h2
            className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: NAVY }}
          >
            Ils nous font confiance
            <span className="mt-1 block" style={{ color: GOLD }}>
              et en parlent mieux que nous
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: '#1F2D52' }}>
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

      {/* VAGUES EN BAS */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 h-32 w-full"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="refWaveNavy" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#0B1F4B" />
            <stop offset="60%" stopColor="#0B3A6B" />
            <stop offset="100%" stopColor="#1AA7B8" />
          </linearGradient>
          <linearGradient id="refWaveGold" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#F5A800" />
            <stop offset="100%" stopColor="#FDD97A" />
          </linearGradient>
        </defs>
        <path d="M0,60 C300,110 700,60 1100,100 C1250,112 1360,105 1440,95 L1440,140 L0,140 Z" fill="url(#refWaveGold)" />
        <path d="M0,85 C320,125 720,80 1100,112 C1260,124 1370,118 1440,110 L1440,140 L0,140 Z" fill="#FFFFFF" />
        <path d="M0,102 C340,134 740,100 1100,124 C1260,132 1370,128 1440,124 L1440,140 L0,140 Z" fill="url(#refWaveNavy)" />
      </svg>
    </section>
  );
}
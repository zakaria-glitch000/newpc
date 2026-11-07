import React from 'react';
import { Quote, Star } from 'lucide-react';

const NAVY = '#0B1F4B';
const GOLD = '#EA580C';
const ORANGE_GRADIENT = 'linear-gradient(90deg, #F59E0B 0%, #EA580C 50%, #C2410C 100%)';
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
    border: 'linear-gradient(135deg, #FBBF24 0%, #F97316 50%, #FBBF24 100%)',
    fill: 'linear-gradient(160deg, #FFFFFF 45%, #FFF7ED 100%)',
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
    <section className="relative overflow-hidden bg-white px-4 pb-10 pt-12 sm:px-6 lg:pb-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,#F4F8FC_0%,#FFFFFF_70%)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* EN-TÊTE */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-5">
            <span className="h-[3px] w-14 rounded-full" style={{ background: ORANGE_GRADIENT }} />
            <span className="text-sm font-extrabold uppercase tracking-[0.12em]" style={{ color: NAVY }}>
              Nos références
            </span>
            <span className="h-[3px] w-14 rounded-full" style={{ background: ORANGE_GRADIENT }} />
          </div>

          <h2
            className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: NAVY }}
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

    </section>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';

import chrImg from '../assets/caisse.jpg';
import retailImg from '../assets/retail.jpg';
import pressingImg from '../assets/0.jpg';
import spaImg from '../assets/0.jpg';
import devImg from '../assets/dev.jpg';

const expertises = [
  {
    title: 'CHR',
    description: 'Restaurants, cafés, boulangeries, hôtels...',
    image: chrImg,
    linkUrl: '/solutions-restauration',
    iconSvg: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Commerce & Retail',
    description: 'Magasins, supermarchés, boutiques, épiceries fines...',
    image: retailImg,
    linkUrl: '/Shop',
    iconSvg: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Pressing',
    description: 'Gestion des dépôts, suivi des commandes et encaissement.',
    image: pressingImg,
    linkUrl: '/pressing',
    iconSvg: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    title: 'Salon de Beauté & Spa',
    description: 'Encaissement, rendez-vous, forfaits et fidélité.',
    image: spaImg,
    linkUrl: '/salon-spa',
    iconSvg: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Développement sur mesure',
    description: 'Des applications métier adaptées à vos besoins.',
    image: devImg,
    linkUrl: '/Devmesure',
    iconSvg: (
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

export default function NosExpertises() {
  return (
    <section
      id="NosExpertises"
      className="scroll-mt-24 bg-white px-4 py-12 sm:px-6 lg:py-16"
    >
      {/* EN-TÊTE */}
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-[2px] w-12 bg-orange-500" />
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Nos solutions par secteur
          </h2>
          <span className="h-[2px] w-12 bg-orange-500" />
        </div>
      </div>

      {/* GRID DES CARTES */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {expertises.map((item) => (
          <Link
            key={item.title}
            to={item.linkUrl}
            aria-label={`Découvrir ${item.title}`}
            className="group block h-full rounded-2xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
          >
            <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
              
              {/* IMAGE */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* CONTENU */}
              <div className="relative flex flex-1 flex-col px-5 pb-6 pt-8">
                
                {/* ICÔNE CIRCULAIRE FLOOTTANTE */}
                <div className="absolute -top-7 left-5 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-orange-600 shadow-md transition-transform duration-300 group-hover:scale-105">
                  {item.iconSvg}
                </div>

                <h3 className="mt-2 text-lg font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-orange-600">
                  {item.title}
                </h3>

                <p className="mt-2 mb-6 flex-1 text-xs leading-relaxed text-gray-500">
                  {item.description}
                </p>

                {/* BOUTON FLÈCHE ROND EN BAS */}
                <div className="mt-auto flex justify-end">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-200 text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600">
                    <span
                      className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      ›
                    </span>
                  </span>
                </div>

              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
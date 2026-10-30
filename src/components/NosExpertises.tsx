import React from 'react';
import { Link } from 'react-router-dom';

import caisseImg from '../assets/caisse.jpg';
import logicielImg from '../assets/logiciel.jpg';
import devImg from '../assets/dev.jpg';

const expertises = [
  {
    title: 'Solutions Restauration & CHR',
    description:
      'Des solutions complètes pour piloter votre établissement : caisses CSI, bornes de commande, écrans cuisine KDS, ERP et reporting.',
    image: caisseImg,
    iconBg: 'bg-orange-600',
    linkUrl: '/solutions-restauration',
    iconSvg: (
      <svg
        className="h-5 w-5 text-white"
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
    title: 'Solutions Commerce & Retail',
    description:
      "Avec INNOSHOP, accompagnez les commerces et points de vente dans l'encaissement, la gestion des stocks et le suivi de leur activité.",
    image: logicielImg,
    iconBg: 'bg-amber-600',
    linkUrl: '/Shop',
    iconSvg: (
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: 'Développement de Logiciels sur Mesure',
    description:
      'Conception et réalisation d’applications métier personnalisées, adaptées aux besoins et aux processus de chaque entreprise.',
    image: devImg,
    iconBg: 'bg-orange-700',
    linkUrl: '/Devmesure',
    iconSvg: (
      <svg
        className="h-5 w-5 text-white"
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
      className="scroll-mt-24 bg-gray-50 px-4 py-8 sm:px-6 lg:py-12"
    >
      {/* EN-TÊTE */}
      <div className="mx-auto mb-8 max-w-7xl text-center">
        <span className="inline-flex rounded-full border border-orange-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 shadow-sm">
          Nos Solutions
        </span>

        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Une offre complète pour{' '}
          <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            vos projets
          </span>
        </h2>

        <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-amber-400 to-orange-600" />

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
          Des solutions technologiques adaptées à votre métier
          pour améliorer votre productivité et accompagner
          votre développement.
        </p>
      </div>

      {/* CARTES CLIQUABLES */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {expertises.map((item) => (
          <Link
            key={item.title}
            to={item.linkUrl}
            aria-label={`Découvrir ${item.title}`}
            className="group block h-full rounded-2xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
          >
            <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-200/60">
              {/* LIGNE ORANGE ANIMÉE */}
              <div
                className="pointer-events-none absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-400 to-orange-600 transition-transform duration-300 group-hover:scale-y-100"
                aria-hidden="true"
              />

              {/* IMAGE */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-40"
                  aria-hidden="true"
                />
              </div>

              {/* CONTENU */}
              <div className="relative flex flex-1 flex-col px-6 pb-5 pt-6">
                {/* ICÔNE */}
                <div
                  className={`absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white ${item.iconBg} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                >
                  {item.iconSvg}
                </div>

                <h3 className="mb-2 text-xl font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-orange-700">
                  {item.title}
                </h3>

                <p className="mb-4 flex-1 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>

                {/* BOUTON VISUEL */}
                <div className="mt-auto border-t border-slate-100 pt-3">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition-colors duration-300 group-hover:text-orange-800">
                    En savoir plus
                    <span
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
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
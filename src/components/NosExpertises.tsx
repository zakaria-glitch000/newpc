import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import chrImg from '../assets/caisse.jpg';
import retailImg from '../assets/retail.jpg';
import pressingImg from '../assets/gest.jpeg';
import spaImg from '../assets/0.jpg';
import devImg from '../assets/dev.jpg';

const expertisesData = [
  {
    id: 'restauration',
    title: 'Restauration',
    subtitle: 'Une solution complète pour gérer vos commandes, votre salle et votre cuisine en toute sérénité.',
    features: [
      'Encaissement rapide et intuitif',
      'Gestion des tables et de la salle',
      'Suivi des stocks et recettes',
      'Reporting et suivi des ventes'
    ],
    linkUrl: '/solutions-restauration',
    bgImage: chrImg,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 'commerce',
    title: 'Commerce',
    subtitle: 'Une solution complète pour gérer vos ventes, vos stocks et votre activité en toute simplicité.',
    features: [
      'Encaissement rapide et intuitif',
      'Gestion des stocks en temps réel',
      'Suivi des ventes et performances',
      'Multi-rayons et multi-magasins'
    ],
    linkUrl: '/Shop',
    bgImage: retailImg,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 'pressing',
    title: 'Pressing',
    subtitle: 'Gérez vos dépôts, le suivi du traitement et les encaissements sans perte de temps.',
    features: [
      'Impression d’étiquettes et tickets',
      'Suivi de l’état d’avancement',
      'Rendu client et encaissement rapide',
      'Gestion de la fidélité client'
    ],
    linkUrl: '/pressing',
    bgImage: pressingImg,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    id: 'spa',
    title: 'Salon de beauté',
    subtitle: 'Une plateforme fluide pour les rendez-vous, le planning de votre équipe et les forfaits.',
    features: [
      'Prise de rdv & planning intelligent',
      'Gestion des forfaits et abonnements',
      'Encaissement & fichier client',
      'Notifications SMS / Rappels'
    ],
    linkUrl: '/salon-spa',
    bgImage: spaImg,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    id: 'dev',
    title: 'Développement sur mesure',
    subtitle: 'Des logiciels métiers façonnés exactement selon vos processus et vos besoins.',
    features: [
      'Conception d’applications sur mesure',
      'Intégration API & Systèmes existants',
      'Interface intuitive et scalable',
      'Accompagnement et support dédié'
    ],
    linkUrl: '/Devmesure',
    bgImage: devImg,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
];

export default function NosExpertises() {
  const [activeTab, setActiveTab] = useState('commerce');
  const activeData = expertisesData.find((item) => item.id === activeTab) || expertisesData[1];

  return (
    <section id="NosExpertises" className="scroll-mt-24 bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* EN-TÊTE */}
      <div className="mx-auto max-w-4xl text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="h-[2px] w-10 bg-orange-500" />
          <span className="text-sm font-bold tracking-wider text-slate-900">
            PC MAROC <span className="text-orange-500 font-semibold text-xs">Hospitality & Retail</span>
          </span>
          <span className="h-[2px] w-10 bg-orange-500" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Des solutions adaptées à chaque métier
        </h2>
        
        <p className="mt-3 text-base text-slate-600">
          Un seul partenaire pour encaisser, gérer et piloter votre activité, quel que soit votre secteur.
        </p>
      </div>

      {/* TABS DE SÉLECTION */}
      <div className="mx-auto max-w-5xl mb-10 overflow-x-auto pb-2">
        <div className="flex items-center justify-start sm:justify-center gap-3 min-w-max">
          {expertisesData.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 shadow-sm'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-orange-500'}>
                  {item.icon}
                </span>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* BANNIÈRE SANS BLUR - IMAGE NETTE */}
      <div className="mx-auto max-w-6xl relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 min-h-[480px] flex items-center">
        
        {/* BACKGROUND IMAGE NETTE (ZERO BLUR) */}
        <div className="absolute inset-0 z-0">
          <img
            src={activeData.bgImage}
            alt={activeData.title}
            className="w-full h-full object-cover object-right transition-all duration-500"
          />
        </div>

        {/* GRADIENT BLANC F L-ISER 7ADDO 7AD L-TEXTE (SANS BLUR) */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[55%] z-0 bg-gradient-to-r from-white via-white/95 to-transparent" />

        {/* CONTENU AU DESSUS */}
        <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-xl">
          
          {/* LOGO MINI + TITRE */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
              <span className="flex h-2 w-2 rounded-full bg-orange-500" />
              <span>PC MAROC</span>
              <span className="text-orange-500 font-semibold lowercase text-[11px]">Hospitality & Retail</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-orange-500">
                {activeData.icon}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {activeData.title}
              </h3>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-base text-slate-600 font-normal leading-relaxed mb-8">
            {activeData.subtitle}
          </p>

          {/* PUCE COCHEMENT ORANGE */}
          <ul className="space-y-3.5 mb-10">
            {activeData.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white text-xs font-bold shrink-0 shadow-sm shadow-orange-500/40">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* BOUTON CTA */}
          <Link
            to={activeData.linkUrl}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-orange-500 text-white font-semibold text-sm shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-500/50 transition-all group"
          >
            <span>Découvrir la solution</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
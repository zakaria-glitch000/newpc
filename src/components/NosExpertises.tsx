import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

import chrImg from '../assets/acsi.jpeg';
import retailImg from '../assets/ashop.jpeg';
import pressingImg from '../assets/aclean.jpeg';
import spaImg from '../assets/abelle.jpeg';
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

// Halo orange discret qui pulse sur les onglets non sélectionnés
const tabPulse = {
  boxShadow: [
    '0 0 0 0 rgba(249,115,22,0)',
    '0 0 0 6px rgba(249,115,22,0.18)',
    '0 0 0 0 rgba(249,115,22,0)'
  ]
};

// Durée (ms) avant de passer automatiquement au métier suivant
const AUTO_DELAY = 5000;

// Ordre d'affichage des onglets ET de la rotation automatique
const ROTATION_ORDER = ['commerce', 'restauration', 'pressing', 'spa', 'dev'];
const orderedExpertises = ROTATION_ORDER.map((id) => expertisesData.find((item) => item.id === id));

export default function NosExpertises() {
  const [activeTab, setActiveTab] = useState(ROTATION_ORDER[0]);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const tabsContainerRef = useRef(null);
  const tabRefs = useRef({});

  const activeData = orderedExpertises.find((item) => item.id === activeTab) || orderedExpertises[0];

  // Rotation automatique : commerce → restauration → pressing → spa → dev → commerce...
  // Le timer redémarre à chaque changement d'onglet (clic manuel inclus)
  // et s'arrête quand la souris / le focus est sur la section.
  useEffect(() => {
    if (reduceMotion || isPaused) return undefined;

    const timer = setTimeout(() => {
      setActiveTab((current) => {
        const currentIndex = ROTATION_ORDER.indexOf(current);
        return ROTATION_ORDER[(currentIndex + 1) % ROTATION_ORDER.length];
      });
    }, AUTO_DELAY);

    return () => clearTimeout(timer);
  }, [activeTab, isPaused, reduceMotion]);

  // Garde l'onglet actif au centre de la barre scrollable (mobile),
  // sans faire défiler la page verticalement
  useEffect(() => {
    const container = tabsContainerRef.current;
    const tab = tabRefs.current[activeTab];
    if (!container || !tab) return;

    container.scrollTo({
      left: tab.offsetLeft - container.clientWidth / 2 + tab.clientWidth / 2,
      behavior: 'smooth'
    });
  }, [activeTab]);

  return (
    <section
      id="NosExpertises"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="scroll-mt-24 bg-slate-50 py-16 px-4 sm:px-6 lg:px-8"
    >
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
        <p className="mt-2 text-sm font-semibold text-orange-500">
          Choisissez votre métier ci-dessous pour découvrir la solution.
        </p>
      </div>

      {/* TABS DE SÉLECTION */}
      <div className="relative mx-auto max-w-5xl mb-10">
        <div
          ref={tabsContainerRef}
          role="tablist"
          aria-label="Choisir un métier"
          className="overflow-x-auto px-1 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="relative flex items-center justify-start sm:justify-center gap-3 min-w-max">
            {orderedExpertises.map((item, index) => {
              const isActive = activeTab === item.id;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  ref={(el) => {
                    tabRefs.current[item.id] = el;
                  }}
                  onClick={() => setActiveTab(item.id)}
                  animate={reduceMotion || isActive ? undefined : tabPulse}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.35
                  }}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  className={`relative flex cursor-pointer items-center gap-2.5 overflow-hidden px-6 py-3 rounded-full font-semibold text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
                    isActive
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105'
                      : 'bg-white text-slate-700 hover:bg-orange-50 hover:text-orange-600 shadow-sm'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-orange-500'}>{item.icon}</span>
                  <span>{item.title}</span>

                  {/* Barre de progression : montre le temps avant le prochain métier */}
                  {isActive && !reduceMotion && (
                    <motion.span
                      key={`progress-${activeTab}-${isPaused}`}
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[3px] bg-white/70"
                      initial={{ width: '0%' }}
                      animate={{ width: isPaused ? '0%' : '100%' }}
                      transition={{ duration: isPaused ? 0 : AUTO_DELAY / 1000, ease: 'linear' }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Dégradé à droite (mobile) : montre qu'on peut faire défiler les onglets */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-slate-50 to-transparent sm:hidden" />
      </div>

      {/* BANNIÈRE */}
      <div className="mx-auto max-w-6xl relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 min-h-[480px] flex items-center">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <motion.img
            key={activeData.id}
            src={activeData.bgImage}
            alt={activeData.title}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* OVERLAY DÉGRADÉ BLANC À GAUCHE */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-10/12 lg:w-7/12 z-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

        {/* CONTENU */}
        <motion.div
          key={`content-${activeData.id}`}
          initial={reduceMotion ? false : { opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-xl drop-shadow-sm"
        >
          {/* LOGO MINI + TITRE */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
              <span className="flex h-2 w-2 rounded-full bg-orange-500" />
              <span>PC MAROC</span>
              <span className="text-orange-500 font-semibold lowercase text-[11px]">Hospitality & Retail</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-orange-500">{activeData.icon}</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {activeData.title}
              </h3>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-base text-slate-700 font-medium leading-relaxed mb-8">
            {activeData.subtitle}
          </p>

          {/* LISTE DES POINTS */}
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
            className="group inline-flex cursor-pointer items-center gap-3 px-7 py-3.5 rounded-full bg-orange-500 text-white font-semibold text-sm shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-500/50 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            <span>Découvrir la solution</span>
            <motion.span
              aria-hidden="true"
              animate={reduceMotion ? undefined : { x: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';

import stockImage from '@/assets/stock.jpeg';
import eventImage from '@/assets/event.jpeg';
import reportImage from '@/assets/report.jpeg';
import gmsImage from '@/assets/GMS.jpeg';
import devImage from '@/assets/dev.jpg';
import { Link } from "react-router-dom";
import {
  Cpu,
  Smartphone,
  Database,
  BarChart3,
  Layers,
  Headphones,
  Search,
  Lightbulb,
  Code2,
  CheckCircle2,
  Rocket,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Users,
  PhoneCall,
  Mail,
  Calendar,
  ArrowRight,
  PieChart,
  ShoppingBag,
} from 'lucide-react';

export default function DeveloppementSurMesure() {
  const [activeSlide, setActiveSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Gestion des stocks avancée',
      subtitle: 'Suivi des stocks, achats et réapprovisionnements.',
      type: 'Entrepôt & Logistique',
      stats: '99.8% Précision',
      image: stockImage,
    },
    {
      id: 2,
      title: 'Gestion événementielle',
      subtitle: 'Pilotage centralisé pour plusieurs points de vente.',
      type: 'Retail & Franchise',
      stats: '12+ Magasins sync',
      image: eventImage,
    },
    {
      id: 3,
      title: 'Reporting',
      subtitle: 'CRM personnalisé avec historique et fidélité.',
      type: 'CRM & Marketing',
      stats: '+45% Rétention',
      image: reportImage,
    },
    {
      id: 4,
      title: 'GMS',
      subtitle: 'Tableaux de bord adaptés à vos indicateurs métiers.',
      type: 'Business Intelligence',
      stats: 'Temps réel',
      image: gmsImage,
    },
  ];

  const services = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: 'Logiciels métiers sur mesure',
      desc: 'Des applications adaptées à vos processus et à votre organisation.',
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Applications web et mobiles',
      desc: 'Des outils accessibles sur ordinateur, tablette et smartphone.',
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'ERP et gestion personnalisée',
      desc: 'Centralisez vos opérations, votre comptabilité et vos données dans une solution unique.',
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Tableaux de bord et reporting',
      desc: 'Des indicateurs en temps réel pour piloter votre activité en toute simplicité.',
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: 'Intégration de solutions',
      desc: 'Connexion avec vos logiciels existants : comptabilité, e-commerce, monétique, etc.',
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: 'Accompagnement technique',
      desc: 'De l’analyse de vos besoins à la mise en service, avec un support durable.',
    },
  ];

  const steps = [
    {
      num: '01',
      icon: <Search className="h-5 w-5" />,
      title: 'Analyse de vos besoins',
      desc: 'Compréhension de votre activité et de vos objectifs.',
    },
    {
      num: '02',
      icon: <Lightbulb className="h-5 w-5" />,
      title: 'Conception de la solution',
      desc: 'Étude fonctionnelle et proposition sur mesure.',
    },
    {
      num: '03',
      icon: <Code2 className="h-5 w-5" />,
      title: 'Développement',
      desc: 'Création et intégration des fonctionnalités.',
    },
    {
      num: '04',
      icon: <CheckCircle2 className="h-5 w-5" />,
      title: 'Tests et validation',
      desc: 'Vérification et optimisation avec vos équipes.',
    },
    {
      num: '05',
      icon: <Rocket className="h-5 w-5" />,
      title: 'Mise en service et suivi',
      desc: 'Déploiement et support continu.',
    },
  ];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % projects.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <main className="w-full min-h-screen overflow-hidden bg-white font-sans text-slate-800 antialiased selection:bg-orange-600 selection:text-white">

      {/* =====================================================
          HERO — DESIGN CLAIR BLANC / GRIS
      ===================================================== */}
      <section
        id="accueil"
        className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-orange-50 pt-24 sm:min-h-[740px]"
      >
        {/* Image de fond — visible et nette */}
        <div className="absolute inset-0 -z-30 overflow-hidden">
          <img
            src={devImage}
            alt="Développement de logiciels sur mesure"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Voile gris clair semi-transparent */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-white/95 via-white/80 to-white/35" />

        {/* Dégradé léger en bas */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-100/70 via-transparent to-white/10" />

        {/* Lumières décoratives */}
        <div className="pointer-events-none absolute -left-32 top-32 -z-10 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-amber-200/20 blur-3xl" />

        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-orange-100 bg-white/90 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-orange-700 shadow-sm backdrop-blur-md sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              Développement sur mesure
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.12] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Vos besoins sont uniques.
              <span className="mt-3 block bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Nos solutions aussi.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              Nous concevons et développons des solutions logicielles sur
              mesure pour répondre précisément à vos besoins de gestion,
              d’encaissement et de pilotage. Des outils performants,
              intuitifs et adaptés à votre activité.
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'Des logiciels adaptés à votre métier',
                'Des interfaces modernes et intuitives',
                'Un accompagnement de la conception au déploiement',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-700"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={goToContact}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl"
              >
                Parler de votre projet
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={goToContact}
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
              >
                Demander une démo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 pt-6 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-orange-600" />
                Solutions personnalisées
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange-600" />
                Accompagnement dédié
              </span>
            </div>
          </div>
        </div>

        {/* Indicateur décoratif */}
        <div className="absolute bottom-7 right-7 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-lg backdrop-blur-lg md:flex">
          <Code2 className="h-5 w-5 text-orange-600" />
          <span>Innovation · Performance · Sur mesure</span>
        </div>
      </section>

      {/* =====================================================
          NOS SERVICES
      ===================================================== */}
      <section id="solutions" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-700">
              Nos expertises
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Nos services de développement
            </h2>

            <div className="mx-auto my-4 h-1 w-14 rounded-full bg-orange-500" />

            <p className="leading-7 text-slate-600">
              Des solutions personnalisées pour optimiser la gestion de
              votre activité et accélérer votre transformation numérique.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((srv) => (
              <div
                key={srv.title}
                className="group relative flex flex-col items-start overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/5 sm:p-8"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-orange-50 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">
                  {srv.icon}
                </div>

                <h3 className="relative mb-3 text-lg font-bold text-slate-900 transition-colors group-hover:text-orange-700">
                  {srv.title}
                </h3>

                <p className="relative text-sm leading-7 text-slate-600">
                  {srv.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-orange-600">
                  Solution personnalisée
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NOTRE MÉTHODE DE DÉVELOPPEMENT
      ===================================================== */}
      <section
        id="developpement"
        className="scroll-mt-24 border-y border-slate-100 bg-slate-50/80 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-orange-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-700">
              Une démarche structurée
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Notre méthode de développement
            </h2>

            <div className="mx-auto my-4 h-1 w-14 rounded-full bg-orange-500" />

            <p className="leading-7 text-slate-600">
              <span className="font-semibold text-orange-600">
                Un accompagnement complet
              </span>
              , de l'idée à la mise en production.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-12 right-12 top-12 -z-0 hidden h-0.5 bg-orange-200 lg:block" />

            <div className="relative z-10 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((st) => (
                <div
                  key={st.num}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-orange-200 bg-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-orange-600 group-hover:bg-orange-600">
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-amber-500 text-[10px] font-bold text-white">
                      {st.num}
                    </span>

                    <div className="text-orange-600 transition-colors group-hover:text-white">
                      {st.icon}
                    </div>
                  </div>

                  <h3 className="mb-3 text-base font-bold text-slate-900 transition-colors group-hover:text-orange-700">
                    {st.title}
                  </h3>

                  <p className="max-w-[210px] text-sm leading-6 text-slate-500">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXEMPLES DE SOLUTIONS
      ===================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-700">
              Nos réalisations
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Quelques exemples de solutions développées
            </h2>

            <div className="mx-auto my-4 h-1 w-14 rounded-full bg-orange-500" />

            <p className="leading-7 text-slate-600">
              Des projets concrets pour des métiers variés.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((proj, idx) => (
              <div
                key={proj.id}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  idx === activeSlide
                    ? 'ring-2 ring-orange-600 ring-offset-2'
                    : ''
                }`}
              >
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md">
                    {proj.type}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="mb-2 text-base font-bold text-slate-900 transition-colors group-hover:text-orange-700">
                      {proj.title}
                    </h3>

                    <p className="mb-5 text-sm leading-6 text-slate-500">
                      {proj.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold text-orange-600">
                    <span>{proj.stats}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation du carrousel */}
          <div className="mt-9 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={handlePrevSlide}
              aria-label="Projet précédent"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {projects.map((project, i) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Afficher le projet ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeSlide
                      ? 'w-8 bg-orange-600'
                      : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNextSlide}
              aria-label="Projet suivant"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          POURQUOI CHOISIR ORALI
      ===================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-orange-50/70 py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-700">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Pourquoi nous choisir ?
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Pourquoi choisir{' '}
                <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  ORALI
                </span>
                {' '}?
              </h2>

              <div className="my-5 h-1 w-14 rounded-full bg-orange-500" />

              <p className="max-w-xl text-base leading-8 text-slate-600">
                Nous mettons la technologie au service de votre entreprise.
                Nos solutions sont pensées pour simplifier votre quotidien,
                améliorer votre productivité et accompagner durablement
                votre développement.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: <ShieldCheck className="h-6 w-6" />,
                    title: 'Une solution 100% personnalisée',
                    desc: 'Des fonctionnalités adaptées à vos besoins, à votre métier et à vos processus de travail.',
                  },
                  {
                    icon: <TrendingUp className="h-6 w-6" />,
                    title: 'Un meilleur pilotage de votre activité',
                    desc: 'Visualisez vos indicateurs, suivez vos performances et prenez des décisions plus éclairées.',
                  },
                  {
                    icon: <Sparkles className="h-6 w-6" />,
                    title: 'Une interface simple et intuitive',
                    desc: 'Des outils modernes et faciles à utiliser pour simplifier le travail quotidien de vos équipes.',
                  },
                  {
                    icon: <Users className="h-6 w-6" />,
                    title: 'Un accompagnement durable',
                    desc: 'Nous vous accompagnons dans le déploiement, la maintenance et l’évolution de vos solutions.',
                  },
                ].map((item) => (
                  <div key={item.title} className="group flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-100 bg-orange-50 text-orange-600 transition-all duration-300 group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-orange-700">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={goToContact}
                className="group mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700"
              >
                Parlons de votre projet
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-orange-200/70 via-amber-100/50 to-orange-100/60 blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white p-2 shadow-2xl shadow-orange-900/10">
                <div className="relative overflow-hidden rounded-[1.35rem]">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                    alt="Équipe professionnelle collaborant sur des solutions informatiques"
                    className="h-[420px] w-full object-cover sm:h-[520px]"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-white/5" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Votre partenaire technologique
                    </div>

                    <h3 className="max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
                      La technologie au service de votre réussite.
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
                      Des solutions intelligentes pour optimiser vos
                      opérations et faire évoluer votre entreprise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-left-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Une approche sur mesure
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Adaptée à vos objectifs
                  </p>
                </div>
              </div>

              <div className="absolute -right-3 top-8 hidden h-16 w-16 items-center justify-center rounded-2xl border border-white bg-white/95 text-orange-600 shadow-lg sm:flex">
                <Cpu className="h-8 w-8" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bloc complémentaire / appel final */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-100/60 blur-3xl" />

            <div className="relative">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <Code2 className="h-7 w-7" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Donnons vie à vos idées.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Vous recherchez un logiciel personnalisé, une application
                web ou une solution de gestion adaptée à votre entreprise ?
                Présentez-nous votre besoin et construisons ensemble la
                solution qui vous correspond.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                  <Cpu className="mb-3 h-6 w-6 text-orange-600" />
                  <h4 className="font-bold text-slate-900">
                    Développement sur mesure
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Des fonctionnalités pensées pour vos besoins.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                  <Headphones className="mb-3 h-6 w-6 text-orange-600" />
                  <h4 className="font-bold text-slate-900">
                    Accompagnement dédié
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Une équipe à vos côtés à chaque étape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
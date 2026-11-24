import React, { useState } from 'react';

import stockImage from '@/assets/stock.jpeg';
import eventImage from '@/assets/event.jpeg';
import reportImage from '@/assets/report.jpeg';
import gmsImage from '@/assets/GMS.jpeg';
import devImage from '@/assets/dev.jpeg';
import teamImage from '@/assets/spoet.jpeg';
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
  ArrowRight,
  ArrowUpRight,
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

  const reasons = [
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

  const currentProject = projects[activeSlide];

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
          NOS SERVICES — grille type "bento"
      ===================================================== */}
      <section id="solutions" className="scroll-mt-24 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] text-orange-600">
                Nos expertises
              </p>
              <h2 className="max-w-xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                Nos services de <span className="text-orange-600">développement</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              Des solutions personnalisées pour optimiser la gestion de votre
              activité et accélérer votre transformation numérique.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((srv, idx) => {
              const dark = idx === 0;
              const accent = idx === services.length - 1;
              return (
                <article
                  key={srv.title}
                  className={`group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    dark
                      ? 'border-slate-950 bg-slate-950 text-white'
                      : accent
                      ? 'border-orange-500 bg-orange-500 text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-900 hover:border-orange-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        dark
                          ? 'bg-orange-500 text-white'
                          : accent
                          ? 'bg-white text-orange-600'
                          : 'bg-slate-950 text-orange-400'
                      }`}
                    >
                      {srv.icon}
                    </div>
                    <span
                      className={`font-mono text-sm font-bold ${
                        dark ? 'text-slate-500' : accent ? 'text-white/70' : 'text-slate-300'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-xl font-extrabold leading-snug">{srv.title}</h3>
                    <p
                      className={`mt-3 text-sm leading-7 ${
                        dark ? 'text-slate-300' : accent ? 'text-orange-50' : 'text-slate-600'
                      }`}
                    >
                      {srv.desc}
                    </p>
                  </div>

                  <ArrowUpRight
                    className={`absolute bottom-6 right-6 h-5 w-5 opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 ${
                      dark || accent ? 'text-white' : 'text-orange-600'
                    }`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          NOTRE MÉTHODE — timeline verticale
      ===================================================== */}
      <section
        id="developpement"
        className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-20 sm:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] text-orange-600">
              Une démarche structurée
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Notre méthode de développement
            </h2>
            <div className="my-6 h-1.5 w-16 bg-orange-500" />
            <p className="max-w-md text-base leading-8 text-slate-600">
              <span className="font-bold text-orange-600">Un accompagnement complet</span>
              , de l'idée à la mise en production.
            </p>
            <button
              type="button"
              onClick={goToContact}
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Lancer mon projet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <ol className="relative space-y-5">
            <div className="absolute bottom-6 left-[27px] top-6 w-px bg-orange-300" aria-hidden="true" />
            {steps.map((st) => (
              <li key={st.num} className="group relative flex gap-5">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-orange-400 ring-4 ring-slate-50 transition group-hover:bg-orange-500 group-hover:text-white">
                  {st.icon}
                </div>
                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 transition group-hover:border-orange-300 group-hover:shadow-lg group-hover:shadow-orange-100">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-extrabold text-slate-950">{st.title}</h3>
                    <span className="font-mono text-sm font-bold text-orange-500">{st.num}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{st.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* =====================================================
          EXEMPLES DE SOLUTIONS — vitrine + liste
      ===================================================== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 flex flex-col gap-4 border-b-2 border-slate-950 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.25em] text-orange-600">
                Nos réalisations
              </p>
              <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                Quelques exemples de solutions développées
              </h2>
            </div>
            <p className="text-sm text-slate-600">Des projets concrets pour des métiers variés.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr]">
            {/* Vitrine */}
            <div className="relative h-[380px] overflow-hidden rounded-3xl bg-slate-950 sm:h-[500px]">
              <img
                key={currentProject.id}
                src={currentProject.image}
                alt={currentProject.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-900">
                {currentProject.type}
              </span>

              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
                <div className="max-w-md">
                  <span className="inline-block rounded-md bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                    {currentProject.stats}
                  </span>
                  <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">{currentProject.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{currentProject.subtitle}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    aria-label="Projet précédent"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 transition hover:bg-orange-500 hover:text-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextSlide}
                    aria-label="Projet suivant"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 transition hover:bg-orange-500 hover:text-white"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Liste */}
            <ul className="flex flex-col gap-3">
              {projects.map((proj, i) => {
                const active = i === activeSlide;
                return (
                  <li key={proj.id} className="flex-1">
                    <button
                      type="button"
                      onClick={() => setActiveSlide(i)}
                      aria-label={`Afficher le projet ${i + 1}`}
                      aria-pressed={active}
                      className={`flex h-full w-full items-center gap-4 rounded-2xl border p-3 text-left transition duration-200 ${
                        active
                          ? 'border-orange-500 bg-orange-50 shadow-lg shadow-orange-100'
                          : 'border-slate-200 bg-white hover:border-orange-300'
                      }`}
                    >
                      <img
                        src={proj.image}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="h-20 w-24 shrink-0 rounded-xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-orange-600">{proj.type}</p>
                        <h4 className="mt-1 text-sm font-extrabold text-slate-950">{proj.title}</h4>
                        <p className="mt-1 text-xs text-slate-500">{proj.stats}</p>
                      </div>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                          active ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          POURQUOI CHOISIR PC MAROC
      ===================================================== */}
      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-orange-200/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] text-orange-600">
              Pourquoi nous choisir ?
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Pourquoi choisir <span className="text-orange-600">PC MAROC</span> ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Nous mettons la technologie au service de votre entreprise. Nos solutions sont pensées pour simplifier
              votre quotidien, améliorer votre productivité et accompagner durablement votre développement.
            </p>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.1fr]">
            {/* Image */}
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-slate-950">
              <img
                src={teamImage}
                alt="Équipe professionnelle collaborant sur des solutions informatiques"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Votre partenaire technologique
                </div>
                <h3 className="max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
                  La technologie au service de votre réussite.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
                  Des solutions intelligentes pour optimiser vos opérations et faire évoluer votre entreprise.
                </p>
              </div>
            </div>

            {/* Raisons */}
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((item, i) => (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-orange-400 transition group-hover:bg-orange-500 group-hover:text-white">
                      {item.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-300">0{i + 1}</span>
                  </div>
                  <h3 className="text-base font-extrabold leading-snug text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={goToContact}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700"
            >
              Parlons de votre projet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPEL FINAL
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white sm:p-12">
            <div className="absolute left-0 top-0 h-1.5 w-full bg-orange-500" aria-hidden="true" />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/30 blur-3xl" aria-hidden="true" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
                  <Code2 className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Donnons vie à <span className="text-orange-400">vos idées.</span>
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  Vous recherchez un logiciel personnalisé, une application web ou une solution de gestion adaptée à
                  votre entreprise ? Présentez-nous votre besoin et construisons ensemble la solution qui vous
                  correspond.
                </p>
                <button
                  type="button"
                  onClick={goToContact}
                  className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-orange-500 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Parler de votre projet
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Cpu className="mb-3 h-6 w-6 text-orange-400" />
                  <h4 className="font-bold text-white">Développement sur mesure</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Des fonctionnalités pensées pour vos besoins.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Headphones className="mb-3 h-6 w-6 text-orange-400" />
                  <h4 className="font-bold text-white">Accompagnement dédié</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Une équipe à vos côtés à chaque étape.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
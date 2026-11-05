import React from "react";
import {
  Smartphone,
  Settings,
  Wifi,
  BookOpen,
  ConciergeBell,
  Zap,
  LayoutGrid,
  Armchair,
  BarChart3,
  RefreshCw,
  Timer,
  Users,
  ChefHat,
  TrendingUp,
  Wrench,
  Headset,
  ArrowRight,
} from "lucide-react";

import "./Pda.css";

import pdaImage from "@/assets/21.png";
import deuxImage from "@/assets/20.png";
import troisImage from "@/assets/22.png";
import heroImage from "@/assets/csi1.jpeg";
import quatreImage from "@/assets/3.jpg";
import cinqImage from "@/assets/00.png";
import sixImage from "@/assets/4.jpg";
import tci from "@/assets/tci.jpeg";

const cards = [
  {
    img: pdaImage,
    title: "PAD CSI",
    subtitle: "Robuste, léger et performant",
    features: [
      { icon: Smartphone, label: 'Écran tactile 5"' },
      { icon: Settings, label: "Design robuste" },
      { icon: Wifi, label: "Wi-Fi / 4G (Bluetooth)" },
    ],
  },
  {
    img: deuxImage,
    title: "Interface de commande",
    subtitle: "Simple et intuitive",
    features: [
      { icon: BookOpen, label: "Menus et catégories" },
      { icon: ConciergeBell, label: "Options et suppléments" },
      { icon: Settings, label: "Personnalisable selon votre activité" },
      { icon: Zap, label: "Prise de commande rapide" },
    ],
  },
  {
    img: troisImage,
    title: "Plan de salle",
    subtitle: "Visualisez et gérez vos tables en temps réel",
    features: [
      { icon: LayoutGrid, label: "Suivi des tables en temps réel" },
      { icon: Armchair, label: "Ouverture, transfert et regroupement" },
      { icon: BarChart3, label: "État des tables (claire et visuelle)" },
      { icon: RefreshCw, label: "Synchronisation avec la caisse CSI" },
    ],
  },
];

const advantages = [
  {
    icon: Timer,
    tone: "orange",
    title: "Gain de temps",
    text: "Commandes envoyées directement en cuisine sans déplacement.",
  },
  {
    icon: Users,
    tone: "blue",
    title: "Meilleure organisation",
    text: "Suivi des tables et des commandes en temps réel.",
  },
  {
    icon: ChefHat,
    tone: "green",
    title: "Moins d’erreurs",
    text: "Saisie intuitive et claire avec menus visuels.",
  },
  {
    icon: TrendingUp,
    tone: "purple",
    title: "Plus de ventes",
    text: "Mise en avant des options et des produits complémentaires.",
  },
];

const flow = [
  { img: quatreImage, label: "Prise de commande sur PAD CSI" },
  { img: sixImage, label: "Affichage en cuisine sur KDS" },
  { img: cinqImage, label: "Intégration à la caisse CSI" },
];

const services = [
  { icon: Settings, title: "Installation et paramétrage", text: "par nos techniciens" },
  { icon: Users, title: "Formation des équipes", text: "Utilisation simple et rapide" },
  { icon: Headset, title: "Assistance technique", text: "À distance ou sur site" },
  { icon: Wrench, title: "Suivi et maintenance", text: "Pour une utilisation en toute sérénité" },
];

function Logo() {
  return (
    <div className="pda-logo" aria-label="PC MAROC">
      <div></div>
    </div>
  );
}

export default function OraliPage() {
  return (
    <main className="pda-page">
      {/* HERO */}
      <section id="accueil" className="pda-hero">
        <img
          className="pda-hero__bg"
          src={heroImage}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />
        <div className="pda-hero__fade" />

        <div className="pda-hero__inner">
          <Logo />

          <div className="pda-hero__text">
            <p className="pda-eyebrow">PDA / Terminal de prise de commande</p>
            <h1>
              Un service plus rapide
              <br />
              au bout des mains
            </h1>
            <p className="pda-hero__desc">
              Le terminal mobile CSI vous permet de prendre les commandes
              directement à table, de les envoyer en cuisine via le KDS et de
              les intégrer à votre caisse, pour un service fluide et plus
              efficace.
            </p>
          </div>

          <p className="pda-hero__script" aria-hidden="true">
            La prise de commande
            <br />
            en toute mobilité
          </p>
        </div>
      </section>

      <div className="pda-container pda-stack">
        {/* LES 3 TÉLÉPHONES */}
        <section id="solutions" className="pda-phones">
          {cards.map((card) => (
            <article className="pda-phone" key={card.title}>
              <div className="pda-phone__image">
                <img src={card.img} alt={card.title} loading="lazy" />
              </div>

              <h2>{card.title}</h2>
              <p className="pda-phone__subtitle">{card.subtitle}</p>

              <ul className="pda-phone__features">
                {card.features.map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <Icon />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* AVANTAGES */}
        <section className="pda-advantages">
          <p className="pda-eyebrow pda-eyebrow--center">
            Les avantages pour votre établissement
          </p>
          <h2>Un service plus fluide et plus efficace</h2>

          <div className="pda-advantages__grid">
            {advantages.map(({ icon: Icon, tone, title, text }) => (
              <article
                className={`pda-advantage pda-tone--${tone}`}
                key={title}
              >
                <div className="pda-advantage__icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SOLUTION CONNECTÉE + ACCOMPAGNEMENT */}
        <section id="fonctionnement" className="pda-bottom">
          <div className="pda-bottom__left">
            <p className="pda-eyebrow pda-eyebrow--small">Une solution connectée</p>
            <h2>De la table à la cuisine, sans délai</h2>

            <div className="pda-flow">
              {flow.map((step, i) => (
                <React.Fragment key={step.label}>
                  <figure className="pda-flow__step">
                    <div className="pda-flow__image">
                      <img src={step.img} alt={step.label} loading="lazy" />
                    </div>
                    <figcaption>{step.label}</figcaption>
                  </figure>
                  {i < flow.length - 1 && (
                    <ArrowRight className="pda-flow__arrow" strokeWidth={2.2} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <ul className="pda-support">
            {services.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <Icon />
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* CARD ACCOMPAGNEMENT (AJOUTÉE EN BAS DE PAGE) */}
        <section className="pda-accompaniment-card">
          <div className="overflow-hidden rounded-3xl bg-[#f1f6ff] shadow-lg shadow-slate-200/50 border border-slate-200/80">
            <div className="grid lg:grid-cols-[2fr_3fr]">
              {/* Image khawya - Placeholder */}
              <div className="relative min-h-[260px] bg-slate-200/70 lg:min-h-full">
                <img
                  src={tci}
                  alt="Notre accompagnement"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <span className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-slate-500">
                  NOTRE ACCOMPAGNEMENT
                </span>

                <h2 className="mt-2 text-2xl font-black tracking-tight text-[#0b2a5b] sm:text-3xl">
                  Installation, formation et support
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Notre équipe technique vous accompagne à chaque étape pour une mise en service rapide et une utilisation en toute sérénité.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
                  {/* Grid 4 icons */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="flex flex-col items-center rounded-2xl bg-white p-3 text-center shadow-sm border border-slate-100">
                      <Wrench className="h-6 w-6 text-[#f26522]" strokeWidth={2} />
                      <span className="mt-2 text-[11px] font-bold leading-tight text-slate-700">
                        Installation et paramétrage
                      </span>
                    </div>

                    <div className="flex flex-col items-center rounded-2xl bg-white p-3 text-center shadow-sm border border-slate-100">
                      <Users className="h-6 w-6 text-[#f26522]" strokeWidth={2} />
                      <span className="mt-2 text-[11px] font-bold leading-tight text-slate-700">
                        Formation des équipes
                      </span>
                    </div>

                    <div className="flex flex-col items-center rounded-2xl bg-white p-3 text-center shadow-sm border border-slate-100">
                      <Headset className="h-6 w-6 text-[#f26522]" strokeWidth={2} />
                      <span className="mt-2 text-[11px] font-bold leading-tight text-slate-700">
                        Assistance technique
                      </span>
                    </div>

                    <div className="flex flex-col items-center rounded-2xl bg-white p-3 text-center shadow-sm border border-slate-100">
                      <Settings className="h-6 w-6 text-[#f26522]" strokeWidth={2} />
                      <span className="mt-2 text-[11px] font-bold leading-tight text-slate-700">
                        Suivi et maintenance
                      </span>
                    </div>
                  </div>

                  {/* Bouton */}
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#f26522] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#d95316]"
                  >
                    Demander une démonstration <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
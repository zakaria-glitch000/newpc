import React from "react";
import {
  Timer,
  ChefHat,
  FileX2,
  CircleCheck,
  ListChecks,
  Clock,
  Monitor,
  ArrowLeftRight,
  Settings,
  Users,
  Headset,
  Wrench,
  ArrowRight,
} from "lucide-react";
import "./Kds.css";

import heads from "@/assets/9.jpeg";
import deux from "@/assets/11.jpeg";
import trois from "@/assets/10.jpeg";
import caisseImage from "@/assets/00.png";
import borneImage from "@/assets/bb1.png";
import padImage from "@/assets/bb33.png";
import kdsImage from "@/assets/4.jpg";
import tkds from "@/assets/tkds.jpeg";

const benefits = [
  { Icon: Timer, tone: "orange", title: "Gain de temps", text: "Affichage instantané des commandes en cuisine." },
  { Icon: ChefHat, tone: "blue", title: "Meilleure organisation", text: "Priorisation des commandes et suivi en temps réel." },
  { Icon: FileX2, tone: "red", title: "Zéro ticket papier", text: "Plus écologique et plus fiable." },
  { Icon: CircleCheck, tone: "blue", title: "Communication fluide", text: "Connecté à la caisse CSI, aux bornes et aux PAD." },
];

const features = [
  { Icon: ListChecks, tone: "orange", title: "Affichage clair des commandes", text: "Par table ou par chronologie avec code couleur." },
  { Icon: Clock, tone: "blue", title: "Suivi du temps de préparation", text: "Alertes visuelles pour respecter les délais." },
  { Icon: ChefHat, tone: "orange", title: "Hiérarchisation des commandes", text: "Entrées, plats, desserts et menus." },
  { Icon: Monitor, tone: "blue", title: "Gestion multi-postes", text: "Plusieurs écrans selon les postes de cuisine." },
  { Icon: ArrowLeftRight, tone: "orange", title: "Communique avec tout le système", text: "Caisse CSI, bornes et PAD." },
  { Icon: Settings, tone: "blue", title: "Interface simple", text: "Facile à prendre en main pour l’équipe." },
];

const gallery = [
  { img: deux, alt: "Équipe en cuisine devant l'écran KDS" },
  { img: heads, alt: "Cuisine équipée avec écran KDS et imprimante" },
  { img: trois, alt: "Plan de salle affiché sur l'écran KDS" },
];

const flow = [
  { img: caisseImage, label: "Caisse CSI" },
  { img: borneImage, label: "Borne de commande" },
  { img: padImage, label: "PAD de prise de commande" },
  { img: kdsImage, label: "KDS", sub: "Écran cuisine" },
];

const support = [
  { Icon: Settings, title: "Installation et paramétrage", text: "Par nos techniciens" },
  { Icon: Users, title: "Formation des équipes", text: "Utilisation simple et rapide" },
  { Icon: Headset, title: "Assistance technique", text: "À distance ou sur site" },
  { Icon: Wrench, title: "Suivi et maintenance", text: "Pour une utilisation en toute sérénité" },
];

function Logo() {
  return (
    <div className="kds-logo" aria-label="PC MAROC">
      <div></div>
    </div>
  );
}

export default function KdsPage() {
  return (
    <main className="kds-page">
      {/* HERO + AVANTAGES (la photo passe derrière les deux) */}
      <div className="kds-top">
        <img
          className="kds-top__bg"
          src={heads}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />
        <div className="kds-top__fade" />

        <header className="kds-hero">
          <Logo />
          <p className="kds-eyebrow">KDS – Écran cuisine</p>
          <h1>
            <strong>Une cuisine plus organisée,</strong>
            <span>un service plus rapide</span>
          </h1>
          <p className="kds-hero__text">
            Notre solution KDS simplifie la gestion des commandes en cuisine,
            élimine les tickets papier et améliore la communication entre la
            salle, les bornes, les PAD et la caisse CSI.
          </p>
        </header>

        <section className="kds-benefits" aria-label="Les avantages du KDS">
          {benefits.map(({ Icon, tone, title, text }) => (
            <article className="kds-benefit" key={title}>
              <div className={`kds-benefit__icon kds-tone--${tone}`}>
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>
      </div>

      <div className="kds-container kds-stack">
        {/* ÉCRAN KDS + FONCTIONNALITÉS */}
        <section className="kds-showcase">
          <div className="kds-showcase__visual">
            <img src={kdsImage} alt="Écran KDS affichant les commandes en cuisine" />
          </div>

          <aside className="kds-features">
            <p className="kds-eyebrow kds-eyebrow--panel">
              Les fonctionnalités du KDS
            </p>
            <ul>
              {features.map(({ Icon, tone, title, text }) => (
                <li key={title} className={`kds-tone-text--${tone}`}>
                  <Icon />
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        {/* GALERIE */}
        <section className="kds-gallery" aria-label="Le KDS en situation">
          {gallery.map(({ img, alt }) => (
            <figure key={alt}>
              <img src={img} alt={alt} loading="lazy" />
            </figure>
          ))}
        </section>

        {/* SOLUTION COMPLÈTE + ACCOMPAGNEMENT */}
        <section className="kds-bottom">
          <div className="kds-bottom__left">
            <p className="kds-eyebrow kds-eyebrow--small">Une solution complète</p>
            <h2>De la commande à la cuisine, sans délai</h2>

            <div className="kds-flow">
              {flow.map((step, i) => (
                <React.Fragment key={step.label}>
                  <figure className="kds-flow__step">
                    <div className="kds-flow__image">
                      <img src={step.img} alt={step.label} />
                    </div>
                    <figcaption>
                      {step.label}
                      {step.sub && <span>{step.sub}</span>}
                    </figcaption>
                  </figure>
                  {i < flow.length - 1 && (
                    <ArrowRight className="kds-flow__arrow" strokeWidth={2.2} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="kds-bottom__right">
            <p className="kds-eyebrow kds-eyebrow--small">Notre accompagnement</p>
            <h2>Installation, formation et support</h2>

            <ul className="kds-support">
              {support.map(({ Icon, title, text }) => (
                <li key={title}>
                  <Icon />
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CARD ACCOMPAGNEMENT (AJOUTÉE EN BAS DE PAGE) */}
        <section className="kds-accompaniment-card">
          <div className="overflow-hidden rounded-3xl bg-[#f1f6ff] shadow-lg shadow-slate-200/50 border border-slate-200/80">
            <div className="grid lg:grid-cols-[2fr_3fr]">
              {/* Image khawya - Placeholder */}
              <div className="relative min-h-[260px] bg-slate-200/70 lg:min-h-full">
                <img
                  src={tkds}
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
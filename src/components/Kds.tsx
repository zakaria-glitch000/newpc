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
import tkds from "@/assets/supportt.jpeg";

const benefits = [
  { Icon: Timer, title: "Gain de temps", text: "Affichage instantané des commandes en cuisine." },
  { Icon: ChefHat, title: "Meilleure organisation", text: "Priorisation des commandes et suivi en temps réel." },
  { Icon: FileX2, title: "Zéro ticket papier", text: "Plus écologique et plus fiable." },
  { Icon: CircleCheck, title: "Communication fluide", text: "Connecté à la caisse CSI, aux bornes et aux PAD." },
];

const features = [
  { Icon: ListChecks, title: "Affichage clair des commandes", text: "Par table ou par chronologie avec code couleur." },
  { Icon: Clock, title: "Suivi du temps de préparation", text: "Alertes visuelles pour respecter les délais." },
  { Icon: ChefHat, title: "Hiérarchisation des commandes", text: "Entrées, plats, desserts et menus." },
  { Icon: Monitor, title: "Gestion multi-postes", text: "Plusieurs écrans selon les postes de cuisine." },
  { Icon: ArrowLeftRight, title: "Communique avec tout le système", text: "Caisse CSI, bornes et PAD." },
  { Icon: Settings, title: "Interface simple", text: "Facile à prendre en main pour l’équipe." },
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
  { Icon: Wrench, title: "Installation et paramétrage", text: "Par nos techniciens" },
  { Icon: Users, title: "Formation des équipes", text: "Utilisation simple et rapide" },
  { Icon: Headset, title: "Assistance technique", text: "À distance ou sur site" },
  { Icon: Settings, title: "Suivi et maintenance", text: "Pour une utilisation en toute sérénité" },
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
      {/* HERO (inchangé) + AVANTAGES */}
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
          {benefits.map(({ Icon, title, text }, i) => (
            <article className="kds-benefit" key={title}>
              <span className="kds-benefit__num">0{i + 1}</span>
              <div className="kds-benefit__icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>
      </div>

      {/* ÉCRAN KDS + FONCTIONNALITÉS */}
      <section className="kds-section">
        <div className="kds-container">
          <header className="kds-head">
            <div>
              <p className="kds-eyebrow kds-eyebrow--small">Les fonctionnalités du KDS</p>
              <h2>Tout pour piloter votre cuisine</h2>
            </div>
            <p>Un écran clair, des alertes visuelles et une connexion directe à tout votre système.</p>
          </header>

          <div className="kds-showcase">
            <div className="kds-showcase__visual">
              <span className="kds-showcase__tag">KDS</span>
              <img src={kdsImage} alt="Écran KDS affichant les commandes en cuisine" />
            </div>

            <ul className="kds-features">
              {features.map(({ Icon, title, text }, i) => (
                <li key={title}>
                  <div className="kds-features__icon">
                    <Icon />
                  </div>
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                  <span className="kds-features__num">0{i + 1}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="kds-gallery-wrap" aria-label="Le KDS en situation">
        <div className="kds-container kds-gallery">
          {gallery.map(({ img, alt }) => (
            <figure key={alt}>
              <img src={img} alt={alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      {/* SOLUTION COMPLÈTE */}
      <section className="kds-flow-band">
        <div className="kds-container">
          <p className="kds-eyebrow kds-eyebrow--small">Une solution complète</p>
          <h2>
            De la commande à la cuisine, <span>sans délai</span>
          </h2>

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
                  <ArrowRight className="kds-flow__arrow" strokeWidth={2.4} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ACCOMPAGNEMENT */}
      <section className="kds-section">
        <div className="kds-container kds-support">
          <div className="kds-support__image">
            <img src={tkds} alt="Notre accompagnement" loading="lazy" />
          </div>

          <div className="kds-support__content">
            <p className="kds-eyebrow kds-eyebrow--small">Notre accompagnement</p>
            <h2>Installation, formation et support</h2>
            <p className="kds-support__intro">
              Notre équipe technique vous accompagne à chaque étape pour une
              mise en service rapide et une utilisation en toute sérénité.
            </p>

            <ul className="kds-support__list">
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

            <a href="/#contact" className="kds-btn">
              Demander une démonstration <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
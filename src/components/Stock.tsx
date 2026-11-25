import React from "react";
import {
  ShoppingCart,
  Barcode,
  Box,
  ClipboardList,
  RefreshCw,
  Search,
  Truck,
  ArrowLeftRight,
  BarChart3,
  Wrench,
  Users,
  Headset,
  Settings,
  ArrowRight,
} from "lucide-react";
import "./Stock.css";
import heroImage from '@/assets/p2.jpg';

const heroBadges = [
  { icon: Barcode, text: "Lecture codes-barres rapide et fiable" },
  { icon: Box, text: "Saisie et création des articles" },
  { icon: ClipboardList, text: "Inventaires simplifiés et précis" },
  { icon: RefreshCw, text: "Synchronisation en temps réel avec INNOSHOP" },
];

const features = [
  { icon: Barcode, title: "Saisie des articles", text: "Ajoutez rapidement de nouveaux produits (code, prix, famille, libellé...)." },
  { icon: Search, title: "Lecture de codes-barres", text: "Lecture rapide et fiable des codes produits, EAN, QR Code..." },
  { icon: Box, title: "Inventaire", text: "Réalisez vos inventaires en quelques clics avec un comptage rapide et précis." },
  { icon: Truck, title: "Réception", text: "Enregistrez vos entrées de marchandises et mettez à jour vos stocks." },
  { icon: ArrowLeftRight, title: "Transfert", text: "Gérez les mouvements de stock entre vos magasins ou vos zones de stockage." },
  { icon: BarChart3, title: "Consultation", text: "Visualisez les quantités, les emplacements et les informations produits." },
];

import c1 from "@/assets/c1.jpeg";
import c2 from "@/assets/c2.jpeg";
import c3 from "@/assets/c3.jpeg";
import c4 from "@/assets/c4.jpeg";
import tpda from "@/assets/supportt.jpeg";

import a1 from "@/assets/a1.jpeg";
import a2 from "@/assets/a2.jpeg";
import a3 from "@/assets/a3.jpeg";
import a4 from "@/assets/a4.jpeg";
import a5 from "@/assets/a5.jpeg";

const steps = [
  {
    img: c1,
    title: "Choix de l’opération",
    text: "Saisie, inventaire, réception...",
  },
  {
    img: c2,
    title: "Saisie ou scan",
    text: "Entrez les informations ou scannez le code-barres.",
  },
  {
    img: c3,
    title: "Comptage rapide",
    text: "Scannez vos produits et validez les quantités.",
  },
  {
    img: c4,
    title: "Mise à jour automatique",
    text: "Vos données sont directement synchronisées avec INNOSHOP.",
    wide: true,
  },
];

const shops = [
  { img: a1, label: "Supermarchés indépendants" },
  { img: a2, label: "Épiceries et primeurs" },
  { img: a3, label: "Boucheries et charcuteries" },
  { img: a4, label: "Fromageries" },
  { img: a5, label: "Commerces spécialisés" },
];

const support = [
  { icon: Wrench, text: "Installation et paramétrage" },
  { icon: Users, text: "Formation des équipes" },
  { icon: Headset, text: "Assistance technique" },
  { icon: Settings, text: "Suivi et maintenance" },
];

function Logo() {
  return (
    <div className="stk-logo" aria-label="PC MAROC">
      <div></div>
    </div>
  );
}

export default function App() {
  return (
    <main className="stk-page">
      {/* HERO (inchangé) */}
      <header className="stk-hero">
        <div
          className="stk-hero__bg"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="stk-hero__fade" />

        <div className="stk-hero__inner">
          <div className="stk-hero__left">
            <Logo />
            <p className="stk-eyebrow">Terminal de saisie et d’inventaire</p>
            <h1>
              Maîtrisez vos stocks
              <br />
              avec INNOSHOP
            </h1>
            <p className="stk-hero__text">
              Notre terminal de saisie est connecté à votre logiciel INNOSHOP
              pour vous permettre de saisir vos articles, réaliser vos
              inventaires, contrôler vos réceptions et mettre à jour vos stocks
              rapidement et en toute fiabilité.
            </p>
          </div>

          <div className="stk-hero__terminal"></div>

          <div className="stk-hero__right">
            <div className="stk-innoshop">
              <ShoppingCart />
              <div>
                <strong>INNOSHOP</strong>
                <span>Logiciel de gestion Retail</span>
              </div>
            </div>

            {heroBadges.map(({ icon: Icon, text }) => (
              <div className="stk-badge" key={text}>
                <Icon strokeWidth={1.5} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* FONCTIONNALITÉS */}
      <section className="stk-section">
        <div className="stk-container">
          <header className="stk-head">
            <div>
              <p className="stk-eyebrow stk-eyebrow--small">Les fonctionnalités</p>
              <h2>Un terminal polyvalent pour toutes vos opérations</h2>
            </div>
          </header>

          <ol className="stk-features">
            {features.map(({ icon: Icon, title, text }, i) => (
              <li className="stk-feature" key={title}>
                <span className="stk-feature__num">0{i + 1}</span>
                <div className="stk-feature__icon">
                  <Icon strokeWidth={1.9} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FONCTIONNEMENT */}
      <section className="stk-flow-band">
        <div className="stk-container">
          <p className="stk-eyebrow stk-eyebrow--small">Un fonctionnement simple</p>
          <h2>
            De la saisie à la mise à jour <span>dans INNOSHOP</span>
          </h2>

          <div className="stk-steps">
            {steps.map((s, i) => (
              <React.Fragment key={s.title}>
                <div className={`stk-step ${s.wide ? "stk-step--wide" : ""}`}>
                  <div className="stk-step__image">
                    <span className="stk-step__num">0{i + 1}</span>
                    <img src={s.img} alt={s.title} loading="lazy" />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="stk-steps__arrow" strokeWidth={2.4} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCES */}
      <section className="stk-shops">
        <div className="stk-container">
          <header className="stk-head">
            <div>
              <p className="stk-eyebrow stk-eyebrow--small">Idéal pour tous les commerces</p>
              <h2>Une solution adaptée à votre activité</h2>
            </div>
          </header>

          <div className="stk-shops__grid">
            {shops.map((s) => (
              <figure className="stk-shop" key={s.label}>
                <div className="stk-shop__image">
                  <img src={s.img} alt={s.label} loading="lazy" />
                </div>
                <figcaption>{s.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ACCOMPAGNEMENT */}
      <section className="stk-section">
        <div className="stk-container stk-support">
          <div className="stk-support__image">
            <img src={tpda} alt="Notre accompagnement" loading="lazy" />
          </div>

          <div className="stk-support__content">
            <p className="stk-eyebrow stk-eyebrow--small">Notre accompagnement</p>
            <h2>Installation, formation et support</h2>
            <p className="stk-support__intro">
              Notre équipe technique vous accompagne à chaque étape pour une
              mise en service rapide et une utilisation en toute sérénité.
            </p>

            <ul className="stk-support__list">
              {support.map(({ icon: Icon, text }) => (
                <li key={text}>
                  <Icon />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <a href="/#contact" className="stk-btn">
              Demander une démonstration <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
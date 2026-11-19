
import React, { useState, useEffect } from "react";
import "./Gesticlean.css";

import heroImg from "@/assets/bannpress.jpeg";
import posImg from "@/assets/hero-pressing.png";
import convoyeurImg from "@/assets/rang.jpeg";

import device1 from "@/assets/hero-pressing.png";
import device2 from "@/assets/hero-pressing.png";
import device3 from "@/assets/hero-pressing.png";
import device4 from "@/assets/hero-pressing.png";
import device5 from "@/assets/hero-pressing.png";
import device6 from "@/assets/hero-pressing.png";

import servicesImg from "@/assets/supportt.jpeg";

import centerPos from "@/assets/hero-pressing.png";
import accConvoyeur from "@/assets/rang.jpeg";
import accTicket from "@/assets/imp.jpeg";
import accMarquage from "@/assets/marq.jpeg";
import accScanner from "@/assets/scann.jpeg";
import accTiroir from "@/assets/tirr.jpeg";

/* =====================================================
   DONNÉES
===================================================== */

const DEVICES = [
  { src: device1, alt: "Terminal de caisse" },
  { src: device2, alt: "Imprimante d'étiquettes" },
  { src: device3, alt: "Imprimante de tickets" },
  { src: device4, alt: "Terminal mobile" },
  { src: device5, alt: "Périphérique 5" },
  { src: device6, alt: "Périphérique 6" },
];

const SERVICES = [
  {
    title: "Conseil et Formation",
    text: "Notre équipe est à même de vous accompagner dans votre projet. Écouter, détecter vos besoins et analyser pour vous proposer la meilleure solution en terme de délai et de budget.",
  },
  {
    title: "Installation et paramétrage",
    text: "",
  },
  {
    title: "Support Technique",
    text: "",
  },
];

/* =====================================================
   LOGOS CLIENTS
===================================================== */

const logoModules = import.meta.glob(
  "@/assets/gesticlean/*.{png,jpg,jpeg,webp,svg}",
  { eager: true, import: "default" }
);

const REAL_LOGOS = Object.entries(logoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const file = path.split("/").pop() || "client";

    return {
      name: file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
      src,
    };
  });

const PLACEHOLDER_LOGOS = Array.from({ length: 24 }, (_, i) => ({
  name: `Client ${String(i + 1).padStart(2, "0")}`,
}));

const CLIENT_LOGOS = REAL_LOGOS.length
  ? REAL_LOGOS
  : PLACEHOLDER_LOGOS;

/* =====================================================
   MARQUEE CLIENTS
===================================================== */

const MARQUEE_CSS = `
.clients-marquee {
  overflow: hidden;
  padding: 12px 0;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}

.clients-track {
  display: flex;
  width: max-content;
  animation: clients-left var(--clients-speed, 60s) linear infinite;
}

.clients-track.reverse {
  animation-name: clients-right;
}

.clients-marquee:hover .clients-track {
  animation-play-state: paused;
}

@keyframes clients-left {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes clients-right {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}

.client-card {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 84px;
  margin: 0 10px;
  padding: 12px 20px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(15, 23, 42, .05);
  transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
}

.client-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(15, 23, 42, .10);
  border-color: #f97316;
}

.client-card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.client-card .client-ph {
  font-size: 14px;
  font-weight: 700;
  color: #94a3b8;
}

.client-card:hover .client-ph {
  color: #f97316;
}

.clients-rows {
  display: grid;
  gap: 14px;
  margin-top: 32px;
}

.clients-count {
  margin-top: 12px;
  color: #64748b;
  font-size: 14px;
  text-align: center;
}

@media (max-width: 640px) {
  .client-card {
    width: 140px;
    height: 72px;
    margin: 0 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .clients-track {
    animation: none !important;
  }
}
`;

function MarqueeRow({ logos, reverse = false, speed = 60 }) {
  const loop = [...logos, ...logos];

  return (
    <div className="clients-marquee">
      <div
        className={`clients-track${reverse ? " reverse" : ""}`}
        style={{ "--clients-speed": `${speed}s` }}
      >
        {loop.map((l, i) => (
          <div className="client-card" key={`${l.name}-${i}`}>
            {l.src ? (
              <img
                src={l.src}
                alt={l.name}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className="client-ph">{l.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* =====================================================
   ACCESSOIRES CONNECTÉS
===================================================== */

const ACC_ICONS = {
  convoyeur: (
    <>
      <path d="M3 8h2l2 6h10l2-6h2" />
      <circle cx="8" cy="18" r="1.6" />
      <circle cx="16" cy="18" r="1.6" />
    </>
  ),

  ticket: (
    <>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3z" />
      <path d="M9 8h6M9 12h6" />
    </>
  ),

  marquage: (
    <path d="M4 5v14M7 5v14M11 5v14M14 5v14M18 5v14M20 5v14" />
  ),

  scanner: (
    <>
      <path d="M4 8V5h3M17 5h3v3M20 16v3h-3M7 19H4v-3" />
      <path d="M8 9v6M11 9v6M14 9v6M16 9v6" />
    </>
  ),

  tiroir: (
    <>
      <rect x="3" y="10" width="18" height="9" rx="1.5" />
      <path d="M6 10l2-5h8l2 5" />
      <path d="M10 14.5h4" />
    </>
  ),
};

const ACCESSORIES = [
  {
    key: "convoyeur",
    label: "Convoyeur",
    img: accConvoyeur,
    x: 25,
    y: 18,
    pillX: 0.5,
    pillY: 13,
  },
  {
    key: "ticket",
    label: "Imprimante\nticket",
    img: accTicket,
    x: 25,
    y: 48,
    pillX: -0.5,
    pillY: 42,
  },
  {
    key: "marquage",
    label: "Imprimante\nde marquage",
    img: accMarquage,
    x: 25,
    y: 78,
    pillX: -0.5,
    pillY: 72,
  },
  {
    key: "scanner",
    label: "Scanner",
    img: accScanner,
    x: 75,
    y: 23,
    pillX: 84.5,
    pillY: 18,
  },
  {
    key: "tiroir",
    label: "Tiroir-caisse",
    img: accTiroir,
    x: 75,
    y: 65,
    pillX: 84.5,
    pillY: 60,
  },
];

/* =====================================================
   SECTION CONNECTED CASH
===================================================== */

const CONNECT_CSS = `
.cc-section {
  position: relative;
  overflow: hidden;
  background: #fff;
  padding: 90px 20px 85px;
  text-align: center;
}

.cc-section::before,
.cc-section::after {
  content: "";
  position: absolute;
  width: 280px;
  height: 280px;
  background: linear-gradient(135deg, #fb923c, #f97316);
  border-radius: 50%;
  z-index: 0;
  opacity: .08;
}

.cc-section::before {
  top: -170px;
  left: -150px;
}

.cc-section::after {
  bottom: -170px;
  right: -150px;
}

.cc-title {
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: clamp(30px, 4vw, 46px);
  line-height: 1.15;
  font-weight: 900;
  color: #0f172a;
  letter-spacing: -1.5px;
}

.cc-title em {
  color: #f97316;
  font-style: normal;
}

.cc-bar {
  position: relative;
  z-index: 1;
  display: block;
  width: 58px;
  height: 4px;
  background: #f97316;
  margin: 22px auto;
  border-radius: 2px;
}

.cc-sub {
  position: relative;
  z-index: 1;
  margin: 0 auto;
  max-width: 720px;
  font-size: 16px;
  line-height: 1.8;
  color: #64748b;
}

.cc-stage {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 35px auto 0;
  aspect-ratio: 1600 / 640;
}

.cc-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.cc-lines path {
  fill: none;
  stroke: #f97316;
  stroke-width: 3;
  stroke-linecap: round;
}

.cc-lines circle {
  fill: #f97316;
}

.cc-center {
  position: absolute;
  left: 34%;
  top: 3%;
  width: 34%;
}

.cc-center img {
  width: 100%;
  display: block;
  position: relative;
  z-index: 2;
}

.cc-podium {
  position: absolute;
  left: 50%;
  bottom: -3%;
  transform: translateX(-50%);
  width: 105%;
  height: 22%;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, #fff 40%, #ffedd5 70%, #fed7aa 100%);
  box-shadow: 0 0 30px rgba(249, 115, 22, .22);
  z-index: 1;
}

.cc-circle {
  position: absolute;
  width: 11.9%;
  aspect-ratio: 1 / 1;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #fff;
  border: 2px solid #fed7aa;
  box-shadow: 0 6px 20px rgba(249, 115, 22, .12);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
}

.cc-circle img {
  width: 80%;
  height: 80%;
  object-fit: contain;
}

.cc-pill {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 22px 6px 6px;
  background: #fff;
  border: 1px solid #fed7aa;
  border-radius: 999px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, .07);
  z-index: 3;
  text-align: left;
  white-space: pre-line;
}

.cc-pill-icon {
  flex-shrink: 0;
  width: clamp(34px, 4.3vw, 52px);
  height: clamp(34px, 4.3vw, 52px);
  border-radius: 50%;
  background: linear-gradient(135deg, #fb923c, #f97316);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cc-pill-icon svg {
  width: 56%;
  height: 56%;
  fill: none;
  stroke: #fff;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cc-pill-label {
  font-weight: 800;
  color: #0f172a;
  font-size: clamp(11px, 1.5vw, 17px);
  line-height: 1.2;
}

@media (max-width: 760px) {
  .cc-stage {
    aspect-ratio: auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    margin-top: 24px;
    justify-items: center;
  }

  .cc-lines,
  .cc-podium {
    display: none;
  }

  .cc-center {
    position: static;
    width: 100%;
    max-width: 280px;
    grid-column: 1 / -1;
    margin: 0 auto 12px;
  }

  .cc-circle {
    display: none;
  }

  .cc-pill {
    position: static;
    width: 100%;
    padding: 8px;
    gap: 8px;
  }

  .cc-pill-label {
    font-size: 11px;
  }

  .cc-pill-icon {
    width: 38px;
    height: 38px;
  }
}
`;

/* =====================================================
   COMPOSANT CONNECTED CASH
===================================================== */

function ConnectedCash() {
  return (
    <section className="cc-section">
      <h2 className="cc-title">
        Une caisse connectée
        <br />
        à vos accessoires
      </h2>

      <span className="cc-bar" />

      <p className="cc-sub">
        Une solution évolutive et parfaitement intégrée
        <br />
        à tous les équipements de votre point de vente.
      </p>

      <div className="cc-stage">
        <svg
          className="cc-lines"
          viewBox="0 0 1600 640"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M470 115 C 520 125, 545 170, 565 210" />
          <circle cx="470" cy="115" r="7" />

          <path d="M458 298 C 510 295, 540 310, 556 330" />
          <circle cx="458" cy="298" r="7" />

          <path d="M482 463 C 520 440, 540 410, 552 405" />
          <circle cx="482" cy="463" r="7" />

          <path d="M1133 115 C 1090 120, 1055 160, 1040 200" />
          <circle cx="1133" cy="115" r="7" />

          <path d="M1150 378 C 1120 360, 1100 340, 1090 320" />
          <circle cx="1150" cy="378" r="7" />
        </svg>

        <div className="cc-center">
          <img src={centerPos} alt="Poste de caisse GestiClean" />
          <span className="cc-podium" />
        </div>

        {ACCESSORIES.map((a) => (
          <React.Fragment key={a.key}>
            <div
              className="cc-circle"
              style={{ left: `${a.x}%`, top: `${a.y}%` }}
            >
              <img
                src={a.img}
                alt={a.label.replace("\n", " ")}
                loading="lazy"
              />
            </div>

            <div
              className="cc-pill"
              style={{ left: `${a.pillX}%`, top: `${a.pillY}%` }}
            >
              <span className="cc-pill-icon">
                <svg viewBox="0 0 24 24">
                  {ACC_ICONS[a.key]}
                </svg>
              </span>

              <span className="cc-pill-label">{a.label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

/* =====================================================
   ICONES FEATURES
===================================================== */

const icons = {
  clients: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </>
  ),

  commandes: (
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="4" r="1.6" />
      <circle cx="12" cy="20" r="1.6" />
      <circle cx="4" cy="12" r="1.6" />
      <circle cx="20" cy="12" r="1.6" />
      <circle cx="6.3" cy="6.3" r="1.6" />
      <circle cx="17.7" cy="17.7" r="1.6" />
      <circle cx="17.7" cy="6.3" r="1.6" />
      <circle cx="6.3" cy="17.7" r="1.6" />
    </>
  ),

  encaissements: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1" />
      <path d="M12 16v4M8 20h8" />
      <path d="M7 12l3-3 3 2 4-4" />
    </>
  ),

  tarifs: (
    <>
      <path d="M20 12v8H4v-8" />
      <path d="M2 7h20v5H2z" />
      <path d="M12 7v13" />
      <path d="M12 7S9 7 8 5s1-3 2-3 2 2 2 5zM12 7s3 0 4-2-1-3-2-3-2 2-2 5z" />
    </>
  ),

  reserves: (
    <>
      <path d="M12 3l8 4-8 4-8-4 8-4z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 17l8 4 8-4" />
    </>
  ),

  autres: (
    <>
      <path d="M7 4h10l-1 6H8L7 4z" />
      <path d="M12 10v4" />
      <path d="M8 20h8M10 14h4v6h-4z" />
    </>
  ),
};

const Icon = ({ name }) => (
  <svg
    className="feature-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {icons[name]}
  </svg>
);

/* =====================================================
   FONCTIONNALITÉS
===================================================== */

const FEATURES = [
  {
    icon: "clients",
    title: "Gestion des clients",
    items: [
      "Nombre de clients et de catégories clients illimité",
      "Nombre de clients et de catégories clients illimité",
      "Compte prépayé ou abonnement",
      'Clients "Chomeurs"',
    ],
  },
  {
    icon: "commandes",
    title: "Gestion des commandes",
    items: [
      "Saisie ou complétion sur un compte enregistré",
      "Impression des tickets client et tickets de marquage",
      "Possibilité de mises en attente de plusieurs articles",
      "Choix de la date et de l'heure de retrait",
    ],
  },
  {
    icon: "encaissements",
    title: "Gestion des encaissements",
    items: [
      "Liaison avec Terminal de Paiement bancaire",
      "Possibilité de paiements partiels ou multiples",
      "Gestion des monnaies étrangères",
      "Gestion du fond de caisse",
    ],
  },
  {
    icon: "tarifs",
    title: "Gestion des tarifs",
    items: [
      "20 familles de tarifs et sous familles illimitées",
      "Prix de vente par jour et par horaire tarifaire",
      "Impression de tarifs",
      "Articles au poids ou au m²",
    ],
  },
  {
    icon: "reserves",
    title: "Gestion des réserves",
    items: [
      "Possibilité de prendre des photos aux enlèvements",
      "Réserves automatiques par famille de produits",
      "Numéros de messages SMS/Mails",
      "Constats pré-établis",
    ],
  },
  {
    icon: "autres",
    title: "Autres fonctionnalités",
    items: [
      "Branche multi-lieux lorsque le serveur est en local",
      "Facturation immédiate ou différée au choix",
      "Statistiques évolutives sur la période de votre choix",
      "Pilotage automatique du convoyeur",
    ],
  },
];

/* =====================================================
   PAGE GESTICLEAN
===================================================== */

export default function Gesticlean() {
  const [active, setActive] = useState(3);
  const [openService, setOpenService] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % DEVICES.length),
      3500
    );

    return () => clearInterval(id);
  }, []);

  const visibleDevices = [0, 1, 2, 3].map(
    (i) => DEVICES[(active + i) % DEVICES.length]
  );

  const half = Math.ceil(CLIENT_LOGOS.length / 2);
  const rowOne = CLIENT_LOGOS.slice(0, half);
  const rowTwo = CLIENT_LOGOS.slice(half);

  return (
    <main className="page gesticlean">
      <style>{MARQUEE_CSS}</style>
      <style>{CONNECT_CSS}</style>

      {/* HERO */}
      <section
        className="gc-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="gc-hero-overlay" />
        <div className="gc-hero-glow gc-hero-glow-left" />
        <div className="gc-hero-glow gc-hero-glow-right" />

        <div className="gc-hero-container">
          <div className="gc-hero-content">
            <div className="gc-hero-badge">
              <span className="gc-hero-dot" />
              PRESSING &amp; BLANCHISSERIE
            </div>

            <h1>
              SOLUTION    LOGICIELLE   
              <span> POUR PRESSING</span>
              &amp; BLANCHISSERIE
            </h1>

            <p>
              Gérez votre Pressing en toute simplicité avec le logiciel
              métier GESTICLEAN dédié aux teinturiers professionnels.
              Optimisez vos commandes, votre suivi clientèle et votre
              organisation quotidienne.
            </p>

            <div className="gc-hero-actions">
              <a href="#gc-services" className="gc-btn-primary">
                Découvrir nos services
                <span>→</span>
              </a>
            </div>

            <div className="gc-hero-footer">
              <span>
                <b>✓</b>
                Gestion des commandes
              </span>

              <span>
                <b>✓</b>
                Suivi clientèle
              </span>

              <span>
                <b>✓</b>
                Connexion convoyeur
              </span>
            </div>
          </div>
        </div>

        <div className="gc-hero-floating">
          <span>✦</span>
          Innovation · Simplicité · Performance
        </div>
      </section>

      {/* INTRO */}
      <section className="gc-intro">
        <span className="gc-eyebrow">GESTICLEAN</span>

        <h2>
          Logiciel GESTICLEAN spécial <em>Pressing</em>
        </h2>

        <p>
          Un logiciel de caisse spécialisé pour les PRESSINGS.
          <br />
          Vous recherchez un logiciel préformaté spécialement écrit pour vous ?
          Nous avons la solution. Gesticlean logiciel leader du marché, il permet
          un excellent suivi clientèle et assurant des détails d'inclusions de vos
          linges, impression des tickets Laudry, gestion et édition des factures
          clients… avec automatique des SMS, connexion avec le convoyeur et
          partouche livraison et retour d'articles Pressing.
        </p>
      </section>

      {/* PRODUIT */}
      <section className="gc-product">
        <div className="gc-product-img">
          <img src={posImg} alt="Poste de caisse GestiClean" />
          <span className="gc-image-decoration" />
        </div>

        <div className="gc-product-text">
          <span className="gc-eyebrow">SOLUTION PRESSING</span>

          <h3>
            Une solution complète pour <em>Pressing &amp; Blanchisserie</em>
          </h3>

          <p>
            GestiClean est un logiciel commercial tactile CLIENT/SERVEUR sur PC
            ou MAGIC, conçu et créé spécifiquement pour tout type de Pressing.
            GestiClean vous permet de gérer facilement le dépôt et la livraison
            des commandes de vos clients avec une interface intuitive tout en
            gardant un suivi détaillé de chaque transaction en caisse.
          </p>

          <p>
            Gestion des outils intégrants spécifiques et professionnels.
          </p>

          <ul>
            <li>
              Gestion des outils intégrants particulier et professionnel, Ajout de
              chemins sur articles, Rangement des commandes sur convoyeur,
              Recouvrement partiel Pressing de production, Facilitation des
              commandes.
            </li>

            <li>
              Suivi d'activité, Gestion fournisseurs, En-tête et Réseaux, Etats
              basés par mail, Boutique en produits à la vente, Enregistrement des
              litiges, Facilitation Mail rétine SMS aux clients.
            </li>
          </ul>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="gc-features">
        <div className="gc-section-heading">
          <span className="gc-eyebrow">FONCTIONNALITÉS</span>
          <h2>Une gestion complète de votre pressing</h2>
          <span className="gc-section-line" />
          <p>
            Tous les outils nécessaires pour gérer votre activité au quotidien.
          </p>
        </div>

        <div className="gc-features-grid">
          {FEATURES.map((f) => (
            <article className="gc-feature-card" key={f.title}>
              <div className="gc-feature-icon">
                <Icon name={f.icon} />
              </div>

              <h4>{f.title}</h4>

              <ul>
                {f.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* CONVOYEUR */}
      <section className="gc-conveyor">
        <div className="gc-conveyor-img">
          <img src={convoyeurImg} alt="Convoyeur de pressing" loading="lazy" />
        </div>

        <div className="gc-conveyor-text">
          <span className="gc-eyebrow">CONVOYEUR</span>

          <h3>
            <em>Connexion Convoyeur</em>
          </h3>

          <p>
            Les convoyeurs pour pressing représentent une solution optimale,
            qui offre de nombreux avantages pratiques, notamment, avec des
            applications dans différents secteurs des métiers du pressing et
            blanchisserie. GESTICLEAN réalise l'interface avec tous les
            principaux convoyeurs, vous réaliser la fluentissure de convoyeur
            fournissant les éléments permettant de développer le Système.
          </p>
        </div>
      </section>

      {/* ACCESSOIRES */}
      <ConnectedCash />

      {/* CONFIANCE */}
      <section className="gc-trust">
        <div className="gc-section-heading">
          <span className="gc-eyebrow">NOS CLIENTS</span>
          <h2>Soyez parmi ceux qui nous font confiance</h2>
          <span className="gc-section-line" />
        </div>

        <p className="clients-count">
          Plus de {CLIENT_LOGOS.length} établissements utilisent déjà nos
          solutions au quotidien.
        </p>

        <div className="clients-rows">
          <MarqueeRow
            logos={rowOne}
            speed={Math.max(30, rowOne.length * 2.2)}
          />

          <MarqueeRow
            logos={rowTwo}
            reverse
            speed={Math.max(30, rowTwo.length * 2.4)}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="gc-services" id="gc-services">
        <div className="gc-services-container">
          <div className="gc-services-img">
            <img
              src={servicesImg}
              alt="Support PC MAROC"
              loading="lazy"
            />
          </div>

          <div className="gc-services-text">
            <span className="gc-eyebrow">NOS SERVICES</span>

            <h2>
              Les services PC MAROC, plus qu'une{" "}
              <span>simple hotline</span>
            </h2>

            <p className="gc-services-intro">
              Nous croyons en la force du capital humain. Notre équipe
              talentueuse est le pilier de notre succès, apportant expertise,
              passion et dévouement à chaque projet.
            </p>

            <ul className="gc-accordion">
              {SERVICES.map((s, i) => (
                <li
                  key={s.title}
                  className={i === openService ? "open" : ""}
                >
                  <button
                    className="gc-acc-head"
                    onClick={() =>
                      setOpenService(i === openService ? -1 : i)
                    }
                    aria-expanded={i === openService}
                  >
                    <span className="gc-acc-sign">
                      {i === openService ? "−" : "+"}
                    </span>

                    {s.title}
                  </button>

                  {i === openService && s.text && (
                    <p className="gc-acc-body">{s.text}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

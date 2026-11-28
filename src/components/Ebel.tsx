import React, { useState } from "react";
import "./Ebel.css";

import heroImg from "@/assets/ebel.jpeg";
import rdvImg from "@/assets/1ebel.jpeg";
import caImg from "@/assets/2ebel.jpeg";
import gestionImg from "@/assets/3ebel.jpeg";
import devicesImg from "@/assets/4ebel.jpeg";
import wheelCenterImg from "@/assets/easy.jpeg";
import supportImg from "@/assets/supportt.jpeg";

/* =====================================================
   LOGOS CLIENTS
===================================================== */
const logoModules = import.meta.glob(
  "@/assets/ebel/*.{png,jpg,jpeg,webp,svg}",
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
   MARQUEE
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
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
  transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
}
.client-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.10);
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
  .clients-track { animation: none !important; }
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
   BLOCS
===================================================== */
const BLOCKS = [
  {
    title: (
      <>
        REMPLISSEZ VOTRE AGENDA
        <br />
        AVEC DES RDV CONFIRMÉS
      </>
    ),
    text: "Boostez vos réservations, fidélisez facilement votre clientèle et gérez facilement votre planning grâce à un agenda simple et intuitif, connecté à vos équipes, cabines et équipements.",
    img: rdvImg,
    reverse: false,
  },
  {
    title: (
      <>
        BOOSTEZ VOTRE
        <br />
        CHIFFRE D'AFFAIRE
      </>
    ),
    text: "Augmentez vos ventes avec les Chèques et Bons cadeaux personnalisés et envoyez-les en format numérique via WhatsApp avec votre logiciel EasyBeauty.",
    img: caImg,
    reverse: true,
  },
  {
    title: (
      <>
        GAGNEZ DU TEMPS
        <br />
        DANS VOTRE GESTION
      </>
    ),
    text: "Pourquoi jongler avec les plannings des employés, cabines et équipements ? EASYBEAUTY prend en compte automatiquement les compétences de votre personnel et les disponibilités de vos cabines pour placer vos rendez-vous de la manière la plus optimisée qui soit !",
    img: gestionImg,
    reverse: false,
  },
];

/* =====================================================
   ICONES
===================================================== */
const Icon = ({ name }) => {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4M8 14h2M12 14h2M8 17h2" />
        </svg>
      );

    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.2" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M17 14c2.5 0 4 1.8 4 4.5" />
        </svg>
      );

    case "box":
      return (
        <svg {...common}>
          <path d="M12 3l8 4v10l-8 4-8-4V7l8-4z" />
          <path d="M4 7l8 4 8-4M12 11v10" />
        </svg>
      );

    case "heart":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.2" />
          <path d="M3 20c0-3.3 2.7-6 6-6 1 0 2 .2 2.8.7" />
          <path d="M17 20s-4-2.6-4-5.2a2.2 2.2 0 014-1.3 2.2 2.2 0 014 1.3C21 17.4 17 20 17 20z" />
        </svg>
      );

    case "chart":
      return (
        <svg {...common}>
          <path d="M4 20V4M4 20h16" />
          <rect x="7" y="12" width="3" height="6" />
          <rect x="12" y="8" width="3" height="10" />
          <rect x="17" y="5" width="3" height="13" />
        </svg>
      );

    case "doc":
    default:
      return (
        <svg {...common}>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v4h4M9 12h6M9 16h6" />
        </svg>
      );
  }
};

/* =====================================================
   DONNEES
===================================================== */
const FEATURES = [
  { icon: "calendar", label: "Planning et RDV" },
  { icon: "users", label: "Gestion des équipes" },
  { icon: "box", label: "Stocks et produits" },
  { icon: "heart", label: "Fidélité clients" },
  { icon: "chart", label: "Statistiques et analyses" },
  { icon: "doc", label: "Documents comptables" },
];

const TOOLS = [
  {
    title: "Caisse et encaissement",
    text: "Encaissez vite, avec tous les modes de paiement.",
  },
  {
    title: "Gestion des prestations",
    text: "Soins, forfaits et tarifs gérés en quelques clics.",
  },
  {
    title: "Planning intelligent",
    text: "Rendez-vous, cabines et équipes parfaitement optimisés.",
  },
  {
    title: "Fidélité et promotions",
    text: "Cartes, points et offres personnalisées.",
  },
  {
    title: "Reporting et analyses",
    text: "Chiffre d'affaires et performances en temps réel.",
  },
  {
    title: "Multi-utilisateurs",
    text: "Droits d'accès par poste et par employé.",
  },
  {
    title: "Gestion des stocks",
    text: "Produits, entrées / sorties et alertes de stock.",
  },
];

/* =====================================================
   COMPOSANT PRINCIPAL
===================================================== */
export default function Beaute() {
  const half = Math.ceil(CLIENT_LOGOS.length / 2);
  const rowOne = CLIENT_LOGOS.slice(0, half);
  const rowTwo = CLIENT_LOGOS.slice(half);

  const [activeService, setActiveService] = useState(0);

  return (
    <main className="page">
      <style>{MARQUEE_CSS}</style>

      {/* =====================================================
          HERO — DESIGN SYSTEM PC MAROC
      ===================================================== */}
      <section
        id="accueil"
        className="eb-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="eb-hero-overlay" />

        <div className="eb-hero-glow eb-hero-glow-left" />
        <div className="eb-hero-glow eb-hero-glow-right" />

        <div className="eb-hero-container">
          <div className="eb-hero-content">

            <div className="eb-hero-badge">
              <span className="eb-hero-dot" />
              BEAUTÉ &amp; BIEN-ÊTRE
            </div>

            <h1>
              LOGICIEL DE CAISSE POUR
              <span>
                SALONS DE COIFFURE
              </span>
              &amp; INSTITUTS DE BEAUTÉ
            </h1>

            <p>
              Découvrez un outil moderne et innovant pour optimiser votre
              chiffre d'affaires, gérer vos stocks et vos prestations,
              proposer un programme de fidélité et simplifier la gestion
              quotidienne de votre salon.
            </p>

            <div className="eb-hero-actions">
              <a href="#demo" className="eb-btn-primary">
                Demander une démo
                <span>→</span>
              </a>
            </div>

            <div className="eb-hero-footer">
              <span>
                <span className="eb-footer-icon">✓</span>
                Gestion complète de votre salon
              </span>

              <span>
                <span className="eb-footer-icon">✓</span>
                Planning et rendez-vous intelligents
              </span>

              <span>
                <span className="eb-footer-icon">✓</span>
                Fidélisation et suivi des clients
              </span>
            </div>
          </div>
        </div>

        <div className="eb-hero-floating">
          <span>✦</span>
          Innovation · Simplicité · Performance
        </div>
      </section>

      {/* =====================================================
          BLOCS ALTERNES
      ===================================================== */}
      <section className="eb-blocks-section">
        {BLOCKS.map((b, i) => (
          <div
            className={`bb-row ${b.reverse ? "reverse" : ""}`}
            key={i}
          >
            <div className="bb-img">
              <img src={b.img} alt="" loading="lazy" />
            </div>

            <div className="bb-text">
              <span className="section-eyebrow">
                BEAUTÉ &amp; BIEN-ÊTRE
              </span>

              <h3>{b.title}</h3>

              <p>{b.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* =====================================================
          FONCTIONNALITES
      ===================================================== */}
      <section className="bb-features" id="solutions">
        <div className="bb-features-img">
          <img
            src={devicesImg}
            alt="EasyBeauty sur plusieurs écrans"
            loading="lazy"
          />
        </div>

        <div className="bb-features-text">
          <span className="section-eyebrow">
            FONCTIONNALITÉS
          </span>

          <h3>
            DÉCOUVREZ QUELQUES FONCTIONNALITÉS DISPONIBLES SUR LE
            LOGICIEL EASYBEAUTY
          </h3>

          <div className="feat-grid">
            {FEATURES.map((f) => (
              <div className="feat-card" key={f.label}>
                <span className="feat-icon">
                  <Icon name={f.icon} />
                </span>

                <span className="feat-label">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUTILS (design sombre + orange)
      ===================================================== */}
      <section className="tl-section">
        <div className="tl-glow tl-glow-one" />
        <div className="tl-glow tl-glow-two" />

        <div className="tl-container">
          <div className="tl-head">
            <span className="tl-eyebrow">
              <span className="tl-dot" />
              VOTRE SOLUTION
            </span>

            <h2>
              Les outils dont <span>vous avez besoin</span>
            </h2>

            <p>Les fonctionnalités bien pensées pour développer votre activité.</p>
          </div>

          <div className="tl-layout">
            {/* Visuel */}
            <div className="tl-visual">
              <div className="tl-visual-ring" />

              <div className="tl-visual-frame">
                <img src={wheelCenterImg} alt="EasyBeauty" loading="lazy" />
              </div>

              <div className="tl-chip tl-chip-top">
                <strong>7</strong>
                <span>outils intégrés</span>
              </div>

              <div className="tl-chip tl-chip-bottom">
                <strong>1</strong>
                <span>seule solution</span>
              </div>
            </div>

            {/* Liste */}
            <ul className="tl-list">
              {TOOLS.map((tool, i) => (
                <li className="tl-item" key={tool.title}>
                  <span className="tl-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="tl-item-body">
                    <h4>{tool.title}</h4>
                    <p>{tool.text}</p>
                  </div>

                  <span className="tl-arrow" aria-hidden="true">→</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONFIANCE CLIENTS
      ===================================================== */}
      <section className="trust">
        <div className="section-heading">
          <span className="section-eyebrow">
            NOS CLIENTS
          </span>

          <h2>Soyez parmi ceux qui nous font confiance</h2>

          <div className="section-line" />
        </div>

        <p className="clients-count">
          Plus de {CLIENT_LOGOS.length} établissements utilisent déjà
          nos solutions au quotidien.
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

      {/* =====================================================
          SERVICES PC MAROC
      ===================================================== */}
      <section className="pc-services-section">
        <div className="pc-services-container">

          <div className="pc-services-img">
            <img
              src={supportImg}
              alt="Support PC Maroc"
              loading="lazy"
            />
          </div>

          <div className="pc-services-content">
            <span className="section-eyebrow">
              NOS SERVICES
            </span>

            <h2>
              Les services PC MAROC, plus qu'une simple Hotline
            </h2>

            <p className="pc-services-desc">
              Nous croyons en la force du capital humain. Notre équipe
              talentueuse est le pilier de notre succès, apportant
              expertise, passion et dévouement à chaque projet.
            </p>

            <div className="service-accordion">

              <div
                className={`service-item ${
                  activeService === 0 ? "active" : ""
                }`}
              >
                <button
                  className="service-header"
                  onClick={() =>
                    setActiveService(activeService === 0 ? null : 0)
                  }
                  aria-expanded={activeService === 0}
                >
                  <span>Conseil et Formation</span>
                  <span>{activeService === 0 ? "−" : "+"}</span>
                </button>

                {activeService === 0 && (
                  <div className="service-body">
                    Notre équipe est à même de vous accompagner dans
                    votre projet. Écouter, détecter vos besoins et
                    analyser pour vous proposer la meilleure solution
                    en terme de délai et de budget.
                  </div>
                )}
              </div>

              <div
                className={`service-item ${
                  activeService === 1 ? "active" : ""
                }`}
              >
                <button
                  className="service-header"
                  onClick={() =>
                    setActiveService(activeService === 1 ? null : 1)
                  }
                  aria-expanded={activeService === 1}
                >
                  <span>Installation et paramétrage</span>
                  <span>{activeService === 1 ? "−" : "+"}</span>
                </button>

                {activeService === 1 && (
                  <div className="service-body">
                    PC MAROC dispose d’une équipe d’installation,
                    chargée d’assurer un service de maintenance continu
                    pour notre clientèle : service rapide, tranquillité
                    d’esprit, disponibilité maximale.
                  </div>
                )}
              </div>

              <div
                className={`service-item ${
                  activeService === 2 ? "active" : ""
                }`}
              >
                <button
                  className="service-header"
                  onClick={() =>
                    setActiveService(activeService === 2 ? null : 2)
                  }
                  aria-expanded={activeService === 2}
                >
                  <span>Support Technique</span>
                  <span>{activeService === 2 ? "−" : "+"}</span>
                </button>

                {activeService === 2 && (
                  <div className="service-body">
                    Le Support Technique de PC MAROC est un service
                    qui vous permet d’être accompagné et initié à la
                    bonne utilisation de votre solution beauté et
                    bien-être de manière optimale et à chaque évolution
                    de votre installation.
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA FINAL
      ===================================================== */}
      <section className="cta" id="demo">
        <div className="cta-content">
          <span className="cta-label">
            VOTRE PROJET COMMENCE ICI
          </span>

          <h2>
            Prêt à digitaliser
            <br />
            votre salon ?
          </h2>

          <span className="cta-sep" />

          <p>
            Parlons de votre projet et découvrez la solution adaptée
            à votre activité.
          </p>

          <a href="#contact" className="btn btn-white">
            Demander une démo
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>

    </main>
  );
}
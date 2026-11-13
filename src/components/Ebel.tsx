import React from "react";
import "./Ebel.css";

/* Images : adapte les chemins/noms à tes vrais fichiers */
import heroImg from "@/assets/ebel.jpeg";
import rdvImg from "@/assets/1ebel.jpeg";
import caImg from "@/assets/2ebel.jpeg";
import gestionImg from "@/assets/3ebel.jpeg";
import devicesImg from "@/assets/4ebel.jpeg";
import wheelCenterImg from "@/assets/easy.jpeg";

/* =====================================================
   LOGOS CLIENTS
   -> Mets les logos dans : src/assets/ebel/
      (png, jpg, webp, svg) : ils sont chargés automatiquement.
   -> Si le dossier est vide, 24 placeholders s'affichent.
===================================================== */
const logoModules = import.meta.glob(
  "@/assets/ebel/*.{png,jpg,jpeg,webp,svg}",
  { eager: true, import: "default" }
);

const REAL_LOGOS = Object.entries(logoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const file = path.split("/").pop() || "client";
    return { name: file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "), src };
  });

const PLACEHOLDER_LOGOS = Array.from({ length: 24 }, (_, i) => ({
  name: `Client ${String(i + 1).padStart(2, "0")}`,
}));

const CLIENT_LOGOS = REAL_LOGOS.length ? REAL_LOGOS : PLACEHOLDER_LOGOS;

const MARQUEE_CSS = `
.clients-marquee {
  overflow: hidden;
  padding: 8px 0;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}
.clients-track {
  display: flex;
  width: max-content;
  animation: clients-left var(--clients-speed, 60s) linear infinite;
}
.clients-track.reverse { animation-name: clients-right; }
.clients-marquee:hover .clients-track { animation-play-state: paused; }

@keyframes clients-left  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
@keyframes clients-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }

.client-card {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 84px;
  margin: 0 10px;
  padding: 0 20px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
  transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
}
.client-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
  border-color: #f26522;
}
.client-card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(1);
  opacity: .7;
  transition: filter .3s ease, opacity .3s ease;
}
.client-card:hover img { filter: none; opacity: 1; }
.client-card .client-ph {
  font-size: 14px;
  font-weight: 700;
  color: #9ca3af;
  transition: color .3s ease;
}
.client-card:hover .client-ph { color: #f26522; }

.clients-rows { display: grid; gap: 12px; margin-top: 36px; }
.clients-count { margin-top: 12px; color: #64748b; font-size: 15px; text-align: center; }

@media (max-width: 640px) {
  .client-card { width: 140px; height: 72px; margin: 0 8px; }
}
@media (prefers-reduced-motion: reduce) {
  .clients-track { animation: none !important; }
}
`;

function MarqueeRow({ logos, reverse = false, speed = 60 }) {
  // On duplique la liste pour une boucle sans coupure
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
              <img src={l.src} alt={l.name} loading="lazy" decoding="async" />
            ) : (
              <span className="client-ph">{l.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

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

/* Icônes simples (SVG) */
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
          <path d="M3 20c0-3.3 2.7-6 6-6 1 0 2 .2 2.800.7" />
          <path d="M17 20s-4-2.600-4-5.200a2.200 2.200 0 014-1.300 2.200 2.200 0 014 1.300C21 17.400 17 20 17 20z" />
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

const FEATURES = [
  { icon: "calendar", label: "Planning et RDV" },
  { icon: "users", label: "Gestion des équipes" },
  { icon: "box", label: "Stocks et produits" },
  { icon: "heart", label: "Fidélité clients" },
  { icon: "chart", label: "Statistiques et analyses" },
  { icon: "doc", label: "Documents comptables" },
];

const WHEEL = [
  "Caisse et encaissement",
  "Gestion des prestations",
  "Planning intelligent",
  "Fidélité et promotions",
  "Reporting et analyses",
  "Multi-utilisateurs",
  "Gestion des stocks",
];

export default function Beaute() {
  const R = 175; // rayon du cercle
  const N = 50; // demi-taille d'un nœud

  /* 2 lignes de logos, comme sur la page Gesticlean */
  const half = Math.ceil(CLIENT_LOGOS.length / 2);
  const rowOne = CLIENT_LOGOS.slice(0, half);
  const rowTwo = CLIENT_LOGOS.slice(half);

  return (
    <div className="page">
      <style>{MARQUEE_CSS}</style>

      {/* HERO */}
      <header
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-inner">
          <span className="eyebrow">BEAUTÉ &amp; BIEN-ÊTRE</span>
          <h1>
            LOGICIEL DE CAISSE POUR SALONS DE COIFFURE &amp; INSTITUTS DE
            BEAUTÉ
          </h1>
          <p>
            Découvrez un outil moderne et innovant pour optimiser votre
            chiffre d'affaires, gérer vos stocks et vos prestations, proposer
            un programme de fidélité et simplifier la gestion quotidienne de
            votre salon.
          </p>
          <a href="#demo" className="btn btn-orange">
            Demander une démo <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      {/* 3 BLOCS ALTERNÉS */}
      {BLOCKS.map((b, i) => (
        <section className={`bb-row ${b.reverse ? "reverse" : ""}`} key={i}>
          <div className="bb-img">
            <img src={b.img} alt="" />
          </div>
          <div className="bb-text">
            <span className="eyebrow">BEAUTÉ &amp; BIEN-ÊTRE</span>
            <h3>{b.title}</h3>
            <p>{b.text}</p>
          </div>
        </section>
      ))}

      {/* FONCTIONNALITÉS */}
      <section className="bb-features">
        <div className="bb-features-img">
          <img src={devicesImg} alt="EasyBeauty sur plusieurs écrans" />
        </div>
        <div className="bb-features-text">
          <span className="eyebrow">FONCTIONNALITÉS</span>
          <h3>
            DÉCOUVREZ QUELQUES FONCTIONNALITÉS DISPONIBLES SUR LE LOGICIEL
            EASYBEAUTY
          </h3>
          <div className="feat-grid">
            {FEATURES.map((f) => (
              <div className="feat-card" key={f.label}>
                <span className="feat-icon">
                  <Icon name={f.icon} />
                </span>
                <span className="feat-label">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTILS (roue) */}
      <section className="bb-tools">
        <h2 className="tools-title">
          <span className="line" />
          Les outils dont vous avez besoin
          <span className="line" />
        </h2>
        <p className="bb-tools-sub">
          Les fonctionnalités bien pensées pour développer votre activité.
        </p>

        <div className="wheel">
          <span className="wheel-ring" />
          <div className="wheel-center">
            <img src={wheelCenterImg} alt="" />
          </div>
          {WHEEL.map((label, i) => {
            const angle = (i * 360) / WHEEL.length - 90;
            const x = Math.cos((angle * Math.PI) / 180) * R;
            const y = Math.sin((angle * Math.PI) / 180) * R;
            return (
              <div
                className="wheel-node"
                key={label}
                style={{
                  left: `calc(50% + ${x}px - ${N}px)`,
                  top: `calc(50% + ${y}px - ${N}px)`,
                }}
              >
                <strong>{i + 1}</strong>
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONFIANCE */}
      <section className="trust">
        <h2>Soyez parmi ceux qui nous font confiance</h2>
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

      {/* BANNIÈRE CTA */}
      <section className="cta" id="demo">
        <h2>
          Prêt à digitaliser
          <br />
          votre salon ?
        </h2>
        <span className="cta-sep" />
        <p>
          Parlons de votre projet et découvrez la solution adaptée à votre
          activité.
        </p>
        <a href="#contact" className="btn btn-white">
          Demander une démo <span aria-hidden>→</span>
        </a>
      </section>
    </div>
  );
}
import React, { useState, useEffect } from "react";
import "./Gesticlean.css";

/* Images : adapte les chemins/noms à tes vrais fichiers */
import heroImg from "@/assets/bannpress.jpeg";
import posImg from "@/assets/hero-pressing.png";
import convoyeurImg from "@/assets/rang.jpeg";

/* Section Connexion (carrousel périphériques) */
import device1 from "@/assets/hero-pressing.png"; // terminal / caisse
import device2 from "@/assets/hero-pressing.png"; // imprimante étiquettes
import device3 from "@/assets/hero-pressing.png"; // imprimante ticket
import device4 from "@/assets/hero-pressing.png"; // terminal mobile
import device5 from "@/assets/hero-pressing.png";
import device6 from "@/assets/hero-pressing.png";

/* Section Nos services */
import servicesImg from "@/assets/supportt.jpeg";

/* Section "Une caisse connectée à vos accessoires"
   -> remplace par tes vraies photos (png fond transparent/blanc) */
import centerPos from "@/assets/hero-pressing.png"; // poste de caisse (centre)
import accConvoyeur from "@/assets/rang.jpeg"; // convoyeur
import accTicket from "@/assets/imp.jpeg"; // imprimante ticket
import accMarquage from "@/assets/marq.jpeg"; // imprimante de marquage
import accScanner from "@/assets/scann.jpeg"; // scanner
import accTiroir from "@/assets/tirr.jpeg"; // tiroir-caisse

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
  { title: "Installation et paramétrage", text: "" },
  { title: "Support Technique", text: "" },
];

/* =====================================================
   HERO : supprime tout voile / dabab blanc hérité
   d'autres pages (Innoshop.css, Ebel.css, ...)
===================================================== */
const HERO_CSS = `
.page.gesticlean .hero::before,
.page.gesticlean .hero::after,
.page.gesticlean .hero-inner::before,
.page.gesticlean .hero-inner::after {
  content: none !important;
  display: none !important;
  background: none !important;
}
.page.gesticlean .hero {
  background-color: #555;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: normal !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  filter: none !important;
  opacity: 1 !important;
}
.page.gesticlean .hero-inner {
  background: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  filter: none !important;
  box-shadow: none !important;
  border: 0 !important;
}
`;

/* =====================================================
   LOGOS CLIENTS
   -> Mets les logos dans : src/assets/gesticlean/
      (png, jpg, webp, svg) : ils sont chargés automatiquement.
   -> Si le dossier est vide, 24 placeholders s'affichent.
===================================================== */
const logoModules = import.meta.glob(
  "@/assets/gesticlean/*.{png,jpg,jpeg,webp,svg}",
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
  filter: none;
  opacity: 1;
  transition: transform .3s ease;
}
.client-card:hover img { filter: none; opacity: 1; transform: scale(1.05); }
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

/* =====================================================
   SECTION : Une caisse connectée à vos accessoires
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
  marquage: <path d="M4 5v14M7 5v14M11 5v14M14 5v14M18 5v14M20 5v14" />,
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
  { key: "convoyeur", label: "Convoyeur", img: accConvoyeur, x: 25, y: 18, pillX: 0.5, pillY: 13 },
  { key: "ticket", label: "Imprimante\nticket", img: accTicket, x: 25, y: 48, pillX: -0.5, pillY: 42 },
  { key: "marquage", label: "Imprimante\nde marquage", img: accMarquage, x: 25, y: 78, pillX: -0.5, pillY: 72 },
  { key: "scanner", label: "Scanner", img: accScanner, x: 75, y: 23, pillX: 84.5, pillY: 18 },
  { key: "tiroir", label: "Tiroir-caisse", img: accTiroir, x: 75, y: 65, pillX: 84.5, pillY: 60 },
];

const CONNECT_CSS = `
.cc-section {
  position: relative;
  overflow: hidden;
  background: #fff;
  padding: 64px 20px 72px;
  text-align: center;
}
.cc-section::before, .cc-section::after {
  content: "";
  position: absolute;
  width: 280px; height: 280px;
  background: linear-gradient(135deg, #ff9a3c, #f26522);
  border-radius: 50%;
  z-index: 0;
}
.cc-section::before { top: -170px; left: -150px; }
.cc-section::after  { bottom: -170px; right: -150px; }

.cc-title {
  position: relative; z-index: 1;
  margin: 0;
  font-size: clamp(30px, 5vw, 56px);
  line-height: 1.05;
  font-weight: 800;
  color: #0f1442;
  letter-spacing: -1px;
}
.cc-bar {
  position: relative; z-index: 1;
  display: block;
  width: 150px; height: 3px;
  background: #f26522;
  margin: 22px auto;
  border-radius: 2px;
}
.cc-sub {
  position: relative; z-index: 1;
  margin: 0 auto;
  max-width: 720px;
  font-size: clamp(16px, 2vw, 24px);
  line-height: 1.35;
  color: #1f2a44;
}

.cc-stage {
  position: relative; z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 28px auto 0;
  aspect-ratio: 1600 / 640;
}
.cc-lines {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  pointer-events: none;
}
.cc-lines path { fill: none; stroke: #f26522; stroke-width: 3; stroke-linecap: round; }
.cc-lines circle { fill: #f26522; }

.cc-center {
  position: absolute;
  left: 34%; top: 3%;
  width: 34%;
}
.cc-center img { width: 100%; display: block; position: relative; z-index: 2; }
.cc-podium {
  position: absolute;
  left: 50%; bottom: -3%;
  transform: translateX(-50%);
  width: 105%; height: 22%;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, #fff 40%, #ffe3cf 70%, #ffb078 100%);
  box-shadow: 0 0 30px rgba(242, 101, 34, .35);
  z-index: 1;
}

.cc-circle {
  position: absolute;
  width: 11.9%;
  aspect-ratio: 1 / 1;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #fff;
  border: 2px solid #ffd2b0;
  box-shadow: 0 6px 20px rgba(242, 101, 34, .15);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
  z-index: 2;
}
.cc-circle img { width: 80%; height: 80%; object-fit: contain; }

.cc-pill {
  position: absolute;
  display: flex; align-items: center; gap: 10px;
  padding: 6px 22px 6px 6px;
  background: #fff;
  border: 2px solid #ffd2b0;
  border-radius: 999px;
  box-shadow: 0 6px 18px rgba(15, 20, 66, .08);
  z-index: 3;
  text-align: left;
  white-space: pre-line;
}
.cc-pill-icon {
  flex-shrink: 0;
  width: clamp(34px, 4.3vw, 52px);
  height: clamp(34px, 4.3vw, 52px);
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9a3c, #f26522);
  display: flex; align-items: center; justify-content: center;
}
.cc-pill-icon svg {
  width: 56%; height: 56%;
  fill: none; stroke: #fff; stroke-width: 1.8;
  stroke-linecap: round; stroke-linejoin: round;
}
.cc-pill-label {
  font-weight: 800;
  color: #0f1442;
  font-size: clamp(11px, 1.7vw, 22px);
  line-height: 1.1;
}

@media (max-width: 760px) {
  .cc-stage { aspect-ratio: auto; display: grid; gap: 14px; margin-top: 24px; justify-items: center; }
  .cc-lines, .cc-podium { display: none; }
  .cc-center { position: static; width: 80%; margin: 0 auto 8px; }
  .cc-circle { position: static; transform: none; width: 110px; }
  .cc-pill { position: static; }
  .cc-pill-label { font-size: 16px; }
  .cc-pill-icon { width: 40px; height: 40px; }
}
`;

function ConnectedCash() {
  return (
    <section className="cc-section">
      <h2 className="cc-title">
        Une caisse connectée
        <br />à vos accessoires
      </h2>
      <span className="cc-bar" />
      <p className="cc-sub">
        Une solution évolutive et parfaitement intégrée
        <br />à tous les équipements de votre point de vente.
      </p>

      <div className="cc-stage">
        {/* lignes + points de connexion */}
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

        {/* poste de caisse au centre */}
        <div className="cc-center">
          <img src={centerPos} alt="Poste de caisse GestiClean" />
          <span className="cc-podium" />
        </div>

        {/* accessoires */}
        {ACCESSORIES.map((a) => (
          <React.Fragment key={a.key}>
            <div className="cc-circle" style={{ left: `${a.x}%`, top: `${a.y}%` }}>
              <img src={a.img} alt={a.label.replace("\n", " ")} loading="lazy" />
            </div>
            <div className="cc-pill" style={{ left: `${a.pillX}%`, top: `${a.pillY}%` }}>
              <span className="cc-pill-icon">
                <svg viewBox="0 0 24 24">{ACC_ICONS[a.key]}</svg>
              </span>
              <span className="cc-pill-label">{a.label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

/* Icônes SVG simples (stroke orange) */
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

export default function Gesticlean() {
  const [active, setActive] = useState(3);
  const [openService, setOpenService] = useState(0);

  /* défilement automatique du carrousel */
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
    <div className="page gesticlean">
      <style>{MARQUEE_CSS}</style>
      <style>{CONNECT_CSS}</style>
      <style>{HERO_CSS}</style>

      {/* HERO */}
      <header
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-inner">
          <span className="hero-bar" />
          <h1>SOLUTION PRESSING</h1>
          <p>
            Gérez votre Pressing en toute simplicité avec le logiciel métier
            GESTICLEAN dédié aux teinturiers professionnels.
          </p>
        </div>
      </header>

      {/* INTRO */}
      <section className="intro">
        <span className="eyebrow">PRESSING &amp; BLANCHISSERIE</span>
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
      <section className="product">
        <div className="product-img">
          <button className="arrow left" aria-label="Précédent">‹</button>
          <img src={posImg} alt="Poste de caisse GestiClean" />
          <button className="arrow right" aria-label="Suivant">›</button>
        </div>
        <div className="product-text">
          <span className="eyebrow">PRESSING</span>
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
          <p>Gestion des outils intégrants spécifiques et professionnels.</p>
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

      {/* FONCTIONNALITES */}
      <section className="features">
        {FEATURES.map((f) => (
          <article className="feature-card" key={f.title}>
            <Icon name={f.icon} />
            <h4>{f.title}</h4>
            <ul>
              {f.items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* CONVOYEUR */}
      <section className="conveyor">
        <img src={convoyeurImg} alt="Convoyeur de pressing" />
        <div className="conveyor-text">
          <span className="eyebrow">CONVOYEUR</span>
          <h3>
            <em>Connexion Convoyeur</em>
          </h3>
          <p>
            Les convoyeurs pour pressing représentent une solution optimale, qui
            offre de nombreux avantages pratiques, notamment, avec des
            applications dans différents secteurs des métiers du pressing et
            blanchisserie. GESTICLEAN réalise l'interface avec tous les
            principaux convoyeurs, vous réaliser la fluentissure de convoyeur
            fournissant les éléments permettant de développer le Système.
          </p>
        </div>
      </section>

      {/* UNE CAISSE CONNECTEE A VOS ACCESSOIRES */}
      <ConnectedCash />

      {/* NOS SERVICES */}
      <section className="services">
        <div className="services-img">
          <span className="shape-orange" />
          <span className="shape-blue" />
          <img src={servicesImg} alt="Support PC MAROC" />
        </div>
        <div className="services-text">
          <span className="eyebrow eyebrow-bar">NOS SERVICES</span>
          <h2>
            Les services PC MAROC, plus qu'une{" "}
            <span className="hl">simple hotline</span>
          </h2>
          <p className="services-intro">
            Nous croyons en la force du capital humain. Notre équipe talentueuse
            est le pilier de notre succès, apportant expertise, passion et
            dévouement à chaque projet."
          </p>

          <ul className="accordion">
            {SERVICES.map((s, i) => (
              <li key={s.title} className={i === openService ? "open" : ""}>
                <button
                  className="acc-head"
                  onClick={() => setOpenService(i === openService ? -1 : i)}
                >
                  <span className="acc-sign">{i === openService ? "–" : "+"}</span>
                  {s.title}
                </button>
                {i === openService && s.text && (
                  <p className="acc-body">{s.text}</p>
                )}
              </li>
            ))}
          </ul>
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
    </div>
  );
}
import React, { useState, useEffect } from "react";
import "./Gesticlean.css";

/* Images : adapte les chemins/noms à tes vrais fichiers */
import heroImg from "@/assets/hero-pressing.png";
import posImg from "@/assets/hero-pressing.png";
import convoyeurImg from "@/assets/convoyeur.jpg";
import logoCapucine from "@/assets/hero-pressing.png";
import logoSequoia from "@/assets/hero-pressing.png";
import logoRetailWash from "@/assets/hero-pressing.png";
import logoHo from "@/assets/hero-pressing.png";
import logoAquologie from "@/assets/hero-pressing.png";

/* Section Connexion (carrousel périphériques) */
import device1 from "@/assets/hero-pressing.png"; // terminal / caisse
import device2 from "@/assets/hero-pressing.png"; // imprimante étiquettes
import device3 from "@/assets/hero-pressing.png"; // imprimante ticket
import device4 from "@/assets/hero-pressing.png"; // terminal mobile
import device5 from "@/assets/hero-pressing.png";
import device6 from "@/assets/hero-pressing.png";

/* Section Nos services */
import servicesImg from "@/assets/hero-pressing.png";

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

const LOGOS = [
  { name: "Capucine", src: logoCapucine },
  { name: "Sequoïa", src: logoSequoia },
  { name: "Groupe Retail Wash", src: logoRetailWash },
  { name: "HO Pressing", src: logoHo },
  { name: "Aquologie", src: logoAquologie },
];

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

  return (
    <div className="page">
      {/* HERO */}
      <header
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${heroImg})`,
        }}
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

      {/* CONNEXION */}
      <section className="connexion">
        <span className="eyebrow">CONNEXION</span>
        <h2>Interfacée avec multiples périphériques</h2>
        <div className="devices">
          {visibleDevices.map((d, i) => (
            <img key={i} src={d.src} alt={d.alt} />
          ))}
        </div>
        <div className="dots">
          {DEVICES.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

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
        <div className="logos">
          {LOGOS.map((l) => (
            <img key={l.name} src={l.src} alt={l.name} />
          ))}
        </div>
      </section>
    </div>
  );
}
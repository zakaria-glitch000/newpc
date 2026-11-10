import React, { useState, useEffect } from "react";
import "./Ebel.css";

/* Section Connexion + Nos services */
import device1 from "@/assets/easy.jpeg";
import device2 from "@/assets/easy.jpeg";
import device3 from "@/assets/easy.jpeg";
import device4 from "@/assets/easy.jpeg";
import device5 from "@/assets/easy.jpeg";
import device6 from "@/assets/easy.jpeg";
import servicesImg from "@/assets/easy.jpeg";

const DEVICES = [
  { src: device1, alt: "Périphérique 1" },
  { src: device2, alt: "Périphérique 2" },
  { src: device3, alt: "Périphérique 3" },
  { src: device4, alt: "Périphérique 4" },
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

/* Images : adapte les chemins/noms à tes vrais fichiers */
import heroImg from "@/assets/easy.jpeg";
import posImg from "@/assets/easy.jpeg";
import rdvImg from "@/assets/easy.jpeg";
import caImg from "@/assets/easy.jpeg";
import gestionImg from "@/assets/easy.jpeg";
import devicesImg from "@/assets/easy.jpeg";
import wheelCenterImg from "@/assets/easy.jpeg";

import logo1 from "@/assets/easy.jpeg";
import logo2 from "@/assets/easy.jpeg";
import logo3 from "@/assets/easy.jpeg";
import logo4 from "@/assets/easy.jpeg";
import logo5 from "@/assets/easy.jpeg";

const LOGOS = [
  { name: "Partenaire 1", src: logo1 },
  { name: "Partenaire 2", src: logo2 },
  { name: "The Club", src: logo3 },
  { name: "Partenaire 4", src: logo4 },
  { name: "Partenaire 5", src: logo5 },
];

const BLOCKS = [
  {
    title: (
      <>
        REMPLISSEZ VOTRE AGENDA <em>AVEC DES RDV CONFIRMÉS</em>
      </>
    ),
    text: "Boostez vos réservations, depuis votre site internet, votre page Instagram, Facebook ou Google et prises votre centre planning avec qui vous le voulez. Réservez vos réservations par des exemples et envoyez vos nouveautés en lecture aux clients à l'agenda par horaires les plus actives. Vous voulez ? Un module a unique propriétaire de votre Beauté et l'utilisateur ne sont pas.",
    img: rdvImg,
    reverse: false,
  },
  {
    title: (
      <>
        BOOSTER VOTRE <em>CHIFFRE D'AFFAIRE</em>
      </>
    ),
    text: "Augmentez vos tarifs en ouvrant la vente des Cadeaux et Bons cadeaux personnalisés et envoyez-les à vos clients numériques via WhatsApp avec votre logiciel EasyBeauty. Faites rapidement un boost de 30% de chiffre d'affaires ! Pour faire encore grimper les résultats de votre institut de beauté, proposez, à ses clients la solution des cartes FIDÉLITÉ pour les Abonnements et CUBES.",
    img: caImg,
    reverse: true,
  },
  {
    title: (
      <>
        GAGNEZ DU TEMPS DANS <em>VOTRE GESTION</em>
      </>
    ),
    text: "Pourquoi continuer à jongler avec les planning à des employés, salariés et équipements ? EASYBEAUTY prend en compte automatiquement les compléments de votre personnel contrôlées en la disponibilité de vos Cabines pour gérer dans votre agenda les tâches et les monter le plus optimisée qui soit !",
    img: gestionImg,
    reverse: false,
  },
];

const FEATURES = [
  "Gestion de caisse (édition tickets de caisse, modification de la facturation jusqu'à la fin de l'encaissement).",
  "Gestion des Rdv & clients (historiques de visite, suivi des prestations, préférences du client, fiches techniques etc.).",
  "Gestion des collaborateurs (planning, salaires, rémunération…).",
  "Gestion de la fidélisation (cartes d'abonnements, cartes des montages).",
  "Gestion du marketing (courriers, emails, sms, couponing).",
  "Gestion du stock (faites les captures d'achats, optimisez votre inventaire sécurisé, gestion des commandes).",
  "Gestion des rendez-vous (détection Rendez-vous statistiques, confirmation de RDV par SMS ou mail, etc…).",
];

const WHEEL = [
  "Réservation en ligne",
  "Vente de produits",
  "Fidélisation clients",
  "Bons cadeaux",
  "Statistiques & Reporting",
  "SMS rappel RDV",
  "Gestion de stock",
  "Mailing marketing",
];
const WHEEL_COLORS = ["#f3e3c4", "#f1d5c5", "#f3e3c4", "#f1d5c5", "#f3e3c4", "#f1d5c5", "#f3e3c4", "#f1d5c5"];

export default function Beaute() {
  const R = 190; // rayon du cercle
  const N = 56; // demi-taille d'un nœud

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

  return (
    <div className="page">
      {/* HERO */}
      <header
        className="hero hero-beaute"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-inner">
          <span className="hero-line" />
          <h1>BEAUTE &amp; BIEN ETRE</h1>
          <p>
            Excellent logiciel Métier qui vous accompagne pour simplifier et
            rentabiliser la gestion de votre institut de beauté en toute
            Sécurité.
          </p>
        </div>
      </header>

      {/* INTRO */}
      <section className="intro">
        <span className="eyebrow">BEAUTE &amp; BIEN ETRE</span>
        <h2>
          Choisissez EasyBeauty, votre allié au !
          <br />
          <em>QUOTIDIEN</em>
        </h2>
        <p>
          Le choix n'est jamais habituel. Pour encore un logiciel de caisse
          purement Métier, centrées sur Beauté et intégrant un module de
          gestion planning des RDV, il est des objectifs de développer votre
          chiffre d'affaires, gérer les besoins clients et optimiser la
          fidélisation de vos clients. C'est une aide à la gestion des
          stocks. C'est une solution plus performante que de nombreux de
          facilités et de maîtriser tout votre activité. EasyBeauty est la
          solution idéale pour les professionnels de l'industrie Beauté.
        </p>
      </section>

      {/* PRODUIT */}
      <section className="product">
        <div className="product-img">
          <button className="arrow left" aria-label="Précédent">‹</button>
          <img src={posImg} alt="Poste de caisse EasyBeauty" />
          <button className="arrow right" aria-label="Suivant">›</button>
        </div>
        <div className="product-text">
          <span className="eyebrow">BEAUTE &amp; BIEN ETRE</span>
          <h3 className="upper">
            LOGICIEL DE CAISSE POUR SALONS DE COIFFURE &amp;{" "}
            <em>INSTITUTS DE BEAUTE</em>
          </h3>
          <p>
            Découvrez un outil tactique, moderne et innovant pour optimiser
            votre activité d'affaire, gérer vos plannings et vos prestations
            en programme en fidélité à vos clients. EASYBEAUTY vous simplifie
            la gestion de votre salon, vous aide à configurer vos
            informations et à traiter les documents comptables pour vous
            Enregistrer du temps !
          </p>
        </div>
      </section>

      {/* 3 BLOCS ALTERNÉS */}
      {BLOCKS.map((b, i) => (
        <section className={`bb-row ${b.reverse ? "reverse" : ""}`} key={i}>
          <div className="bb-text">
            <span className="eyebrow">BEAUTE &amp; BIEN ETRE</span>
            <h3 className="upper">{b.title}</h3>
            <p>{b.text}</p>
          </div>
          <div className="bb-img">
            <img src={b.img} alt="" />
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
          <h3 className="upper">
            DÉCOUVREZ QUELQUES FONCTIONNALITÉS DISPONIBLES SUR LE LOGICIEL{" "}
            <em>BEAUTE</em>
          </h3>
          <ul>
            {FEATURES.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* OUTILS (roue) */}
      <section className="bb-tools">
        <span className="eyebrow">BEAUTE &amp; BIEN ETRE</span>
        <h2>
          Les outils dont vous avez <em>besoin</em>
        </h2>
        <p className="bb-tools-sub">
          Les fonctionnalités bien pensées pour développer votre activité.
        </p>

        <div className="wheel">
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
                  background: WHEEL_COLORS[i],
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
      <section className="trust trust-strip">
        <h2>Soyez parmi ceux qui nous font confiance</h2>
        <div className="logos">
          {LOGOS.map((l) => (
            <img key={l.name} src={l.src} alt={l.name} />
          ))}
        </div>
        <hr className="trust-line" />
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
              <li key={s.title}>
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
    </div>
  );
}
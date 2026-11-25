import React from "react";
import {
  Zap,
  Link2,
  Settings,
  BadgeCheck,
  ShoppingCart,
  Apple,
  Store,
  Fish,
  Croissant,
  Milk,
  Beef,
  Carrot,
  Wrench,
  Users,
  Headphones,
  ArrowRight,
} from "lucide-react";
import "./Zebra.css";

/* ------------------------------------------------------------------
   IMAGES : mêmes imports qu'avant.
------------------------------------------------------------------- */

import hero from "@/assets/zebra.jpeg";
import step1 from "@/assets/inno.jpeg";
import step2 from "@/assets/z1.jpeg";
import step3 from "@/assets/z2.jpeg";
import step4 from "@/assets/z3.jpeg";
import tzebra from "@/assets/supportt.jpeg";

const IMG = {
  hero,
  step1,
  step2,
  step3,
  step4,
};

/* Code-barres généré en SVG à partir d'une chaîne (rendu décoratif) */
function Barcode({ value = "123456789012", height = 44 }) {
  const bars: React.ReactElement[] = [];
  let x = 0;
  for (let i = 0; i < 46; i++) {
    const code = value.charCodeAt(i % value.length) + i * 7;
    const w = (code % 3) + 1;
    if (i % 2 === 0) bars.push(<rect key={i} x={x} y="0" width={w} height={height} />);
    x += w;
  }
  return (
    <svg
      className="zb-barcode"
      viewBox={`0 0 ${x} ${height}`}
      preserveAspectRatio="none"
      height={height}
      aria-hidden="true"
    >
      {bars}
    </svg>
  );
}

const features = [
  {
    icon: <Zap size={26} />,
    title: "Étiquetage rapide",
    text: "Impression instantanée des étiquettes avec codes à barres.",
  },
  {
    icon: <Link2 size={26} />,
    title: "Connexion INNOSHOP",
    text: "Communication directe avec votre logiciel de gestion.",
  },
  {
    icon: <Settings size={26} />,
    title: "Informations complètes",
    text: "Prix, poids, référence, libellé, date, etc.",
  },
  {
    icon: <BadgeCheck size={26} />,
    title: "Moins d’erreurs",
    text: "Lecture fiable des codes à barres par un scanner à la caisse.",
  },
];

const steps = [
  {
    img: IMG.step1,
    alt: "Écran INNOSHOP",
    title: "Création des articles dans INNOSHOP",
    text: "Saisie des produits, des prix et des informations.",
  },
  {
    img: IMG.step2,
    alt: "Imprimante Zebra",
    title: "Impression des étiquettes",
    text: "Depuis INNOSHOP, avec l’imprimante Zebra.",
  },
  {
    img: IMG.step3,
    alt: "Étiquette collée sur le produit",
    title: "Étiquette à coller sur le produit",
    text: "Prix, poids, code à barres, libellé, etc.",
  },
  {
    img: IMG.step4,
    alt: "Lecture du code à barres en caisse",
    title: "Lecture du code à barres en caisse",
    text: "Le produit est automatiquement retrouvé dans INNOSHOP.",
  },
];

const labels = [
  {
    name: "POMME ROYAL",
    lines: ["Origine : France", "Catégorie : 1"],
    price: "18,90 DH",
    unit: "/kg",
  },
  {
    name: "FILET DE POULET",
    lines: ["Origine : Maroc", "Poids : 1,250 kg"],
    price: "49,90 DH",
  },
  {
    name: "FROMAGE GOUDA",
    lines: ["Poids : 0,320 kg", "Prix / kg : 120,00 DH"],
    price: "38,40 DH",
  },
];

const ideal = [
  { icon: <ShoppingCart size={30} />, label: "Supermarchés indépendants" },
  { icon: <Apple size={30} />, label: "Épiceries et primeurs" },
  { icon: <Store size={30} />, label: "Boucheries et fromageries" },
  { icon: <Fish size={30} />, label: "Poissonneries" },
  { icon: <Croissant size={30} />, label: "Boulangeries" },
  { icon: <Milk size={30} />, label: "Produits en vrac" },
  { icon: <Beef size={30} />, label: "Viandes et charcuteries" },
  { icon: <Carrot size={30} />, label: "Produits frais" },
];

const support = [
  { icon: <Wrench size={28} />, label: "Installation et paramétrage" },
  { icon: <Users size={28} />, label: "Formation des équipes" },
  { icon: <Headphones size={28} />, label: "Assistance technique" },
  { icon: <Settings size={28} />, label: "Suivi et maintenance" },
];

export default function OraliFlyer() {
  return (
    <main className="zb-page">
      {/* ============ HERO (inchangé) ============ */}
      <section className="zb-hero">
        <img className="zb-hero__bg" src={IMG.hero} alt="Écran INNOSHOP et imprimante Zebra" />
        <div className="zb-hero__content">
          <p className="zb-kicker">IMPRIMANTE DE BALISAGE ZEBRA</p>
          <h1 className="zb-hero__title">
            <strong>Imprimez vos codes-barres,</strong>
            <br />
            scannez et encaissez
            <br />
            en toute simplicité
          </h1>
          <p className="zb-hero__text">
            Notre imprimante Zebra est directement connectée à votre logiciel INNOSHOP pour
            imprimer des étiquettes avec codes à barres (prix, poids, référence…) et faciliter la
            gestion de vos produits.
          </p>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="zb-features">
        {features.map((f, i) => (
          <article key={f.title} className="zb-feature">
            <span className="zb-feature__num">0{i + 1}</span>
            <div className="zb-feature__icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </section>

      {/* ============ FONCTIONNEMENT ============ */}
      <section className="zb-how">
        <div className="zb-container">
          <div className="zb-how__head">
            <div>
              <p className="zb-eyebrow">Un fonctionnement simple</p>
              <h2>De l’étiquetage à l’encaissement</h2>
            </div>
            <div className="zb-badge">
              <ShoppingCart size={40} strokeWidth={1.6} />
              <div>
                <strong>INNOSHOP</strong>
                <span>Logiciel de gestion Retail</span>
              </div>
            </div>
          </div>

          <div className="zb-steps">
            {steps.map((s, i) => (
              <React.Fragment key={s.title}>
                <article className="zb-step">
                  <div className="zb-step__image">
                    <span className="zb-step__tag">0{i + 1}</span>
                    <img src={s.img} alt={s.alt} loading="lazy" />
                  </div>
                  <div className="zb-step__body">
                    <h4>{s.title}</h4>
                    <p>{s.text}</p>
                  </div>
                </article>
                {i < steps.length - 1 && <ArrowRight className="zb-steps__arrow" size={30} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXEMPLES + IDÉAL POUR ============ */}
      <section className="zb-split">
        <div className="zb-panel zb-panel--light">
          <h3 className="zb-panel__title">Exemples d’étiquettes</h3>
          <div className="zb-labels">
            {labels.map((l) => (
              <div key={l.name} className="zb-label">
                <strong className="zb-label__name">{l.name}</strong>
                {l.lines.map((t) => (
                  <span key={t} className="zb-label__line">{t}</span>
                ))}
                <Barcode />
                <span className="zb-label__code">123456789012</span>
                <span className="zb-label__price">
                  {l.price}
                  {l.unit && <small>{l.unit}</small>}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="zb-panel zb-panel--dark">
          <h3 className="zb-panel__title">Idéal pour</h3>
          <ul className="zb-ideal">
            {ideal.map((it) => (
              <li key={it.label} className="zb-ideal__item">
                <span>{it.icon}</span>
                <p>{it.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ ACCOMPAGNEMENT ============ */}
      <section className="zb-support-wrap">
        <div className="zb-container zb-support">
          <div className="zb-support__image">
            <img src={tzebra} alt="Notre accompagnement" loading="lazy" />
          </div>

          <div className="zb-support__content">
            <p className="zb-eyebrow">Notre accompagnement</p>
            <h2>Installation, formation et support</h2>
            <p className="zb-support__intro">
              Notre équipe technique vous accompagne à chaque étape pour une mise en service rapide
              et une utilisation en toute sérénité.
            </p>

            <ul className="zb-support__list">
              {support.map((s) => (
                <li key={s.label}>
                  {s.icon}
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>

            <a href="/#contact" className="zb-btn">
              Demander une démonstration <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
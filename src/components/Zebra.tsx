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
   IMAGES : placez vos fichiers dans /public/images/ avec ces noms
   (ou changez simplement les chemins ci-dessous).
   - logo-orali.png         : logo 
   - hero-pos-zebra.png     : photo en haut à droite (écran INNOSHOP + imprimante Zebra + bananes)
   - step1-innoshop.png     : écran INNOSHOP
   - step2-zebra.png        : imprimante Zebra avec étiquette
   - step3-etiquette.jpg    : étiquette BANANES collée sur le produit
   - step4-scan.jpg         : scanner qui lit le code-barres
------------------------------------------------------------------- */

import hero from "@/assets/zebra.jpeg";
import step1 from "@/assets/inno.jpeg";
import step2 from "@/assets/z1.jpeg";
import step3 from "@/assets/z2.jpeg";
import step4 from "@/assets/z3.jpeg";
import tzebra from "@/assets/tzebra.jpeg";

const IMG = {
  hero,
  step1,
  step2,
  step3,
  step4,
};

/* Code-barres généré en SVG à partir d'une chaîne (rendu décoratif) */
function Barcode({ value = "123456789012", height = 44 }) {
  const bars = [];
  let x = 0;
  for (let i = 0; i < 46; i++) {
    const code = value.charCodeAt(i % value.length) + i * 7;
    const w = (code % 3) + 1;
    if (i % 2 === 0) bars.push(<rect key={i} x={x} y="0" width={w} height={height} />);
    x += w;
  }
  return (
    <svg
      className="barcode"
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
    icon: <Zap size={44} />,
    tone: "orange",
    title: "Étiquetage rapide",
    text: "Impression instantanée des étiquettes avec codes à barres.",
  },
  {
    icon: <Link2 size={44} />,
    tone: "blue",
    title: "Connexion INNOSHOP",
    text: "Communication directe avec votre logiciel de gestion.",
  },
  {
    icon: <Settings size={36} />,
    tone: "green",
    title: "Informations complètes",
    text: "Prix, poids, référence, libellé, date, etc.",
    row: true,
  },
  {
    icon: <BadgeCheck size={36} />,
    tone: "amber",
    title: "Moins d’erreurs",
    text: "Lecture fiable des codes à barres par un scanner à la caisse.",
    row: true,
  },
];

const steps = [
  {
    img: IMG.step1,
    alt: "Écran INNOSHOP",
    title: "1. Création des articles dans INNOSHOP",
    text: "Saisie des produits, des prix et des informations.",
  },
  {
    img: IMG.step2,
    alt: "Imprimante Zebra",
    title: "2. Impression des étiquettes",
    text: "Depuis INNOSHOP, avec l’imprimante Zebra.",
  },
  {
    img: IMG.step3,
    alt: "Étiquette collée sur le produit",
    title: "3. Étiquette à coller sur le produit",
    text: "Prix, poids, code à barres, libellé, etc.",
  },
  {
    img: IMG.step4,
    alt: "Lecture du code à barres en caisse",
    title: "4. Lecture du code à barres en caisse",
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
  { icon: <ShoppingCart size={38} />, color: "#f26a1b", label: "Supermarchés indépendants" },
  { icon: <Apple size={38} />, color: "#22a34a", label: "Épiceries et primeurs", bold: true },
  { icon: <Store size={38} />, color: "#f26a1b", label: "Boucheries et fromageries" },
  { icon: <Fish size={38} />, color: "#2563eb", label: "Poissonneries" },
  { icon: <Croissant size={38} />, color: "#f59e0b", label: "Boulangeries" },
  { icon: <Milk size={38} />, color: "#7c3aed", label: "Produits en vrac" },
  { icon: <Beef size={38} />, color: "#e11d2a", label: "Viandes et charcuteries", bold: true },
  { icon: <Carrot size={38} />, color: "#f26a1b", label: "Produits frais" },
];

const support = [
  { icon: <Wrench size={34} />, label: "Installation et paramétrage" },
  { icon: <Users size={34} />, label: "Formation des équipes" },
  { icon: <Headphones size={34} />, label: "Assistance technique" },
  { icon: <Settings size={34} />, label: "Suivi et maintenance" },
];

export default function OraliFlyer() {
  return (
    <main className="flyer">
      {/* ============ HERO ============ */}
      <section className="hero">
        <img className="hero__bg" src={IMG.hero} alt="Écran INNOSHOP et imprimante Zebra" />
        <div className="hero__content">
          <p className="kicker">IMPRIMANTE DE BALISAGE ZEBRA</p>
          <h1 className="hero__title">
            <strong>Imprimez vos codes-barres,</strong>
            <br />
            scannez et encaissez
            <br />
            en toute simplicité
          </h1>
          <p className="hero__text">
            Notre imprimante Zebra est directement connectée à votre logiciel INNOSHOP pour
            imprimer des étiquettes avec codes à barres (prix, poids, référence…) et faciliter la
            gestion de vos produits.
          </p>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="features">
        {features.map((f) => (
          <article key={f.title} className={`feature feature--${f.tone} ${f.row ? "feature--row" : ""}`}>
            <div className={`feature__icon feature__icon--${f.tone}`}>{f.icon}</div>
            <div className="feature__body">
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          </article>
        ))}
      </section>

      {/* ============ FONCTIONNEMENT ============ */}
      <section className="how">
        <div className="how__head">
          <div>
            <p className="kicker kicker--orange">UN FONCTIONNEMENT SIMPLE</p>
            <h2>De l’étiquetage à l’encaissement</h2>
          </div>
          <div className="badge">
            <ShoppingCart size={46} strokeWidth={1.6} />
            <div>
              <strong>INNOSHOP</strong>
              <span>Logiciel de gestion Retail</span>
            </div>
          </div>
        </div>

        <div className="steps">
          {steps.map((s, i) => (
            <React.Fragment key={s.title}>
              <article className="step">
                <img src={s.img} alt={s.alt} />
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </article>
              {i < steps.length - 1 && <ArrowRight className="steps__arrow" size={34} />}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ============ EXEMPLES + IDÉAL POUR ============ */}
      <section className="split">
        <div className="panel">
          <h3 className="panel__title">EXEMPLES D’ÉTIQUETTES</h3>
          <div className="labels">
            {labels.map((l) => (
              <div key={l.name} className="label">
                <strong className="label__name">{l.name}</strong>
                {l.lines.map((t) => (
                  <span key={t} className="label__line">{t}</span>
                ))}
                <Barcode />
                <span className="label__code">123456789012</span>
                <span className="label__price">
                  {l.price}
                  {l.unit && <small>{l.unit}</small>}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <h3 className="panel__title">IDÉAL POUR</h3>
          <div className="ideal">
            {ideal.map((it) => (
              <div key={it.label} className="ideal__item">
                <span style={{ color: it.color }}>{it.icon}</span>
                <p className={it.bold ? "is-bold" : ""}>{it.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CARD ACCOMPAGNEMENT (AJOUTÉE EN BAS DE PAGE) ============ */}
      <section className="zebra-accompaniment-card" style={{ margin: "40px auto", maxWidth: "1200px", padding: "0 20px" }}>
        <div className="overflow-hidden rounded-3xl bg-[#f1f6ff] shadow-lg shadow-slate-200/50 border border-slate-200/80">
          <div className="grid lg:grid-cols-[2fr_3fr]">
            {/* Image khawya - Placeholder */}
            <div className="relative min-h-[260px] bg-slate-200/70 lg:min-h-full">
              <img
                src={tzebra}
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
                    <Headphones className="h-6 w-6 text-[#f26522]" strokeWidth={2} />
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

     
    </main>
  );
}
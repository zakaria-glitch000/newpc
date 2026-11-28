import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Monitor,
  ShieldCheck,
  CheckCircle,
  Cog,
  Scan,
  Hand,
  ConciergeBell,
  ChefHat,
  Receipt,
  BarChart2,
  Users,
  Clock,
  Coins,
  Wrench,
  Headphones,
  ArrowRight,
} from "lucide-react";

import borneStandard from "@/assets/b1.jpeg";
import bornePremium from "@/assets/b3.jpeg";
import borneMurale from "@/assets/b2.jpeg";
import accompagnementImage from "@/assets/supportt.jpeg";
import resImage from "@/assets/banneborn.jpeg";

import "./Born.css";

/*
  Image de fond du hero (restaurant, à droite).
  Pour l'instant on réutilise b4. Quand tu as une photo de restaurant,
  ajoute-la dans assets (ex: b5.jpeg), importe-la et remplace la ligne ci-dessous.
*/
const heroImage = resImage;

const products = [
  {
    type: "BORNE",
    variant: "STANDARD",
    subtitle: "L’essentiel pour commencer",
    image: borneStandard,
    features: [
      { icon: Monitor, text: 'Écran tactile 21,5"' },
      { icon: Cog, text: "Design épuré et compact" },
      { icon: ShieldCheck, text: "Paiement intégré (option)" },
      { icon: CheckCircle, text: "Installation simple et rapide" },
    ],
  },
  {
    type: "BORNE",
    variant: "PREMIUM",
    subtitle: "Performance et élégance",
    image: bornePremium,
    features: [
      { icon: Monitor, text: 'Écran tactile 27"' },
      { icon: Cog, text: "Design moderne en aluminium" },
      { icon: ShieldCheck, text: "Paiement intégré (lecteur CB)" },
      { icon: CheckCircle, text: "Idéale pour les restaurants et espaces à fort trafic" },
    ],
  },
  {
    type: "BORNE",
    variant: "MURALE",
    subtitle: "Une solution gain de place",
    image: borneMurale,
    features: [
      { icon: Monitor, text: 'Écran tactile 21,5"' },
      { icon: Scan, text: "Fixation murale" },
      { icon: ShieldCheck, text: "Design compact et robuste" },
      { icon: CheckCircle, text: "Parfaite pour les espaces restreints" },
    ],
  },
];

const features = [
  {
    icon: Hand,
    title: "Commande autonome",
    text: "Un parcours client simple et intuitif.",
  },
  {
    icon: ConciergeBell,
    title: "Menus personnalisables",
    text: "Options, suppléments et formules selon votre activité.",
  },
  {
    icon: ChefHat,
    title: "Transmission en cuisine",
    text: "Envoi automatique des commandes sur écrans KDS.",
  },
  {
    icon: Receipt,
    title: "Intégration CSI",
    text: "Communication directe avec votre caisse et votre gestion.",
  },
  {
    icon: BarChart2,
    title: "Ventes additionnelles",
    text: "Mise en valeur des plats, menus et offres spéciales.",
  },
];

const benefits = [
  {
    icon: Users,
    title: "Améliore l’expérience client",
    text: "Un service plus rapide et plus fluide.",
  },
  {
    icon: Clock,
    title: "Réduit le temps d’attente",
    text: "Des files moins longues et un meilleur confort.",
  },
  {
    icon: BarChart2,
    title: "Optimise l’organisation",
    text: "Moins de pression sur le personnel, plus d’efficacité.",
  },
  {
    icon: Coins,
    title: "Augmente le panier moyen",
    text: "Grâce aux suggestions et aux offres complémentaires.",
  },
];

const supportItems = [
  { icon: Wrench, title: "Installation et paramétrage" },
  { icon: Users, title: "Formation des équipes" },
  { icon: Headphones, title: "Assistance technique" },
  { icon: Cog, title: "Suivi et maintenance" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="bc-eyebrow">{children}</p>;
}

function Logo() {
  return (
    <div className="bc-logo" aria-label="PC MAROC">
      <div></div>
    </div>
  );
}

export default function BornesCommande() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/#contact");
  };

  return (
    <main className="bc-page">
      {/* HERO (inchangé) */}
      <section className="bc-hero">
        <img
          className="bc-hero__bg"
          src={heroImage}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />
        <div className="bc-hero__fade" />

        <div className="bc-hero__inner">
          <Logo />

          <div className="bc-hero__text">
            <Eyebrow>Bornes de commande</Eyebrow>

            <h1>
              <strong>Simplifiez la prise de commande,</strong>
              <span>améliorez l’expérience client</span>
            </h1>

            <p>
              Des bornes interactives modernes et intuitives, parfaitement
              intégrées à notre solution d’encaissement CSI pour une gestion
              fluide et performante de votre établissement.
            </p>
          </div>

          <p className="bc-hero__script" aria-hidden="true">
            Une expérience
            <br />
            plus fluide
          </p>
        </div>
      </section>

      {/* PRODUITS */}
      <section className="bc-section">
        <div className="bc-container">
          <header className="bc-head">
            <div>
              <Eyebrow>Nos bornes</Eyebrow>
              <h2>Choisissez votre borne</h2>
            </div>
            <p>Trois formats pour s’adapter à votre espace et à votre flux de clients.</p>
          </header>

          <div className="bc-products">
            {products.map((product, i) => (
              <article
                className={`bc-product${i === 1 ? " bc-product--dark" : ""}`}
                key={product.variant}
              >
                <div className="bc-product__image">
                  <span className="bc-product__tag">0{i + 1}</span>
                  <img
                    src={product.image}
                    alt={`${product.type} ${product.variant}`}
                    loading="lazy"
                  />
                </div>

                <div className="bc-product__body">
                  <h3>
                    <span>{product.type}</span>
                    <strong>{product.variant}</strong>
                  </h3>
                  <p className="bc-product__subtitle">{product.subtitle}</p>

                  <ul className="bc-product__features">
                    {product.features.map((feature) => {
                      const Icon = feature.icon;
                      return (
                        <li key={feature.text}>
                          <Icon />
                          <span>{feature.text}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <button onClick={goToContact} className="bc-btn">
                    Demander un devis <ArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS COMMUNES */}
      <section className="bc-section bc-section--soft">
        <div className="bc-container bc-common">
          <div className="bc-common__panel">
            <Eyebrow>Les fonctionnalités communes</Eyebrow>
            <h2>
              Une seule solution, <span>les mêmes avantages</span>
            </h2>
            <p>
              Quel que soit le modèle, nos bornes de commande offrent les mêmes
              fonctionnalités avancées.
            </p>
            <strong className="bc-common__count">05</strong>
            <span className="bc-common__count-label">fonctionnalités incluses</span>
          </div>

          <ol className="bc-common__grid">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <li className="bc-feature" key={item.title}>
                  <span className="bc-feature__num">0{i + 1}</span>
                  <div className="bc-feature__icon">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="bc-benefits-band">
        <div className="bc-container">
          <Eyebrow>Les avantages pour votre établissement</Eyebrow>

          <div className="bc-benefits">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <article className="bc-benefit" key={item.title}>
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACCOMPAGNEMENT */}
      <section className="bc-section">
        <div className="bc-container bc-support">
          <div className="bc-support__image">
            <img
              src={accompagnementImage}
              alt="Accompagnement et installation PC MAROC"
              loading="lazy"
            />
            <div className="bc-support__badge">
              <Headphones />
              <div>
                <strong>PC MAROC</strong>
                <span>À vos côtés à chaque étape</span>
              </div>
            </div>
          </div>

          <div className="bc-support__content">
            <Eyebrow>Notre accompagnement</Eyebrow>
            <h2>Installation, formation et support</h2>
            <p>
              Notre équipe technique vous accompagne à chaque étape pour une
              mise en service rapide et une utilisation en toute sérénité.
            </p>

            <ol className="bc-support__items">
              {supportItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li className="bc-support__item" key={item.title}>
                    <span className="bc-support__num">0{i + 1}</span>
                    <Icon />
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </ol>

            <button onClick={goToContact} className="bc-btn">
              Demander une démonstration <ArrowRight />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
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
import accompagnementImage from "@/assets/b4.jpeg";
import resImage from "@/assets/res.webp";

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
    tone: "orange",
    title: "Commande autonome",
    text: "Un parcours client simple et intuitif.",
  },
  {
    icon: ConciergeBell,
    tone: "blue",
    title: "Menus personnalisables",
    text: "Options, suppléments et formules selon votre activité.",
  },
  {
    icon: ChefHat,
    tone: "green",
    title: "Transmission en cuisine",
    text: "Envoi automatique des commandes sur écrans KDS.",
  },
  {
    icon: Receipt,
    tone: "red",
    title: "Intégration CSI",
    text: "Communication directe avec votre caisse et votre gestion.",
  },
  {
    icon: BarChart2,
    tone: "purple",
    title: "Ventes additionnelles",
    text: "Mise en valeur des plats, menus et offres spéciales.",
  },
];

const benefits = [
  {
    icon: Users,
    tone: "orange",
    title: "Améliore l’expérience client",
    text: "Un service plus rapide et plus fluide.",
  },
  {
    icon: Clock,
    tone: "blue",
    title: "Réduit le temps d’attente",
    text: "Des files moins longues et un meilleur confort.",
  },
  {
    icon: BarChart2,
    tone: "green",
    title: "Optimise l’organisation",
    text: "Moins de pression sur le personnel, plus d’efficacité.",
  },
  {
    icon: Coins,
    tone: "purple",
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

function Eyebrow({ children }) {
  return <p className="bc-eyebrow">{children}</p>;
}

function Logo() {
  return (
    <div className="bc-logo" aria-label="PC MAROC">
   
      <div>
 
      </div>
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
      {/* HERO */}
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

      <div className="bc-container bc-stack">
        {/* PRODUITS */}
        <section className="bc-products">
          {products.map((product) => (
            <article className="bc-product" key={product.variant}>
              <div className="bc-product__image">
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
        </section>

        {/* FONCTIONNALITÉS COMMUNES */}
        <section className="bc-common">
          <Eyebrow>Les fonctionnalités communes</Eyebrow>
          <h2>Une seule solution, les mêmes avantages</h2>
          <p className="bc-common__intro">
            Quel que soit le modèle, nos bornes de commande offrent les mêmes
            fonctionnalités avancées.
          </p>

          <div className="bc-common__grid">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  className={`bc-feature bc-tone--${item.tone}`}
                  key={item.title}
                >
                  <div className="bc-feature__icon">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* AVANTAGES */}
        <section className="bc-benefits-box">
          <Eyebrow>Les avantages pour votre établissement</Eyebrow>

          <div className="bc-benefits">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  className={`bc-benefit bc-tone--${item.tone}`}
                  key={item.title}
                >
                  <Icon />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ACCOMPAGNEMENT */}
        <section className="bc-support">
          <div className="bc-support__image">
            <img
              src={accompagnementImage}
              alt="Accompagnement et installation PC MAROC"
              loading="lazy"
            />
          </div>

          <div className="bc-support__content">
            <Eyebrow>Notre accompagnement</Eyebrow>
            <h2>Installation, formation et support</h2>
            <p>
              Notre équipe technique vous accompagne à chaque étape pour une
              mise en service rapide et une utilisation en toute sérénité.
            </p>

            <div className="bc-support__row">
              <div className="bc-support__items">
                {supportItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="bc-support__item" key={item.title}>
                      <Icon />
                      <span>{item.title}</span>
                    </div>
                  );
                })}
              </div>

              <button onClick={goToContact} className="bc-btn">
                Demander une démonstration <ArrowRight />
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
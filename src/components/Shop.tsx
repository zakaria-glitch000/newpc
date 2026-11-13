import React, { type ReactNode } from 'react';
import {
  ShoppingCart,
  Package,
  BarChart3,
  Settings,
  Tag,
  Users,
  Store,
  Clock,
  ShieldCheck,
  TrendingUp,
  Headphones,
  Calendar,
  Phone,
  ShoppingBasket,
  Shirt,
  Cake,
  Apple,
  Sofa,
  Sparkles,
  BookOpen,
  User,
  Euro,
  Ticket,
  Boxes,
  ArrowRight,
  CheckCircle2,
  Check,
} from 'lucide-react';

import './Innoshop.css';

import heroImage from '@/assets/inn.jpg';
import commercanteImage from '@/assets/commercante.jpg';
import articleImage from '@/assets/article.jpg';
import supermarcheImage from '@/assets/sup.jpg';
import boutiqueImage from '@/assets/boutique.jpg';
import boulangerieImage from '@/assets/boulangerie.jpg';
import epicerieImage from '@/assets/epicerie.jpg';
import bazarImage from '@/assets/bazar.jpg';
import parfumerieImage from '@/assets/parfumerie.jpg';
import librairieImage from '@/assets/librairie.jpg';

const IMAGES = {
  hero: heroImage,
  commercante: commercanteImage,
  article: articleImage,
  supermarche: supermarcheImage,
  boutique: boutiqueImage,
  boulangerie: boulangerieImage,
  epicerie: epicerieImage,
  bazar: bazarImage,
  parfumerie: parfumerieImage,
  librairie: librairieImage,
  specialise: commercanteImage,
};

/* =====================================================
   LOGOS CLIENTS
   -> Mets les logos dans : src/assets/innoshop/
      (png, jpg, webp, svg) : ils sont chargés automatiquement.
   -> Si le dossier est vide, 24 placeholders s'affichent.
===================================================== */
type ClientLogo = { name: string; src?: string };

const logoModules = import.meta.glob<string>(
  '@/assets/innoshop/*.{png,jpg,jpeg,webp,svg}',
  { eager: true, import: 'default' }
);

const REAL_LOGOS: ClientLogo[] = Object.entries(logoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const file = path.split('/').pop() || 'client';
    return { name: file.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '), src };
  });

const PLACEHOLDER_LOGOS: ClientLogo[] = Array.from({ length: 24 }, (_, i) => ({
  name: `Client ${String(i + 1).padStart(2, '0')}`,
}));

const CLIENT_LOGOS: ClientLogo[] = REAL_LOGOS.length
  ? REAL_LOGOS
  : PLACEHOLDER_LOGOS;

const MARQUEE_CSS = `
.innoshop-trust {
  max-width: 1280px;
  margin: 0 auto;
  padding: 72px 20px;
  text-align: center;
}
.innoshop-trust-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: #e31b23;
}
.innoshop-trust h2 {
  margin: 10px 0 0;
  font-size: clamp(26px, 4vw, 40px);
  font-weight: 800;
  line-height: 1.15;
  color: #111827;
}

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
  border-color: #e31b23;
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
.client-card:hover .client-ph { color: #e31b23; }

.clients-rows { display: grid; gap: 12px; margin-top: 36px; }
.clients-count { margin-top: 12px; color: #64748b; font-size: 15px; text-align: center; }

@media (max-width: 640px) {
  .client-card { width: 140px; height: 72px; margin: 0 8px; }
}
@media (prefers-reduced-motion: reduce) {
  .clients-track { animation: none !important; }
}
`;

const MarqueeRow = ({
  logos,
  reverse = false,
  speed = 60,
}: {
  logos: ClientLogo[];
  reverse?: boolean;
  speed?: number;
}) => {
  // On duplique la liste pour une boucle sans coupure
  const loop = [...logos, ...logos];

  return (
    <div className="clients-marquee">
      <div
        className={`clients-track${reverse ? ' reverse' : ''}`}
        style={{ '--clients-speed': `${speed}s` } as React.CSSProperties}
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
};

const Logo = ({
  size = 'lg',
}: {
  size?: 'lg' | 'xl' | 'inline';
}) => (
  <span className={`logo logo-${size}`}>
    INN<span className="logo-o">O</span>SHOP
  </span>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="bullets">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const RedIcon = ({
  children,
  round = true,
}: {
  children: ReactNode;
  round?: boolean;
}) => (
  <span className={`red-icon ${round ? 'round' : ''}`}>
    {children}
  </span>
);

const stockRows: (string | number)[][] = [
  ['Eau', 1200, '6,00', 'Boissons'],
  ['Lait', 350, '12,00', 'Produits laitiers'],
  ['Riz', 180, '15,00', 'Épicerie'],
  ['Huile', 95, '25,00', 'Épicerie'],
  ['Sucre', 210, '9,00', 'Épicerie'],
];

const stores: string[][] = [
  ['Magasin 1', 'Casablanca', '12 560'],
  ['Magasin 2', 'Rabat', '8 230'],
  ['Magasin 3', 'Marrakech', '9 450'],
  ['Magasin 4', 'Tanger', '7 690'],
];

const bars = [30, 45, 38, 60, 52, 70, 48, 66, 80, 58, 72, 90];

const features = [
  {
    n: '01',
    icon: <ShoppingCart size={20} />,
    title: 'Encaissement simple et rapide',
    items: [
      'Interface intuitive et tactile',
      'Gestion des remises et promotions',
      'Fidélité clients',
      'Multiples modes de règlement',
      'Édition de tickets et factures',
    ],
    mock: 'pos',
  },
  {
    n: '02',
    icon: <Package size={20} />,
    title: 'Gestion des stocks et inventaires',
    items: [
      'Suivi des entrées et sorties',
      'Inventaires rapides',
      'Alertes de stock bas',
      'Valorisation du stock',
    ],
    mock: 'stock',
  },
  {
    n: '03',
    icon: <Tag size={20} />,
    title: 'Gestion des articles et des tarifs',
    items: [
      'Création et classification des articles',
      'Gestion des familles et sous-familles',
      'Prix, remises et promotions',
      'Codes-barres et étiquetage',
    ],
    mock: 'article',
  },
  {
    n: '04',
    icon: <Users size={20} />,
    title: 'Gestion et fidélisation clients',
    items: [
      'Fiches clients complètes',
      'Historique des achats',
      'Programmes de fidélité',
      'Remises personnalisées',
      'Suivi des points et avantages',
    ],
    mock: 'client',
  },
  {
    n: '05',
    icon: <BarChart3 size={20} />,
    title: 'Analyse des ventes et reporting',
    items: [
      'Tableaux de bord clairs',
      "Chiffre d'affaires par période",
      'Ventes par article / famille',
      'Rapports détaillés et exportables',
    ],
    mock: 'stats',
  },
  {
    n: '06',
    icon: <Store size={20} />,
    title: 'Gestion multi-points de vente',
    items: [
      'Pilotage multi-magasins',
      'Suivi des ventes par magasin',
      'Gestion centralisée des articles',
      'Accès aux rapports et statistiques',
    ],
    mock: 'stores',
  },
];

const whyCards = [
  {
    icon: <Clock size={24} />,
    title: 'Gagnez du temps',
    text: 'Des encaissements rapides et une gestion simplifiée de vos opérations.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Maîtrisez votre activité',
    text: 'Un suivi en temps réel de vos stocks, ventes et performances.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Développez vos ventes',
    text: 'Des outils pour vos promotions, remises et fidélisation clients.',
  },
  {
    icon: <Headphones size={24} />,
    title: "Profitez d'un accompagnement",
    text: 'Installation, formation et assistance technique par des experts.',
  },
];

const trades = [
  {
    img: IMAGES.supermarche,
    icon: <ShoppingBasket size={20} />,
    title: 'Supermarchés indépendants',
    items: [
      'Gestion multi-rayons',
      'Encaissement rapide',
      'Suivi des stocks et inventaires',
      'Promotions et fidélité',
      'Rapports détaillés',
    ],
  },
  {
    img: IMAGES.boutique,
    icon: <Shirt size={20} />,
    title: 'Boutiques & prêt-à-porter',
    items: [
      'Gestion des tailles et couleurs',
      'Suivi des collections',
      'Ventes par caissier',
      'Gestion des retours et avoirs',
      'Fidélité et promotions',
    ],
  },
  {
    img: IMAGES.boulangerie,
    icon: <Cake size={20} />,
    title: 'Boulangeries & pâtisseries',
    items: [
      'Encaissement rapide',
      'Gestion des familles produits',
      'Suivi des ventes par rayon',
      'Gestion des offres et promotions',
      'Rapports de ventes détaillés',
    ],
  },
  {
    img: IMAGES.epicerie,
    icon: <Apple size={20} />,
    title: 'Épiceries & alimentation générale',
    items: [
      'Gestion complète des articles',
      'Suivi des stocks en temps réel',
      'Promotions et remises',
      'Encaissement simple',
      'Rapports et statistiques',
    ],
  },
  {
    img: IMAGES.bazar,
    icon: <Sofa size={20} />,
    title: 'Bazar & maison',
    items: [
      "Gestion des familles d'articles",
      'Catalogue multi-familles',
      'Suivi des ventes par rayon',
      'Promotions et soldes',
      'Gestion des retours',
    ],
  },
  {
    img: IMAGES.parfumerie,
    icon: <Sparkles size={20} />,
    title: 'Parfumeries & cosmétiques',
    items: [
      'Gestion des marques et gammes',
      'Suivi des stocks',
      'Offres et coffrets promotionnels',
      'Fidélisation clients',
      'Rapports par catégorie',
    ],
  },
  {
    img: IMAGES.librairie,
    icon: <BookOpen size={20} />,
    title: 'Librairies & papeteries',
    items: [
      'Classification par catégories',
      'Gestion des stocks',
      'Suivi des ventes par famille',
      'Codes-barres et étiquetage',
      'Rapports détaillés',
    ],
  },
  {
    img: IMAGES.specialise,
    icon: <Settings size={20} />,
    title: 'Commerces spécialisés',
    items: [
      'Solution flexible et personnalisée',
      'Gestion des articles sur mesure',
      'Promotions ciblées',
      'Suivi des ventes et marges',
      'Rapports par activité',
    ],
  },
];

const footerItems = [
  {
    icon: <Settings size={28} />,
    title: 'Installation et paramétrage',
    text: 'Une mise en place rapide et efficace',
  },
  {
    icon: <Users size={28} />,
    title: 'Formation de vos équipes',
    text: 'Une prise en main simple et rapide',
  },
  {
    icon: <Headphones size={28} />,
    title: 'Assistance technique',
    text: 'Un support réactif et professionnel',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Une solution évolutive',
    text: 'Pour accompagner votre croissance',
  },
];

/* ================= MINI-MAQUETTES ================= */

const MockStock = () => (
  <div className="mock">
    <div className="mock-title">Stock des articles</div>

    <table className="mock-table">
      <thead>
        <tr>
          <th>Article</th>
          <th>Stock</th>
          <th>Prix</th>
          <th>Famille</th>
        </tr>
      </thead>
      <tbody>
        {stockRows.map((row) => (
          <tr key={String(row[0])}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const MockArticle = () => (
  <div className="mock mock-article">
    <div className="mock-title">Fiche article</div>

    <div className="article-body">
      <img
        className="article-photo"
        src={IMAGES.article}
        alt="Exemple de fiche article"
        loading="lazy"
      />

      <dl>
        <dt>Nom</dt>
        <dd>JACKETTE SLIM</dd>
        <dt>Famille</dt>
        <dd>FASHION</dd>
        <dt>Prix de vente</dt>
        <dd>580,00</dd>
        <dt>Code-barre</dt>
        <dd>1234567890123</dd>
        <dt>Stock</dt>
        <dd>6</dd>
      </dl>
    </div>
  </div>
);

const MockClient = () => (
  <div className="mock mock-client">
    <div className="mock-title">Fiche client</div>

    <div className="client-body">
      <div className="client-avatar">
        <User size={28} />
      </div>

      <dl>
        <dt>Nom</dt>
        <dd>Ahmed Benali</dd>
        <dt>Téléphone</dt>
        <dd>06xxxxxxxx</dd>
        <dt>Email</dt>
        <dd>ahmed@email.com</dd>
        <dt>Solde points</dt>
        <dd>320</dd>
        <dt>Remise</dt>
        <dd>5 %</dd>
        <dt>Catégorie</dt>
        <dd>Client fidèle</dd>
      </dl>
    </div>
  </div>
);

const MockStats = () => (
  <div className="mock">
    <div className="mock-title">
      Statistiques de ventes
      <span>Ce mois</span>
    </div>

    <div className="chart">
      {bars.map((height, index) => (
        <span key={index} style={{ height: `${height}%` }} />
      ))}
    </div>

    <div className="kpis">
      <div>
        <Euro size={16} color="#16a34a" />
        <b>125 680 DH</b>
        <small>Chiffre d'affaires</small>
      </div>
      <div>
        <Ticket size={16} color="#f59e0b" />
        <b>2 350</b>
        <small>Tickets</small>
      </div>
      <div>
        <Boxes size={16} color="#2563eb" />
        <b>1 248</b>
        <small>Articles vendus</small>
      </div>
    </div>
  </div>
);

const MockStores = () => (
  <div className="mock">
    <div className="mock-title">Mes magasins</div>

    <table className="mock-table">
      <thead>
        <tr>
          <th>Magasin</th>
          <th>Ville</th>
          <th>Statut</th>
          <th>CA du jour</th>
        </tr>
      </thead>

      <tbody>
        {stores.map(([name, city, revenue]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{city}</td>
            <td>
              <span className="dot" /> Ouvert
            </td>
            <td>{revenue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const MockPos = () => (
  <div className="mock mock-pos">
    <div className="pos-left">
      <div className="pos-head">Ticket de vente</div>
      <p>Article 01&nbsp; — 120 DH</p>
      <p>Article 02&nbsp; — 85 DH</p>
      <hr />
      <strong>Total : 205 DH</strong>
    </div>

    <div className="pos-keys">
      <span>Articles</span>
      <span>Clients</span>
      <span>Remise</span>
      <span>Espèces</span>
      <span>Carte</span>
      <span>Valider</span>
    </div>
  </div>
);

const mocks: Record<string, ReactNode> = {
  pos: <MockPos />,
  stock: <MockStock />,
  article: <MockArticle />,
  client: <MockClient />,
  stats: <MockStats />,
  stores: <MockStores />,
};

/* ================= PAGE INNOSHOP ================= */

export default function InnoShop() {
  const goToContact = () => {
    window.location.href = '/#contact';
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const half = Math.ceil(CLIENT_LOGOS.length / 2);
  const rowOne = CLIENT_LOGOS.slice(0, half);
  const rowTwo = CLIENT_LOGOS.slice(half);

  return (
    <main className="innoshop">
      <style>{MARQUEE_CSS}</style>

      {/* HERO */}
      <section className="hero" id="innoshop-accueil">
        <div className="hero-card">
          <div className="hero-grid">
            <div className="hero-visual">
              <span className="hero-visual-badge">
                <span className="hero-visual-dot" />
                Une activité mieux connectée
              </span>
              <div className="hero-visual-bg" aria-hidden="true">
                <img src={IMAGES.hero} alt="" />
                <div className="hero-visual-tint" />
              </div>

              <img
                className="hero-visual-img"
                src={IMAGES.hero}
                alt="Interface de caisse INNOSHOP"
                loading="eager"
              />
            </div>

            <div className="hero-text">
              <span className="hero-eyebrow">
                <span className="hero-eyebrow-dot" />
                Solutions commerce &amp; retail
              </span>

              <h1 className="hero-heading">
                La solution de gestion commerciale{' '}
                <span>pensée pour votre commerce.</span>
              </h1>

              <p className="hero-sub">
                Une solution complète pour encaisser, gérer vos stocks,
                fidéliser vos clients et piloter votre activité. Gagnez
                du temps et améliorez l'expérience de vos clients.
              </p>

              <div className="hero-actions">
                <button
                  type="button"
                  className="innoshop-btn innoshop-btn-red"
                  onClick={goToContact}
                >
                  Demander une démonstration
                  <ArrowRight size={18} />
                </button>

                <button
                  type="button"
                  className="innoshop-btn innoshop-btn-outline"
                  onClick={() =>
                    scrollToSection('innoshop-fonctionnalites')
                  }
                >
                  Découvrir nos solutions
                </button>
              </div>

              <div className="hero-checks">
                <span>
                  <Check size={17} />
                  Solution complète
                </span>
                <span>
                  <Check size={17} />
                  Accompagnement personnalisé
                </span>
              </div>
            </div>
          </div>

          <div className="hero-banner">
            <span className="hero-banner-icon">
              <Sparkles size={44} strokeWidth={1.6} />
            </span>
            <div className="hero-banner-text">
              <strong>Toute votre activité, mieux connectée.</strong>
              <span>
                Caisse, stocks, clients et reporting réunis dans une seule
                solution pensée pour votre commerce.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="section features" id="innoshop-fonctionnalites">
        <div className="section-heading">
          <span className="section-eyebrow">Une solution complète</span>
          <h2 className="title">
            Les fonctionnalités majeures d'<Logo size="inline" />
          </h2>
          <p className="subtitle">
            Une solution ergonomique et performante pour piloter l'ensemble de votre commerce.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article className="card feature-card" key={feature.n}>
              <div className="card-top-header">
                <span className="feature-badge">#{feature.n}</span>
                <RedIcon round={true}>{feature.icon}</RedIcon>
              </div>

              <div className="feature-card-content">
                <h3>{feature.title}</h3>
                <Bullets items={feature.items} />
              </div>

              <div className="feature-mockup-wrapper">
                {mocks[feature.mock]}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* POURQUOI */}
      <section className="why">
        <div className="why-top">
          <div className="why-text">
            <span className="section-eyebrow">
              Votre commerce, notre priorité
            </span>

            <h2>
              Pourquoi choisir <Logo size="xl" /> ?
            </h2>

            <p>
              Une solution fiable et performante pour accompagner
              la croissance de votre commerce, centraliser vos opérations
              et simplifier votre quotidien.
            </p>

            <button
              type="button"
              className="innoshop-btn innoshop-btn-red"
              onClick={goToContact}
            >
              Parlons de votre projet
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="why-photo-wrap">
            <img
              className="why-photo"
              src={IMAGES.commercante}
              alt="Commerçante utilisant une solution de gestion"
              loading="lazy"
            />

            <div className="why-photo-caption">
              <span className="why-photo-caption-icon">
                <CheckCircle2 size={23} />
              </span>
              <div>
                <strong>Une gestion simplifiée</strong>
                <span>Des outils adaptés à votre activité</span>
              </div>
            </div>
          </div>
        </div>

        <div className="why-grid">
          {whyCards.map((card) => (
            <div className="card why-card" key={card.title}>
              <RedIcon>{card.icon}</RedIcon>
              <div>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MÉTIERS */}
      <section className="section trades" id="innoshop-metiers">
        <div className="section-heading">
          <span className="section-eyebrow">
            Une solution polyvalente
          </span>

          <h2 className="title red-title">
            <Logo size="inline" /> s'adapte à tous
            <span> les métiers du commerce</span>
          </h2>

          <p className="subtitle">
            Une solution adaptée aux spécificités de chaque point de vente.
          </p>
        </div>

        <div className="grid-4">
          {trades.map((trade) => (
            <article className="trade-card" key={trade.title}>
              <div className="trade-image-wrap">
                <img
                  className="trade-img"
                  src={trade.img}
                  alt={trade.title}
                  loading="lazy"
                />
              </div>

              <div className="trade-body">
                <h4>
                  <RedIcon>{trade.icon}</RedIcon>
                  <span>{trade.title}</span>
                </h4>

                <Bullets items={trade.items} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONFIANCE : LOGOS CLIENTS */}
      <section className="innoshop-trust" id="innoshop-clients">
        <span className="innoshop-trust-eyebrow">Nos références</span>
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

      {/* CTA */}
      <section className="cta" id="innoshop-contact">
        <div className="cta-text">
          <span className="cta-eyebrow">
            Prêt à passer à l'étape suivante ?
          </span>

          <h2>
            Passez à une gestion plus performante avec <Logo size="xl" />
          </h2>

          <p>
            Découvrez comment INNOSHOP peut répondre aux besoins
            de votre commerce et faciliter la gestion de votre activité.
          </p>
        </div>

        <div className="cta-buttons">
          <a
            href="/#contact"
            className="btn btn-dark"
          >
            <Calendar size={20} />
            Demander une démonstration
            <ArrowRight size={17} />
          </a>

          <a
            href="/#contact"
            className="btn btn-light"
          >
            <Phone size={20} />
            Nous contacter
          </a>
        </div>
      </section>

      {/* FOOTER SPÉCIFIQUE INNOSHOP */}
      <footer className="footer">
        {footerItems.map((item) => (
          <div className="footer-item" key={item.title}>
            <span className="footer-icon">{item.icon}</span>
            <div>
              <b>{item.title}</b>
              <small>{item.text}</small>
            </div>
          </div>
        ))}
      </footer>
    </main>
  );
}
import React, { useState, type ReactNode } from 'react';
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

import heroImage from '@/assets/comm.jpeg';
import commercanteImage from '@/assets/teet.jpeg';
import articleImage from '@/assets/article.jpg';
import supermarcheImage from '@/assets/march.jpeg';
import boutiqueImage from '@/assets/bout.jpeg';
import boulangerieImage from '@/assets/boul.jpeg';
import epicerieImage from '@/assets/picerie.jpeg';
import bazarImage from '@/assets/bazzard.jpeg';
import parfumerieImage from '@/assets/perfume.jpeg';
import librairieImage from '@/assets/libr.jpeg';
import supportImage from '@/assets/supportt.jpeg';
import commercesImage from '@/assets/shoop.jpeg';

/* =====================================================
   LIEN DES CARTES MÉTIERS
   Chemin de la page Innoshop : adaptez-le à votre route réelle
   (ex. '/innoshop', '/Innoshop', '/solutions/innoshop'...)
===================================================== */

const INNOSHOP_LINK = '/innoshop';

/* =====================================================
   IMAGES
===================================================== */

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
  specialise: commercesImage,
};

/* =====================================================
   LOGOS CLIENTS
===================================================== */

type ClientLogo = {
  name: string;
  src?: string;
};

const logoModules = import.meta.glob<string>(
  '/src/assets/innoshop/*.{png,jpg,jpeg,webp,svg}',
  {
    eager: true,
    import: 'default',
  }
);

const REAL_LOGOS: ClientLogo[] = Object.entries(logoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const file = path.split('/').pop() || 'client';

    return {
      name: file.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
      src,
    };
  });

const PLACEHOLDER_LOGOS: ClientLogo[] = Array.from(
  { length: 24 },
  (_, index) => ({
    name: `Client ${String(index + 1).padStart(2, '0')}`,
  })
);

const CLIENT_LOGOS: ClientLogo[] = REAL_LOGOS.length
  ? REAL_LOGOS
  : PLACEHOLDER_LOGOS;

/* =====================================================
   COMPOSANTS RÉUTILISABLES
===================================================== */

function MarqueeRow({
  logos,
  reverse = false,
  speed = 60,
}: {
  logos: ClientLogo[];
  reverse?: boolean;
  speed?: number;
}) {
  const loop = [...logos, ...logos];

  return (
    <div className="clients-marquee">
      <div
        className={`clients-track${reverse ? ' reverse' : ''}`}
        style={
          {
            '--clients-speed': `${speed}s`,
          } as React.CSSProperties
        }
      >
        {loop.map((logo, index) => (
          <div className="client-card" key={`${logo.name}-${index}`}>
            {logo.src ? (
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className="client-ph">{logo.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Logo({
  size = 'lg',
}: {
  size?: 'lg' | 'xl' | 'inline';
}) {
  return (
    <span className={`logo logo-${size}`}>
      INN<span className="logo-o">O</span>SHOP
    </span>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="bullets">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Ico({
  children,
  solid = false,
}: {
  children: ReactNode;
  solid?: boolean;
}) {
  return (
    <span className={`ns-ico${solid ? ' solid' : ''}`} aria-hidden="true">
      {children}
    </span>
  );
}

/* =====================================================
   DONNÉES DES MAQUETTES
===================================================== */

const stockRows: (string | number)[][] = [
  ['Eau', 1200, '6,00 DH', 'Boissons'],
  ['Lait', 350, '12,00 DH', 'Produits laitiers'],
  ['Riz', 180, '15,00 DH', 'Épicerie'],
  ['Huile', 95, '25,00 DH', 'Épicerie'],
  ['Sucre', 210, '9,00 DH', 'Épicerie'],
];

const stores = [
  ['Magasin 1', 'Casablanca', '12 560 DH'],
  ['Magasin 2', 'Rabat', '8 230 DH'],
  ['Magasin 3', 'Marrakech', '9 450 DH'],
  ['Magasin 4', 'Tanger', '7 690 DH'],
];

const bars = [30, 45, 38, 60, 52, 70, 48, 66, 80, 58, 72, 90];

/* =====================================================
   FONCTIONNALITÉS
===================================================== */

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

/* =====================================================
   POURQUOI INNOSHOP
===================================================== */

const whyCards = [
  {
    icon: <Clock size={22} />,
    title: 'Gagnez du temps',
    text: 'Des encaissements rapides et une gestion simplifiée de vos opérations.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Maîtrisez votre activité',
    text: 'Un suivi en temps réel de vos stocks, ventes et performances.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Développez vos ventes',
    text: 'Des outils pour vos promotions, remises et fidélisation clients.',
  },
  {
    icon: <Headphones size={22} />,
    title: "Profitez d'un accompagnement",
    text: 'Installation, formation et assistance technique par des experts.',
  },
];

/* =====================================================
   MÉTIERS
===================================================== */

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

/* =====================================================
   FOOTER
===================================================== */

const footerItems = [
  {
    icon: <Settings size={24} />,
    title: 'Installation et paramétrage',
    text: 'Une mise en place rapide et efficace',
  },
  {
    icon: <Users size={24} />,
    title: 'Formation de vos équipes',
    text: 'Une prise en main simple et rapide',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Assistance technique',
    text: 'Un support réactif et professionnel',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Une solution évolutive',
    text: 'Pour accompagner votre croissance',
  },
];

/* =====================================================
   MINI-MAQUETTES
===================================================== */

function MockStock() {
  return (
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
}

function MockArticle() {
  return (
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
          <dd>580,00 DH</dd>
          <dt>Code-barre</dt>
          <dd>1234567890123</dd>
          <dt>Stock</dt>
          <dd>6</dd>
        </dl>
      </div>
    </div>
  );
}

function MockClient() {
  return (
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
}

function MockStats() {
  return (
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
          <Euro size={16} color="#e87532" />
          <b>125 680 DH</b>
          <small>Chiffre d'affaires</small>
        </div>

        <div>
          <Ticket size={16} color="#e87532" />
          <b>2 350</b>
          <small>Tickets</small>
        </div>

        <div>
          <Boxes size={16} color="#e87532" />
          <b>1 248</b>
          <small>Articles vendus</small>
        </div>
      </div>
    </div>
  );
}

function MockStores() {
  return (
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
}

function MockPos() {
  return (
    <div className="mock mock-pos">
      <div className="pos-left">
        <div className="pos-head">Ticket de vente</div>
        <p>Article 01 — 120 DH</p>
        <p>Article 02 — 85 DH</p>
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
}

const mocks: Record<string, ReactNode> = {
  pos: <MockPos />,
  stock: <MockStock />,
  article: <MockArticle />,
  client: <MockClient />,
  stats: <MockStats />,
  stores: <MockStores />,
};

/* =====================================================
   PAGE INNOSHOP
===================================================== */

export default function InnoShop() {
  const [active, setActive] = useState(0);
  const [activeService, setActiveService] = useState<number | null>(0);
  const current = features[active];

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
    <main className="ns">

      {/* ================= HERO PREMIUM ================= */}
      <section className="ns-hero ns-hero-premium" id="innoshop-accueil">

        {/* Image de fond */}
        <div className="ns-hero-background">
          <img
            src={IMAGES.hero}
            alt="Solution de caisse et de gestion INNOSHOP"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Voiles et lumières */}
        <div className="ns-hero-overlay" />
        <div className="ns-hero-bottom-overlay" />
        <div className="ns-hero-glow ns-hero-glow-one" />
        <div className="ns-hero-glow ns-hero-glow-two" />

        <div className="ns-wrap ns-hero-content">

          <div className="ns-hero-copy">

            <span className="ns-hero-badge">
              <span className="ns-hero-badge-dot">
                <span />
              </span>
              Solutions commerce &amp; retail
            </span>

            <h1>
              La solution de gestion commerciale
              <span>pensée pour votre commerce.</span>
            </h1>

            <p className="ns-hero-sub">
              Une solution complète pour encaisser, gérer vos stocks, fidéliser
              vos clients et piloter votre activité. Gagnez du temps et améliorez
              l'expérience de vos clients.
            </p>

            <div className="ns-hero-checks">
              <span>
                <CheckCircle2 size={19} />
                Solution complète
              </span>

              <span>
                <ShieldCheck size={19} />
                Accompagnement personnalisé
              </span>
            </div>

            <div className="ns-hero-actions">
              <button
                type="button"
                className="ns-btn ns-btn-fill"
                onClick={goToContact}
              >
                Demander une démonstration
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="ns-btn ns-btn-line"
                onClick={() => scrollToSection('innoshop-fonctionnalites')}
              >
                Découvrir nos solutions
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="ns-hero-trust">
              <span className="ns-hero-trust-line" />
              <span>Encaissement</span>
              <span className="ns-hero-trust-separator">·</span>
              <span>Stocks</span>
              <span className="ns-hero-trust-separator">·</span>
              <span>Reporting</span>
            </div>
          </div>
        </div>

        <div className="ns-hero-floating-card">
          <span className="ns-hero-floating-icon">
            <ShoppingCart size={21} />
          </span>
          <span>
            <b>INNOSHOP</b>
            <small>La gestion simplifiée</small>
          </span>
          <span className="ns-hero-floating-check">
            <Check size={16} />
          </span>
        </div>
      </section>

      {/* ================= MÉTIERS ================= */}
      <section className="ns-trades" id="innoshop-metiers">
        <div className="ns-wrap">
          <div className="ns-head">
            <span className="ns-pill">Une solution polyvalente</span>

            <h2 className="ns-title">
              <Logo size="inline" /> s'adapte à tous{' '}
              <em>les métiers du commerce</em>
            </h2>

            <p className="ns-sub">
              Une solution adaptée aux spécificités de chaque point de vente.
            </p>
          </div>

          {/* Chaque carte est un lien vers la page Innoshop */}
          <div className="ns-trades-grid">
            {trades.map((trade) => (
              <a
                href={INNOSHOP_LINK}
                className="ns-trade"
                key={trade.title}
                aria-label={`Découvrir INNOSHOP pour ${trade.title}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={trade.img}
                  alt={trade.title}
                  loading="lazy"
                  decoding="async"
                />

                <div className="ns-trade-body">
                  <h4>
                    <Ico solid>{trade.icon}</Ico>
                    <span>{trade.title}</span>
                  </h4>

                  <Bullets items={trade.items} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FONCTIONNALITÉS ================= */}
      <section className="ns-features" id="innoshop-fonctionnalites">
        <div className="ns-wrap">
          <div className="ns-head">
            <span className="ns-pill">Une solution complète</span>

            <h2 className="ns-title">
              Les fonctionnalités majeures d'<Logo size="inline" />
            </h2>

            <p className="ns-sub">
              Une solution ergonomique et performante pour piloter l'ensemble
              de votre commerce.
            </p>
          </div>

          <div className="ns-tabs">
            <div
              className="ns-tablist"
              role="tablist"
              aria-label="Fonctionnalités INNOSHOP"
            >
              {features.map((feature, index) => (
                <button
                  type="button"
                  role="tab"
                  id={`innoshop-tab-${feature.n}`}
                  aria-controls="innoshop-feature-panel"
                  aria-selected={index === active}
                  className={`ns-tab${index === active ? ' on' : ''}`}
                  key={feature.n}
                  onClick={() => setActive(index)}
                >
                  <span className="ns-tab-n">{feature.n}</span>
                  <span className="ns-tab-t">{feature.title}</span>
                  <Ico solid={index === active}>{feature.icon}</Ico>
                </button>
              ))}
            </div>

            <div
              className="ns-panel"
              id="innoshop-feature-panel"
              key={current.n}
              role="tabpanel"
              aria-labelledby={`innoshop-tab-${current.n}`}
            >
              <div>
                <div className="ns-panel-big">{current.n}</div>
                <h3>{current.title}</h3>
                <Bullets items={current.items} />
              </div>

              <div>{mocks[current.mock]}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POURQUOI INNOSHOP ================= */}
      <section className="ns-why">
        <div className="ns-wrap">
          <div className="ns-bento">
            <div className="ns-photo">
              <img
                src={IMAGES.commercante}
                alt="Commerçante utilisant une solution de gestion"
                loading="lazy"
                decoding="async"
              />

              <div className="ns-photo-cap">
                <Ico solid>
                  <CheckCircle2 size={22} />
                </Ico>

                <h3>Une gestion simplifiée</h3>
                <p>Des outils adaptés à votre activité</p>
              </div>
            </div>

            <div className="ns-why-intro">
              <span className="ns-pill ns-why-pill">
                Votre commerce, notre priorité
              </span>

              <h2>
                Pourquoi choisir <Logo size="xl" /> ?
              </h2>

              <p>
                Une solution fiable et performante pour accompagner la
                croissance de votre commerce, centraliser vos opérations et
                simplifier votre quotidien.
              </p>

              <button
                type="button"
                className="ns-btn ns-btn-fill"
                onClick={goToContact}
              >
                Parlons de votre projet
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="ns-why-grid">
              {whyCards.map((card) => (
                <div className="ns-why-card" key={card.title}>
                  <Ico>{card.icon}</Ico>

                  <div>
                    <h4>{card.title}</h4>
                    <p>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section className="ns-trust" id="innoshop-clients">
        <div className="ns-wrap">
          <div className="ns-head" style={{ marginBottom: 0 }}>
            <span className="ns-pill">Nos références</span>

            <h2 className="ns-title">
              Soyez parmi ceux qui nous font confiance
            </h2>

            <p className="ns-count">
              Plus de {CLIENT_LOGOS.length} établissements utilisent déjà nos
              solutions au quotidien.
            </p>
          </div>
        </div>

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

      {/* ================= NOS SERVICES ================= */}
      <section className="ns-services" id="innoshop-services">
        <div className="ns-wrap ns-services-container">

          {/* IMAGE */}
          <div className="ns-services-image">
            <img
              src={supportImage}
              alt="Accompagnement et support technique PC MAROC"
              loading="lazy"
              decoding="async"
            />

            <div className="ns-services-image-card">
              <span className="ns-services-image-icon">
                <Headphones size={24} />
              </span>

              <div>
                <strong>PC MAROC</strong>
                <span>À vos côtés à chaque étape</span>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="ns-services-content">

            <span className="ns-pill">
              NOS SERVICES
            </span>

            <h2>
              Bien plus qu'un logiciel,
              <span> un véritable accompagnement.</span>
            </h2>

            <p className="ns-services-desc">
              Chez PC MAROC, nous vous accompagnons à chaque étape
              pour garantir une utilisation optimale de votre solution.
              Notre équipe met son expertise à votre service pour
              simplifier votre quotidien et développer votre activité.
            </p>

            <div className="ns-services-accordion">

              {/* SERVICE 1 */}
              <div className={`ns-service-item ${activeService === 0 ? 'active' : ''}`}>
                <button
                  type="button"
                  className="ns-service-header"
                  onClick={() =>
                    setActiveService(activeService === 0 ? null : 0)
                  }
                  aria-expanded={activeService === 0}
                >
                  <span className="ns-service-number">01</span>

                  <span className="ns-service-title">
                    Conseil et formation
                  </span>

                  <span className="ns-service-toggle">
                    {activeService === 0 ? '−' : '+'}
                  </span>
                </button>

                {activeService === 0 && (
                  <div className="ns-service-body">
                    Notre équipe vous accompagne dans le choix et la
                    prise en main de votre solution. Nous analysons
                    vos besoins afin de vous proposer les meilleures
                    solutions et de former vos équipes à leur utilisation.
                  </div>
                )}
              </div>

              {/* SERVICE 2 */}
              <div className={`ns-service-item ${activeService === 1 ? 'active' : ''}`}>
                <button
                  type="button"
                  className="ns-service-header"
                  onClick={() =>
                    setActiveService(activeService === 1 ? null : 1)
                  }
                  aria-expanded={activeService === 1}
                >
                  <span className="ns-service-number">02</span>

                  <span className="ns-service-title">
                    Installation et paramétrage
                  </span>

                  <span className="ns-service-toggle">
                    {activeService === 1 ? '−' : '+'}
                  </span>
                </button>

                {activeService === 1 && (
                  <div className="ns-service-body">
                    Nous assurons l'installation et le paramétrage
                    de votre solution afin de vous permettre de
                    démarrer dans les meilleures conditions.
                    Notre équipe veille au bon fonctionnement de
                    votre environnement de travail.
                  </div>
                )}
              </div>

              {/* SERVICE 3 */}
              <div className={`ns-service-item ${activeService === 2 ? 'active' : ''}`}>
                <button
                  type="button"
                  className="ns-service-header"
                  onClick={() =>
                    setActiveService(activeService === 2 ? null : 2)
                  }
                  aria-expanded={activeService === 2}
                >
                  <span className="ns-service-number">03</span>

                  <span className="ns-service-title">
                    Support technique
                  </span>

                  <span className="ns-service-toggle">
                    {activeService === 2 ? '−' : '+'}
                  </span>
                </button>

                {activeService === 2 && (
                  <div className="ns-service-body">
                    Notre support technique vous accompagne au quotidien
                    pour répondre à vos questions, résoudre vos difficultés
                    et vous aider à exploiter pleinement les fonctionnalités
                    de votre solution.
                  </div>
                )}
              </div>

            </div>

            <button
              type="button"
              className="ns-btn ns-btn-fill ns-services-contact"
              onClick={goToContact}
            >
              Besoin d'accompagnement ?
              <ArrowRight size={18} />
            </button>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="ns-cta" id="innoshop-contact">
        <div className="ns-wrap">
          <div className="ns-cta-box">
            <span className="ns-pill">
              Prêt à passer à l'étape suivante ?
            </span>

            <h2>
              Passez à une gestion plus performante avec{' '}
              <Logo size="xl" />
            </h2>

            <p>
              Découvrez comment INNOSHOP peut répondre aux besoins de votre
              commerce et faciliter la gestion de votre activité.
            </p>

            <div className="ns-cta-actions">
              <a href="/#contact" className="ns-btn ns-btn-fill">
                <Calendar size={20} />
                Demander une démonstration
                <ArrowRight size={17} />
              </a>

              <a href="/#contact" className="ns-btn ns-btn-line">
                <Phone size={20} />
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="ns-footer">
        <div className="ns-wrap ns-footer-grid">
          {footerItems.map((item) => (
            <div className="ns-fitem" key={item.title}>
              <Ico>{item.icon}</Ico>

              <div>
                <b>{item.title}</b>
                <small>{item.text}</small>
              </div>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}
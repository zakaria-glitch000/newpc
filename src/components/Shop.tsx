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

import heroImage from '@/assets/shoop.jpeg';
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

const Ico = ({
  children,
  solid = false,
}: {
  children: ReactNode;
  solid?: boolean;
}) => <span className={`ns-ico${solid ? ' solid' : ''}`}>{children}</span>;

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

const tickerWords = [
  'Encaissement',
  'Stocks',
  'Articles & tarifs',
  'Fidélité clients',
  'Reporting',
  'Multi-magasins',
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
        <Euro size={16} color="#ff6a00" />
        <b>125 680 DH</b>
        <small>Chiffre d'affaires</small>
      </div>
      <div>
        <Ticket size={16} color="#ff8a1f" />
        <b>2 350</b>
        <small>Tickets</small>
      </div>
      <div>
        <Boxes size={16} color="#ffb347" />
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
  const [active, setActive] = useState(0);
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
      {/* HERO */}
      <section className="ns-hero" id="innoshop-accueil">
        <div className="ns-wrap">
          <span className="ns-pill">
            <span className="ns-dot" />
            Solutions commerce &amp; retail
          </span>

          <h1>
            La solution de gestion commerciale{' '}
            <span>pensée pour votre commerce.</span>
          </h1>

          <p className="ns-hero-sub">
            Une solution complète pour encaisser, gérer vos stocks, fidéliser
            vos clients et piloter votre activité. Gagnez du temps et améliorez
            l'expérience de vos clients.
          </p>

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
            </button>
          </div>

          <div className="ns-hero-checks">
            <span>
              <Check size={17} />
              Solution complète
            </span>
            <span>
              <Check size={17} />
              Accompagnement personnalisé
            </span>
          </div>

          <div className="ns-stage">
            <span className="ns-chip c1">
              <ShoppingCart size={18} /> Caisse
            </span>
            <span className="ns-chip c2">
              <Package size={18} /> Stocks
            </span>
            <span className="ns-chip c3">
              <BarChart3 size={18} /> Reporting
            </span>

            <div className="ns-stage-frame">
              <img
                src={IMAGES.hero}
                alt="Interface de caisse INNOSHOP"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="ns-ticker" aria-hidden="true">
          <div className="ns-ticker-track">
            {[...tickerWords, ...tickerWords, ...tickerWords, ...tickerWords].map(
              (w, i) => (
                <span key={i}>{w}</span>
              )
            )}
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS : ONGLETS */}
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
            <div className="ns-tablist" role="tablist">
              {features.map((f, i) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className={`ns-tab${i === active ? ' on' : ''}`}
                  key={f.n}
                  onClick={() => setActive(i)}
                >
                  <span className="ns-tab-n">{f.n}</span>
                  <span className="ns-tab-t">{f.title}</span>
                  <Ico solid={i === active}>{f.icon}</Ico>
                </button>
              ))}
            </div>

            <div className="ns-panel" key={current.n} role="tabpanel">
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

      {/* POURQUOI : BENTO */}
      <section className="ns-why">
        <div className="ns-wrap">
          <div className="ns-bento">
            <div className="ns-photo">
              <img
                src={IMAGES.commercante}
                alt="Commerçante utilisant une solution de gestion"
                loading="lazy"
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
              <span className="ns-pill" style={{ alignSelf: 'flex-start' }}>
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

      {/* MÉTIERS */}
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

          <div className="ns-trades-grid">
            {trades.map((trade) => (
              <article className="ns-trade" key={trade.title} tabIndex={0}>
                <img src={trade.img} alt={trade.title} loading="lazy" />
                <div className="ns-trade-body">
                  <h4>
                    <Ico solid>{trade.icon}</Ico>
                    <span>{trade.title}</span>
                  </h4>
                  <Bullets items={trade.items} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIANCE : LOGOS CLIENTS */}
      <section className="ns-trust" id="innoshop-clients">
        <div className="ns-wrap">
          <div className="ns-head" style={{ marginBottom: 0 }}>
            <span className="ns-pill">Nos références</span>
            <h2 className="ns-title">Soyez parmi ceux qui nous font confiance</h2>
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

      {/* CTA */}
      <section className="ns-cta" id="innoshop-contact">
        <div className="ns-wrap">
          <div className="ns-cta-box">
            <span className="ns-pill">Prêt à passer à l'étape suivante ?</span>

            <h2>
              Passez à une gestion plus performante avec <Logo size="xl" />
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

      {/* FOOTER SPÉCIFIQUE INNOSHOP */}
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
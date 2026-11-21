import { useEffect, useState, type ElementType } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  BedDouble,
  Building2,
  ChefHat,
  Coffee,
  ConciergeBell,
  Croissant,
  MessageCircle,
  Pizza,
  Sandwich,
  ShoppingCart,
  Store,
  CalendarCheck,
  CalendarDays,
  ChartNoAxesCombined,
  CheckCircle,
  Coins,
  Cpu,
  Headphones,
  Laptop,
  Package,
  Phone,
  Receipt,
  RefreshCw,
  Rocket,
  Settings,
  ShieldCheck,
  Sparkles,
  Tablet,
  TrendingUp,
  Users,
  Utensils,
  Bike,
  Check,
  QrCode,
  ShoppingBag,
} from 'lucide-react';

import heroImage from '@/assets/bn.jpg';
import caisseImage from '@/assets/ev.jpeg';
import pdImage from '@/assets/prc.jpeg';
import kdsImage from '@/assets/orga.jpeg';
import ERP_IMAGE from '@/assets/og.jpeg';
import ERPP_IMAGE from '@/assets/bo.jpeg';
import REPORTIN_IMAGE from '@/assets/rep.jpeg';

import REPORTING_IMAGE from '@/assets/av.jpeg';
import caiImage from '@/assets/ca.jpeg';
import supportImage from '@/assets/supportt.jpeg';
import herImage from '@/assets/cho.jpeg';

import techHeroImage from '@/assets/bn.jpg'; // caisse + sac + jus
import clickCollectImage from '@/assets/cc.jpeg';
import qrOrderImage from '@/assets/qr.jpeg';

/* Images « métiers » : adaptez les noms / extensions à vos vrais fichiers */
import posImage from '@/assets/00.png';
import fastFoodImage from '@/assets/ff.jpeg';
import restaurantImage from '@/assets/rs.jpeg';
import pizzeriaImage from '@/assets/pizzeria.jpeg';
import boulangerieImage from '@/assets/bl.jpeg';
import courtFoodImage from '@/assets/fc.jpeg';
import cafeBarImage from '@/assets/cafe.jpeg';
import hotellerieImage from '@/assets/hotel.jpeg';
import themeImage from '@/assets/theme.jpeg';

/* =====================================================
    CONTACT
===================================================== */

const CONTACT_LINK = '/#contact';

/* Pages vers lesquelles pointent les 2 cartes « Pilotez votre restaurant ».
   Adaptez ces chemins aux routes réelles du site. */
const GMS_LINK = '/gms';
const REPORT_LINK = 'https://wa.me/212661973253';

/* =====================================================
    COULEURS DE LA SECTION FONCTIONNALITÉS
    (orange CSI, comme le reste de la page)
===================================================== */

const ACCENT = '#f26522';
const ACCENT_SOFT = '#fff1e8';
const IMAGE_BG = '#fde9dc';

/* =====================================================
    DATA
===================================================== */

const TOP_BENEFITS: { icon: ElementType; lines: [string, string] }[] = [
  { icon: Utensils, lines: ['Service', 'plus rapide'] },
  { icon: ChartNoAxesCombined, lines: ['Meilleure', 'rentabilité'] },
  { icon: Users, lines: ['Expérience client', 'améliorée'] },
  { icon: Settings, lines: ['Gestion', 'maîtrisée'] },
];

type Feature = {
  icon: ElementType;
  title: string;
  text: string;
  image: string;
  items: string[];
};

const FEATURES: Feature[] = [
  {
    icon: Receipt,
    title: 'Encaissement et ventes',
    text: 'Un encaissement rapide, sécurisé et conforme (NF525) avec tous les modes de paiement. Gérez facilement les annulations, les remises, les amalgames et la clôture de caisse.',
    image: caisseImage,
    items: [
      'Ventes sur place, à emporter et en livraison',
      'Plusieurs modes de paiement',
      'Gestion des additions et des partages',
      'Remises, offres et cartes cadeaux',
    ],
  },
  {
    icon: Tablet,
    title: 'Prise de commande et gestion des tables',
    text: 'Simplifiez le service avec une prise de commande rapide et mobile, une gestion claire des tables et un envoi instantané des commandes en cuisine.',
    image: pdImage,
    items: [
      'Ouverture et suivi des tables',
      'Prise de commande sur PAD (mobile)',
      'Envoi instantané en cuisine (KDS)',
      'Suivi du service en temps réel',
    ],
  },
  {
    icon: Receipt,
    title: 'KDS - Gestion et suivi des commandes en cuisine',
    text: 'Un écran de production cuisine pour une préparation fluide , sans tickets papier et avec moins erreurs.',
    image: caiImage,
    items: [
      'Réception instantanée',
      'Plusieurs modes de paiement',
      'Gestion des additions et des partages',
      'Remises, offres et cartes cadeaux',
    ],
  },
  {
    icon: Package,
    title: 'Gestion des stocks et des consommations',
    text: 'Maîtrisez vos approvisionnements et vos coûts grâce à un suivi précis des stocks et des consommations par recette.',
    image: ERP_IMAGE,
    items: [
      'Suivi des entrées et sorties de stock',
      'Fiches recettes et consommation par plat',
      'Alertes de réapprovisionnement',
      'Valorisation des stocks',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Analyse des ventes et rentabilité',
    text: 'Suivez la performance de votre établissement avec des tableaux de bord clairs et détaillés pour prendre les bonnes décisions.',
    image: REPORTING_IMAGE,
    items: [
      'Chiffre d’affaires en temps réel',
      'Ventes par produit, service ou période',
      'Analyse des performances et des marges',
      'Rapports et exportations personnalisés',
    ],
  },
  {
    icon: CalendarCheck,
    title: 'Organisation et gestion de l’établissement',
    text: 'Une solution complète pour mieux organiser votre activité, vos équipes et vos services au quotidien.',
    image: kdsImage,
    items: [
      'Plan et gestion des salles',
      'Réservations et gestion de l’occupation',
      'Gestion des équipes et des droits d’accès',
      'Multi-point de vente (restaurant, bar, terrasse…)',
    ],
  },
];

const ADVANTAGES: { icon: ElementType; lines: [string, string] }[] = [
  { icon: ShieldCheck, lines: ['Solution fiable', 'et sécurisée'] },
  { icon: Rocket, lines: ['Service plus', 'fluide et rapide'] },
  { icon: Coins, lines: ['Meilleure', 'maîtrise des coûts'] },
  { icon: RefreshCw, lines: ['Un contrôle total', 'de votre activité'] },
  { icon: Laptop, lines: ['Accessible', 'partout (PC et mobile)'] },
];

/* =====================================================
    MÉTIERS DE LA RESTAURATION (NOUVELLE SECTION)
    Mettez vos images dans : src/assets/metiers/
    Noms attendus (png, jpg, jpeg ou webp) :
      pos, fast-food, restaurant, pizzeria, boulangerie,
      court-food, cafe-bar, hotellerie, theme
    Si une image manque, un dégradé orange s'affiche.
===================================================== */

type Metier = {
  icon: ElementType;
  lines: [string, string?];
  image: string;
  key: string;
  tagline: string;
  points: string[];
  tags: string[];
};

const METIERS: Metier[] = [
  {
    icon: Sandwich,
    lines: ['Fast Food'],
    image: fastFoodImage,
    key: 'fast-food',
    tagline: 'Servez plus vite, même aux heures de pointe.',
    points: [
      'Prise de commande tactile ultra-rapide',
      'Écran cuisine (KDS) sans tickets papier',
      'Menus, formules et suppléments en un clic',
      'Comptoir, à emporter et livraison (Glovo)',
    ],
    tags: ['Comptoir', 'Drive', 'Livraison'],
  },
  {
    icon: ConciergeBell,
    lines: ['Restaurant', 'Traditionnel'],
    image: restaurantImage,
    key: 'restaurant',
    tagline: 'Un service fluide, de la table à l’addition.',
    points: [
      'Plan de salle et suivi des tables en temps réel',
      'Prise de commande sur PAD (mobile)',
      'Partage et fractionnement des additions',
      'Fiches recettes et maîtrise des coûts',
    ],
    tags: ['Salle', 'Terrasse', 'Réservations'],
  },
  {
    icon: Pizza,
    lines: ['Pizzeria'],
    image: pizzeriaImage,
    key: 'pizzeria',
    tagline: 'Sur place, à emporter ou en livraison : tout est sous contrôle.',
    points: [
      'Commandes personnalisées (tailles, ingrédients)',
      'Envoi instantané en cuisine',
      'Click & Collect et livraison',
      'Consommations suivies par recette',
    ],
    tags: ['Sur place', 'Click & Collect', 'Livraison'],
  },
  {
    icon: Croissant,
    lines: ['Boulangerie'],
    image: boulangerieImage,
    key: 'boulangerie',
    tagline: 'Encaissez vite, sans file d’attente au comptoir.',
    points: [
      'Encaissement rapide au comptoir',
      'Produits à la pièce ou au poids',
      'Suivi des stocks et des pertes',
      'Ventes par produit et par période',
    ],
    tags: ['Comptoir', 'Stocks', 'Rapports'],
  },
  {
    icon: Store,
    lines: ['Court Food'],
    image: courtFoodImage,
    key: 'court-food',
    tagline: 'Plusieurs enseignes, une seule solution centralisée.',
    points: [
      'Gestion multi-points de vente',
      'Encaissement et reporting centralisés',
      'Suivi des performances par stand',
      'Gestion des équipes et des droits d’accès',
    ],
    tags: ['Multi-sites', 'Reporting', 'Équipes'],
  },
  {
    icon: Coffee,
    lines: ['Café / Bar'],
    image: cafeBarImage,
    key: 'cafe-bar',
    tagline: 'Des commandes éclair et un bar toujours bien tenu.',
    points: [
      'Écran tactile avec raccourcis boissons',
      'Comptes et tables ouverts en un geste',
      'Plusieurs tarifs (happy hour, terrasse…)',
      'Suivi du stock de boissons',
    ],
    tags: ['Bar', 'Terrasse', 'Tarifs'],
  },
  {
    icon: BedDouble,
    lines: ['Hôtellerie'],
    image: hotellerieImage,
    key: 'hotellerie',
    tagline: 'Restaurant, bar, terrasse : tous vos points de vente reliés.',
    points: [
      'Multi-points de vente (restaurant, bar, terrasse…)',
      'Gestion des équipes et des droits d’accès',
      'Suivi des ventes en temps réel',
      'Reporting centralisé sur PC et mobile',
    ],
    tags: ['Multi-points', 'Temps réel', 'Mobile'],
  },
  {
    icon: ChefHat,
    lines: ['Restaurant', 'à thème'],
    image: themeImage,
    key: 'theme',
    tagline: 'Une expérience unique, une gestion maîtrisée.',
    points: [
      'Menus et formules sur mesure',
      'Réservations et gestion de l’occupation',
      'Cartes cadeaux, offres et remises',
      'Analyse des ventes et des marges',
    ],
    tags: ['Réservations', 'Offres', 'Marges'],
  },
];

/* =====================================================
    PILOTEZ VOTRE RESTAURANT (ERP / GMS + REPORTING)
    Style "cartes" : badge jaune, coins arrondis, lien avec flèche
===================================================== */

const PILOT_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
.csi-pilot, .csi-pilot * { font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif; }
`;

const PILOT_CARDS: {
  badge: string;
  label: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  items: { icon: ElementType; text: string }[];
  cta: string;
  href: string;
}[] = [
  {
    badge: 'ERP / GMS',
    label: 'Gestion centralisée',
    title: ' Logiciel Back Office - GMS',
    text: 'Une gestion centralisée qui relie la caisse à l’ensemble de votre exploitation.',
    image: ERPP_IMAGE,
    imageAlt: 'CSI GMS : ERP front-office et back-office pour restaurant',
    items: [
      { icon: ShoppingCart, text: 'Gestion des ventes' },
      { icon: Package, text: 'Achats & stocks' },
      { icon: ChefHat, text: 'Consommations par recette' },
      { icon: Store, text: 'Gestion multi-sites' },
      { icon: ChartNoAxesCombined, text: 'Analyses et performance' },
    ],
    cta: 'Découvrir l’ERP / GMS',
    href: GMS_LINK,
  },
  {
    badge: 'Reporting CSI',
    label: 'Suivi en temps réel',
    title: 'Votre caisse toujours connectée',
    text: 'Suivez votre activité en temps réel, depuis votre PC ou mobile.',
    image: REPORTIN_IMAGE,
    imageAlt: 'CSI Reporting : suivi du chiffre d’affaires sur mobile',
    items: [
      { icon: ChartNoAxesCombined, text: 'Suivi des ventes et du chiffre d’affaires' },
      { icon: Bell, text: 'Alertes (annulations, retours, pertes)' },
      { icon: TrendingUp, text: 'Performances par période' },
      { icon: MessageCircle, text: 'Rapports et notifications sur WhatsApp' },
    ],
    cta: 'Découvrir le reporting',
    href: REPORT_LINK,
  },
];

const CTA_FEATURES: { icon: ElementType; title: string; text: string }[] = [
  {
    icon: Settings,
    title: 'Installation et paramétrage',
    text: 'Une mise en place rapide et efficace',
  },
  {
    icon: Users,
    title: 'Formation de vos équipes',
    text: 'Une prise en main simple et rapide',
  },
  {
    icon: Headphones,
    title: 'Assistance technique',
    text: 'Un support réactif et professionnel',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Une solution évolutive',
    text: 'Pour accompagner votre croissance',
  },
];

/* =====================================================
    POURQUOI CHOISIR CSI ?
===================================================== */

const CSI_BENEFITS: { icon: ElementType; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: 'Une solution CSI 100% personnalisée',
    text: 'Des fonctionnalités adaptées à votre établissement, votre secteur et vos processus opérationnels.',
  },
  {
    icon: TrendingUp,
    title: 'Un meilleur pilotage avec le Reporting CSI',
    text: 'Visualisez vos indicateurs en temps réel, analysez vos ventes et prenez des décisions éclairées.',
  },
  {
    icon: Sparkles,
    title: 'Une interface simple et intuitive',
    text: 'Prise en main rapide par vos équipes pour un service plus fluide et sans risque d’erreur.',
  },
  {
    icon: Users,
    title: 'Un accompagnement CSI sur mesure',
    text: 'Nous vous accompagnons à chaque étape : installation, formation, assistance technique et maintenance.',
  },
];

/* =====================================================
    LOGOS CLIENTS
    -> Mettez les logos dans : src/assets/clients/
       (png, jpg, webp, svg) : ils sont chargés automatiquement.
    -> Si le dossier est vide, 60 placeholders s'affichent.
===================================================== */

type ClientLogo = { name: string; src?: string };

const logoModules = import.meta.glob(
  '@/assets/clients/*.{png,jpg,jpeg,webp,svg}',
  { eager: true, import: 'default' },
) as Record<string, string>;

const REAL_LOGOS: ClientLogo[] = Object.entries(logoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const file = path.split('/').pop() ?? 'client';
    return { name: file.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '), src };
  });

const PLACEHOLDER_LOGOS: ClientLogo[] = Array.from({ length: 60 }, (_, i) => ({
  name: `Client ${String(i + 1).padStart(2, '0')}`,
}));

const CLIENT_LOGOS: ClientLogo[] = REAL_LOGOS.length
  ? REAL_LOGOS
  : PLACEHOLDER_LOGOS;

const MARQUEE_CSS = `
@keyframes csi-marquee-left  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
@keyframes csi-marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
.csi-marquee-track { display: flex; width: max-content; }
.csi-marquee-left  { animation: csi-marquee-left  var(--csi-speed, 60s) linear infinite; }
.csi-marquee-right { animation: csi-marquee-right var(--csi-speed, 60s) linear infinite; }
.csi-marquee:hover .csi-marquee-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .csi-marquee-track { animation: none !important; }
}
`;

/* =====================================================
    ANIMATIONS
===================================================== */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* =====================================================
    LIGNE DE FONCTIONNALITÉ (texte | image, en alternance)
===================================================== */

function FeatureRow({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const { icon: Icon, title, text, image, items } = feature;
  const imageFirst = index % 2 === 1;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="grid items-center gap-6 md:grid-cols-2 md:gap-12"
    >
      {/* TEXTE */}
      <div className={imageFirst ? 'md:order-2' : 'md:order-1'}>
        <span
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{ backgroundColor: ACCENT_SOFT, color: ACCENT }}
        >
          <Icon className="h-4 w-4" strokeWidth={2} />
        </span>

        <h3 className="mt-3 text-xl font-extrabold tracking-tight text-[#0b1b3a]">
          {title}
        </h3>

        <p className="mt-2 text-[13px] leading-5 text-slate-500">{text}</p>

        <ul className="mt-3 space-y-1.5">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              <span className="text-[12px] text-slate-500">{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={CONTACT_LINK}
          className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold hover:underline"
          style={{ color: ACCENT }}
        >
          En savoir plus
          <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
        </a>
      </div>

      {/* IMAGE */}
      <div className={imageFirst ? 'md:order-1' : 'md:order-2'}>
        <div
          className="overflow-hidden rounded-2xl shadow-lg shadow-slate-900/10"
          style={{ backgroundColor: IMAGE_BG }}
        >
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-48 w-full object-cover sm:h-52"
          />
        </div>
      </div>
    </motion.article>
  );
}

/* =====================================================
    NOUVELLES TECHNOLOGIES
===================================================== */

const TECH_CARDS: {
  icon: ElementType;
  title: string;
  text?: string;
  list?: string[];
  image?: string;
  glovo?: boolean;
  chart?: boolean;
}[] = [
  {
    icon: ShoppingBag,
    title: 'Click & Collect',
    text: 'Vos clients commandent en ligne et retirent leur commande en restaurant, sans attente.',
    image: clickCollectImage,
  },
  {
    icon: Bike,
    title: 'Interface Glovo',
    text: 'Réception automatique des commandes Glovo directement dans votre caisse, avec synchronisation des menus.',
    glovo: true,
  },
  {
    icon: QrCode,
    title: 'QR Order',
    text: 'Un simple QR Code sur la table pour consulter le menu, commander et payer en toute autonomie.',
    image: qrOrderImage,
  },
  {
    icon: Rocket,
    title: 'Une technologie moderne',
    list: [
      'Service plus rapide',
      'Moins de file d’attente',
      'Plus de ventes',
      'Une expérience client optimale',
    ],
    chart: true,
  },
];

/* =====================================================
    MÉTIERS : VITRINE INTERACTIVE
    Le visiteur choisit son activité -> la vitrine s'adapte.
===================================================== */

const AUTO_DELAY = 6; // secondes entre deux métiers (rotation automatique)

function MetiersShowcase() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % METIERS.length),
      AUTO_DELAY * 1000,
    );
    return () => window.clearInterval(id);
  }, [auto]);

  const select = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  const current = METIERS[active];
  const CurrentIcon = current.icon;
  const currentImage = current.image;
  const currentName = current.lines.filter(Boolean).join(' ');

  return (
    <section
      id="metiers"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#0d0d0f] py-16 text-white sm:py-24"
    >
      {/* décor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#f26522]/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#ff8a1f]/20 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* TITRE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff8a1f]" />
            Pour tous les métiers CHR
          </span>

          <h2 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.8rem]">
            Une solution d’encaissement adaptée à{' '}
            <span className="bg-gradient-to-r from-[#ff8a1f] to-[#f26522] bg-clip-text text-transparent">
              tous les métiers de la restauration
            </span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            Choisissez votre activité et découvrez comment PC MAROC s’adapte
            à votre quotidien.
          </p>
        </motion.div>

        {/* VITRINE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid gap-6 rounded-[36px] bg-white/[0.04] p-4 ring-1 ring-white/10 backdrop-blur-sm sm:mt-12 sm:p-6 lg:grid-cols-[1.15fr_1fr] lg:gap-8"
        >
              {/* Visuel */}
          <div className="relative h-72 overflow-hidden rounded-3xl bg-gradient-to-br from-[#ffb36b] to-[#f26522] sm:h-96 lg:h-[27rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55 }}
                className="absolute inset-0"
              >
                {currentImage && (
                  <img
                    src={currentImage}
                    alt={currentName}
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* étiquette métier */}
            <div className="absolute left-4 top-4 flex items-center gap-2.5 rounded-full bg-black/45 py-1.5 pl-1.5 pr-4 text-sm font-bold ring-1 ring-white/25 backdrop-blur-md sm:left-5 sm:top-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#ff8a1f] to-[#f26522]">
                <CurrentIcon className="h-4 w-4" strokeWidth={2} />
              </span>
              {currentName}
            </div>

            {/* mini écran de caisse flottant */}
            {posImage && (
              <div className="absolute -bottom-2 -right-2 hidden w-48 rotate-[-3deg] overflow-hidden rounded-xl bg-white shadow-2xl shadow-black/50 ring-4 ring-white/90 sm:block sm:w-56 lg:w-64">
                <img
                  src={posImage}
                  alt="Écran de caisse PC MAROC"
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full"
                />
              </div>
            )}

            {/* barre de progression de la rotation auto */}
            {auto && (
              <div className="absolute inset-x-0 bottom-0 h-1 bg-white/15">
                <motion.div
                  key={active}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: AUTO_DELAY, ease: 'linear' }}
                  className="h-full bg-gradient-to-r from-[#ff8a1f] to-[#f26522]"
                />
              </div>
            )}
          </div>

          {/* Détails */}
          <div className="flex flex-col justify-center px-1 pb-2 lg:pr-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-300">
                  Pour votre activité
                </p>

                <h3 className="mt-2 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                  {currentName}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                  {current.tagline}
                </p>

                <ul className="mt-6 space-y-3">
                  {current.points.map((pt, i) => (
                    <motion.li
                      key={pt}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + i * 0.07 }}
                      className="flex items-start gap-3 text-sm text-white/90 sm:text-[15px]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ff8a1f] to-[#f26522]">
                        <Check className="h-3 w-3" strokeWidth={3.5} />
                      </span>
                      {pt}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {current.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-orange-200 ring-1 ring-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={CONTACT_LINK}
                  className="group mt-8 inline-flex w-fit items-center gap-2.5 rounded-full bg-gradient-to-r from-[#f26522] to-[#ff8a1f] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-300/40"
                >
                  Demander une démo pour mon activité
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* LES 8 CARTES (sélecteur) */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4"
        >
          {METIERS.map((m, i) => {
            const Icon = m.icon;
            const src = m.image;
            const isActive = i === active;
            const name = m.lines.filter(Boolean).join(' ');

            return (
              <motion.button
                key={m.key}
                type="button"
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                onClick={() => select(i)}
                aria-pressed={isActive}
                aria-label={name}
                className={`group relative overflow-hidden rounded-[26px] bg-white text-left shadow-lg shadow-black/30 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300/60 ${
                  isActive
                    ? '-translate-y-1.5 ring-[3px] ring-[#ff8a1f] shadow-2xl shadow-orange-500/40'
                    : 'opacity-80 ring-1 ring-white/10 hover:-translate-y-1 hover:opacity-100'
                }`}
              >
                <div className="relative h-28 overflow-hidden bg-gradient-to-br from-[#ffb36b] to-[#f26522] sm:h-36 lg:h-40">
                  {src && (
                    <img
                      src={src}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#f26522]/60 to-transparent" />
                </div>

                <div className="relative flex items-center gap-3 rounded-t-[22px] bg-gradient-to-r from-[#f26522] to-[#ff8a1f] px-3.5 py-3 text-white sm:px-4 sm:py-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/20 ring-1 ring-white/30 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 sm:h-10 sm:w-10">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
                  </span>
                  <p className="text-[13px] font-extrabold leading-tight sm:text-base">
                    {m.lines[0]}
                    {m.lines[1] && (
                      <>
                        <br />
                        {m.lines[1]}
                      </>
                    )}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* =====================================================
    LOGOS CLIENTS — CARTE + LIGNE MARQUEE
===================================================== */

function LogoCard({ logo }: { logo: ClientLogo }) {
  return (
    <div className="group mx-2.5 flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl bg-white px-5 shadow-md shadow-slate-900/[0.05] ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-orange-300 sm:h-24 sm:w-48">
      {logo.src ? (
        <img
          src={logo.src}
          alt={logo.name}
          loading="lazy"
          decoding="async"
          className="max-h-full max-w-full object-contain opacity-100 grayscale-0 transition-all duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex items-center gap-2 text-slate-400 transition-colors duration-300 group-hover:text-[#f26522]">
          <Building2 className="h-5 w-5" strokeWidth={1.8} />
          <span className="text-sm font-bold">{logo.name}</span>
        </div>
      )}
    </div>
  );
}

function MarqueeRow({
  logos,
  direction,
  speed,
}: {
  logos: ClientLogo[];
  direction: 'left' | 'right';
  speed: number;
}) {
  // On duplique la liste pour une boucle sans coupure
  const loop = [...logos, ...logos];

  return (
    <div
      className="csi-marquee overflow-hidden py-2"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div
        className={`csi-marquee-track ${
          direction === 'left' ? 'csi-marquee-left' : 'csi-marquee-right'
        }`}
        style={{ ['--csi-speed' as string]: `${speed}s` }}
      >
        {loop.map((logo, i) => (
          <LogoCard key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

/* =====================================================
    PAGE
===================================================== */

export default function SolutionsRestauration() {
  const half = Math.ceil(CLIENT_LOGOS.length / 2);
  const [activeService, setActiveService] = useState<number | null>(0);
  const goToContact = () => {
    window.location.href = CONTACT_LINK;
  };
  const rowOne = CLIENT_LOGOS.slice(0, half);
  const rowTwo = CLIENT_LOGOS.slice(half);

  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <style>{MARQUEE_CSS}</style>

      {/* =====================================================
          HERO (sombre + orange)
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-[#0d0d0f] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0f] via-[#0d0d0f]/80 to-transparent" />
          {/* swoosh orange */}
          <div className="absolute -left-20 top-0 hidden h-full w-[60%] origin-top-left -skew-x-12 border-r-[10px] border-[#f26522] lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f]/60 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-14 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-2 lg:pb-20 lg:pt-36">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex w-fit items-center rounded-full bg-[#f26522] px-5 py-1.5 text-lg font-extrabold text-white shadow-lg shadow-orange-600/30">
              Solution CSI – CHR
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl xl:text-[3.4rem]">
              Bien plus qu’une caisse{' '}
              <span className="text-[#ff8a1f]">enregistreuse</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-white/90">
              Une solution complète pour encaisser, prendre les commandes,
              gérer vos stocks et piloter votre établissement en toute
              simplicité.
            </p>

            <div className="mt-5 h-1 w-24 rounded-full bg-[#f26522]" />

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={CONTACT_LINK}
                className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#f26522] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d95316] focus:outline-none focus:ring-4 focus:ring-orange-300/40"
              >
                Demander une démo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex items-center justify-center"
          >
            <div
              aria-hidden="true"
              className="absolute h-72 w-72 rounded-full bg-[#f26522]/25 blur-3xl"
            />
          </motion.div>
        </div>

        {/* Bandeau 4 bénéfices */}
        <div className="border-t border-white/10 bg-[#111113]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-5 px-5 py-6 sm:px-8 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
            {TOP_BENEFITS.map(({ icon: Icon, lines }) => (
              <div
                key={lines.join(' ')}
                className="flex items-center justify-center gap-3 px-2"
              >
                <Icon
                  className="h-9 w-9 shrink-0 text-[#ff8a1f]"
                  strokeWidth={1.7}
                />
                <p className="text-sm font-bold leading-tight sm:text-base">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FONCTIONNALITÉS A → Z
      ===================================================== */}

      <section
        id="solutions"
        className="relative scroll-mt-24 bg-white py-12 sm:py-16"
      >
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="flex items-center justify-center gap-4"
          >
            <span className="hidden h-[3px] w-20 rounded bg-[#f26522] sm:block lg:w-32" />
            <h2 className="text-center text-2xl font-black leading-tight tracking-tight text-[#0b1b3a] sm:text-3xl lg:text-4xl">
              Toutes les fonctionnalités pour gérer
              <br />
              <span className="text-[#f26522]">votre restaurant de A à Z</span>
            </h2>
            <span className="hidden h-[3px] w-20 rounded bg-[#f26522] sm:block lg:w-32" />
          </motion.div>

          <div className="mt-12 space-y-12 sm:space-y-14">
            {FEATURES.map((f, i) => (
              <FeatureRow key={f.title} feature={f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LES AVANTAGES DE LA SOLUTION CSI
      ===================================================== */}

      <section className="bg-[#111113] text-white">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[300px_1fr]">
          <div className="relative flex items-center bg-gradient-to-r from-[#f26522] to-[#ff8a1f] px-6 py-6 sm:px-8 lg:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)] lg:pr-14">
            <h3 className="text-2xl font-black italic leading-tight tracking-tight sm:text-3xl">
              Les avantages
              <br />
              de la solution CSI
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-y-5 px-5 py-6 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-white/15">
            {ADVANTAGES.map(({ icon: Icon, lines }) => (
              <div
                key={lines.join(' ')}
                className="flex flex-col items-center px-2 text-center"
              >
                <Icon className="h-9 w-9 text-[#ff8a1f]" strokeWidth={1.6} />
                <p className="mt-2 text-xs font-semibold leading-tight sm:text-[13px]">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NOUVELLES TECHNOLOGIES
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-orange-50/40 to-white py-14 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl"
        />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
          {/* GAUCHE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl font-black tracking-tight text-[#0b1b3a]">
                CSI
              </span>
              <span className="h-[3px] w-24 rounded bg-[#f26522]" />
            </div>

            <h2 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight text-[#0b1b3a] sm:text-4xl lg:text-[2.6rem]">
              Les nouvelles technologies pour une restauration plus{' '}
              <span className="text-[#f26522]">rapide et connectée</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              Des solutions digitales modernes qui enrichissent l’expérience
              client, augmentent vos ventes et optimisent votre organisation.
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl rounded-tl-[90px] shadow-xl shadow-slate-900/10 ring-1 ring-orange-100">
              <img
                src={techHeroImage}
                alt="Caisse tactile CSI avec commande à emporter"
                loading="lazy"
                decoding="async"
                className="h-64 w-full object-cover sm:h-72"
              />
            </div>
          </motion.div>

          {/* DROITE : 4 CARTES */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-4"
          >
            {TECH_CARDS.map(
              ({ icon: Icon, title, text, list, image, glovo, chart }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="flex items-center gap-4 rounded-[28px] bg-white p-4 shadow-lg shadow-slate-900/[0.06] ring-1 ring-slate-100 sm:gap-5 sm:p-5"
                >
                  {/* Icône */}
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff8a1f] to-[#f26522] text-white shadow-md shadow-orange-500/30 sm:h-20 sm:w-20">
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.8} />
                  </span>

                  {/* Texte */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-black tracking-tight text-[#0b1b3a] sm:text-xl">
                      {title}
                    </h3>

                    {text && (
                      <p className="mt-1 text-xs leading-snug text-slate-600 sm:text-[13px]">
                        {text}
                      </p>
                    )}

                    {list && (
                      <ul className="mt-1.5 space-y-1">
                        {list.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-xs text-slate-700 sm:text-[13px]"
                          >
                            <Check
                              className="h-4 w-4 shrink-0 text-[#f26522]"
                              strokeWidth={3}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Séparateur + visuel */}
                  <span className="hidden h-20 w-px shrink-0 bg-[#f26522]/60 sm:block" />

                  <div className="hidden shrink-0 sm:block">
                    {image && (
                      <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        decoding="async"
                        className="h-20 w-32 rounded-2xl object-cover"
                      />
                    )}

                    {glovo && (
                      <div className="flex h-20 w-32 items-center justify-center rounded-2xl bg-[#ffc244]">
                        <span className="text-2xl font-black tracking-tight text-[#00a082]">
                          Glovo
                        </span>
                      </div>
                    )}

                    {chart && (
                      <div className="flex h-20 w-32 items-center justify-center">
                        <ChartNoAxesCombined
                          className="h-16 w-16 text-[#f26522]"
                          strokeWidth={2.2}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PILOTEZ VOTRE RESTAURANT (ERP / GMS + REPORTING)
      ===================================================== */}

      <section
        id="pilotage"
        className="csi-pilot relative scroll-mt-24 bg-[#f7f8fa] py-14 sm:py-20"
      >
        <style>{PILOT_CSS}</style>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex w-fit items-center rounded-full bg-[#ffc21a] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0b1b3a]">
              CSI
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#0b1b3a] sm:text-4xl lg:text-[2.6rem]">
              Pilotez votre restaurant,{' '}
              <span className="text-[#f26522]">où que vous soyez</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
              Un ERP puissant et un reporting en temps réel pour garder le
              contrôle de votre activité.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:gap-8"
          >
            {PILOT_CARDS.map(
              ({ badge, label, title, text, image, imageAlt, items, cta, href }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <article className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_12px_32px_-16px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-18px_rgba(15,23,42,0.28)]">
                    {/* Visuel + badge */}
                    <div
                      className="relative"
                      style={{ backgroundColor: IMAGE_BG }}
                    >
                      <img
                        src={image}
                        alt={imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="h-56 w-full object-cover sm:h-64"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-[#ffc21a] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0b1b3a]">
                        {badge}
                      </span>
                    </div>

                    {/* Contenu */}
                    <div className="flex flex-1 flex-col p-7 sm:p-8">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        {label}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-[#0b1b3a]">
                        {title}
                      </h3>

                      <p className="mt-3 text-[15px] leading-7 text-slate-500">
                        {text}
                      </p>

                      <ul className="mb-7 mt-6 space-y-3">
                        {items.map(({ icon: ItemIcon, text: itemText }) => (
                          <li key={itemText} className="flex items-center gap-3.5">
                            <span
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-orange-100"
                              style={{
                                backgroundColor: ACCENT_SOFT,
                                color: ACCENT,
                              }}
                            >
                              <ItemIcon className="h-5 w-5" strokeWidth={2} />
                            </span>
                            <span className="text-[15px] font-medium leading-snug text-slate-700">
                              {itemText}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={href}
                        className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-semibold text-[#0b1b3a]"
                      >
                        <span className="underline-offset-4 group-hover:underline">
                          {cta}
                        </span>
                        <ArrowUpRight className="h-[18px] w-[18px]" />
                      </a>
                    </div>
                  </article>
                </motion.div>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ILS NOUS FONT CONFIANCE (LOGOS CLIENTS)
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-orange-50/40 to-white py-14 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl"
        />

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#d95316] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Nos références
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#0b1b3a] sm:text-4xl lg:text-[2.6rem]">
              Ils nous font <span className="text-[#f26522]">confiance</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Plus de {CLIENT_LOGOS.length} établissements utilisent déjà les
              solutions CSI au quotidien pour gérer et développer leur
              activité.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 space-y-3 sm:mt-12"
        >
          <MarqueeRow
            logos={rowOne}
            direction="left"
            speed={Math.max(30, rowOne.length * 2.2)}
          />
          <MarqueeRow
            logos={rowTwo}
            direction="right"
            speed={Math.max(30, rowTwo.length * 2.4)}
          />
        </motion.div>
      </section>

      {/* =====================================================
          POURQUOI CHOISIR CSI ?
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-slate-50/50 py-16 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Texte et avantages */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col justify-center"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#d95316] shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-[#f26522]" />
                Pourquoi nous choisir ?
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#0b1b3a] sm:text-4xl lg:text-[2.6rem]"
              >
                Pourquoi choisir <span className="text-[#f26522]">CSI</span> ?
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base"
              >
                Nous mettons la technologie CSI au service de votre
                établissement. Nos solutions sont pensées pour simplifier votre
                quotidien, améliorer votre rentabilité et accompagner
                durablement votre croissance.
              </motion.p>

              <div className="mt-8 space-y-6">
                {CSI_BENEFITS.map(({ icon: Icon, title, text }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#f26522] shadow-sm ring-1 ring-orange-100">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[#0b1b3a]">
                        {title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} className="mt-10">
                <a
                  href={CONTACT_LINK}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#f26522] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d95316] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-200"
                >
                  Parlons de votre projet
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>

            {/* Image et carte visuelle */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              className="relative mx-auto w-full max-w-lg pb-5 lg:max-w-none"
            >
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl shadow-slate-900/15 ring-1 ring-slate-200/50">
                <img
                  src={herImage}
                  alt="Équipe et solutions CSI"
                  loading="lazy"
                  decoding="async"
                  className="h-[420px] w-full object-cover opacity-85 sm:h-[480px] lg:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-[#f26522] shadow-lg backdrop-blur-md">
                  <Cpu className="h-6 w-6" strokeWidth={2} />
                </div>

                <div className="absolute left-5 top-5 max-w-[calc(100%-5rem)] rounded-full bg-slate-900/60 px-3.5 py-2 text-[11px] font-semibold text-white backdrop-blur-md ring-1 ring-white/20 sm:left-6 sm:top-6 sm:text-xs">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  Votre partenaire technologique CSI
                </div>

                <div className="absolute bottom-6 left-5 right-5 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <h3 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl">
                    La technologie CSI au service de votre réussite.
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    Des solutions intelligentes et connectées pour optimiser
                    vos opérations et faire évoluer votre activité.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-1 left-2 right-2 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-slate-900/10 ring-1 ring-slate-100 sm:-left-5 sm:right-auto sm:px-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#f26522]">
                  <CheckCircle className="h-6 w-6" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-black text-[#0b1b3a] sm:text-sm">
                    Une approche sur mesure
                  </p>
                  <p className="text-[11px] text-slate-500 sm:text-xs">
                    Adaptée aux besoins de votre établissement
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MÉTIERS DE LA RESTAURATION (après « Pourquoi choisir »)
      ===================================================== */}

      <MetiersShowcase />

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
            <span className="ns-pill">NOS SERVICES</span>

            <h2>
              Bien plus qu'un logiciel,
              <span> un véritable accompagnement.</span>
            </h2>

            <p className="ns-services-desc">
              Chez PC MAROC, nous vous accompagnons à chaque étape pour
              garantir une utilisation optimale de votre solution. Notre équipe
              met son expertise à votre service pour simplifier votre quotidien
              et développer votre activité.
            </p>

            <div className="ns-services-accordion">
              {/* SERVICE 1 */}
              <div
                className={`ns-service-item ${
                  activeService === 0 ? 'active' : ''
                }`}
              >
                <button
                  type="button"
                  className="ns-service-header"
                  onClick={() =>
                    setActiveService(activeService === 0 ? null : 0)
                  }
                  aria-expanded={activeService === 0}
                >
                  <span className="ns-service-number">01</span>
                  <span className="ns-service-title">Conseil et formation</span>
                  <span className="ns-service-toggle">
                    {activeService === 0 ? '−' : '+'}
                  </span>
                </button>

                {activeService === 0 && (
                  <div className="ns-service-body">
                    Notre équipe vous accompagne dans le choix et la prise en
                    main de votre solution. Nous analysons vos besoins afin de
                    vous proposer les meilleures solutions et de former vos
                    équipes à leur utilisation.
                  </div>
                )}
              </div>

              {/* SERVICE 2 */}
              <div
                className={`ns-service-item ${
                  activeService === 1 ? 'active' : ''
                }`}
              >
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
                    Nous assurons l'installation et le paramétrage de votre
                    solution afin de vous permettre de démarrer dans les
                    meilleures conditions. Notre équipe veille au bon
                    fonctionnement de votre environnement de travail.
                  </div>
                )}
              </div>

              {/* SERVICE 3 */}
              <div
                className={`ns-service-item ${
                  activeService === 2 ? 'active' : ''
                }`}
              >
                <button
                  type="button"
                  className="ns-service-header"
                  onClick={() =>
                    setActiveService(activeService === 2 ? null : 2)
                  }
                  aria-expanded={activeService === 2}
                >
                  <span className="ns-service-number">03</span>
                  <span className="ns-service-title">Support technique</span>
                  <span className="ns-service-toggle">
                    {activeService === 2 ? '−' : '+'}
                  </span>
                </button>

                {activeService === 2 && (
                  <div className="ns-service-body">
                    Notre support technique vous accompagne au quotidien pour
                    répondre à vos questions, résoudre vos difficultés et vous
                    aider à exploiter pleinement les fonctionnalités de votre
                    solution.
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

      {/* =====================================================
          CTA FINAL
      ===================================================== */}

      <section className="relative bg-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-r from-[#111113] via-[#d95316] to-[#ff8a1f]">
          <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:py-16"
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-100">
                Prêt à passer à l’étape suivante ?
              </p>

              <h2 className="mt-4 text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
                Passez à une gestion plus performante avec{' '}
                <span className="whitespace-nowrap">
                  <span className="text-[#0d0d0f]">PC</span>{' '}
                  <span className="text-orange-200">MAROC</span>
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-orange-50 sm:text-[15px]">
                Découvrez comment PC MAROC peut répondre aux besoins de votre
                établissement et faciliter la gestion de votre activité.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={CONTACT_LINK}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0d0d0f] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a2a2e] focus:outline-none focus:ring-4 focus:ring-orange-200"
              >
                <CalendarDays className="h-5 w-5" />
                Demander une démonstration
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={CONTACT_LINK}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#d95316] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-50 focus:outline-none focus:ring-4 focus:ring-orange-200"
              >
                <Phone className="h-5 w-5" />
                Nous contacter
              </a>
            </div>
          </motion.div>
        </div>

        {/* 4 avantages */}
        <div className="mx-auto grid max-w-6xl gap-x-6 gap-y-5 px-5 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {CTA_FEATURES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#f26522]">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-[13px] font-bold leading-tight text-[#0b1b3a]">
                  {title}
                </p>
                <p className="mt-0.5 text-xs leading-snug text-slate-500">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
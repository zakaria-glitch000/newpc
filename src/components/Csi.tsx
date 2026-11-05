import type { CSSProperties, ElementType, ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChartNoAxesCombined,
  Gauge,
  Headphones,
  Phone,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Cpu,
  CheckCircle,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom'; // Assurez-vous d'importer Link depuis react-router-dom

import heroImage from '@/assets/res.webp';
import caisseImage from '@/assets/00.png';
import borneImage from '@/assets/bb1.png';
import pdaImage from '@/assets/bb3.png';
import pdImage from '@/assets/bb33.png';
import kdsImage from '@/assets/bb4.png';
import ERP_IMAGE from '@/assets/bb5.png';
import REPORTING_IMAGE from '@/assets/bb6.png';
import caiImage from '@/assets/2.jpg';

/* =====================================================
    CONTACT
===================================================== */

const CONTACT_LINK = '/#contact';

/* =====================================================
    DATA
===================================================== */

const TOP_BENEFITS: { icon: ElementType; lines: [string, string] }[] = [
  { icon: Gauge, lines: ['Service', 'plus rapide'] },
  { icon: ChartNoAxesCombined, lines: ['Meilleure', 'rentabilité'] },
  { icon: Users, lines: ['Organisation', 'optimisée'] },
  { icon: Settings, lines: ['Gestion', 'centralisée'] },
];

const SATELLITES = {
  borne: {
    title: 'Bornes de commande',
    text: 'Commande autonome pour vos clients',
    image: borneImage,
  },
  pda: {
    title: 'PAD – Prise de commande',
    text: 'Mobilité et efficacité pour vos équipes',
    image: pdaImage,
  },
  kds: {
    title: 'Écran cuisine KDS',
    text: 'Des cuisines plus organisées et plus performantes',
    image: kdsImage,
  },
  reporting: {
    title: 'Reporting',
    text: 'Suivez vos performances en temps réel',
    image: REPORTING_IMAGE,
  },
  erp: {
    title: 'GMS-Back Office',
    text: 'Gestion centralisée de vos établissements',
    image: ERP_IMAGE,
  },
};
const CARDS = [
  {
    number: '01',
    title: 'Caisses enregistreuses CSI',
    subtitle: 'Encaissez, organisez et pilotez votre activité.',
    image: caisseImage,
    link: '/caisse', // <-- Zid l-link hna
    items: [
      'Gestion des tables et des commandes',
      'Encaissements multi-règlements',
      'Gestion des utilisateurs et des accès',
      'Solution évolutive et centralisée',
    ],
  },
  {
    number: '02',
    title: 'Bornes de commande',
    subtitle: 'Une commande autonome et fluide pour vos clients.',
    image: borneImage,
    link: '/born', // <-- Zid l-link hna
    items: [
      'Interface simple et attractive',
      'Personnalisation des menus',
      'Réduction du temps d’attente',
      'Augmentation du panier moyen',
    ],
  },
  {
    number: '03',
    title: 'PAD – Prise de commande',
    subtitle: 'Mobilité et efficacité pour vos équipes.',
    image: pdImage,
    link: '/Pda', // <-- Zid l-link hna
    items: [
      'Prise de commande rapide et intuitive',
      'Gestion des tables en temps réel',
      'Envoi direct en cuisine (KDS)',
      'Réduction des erreurs de saisie',
    ],
  },
  {
    number: '04',
    title: 'Écran cuisine KDS',
    subtitle: 'Des cuisines plus organisées et plus performantes.',
    image: kdsImage,
    link: '/kds', // <-- Zid l-link hna
    items: [
      'Affichage clair et lisible',
      'Organisation des commandes par poste',
      'Suivi des temps de préparation',
      'Priorisation automatique',
    ],
  },
  {
    number: '05',
    title: 'Reporting',
    subtitle: 'Analysez vos performances en temps réel.',
    image: REPORTING_IMAGE,
    link: '/Report', // <-- Zid l-link hna
    items: [
      'Tableaux de bord complets',
      'Suivi des ventes par période',
      'Analyse des produits et catégories',
      'Accès sécurisé à distance',
    ],
  },
  {
    number: '06',
    title: 'GMS-Back Office',
    subtitle: 'Gestion centralisée de vos établissements.',
    image: ERP_IMAGE,
    link: '/Gms', // <-- Zid l-link hna
    items: [
      'Gestion des purchases et fournisseurs',
      'Suivi des stocks en temps réel',
      'Analyse des coûts et de la rentabilité',
      'Gestion multi-établissements',
    ],
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
    SATELLITE MOBILE / TABLETTE
===================================================== */

function Bubble({
  title,
  text,
  className = '',
}: {
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white/85 px-4 py-3 shadow-lg shadow-blue-900/[0.06] ring-1 ring-sky-100 backdrop-blur-md ${className}`}
    >
      <p className="text-sm font-extrabold leading-tight tracking-tight text-[#0b2a5b] sm:text-base">
        {title}
      </p>
      <p className="mt-0.5 text-xs leading-snug text-slate-600 sm:text-[13px]">
        {text}
      </p>
    </div>
  );
}

function Satellite({
  data,
  imgClass,
  className = '',
}: {
  data: { title: string; text: string; image: string };
  imgClass: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img
        src={data.image}
        alt={data.title}
        loading="lazy"
        decoding="async"
        className={`object-contain drop-shadow-xl ${imgClass}`}
      />
      <Bubble title={data.title} text={data.text} className="-mt-3" />
    </div>
  );
}

/* =====================================================
    ÉCOSYSTÈME DESKTOP — POSITIONNEMENT PROPORTIONNEL
===================================================== */

type EcoBox = {
  left: number;
  top: number;
  width?: number;
  height?: number;
};

const ecoBox = ({ left, top, width, height }: EcoBox): CSSProperties => ({
  left: `${left}%`,
  top: `${top}%`,
  ...(width !== undefined ? { width: `${width}%` } : {}),
  ...(height !== undefined ? { height: `${height}%` } : {}),
});

function EcoPic({
  src,
  alt,
  b,
  rotate,
}: {
  src: string;
  alt: string;
  b: EcoBox;
  rotate?: number;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      style={{
        ...ecoBox(b),
        ...(rotate ? { transform: `rotate(${rotate}deg)` } : {}),
      }}
      className="absolute z-10 object-contain drop-shadow-xl"
    />
  );
}

function EcoHalo({ b }: { b: EcoBox }) {
  return (
    <div
      aria-hidden="true"
      style={ecoBox(b)}
      className="absolute aspect-square rounded-full bg-[radial-gradient(circle,rgba(186,224,253,0.75)_0%,rgba(219,238,254,0.55)_55%,rgba(255,255,255,0)_100%)]"
    />
  );
}

function EcoLabel({
  left,
  top,
  center = false,
  children,
}: {
  left: number;
  top: number;
  center?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        left: `${left}%`,
        top: `${top}%`,
        padding: '0.9cqw 1.7cqw',
        borderRadius: '1.6cqw',
      }}
      className={`absolute z-20 w-max max-w-[45%] bg-white/90 shadow-lg shadow-blue-900/[0.07] ring-1 ring-sky-100/80 backdrop-blur-md ${
        center ? '-translate-x-1/2 text-center' : ''
      }`}
    >
      {children}
    </div>
  );
}

function EcoTitle({ children }: { children: ReactNode }) {
  return (
    <p
      style={{ fontSize: '1.75cqw' }}
      className="font-extrabold leading-tight tracking-tight text-[#0b2a5b]"
    >
      {children}
    </p>
  );
}

function EcoSub({ children }: { children: ReactNode }) {
  return (
    <p
      style={{ fontSize: '1.3cqw' }}
      className="mt-[0.2cqw] leading-snug tracking-tight text-slate-600"
    >
      {children}
    </p>
  );
}

function EcosystemDesktop() {
  return (
    <div
      style={{ containerType: 'inline-size' }}
      className="relative mx-auto mt-10 hidden aspect-[1536/1024] w-full max-w-6xl lg:block"
    >
      <EcoHalo b={{ left: 38.4, top: 0, width: 19.5 }} />
      <EcoHalo b={{ left: 8.5, top: 21.5, width: 17 }} />
      <EcoHalo b={{ left: 71.6, top: 19.5, width: 19.5 }} />

      <div
        aria-hidden="true"
        style={ecoBox({ left: 31.2, top: 30.3, width: 35.2 })}
        className="absolute aspect-square rounded-full bg-[radial-gradient(circle,rgba(147,197,253,0.55)_0%,rgba(186,224,253,0.4)_55%,rgba(255,255,255,0)_100%)]"
      />

      <div
        aria-hidden="true"
        style={ecoBox({ left: 34.8, top: 67, width: 27.3, height: 8 })}
        className="absolute rounded-[50%] bg-gradient-to-b from-sky-200/80 to-sky-100/20 blur-[2px]"
      />

      <svg
        aria-hidden="true"
        viewBox="0 0 1536 1024"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 z-[5] h-full w-full"
        fill="none"
      >
        <defs>
          <marker
            id="eco-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path
              d="M1 1 L9 5 L1 9"
              fill="none"
              stroke="#2563eb"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>

        <g stroke="#93c5fd" strokeWidth="2" strokeLinecap="round">
          <path d="M360 325 Q430 225 592 165" strokeDasharray="7 7" />
          <path d="M868 163 Q1120 230 1222 410" />
          <path d="M285 528 Q278 585 300 632" />
          <path d="M1218 532 Q1216 590 1190 640" />
          <path d="M465 792 Q585 905 730 905" />
          <path d="M770 905 Q990 895 1088 748" />
        </g>

        <g
          stroke="#2563eb"
          strokeWidth="4"
          strokeLinecap="round"
          markerEnd="url(#eco-arrow)"
        >
          <path d="M385 402 Q450 412 498 458" />
          <path d="M1100 405 Q1050 420 1018 452" />
          <path d="M472 718 Q490 702 508 696" />
          <path d="M1085 745 Q1040 708 1010 696" />
          <path d="M733 372 L733 336" />
          <path d="M757 336 L757 372" />
          <path d="M733 898 L733 858" />
          <path d="M757 858 L757 898" />
        </g>
      </svg>

      <EcoPic
        src={borneImage}
        alt="Borne de commande"
        b={{ left: 43.5, top: 1.5, width: 9, height: 22 }}
      />

      <EcoPic
        src={pdaImage}
        alt="PAD – Prise de commande"
        b={{ left: 9.1, top: 22, width: 13.7, height: 21.5 }}
        rotate={-24}
      />

      <EcoPic
        src={kdsImage}
        alt="Écran cuisine KDS"
        b={{ left: 72.3, top: 22.5, width: 16.3, height: 21 }}
      />

      <EcoPic
        src={caisseImage}
        alt="Caisse enregistreuse CSI"
        b={{ left: 34.5, top: 35, width: 27.3, height: 37 }}
      />

      <EcoPic
        src={REPORTING_IMAGE}
        alt="Reporting CSI"
        b={{ left: 5.9, top: 64.5, width: 23.4, height: 20 }}
      />

      <EcoPic
        src={ERP_IMAGE}
        alt="GMS / ERP CSI"
        b={{ left: 71, top: 60.5, width: 23.8, height: 24 }}
      />

      <EcoLabel left={48.2} top={23.4} center>
        <EcoTitle>Bornes de commande</EcoTitle>
        <EcoSub>Commande autonome pour vos clients</EcoSub>
      </EcoLabel>

      <EcoLabel left={5} top={43}>
        <EcoTitle>PAD – Prise de commande</EcoTitle>
        <EcoSub>Mobilité et efficacité pour vos équipes</EcoSub>
      </EcoLabel>

      <EcoLabel left={69.2} top={43.4}>
        <EcoTitle>Écran cuisine KDS</EcoTitle>
        <EcoSub>Des cuisines plus organisées et plus performantes</EcoSub>
      </EcoLabel>

      <div
        style={{
          left: '49%',
          top: '72.7%',
          padding: '1.3cqw 3.2cqw',
          borderRadius: '2.2cqw',
        }}
        className="absolute z-20 w-max max-w-[65%] -translate-x-1/2 bg-[#0b2a5b] text-center text-white shadow-xl shadow-blue-900/30"
      >
        <p
          style={{ fontSize: '2cqw' }}
          className="font-extrabold leading-tight tracking-tight"
        >
          Caisse enregistreuse CSI
        </p>
        <p
          style={{ fontSize: '1.45cqw' }}
          className="mt-[0.2cqw] text-blue-100"
        >
          Le cœur de votre activité
        </p>
      </div>

      <EcoLabel left={3.9} top={83.5}>
        <EcoTitle>Reporting CSI</EcoTitle>
        <EcoSub>Suivez vos performances en temps réel</EcoSub>
      </EcoLabel>

      <EcoLabel left={68.4} top={84.5}>
        <EcoTitle>GMS-Back Office</EcoTitle>
        <EcoSub>Gestion centralisée de vos points de vente</EcoSub>
      </EcoLabel>
    </div>
  );
}

/* =====================================================
    CARTE NUMÉROTÉE
===================================================== */
function NumberedCard({
  number,
  title,
  subtitle,
  image,
  items,
  link,
}: (typeof CARDS)[number]) {
  return (
    <Link to={link || CONTACT_LINK} className="block h-full group">
      <motion.article
        variants={fadeUp}
        whileHover={{ y: -6 }}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-md shadow-blue-900/[0.05] transition-shadow duration-300 group-hover:shadow-xl group-hover:border-blue-300"
      >
        <div className="flex items-start gap-3 p-4 pb-0">
          <span className="flex h-11 w-9 shrink-0 items-center justify-center rounded-md bg-blue-600 text-xl font-black text-white">
            {number}
          </span>

          <div>
            <h3 className="text-xl font-extrabold leading-tight tracking-tight text-[#0b2a5b] transition-colors group-hover:text-blue-600">
              {title}
            </h3>
            <p className="mt-0.5 text-sm leading-snug text-slate-600">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="relative flex h-52 items-center justify-center px-4 py-3">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-sky-50/60 to-white" />
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="relative z-10 h-full w-full object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <ul className="space-y-1.5 px-5">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <Check className="h-2.5 w-2.5" strokeWidth={4} />
              </span>
              <span className="text-[13px] leading-5 text-slate-700">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto p-5 pt-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0b2a5b] px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 group-hover:bg-blue-700 group-hover:shadow-lg group-hover:shadow-blue-700/25">
            Découvrir la solution
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
/* =====================================================
    PAGE
===================================================== */

export default function SolutionsRestauration() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full scale-110 object-cover object-center blur-[3px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:pb-16 lg:pt-36">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-blue-900/10 ring-1 ring-slate-200/70"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-sky-50 px-6 pb-8 pt-20 sm:px-10 lg:py-12">
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0b2a5b] shadow-lg shadow-blue-900/10 ring-1 ring-slate-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Une activité mieux connectée
                </span>

                <img
                  src={caiImage}
                  alt="Caisse enregistreuse CSI pour la restauration"
                  loading="eager"
                  decoding="async"
                  className="h-64 w-full max-w-md object-contain drop-shadow-2xl sm:h-80 lg:h-[340px]"
                />
              </div>

              <div className="flex flex-col justify-center px-6 py-8 sm:px-10 lg:px-12 lg:py-12">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Solutions restauration
                </span>

                <h1 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight text-[#0b2a5b] sm:text-4xl xl:text-[2.6rem]">
                  Un écosystème complet pour une gestion plus simple et plus{' '}
                  <span className="text-blue-600">performante</span>
                </h1>

                <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:text-[15px]">
                  Des solutions connectées qui travaillent ensemble pour
                  optimiser votre établissement, du service à l’analyse de vos
                  performances.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={CONTACT_LINK}
                    className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#0b2a5b] to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-sky-200"
                  >
                    Demander une démonstration
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#solutions"
                    className="whitespace-nowrap text-sm font-semibold text-[#0b2a5b] transition-colors hover:text-blue-600"
                  >
                    Découvrir nos solutions
                  </a>
                </div>

                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-slate-700">
                  {[
                    'Solution complète',
                    'Accompagnement personnalisé',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <Check
                        className="h-4 w-4 text-blue-600"
                        strokeWidth={3}
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gradient-to-r from-[#0b2a5b] via-blue-700 to-blue-500 px-6 py-5 text-white sm:px-10">
              <Sparkles className="h-8 w-8 shrink-0" strokeWidth={1.5} />
              <span className="hidden h-10 w-px bg-white/40 sm:block" />
              <div>
                <p className="text-base font-extrabold leading-tight sm:text-lg">
                  Toute votre activité, mieux connectée.
                </p>
                <p className="mt-0.5 text-xs leading-snug text-blue-50 sm:text-sm">
                  Caisse, bornes, cuisine et reporting réunis dans une seule
                  solution pensée pour votre établissement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ÉCOSYSTÈME
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white py-12 sm:py-16">
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="mx-auto grid max-w-3xl grid-cols-2 gap-y-6 sm:grid-cols-4 sm:divide-x sm:divide-slate-300/70"
          >
            {TOP_BENEFITS.map(({ icon: Icon, lines }) => (
              <div
                key={lines.join(' ')}
                className="flex flex-col items-center px-2 text-center"
              >
                <Icon className="h-9 w-9 text-[#0b2a5b]" strokeWidth={1.6} />
                <p className="mt-2 text-sm font-medium leading-tight text-[#0b2a5b]">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </p>
              </div>
            ))}
          </motion.div>

          <EcosystemDesktop />

          <div className="mt-10 lg:hidden">
            <div className="flex flex-col items-center">
              <img
                src={caisseImage}
                alt="Caisse enregistreuse CSI"
                className="h-56 w-full max-w-sm object-contain drop-shadow-2xl"
                loading="lazy"
              />
              <div className="-mt-3 rounded-2xl bg-[#0b2a5b] px-6 py-3 text-center text-white shadow-xl shadow-blue-900/30">
                <p className="text-base font-extrabold">
                  Caisse enregistreuse CSI
                </p>
                <p className="text-sm text-blue-100">
                  Le cœur de votre activité
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Satellite data={SATELLITES.borne} imgClass="h-44 w-36" />
              <Satellite data={SATELLITES.pda} imgClass="h-44 w-36" />
              <Satellite data={SATELLITES.kds} imgClass="h-36 w-56" />
              <Satellite data={SATELLITES.reporting} imgClass="h-36 w-60" />
              <Satellite
                data={SATELLITES.erp}
                imgClass="h-40 w-60"
                className="sm:col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          6 CARTES
      ===================================================== */}

      <section
        id="solutions"
        className="relative scroll-mt-24 bg-slate-50/70 py-10 sm:py-12"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {CARDS.map((card) => (
              <NumberedCard key={card.number} {...card} />
            ))}
          </motion.div>
        </div>
      </section>


      {/* =====================================================
          POURQUOI CHOISIR CSI ?
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-slate-50/50 py-16 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl"
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
                className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-700 shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-[#f26522]" />
                Pourquoi nous choisir ?
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#0b2a5b] sm:text-4xl lg:text-[2.6rem]"
              >
                Pourquoi choisir <span className="text-blue-600">CSI</span> ?
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base"
              >
                Nous mettons la technologie CSI au service de votre établissement.
                Nos solutions sont pensées pour simplifier votre quotidien,
                améliorer votre rentabilité et accompagner durablement votre croissance.
              </motion.p>

              <div className="mt-8 space-y-6">
                {CSI_BENEFITS.map(({ icon: Icon, title, text }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-100">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[#0b2a5b]">
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
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl shadow-blue-900/15 ring-1 ring-slate-200/50">
                <img
                  src={heroImage}
                  alt="Équipe et solutions CSI"
                  loading="lazy"
                  decoding="async"
                  className="h-[420px] w-full object-cover opacity-85 sm:h-[480px] lg:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-blue-600 shadow-lg backdrop-blur-md">
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <CheckCircle className="h-6 w-6" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-black text-[#0b2a5b] sm:text-sm">
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
          CTA FINAL
      ===================================================== */}

      <section className="relative bg-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-r from-[#0a2a6b] via-blue-700 to-sky-500">
          <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:py-16"
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-100">
                Prêt à passer à l’étape suivante ?
              </p>

              <h2 className="mt-4 text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
                Passez à une gestion plus performante avec{' '}
                <span className="whitespace-nowrap">
                  <span className="text-[#051536]">ORALI</span>{' '}
                  <span className="text-sky-200">SYSTEMS</span>
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-blue-50 sm:text-[15px]">
                Découvrez comment PC MAROC peut répondre aux besoins de
                votre établissement et faciliter la gestion de votre activité.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={CONTACT_LINK}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#051536] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b2a5b] focus:outline-none focus:ring-4 focus:ring-sky-200"
              >
                <CalendarDays className="h-5 w-5" />
                Demander une démonstration
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={CONTACT_LINK}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-4 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
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
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-[13px] font-bold leading-tight text-[#0b2a5b]">
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
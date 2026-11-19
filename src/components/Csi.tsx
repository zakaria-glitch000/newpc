import { useState, type ElementType } from 'react';import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
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
  CalendarCheck,
} from 'lucide-react';

import heroImage from '@/assets/res.webp';
import caisseImage from '@/assets/ev.jpeg';
import pdImage from '@/assets/prc.jpeg';
import kdsImage from '@/assets/orga.jpeg';
import ERP_IMAGE from '@/assets/og.jpeg';
import REPORTING_IMAGE from '@/assets/av.jpeg';
import caiImage from '@/assets/ca.jpeg';
import supportImage from '@/assets/supportt.jpeg';

/* =====================================================
    CONTACT
===================================================== */

const CONTACT_LINK = '/#contact';

/* =====================================================
    DATA
===================================================== */

const TOP_BENEFITS: { icon: ElementType; lines: [string, string] }[] = [
  { icon: Utensils, lines: ['Service', 'plus rapide'] },
  { icon: ChartNoAxesCombined, lines: ['Meilleure', 'rentabilité'] },
  { icon: Users, lines: ['Expérience client', 'améliorée'] },
  { icon: Settings, lines: ['Gestion', 'maîtrisée'] },
];

/* Remplacez les images par vos vraies photos (ex: @/assets/features/xxx.webp) */
const FEATURES: {
  icon: ElementType;
  title: [string, string];
  text: string;
  image: string;
  items: string[];
}[] = [
  {
    icon: Receipt,
    title: ['Encaissement', 'et ventes'],
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
    title: ['Prise de commande', 'et gestion des tables'],
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
    title: ['KDS - ', 'Gestion et suivi des commandes en cuisine'],
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
    title: ['Gestion des stocks', 'et des consommations'],
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
    title: ['Analyse des ventes', 'et rentabilité'],
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
    title: ['Organisation et gestion', 'de l’établissement'],
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
    LIGNE DE FONCTIONNALITÉ
===================================================== */

function FeatureRow({
  icon: Icon,
  title,
  text,
  image,
  items,
}: (typeof FEATURES)[number]) {
  return (
    <motion.article
      variants={fadeUp}
      className="grid overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/[0.07] ring-1 ring-slate-200/70 md:grid-cols-[250px_1fr] lg:grid-cols-[290px_1fr]"
    >
      <div className="h-48 md:h-full">
        <img
          src={image}
          alt={`${title[0]} ${title[1]}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full bg-gradient-to-br from-slate-100 to-orange-50 object-contain p-3 md:object-cover md:p-0"
        />
      </div>

      <div className="grid items-center gap-5 p-5 lg:grid-cols-[1.15fr_1fr] lg:gap-0 lg:p-6">
        <div className="flex gap-4 lg:pr-6">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff8a1f] to-[#f26522] text-white shadow-md shadow-orange-500/30">
            <Icon className="h-7 w-7" strokeWidth={1.8} />
          </span>
          <div>
            <h3 className="text-xl font-extrabold leading-tight tracking-tight text-[#0b1b3a]">
              {title[0]}
              <br />
              {title[1]}
            </h3>
            <p className="mt-2 text-[13px] leading-5 text-slate-700">{text}</p>
          </div>
        </div>

        <ul className="space-y-2 border-slate-200 lg:border-l-2 lg:border-[#f26522]/70 lg:pl-6">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-[#f26522]"
                strokeWidth={3.5}
              />
              <span className="text-[13px] font-medium leading-5 text-slate-800">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
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
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="flex items-center justify-center gap-4"
          >
            <span className="hidden h-[3px] w-24 rounded bg-[#f26522] sm:block lg:w-40" />
            <h2 className="text-center text-2xl font-black leading-tight tracking-tight text-[#0b1b3a] sm:text-3xl lg:text-4xl">
              Toutes les fonctionnalités pour gérer
              <br />
              <span className="text-[#f26522]">votre restaurant de A à Z</span>
            </h2>
            <span className="hidden h-[3px] w-24 rounded bg-[#f26522] sm:block lg:w-40" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="mt-10 space-y-4"
          >
            {FEATURES.map((f) => (
              <FeatureRow key={f.title[0]} {...f} />
            ))}
          </motion.div>
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
                <Icon
                  className="h-9 w-9 text-[#ff8a1f]"
                  strokeWidth={1.6}
                />
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
                  src={heroImage}
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
                Découvrez comment PC MAROC peut répondre aux besoins de
                votre établissement et faciliter la gestion de votre activité.
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
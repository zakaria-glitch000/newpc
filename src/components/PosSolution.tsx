import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Barcode,
  Check,
  CreditCard,
  Database,
  FileText,
  LayoutDashboard,
  Monitor,
  Package,
  Receipt,
  RefreshCw,
  ShieldCheck,
  ShoppingCart,
  Store,
  Users,
  WifiOff,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export function PosSolution() {
  return (
    <main className="bg-slate-950 text-slate-100 font-sans selection:bg-orange-600 selection:text-white">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-28 border-b border-orange-900/30">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-600/10 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/#solutions"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-orange-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux solutions
            </Link>
          </motion.div>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-orange-400">
                  Caisse & Point de vente
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Solution de caisse
                <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  professionnelle
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-lg leading-8 text-slate-300"
              >
                Une solution de point de vente moderne, intuitive et
                performante, conçue pour simplifier la gestion de votre
                activité et accompagner la croissance de votre entreprise.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                {[
                  'Conforme aux exigences réglementaires',
                  'Interface moderne',
                  'Fonctionnement hors ligne',
                  'Gestion multi-points de vente',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 shadow-sm"
                  >
                    <Check className="h-4 w-4 text-orange-500" />
                    {item}
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-9">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/30 transition-all hover:-translate-y-0.5 hover:bg-orange-700"
                >
                  Demander une démonstration
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-600/20 to-amber-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-3 shadow-2xl">
                <img
                  src="https://caisse.adixon.fr/assets/caisse-restaurant-moderne-PjP3nlO_.jpg"
                  alt="Solution de caisse professionnelle"
                  className="h-auto w-full rounded-2xl object-cover"
                />

                <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-slate-700/80 bg-slate-900/90 p-4 shadow-xl backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                      <ShoppingCart className="h-5 w-5 text-orange-500" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Point de vente
                      </p>
                      <p className="text-xs text-slate-400">
                        Simple • Rapide • Connecté
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="py-20 lg:py-28 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Une solution pensée pour votre activité
          </span>

          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simplifiez votre point de vente
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Avec notre solution de caisse, centralisez vos opérations et
            simplifiez la gestion de votre point de vente. Encaissement,
            produits, stocks, clients, paiements et reporting : toutes les
            fonctions essentielles sont réunies dans une seule solution.
          </p>

        </div>
      </section>

      {/* =========================================================
          3 AVANTAGES
      ========================================================== */}
      <section className="bg-slate-900 py-20 lg:py-28 border-t border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Pourquoi choisir notre solution ?
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Tout ce dont vous avez besoin pour gérer efficacement
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-14 grid gap-5 md:grid-cols-3"
          >

            <FeatureCard
              icon={LayoutDashboard}
              title="Interface intuitive"
              description="Une interface simple et moderne, pensée pour permettre à vos équipes de travailler rapidement et efficacement."
            />

            <FeatureCard
              icon={Store}
              title="Gestion multiposte"
              description="Gérez plusieurs caisses et plusieurs points de vente avec une organisation centralisée et synchronisée."
            />

            <FeatureCard
              icon={BarChart3}
              title="Analyse des ventes"
              description="Suivez votre activité grâce à des tableaux de bord, statistiques et rapports détaillés."
            />

          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FONCTIONNALITES
      ========================================================== */}
      <section className="py-20 lg:py-28 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Fonctionnalités
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Une caisse complète pour votre quotidien
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Retrouvez toutes les fonctionnalités essentielles pour gérer
              votre activité depuis un environnement unique.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            <FeatureBlock
              icon={CreditCard}
              title="Gestion des paiements"
              items={[
                'Paiement par carte, espèces et autres moyens',
                'Paiement fractionné',
                'Intégration avec les solutions de paiement',
                'Gestion des opérations d’encaissement',
              ]}
            />

            <FeatureBlock
              icon={Package}
              title="Gestion des produits"
              items={[
                'Catalogue produits',
                'Gestion des catégories',
                'Gestion des stocks',
                'Inventaire',
                'Promotions et remises',
                'Fidélisation clients',
              ]}
            />

            <FeatureBlock
              icon={Receipt}
              title="Tickets & facturation"
              items={[
                'Personnalisation des tickets',
                'Impression des tickets',
                'Envoi numérique',
                'Gestion des remboursements',
                'Gestion des avoirs',
                'Archivage des opérations',
              ]}
            />

            <FeatureBlock
              icon={BarChart3}
              title="Analyse & reporting"
              items={[
                'Tableaux de bord',
                'Rapports de ventes',
                'Suivi des stocks',
                'Analyse des performances',
                'Export des données',
              ]}
            />

          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNIQUE
      ========================================================== */}
      <section className="bg-slate-900 py-20 text-white lg:py-28 border-t border-b border-orange-900/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-orange-400">
                Performance & flexibilité
              </span>

              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Une solution adaptée à vos usages
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Que vous soyez commerçant, restaurateur ou professionnel des
                services, notre solution vous permet de travailler avec un
                environnement pensé pour la rapidité, la simplicité et la
                fiabilité.
              </p>

              <div className="mt-8 space-y-4">

                <DarkFeature
                  icon={Monitor}
                  title="Compatible avec votre environnement"
                  description="Une solution pensée pour fonctionner avec différents équipements de point de vente."
                />

                <DarkFeature
                  icon={WifiOff}
                  title="Fonctionnement hors ligne"
                  description="Continuez votre activité même en cas de coupure temporaire de connexion."
                />

                <DarkFeature
                  icon={Database}
                  title="Données centralisées"
                  description="Centralisez les informations de vos points de vente pour une meilleure visibilité."
                />

              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <StatCard
                icon={ShoppingCart}
                value="100%"
                label="Centralisé"
              />

              <StatCard
                icon={RefreshCw}
                value="24/7"
                label="Disponibilité"
              />

              <StatCard
                icon={Barcode}
                value="Simple"
                label="Gestion produits"
              />

              <StatCard
                icon={Users}
                value="Multi"
                label="Utilisateurs"
              />

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECURITE
      ========================================================== */}
      <section className="py-20 lg:py-28 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 lg:p-12">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20">
                <ShieldCheck className="h-7 w-7 text-orange-500" />
              </div>

              <h2 className="mt-6 font-display text-3xl font-bold text-white">
                Conformité & sécurité
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                La solution est conçue pour assurer la sécurisation et la
                traçabilité des opérations d'encaissement, avec une gestion
                rigoureuse des données et des historiques de transactions.
              </p>

            </div>

            <div className="space-y-6">

              <SecurityItem
                title="Sécurisation des données"
                description="Protection des informations liées aux transactions."
              />

              <SecurityItem
                title="Traçabilité"
                description="Historique des opérations et suivi des actions."
              />

              <SecurityItem
                title="Archivage"
                description="Conservation organisée des données et documents."
              />

              <SecurityItem
                title="Conformité"
                description="Solution pensée pour répondre aux exigences réglementaires applicables."
              />

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTEURS
      ========================================================== */}
      <section className="bg-slate-900 py-20 lg:py-28 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Secteurs d'activité
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Une solution adaptée à différents métiers
            </h2>

          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

            {[
              'Retail & commerces',
              'Restaurants',
              'Cafés & snacks',
              'Hôtellerie',
              'Services',
              'Points de vente',
            ].map((sector) => (
              <div
                key={sector}
                className="flex min-h-28 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950 p-5 text-center text-sm font-semibold text-slate-200 transition-all hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-lg"
              >
                {sector}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          ACCOMPAGNEMENT
      ========================================================== */}
      <section className="py-20 lg:py-28 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Notre accompagnement
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              De l'installation au support
            </h2>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-5">

            {[
              {
                number: '01',
                title: 'Analyse',
                text: 'Compréhension de votre activité et de vos besoins.',
              },
              {
                number: '02',
                title: 'Installation',
                text: 'Mise en place du matériel et de la solution.',
              },
              {
                number: '03',
                title: 'Configuration',
                text: 'Adaptation du système à votre organisation.',
              },
              {
                number: '04',
                title: 'Formation',
                text: 'Accompagnement de vos équipes.',
              },
              {
                number: '05',
                title: 'Support',
                text: 'Assistance et maintenance au quotidien.',
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-orange-500/30"
              >
                <span className="text-sm font-bold text-orange-500">
                  {step.number}
                </span>

                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {step.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section id="contact" className="px-6 pb-20 lg:px-8 lg:pb-28 bg-slate-950">
        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-3xl bg-orange-600 px-8 py-14 text-center sm:px-12 lg:px-20 lg:py-20 shadow-2xl">

            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">

              <FileText className="mx-auto h-10 w-10 text-white/90" />

              <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
                Prêt à moderniser votre point de vente ?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-100">
                Découvrez une solution de caisse conçue pour simplifier vos
                opérations, améliorer votre efficacité et vous donner une
                meilleure visibilité sur votre activité.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                <a
                  href="mailto:contact@ORALISYSTEMS.ma"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-slate-100 shadow-md"
                >
                  Demander une démonstration
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  to="/#solutions"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  Voir nos autres solutions
                </Link>

              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}


/* =============================================================
   COMPONENTS
============================================================= */

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-xl"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
        <Icon className="h-6 w-6 text-orange-500" />
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}


interface FeatureBlockProps {
  icon: React.ElementType;
  title: string;
  items: string[];
}

function FeatureBlock({
  icon: Icon,
  title,
  items,
}: FeatureBlockProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition-all hover:border-orange-500/50 hover:shadow-xl">
      <div className="flex items-center gap-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
          <Icon className="h-5 w-5 text-orange-500" />
        </div>

        <h3 className="font-display text-xl font-semibold text-white">
          {title}
        </h3>

      </div>

      <ul className="mt-6 space-y-3">

        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-6 text-slate-300"
          >
            <Check className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
            <span>{item}</span>
          </li>
        ))}

      </ul>
    </div>
  );
}


interface DarkFeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function DarkFeature({
  icon: Icon,
  title,
  description,
}: DarkFeatureProps) {
  return (
    <div className="flex gap-4">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-800 border border-slate-700">
        <Icon className="h-5 w-5 text-orange-400" />
      </div>

      <div>
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-400">
          {description}
        </p>
      </div>

    </div>
  );
}


interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

function StatCard({
  icon: Icon,
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
      <Icon className="h-6 w-6 text-orange-400" />

      <p className="mt-8 font-display text-3xl font-bold text-white">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-400">
        {label}
      </p>
    </div>
  );
}


interface SecurityItemProps {
  title: string;
  description: string;
}

function SecurityItem({
  title,
  description,
}: SecurityItemProps) {
  return (
    <div className="flex gap-4">

      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/10 border border-orange-500/20">
        <Check className="h-4 w-4 text-orange-500" />
      </div>

      <div>
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-400">
          {description}
        </p>
      </div>

    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import caisseImage from '@/assets/0.jpg';
import borneImage from '@/assets/1.jpg';
import kdsImage from '@/assets/4.jpg';
import terminalImage from '@/assets/3.jpg';
import nfLogo from '@/assets/nf.png';

import balanceImage from '@/assets/balance.jpg';
import zebraImage from '@/assets/zebra.jpg';
import pdaImage from '@/assets/pda.jpg';
import etiquetteImage from '@/assets/etiquette.jpg';

const products = [
  {
    title: 'Caisse Enregistreuse CSI',
    description: 'Des équipements fiables et performants.',
    image: caisseImage,
    link: '/Caisse',
  },
  {
    title: 'Bornes de commande',
    description: 'Des bornes interactives pour simplifier le parcours client.',
    image: borneImage,
    link: '/Born',
  },
  {
    title: 'Écrans cuisine KDS',
    description: 'Organisez et suivez la préparation des commandes.',
    image: kdsImage,
    link: '/kds',
  },
  {
    title: 'PAD CSI',
    description: 'Prenez les commandes directement à table.',
    image: terminalImage,
    link: '/Pda',
  },
  {
    title: 'Balances professionnelles',
    description: 'Pesage précis et interface tactile intuitive pour commerces.',
    image: balanceImage,
    link: '/Balance',
  },
  {
    title: 'IMPRIMANTE BALISAGE ZEBRA',
    description: 'Imprimantes thermiques robustes pour étiquettes et bracelets.',
    image: zebraImage,
    link: '/Zebra',
  },
  {
    title: 'PDA / Terminaux portables',
    description: 'Idéal pour la gestion des stocks, inventaires et scan rapide.',
    image: pdaImage,
    link: '/Stock',
  },
  {
    title: 'Étiquettes électroniques',
    description: 'Mise à jour dynamique des prix et des informations en rayon.',
    image: etiquetteImage,
    link: '/Etiquette',
  },
];

export default function ProductsSection() {
  return (
    <section
      id="Produit"
      className="scroll-mt-24 relative overflow-hidden bg-slate-950 px-4 py-8 sm:px-6 lg:py-12 text-slate-100 selection:bg-orange-600 selection:text-white"
    >
      {/* DÉCORATION DE FOND */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* EN-TÊTE */}
        <div className="mb-8 text-center">
          <span className="mb-3 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-400 shadow-sm">
            Nos produits
          </span>

          <h2 className="mx-auto mb-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Des équipements{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              performants
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Découvrez notre sélection de produits pour équiper, connecter et
            optimiser votre activité.
          </p>
        </div>

        {/* CARTES PRODUITS — ENTIÈREMENT CLIQUABLES */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="h-full"
            >
              <Link
                to={product.link}
                aria-label={`Découvrir ${product.title}`}
                className="group block h-full rounded-2xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
              >
                <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-950/40">
                  {/* LIGNE DÉCORATIVE */}
                  <div
                    className="pointer-events-none absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-400 to-orange-600 transition-transform duration-300 group-hover:scale-y-100"
                    aria-hidden="true"
                  />

                  {/* IMAGE */}
                  <div className="relative mb-3 flex h-36 items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-2">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* HALO */}
                    <div
                      className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-orange-600/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>

                  {/* INFORMATIONS */}
                  <div className="flex flex-1 flex-col">
                    <h3 className="mb-1.5 text-sm font-bold leading-5 text-white transition-colors duration-300 group-hover:text-orange-400">
                      {product.title}
                    </h3>

                    <p className="flex-1 text-xs leading-5 text-slate-400">
                      {product.description}
                    </p>

                    {/* BOUTON VISUEL */}
                    <div className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-orange-700 group-hover:shadow-lg group-hover:shadow-orange-600/20">
                      Savoir plus
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    <div className="mt-3 h-px w-full bg-slate-800 transition-colors duration-300 group-hover:bg-orange-500/30" />
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CERTIFICATION NF525 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="group/nf relative mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-300 hover:border-orange-500/50 hover:shadow-2xl md:mt-12"
        >
          {/* LIGNE DÉCORATIVE */}
          <div
            className="absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-400 to-orange-600 transition-transform duration-500 group-hover/nf:scale-y-100"
            aria-hidden="true"
          />

          {/* DÉCORATIONS DE FOND */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-600/10 blur-3xl transition-opacity duration-500 group-hover/nf:bg-orange-600/20" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-6 p-6 sm:p-8 lg:grid-cols-[220px_1fr] lg:gap-10 lg:p-8">
            {/* LOGO NF525 */}
            <div className="flex justify-center">
              <div className="flex h-36 w-48 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950 p-4 shadow-sm transition-all duration-300 group-hover/nf:scale-[1.03] group-hover/nf:border-orange-500/30 group-hover/nf:shadow-md">
                <img
                  src={nfLogo}
                  alt="Logo NF525"
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* TEXTE CERTIFICATION */}
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-xs font-semibold text-orange-300 transition-colors duration-300 group-hover/nf:border-orange-500/40 group-hover/nf:bg-orange-500/20">
                <ShieldCheck className="h-4 w-4 text-orange-400" />
                Certification Officielle
              </div>

              <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Solution de caisse{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Certifiée NF525
                </span>
              </h3>

              <p className="mx-auto max-w-3xl text-sm leading-7 text-slate-300 sm:text-base lg:mx-0">
                Une caisse simple et intuitive conçue pour répondre aux besoins
                des professionnels. La certification NF525 concerne les
                exigences applicables aux systèmes de caisse en France.
                Vérifiez les justificatifs de certification correspondant
                précisément au logiciel et à la version utilisés.
              </p>

              <div className="flex justify-center pt-1 lg:justify-start">
                <Link
                  to="/nf"
                  className="group/link inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  En savoir plus sur la NF525
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
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


      </div>
    </section>
  );
}
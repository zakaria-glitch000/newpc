import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Calculator,
  Smartphone,
  ConciergeBell,
  Hand,
  Scale,
  Printer,
  Barcode,
  Tag,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import caisseImage from '@/assets/cass.jpeg';
import borneImage from '@/assets/nboorn.png';
import kdsImage from '@/assets/nblaka.jpeg';
import terminalImage from '@/assets/npda.jpeg';

import balanceImage from '@/assets/balancee.jpeg';
import zebraImage from '@/assets/zeebra.jpeg';
import pdaImage from '@/assets/npd.jpeg';
import etiquetteImage from '@/assets/monnay.jpeg';

const products = [
  {
    title: 'Caisses tactiles',
    description: "Des solutions d'encaissement fiables et adaptées à tous les métiers.",
    image: caisseImage,
    icon: Calculator,
    link: '/Caisse',
  },
  {
    title: 'Bornes de commande',
    description: 'Des bornes interactives pour simplifier le parcours client.',
    image: borneImage,
    icon: Smartphone,
    link: '/Born',
  },
  {
    title: 'Écrans cuisine KDS',
    description: 'Organisez et suivez la préparation des commandes en temps réel.',
    image: kdsImage,
    icon: ConciergeBell,
    link: '/kds',
  },
  {
    title: 'PAD de prise de commande',
    description: 'Prenez les commandes directement en salle et gagnez en efficacité.',
    image: terminalImage,
    icon: Hand,
    link: '/Pda',
  },
    {
    title: 'MONNAYEUR',
    description: 'Affichez et mettez à jour vos prix en temps réel.',
    image: etiquetteImage,
    icon: Tag,
    link: '/Etiquette',
  },

  {
    title: 'Imprimantes de balisage',
    description: 'Éditez vos étiquettes et codes-barres rapidement et en toute fiabilité.',
    image: zebraImage,
    icon: Printer,
    link: '/Zebra',
  },  {
    title: 'Balances connectées',
    description: 'Pesez, vendez et gérez vos articles en toute simplicité.',
    image: balanceImage,
    icon: Scale,
    link: '/Balance',
  },
  {
    title: 'Terminaux de saisie',
    description: 'Réalisez vos inventaires et la gestion des stocks en mobilité.',
    image: pdaImage,
    icon: Barcode,
    link: '/Stock',
  },

];

export default function ProductsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="Produit"
      className="scroll-mt-24 relative overflow-hidden bg-slate-950 px-4 pb-10 pt-10 sm:px-6 lg:pb-12 lg:pt-12 text-slate-100 selection:bg-orange-600 selection:text-white"
    >
      {/* DÉCORATION DE FOND */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-600/10 blur-3xl" />

      {/* COIN ORANGE EN HAUT À DROITE */}
      <svg
        className="pointer-events-none absolute right-0 top-0 h-28 w-56 sm:h-36 sm:w-72"
        viewBox="0 0 300 150"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="prodCorner" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
        </defs>
        <path d="M60,0 L300,0 L300,150 C250,60 160,20 60,0 Z" fill="url(#prodCorner)" opacity="0.95" />
      </svg>

      <div className="relative mx-auto max-w-7xl">
        {/* EN-TÊTE */}
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-4 sm:gap-5">
            <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 sm:w-14" />
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Nos{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Produits
              </span>
            </h2>
            <span className="h-[3px] w-10 rounded-full bg-gradient-to-l from-amber-400 to-orange-500 sm:w-14" />
          </div>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Une gamme complète d&apos;équipements pour digitaliser et optimiser votre activité.
            <span className="mt-1 block text-orange-400">
              Cliquez sur un produit pour découvrir ses détails.
            </span>
          </p>
        </div>

        {/* CARTES PRODUITS — ENTIÈREMENT CLIQUABLES */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
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
                  className="group block h-full cursor-pointer rounded-3xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                >
                  <motion.article
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            boxShadow: [
                              '0 0 0px rgba(249,115,22,0)',
                              '0 0 24px rgba(249,115,22,0.35)',
                              '0 0 0px rgba(249,115,22,0)',
                            ],
                            borderColor: [
                              'rgb(30,41,59)',
                              'rgba(249,115,22,0.6)',
                              'rgb(30,41,59)',
                            ],
                          }
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.4,
                    }}
                    className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-transform duration-300 group-hover:-translate-y-1"
                  >
                    {/* LIGNE DÉCORATIVE */}
                    <div
                      className="pointer-events-none absolute left-0 top-0 z-20 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-400 to-orange-600 transition-transform duration-300 group-hover:scale-y-100"
                      aria-hidden="true"
                    />

                    {/* PHOTO PLEINE LARGEUR — image affichée en entier */}
                    <div className="relative h-52 overflow-hidden bg-slate-950">
                      {/* fond : même image floutée pour remplir tout l'espace */}
                      <img
                        src={product.image}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-xl"
                      />
                      {/* image complète au premier plan */}
                      <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        className="relative z-10 h-full w-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* PANNEAU D'INFORMATIONS (chevauche la photo) */}
                    <div className="relative z-20 -mt-5 flex flex-1 flex-col rounded-t-3xl bg-slate-900 px-5 pb-5 pt-5">
                      <div className="mb-2 flex items-center gap-3">
                        <Icon className="h-7 w-7 shrink-0 text-orange-400" strokeWidth={1.6} />
                        <h3 className="text-base font-extrabold leading-tight text-white transition-colors duration-300 group-hover:text-orange-400">
                          {product.title}
                        </h3>
                      </div>

                      <p className="flex-1 text-sm leading-snug text-slate-400">
                        {product.description}
                      </p>

                      {/* BOUTON VISUEL (span, car dans un <a>) */}
                      <span className="mx-auto mt-4 inline-flex w-44 items-center justify-center gap-2 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-orange-700 group-hover:shadow-lg group-hover:shadow-orange-600/20">
                        En savoir plus
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import {
  Calendar,
  Phone,
  ArrowRight,
  ShoppingCart,
  Settings,
  TrendingUp,
  Users,
} from 'lucide-react';

import innoshopImage from '@/assets/inno.jpeg';

export default function Innoshop() {
  // بدّل هاد الرقم برقم WhatsApp ديال الشركة
  // كتب الرقم مع كود الدولة، بلا + ولا espaces
  const whatsappNumber = '212661973253';

  const handleWhatsAppDemo = () => {
    const message = encodeURIComponent(
      'Bonjour, je souhaite demander une démonstration de la solution INNOSHOP.'
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleContact = () => {
    window.location.href = '/#contact';
  };

  const features = [
    {
      icon: ShoppingCart,
      title: 'Une solution complète',
      description: 'Pour votre magasin',
    },
    {
      icon: Settings,
      title: 'Une démonstration',
      description: 'Adaptée à vos besoins',
    },
    {
      icon: TrendingUp,
      title: 'Des fonctionnalités',
      description: 'Dédiées au retail',
    },
    {
      icon: Users,
      title: 'Un accompagnement',
      description: 'Par nos experts',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#fcfcfc] font-sans text-gray-800 antialiased">

      {/* HEADER */}
      <header className="mx-auto w-full max-w-7xl px-6 py-6">

      </header>

      {/* HERO */}
      <main className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-10 lg:grid-cols-12 lg:gap-14 lg:py-16">

        {/* TEXTE À GAUCHE */}
        <div className="space-y-6 lg:col-span-5">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-bold tracking-wide text-red-600 sm:text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e31b23]" />
            SOLUTION RETAIL
          </div>

          {/* Titre */}
          <h2 className="text-4xl font-black leading-[1.15] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Découvrez
            <br />
            notre solution
            <br />
            <span className="text-[#e31b23]">
              en action.
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-md text-base leading-8 text-gray-600 sm:text-lg">
            Demandez une démonstration personnalisée et découvrez comment
            INNOSHOP peut simplifier la gestion de votre magasin, optimiser
            vos ventes et faciliter votre quotidien.
          </p>

          {/* Boutons */}
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap">

            <button
              type="button"
              onClick={handleWhatsAppDemo}
              className="inline-flex items-center justify-between gap-4 rounded-full bg-[#e31b23] px-6 py-3.5 font-semibold text-white shadow-lg shadow-red-200/70 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <span className="flex items-center gap-3">
                <Calendar className="h-5 w-5 shrink-0" />
                <span>Demander une démo</span>
              </span>

              <ArrowRight className="h-5 w-5 shrink-0" />
            </button>

            <button
              type="button"
              onClick={handleContact}
              className="inline-flex items-center justify-between gap-4 rounded-full border-2 border-gray-900 bg-transparent px-6 py-3.5 font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
            >
              <span className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <span>Nous contacter</span>
              </span>

              <ArrowRight className="h-5 w-5 shrink-0" />
            </button>

          </div>

          {/* Petit texte */}
          <div className="flex items-center gap-2 pt-2 text-sm text-gray-500">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span>Une solution adaptée à votre activité</span>
          </div>

        </div>

        {/* IMAGE À DROITE */}
        <div className="lg:col-span-7">
          <div className="group relative mx-auto w-full max-w-2xl">

            {/* Décoration derrière l'image */}
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-3xl bg-red-100/80 sm:-right-6 sm:-top-6 sm:h-40 sm:w-40" />

            <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-3xl bg-gray-200/70 sm:-bottom-6 sm:-left-6 sm:h-36 sm:w-36" />

            {/* Image principale */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl transition-all duration-500 group-hover:-translate-y-1">

              <img
                src={innoshopImage}
                alt="Solution de caisse et logiciel de gestion INNOSHOP"
                className="block h-auto max-h-[560px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Badge sur l'image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-xl border border-white/60 bg-white/95 p-4 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6">

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 sm:text-xs">
                    Solution de gestion
                  </p>

                  <p className="mt-1 text-base font-black text-gray-900 sm:text-lg">
                    INNOSHOP
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#e31b23]">
                  <ShoppingCart className="h-6 w-6" />
                </div>

              </div>
            </div>
          </div>
        </div>

      </main>

      {/* FONCTIONNALITÉS */}
      <footer className="mx-auto w-full max-w-7xl px-6 pb-12 pt-8 sm:pb-16">

        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e31b23]">
            INNOSHOP
          </p>

          <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            Une solution pensée pour votre magasin
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex items-center gap-4 rounded-2xl border border-red-100 bg-red-50/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-100/80 text-[#e31b23] transition-all duration-300 group-hover:bg-[#e31b23] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-bold leading-snug text-gray-900">
                    {feature.title}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

        {/* CTA FINAL */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-gray-900 px-6 py-8 text-center sm:px-10 md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Prêt à découvrir INNOSHOP ?
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-300">
              Contactez notre équipe pour découvrir la solution adaptée à votre magasin.
            </p>
          </div>

          <button
            type="button"
            onClick={handleWhatsAppDemo}
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#e31b23] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Demander une démo
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

      </footer>
    </div>
  );
}

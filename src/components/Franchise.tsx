import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  BarChart3,
  Users,
  Settings,
  Calendar,
  Phone,
  ArrowRight,
  MapPin,
  Store,
  X,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import franchiseImage from '@/assets/10.jpg';

export default function Innoshop() {
  const navigate = useNavigate();

  // Modal states
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Demo form state
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    stores: '1-5',
  });

  // Cities overlay
  const cities = [
    { id: 'casablanca', name: 'Paris', top: '8%', left: '48%' },
    { id: 'rabat', name: 'Nice', top: '4%', left: '68%' },
    { id: 'marrakech', name: 'Bordeaux', top: '16%', left: '88%' },
    { id: 'tanger', name: 'Lyon', top: '22%', left: '38%' },
    { id: 'agadir', name: 'Toulouse', top: '38%', left: '92%' },
  ];

  // Demo form → WhatsApp
  const handleDemoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappNumber = '212661973253';

    const message = [
      'Bonjour PC MAROC 👋',
      '',
      'Je souhaite demander une démonstration.',
      '',
      `Nom complet : ${demoForm.name}`,
      `Email professionnel : ${demoForm.email}`,
      `Téléphone : ${demoForm.phone}`,
      `Entreprise : ${demoForm.company}`,
      `Nombre de magasins : ${demoForm.stores}`,
      '',
      'Merci de me contacter pour organiser une démonstration.',
    ].join('\n');

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);

    setDemoForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      stores: '1-5',
    });
  };

  const handleContactClick = () => {
    navigate('/');
    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  const features = [
    {
      icon: Store,
      title: 'Gestion multi-sites centralisée',
    },
    {
      icon: BarChart3,
      title: 'Reporting en temps réel de toutes vos enseignes',
    },
    {
      icon: Users,
      title: 'Solutions adaptées à votre concept',
    },
    {
      icon: Settings,
      title: 'Accompagnement et personnalisation',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-slate-50 font-sans text-slate-800 selection:bg-orange-600 selection:text-white">

      {/* TOP ACCENT LINE */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />

      {/* MAIN CONTAINER */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-4 py-6 sm:px-6 lg:px-8">

        {/* HEADER SPACING */}
        <header className="mb-8 flex items-center justify-between sm:mb-10">
          <div />
        </header>

        {/* HERO SECTION */}
        <div className="my-auto grid grid-cols-1 items-center gap-8 py-2 lg:grid-cols-12 lg:gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-6 text-center lg:col-span-5 lg:text-left">

            {/* CATEGORY TAG */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-orange-100 bg-orange-50/90 px-4 py-2 text-xs font-bold text-orange-700 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
              <span>SOLUTION POUR FRANCHISES &amp; CHAÎNES</span>
            </div>

            {/* MAIN TITLE */}
            <h1 className="text-3xl font-black leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-5xl">
              Pilotez tous
              <br className="hidden sm:inline" />
              <span> vos points de vente</span>
              <br />
              <span className="text-orange-600">
                en un seul endroit
                <span className="text-amber-500">.</span>
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mx-auto max-w-lg text-base font-medium leading-relaxed text-slate-500 sm:text-lg lg:mx-0">
              Une solution complète pour gérer vos franchises et chaînes de
              restaurants, cafés ou commerces.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row lg:justify-start">

              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-orange-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-600/30 transition-all hover:bg-orange-700 hover:shadow-orange-600/40 active:scale-95 sm:w-auto"
              >
                <Calendar className="h-5 w-5 text-orange-200" />
                <span>Demander une démo</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={handleContactClick}
                className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-800 shadow-sm transition-all hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700 sm:w-auto"
              >
                <Phone className="h-4 w-4 text-slate-700" />
                <span>Nous contacter</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </button>

            </div>

            {/* TRUST INDICATORS */}
            <div className="flex flex-col items-center justify-center gap-3 border-t border-slate-200/80 pt-4 text-xs font-semibold text-slate-500 sm:flex-row sm:gap-6 lg:justify-start">

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                <span>+150 enseignes partenaires</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                <span>Support &amp; intégration sur mesure</span>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: STATIC IMAGE */}
          <div className="relative py-4 lg:col-span-7">

            {/* FLOATING CITY PINS */}
            <div className="pointer-events-none absolute inset-0 z-20 hidden sm:block">
              {cities.map((city) => (
                <div
                  key={city.id}
                  style={{ top: city.top, left: city.left }}
                  className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 transform"
                >
                  <div className="flex items-center gap-1.5 rounded-full border border-slate-100 bg-white px-3 py-1.5 shadow-xl">
                    <span className="rounded-full bg-orange-500 p-1 text-white">
                      <MapPin className="h-3 w-3 fill-white" />
                    </span>

                    <span className="whitespace-nowrap text-xs font-bold text-slate-800">
                      {city.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* IMAGE CONTAINER */}
            <div className="group relative z-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
              <img
                src={franchiseImage}
                alt="Solution de gestion des points de vente PC MAROC"
                className="block h-[300px] w-full object-contain sm:h-[440px]"
              />

              {/* IMAGE CAPTION */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-5 pt-16 sm:p-7 sm:pt-20">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-orange-200">
                      Gestion centralisée
                    </p>

                    <h2 className="mt-1 text-xl font-black text-white sm:text-2xl">
                      Tous vos points de vente
                    </h2>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-sm sm:flex">
                    <Building2 className="h-6 w-6" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-slate-200/80 pt-8 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-start gap-4 rounded-2xl p-3 transition-all hover:bg-white hover:shadow-md"
              >
                <div className="shrink-0 rounded-2xl border border-orange-100 bg-orange-50 p-3 text-orange-600 shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-sm font-bold leading-snug text-slate-900 sm:text-base">
                    {feature.title}
                  </h3>

                  <div className="mt-2.5 h-1 w-8 rounded-full bg-orange-600" />
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-8 border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} PC MAROC. Solutions Commerce &amp;
          Restaurant.
        </p>
      </footer>

      {/* DEMO MODAL */}
      {isDemoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeDemoModal();
          }}
        >
          <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">

            <button
              type="button"
              onClick={closeDemoModal}
              aria-label="Fermer"
              className="absolute right-4 top-4 rounded-lg p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 pr-6">
              <h3 className="text-xl font-bold text-slate-900">
                Demander une démonstration
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Remplissez ce formulaire. Vos informations seront préparées
                dans un message WhatsApp.
              </p>
            </div>

            <form onSubmit={handleDemoSubmit} className="space-y-3.5">

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Nom complet
                </label>

                <input
                  type="text"
                  required
                  autoComplete="name"
                  value={demoForm.name}
                  onChange={(e) =>
                    setDemoForm({ ...demoForm, name: e.target.value })
                  }
                  placeholder="Votre nom complet"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Email professionnel
                </label>

                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={demoForm.email}
                  onChange={(e) =>
                    setDemoForm({ ...demoForm, email: e.target.value })
                  }
                  placeholder="vous@entreprise.fr"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Téléphone
                  </label>

                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    value={demoForm.phone}
                    onChange={(e) =>
                      setDemoForm({ ...demoForm, phone: e.target.value })
                    }
                    placeholder="06 00 00 00 00"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Nombre de magasins
                  </label>

                  <select
                    value={demoForm.stores}
                    onChange={(e) =>
                      setDemoForm({ ...demoForm, stores: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="1-5">1–5</option>
                    <option value="6-15">6–15</option>
                    <option value="15-50">15–50</option>
                    <option value="+50">+50</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Nom de l'enseigne
                </label>

                <input
                  type="text"
                  required
                  autoComplete="organization"
                  value={demoForm.company}
                  onChange={(e) =>
                    setDemoForm({ ...demoForm, company: e.target.value })
                  }
                  placeholder="Nom de votre entreprise"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 font-semibold text-white shadow-md transition-all hover:bg-[#1ebe5d]"
              >
                <Phone className="h-5 w-5" />
                Continuer sur WhatsApp
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-center text-[11px] leading-5 text-slate-400">
                WhatsApp s'ouvrira pour vous permettre d'envoyer votre demande.
              </p>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
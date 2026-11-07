
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Innoshop from '@/components/Innoshop';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Solutions } from '@/components/Solutions';
import { FeaturedProduct } from '@/components/FeaturedProduct';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';
import { Industries } from '@/components/Industries';
import { Process } from '@/components/Process';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import Reference from '@/components/Reference';

import Franchise from '@/components/Franchise';
import NosExpertises from './components/NosExpertises';
import Fonctionnalite from './components/Fonctionnalite';
import Produit from './components/Produit';
import Devmesure from './components/Devmesure';

import { Nf525Page } from '@/components/Nf525Page';
import { PosSolution } from '@/components/PosSolution';
import { BornesCommande } from '@/components/BornesCommande';
import { GestionStocks } from '@/components/GestionStocks';
import { FideliteClient } from '@/components/FideliteClient';
import { AnalyseVentes } from '@/components/AnalyseVentes';
import { KdsSolution } from '@/components/KdsSolution';

import Csi from '@/components/Csi';
import Affcsi from '@/components/Affcsi';
import Innep from '@/components/Innep';
import Shop from '@/components/Shop';
import Caisse from '@/components/Caisse';
import Born from '@/components/Born';
import Kds from '@/components/Kds';
import Pda from '@/components/Pda';
import Balance from '@/components/Balance';
import Zebra from '@/components/Zebra';
import Stock from '@/components/Stock';
import Etiquette from '@/components/Etiquette';
import Gms from '@/components/Gms';
import Report from '@/components/Report';

// ============================================================
// SCROLL TO TOP
// ============================================================

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ne pas remonter en haut si on navigue vers une ancre.
    if (window.location.hash === '#contact') {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
}

// ============================================================
// SCROLL VERS LE CONTACT
// ============================================================

function ScrollToContact() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash !== '#contact') {
      return;
    }

    const timeout = window.setTimeout(() => {
      const contactSection = document.getElementById('contact');

      contactSection?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 200);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [pathname, hash]);

  return null;
}

// ============================================================
// PROTECTION CONTRE LA COPIE
// ============================================================

function CopyProtection() {
  useEffect(() => {
    const preventCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement | null;

      // Autoriser la copie dans les champs de formulaire.
      if (
        target?.closest(
          'input, textarea, select, [contenteditable="true"]'
        )
      ) {
        return;
      }

      e.preventDefault();
    };

    const preventCut = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement | null;

      if (
        target?.closest(
          'input, textarea, select, [contenteditable="true"]'
        )
      ) {
        return;
      }

      e.preventDefault();
    };

    const preventContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;

      // Garder le menu contextuel dans les champs de formulaire.
      if (
        target?.closest(
          'input, textarea, select, [contenteditable="true"]'
        )
      ) {
        return;
      }

      e.preventDefault();
    };

    const preventDrag = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;

      if (target?.closest('img')) {
        e.preventDefault();
      }
    };

    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCut);
    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('dragstart', preventDrag);

    return () => {
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCut);
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('dragstart', preventDrag);
    };
  }, []);

  return null;
}

// ============================================================
// PAGE D'ACCUEIL
// ============================================================

function HomePage() {
  return (
    <>
      <Hero />
      <NosExpertises />
      <Fonctionnalite />
      <Produit />
      <FeaturedProduct />
      <Solutions />
      <Services />
      <WhyUs />
      <Process />
      <About />
            <Reference />

      <CTA />
      <Contact />
    </>
  );
}

// ============================================================
// APP
// ============================================================

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToContact />
      <CopyProtection />

      <div className="min-h-screen bg-white text-slate-700 antialiased">
        <Header />

        <main>
          <Routes>
            {/* PAGE D'ACCUEIL */}
            <Route path="/" element={<HomePage />} />

            {/* SOLUTIONS RESTAURATION & CHR */}
            <Route
              path="/solutions-restauration"
              element={<Csi />}
            />

            <Route path="/Affcsi" element={<Affcsi />} />
            <Route path="/Etiquette" element={<Etiquette />} />
            <Route path="/Innep" element={<Innep />} />
            <Route path="/Stock" element={<Stock />} />
            <Route path="/Zebra" element={<Zebra />} />
            <Route path="/Balance" element={<Balance />} />
            <Route path="/Kds" element={<Kds />} />
            <Route path="/Pda" element={<Pda />} />
            <Route path="/Caisse" element={<Caisse />} />
            <Route path="/Born" element={<Born />} />
            <Route path="/Shop" element={<Shop />} />

            {/* INNOSHOP */}
            <Route
              path="/innoshop"
              element={<Innoshop />}
            />

            {/* FRANCHISE */}
            <Route
              path="/franchise"
              element={<Franchise />}
            />

            {/* DÉVELOPPEMENT SUR MESURE */}
            <Route
              path="/Devmesure"
              element={<Devmesure />}
            />

            {/* SYSTÈMES DE CAISSE & POS */}
            <Route
              path="/solutions/pos"
              element={<PosSolution />}
            />

            {/* BORNES DE COMMANDE */}
            <Route
              path="/solutions/bornes-commande"
              element={<BornesCommande />}
            />

            {/* GESTION DES STOCKS */}
            <Route
              path="/solutions/gestion-stocks"
              element={<GestionStocks />}
            />

            {/* FIDÉLITÉ CLIENT */}
            <Route
              path="/solutions/fidelite-client"
              element={<FideliteClient />}
            />

            {/* ANALYSE DES VENTES */}
            <Route
              path="/solutions/analyse-ventes"
              element={<AnalyseVentes />}
            />

            {/* KDS - ÉCRAN DE PRODUCTION CUISINE */}
            <Route
              path="/solutions/kds"
              element={<KdsSolution />}
            />

            {/* NF525 */}
            <Route
              path="/nf"
              element={<Nf525Page />}
            />
     <Route
              path="/Gms"
              element={<Gms />}
            />
                <Route
              path="/Report"
              element={<Report />}
            />
            <Route
              path="/nf525"
              element={<Nf525Page />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '@/data/content';
import { Logo } from './ui/Logo';

// Numéro WhatsApp de l'entreprise (Format international sans + ni espaces)
const WHATSAPP_NUMBER = '33630218757';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pendingHash, setPendingHash] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  // Détection du scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bloquer le scroll lorsque le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Scroll vers une section après le chargement de l'accueil
  useEffect(() => {
    if (!pendingHash || location.pathname !== '/') return;

    const hash = pendingHash;

    const timer = window.setTimeout(() => {
      const element = document.getElementById(
        decodeURIComponent(hash.replace(/^#/, ''))
      );

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      setPendingHash('');
    }, 150);

    return () => window.clearTimeout(timer);
  }, [location.pathname, pendingHash]);

  // Navigation entre les pages et les sections
  const handleNavigation = useCallback(
    (href: string) => {
      setMobileOpen(false);

      const hashIndex = href.indexOf('#');

      // Lien sans ancre
      if (hashIndex === -1) {
        setPendingHash('');
        navigate(href);
        return;
      }

      const hash = href.slice(hashIndex);

      // Déjà sur l'accueil : scroll direct
      if (location.pathname === '/') {
        const element = document.getElementById(
          decodeURIComponent(hash.replace(/^#/, ''))
        );

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        } else {
          setPendingHash(hash);
        }

        return;
      }

      // Depuis une autre page : revenir à l'accueil
      setPendingHash(hash);
      navigate('/');
    },
    [location.pathname, navigate]
  );

  // Logo : retour en haut de l'accueil
  const handleLogoClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setMobileOpen(false);
    setPendingHash('');

    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-gray-200 bg-white shadow-sm'
            : 'border-b border-transparent bg-white'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* LOGO */}
          <div className="flex items-center gap-10">
            <Link
              to="/"
              onClick={handleLogoClick}
              aria-label="Accueil PC MAROC"
              className="flex items-center gap-2"
            >
              <Logo />
            </Link>

            {/* NAVIGATION DESKTOP */}
            <nav className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavigation(link.href);
                  }}
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-900 transition-colors hover:text-orange-600"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </a>
              ))}
            </nav>
          </div>

          {/* RIGHT ACTIONS DESKTOP */}
          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                handleNavigation('#contact');
              }}
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Essai gratuit
            </a>
          </div>

          {/* BOUTON MOBILE */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 lg:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* PANNEAU MOBILE */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 300,
              }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[85%] max-w-sm flex-col border-l border-gray-200 bg-white lg:hidden"
            >
              {/* EN-TÊTE MOBILE */}
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
                <Link
                  to="/"
                  onClick={handleLogoClick}
                  aria-label="Accueil PC MAROC"
                >
                  <Logo />
                </Link>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700"
                  aria-label="Fermer le menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* NAVIGATION MOBILE */}
              <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigation(link.href);
                    }}
                    className="flex items-center justify-between rounded-lg px-2 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 hover:text-orange-600"
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4 text-gray-400 -rotate-90" />
                  </a>
                ))}
              </nav>

              {/* CTA MOBILE */}
              <div className="border-t border-gray-200 p-6">
                <a
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavigation('#contact');
                  }}
                  className="flex w-full items-center justify-center rounded-full bg-orange-600 px-5 py-3 text-base font-medium text-white transition-all hover:bg-orange-700"
                >
                  Essai gratuit
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* WHATSAPP FLOTTANT */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter PC MAROC sur WhatsApp"
        title="Contactez-nous sur WhatsApp"
        className="group fixed bottom-5 right-5 z-[80] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:bottom-6 sm:right-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7 transition-transform duration-300 group-hover:rotate-[-8deg]"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.78 11.78 0 0 0 12.12 0C5.57 0 .24 5.33.24 11.88c0 2.1.55 4.15 1.6 5.96L.14 24l6.31-1.65a11.86 11.86 0 0 0 5.67 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.49-8.43ZM12.13 21.8a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.75.98 1-3.65-.23-.38a9.87 9.87 0 1 1 8.37 4.63Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </>
  );
}
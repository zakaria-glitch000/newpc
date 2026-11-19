
import { useEffect, useState, useCallback, useRef } from 'react';
import type { MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Utensils,
  ShoppingBag,
  Sparkles,
  Shirt,
  Coffee,
  Croissant,
  Gamepad2,
  Pizza,
  Beef,
  Salad,
  Wine,
  Music,
  Store,
  Apple,
  Cigarette,
  Armchair,
  Sprout,
  Dumbbell,
  Factory,
  Network,
  HeartPulse,
  ScanFace,
  Scissors,
  Footprints,
  WashingMachine,
  Brush,
} from 'lucide-react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '@/data/content';
import { Logo } from './ui/Logo';

const WHATSAPP_NUMBER = '212661973253';

// ======================================================
// CATÉGORIES ET SOUS-CATÉGORIES
// ======================================================

const COMMERCE_CATEGORIES = [
  {
    title: 'Restauration',
    categoryKey: 'restauration',
    icon: Utensils,
    items: [
      { label: 'Restauration', slug: 'restauration', icon: Utensils },
      { label: 'Café - Glacier', slug: 'cafe-glacier', icon: Coffee },
      { label: 'Boulangerie', slug: 'boulangerie', icon: Croissant },
      { label: 'Loisir', slug: 'Loisir', icon: Gamepad2 },
      { label: 'Fast food', slug: 'fast-food', icon: Store },
      { label: 'Pizzeria', slug: 'pizzeria', icon: Pizza },
      { label: 'Burger', slug: 'burger', icon: Beef },
      { label: 'Bar à salade', slug: 'bar-a-salad', icon: Salad },
      { label: 'Bar-lounge', slug: 'bar-lounge', icon: Wine },
      { label: 'Night club', slug: 'night-club', icon: Music },
    ],
  },
  {
    title: 'Retail',
    categoryKey: 'retail',
    icon: ShoppingBag,
    items: [
      { label: 'Textile et chaussure', slug: 'textile-chaussure', icon: Shirt },
      { label: 'Métiers de bouche', slug: 'metiers-de-bouche', icon: Beef },
      { label: 'Supérette et alimentation', slug: 'superette-alimentation', icon: Apple },
      { label: 'Cigarette Électronique', slug: 'cigarette-electronique', icon: Cigarette },
      { label: 'Caviste', slug: 'caviste', icon: Wine },
      { label: 'Équipement du foyer', slug: 'equipement-foyer', icon: Armchair },
      {
        label: 'Jardinerie, Bricolage et animalerie',
        slug: 'jardinerie-bricolage-animalerie',
        icon: Sprout,
      },
      { label: 'Sport et loisirs', slug: 'sport-loisirs', icon: Dumbbell },
      { label: 'Gestion de production', slug: 'gestion-production', icon: Factory },
      { label: 'Franchises & multisites', slug: 'franchises-multisites', icon: Network },
    ],
  },
  {
    title: 'Beauté & Bien-être',
    categoryKey: 'beaute-bien-etre',
    icon: Sparkles,
    items: [
      { label: 'Salon de coiffure', slug: 'salon-de-coiffure', icon: Scissors },
      { label: 'SPA & Pilates', slug: 'spa', icon: Sparkles },
      {
        label: 'Centre de remise en forme',
        slug: 'centre-remise-en-forme',
        icon: HeartPulse,
      },
      { label: 'Centre de laser', slug: 'centre-de-laser', icon: ScanFace },
      {
        label: "Institut d'esthétique",
        slug: 'institut-esthetique',
        icon: Brush,
      },
    ],
  },
  {
    title: 'Pressing',
    categoryKey: 'pressing',
    icon: Shirt,
    items: [
      { label: 'Blanchisserie', slug: 'blanchisserie', icon: WashingMachine },
      { label: 'Cordonnerie', slug: 'cordonnerie', icon: Footprints },
      { label: 'Teinturier', slug: 'teinturier', icon: Shirt },
      { label: 'Retoucherie', slug: 'retoucherie', icon: Scissors },
    ],
  },
];

// ======================================================
// URL DES FAMILLES
// ======================================================

const CATEGORY_ROUTES: Record<string, string> = {
  restauration: '/solutions-restauration',
  retail: '/Shop',
  'beaute-bien-etre': '/Ebel',
  pressing: '/Gesticlean',
};

// URL de la famille
const getCategoryUrl = (categoryKey: string): string => {
  return CATEGORY_ROUTES[categoryKey] || '/';
};

// Toutes les sous-familles utilisent le lien de leur famille
const getSubCategoryUrl = (categoryKey: string, _slug: string): string => {
  return getCategoryUrl(categoryKey);
};

// ======================================================
// HEADER
// ======================================================

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pendingHash, setPendingHash] = useState('');

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCommerceOpen, setMobileCommerceOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  // ======================================================
  // FERMER LE DROPDOWN EN CLIQUANT À L'EXTÉRIEUR
  // ======================================================

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // ======================================================
  // DÉTECTION DU SCROLL
  // ======================================================

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ======================================================
  // BLOQUER LE SCROLL DU BODY SUR MOBILE
  // ======================================================

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // ======================================================
  // GÉRER LES ANCRES APRÈS NAVIGATION
  // ======================================================

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

  // ======================================================
  // NAVIGATION GÉNÉRALE
  // ======================================================

  const handleNavigation = useCallback(
    (href: string) => {
      setMobileOpen(false);
      setDropdownOpen(false);

      // Liens externes
      if (/^https?:\/\//i.test(href)) {
        window.location.href = href;
        return;
      }

      // Navigation vers les pages internes
      if (href.startsWith('/')) {
        setPendingHash('');

        if (href.includes('#')) {
          const [path, hash] = href.split('#');

          if (path === '' || path === '/') {
            if (location.pathname === '/') {
              const element = document.getElementById(
                decodeURIComponent(hash)
              );

              if (element) {
                element.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              } else {
                setPendingHash(`#${hash}`);
              }
            } else {
              setPendingHash(`#${hash}`);
              navigate('/');
            }

            return;
          }

          navigate(href);
          return;
        }

        navigate(href);
        return;
      }

      navigate(href);
    },
    [location.pathname, navigate]
  );

  // ======================================================
  // NAVIGATION DU LOGO
  // ======================================================

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    setMobileOpen(false);
    setDropdownOpen(false);
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

  // ======================================================
  // LIENS AVEC DROPDOWN
  // ======================================================

  const linksWithDropdown = [
    'Commerce',
    'Type de Commerce',
    'Produit',
    'Développement',
  ];

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <>
      {/* ================================================== */}
      {/* HEADER DESKTOP */}
      {/* ================================================== */}

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-xl'
            : 'border-b border-transparent bg-white'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-10">
            {/* LOGO */}

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
              {NAV_LINKS.map((link) => {
                if (
                  link.label === 'Accueil' ||
                  link.label === 'Contact'
                ) {
                  return null;
                }

                const isCommerce =
                  link.label === 'Commerce' ||
                  link.label === 'Type de Commerce';

                const hasDropdown = linksWithDropdown.includes(link.label);

                const isAfterDeveloppement =
                  link.label === 'Développement';

                if (isCommerce) {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      ref={dropdownRef}
                    >
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        aria-expanded={dropdownOpen}
                        className="group flex items-center gap-2 py-3 text-sm font-semibold text-gray-900 transition-colors hover:text-[#f96302]"
                      >
                        Type de Commerce

                        <ChevronDown
                          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                            dropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* MEGA MENU */}

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 12,
                              scale: 0.98,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              y: 12,
                              scale: 0.98,
                            }}
                            transition={{ duration: 0.2 }}
                            className="absolute -left-20 top-full mt-3 w-[880px] rounded-3xl border border-gray-100 bg-white p-7 shadow-2xl shadow-black/10"
                          >
                            <div className="grid grid-cols-4 gap-6">
                              {COMMERCE_CATEGORIES.map((cat) => {
                                const IconComp = cat.icon;

                                return (
                                  <div
                                    key={cat.title}
                                    className="flex flex-col gap-4"
                                  >
                                    {/* TITRE CLIQUABLE DE LA FAMILLE */}

                                    <a
                                      href={getCategoryUrl(cat.categoryKey)}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(
                                          getCategoryUrl(cat.categoryKey)
                                        );
                                      }}
                                      className="group flex items-center gap-2.5 border-b border-gray-100 pb-3 text-[#f96302] transition-all hover:border-orange-300"
                                    >
                                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 transition-all group-hover:bg-[#f96302]">
                                        <IconComp className="h-4 w-4 text-[#f96302] group-hover:text-white" />
                                      </span>

                                      <span className="text-xs font-extrabold uppercase tracking-wider text-gray-900 transition-colors group-hover:text-[#f96302]">
                                        {cat.title}
                                      </span>
                                    </a>

                                    {/* SOUS-CATÉGORIES */}

                                    <div className="flex flex-col gap-1">
                                      {cat.items.map((item) => {
                                        const ItemIcon = item.icon;

                                        const url = getSubCategoryUrl(
                                          cat.categoryKey,
                                          item.slug
                                        );

                                        return (
                                          <a
                                            key={item.slug}
                                            href={url}
                                            onClick={(e) => {
                                              e.preventDefault();
                                              handleNavigation(url);
                                            }}
                                            className="group flex items-center gap-2.5 rounded-xl px-2 py-2 text-xs font-medium text-gray-600 transition-all hover:translate-x-1 hover:bg-orange-50 hover:text-[#f96302]"
                                          >
                                            <ItemIcon className="h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-[#f96302]" />
                                            <span>{item.label}</span>
                                          </a>
                                        );
                                      })}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            {/* FOOTER MEGA MENU */}

                            <div className="mt-6 flex items-center justify-between rounded-2xl bg-gradient-to-r from-orange-50 to-white px-5 py-4">
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                                  <Sparkles className="h-5 w-5 text-[#f96302]" />
                                </div>

                                <div>
                                  <p className="text-sm font-bold text-gray-900">
                                    PC MAROC
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    Des solutions adaptées à chaque métier
                                  </p>
                                </div>
                              </div>

                              <button
                                onClick={() =>
                                  handleNavigation('/#contact')
                                }
                                className="rounded-xl bg-[#f96302] px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-orange-600"
                              >
                                Demander une démo
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <div
                    key={link.href}
                    className="flex items-center gap-8"
                  >
                    <a
                      href={link.href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleNavigation(link.href);
                      }}
                      className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 transition-colors hover:text-[#f96302]"
                    >
                      {link.label}

                      {hasDropdown && (
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      )}
                    </a>

                    {isAfterDeveloppement && (
                      <div className="h-5 w-px bg-gray-300" />
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* BOUTON DEMO DESKTOP */}

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="/#contact"
              onClick={(event) => {
                event.preventDefault();
                handleNavigation('/#contact');
              }}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff8c00] via-[#f96302] to-[#e05500] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(249,99,2,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_30px_-5px_rgba(249,99,2,0.6)] active:scale-[0.98]"
            >
              <Calendar className="h-4 w-4" />
              Demander une démo
            </a>
          </div>

          {/* BOUTON MOBILE */}

          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-orange-50 hover:text-[#f96302] lg:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      {/* ================================================== */}
      {/* MENU MOBILE */}
      {/* ================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* OVERLAY */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm lg:hidden"
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
              {/* HEADER MOBILE */}

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
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition-colors hover:bg-orange-50 hover:text-[#f96302]"
                  aria-label="Fermer le menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* NAVIGATION MOBILE */}

              <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-6">
                {NAV_LINKS.map((link) => {
                  const isCommerce =
                    link.label === 'Commerce' ||
                    link.label === 'Type de Commerce';

                  if (isCommerce) {
                    return (
                      <div
                        key={link.href}
                        className="flex flex-col"
                      >
                        <button
                          onClick={() =>
                            setMobileCommerceOpen(!mobileCommerceOpen)
                          }
                          className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-bold text-gray-900 transition-colors hover:bg-orange-50 hover:text-[#f96302]"
                        >
                          <span className="flex items-center gap-3">
                            <ShoppingBag className="h-5 w-5 text-[#f96302]" />
                            Type de Commerce
                          </span>

                          <ChevronDown
                            className={`h-4 w-4 text-gray-400 transition-transform ${
                              mobileCommerceOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* FAMILLES */}

                        <AnimatePresence>
                          {mobileCommerceOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: 'auto',
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{ duration: 0.25 }}
                              className="my-2 flex flex-col gap-2 overflow-hidden pl-2"
                            >
                              {COMMERCE_CATEGORIES.map((cat) => {
                                const IconComp = cat.icon;

                                const isCatOpen =
                                  activeMobileCategory === cat.title;

                                return (
                                  <div
                                    key={cat.title}
                                    className="flex flex-col rounded-xl border border-gray-100 bg-gray-50/70 px-3 py-2"
                                  >
                                    {/* NOM FAMILLE + FLÈCHE */}

                                    <div className="flex items-center justify-between gap-2">
                                      <button
                                        onClick={() =>
                                          handleNavigation(
                                            getCategoryUrl(cat.categoryKey)
                                          )
                                        }
                                        className="flex flex-1 items-center gap-3 py-2 text-left text-sm font-bold text-gray-800 transition-colors hover:text-[#f96302]"
                                      >
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-[#f96302]">
                                          <IconComp className="h-4 w-4" />
                                        </span>

                                        {cat.title}
                                      </button>

                                      <button
                                        onClick={() =>
                                          setActiveMobileCategory(
                                            isCatOpen ? null : cat.title
                                          )
                                        }
                                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-orange-100 hover:text-[#f96302]"
                                        aria-label={`Afficher les sous-catégories ${cat.title}`}
                                        aria-expanded={isCatOpen}
                                      >
                                        <ChevronDown
                                          className={`h-4 w-4 transition-transform ${
                                            isCatOpen ? 'rotate-180' : ''
                                          }`}
                                        />
                                      </button>
                                    </div>

                                    {/* SOUS-CATÉGORIES */}

                                    <AnimatePresence>
                                      {isCatOpen && (
                                        <motion.div
                                          initial={{
                                            height: 0,
                                            opacity: 0,
                                          }}
                                          animate={{
                                            height: 'auto',
                                            opacity: 1,
                                          }}
                                          exit={{
                                            height: 0,
                                            opacity: 0,
                                          }}
                                          transition={{ duration: 0.2 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="mb-2 ml-4 flex flex-col gap-1 border-l-2 border-orange-200 pl-3">
                                            {cat.items.map((item) => {
                                              const ItemIcon = item.icon;

                                              const url = getSubCategoryUrl(
                                                cat.categoryKey,
                                                item.slug
                                              );

                                              return (
                                                <button
                                                  key={item.slug}
                                                  onClick={() =>
                                                    handleNavigation(url)
                                                  }
                                                  className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-left text-xs font-medium text-gray-600 transition-all hover:bg-orange-50 hover:text-[#f96302]"
                                                >
                                                  <ItemIcon className="h-4 w-4 shrink-0 text-gray-400" />
                                                  {item.label}
                                                </button>
                                              );
                                            })}
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleNavigation(link.href);
                      }}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-orange-50 hover:text-[#f96302]"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              {/* BOUTON DEMO MOBILE */}

              <div className="border-t border-gray-200 p-6">
                <a
                  href="/#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavigation('/#contact');
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff8c00] via-[#f96302] to-[#e05500] px-5 py-4 text-base font-bold text-white shadow-[0_10px_25px_-5px_rgba(249,99,2,0.4)] transition-all hover:shadow-[0_15px_30px_-5px_rgba(249,99,2,0.6)]"
                >
                  <Calendar className="h-5 w-5" />
                  Demander une démo
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================================================== */}
      {/* BOUTON WHATSAPP FLOTTANT */}
      {/* ================================================== */}

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

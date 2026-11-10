import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Calendar, Utensils, ShoppingBag, Sparkles, Shirt } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '@/data/content';
import { Logo } from './ui/Logo';

const WHATSAPP_NUMBER = '212661973253';

// Catégories et sous-types pour le dropdown "Commerce"
const COMMERCE_CATEGORIES = [
  {
    title: 'Restauration',
    categoryKey: 'restauration',
    icon: Utensils,
    items: [
      { label: 'Restauration', slug: 'restauration' },
            { label: 'Cafe - Glacier', slug: 'cafe-glacier' },
      { label: 'Boulangerie', slug: 'boulangerie' },
      { label: 'Loisir', slug: 'Loisir' },

      { label: 'Fast food', slug: 'fast-food' },
      { label: 'Pizzeria', slug: 'pizzeria' },
      { label: 'Burger', slug: 'burger' },
      { label: 'Bar à salad', slug: 'bar-a-salad' },
      { label: 'Bar-lounge', slug: 'bar-lounge' },
      { label: 'Night club', slug: 'night-club' },
    ],
  },
  {
    title: 'Retail',
    categoryKey: 'retail',
    icon: ShoppingBag,
    items: [
      { label: 'Textile et chaussure', slug: 'textile-chaussure' },
            { label: 'Métiers de bouche', slug: 'metiers-de-bouche' },
      { label: 'Supérette et alimentation', slug: 'superette-alimentation' },
      { label: 'Cigarette Électronique', slug: 'cigarette-electronique' },

      { label: 'Caviste', slug: 'caviste' },
      { label: 'Équipement du foyer', slug: 'equipement-foyer' },
      { label: 'Jardinerie, Bricolage et animalerie', slug: 'jardinerie-bricolage-animalerie' },
      { label: 'Sport et loisirs', slug: 'sport-loisirs' },
      { label: 'Gestion de production', slug: 'gestion-production' },
      { label: 'Franchises & multisites', slug: 'franchises-multisites' },
    ],
  },
  {
    title: 'Beauté & Bien-être',
    categoryKey: 'beaute-bien-etre',
    icon: Sparkles,
    items: [
      { label: 'Salon de coiffure', slug: 'salon-de-coiffure' },
      { label: 'SPA & Pilatesse', slug: 'spa' },
      { label: 'Centre de remise en forme', slug: 'centre-remise-en-forme' },
      { label: 'Centre de laser', slug: 'centre-de-laser' },
      { label: "Institut d'esthétique", slug: 'institut-esthetique' },
    ],
  },
  {
    title: 'PRESSING',
    categoryKey: 'pressing',
    icon: Shirt,
    items: [
      { label: 'Blanchisserie', slug: 'blanchisserie' },
      { label: 'Cordonnerie', slug: 'cordonnerie' },
      { label: 'Teinturier', slug: 'teinturier' },
      { label: 'Retoucherie', slug: 'retoucherie' },
    ],
  },
];

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!pendingHash || location.pathname !== '/') return;
    const hash = pendingHash;
    const timer = window.setTimeout(() => {
      const element = document.getElementById(decodeURIComponent(hash.replace(/^#/, '')));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setPendingHash('');
    }, 150);
    return () => window.clearTimeout(timer);
  }, [location.pathname, pendingHash]);

  const handleNavigation = useCallback(
    (href: string) => {
      setMobileOpen(false);
      setDropdownOpen(false);

      if (href.startsWith('/shop')) {
        navigate(href);
        return;
      }

      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) {
        setPendingHash('');
        navigate(href);
        return;
      }

      const hash = href.slice(hashIndex);
      if (location.pathname === '/') {
        const element = document.getElementById(decodeURIComponent(hash.replace(/^#/, '')));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          setPendingHash(hash);
        }
        return;
      }

      setPendingHash(hash);
      navigate('/');
    },
    [location.pathname, navigate]
  );

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMobileOpen(false);
    setDropdownOpen(false);
    setPendingHash('');

    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const linksWithDropdown = ['Commerce', 'Type de Commerce', 'Produit', 'Développement'];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-gray-200 bg-white shadow-sm' : 'border-b border-transparent bg-white'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-10">
            <Link to="/" onClick={handleLogoClick} aria-label="Accueil PC MAROC" className="flex items-center gap-2">
              <Logo />
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) => {
                if (link.label === 'Accueil' || link.label === 'Contact') return null;

                const isCommerce = link.label === 'Commerce' || link.label === 'Type de Commerce';
                const hasDropdown = linksWithDropdown.includes(link.label);
                const isAfterDeveloppement = link.label === 'Développement';

                if (isCommerce) {
                  return (
                    <div key={link.href} className="relative flex items-center gap-8" ref={dropdownRef}>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 transition-colors hover:text-[#f96302] focus:outline-none"
                      >
                        Type De Commerce
                        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* MEGA MENU DESKTOP */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute -left-20 top-full mt-3 w-[880px] rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-black/10"
                          >
                            <div className="grid grid-cols-4 gap-6">
                              {COMMERCE_CATEGORIES.map((cat) => {
                                const IconComp = cat.icon;
                                return (
                                  <div key={cat.title} className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2 border-b border-gray-100 pb-2.5 text-[#f96302]">
                                      <IconComp className="h-4 w-4" />
                                      <span className="text-xs font-bold uppercase tracking-wider text-gray-900">
                                        {cat.title}
                                      </span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      {cat.items.map((item) => (
                                        <a
                                          key={item.slug}
                                          href={`/shop?category=${cat.categoryKey}&type=${item.slug}`}
                                          onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigation(`/shop?category=${cat.categoryKey}&type=${item.slug}`);
                                          }}
                                          className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-600 transition-all hover:bg-orange-50 hover:text-[#f96302]"
                                        >
                                          {item.label}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <div key={link.href} className="flex items-center gap-8">
                    <a
                      href={link.href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleNavigation(link.href);
                      }}
                      className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 transition-colors hover:text-[#f96302]"
                    >
                      {link.label}
                      {hasDropdown && <ChevronDown className="h-4 w-4 text-gray-500" />}
                    </a>

                    {isAfterDeveloppement && <div className="h-5 w-[1px] bg-gray-300" />}
                  </div>
                );
              })}
            </nav>
          </div>

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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[85%] max-w-sm flex-col border-l border-gray-200 bg-white lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
                <Link to="/" onClick={handleLogoClick} aria-label="Accueil PC MAROC">
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

              <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-6">
                {NAV_LINKS.map((link) => {
                  const isCommerce = link.label === 'Commerce' || link.label === 'Type de Commerce';

                  if (isCommerce) {
                    return (
                      <div key={link.href} className="flex flex-col">
                        <button
                          onClick={() => setMobileCommerceOpen(!mobileCommerceOpen)}
                          className="flex items-center justify-between rounded-lg px-2 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 hover:text-[#f96302]"
                        >
                          Commerce
                          <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${mobileCommerceOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {mobileCommerceOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="flex flex-col pl-3 gap-2 overflow-hidden my-2"
                            >
                              {COMMERCE_CATEGORIES.map((cat) => {
                                const isCatOpen = activeMobileCategory === cat.title;
                                return (
                                  <div key={cat.title} className="flex flex-col border-l-2 border-orange-100 pl-3">
                                    <button
                                      onClick={() => setActiveMobileCategory(isCatOpen ? null : cat.title)}
                                      className="flex items-center justify-between py-1.5 text-sm font-semibold text-gray-800"
                                    >
                                      {cat.title}
                                      <ChevronDown className={`h-3.5 w-3.5 text-gray-400 transition-transform ${isCatOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isCatOpen && (
                                      <div className="flex flex-col gap-1.5 my-1 pl-2">
                                        {cat.items.map((item) => (
                                          <a
                                            key={item.slug}
                                            href={`/shop?category=${cat.categoryKey}&type=${item.slug}`}
                                            onClick={(event) => {
                                              event.preventDefault();
                                              handleNavigation(`/shop?category=${cat.categoryKey}&type=${item.slug}`);
                                            }}
                                            className="text-xs font-medium text-gray-600 hover:text-[#f96302]"
                                          >
                                            {item.label}
                                          </a>
                                        ))}
                                      </div>
                                    )}
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
                      className="flex items-center justify-between rounded-lg px-2 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 hover:text-[#f96302]"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

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
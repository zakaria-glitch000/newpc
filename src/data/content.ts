import restaurantImage from '@/assets/restaurant.jpg';
import retailmodernImage from '@/assets/retailmodern.jpg';
import hotelImage from '@/assets/hotellerie.jpg';
import restorapideImage from '@/assets/restorapide.jpg';
import commerceImage from '@/assets/commerce.jpg';
import chaineImage from '@/assets/chaine.jpg';

import {
  HeartHandshake,
  ChartNoAxesCombined,
  Monitor,
  ShoppingCart,
  Network,
  ShieldCheck,
  Server,
  Settings2,
  Wrench,
  Settings,
  GraduationCap,
  RefreshCw,
  Headphones,
  LifeBuoy,
  Store,
  UtensilsCrossed,
  Hotel,
  Truck,
  Briefcase,
  Building2,
  type LucideIcon,
  Instagram,
} from 'lucide-react';

/* =========================================================
   NAVIGATION
========================================================= */


export const NAV_LINKS = [
  { label: 'Accueil', href: '/#home' },
  { label: 'Solutions', href: '/#NosExpertises' },
  { label: 'Produit', href: '/#Produit' },
  { label: 'Métier', href: '/#Industries' },
  { label: 'Services', href: '/#services' },
  { label: 'A propos', href: '/#About' },
  { label: 'Contact', href: '/#contact' },
] as const;


/* =========================================================
   TRUST LOGOS
========================================================= */

export const TRUST_LOGOS = [
  'VARIPOS',
  'CSI',
  'INNOSHOP',
  'EASYBEL',
  'GESTICLEAN',
  'ZEBRA',
] as const;


/* =========================================================
   SOLUTIONS
========================================================= */

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  slug: string;
}

export const SOLUTIONS: Solution[] = [
  {
    icon: ShoppingCart,
    title: 'Systèmes de caisse & POS',
    slug: 'pos',
    description:
      'Des terminaux de point de vente modernes, rapides et fiables pour la restauration, le retail et les services.',
    features: [
      'Encaissement rapide',
      'Gestion des ventes',
      'Multi-terminal',
    ],
  },

  {
    icon: Monitor,
    title: 'Bornes de commande intelligentes',
    slug: 'bornes-commande',
    description:
      'Offrez à vos clients une expérience rapide et autonome grâce à des bornes connectées adaptées à votre activité.',
    features: [
      'Commande en autonomie',
      'Interface intuitive',
      'Gestion connectée',
    ],
  },

  {
    icon: Network,
    title: 'Gestion des stocks',
    slug: 'gestion-stocks',
    description:
      'Suivez vos inventaires en temps réel et anticipez vos besoins grâce à une gestion simple et efficace de vos stocks.',
    features: [
      'Suivi des inventaires',
      'Alertes de réapprovisionnement',
      'Gestion des mouvements',
    ],
  },

  {
    icon: HeartHandshake,
    title: 'Fidélité client',
    slug: 'fidelite-client',
    description:
      'Développez la fidélité de vos clients grâce à des programmes personnalisés et des actions marketing adaptées à votre activité.',
    features: [
      'Programme de fidélisation',
      'Suivi des clients',
      'Marketing personnalisé',
    ],
  },

  {
    icon: ChartNoAxesCombined,
    title: 'Analyse des ventes',
    slug: 'analyse-ventes',
    description:
      'Analysez vos ventes grâce à des rapports clairs et des tableaux de bord pour mieux comprendre votre activité et prendre les bonnes décisions.',
    features: [
      'Tableaux de bord',
      'Rapports de ventes',
      'Analyse des performances',
    ],
  },

  {
    icon: Settings2,
    title: 'Logiciels de gestion sur mesure',
    slug: 'kds',
    description:
      'Des solutions logicielles conçues pour répondre aux besoins spécifiques de votre entreprise et accompagner son évolution.',
    features: [
      'Analyse de vos besoins',
      'Développement personnalisé',
      'Intégration à votre environnement',
    ],
  },
];


/* =========================================================
   SOLUTION DETAILS
========================================================= */

export interface SolutionDetail {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;

  benefits: {
    title: string;
    description: string;
  }[];

  services: string[];
  sectors: string[];

  ctaTitle: string;
  ctaDescription: string;
}

export const SOLUTION_DETAILS: SolutionDetail[] = [

  /* -------------------------------------------------------
     01 — POS
  ------------------------------------------------------- */

  {
    slug: 'pos',

    badge: 'CAISSE & POINT DE VENTE',

    title: 'Systèmes de caisse & POS',

    subtitle:
      'Des solutions de point de vente rapides, fiables et adaptées à votre activité.',

    description:
      "Optimisez votre encaissement et simplifiez la gestion quotidienne de votre entreprise grâce à des solutions POS modernes, intuitives et évolutives.",

    benefits: [
      {
        title: 'Encaissement rapide',
        description:
          'Accélérez vos opérations de vente grâce à une interface simple et intuitive.',
      },
      {
        title: 'Gestion des ventes',
        description:
          'Suivez vos ventes, vos transactions et votre activité depuis une interface centralisée.',
      },
      {
        title: 'Gestion des produits',
        description:
          'Centralisez vos produits, tarifs, catégories et informations commerciales.',
      },
      {
        title: 'Gestion des stocks',
        description:
          'Gardez une visibilité sur vos stocks et anticipez vos besoins.',
      },
      {
        title: 'Multi-terminal',
        description:
          'Déployez plusieurs postes de caisse et centralisez votre activité.',
      },
      {
        title: 'Reporting',
        description:
          'Accédez à des indicateurs clairs pour mieux piloter votre activité.',
      },
    ],

    services: [
      'Installation des équipements',
      'Configuration du système',
      'Paramétrage du logiciel',
      'Formation des utilisateurs',
      'Maintenance',
      'Assistance technique',
    ],

    sectors: [
      'Retail',
      'Restaurants',
      'Cafés & Snacks',
      'Hôtellerie',
      'Services',
    ],

    ctaTitle: 'Modernisez votre point de vente',

    ctaDescription:
      'Parlons de votre activité et trouvons ensemble la solution POS adaptée à vos besoins.',
  },


  /* -------------------------------------------------------
     02 — LOGICIELS DE GESTION
  ------------------------------------------------------- */

  {
    slug: 'logiciels-gestion',

    badge: 'LOGICIELS DE GESTION',

    title: 'Logiciels de gestion',

    subtitle:
      'Centralisez votre activité et pilotez votre entreprise avec des outils adaptés à vos besoins.',

    description:
      "Nous proposons des solutions logicielles permettant de centraliser vos données, automatiser vos processus et améliorer votre visibilité sur votre activité.",

    benefits: [
      {
        title: 'Tableaux de bord',
        description:
          'Visualisez les informations importantes de votre activité depuis une interface claire.',
      },
      {
        title: 'Gestion des clients',
        description:
          'Centralisez les informations et l’historique de vos clients.',
      },
      {
        title: 'Gestion des stocks',
        description:
          'Suivez vos produits, mouvements et niveaux de stock.',
      },
      {
        title: 'Facturation',
        description:
          'Simplifiez vos opérations de facturation et votre suivi commercial.',
      },
      {
        title: 'Automatisation',
        description:
          'Réduisez les tâches répétitives grâce à des processus automatisés.',
      },
      {
        title: 'Intégrations',
        description:
          'Connectez vos outils et systèmes pour centraliser vos données.',
      },
    ],

    services: [
      'Analyse des besoins',
      'Conception de la solution',
      'Développement',
      'Intégration',
      'Formation',
      'Maintenance et évolution',
    ],

    sectors: [
      'PME',
      'Retail',
      'Services',
      'Distribution',
      'Logistique',
    ],

    ctaTitle: 'Un logiciel adapté à votre entreprise',

    ctaDescription:
      'Nous vous accompagnons dans la conception et le déploiement de votre solution de gestion.',
  },


  /* -------------------------------------------------------
     03 — RÉSEAU & INFRASTRUCTURE
  ------------------------------------------------------- */

  {
    slug: 'reseau-infrastructure',

    badge: 'RÉSEAU & INFRASTRUCTURE',

    title: 'Solutions réseau & infrastructure',

    subtitle:
      'Une infrastructure performante, sécurisée et pensée pour accompagner votre croissance.',

    description:
      "Nous concevons et déployons des infrastructures informatiques fiables pour assurer la connectivité, la performance et la disponibilité de vos systèmes.",

    benefits: [
      {
        title: 'Architecture réseau',
        description:
          'Conception d’architectures adaptées à votre environnement et à vos besoins.',
      },
      {
        title: 'WiFi professionnel',
        description:
          'Déploiement de réseaux WiFi performants et sécurisés.',
      },
      {
        title: 'Serveurs',
        description:
          'Installation et configuration de serveurs adaptés à votre activité.',
      },
      {
        title: 'Cloud',
        description:
          'Mise en place de solutions cloud adaptées à votre infrastructure.',
      },
      {
        title: 'VPN',
        description:
          'Sécurisation des accès distants à vos ressources.',
      },
      {
        title: 'Supervision',
        description:
          'Surveillance de votre infrastructure pour détecter rapidement les problèmes.',
      },
    ],

    services: [
      'Audit réseau',
      'Conception d’architecture',
      'Installation',
      'Configuration',
      'Sécurisation',
      'Maintenance',
    ],

    sectors: [
      'PME',
      'Hôtellerie',
      'Retail',
      'Restaurants',
      'Entreprises',
    ],

    ctaTitle: 'Construisons une infrastructure fiable',

    ctaDescription:
      'Échangeons sur votre infrastructure actuelle et vos besoins futurs.',
  },


  /* -------------------------------------------------------
     04 — SÉCURITÉ INFORMATIQUE
  ------------------------------------------------------- */

  {
    slug: 'securite-informatique',

    badge: 'CYBERSÉCURITÉ',

    title: 'Sécurité informatique',

    subtitle:
      'Protégez vos systèmes, vos données et votre activité.',

    description:
      "La sécurité informatique est essentielle pour garantir la continuité de votre activité. Nous mettons en place des solutions adaptées à votre environnement.",

    benefits: [
      {
        title: 'Firewall & VPN',
        description:
          'Sécurisez les communications et contrôlez les accès à votre réseau.',
      },
      {
        title: 'Sauvegarde',
        description:
          'Protégez vos données grâce à des stratégies de sauvegarde adaptées.',
      },
      {
        title: 'Contrôle des accès',
        description:
          'Maîtrisez les accès aux ressources et aux systèmes de votre entreprise.',
      },
      {
        title: 'Audit',
        description:
          'Identifiez les risques et les points faibles de votre infrastructure.',
      },
      {
        title: 'Surveillance',
        description:
          'Détectez rapidement les anomalies et les incidents.',
      },
      {
        title: 'Protection des données',
        description:
          'Mettez en place des mesures adaptées pour protéger vos informations.',
      },
    ],

    services: [
      'Audit de sécurité',
      'Configuration Firewall',
      'VPN',
      'Sauvegarde',
      'Contrôle des accès',
      'Maintenance',
    ],

    sectors: [
      'PME',
      'Retail',
      'Services',
      'Hôtellerie',
      'Industrie',
    ],

    ctaTitle: 'Renforcez votre sécurité',

    ctaDescription:
      'Identifions ensemble les risques et les solutions adaptées à votre entreprise.',
  },


  /* -------------------------------------------------------
     05 — MATÉRIEL INFORMATIQUE
  ------------------------------------------------------- */

  {
    slug: 'materiel-informatique',

    badge: 'MATÉRIEL INFORMATIQUE',

    title: 'Solutions matérielles',

    subtitle:
      'Du matériel professionnel sélectionné selon vos besoins.',

    description:
      "Nous vous accompagnons dans le choix, la fourniture, l'installation et la maintenance de votre matériel informatique professionnel.",

    benefits: [
      {
        title: 'Postes de travail',
        description:
          'Des ordinateurs professionnels adaptés aux besoins de vos équipes.',
      },
      {
        title: 'Serveurs & NAS',
        description:
          'Des solutions fiables pour vos données et applications.',
      },
      {
        title: 'Périphériques',
        description:
          'Imprimantes, scanners, écrans et accessoires professionnels.',
      },
      {
        title: 'Équipements POS',
        description:
          'Terminaux, imprimantes tickets et périphériques de caisse.',
      },
      {
        title: 'Installation',
        description:
          'Installation et configuration complète de vos équipements.',
      },
      {
        title: 'Maintenance',
        description:
          'Suivi et maintenance de votre parc informatique.',
      },
    ],

    services: [
      'Conseil',
      'Sélection du matériel',
      'Fourniture',
      'Installation',
      'Configuration',
      'Maintenance',
    ],

    sectors: [
      'PME',
      'Retail',
      'Restaurants',
      'Hôtellerie',
      'Services',
    ],

    ctaTitle: 'Équipez votre entreprise efficacement',

    ctaDescription:
      'Définissons ensemble le matériel adapté à vos besoins et à votre budget.',
  },


  /* -------------------------------------------------------
     06 — SUR MESURE
  ------------------------------------------------------- */

  {
    slug: 'sur-mesure',

    badge: 'SOLUTIONS SUR MESURE',

    title: 'Solutions personnalisées',

    subtitle:
      'Des solutions conçues autour de vos processus métier.',

    description:
      "Lorsque les solutions standards ne répondent pas complètement à vos besoins, nous concevons des outils personnalisés adaptés à votre organisation.",

    benefits: [
      {
        title: 'Développement spécifique',
        description:
          'Création de fonctionnalités adaptées précisément à vos besoins.',
      },
      {
        title: 'API & intégrations',
        description:
          'Connexion de vos différents outils et systèmes.',
      },
      {
        title: 'Automatisation',
        description:
          'Automatisation des tâches répétitives pour gagner du temps.',
      },
      {
        title: 'Interfaces personnalisées',
        description:
          'Des interfaces pensées pour vos utilisateurs et vos processus.',
      },
      {
        title: 'Évolutivité',
        description:
          'Une solution capable d’évoluer avec votre entreprise.',
      },
      {
        title: 'Accompagnement',
        description:
          'Un suivi continu après la mise en production.',
      },
    ],

    services: [
      'Analyse métier',
      'Conception',
      'Développement',
      'Intégration',
      'Tests',
      'Maintenance',
    ],

    sectors: [
      'PME',
      'Retail',
      'Logistique',
      'Services',
      'Industrie',
    ],

    ctaTitle: 'Vous avez un besoin spécifique ?',

    ctaDescription:
      'Décrivons ensemble votre projet et construisons une solution adaptée.',
  },
];


/* =========================================================
   SERVICES
========================================================= */

export interface Service {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: Wrench,
    step: '01',
    title: 'Installation',
    description:
      'Déploiement professionnel de vos équipements et systèmes sur site, avec configuration complète et tests.',
  },

  {
    icon: Settings,
    step: '02',
    title: 'Configuration',
    description:
      'Paramétrage fin de vos logiciels et matériels selon vos process métier, pour une mise en service immédiate.',
  },

  {
    icon: GraduationCap,
    step: '03',
    title: 'Formation',
    description:
      'Sessions de formation pratiques pour vos équipes, afin de maîtriser pleinement vos nouveaux outils.',
  },

  {
    icon: RefreshCw,
    step: '04',
    title: 'Maintenance',
    description:
      'Contrats de maintenance préventive et corrective pour assurer la continuité de votre activité.',
  },

  {
    icon: Headphones,
    step: '05',
    title: 'Assistance technique',
    description:
      'Support technique disponible à distance et sur site, avec intervention rapide et diagnostics précis.',
  },

  {
    icon: LifeBuoy,
    step: '06',
    title: 'SAV',
    description:
      'Service après-vente complet : garantie, remplacement de pièces et suivi qualité pour vos équipements.',
  },
];


/* =========================================================
   STATISTIQUES
========================================================= */

export const STATS = [
  {
    value: '10+',
    label: "Années d'expérience",
  },

  {
    value: '500+',
    label: 'Entreprises accompagnées',
  },

  {
    value: '24/7',
    label: 'Support disponible',
  },

  {
    value: '99%',
    label: 'Taux de satisfaction',
  },
] as const;
/* =========================================================
   INDUSTRIES
========================================================= */

export interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    icon: UtensilsCrossed,
    title: 'Restauration Traditionnelle',
    description:
      'Solutions complètes pour les restaurants avec service à table, gestion des réservations et suivi des commandes.',
    image: restaurantImage,
    features: [
      'Gestion des tables',
      'Prise de commande mobile',
      'Système KDS cuisine',
      'Gestion des réservations',
    ],
  },

  {
    icon: ShoppingCart,
    title: 'Restauration rapide et Food truck',
    description:
      'Systèmes adaptés au service rapide, avec prise de commande optimisée et gestion des files d’attente.',
    image: restorapideImage,
    features: [
      'Encaissement rapide',
      'Bornes de commande',
      'Gestion des files d’attente',
      'Mode hors-ligne',
    ],
  },
  {
    icon: Hotel,
    title: 'Hôtellerie',
    description:
      'Gestion complète pour les établissements hôteliers intégrant réservations, facturation et services.',
    image: hotelImage,
    features: [
      'Ventes additionnelles',
      'Espace de vente 24/7',
      'Vente RFID',
      'Personnalisation de l’offre',
    ],
  },
  {
    icon: Store,
    title: 'Commerce de détail et épiceries',
    description:
      'Solutions pour boutiques et commerces avec gestion des stocks, fidélisation client et analyse des ventes.',
    image: commerceImage,
    features: [
      'Gestion des stocks',
      'Programme de fidélité',
      'Promotions et réductions',
      'Analyse des ventes',
    ],
  },

  {
    icon: Briefcase,
    title: 'Retail Moderne',
    description:
      'Solutions technologiques avancées pour le retail omnicanal avec reporting analytique en temps réel.',
    image: retailmodernImage,
    features: [
      'Hub omnicanal',
      'Analytics temps réel',
      'Checkout ultra-rapide',
      'Personnalisation client',
    ],
  },

  {
    icon: Building2,
    title: 'Chaînes et Franchise',
    description:
      'Solutions pour gérer efficacement plusieurs points de vente avec centralisation des données.',
    image: chaineImage,
    features: [
      'Gestion multi-sites',
      'Centralisation des données',
      'Reporting consolidé',
      'Standardisation des processus',
    ],
  },


];

/* =========================================================
   PROCESS
========================================================= */

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Analyse',
    description:
      'Audit de vos besoins, infrastructure existante et objectifs pour cerner précisément le contexte.',
  },

  {
    step: '02',
    title: 'Conseil',
    description:
      'Recommandations stratégiques et choix de solutions adaptés à votre activité et votre budget.',
  },

  {
    step: '03',
    title: 'Installation',
    description:
      'Déploiement, configuration et intégration de vos solutions par nos techniciens certifiés.',
  },

  {
    step: '04',
    title: 'Accompagnement',
    description:
      'Formation, support continu et maintenance pour garantir la performance durable de vos systèmes.',
  },
];


/* =========================================================
   PROJECTS
========================================================= */

export interface Project {
  category: string;
  title: string;
  description: string;
  solution: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    category: 'Retail · POS',

    title:
      'Déploiement multi-site pour une chaîne de magasins',

    description:
      "Installation de 40 terminaux de caisse et d'un système de gestion centralisé pour une enseigne nationale.",

    solution:
      'Système POS + Logiciel de gestion',

    image:
      'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },

  {
    category: 'Infrastructure · Réseau',

    title:
      "Modernisation réseau d'un groupe hôtelier",

    description:
      "Refonte complète de l'infrastructure réseau et wifi pour un groupe de 8 hôtels avec gestion centralisée.",

    solution:
      'Réseau pro + Wifi + Sécurité',

    image:
      'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },

  {
    category: 'Logiciel · Sur-mesure',

    title:
      'Plateforme de gestion pour distributeur logistique',

    description:
      "Développement d'une solution personnalisée de gestion d'entrepôt et de traçabilité des expéditions.",

    solution:
      'Logiciel sur-mesure + API',

    image:
      'https://images.pexels.com/photos/4451252/pexels-photo-4451252.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];


/* =========================================================
   TESTIMONIALS
========================================================= */

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Karim Benali',
    role: 'Directeur',
    company: 'Atlas Retail Group',
    quote:
      "PC MAROC a déployé nos 40 caisses en moins de deux semaines, sans interruption de l'activité. Un partenaire fiable et réactif.",
  },

  {
    name: 'Sophie Marchand',
    role: 'Gérante',
    company: 'Hôtel Meridian',
    quote:
      "L'équipe a su comprendre nos contraintes et nous proposer une solution réseau parfaitement adaptée. Support irréprochable.",
  },

  {
    name: 'Thomas Lefèvre',
    role: 'Responsable logistique',
    company: 'DistriFlow',
    quote:
      "Le logiciel sur-mesure développé par PC MAROC  a transformé notre gestion d'entrepôt. Gains de temps considérables.",
  },
];


/* =========================================================
   FEATURE LIST
========================================================= */

export const FEATURE_LIST = [
  'Gestion des ventes',
  'Gestion des stocks',
  'Reporting',
  'Clients',
  'Produits',
  'Multi-utilisateurs',
  'Sécurité',
];


/* =========================================================
   COMPANY
========================================================= */

export const COMPANY = {
  name: 'PC MAROC ',

  tagline: 'ARTIS Consulting',

  address: '48 RUE JULES FERRY 92250 LA GARENNE-COLOMBES',

  phone: '+33 6 30 21 87 57',

  email: 'sjalal@artisconsulting.fr',

  hours: 'Lun – Sam : 9h00 – 18h00',

  social: {
    linkedin: '#',
    instagram: 'https://www.instagram.com/oralisystems?vrfl=MTRoa202bzd0eG5peA==',
    facebook: '#',
  },
} as const;
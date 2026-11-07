import { useId } from 'react';
import { motion, type Variants } from 'framer-motion';

import {
  Handshake,
  Settings,
  GraduationCap,
  Headset,
  Code,
  type LucideIcon,
} from 'lucide-react';

import teamTrainingImage from '@/assets/acco.jpeg';

// ==========================================
// COLORS
// ==========================================

const NAVY = '#0B1F4B';

const ORANGE_GRADIENT =
  'linear-gradient(90deg, #F59E0B 0%, #EA580C 50%, #C2410C 100%)';

// ==========================================
// TYPES
// ==========================================

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  wrapper: string;
  height: string;
};

// ==========================================
// SERVICES
// ==========================================

const services: Service[] = [
  {
    title: 'Conseil & Accompagnement',
    description:
      'Analyse de vos besoins et solution adaptée à votre activité.',
    icon: Handshake,
    wrapper: 'xl:col-span-2',
    height: 'min-h-[200px]',
  },
  {
    title: 'Installation & Déploiement',
    description:
      'Mise en service, configuration et paramétrage de vos solutions.',
    icon: Settings,
    wrapper: 'xl:col-span-2',
    height: 'min-h-[200px]',
  },
  {
    title: 'Formation des Équipes',
    description:
      'Une prise en main simple et efficace pour vos collaborateurs.',
    icon: GraduationCap,
    wrapper: 'xl:col-span-2',
    height: 'min-h-[200px]',
  },
  {
    title: 'Support & Maintenance',
    description:
      'Une assistance réactive et un suivi continu pour la disponibilité de vos solutions.',
    icon: Headset,
    wrapper:
      'sm:col-span-2 xl:col-span-3 xl:col-start-1 xl:row-start-2',
    height: 'min-h-[200px]',
  },
  {
    title: 'Développement sur Mesure',
    description:
      'Des applications métier personnalisées selon vos besoins spécifiques.',
    icon: Code,
    wrapper:
      'sm:col-span-2 xl:col-span-3 xl:col-start-4 xl:row-start-2',
    height: 'min-h-[200px]',
  },
];

// ==========================================
// ANIMATIONS
// ==========================================

const container: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// COMPONENT
// ==========================================

export function Services() {
  const id = useId().replace(/:/g, '');

  const photoClipId = `photo-clip-${id}`;
  const curveGradientId = `curve-gradient-${id}`;
  const waveGradientId = `wave-gradient-${id}`;

  return (
    <section
      id="services"
      className="
        relative isolate
        min-h-[800px]
        overflow-hidden
        bg-[#FCFCFD]
        pt-5
        pb-28
      "
    >

      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,#F5F8FC_0%,#FFFFFF_75%)]
        "
      />

      <div className="relative mx-auto max-w-[1600px] px-4 lg:px-6">

        {/* Kabbarna l'emplacement dial l'image b 40% f l-grid au lieu dyal 34% */}
        <div className="grid items-center gap-8 xl:grid-cols-[40%_1fr] xl:gap-7">

          {/* =====================================
              LEFT SIDE : LOGO + CURVED IMAGE
          ===================================== */}

          <div className="relative flex flex-col items-center justify-center">

            {/* CURVED PHOTO */}

            <div className="relative -mt-1 xl:-ml-4 w-full flex justify-center">

              <svg
                viewBox="0 0 520 680"
                className="
                  mx-auto block
                  h-auto w-full
                  max-w-[560px]
                  xl:max-w-none
                "
                role="img"
                aria-label="L'équipe en accompagnement client"
              >

                <defs>

                  {/* PHOTO CLIPPING */}

                  <clipPath id={photoClipId}>
                    <path
                      d="
                        M0,10
                        C110,10 240,20 340,70
                        C440,120 495,190 505,310
                        C515,430 495,550 475,630
                        C465,660 430,670 410,670
                        L0,670
                        Z
                      "
                    />
                  </clipPath>

                  {/* ORANGE BORDER GRADIENT */}

                  <linearGradient
                    id={curveGradientId}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="55%" stopColor="#EA580C" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>

                </defs>

                {/* TEAM IMAGE */}

                <image
                  href={teamTrainingImage}
                  x="-10"
                  y="0"
                  width="540"
                  height="680"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#${photoClipId})`}
                />

                {/* ORANGE CURVE */}

                <path
                  d="
                    M0,10
                    C110,10 240,20 340,70
                    C440,120 495,190 505,310
                    C515,430 495,550 475,630
                    C465,660 430,670 410,670
                  "
                  fill="none"
                  stroke={`url(#${curveGradientId})`}
                  strokeWidth="8"
                  strokeLinecap="round"
                />

              </svg>

            </div>

          </div>

          {/* =====================================
              RIGHT SIDE : TITLE + SERVICES
          ===================================== */}

          <div className="relative pt-2 xl:pt-0">

            {/* VERTICAL ORANGE SEPARATOR */}

            <span
              className="
                absolute
                -left-4
                top-4
                hidden xl:block
                h-[90px]
                w-[3px]
                rounded-full
                bg-orange-500
              "
            />

            {/* =====================================
                HEADER
            ===================================== */}

            <div className="mb-9 text-center">

              <div
                className="
                  flex items-center
                  justify-center
                  gap-3 sm:gap-5
                "
              >

                {/* LEFT LINE */}

                <span
                  className="
                    hidden sm:block
                    h-[3px]
                    w-12 lg:w-20
                    rounded-full
                    shrink-0
                  "
                  style={{ background: ORANGE_GRADIENT }}
                />

                {/* TITLE - Saghrnah chwiya */}

                <h2
                  className="
                    whitespace-nowrap
                    text-2xl sm:text-3xl
                    lg:text-4xl
                    xl:text-5xl
                    font-extrabold
                    leading-tight
                    tracking-tight
                  "
                  style={{ color: NAVY }}
                >
                  Nos{' '}

                  <span
                    style={{
                      backgroundImage: ORANGE_GRADIENT,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    Services
                  </span>

                </h2>

                {/* RIGHT LINE */}

                <span
                  className="
                    hidden sm:block
                    h-[3px]
                    w-12 lg:w-20
                    rounded-full
                    shrink-0
                  "
                  style={{ background: ORANGE_GRADIENT }}
                />

              </div>

              {/* SUBTITLE - Saghrnah chwiya */}

              <p
                className="
                  mt-2
                  text-sm sm:text-base
                  lg:text-lg
                  font-bold
                  leading-snug
                  whitespace-normal
                "
                style={{ color: NAVY }}
              >
                Un accompagnement complet à chaque étape de votre projet
              </p>

            </div>

            {/* =====================================
                SERVICES CARDS
                3 TOP + 2 BOTTOM
            ===================================== */}

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-60px',
              }}
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-6
                gap-4
                xl:gap-3
                items-stretch
              "
            >

              {services.map((service) => {

                const Icon = service.icon;

                return (

                  <motion.div
                    key={service.title}
                    variants={item}
                    className={service.wrapper}
                  >

                    <article
                      className={`
                        group
                        relative
                        flex
                        ${service.height}
                        h-full
                        flex-col
                        items-center
                        justify-start
                        rounded-[24px]
                        border border-slate-200/80
                        bg-white/90
                        px-4 sm:px-5
                        py-5
                        text-center
                        shadow-[0_8px_25px_-12px_rgba(11,31,75,0.16)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-orange-200
                        hover:shadow-[0_18px_35px_-12px_rgba(234,88,12,0.22)]
                      `}
                    >

                      {/* ICON CIRCLE - Saghrnahom chwiya bach yjiw aniiqin */}

                      <div
                        className="
                          relative
                          flex
                          h-[52px]
                          w-[52px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#F4F7FB]
                          shadow-inner
                          transition-all duration-300
                          group-hover:bg-orange-50
                        "
                      >

                        <Icon
                          className="
                            h-[28px]
                            w-[28px]
                            transition-transform duration-300
                            group-hover:scale-110
                          "
                          style={{ color: NAVY }}
                          strokeWidth={1.8}
                        />

                        {/* ORANGE ICON ACCENT */}

                        <span
                          className="
                            absolute
                            right-[6px]
                            bottom-[6px]
                            h-[6px]
                            w-[6px]
                            rounded-full
                            bg-orange-500
                            ring-2
                            ring-white
                          "
                        />

                      </div>

                      {/* SERVICE TITLE - Saghrnah chwiya */}

                      <h3
                        className="
                          mt-3
                          max-w-full
                          text-base
                          sm:text-lg
                          font-extrabold
                          leading-snug
                          tracking-tight
                        "
                        style={{ color: NAVY }}
                      >
                        {service.title}
                      </h3>

                      {/* DESCRIPTION - Saghrnah chwiya */}

                      <p
                        className="
                          mx-auto
                          mt-1.5
                          max-w-[300px]
                          flex-1
                          text-xs
                          sm:text-sm
                          leading-relaxed
                          font-medium
                          text-slate-600
                        "
                      >
                        {service.description}
                      </p>

                      {/* ORANGE BOTTOM LINE */}

                      <div
                        className="
                          mt-3
                          h-[3px]
                          w-10
                          shrink-0
                          rounded-full
                          transition-all duration-300
                          group-hover:w-16
                        "
                        style={{ background: ORANGE_GRADIENT }}
                      />

                    </article>

                  </motion.div>

                );
              })}

            </motion.div>

          </div>

        </div>
      </div>

      {/* =====================================
          BOTTOM DECORATIVE WAVES
      ===================================== */}

      <svg
        className="
          pointer-events-none
          absolute bottom-0 left-0
          z-20
          h-20 sm:h-24 lg:h-28
          w-full
        "
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden="true"
      >

        <defs>

          <linearGradient
            id={waveGradientId}
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="55%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

        </defs>



      </svg>

    </section>
  );
}
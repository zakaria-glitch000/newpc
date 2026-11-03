interface LogoProps {
  className?: string;
  showText?: boolean;
}

/**
 * Logo PC MAROC – Hospitality & Retail
 *  - voile (bleu dégradé + navy) à gauche
 *  - "PC MAROC" juste à droite du voile
 *  - double vague dorée sous "PC", qui déborde jusqu'au sous-titre
 *  - "Hospitality & Retail" doré, aligné sous "MAROC"
 */
export function Logo({ className = '', showText = true }: LogoProps) {
  const NAVY = '#0B1D4A';
  const GOLD = '#DBAA19';

  return (
    <div
      className={`inline-flex items-center select-none text-[26px] md:text-[34px] ${className}`}
      style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
    >
      <svg
        viewBox={showText ? '0 0 975 290' : '0 0 365 290'}
        style={{ height: '2em', width: 'auto' }}
        className="shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="PC MAROC Hospitality & Retail"
      >
        <defs>
          <linearGradient id="pcSailLight" gradientUnits="userSpaceOnUse" x1="100" y1="4" x2="64" y2="125">
            <stop offset="0%" stopColor="#1B3A82" />
            <stop offset="50%" stopColor="#3B74C0" />
            <stop offset="100%" stopColor="#6BB3E6" />
          </linearGradient>
        </defs>

        {/* ICÔNE */}
        <g transform="translate(-79 4.2) scale(1.4)">
          {/* Voile gauche (dégradé bleu) */}
          <path
            d="M100 2 C90 30 74 85 60 120 L84 130 C100 108 112 70 110 38 C109 22 105 10 100 2 Z"
            fill="url(#pcSailLight)"
          />

          {/* Voile droite (navy) */}
          <path
            d="M117 6 C136 14 150 40 146 70 C142 98 114 122 88 134 L86 128 C108 108 124 84 127 58 C129 36 124 18 117 6 Z"
            fill={NAVY}
          />

          {/* Vague dorée haute */}
          <path
            d="M62 126 C110 138 170 112 225 112 C265 112 295 140 306 168 C280 150 250 140 215 140 C160 142 100 162 66 148 Z"
            fill={GOLD}
          />

          {/* Vague dorée basse */}
          <path
            d="M72 156 C100 170 160 150 215 147 C250 147 282 160 312 198 C285 176 250 170 212 176 C150 186 95 198 80 172 C74 164 72 160 72 156 Z"
            fill={GOLD}
          />
        </g>

        {showText && (
          <>
            {/* PC MAROC */}
            <text
              x="180"
              y="160"
              fill={NAVY}
              fontSize="165"
              fontWeight="800"
              textLength="770"
              lengthAdjust="spacingAndGlyphs"
              style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
            >
              PC MAROC
            </text>

            {/* Hospitality & Retail */}
            <text
              x="375"
              y="247"
              fill={GOLD}
              fontSize="62"
              fontWeight="500"
              textLength="590"
              lengthAdjust="spacingAndGlyphs"
              style={{ fontFamily: "'Quicksand', 'Poppins', 'Montserrat', sans-serif" }}
            >
              Hospitality &amp; Retail
            </text>
          </>
        )}
      </svg>
    </div>
  );
}
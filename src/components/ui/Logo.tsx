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
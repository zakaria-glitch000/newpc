interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

/**
 * Logo PC MAROC – Hospitality & Retail
 */
export function Logo({ className = '', showSubtitle = true }: LogoProps) {
  const BLEU_PRESQUE_NOIR = '#06101E'; // Bleu marine ultra-foncé (effet noir élégant)
  const ORANGE = '#FF6B00';

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
    >
      <svg
        viewBox={showSubtitle ? '0 0 1000 280' : '0 0 1000 150'}
        style={{ height: '3em', width: 'auto' }}
        className="shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="PC MAROC Hospitality & Retail"
      >
        {/* PC MAROC (Grand format, centré, bleu nuit/noir) */}
        <text
          x="500"
          y="125"
          fill={BLEU_PRESQUE_NOIR}
          fontSize="155"
          fontWeight="900"
          textAnchor="middle"
          letterSpacing="0.5"
          style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
        >
          PC MAROC
        </text>

        {showSubtitle && (
          /* Hospitality & Retail */
          <text
            x="500"
            y="225"
            fill={ORANGE}
            fontSize="65"
            fontWeight="500"
            textAnchor="middle"
            letterSpacing="0.5"
            style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif" }}
          >
            Hospitality &amp; Retail
          </text>
        )}
      </svg>
    </div>
  );
}
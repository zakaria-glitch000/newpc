interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

/**
 * Logo PC MAROC – Hospitality & Retail
 */
export function Logo({ className = '', showSubtitle = false }: LogoProps) {
  const BLEU_MARINE = '#132D4B';
  const ORANGE = '#F57C1F';

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
    >
      <svg
        viewBox={showSubtitle ? '0 0 1120 295' : '0 0 1120 185'}
        style={{ height: '3.2em', width: 'auto' }}
        className="shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="PC MAROC Hospitality & Retail"
      >
        {/* Monogramme PC exact avec séparation (gap) */}
        <g transform="translate(10, 8)">
          {/* 1. Barre supérieure inclinée à gauche (Orange) */}
          <path
            d="M 48 0 H 146 C 118 14 96 30 82 46 H 0 Z"
            fill={ORANGE}
          />

          {/* 2. Arc supérieur du C (Bleu Marine) */}
          <path
            d="M 184 0 H 336 L 288 46 H 184 C 132 46 98 68 88 92 L 54 82 C 70 34 118 0 184 0 Z"
            fill={BLEU_MARINE}
          />

          {/* 3. Corps principal du P : barre horizontale, courbe vers le haut/droite et jambe verticale (Orange) */}
          <path
            d="M 0 88 H 124 C 148 88 160 76 164 56 H 214 C 212 96 180 120 132 120 H 46 V 170 H 0 V 88 Z"
            fill={ORANGE}
          />

          {/* 4. Arc inférieur du C (Bleu Marine) */}
          <path
            d="M 86 128 L 122 122 C 134 130 148 134 164 134 H 312 L 266 170 H 164 C 122 170 100 154 86 128 Z"
            fill={BLEU_MARINE}
          />
        </g>

        {/* Texte MAROC (Bleu Marine, gras, géométrique) */}
        <text
          x="332"
          y="156"
          fill={BLEU_MARINE}
          fontSize="158"
          fontWeight="800"
          textAnchor="start"
          letterSpacing="12"
          transform="skewX(-7) translate(11, 0)"
          style={{ fontFamily: "'Montserrat', 'Poppins', sans-serif" }}
        >
          MAROC
        </text>

        {showSubtitle && (
          <text
            x="560"
            y="250"
            fill={ORANGE}
            fontSize="60"
            fontWeight="500"
            textAnchor="middle"
            letterSpacing="1"
            style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif" }}
          >
            Hospitality &amp; Retail
          </text>
        )}
      </svg>
    </div>
  );
}
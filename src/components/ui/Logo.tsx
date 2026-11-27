interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

const BLEU_MARINE = '#132D4B';
const ORANGE = '#F57C1F';

/** Monogramme PC seul (viewBox 818 x 447, tracé d'après l'image) */
function MonogramPaths() {
  return (
    <>
      {/* Barre orange supérieure gauche */}
      <path d="M85 2 H388 C330 18 280 55 243 116 H0 Z" fill={ORANGE} />

      {/* Arc bleu supérieur du C */}
      <path
        d="M440 0 H818 L735 116 H500 C440 116 395 150 378 202 H238 C250 90 330 15 440 0 Z"
        fill={BLEU_MARINE}
      />

      {/* Corps orange du P */}
      <path
        d="M0 215 H385 C430 215 452 195 452 170 C452 160 450 153 447 147 C460 138 480 133 520 133 H588 C596 250 520 330 400 330 H137 V445 H0 Z"
        fill={ORANGE}
      />

      {/* Arc bleu inférieur du C */}
      <path
        d="M283 348 C340 352 420 350 488 330 H818 L735 447 H400 C350 447 310 400 283 348 Z"
        fill={BLEU_MARINE}
      />
    </>
  );
}

/** Monogramme PC seul */
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 818 447"
      style={{ height: '2.3em', width: 'auto' }}
      className={`shrink-0 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="PC"
    >
      <MonogramPaths />
    </svg>
  );
}

/**
 * Logo PC MAROC – tracé vectoriel fidèle aux images (aucune dépendance à une police)
 */
export function Logo({ className = '', showSubtitle = false }: LogoProps) {
  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox={showSubtitle ? '0 0 1609 290' : '0 0 1609 213'}
        style={{ height: '2.3em', width: 'auto' }}
        className="shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="PC MAROC"
      >
        {/* Monogramme mis à l'échelle (hauteur 213) */}
        <g transform="scale(0.4765)">
          <MonogramPaths />
        </g>

        {/* Texte MAROC (tracé) */}
        <g fill={BLEU_MARINE} transform="translate(55, 0)">
          {/* M */}
          <path d="M377 209 L417 24 Q422 5 441 5 Q455 5 464 20 L511 116 L558 20 Q567 5 581 5 Q600 5 604 24 L644 209 H599 L577 84 L531 173 Q522 210 511 210 Q500 210 491 173 L443 84 L421 209 Z" />

          {/* A */}
          <path d="M650 209 L748 22 Q760 5 772 5 Q785 5 795 22 L889 209 H835 L812 170 H748 L766 108 H794 L768 66 L702 209 Z" />

          {/* R */}
          <path d="M906 5 H1035 C1080 5 1102 33 1102 70 C1102 100 1088 117 1067 127 L1120 209 H1057 L1015 162 H972 V97 H1045 Q1058 97 1058 76 Q1058 50 1038 50 H950 V209 H906 Z" />

          {/* O */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1215 5 H1263 C1330 5 1366 45 1366 107 C1366 169 1330 209 1263 209 H1215 C1148 209 1128 169 1128 107 C1128 45 1148 5 1215 5 Z M1215 50 C1186 50 1171 74 1171 107 C1171 140 1186 164 1215 164 H1263 C1292 164 1307 140 1307 107 C1307 74 1292 50 1263 50 Z"
          />

          {/* C */}
          <path d="M1554 5 V50 H1455 C1430 50 1411 70 1411 107 C1411 144 1430 164 1455 164 H1554 V209 H1444 C1394 209 1368 160 1368 107 C1368 54 1394 5 1444 5 Z" />
        </g>

        {showSubtitle && (
          <text
            x="804"
            y="270"
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
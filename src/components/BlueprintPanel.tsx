import styles from "./BlueprintPanel.module.css";

const ROWS = [60, 210, 360];

/**
 * A custom drawn PV-array elevation, in the language of an engineering
 * drawing rather than an illustration. Decorative: the meaning it carries is
 * repeated in the visible caption beside it.
 */
export function BlueprintPanel() {
  return (
    <svg
      className={styles.panel}
      viewBox="0 0 520 340"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="bp-grid" width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M26 0H0v26" fill="none" stroke="rgba(232,238,244,0.08)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="520" height="340" fill="#0b2438" />
      <rect width="520" height="340" fill="url(#bp-grid)" />

      {/* Sun and irradiance rays */}
      <g stroke="#dba411" strokeWidth="1.4" fill="none" opacity="0.9">
        <circle cx="452" cy="58" r="15" />
        <path d="M452 30v-9M452 95v9M424 58h-9M480 58h9M432 38l-6-6M472 78l6 6M472 38l6-6M432 78l-6 6" />
      </g>
      <g stroke="#dba411" strokeWidth="1" opacity="0.4">
        <path d="M420 84 330 148M446 92 356 156M472 100 382 164" />
      </g>

      {/* Module rows in elevation, with mounting structure */}
      <g fill="none" strokeLinejoin="round">
        {ROWS.map((x) => (
          <g key={x}>
            <path
              d={`M${x} 200 L${x + 110} 150 L${x + 110} 161 L${x} 211 Z`}
              fill="rgba(27,106,33,0.16)"
              stroke="#e8eef4"
              strokeWidth="1.6"
            />
            <path
              d={`M${x + 27} 194 L${x + 27} 178M${x + 55} 181 L${x + 55} 165M${x + 83} 168 L${x + 83} 152`}
              stroke="rgba(232,238,244,0.4)"
              strokeWidth="1"
            />
            <path
              d={`M${x + 10} 206 V250M${x + 100} 156 V250M${x + 10} 246 L${x + 100} 164`}
              stroke="rgba(232,238,244,0.62)"
              strokeWidth="1.3"
            />
          </g>
        ))}
      </g>

      {/* Ground line */}
      <path d="M24 250h472" stroke="#22812a" strokeWidth="2" />
      <g stroke="rgba(232,238,244,0.28)" strokeWidth="1">
        <path d="M30 250l-8 9M54 250l-8 9M78 250l-8 9M102 250l-8 9M126 250l-8 9M150 250l-8 9M174 250l-8 9M198 250l-8 9M222 250l-8 9M246 250l-8 9M270 250l-8 9M294 250l-8 9M318 250l-8 9M342 250l-8 9M366 250l-8 9M390 250l-8 9M414 250l-8 9M438 250l-8 9M462 250l-8 9M486 250l-8 9" />
      </g>

      {/* Dimension lines */}
      <g stroke="rgba(232,238,244,0.55)" strokeWidth="1" fill="none">
        <path d="M60 288h410M60 281v14M470 281v14" />
        <path d="M66 284l-6 4 6 4M464 284l6 4-6 4" />
        <path d="M40 150v100M33 150h14M33 250h14" />
      </g>

      <g
        fill="rgba(232,238,244,0.62)"
        fontSize="10"
        letterSpacing="1.6"
        fontFamily="var(--font-body), system-ui, sans-serif"
      >
        <text x="24" y="36">
          PV ARRAY — ELEVATION
        </text>
        <text x="60" y="312">
          MOUNTING STRUCTURE
        </text>
      </g>
    </svg>
  );
}

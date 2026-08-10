import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import styles from "./Section.module.css";

type SectionProps = {
  id: string;
  label: string;
  heading: string;
  lead?: string;
  /** Surface treatment. */
  tone?: "light" | "tint" | "dark";
  /** Centres the section header and constrains its width. */
  align?: "left" | "center";
  /** Adds a faint technical grid behind the section. */
  pattern?: boolean;
  headingId?: string;
  children: ReactNode;
};

export function Section({
  id,
  label,
  heading,
  lead,
  tone = "light",
  align = "left",
  pattern = false,
  headingId,
  children,
}: SectionProps) {
  const titleId = headingId ?? `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`${styles.section} ${styles[tone]}`}
      data-tone={tone}
    >
      {pattern && (
        <div
          className={`gridPattern ${tone === "dark" ? "gridPatternDark" : ""}`}
          aria-hidden="true"
        />
      )}
      <div className={`container ${styles.inner}`}>
        <Reveal className={`${styles.head} ${align === "center" ? styles.headCenter : ""}`}>
          <p className={styles.label}>
            <span className={styles.labelRule} aria-hidden="true" />
            {label}
          </p>
          <h2 id={titleId} className={styles.heading}>
            {heading}
          </h2>
          {lead && <p className={styles.lead}>{lead}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

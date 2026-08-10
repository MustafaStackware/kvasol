import Image from "next/image";
import { cta, hero } from "@/content/site";
import { Icon } from "./Icon";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className="gridPattern" aria-hidden="true" />
      <div className={styles.wash} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            {hero.eyebrow.map((word, index) => (
              <span key={word}>
                {index > 0 && <span className={styles.dot} aria-hidden="true" />}
                {word}
              </span>
            ))}
          </p>

          <h1 id="hero-heading" className={styles.heading}>
            {hero.heading}
          </h1>

          <p className={styles.lead}>{hero.lead}</p>

          <div className={styles.actions}>
            <a href={cta.primary.href} className="btn btnPrimary">
              {cta.primary.label}
              <Icon name="arrow-right" size={18} />
            </a>
            <a href={cta.secondary.href} className="btn btnSecondary">
              {cta.secondary.label}
            </a>
          </div>

          <p className={styles.credibility}>
            <Icon name="badge" size={20} className={styles.credibilityIcon} />
            <span>{hero.credibility}</span>
          </p>
        </div>

        <div className={styles.visual}>
          <div className={styles.frame}>
            <Image
              src="/images/hero-infrastructure.webp"
              alt={hero.imageAlt}
              width={1256}
              height={1164}
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 46vw"
              priority
            />
            <span className={styles.tick} data-corner="tl" aria-hidden="true" />
            <span className={styles.tick} data-corner="br" aria-hidden="true" />
          </div>
          <p className={styles.caption}>{hero.imageCaption}</p>
        </div>
      </div>
    </section>
  );
}

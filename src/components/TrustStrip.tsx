import { trustPoints } from "@/content/site";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import styles from "./TrustStrip.module.css";

export function TrustStrip() {
  return (
    <section className={styles.strip} aria-label="KVASol at a glance">
      <div className="gridPattern gridPatternDark" aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <ul className={styles.list}>
          {trustPoints.map((point, index) => (
            <Reveal as="li" key={point.label} className={styles.item} delay={index * 70}>
              <Icon name={point.icon} size={26} className={styles.icon} />
              <p className={styles.stat}>{point.stat}</p>
              <p className={styles.label}>{point.label}</p>
              <p className={styles.detail}>{point.detail}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

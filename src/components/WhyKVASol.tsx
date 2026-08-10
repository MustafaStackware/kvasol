import { whyKvasol } from "@/content/site";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import styles from "./WhyKVASol.module.css";

export function WhyKVASol() {
  return (
    <Section id="why" label={whyKvasol.label} heading={whyKvasol.heading}>
      <ul className={styles.grid}>
        {whyKvasol.items.map((item, index) => (
          <Reveal as="li" key={item.title} className={styles.card} delay={(index % 3) * 70}>
            <div className={styles.head}>
              <Icon name={item.icon} size={24} className={styles.icon} />
              <h3 className={styles.title}>{item.title}</h3>
            </div>
            <p className={styles.description}>{item.description}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal className={styles.statement}>
        <Icon name="circuit" size={28} className={styles.statementIcon} />
        <p>{whyKvasol.statement}</p>
      </Reveal>
    </Section>
  );
}

import { technicalStrengths } from "@/content/site";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import styles from "./TechnicalStrengths.module.css";

export function TechnicalStrengths() {
  return (
    <Section
      id="expertise"
      label={technicalStrengths.label}
      heading={technicalStrengths.heading}
      lead={technicalStrengths.lead}
      tone="tint"
    >
      <ul className={styles.list}>
        {technicalStrengths.items.map((item, index) => (
          <Reveal as="li" key={item} className={styles.item} delay={Math.min(index, 6) * 45}>
            <Icon name="check" size={16} className={styles.icon} />
            <span>{item}</span>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

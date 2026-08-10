import { markets } from "@/content/site";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import styles from "./Markets.module.css";

export function Markets() {
  return (
    <Section id="markets" label={markets.label} heading={markets.heading}>
      <ul className={styles.grid}>
        {markets.items.map((market, index) => (
          <Reveal as="li" key={market.title} className={styles.card} delay={(index % 3) * 70}>
            <Icon name={market.icon} size={28} className={styles.icon} />
            <h3 className={styles.title}>{market.title}</h3>
            <p className={styles.description}>{market.description}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

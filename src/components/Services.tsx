import { services } from "@/content/site";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import styles from "./Services.module.css";

export function Services() {
  return (
    <Section id="services" label={services.label} heading={services.heading} lead={services.lead} tone="tint">
      <ul className={styles.grid}>
        {services.items.map((service, index) => (
          <Reveal as="li" key={service.title} className={styles.card} delay={(index % 3) * 70}>
            <span className={styles.iconWrap} aria-hidden="true">
              <Icon name={service.icon} size={26} />
            </span>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
            <ul className={styles.capabilities}>
              {service.capabilities.map((capability) => (
                <li key={capability}>
                  <span className={styles.marker} aria-hidden="true" />
                  {capability}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

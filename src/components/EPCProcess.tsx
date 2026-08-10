import { epcProcess } from "@/content/site";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import styles from "./EPCProcess.module.css";

export function EPCProcess() {
  return (
    <Section
      id="process"
      label={epcProcess.label}
      heading={epcProcess.heading}
      tone="dark"
      pattern
    >
      <ol className={styles.track}>
        {epcProcess.stages.map((stage, index) => (
          <Reveal as="li" key={stage.title} className={styles.stage} delay={index * 60}>
            <div className={styles.node}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <Icon name={stage.icon} size={20} className={styles.icon} />
            </div>
            <h3 className={styles.title}>{stage.title}</h3>
            <p className={styles.description}>{stage.description}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal className={styles.statement}>
        <p>{epcProcess.statement}</p>
      </Reveal>
    </Section>
  );
}

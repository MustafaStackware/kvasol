import { about } from "@/content/site";
import { BlueprintPanel } from "./BlueprintPanel";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import styles from "./About.module.css";

export function About() {
  return (
    <Section id="about" label={about.label} heading={about.heading}>
      <div className={styles.grid}>
        <Reveal className={styles.body}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}

          <h3 className={styles.disciplinesTitle}>Core disciplines</h3>
          <ul className={styles.disciplines}>
            {about.disciplines.map((discipline) => (
              <li key={discipline}>
                <Icon name="check" size={16} aria-hidden="true" />
                {discipline}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className={styles.aside}>
          <Reveal className={styles.figure} delay={80}>
            <BlueprintPanel />
            <p className={styles.caption}>
              Detailed engineering underpins every KVASol deployment — from array geometry and
              mounting structure to electrical design and grid integration.
            </p>
          </Reveal>

          <Reveal className={styles.commitment} delay={140}>
            <h3 className={styles.commitmentTitle}>{about.commitment.heading}</h3>
            {about.commitment.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

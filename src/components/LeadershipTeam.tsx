import Image from "next/image";
import { team } from "@/content/site";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import styles from "./LeadershipTeam.module.css";

export function LeadershipTeam() {
  return (
    <Section id="team" label={team.label} heading={team.heading} lead={team.lead} tone="tint">
      <ul className={styles.grid}>
        {team.members.map((member, index) => (
          <Reveal as="li" key={member.name} className={styles.card} delay={index * 80}>
            {member.photo ? (
              <Image
                src={member.photo}
                alt={`Portrait of ${member.name}`}
                width={800}
                height={800}
                className={styles.photo}
                sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
            ) : (
              /* Replaced with an authentic photograph once supplied */
              <span className={styles.monogram} data-accent={member.accent} aria-hidden="true">
                {member.initials}
              </span>
            )}

            <div className={styles.body}>
              <div className={styles.identity}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
              </div>

              <dl className={styles.details}>
              <div className={styles.detail}>
                <dt>Qualifications</dt>
                <dd>
                  <ul className={styles.pills}>
                    {member.qualifications.map((qualification) => (
                      <li key={qualification}>{qualification}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className={styles.detail}>
                <dt>Experience</dt>
                <dd>{member.experience}</dd>
              </div>
                <div className={styles.detail}>
                  <dt>Expertise</dt>
                  <dd>{member.expertise}</dd>
                </div>
              </dl>

              <a
                className={styles.linkedin}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="linkedin" size={18} />
                <span>
                  LinkedIn profile
                  <span className="srOnly"> — {member.name}, opens in a new tab</span>
                </span>
                <Icon name="external" size={15} className={styles.externalIcon} />
              </a>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

import { PLACEHOLDER, contact, contactSection } from "@/content/site";
import { ContactForm } from "./ContactForm";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import styles from "./Contact.module.css";
import type { IconName } from "./Icon";

type MethodValue = { text: string; href: string | null };

type Method = {
  label: string;
  icon: IconName;
  values: MethodValue[];
};

const methods: Method[] = [
  {
    label: "Email",
    icon: "mail",
    values: contact.email ? [{ text: contact.email, href: `mailto:${contact.email}` }] : [],
  },
  {
    label: "WhatsApp",
    icon: "whatsapp",
    values: contact.whatsapp.map((line) => ({ text: line.number, href: line.link })),
  },
  {
    label: "Office",
    icon: "map-pin",
    values: contact.office ? [{ text: contact.office, href: contact.officeMapLink }] : [],
  },
  {
    label: "Company LinkedIn",
    icon: "linkedin",
    values: [{ text: "linkedin.com/company/kvasol", href: contact.linkedin }],
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      label={contactSection.label}
      heading={contactSection.heading}
      lead={contactSection.lead}
    >
      <div className={styles.grid}>
        <Reveal className={styles.details}>
          <h3 className={styles.detailsTitle}>Contact details</h3>
          <ul className={styles.methods}>
            {methods.map((method) => (
              <li key={method.label} className={styles.method}>
                <span className={styles.methodIcon} aria-hidden="true">
                  <Icon name={method.icon} size={19} />
                </span>
                <span className={styles.methodBody}>
                  <span className={styles.methodLabel}>{method.label}</span>
                  {method.values.length === 0 ? (
                    /* Awaiting confirmed details from KVASol — never invented. */
                    <span className={styles.pending}>{PLACEHOLDER}</span>
                  ) : (
                    method.values.map((value) =>
                      value.href ? (
                        <a
                          key={value.text}
                          className={styles.methodValue}
                          href={value.href}
                          {...(value.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {value.text}
                        </a>
                      ) : (
                        <span key={value.text} className={styles.methodValue}>
                          {value.text}
                        </span>
                      ),
                    )
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className={styles.social}>
            <p className={styles.socialTitle}>Follow KVASol</p>
            <ul className={styles.socialList}>
              {contact.social
                .filter((profile) => profile.href)
                .map((profile) => (
                  <li key={profile.label}>
                    <a
                      href={profile.href as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label={`KVASol on ${profile.label} (opens in a new tab)`}
                    >
                      <Icon name={profile.icon} size={18} />
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className={styles.formColumn} delay={90}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}

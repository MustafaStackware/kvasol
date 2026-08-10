import { PLACEHOLDER, contact, contactSection } from "@/content/site";
import { ContactForm } from "./ContactForm";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import styles from "./Contact.module.css";
import type { IconName } from "./Icon";

type Method = {
  label: string;
  icon: IconName;
  value: string | null;
  href: string | null;
};

const methods: Method[] = [
  { label: "Email", icon: "mail", value: contact.email, href: contact.email ? `mailto:${contact.email}` : null },
  { label: "WhatsApp", icon: "whatsapp", value: contact.whatsapp, href: contact.whatsappLink },
  { label: "Office", icon: "map-pin", value: contact.office, href: null },
  { label: "Company LinkedIn", icon: "linkedin", value: "linkedin.com/company/kvasol", href: contact.linkedin },
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
                  {method.value && method.href ? (
                    <a
                      className={styles.methodValue}
                      href={method.href}
                      {...(method.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {method.value}
                    </a>
                  ) : method.value ? (
                    <span className={styles.methodValue}>{method.value}</span>
                  ) : (
                    /* Awaiting confirmed details from KVASol — never invented. */
                    <span className={styles.pending}>{PLACEHOLDER}</span>
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

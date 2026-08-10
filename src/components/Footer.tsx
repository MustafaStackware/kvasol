import { PLACEHOLDER, contact, footer, navLinks, site } from "@/content/site";
import { Icon } from "./Icon";
import { Wordmark } from "./Wordmark";
import styles from "./Footer.module.css";

const year = new Date().getFullYear();

const contactRows = [
  { label: "Email", value: contact.email, href: contact.email ? `mailto:${contact.email}` : null },
  { label: "WhatsApp", value: contact.whatsapp, href: contact.whatsappLink },
  { label: "Office", value: contact.office, href: null },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#top" className={styles.brandLink} aria-label={`${site.name} — back to top`}>
              <Wordmark withTagline />
            </a>
            <p className={styles.description}>{footer.description}</p>
            <ul className={styles.social}>
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
                      <Icon name={profile.icon} size={17} />
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <nav className={styles.column} aria-label="Footer">
            <h2 className={styles.columnTitle}>Explore</h2>
            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#expertise" className={styles.link}>
                  Technical Expertise
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Get in touch</h2>
            <ul className={styles.contactList}>
              {contactRows.map((row) => (
                <li key={row.label}>
                  <span className={styles.contactLabel}>{row.label}</span>
                  {row.value && row.href ? (
                    <a className={styles.link} href={row.href}>
                      {row.value}
                    </a>
                  ) : row.value ? (
                    <span className={styles.contactValue}>{row.value}</span>
                  ) : (
                    /* Awaiting confirmed details from KVASol */
                    <span className={styles.pending}>{PLACEHOLDER}</span>
                  )}
                </li>
              ))}
              <li>
                <span className={styles.contactLabel}>LinkedIn</span>
                <a
                  className={styles.link}
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/company/kvasol
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <ul className={styles.legal}>
            {footer.legal.map((item) =>
              item.href ? (
                <li key={item.label}>
                  <a href={item.href} className={styles.link}>
                    {item.label}
                  </a>
                </li>
              ) : (
                /* Rendered unlinked until the legal page is published */
                <li key={item.label}>
                  <span className={styles.legalPending} title="Page to be published">
                    {item.label}
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}

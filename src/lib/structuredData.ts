import { contact, services, site, team, technicalStrengths } from "@/content/site";

/** Organisation-level structured data. Every value here is client-confirmed. */
export function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        logo: `${site.url}/brand/kvasol-mark.png`,
        image: `${site.url}/og-image.jpg`,
        description: site.description,
        slogan: "Engineering reliable energy and infrastructure solutions",
        sameAs: contact.social
          .map((profile) => profile.href)
          .filter((href): href is string => Boolean(href)),
        email: contact.email ?? undefined,
        telephone: contact.whatsapp.map((line) => line.number),
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office 233, Floor 2, Luxus Mall & Residency, Gulberg Greens",
          addressLocality: "Islamabad",
          addressCountry: "PK",
        },
        areaServed: { "@type": "Country", name: "Pakistan" },
        knowsAbout: technicalStrengths.items,
        makesOffer: services.items.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
        employee: team.members.map((member) => ({
          "@type": "Person",
          name: member.name,
          jobTitle: member.role,
          sameAs: member.linkedin,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: `${site.name} — ${site.tagline}`,
        description: site.description,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en-GB",
      },
    ],
  };
}

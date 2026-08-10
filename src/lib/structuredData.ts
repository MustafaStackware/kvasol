import { contact, services, site, team, technicalStrengths } from "@/content/site";

/**
 * Organisation-level structured data. Postal address and telephone are
 * deliberately absent until KVASol supplies confirmed details — publishing
 * placeholder contact points would be worse than publishing none.
 */
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
        sameAs: [contact.linkedin],
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

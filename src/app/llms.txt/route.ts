import {
  about,
  contact,
  epcProcess,
  markets,
  services,
  site,
  team,
  technicalStrengths,
  whyKvasol,
} from "@/content/site";

export const dynamic = "force-static";

/**
 * /llms.txt — a plain-text, llmstxt.org-style summary of the site for language
 * models and AI crawlers. Generated from the same content source as the page,
 * so it cannot drift out of sync.
 */
function buildLlmsTxt() {
  const anchor = (hash: string) => `${site.url}/#${hash}`;

  const lines: string[] = [
    `# ${site.legalName}`,
    "",
    `> ${site.description}`,
    "",
    `${site.name} is a professionally managed Engineering, Procurement and Construction (EPC) company based in Islamabad, Pakistan. It was founded by qualified engineers whose leadership team holds more than 16 years of combined professional experience across renewable energy, electrical engineering, telecom power, project management and infrastructure delivery. Capabilities span the complete project lifecycle: feasibility and energy assessment, detailed engineering, procurement, construction, testing and commissioning, and long-term operations and maintenance.`,
    "",
    `The website is a single page at ${site.url}; the links below are anchors within it.`,
    "",
    "## Services",
    "",
  ];

  for (const service of services.items) {
    lines.push(`- [${service.title}](${anchor("services")}): ${service.description}`);
  }

  lines.push("", "## EPC project lifecycle", "");
  for (const [index, stage] of epcProcess.stages.entries()) {
    lines.push(`${index + 1}. ${stage.title} — ${stage.description}`);
  }

  lines.push("", "## Why KVASol", "");
  for (const item of whyKvasol.items) {
    lines.push(`- ${item.title}: ${item.description}`);
  }

  lines.push("", "## Technical expertise", "");
  for (const item of technicalStrengths.items) {
    lines.push(`- ${item}`);
  }

  lines.push("", "## Sectors served", "");
  for (const market of markets.items) {
    lines.push(`- [${market.title}](${anchor("markets")}): ${market.description}`);
  }

  lines.push("", "## Leadership team", "");
  for (const member of team.members) {
    lines.push(
      `- [${member.name}](${member.linkedin}) — ${member.role}. ${member.qualifications.join(", ")}. ${member.experience}. Expertise: ${member.expertise}.`,
    );
  }

  lines.push("", "## About", "", ...about.paragraphs.map((paragraph) => paragraph), "");

  lines.push("## Contact", "");
  if (contact.email) lines.push(`- Email: ${contact.email}`);
  for (const line of contact.whatsapp) {
    lines.push(`- WhatsApp: ${line.number} (${line.link})`);
  }
  if (contact.office) lines.push(`- Office: ${contact.office}`);
  for (const profile of contact.social) {
    if (profile.href) lines.push(`- ${profile.label}: ${profile.href}`);
  }
  lines.push(`- Project enquiry form: ${anchor("contact")}`);

  lines.push(
    "",
    "## Notes",
    "",
    "- All figures on this site describe the professional experience of the leadership team, not the trading history of the company.",
    "- No project counts, installed capacity, client names, certifications or testimonials are published, because none have been independently verified.",
    "",
  );

  return lines.join("\n");
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

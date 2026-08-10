import type { IconName } from "@/components/Icon";

/* ==========================================================================
   Single source of truth for every piece of copy on the page.
   Values typed `null` are awaiting confirmed information from KVASol and are
   rendered as clearly marked placeholders — never invented.
   ========================================================================== */

export const site = {
  name: "KVASol",
  legalName: "KVASol (Pvt.) Limited",
  url: "https://kvasol.com",
  tagline: "Renewable Energy, Electrical Engineering & EPC Solutions",
  description:
    "KVASol is an engineering-led EPC company delivering renewable-energy, electrical, civil, mechanical and infrastructure solutions across Pakistan.",
} as const;

/* -------------------------------------------------------------------------- */
/* Contact — awaiting client-supplied details                                 */
/* -------------------------------------------------------------------------- */

export const contact = {
  email: null as string | null,
  whatsapp: null as string | null,
  whatsappLink: null as string | null,
  office: null as string | null,
  linkedin: "https://www.linkedin.com/company/kvasol",
  /** Social profiles are rendered only once a real URL is supplied. */
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/kvasol", icon: "linkedin" },
    { label: "Instagram", href: null, icon: "instagram" },
    { label: "Facebook", href: null, icon: "facebook" },
    { label: "X", href: null, icon: "x" },
  ] as { label: string; href: string | null; icon: IconName }[],
} as const;

export const PLACEHOLDER = "To be provided" as const;

/* -------------------------------------------------------------------------- */
/* Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "EPC Process", href: "#process" },
  { label: "Why KVASol", href: "#why" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

export const cta = {
  primary: { label: "Discuss Your Project", href: "#contact" },
  secondary: { label: "Explore Our Capabilities", href: "#services" },
} as const;

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: ["Engineering", "Procurement", "Construction"],
  heading: "Engineering Reliable Energy and Infrastructure Solutions",
  lead: "KVASol delivers end-to-end renewable energy, electrical engineering and infrastructure solutions—from feasibility and detailed design to procurement, construction, commissioning and long-term performance support.",
  credibility: "16+ Years of Engineering and Project Leadership Experience",
  imageCaption: "Solar PV · Battery storage · Telecom power · Infrastructure",
  imageAlt:
    "Ground-mounted solar PV array beside a containerised battery energy storage system and a telecom tower, with a city skyline at sunrise behind them.",
} as const;

/* -------------------------------------------------------------------------- */
/* Credibility strip                                                          */
/* -------------------------------------------------------------------------- */

export const trustPoints = [
  {
    stat: "16+ Years",
    label: "Professional Experience",
    detail: "Held by the founding and leadership team",
    icon: "clock" as IconName,
  },
  {
    stat: "End-to-End",
    label: "EPC Capability",
    detail: "Engineering, procurement and construction under one team",
    icon: "layers" as IconName,
  },
  {
    stat: "Multidisciplinary",
    label: "Engineering Team",
    detail: "Electrical, renewable energy, civil, structural and mechanical",
    icon: "users" as IconName,
  },
  {
    stat: "Full Lifecycle",
    label: "Project Support",
    detail: "From feasibility through to operations and maintenance",
    icon: "cycle" as IconName,
  },
] as const;

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */

export const about = {
  label: "About KVASol",
  heading: "Built on Engineering Expertise. Focused on Lasting Value.",
  paragraphs: [
    "KVASol (Pvt.) Limited is a professionally managed Engineering, Procurement and Construction company established to deliver reliable, sustainable and cost-effective solutions across the renewable energy, electrical engineering and infrastructure sectors.",
    "Founded by qualified engineers, KVASol brings together more than 16 years of professional experience in renewable energy projects, electrical design, power distribution, installation and maintenance, project management, EPC execution and the operation and maintenance of solar assets.",
    "Our capabilities cover the complete project lifecycle—from feasibility studies, energy assessment and system sizing to detailed engineering, procurement, installation, testing, commissioning and long-term performance optimisation.",
  ],
  disciplines: [
    "Renewable energy",
    "Solar PV & hybrid systems",
    "Battery energy storage",
    "Electrical engineering",
    "Power distribution",
    "Civil & mechanical works",
    "Infrastructure development",
    "Project management",
  ],
  commitment: {
    heading: "Our Commitment",
    paragraphs: [
      "Successful EPC projects depend on technical excellence, financial discipline, transparency and customer trust. KVASol is committed to delivering measurable value, reliable performance and professional support throughout every stage of the project lifecycle.",
      "Our objective extends beyond installing systems. We aim to establish lasting client relationships and contribute meaningfully to Pakistan's renewable-energy and infrastructure development.",
    ],
  },
} as const;

/* -------------------------------------------------------------------------- */
/* Services                                                                   */
/* -------------------------------------------------------------------------- */

export const services = {
  label: "What We Do",
  heading: "Integrated Capabilities for Complex Engineering Projects",
  lead: "From renewable-energy systems to electrical infrastructure and multidisciplinary construction, KVASol combines detailed engineering with practical execution capability.",
  items: [
    {
      title: "Solar PV and Hybrid Energy Systems",
      icon: "solar" as IconName,
      description:
        "Engineering and deployment of reliable solar PV and hybrid energy systems for residential, commercial, industrial and infrastructure applications.",
      capabilities: [
        "Feasibility studies and site assessments",
        "Energy and load analysis",
        "Solar PV system design and optimisation",
        "Grid-connected and hybrid configurations",
        "Net-metering and grid integration",
        "Testing and commissioning",
      ],
    },
    {
      title: "Battery Energy Storage Systems",
      icon: "battery" as IconName,
      description:
        "BESS design and deployment solutions that improve energy reliability, flexibility and system performance.",
      capabilities: [
        "Load-profile assessment",
        "Storage-system sizing",
        "System architecture and integration",
        "Backup and hybrid-energy solutions",
        "Technical deployment support",
        "Performance planning",
      ],
    },
    {
      title: "Electrical Engineering",
      icon: "circuit" as IconName,
      description:
        "Detailed electrical engineering services for commercial, industrial, building and infrastructure projects.",
      capabilities: [
        "LV and MV electrical design",
        "Power-distribution design",
        "Cable sizing",
        "Protection coordination",
        "Earthing and lightning protection",
        "Electrical safety and compliance",
      ],
    },
    {
      title: "EPC Project Delivery",
      icon: "blueprint" as IconName,
      description:
        "End-to-end management of engineering, procurement, construction, testing and commissioning activities.",
      capabilities: [
        "Feasibility and technical planning",
        "Detailed engineering",
        "Procurement coordination",
        "Construction and installation",
        "Quality and HSE oversight",
        "Testing, commissioning and handover",
      ],
    },
    {
      title: "Operations and Maintenance",
      icon: "gear" as IconName,
      description:
        "Planned maintenance and technical support designed to protect system reliability and long-term asset performance.",
      capabilities: [
        "Preventive maintenance planning",
        "Corrective maintenance",
        "Fault identification and troubleshooting",
        "Performance monitoring",
        "Technical inspections",
        "Asset-performance optimisation",
      ],
    },
    {
      title: "Civil, Mechanical and Construction Services",
      icon: "structure" as IconName,
      description:
        "Integrated civil, structural and mechanical support for renewable-energy and infrastructure projects.",
      capabilities: [
        "Civil design and planning",
        "Structural engineering",
        "Mechanical structure design",
        "Fabrication coordination",
        "Construction execution",
        "Solar-support structure deployment",
      ],
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* EPC lifecycle                                                              */
/* -------------------------------------------------------------------------- */

export const epcProcess = {
  label: "End-to-End Delivery",
  heading: "One Team Across the Complete Project Lifecycle",
  stages: [
    {
      title: "Assess",
      description: "Feasibility studies, site assessment, load analysis and energy audits.",
      icon: "search" as IconName,
    },
    {
      title: "Design",
      description: "System sizing, detailed engineering, technical drawings and optimisation.",
      icon: "blueprint" as IconName,
    },
    {
      title: "Procure",
      description: "Equipment evaluation, sourcing coordination and commercial control.",
      icon: "package" as IconName,
    },
    {
      title: "Construct",
      description: "Installation, civil works, electrical works and on-site project management.",
      icon: "crane" as IconName,
    },
    {
      title: "Commission",
      description: "Testing, system verification, grid integration and formal handover.",
      icon: "check-circle" as IconName,
    },
    {
      title: "Support",
      description: "Preventive maintenance, corrective support and performance optimisation.",
      icon: "gear" as IconName,
    },
  ],
  statement:
    "By integrating engineering, procurement, construction and long-term support, KVASol gives clients clearer accountability and a more coordinated project experience.",
} as const;

/* -------------------------------------------------------------------------- */
/* Why KVASol                                                                 */
/* -------------------------------------------------------------------------- */

export const whyKvasol = {
  label: "Why KVASol",
  heading: "Technical Confidence at Every Stage",
  items: [
    {
      title: "Experienced Subject-Matter Experts",
      description:
        "KVASol's leadership combines more than 16 years of professional experience across engineering, renewable energy, telecom, project management and infrastructure delivery.",
      icon: "badge" as IconName,
    },
    {
      title: "Integrated EPC Capability",
      description:
        "A coordinated delivery model covering assessment, engineering, procurement, installation, commissioning and maintenance.",
      icon: "layers" as IconName,
    },
    {
      title: "Multidisciplinary Expertise",
      description:
        "Electrical, renewable-energy, BESS, telecom, civil, structural and mechanical expertise within one professional team.",
      icon: "users" as IconName,
    },
    {
      title: "Quality and Safety Focus",
      description:
        "A strong commitment to engineering standards, HSE principles, quality assurance and disciplined execution throughout the project lifecycle.",
      icon: "shield" as IconName,
    },
    {
      title: "Flexible Delivery Models",
      description:
        "Scalable engineering and execution support tailored to the technical, commercial and operational requirements of each project.",
      icon: "sliders" as IconName,
    },
  ],
  statement:
    "Engineering decisions should create both reliable performance and measurable business value.",
} as const;

/* -------------------------------------------------------------------------- */
/* Technical strengths                                                        */
/* -------------------------------------------------------------------------- */

export const technicalStrengths = {
  label: "Technical Expertise",
  heading: "Engineering Depth That Supports Reliable Execution",
  lead: "A consolidated view of the engineering disciplines KVASol applies across renewable-energy, electrical and infrastructure projects.",
  items: [
    "Solar PV system design and optimisation",
    "Battery Energy Storage System design and deployment",
    "Net-metering and grid integration",
    "Load analysis and energy audits",
    "LV and MV electrical design",
    "Cable sizing and protection coordination",
    "Earthing and lightning protection design",
    "Electrical safety and compliance",
    "Telecom power-system design and deployment",
    "Civil and structural engineering",
    "Mechanical structure design and fabrication support",
    "Testing, commissioning and troubleshooting",
    "Preventive and corrective maintenance planning",
    "Project and engineering management",
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Markets served                                                             */
/* -------------------------------------------------------------------------- */

export const markets = {
  label: "Who We Serve",
  heading: "Engineering Solutions Across Key Sectors",
  items: [
    {
      title: "Residential",
      description:
        "Rooftop solar and hybrid-energy solutions designed around household energy requirements, available space and long-term value.",
      icon: "home" as IconName,
    },
    {
      title: "Commercial and Industrial",
      description:
        "Energy and electrical-infrastructure solutions designed to improve reliability, operational efficiency and cost control.",
      icon: "factory" as IconName,
    },
    {
      title: "Government and Public Sector",
      description:
        "Professional engineering, infrastructure and project-delivery support aligned with project requirements and applicable standards.",
      icon: "institution" as IconName,
    },
    {
      title: "Telecom Infrastructure",
      description:
        "Power-system design, deployment, maintenance and engineering-management support for telecom infrastructure.",
      icon: "tower" as IconName,
    },
    {
      title: "Construction and Development",
      description:
        "Integrated electrical, civil, structural, mechanical and MEP-related support for buildings and infrastructure projects.",
      icon: "crane" as IconName,
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Leadership team                                                            */
/* -------------------------------------------------------------------------- */

export const team = {
  label: "Our Team",
  heading: "Multidisciplinary Leadership. Practical Project Experience.",
  lead: "KVASol's leadership team combines technical specialisation with hands-on experience across public-sector, private-sector, national, multinational and international consultancy environments.",
  members: [
    {
      name: "M. Qamar ul Hassan",
      initials: "QH",
      role: "Subject-Matter Expert — Electrical, RF and Project Management",
      qualifications: ["BEE", "MS in RF & Microwave", "PhD Scholar in RF & Microwave", "PMP Certified"],
      experience: "16+ years of experience across public- and private-sector environments",
      expertise:
        "Electrical design, active and passive RF design, antenna design and project management",
      linkedin: "https://www.linkedin.com/in/muhammad-qamar-ul-hassan-81604035/",
      /** Set to a file in /public/team once an authentic photograph is supplied. */
      photo: "/team/qamar-ul-hassan.webp" as string | null,
      accent: "gold" as const,
    },
    {
      name: "Arslan Hamid",
      initials: "AH",
      role: "Subject-Matter Expert — Renewable Energy, BESS, Telecom and Engineering Management",
      qualifications: ["BEE", "MS in Engineering Management"],
      experience:
        "16+ years of experience across national and multinational private-sector organisations",
      expertise:
        "Solar-system design, BESS design and deployment, telecom power-system design and deployment, asset performance management, operations and maintenance, and engineering management",
      linkedin: "https://www.linkedin.com/in/arslan-hamid-521b7523/",
      photo: "/team/arslan-hamid.webp" as string | null,
      accent: "green" as const,
    },
    {
      name: "Usama Zakir",
      initials: "UZ",
      role: "Subject-Matter Expert — Civil and Mechanical Engineering",
      qualifications: ["BS in Civil Engineering", "MS in Structural Engineering"],
      experience:
        "7+ years of experience across national and multinational private-sector organisations and international consultancy",
      expertise:
        "Civil design, planning and execution, mechanical structure design and fabrication, and solar-system deployment",
      linkedin: "https://www.linkedin.com/in/usamazakir172/",
      photo: "/team/usama-zakir.webp" as string | null,
      accent: "navy" as const,
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Contact                                                                    */
/* -------------------------------------------------------------------------- */

export const contactSection = {
  label: "Contact KVASol",
  heading: "Let's Discuss Your Energy or Infrastructure Project",
  lead: "Whether you are planning a solar installation, evaluating energy storage, developing electrical infrastructure or looking for an experienced EPC partner, speak with the KVASol team about your project requirements.",
  projectTypes: [
    "Solar PV",
    "Hybrid Energy System",
    "Battery Energy Storage System",
    "Electrical Engineering",
    "EPC Project",
    "Operations and Maintenance",
    "Civil or Mechanical Works",
    "Construction Services",
    "Technical Consultancy",
    "Other",
  ],
  submitLabel: "Submit Project Enquiry",
} as const;

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

export const footer = {
  description: site.description,
  /** `href: null` keeps the item visible but unlinked until the page exists. */
  legal: [
    { label: "Privacy Policy", href: null },
    { label: "Terms and Conditions", href: null },
  ] as { label: string; href: string | null }[],
} as const;

/**
 * Central identity and contact configuration.
 * Contact channels left as null are hidden across the site until they are set.
 */
export const site = {
  name: "Syed Bilal Haider",
  shortName: "Bilal Haider",
  initials: "SBH",
  title: "Web & Mobile App Developer",
  positioning:
    "Software Developer — TypeScript, React Native, Full-Stack & AI Integration",
  headline: "Building web and mobile products that solve real problems.",
  intro:
    "I build TypeScript applications with React, Next.js, React Native and Node.js — from product interfaces and REST APIs to offline-first mobile databases — and bring AI into products through LLM APIs, retrieval (RAG) and MCP-based tools.",
  description:
    "Syed Bilal Haider is a web and mobile app developer building TypeScript products with React, Next.js, React Native, Expo, Node.js and SQL databases, with hands-on experience in AI integration, RAG and MCP.",
  availability: "Open to remote roles and freelance projects",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/$/,
    "",
  ),
  contact: {
    // Set NEXT_PUBLIC_CONTACT_EMAIL to publish a professional address.
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || null,
    github: "https://github.com/Hunyshah",
    // Add a verified profile URL to show LinkedIn.
    linkedin: null as string | null,
    // Optional. Digits only with country code, e.g. "923001234567". Leave null to keep private.
    whatsapp: null as string | null,
  },
  // Place the CV at /public/cv/ and set the path, e.g. "/cv/Syed-Bilal-Haider-CV.pdf".
  cv: null as string | null,
} as const;

export const contactLinks = [
  site.contact.email && {
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    label: "GitHub",
    value: "github.com/Hunyshah",
    href: site.contact.github,
  },
  site.contact.linkedin && {
    label: "LinkedIn",
    value: site.contact.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
    href: site.contact.linkedin,
  },
  site.contact.whatsapp && {
    label: "WhatsApp",
    value: "Message on WhatsApp",
    href: `https://wa.me/${site.contact.whatsapp}`,
  },
].filter(Boolean) as { label: string; value: string; href: string }[];

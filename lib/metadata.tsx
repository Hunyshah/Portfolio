import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.title}`;
  return {
    title: title ?? { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    url: site.url,
    sameAs: [site.contact.github, site.contact.linkedin].filter(Boolean),
    knowsAbout: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Node.js",
      "PostgreSQL",
      "SQLite",
      "Supabase",
      "Retrieval-augmented generation",
      "Model Context Protocol",
    ],
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be a raw script body; content is generated from local config only.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

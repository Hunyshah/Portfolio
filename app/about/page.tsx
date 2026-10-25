import { Principles } from "@/components/home/principles";
import { AiSection } from "@/components/home/ai-section";
import { ContactCta } from "@/components/contact/contact-cta";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "About Syed Bilal Haider — a practical software developer building TypeScript web and mobile products, with experience in databases, product maintenance and AI integration.",
  path: "/about",
});

const interests = [
  "Offline-first mobile architecture and sync",
  "Database-driven product features",
  "AI features grounded in real data — RAG, tools and MCP",
  "Agentic workflows that stay reviewable and testable",
  "Shipping and maintaining apps after release",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A practical developer who cares what happens <span className="serif-accent text-accent">after launch.</span>
          </>
        }
      />

      <section aria-label="Introduction" className="container-page pb-16">
        <div className="grid gap-10 border-t border-line pt-10 md:grid-cols-12">
          <div className="prose-body space-y-0 text-lg leading-relaxed text-ink-2 md:col-span-8">
            <p>
              I’m Syed Bilal Haider, a web and mobile app developer. Since 2021 I’ve worked professionally on React and
              React Native applications — integrating REST APIs, managing application state and building features with
              designers and product managers.
            </p>
            <p>
              Beyond feature work, I take products through development, release and maintenance. FrameLab Pro, an Android app for Tekken
              players, is published on Google Play and runs on versioned local SQLite databases that I keep updated.
              KyaPakega, an offline-first meal-planning app, pairs SQLite on device with Supabase for shared household
              data.
            </p>
            <p>
              I also build AI into products: LLM-powered features, retrieval over a product’s own data, MCP servers that
              expose app capabilities as tools, and agentic workflows. And I use tools like Claude Code daily — while
              keeping the architecture, review and verification in my own hands.
            </p>
          </div>
          <aside className="md:col-span-4">
            <h2 className="eyebrow">Currently interested in</h2>
            <ul className="mt-4 border-t border-line">
              {interests.map((item) => (
                <li key={item} className="border-b border-line py-3 text-sm font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section aria-labelledby="principles-title" className="container-page py-16">
        <SectionHeading eyebrow="Philosophy" id="principles-title" title="How I approach software" />
        <div className="mt-12">
          <Principles />
        </div>
      </section>

      <section aria-labelledby="ai-title" className="container-page py-16">
        <SectionHeading eyebrow="AI engineering" id="ai-title" title="Where AI fits in my work" />
        <div className="mt-12">
          <AiSection />
        </div>
      </section>

      <section aria-labelledby="goal-title" className="container-page py-16">
        <SectionHeading
          eyebrow="Goal"
          id="goal-title"
          title="Build software that solves real problems, serves its users and can be maintained over time."
        />
      </section>

      <ContactCta />
    </>
  );
}

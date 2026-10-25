import { Hero } from "@/components/hero/hero";
import { FeaturedProject } from "@/components/projects/featured-project";
import { ProjectCard } from "@/components/projects/project-card";
import { ExperienceTimeline } from "@/components/experience/timeline";
import { SkillGroups } from "@/components/skills/skill-groups";
import { AiSection } from "@/components/home/ai-section";
import { Principles } from "@/components/home/principles";
import { ContactCta } from "@/components/contact/contact-cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { capabilities } from "@/lib/content";
import { getProjects } from "@/lib/projects";
import { JsonLd, pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({ description: site.description, path: "/" });

export default function HomePage() {
  const [lead, ...rest] = getProjects();

  return (
    <>
      <Hero />

      <section aria-labelledby="what-title" className="container-page py-16 md:py-24">
        <SectionHeading
          index="01"
          eyebrow="What I build"
          id="what-title"
          title={
            <>
              Frontend, backend and data — <span className="serif-accent">working together.</span>
            </>
          }
          description="I don’t stop at the UI. Most of my work sits where interfaces meet APIs and databases, and where a product has to keep working after launch."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <li key={item.title} className="reveal flex flex-col bg-paper p-6">
              <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2">{item.body}</p>
              <p className="mt-6 font-mono text-xs text-ink-3">{item.stack.join(" / ")}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="work-title" className="container-page py-16 md:py-24">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          id="work-title"
          title="Real products, with real constraints."
          description="A published Android app, an offline-first mobile product in development, and client web work — each with its own case study."
        />
        <div className="mt-12">
          <FeaturedProject project={lead} />
        </div>
        <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <li key={project.slug} className="reveal">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <ButtonLink href="/projects" variant="secondary">
            All projects
          </ButtonLink>
        </div>
      </section>

      <section aria-labelledby="experience-title" className="container-page py-16 md:py-24">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          id="experience-title"
          title="Professional work since 2021."
          description="Building and maintaining React and React Native applications in software-house teams alongside designers and product managers."
          action={
            <ButtonLink href="/experience" variant="ghost">
              Full experience →
            </ButtonLink>
          }
        />
        <div className="mt-12">
          <ExperienceTimeline />
        </div>
      </section>

      <section aria-labelledby="skills-title" className="container-page py-16 md:py-24">
        <SectionHeading
          index="04"
          eyebrow="Capabilities"
          id="skills-title"
          title="The stack I ship with."
          description="Grouped by where it’s used. Filled tags have direct evidence in my professional work or the projects on this site; outlined ones I have worked with."
        />
        <div className="mt-12">
          <SkillGroups />
        </div>
      </section>

      <section aria-labelledby="ai-title" className="container-page py-16 md:py-24">
        <SectionHeading
          index="05"
          eyebrow="AI engineering"
          id="ai-title"
          title={
            <>
              Engineering with AI, <span className="serif-accent">guided by developer judgment.</span>
            </>
          }
          description="I integrate AI into products — LLM features, retrieval over real data, MCP tools and agentic workflows — and I use AI tools to build faster. Either way, the decisions and the verification stay with me."
        />
        <div className="mt-12">
          <AiSection />
        </div>
      </section>

      <section aria-labelledby="principles-title" className="container-page py-16 md:py-24">
        <SectionHeading
          index="06"
          eyebrow="How I work"
          id="principles-title"
          title="Practical software, built to be maintained."
        />
        <div className="mt-12">
          <Principles />
        </div>
      </section>

      <ContactCta />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: site.url,
          description: site.description,
        }}
      />
    </>
  );
}

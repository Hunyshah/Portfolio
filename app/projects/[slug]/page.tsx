import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ArchitectureFlow } from "@/components/projects/architecture-flow";
import { BulletList, CaseStudySection, Paragraphs } from "@/components/projects/case-study-section";
import { ProjectCover } from "@/components/projects/project-cover";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { TechnologyList } from "@/components/projects/technology-list";
import { ButtonLink } from "@/components/ui/button-link";
import { StatusBadge } from "@/components/ui/tag";
import { getAdjacentProject, getProject, projects } from "@/lib/projects";
import { JsonLd, pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.title} — Case study`,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getAdjacentProject(project.slug);

  const toc = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem" },
    { id: "role", label: "My role" },
    project.techReasons.length > 0 && { id: "stack", label: "Technology" },
    project.architecture && { id: "architecture", label: "Architecture" },
    ...project.sections.map((section) => ({ id: section.id, label: section.title })),
    { id: "features", label: "Features" },
    { id: "challenges", label: "Challenges" },
    { id: "results", label: "Results" },
  ].filter(Boolean) as { id: string; label: string }[];

  return (
    <article>
      <header className="container-page pb-10 pt-10 md:pt-14">
        <Link href="/projects" className="inline-flex min-h-10 items-center gap-2 text-sm text-ink-2 hover:text-ink">
          <ArrowLeft aria-hidden className="size-4" /> All projects
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
          <StatusBadge status={project.status} />
          <span className="eyebrow">{project.category}</span>
        </div>
        <h1 className="display mt-5 text-[clamp(2.75rem,7vw,5.5rem)]">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-xl leading-relaxed text-ink-2">{project.tagline}</p>

        <dl className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-3">
          <div>
            <dt className="eyebrow">Role</dt>
            <dd className="mt-2 text-sm font-medium">{project.role}</dd>
          </div>
          <div>
            <dt className="eyebrow">Platform</dt>
            <dd className="mt-2 text-sm font-medium">{project.platform}</dd>
          </div>
          <div>
            <dt className="eyebrow">Status</dt>
            <dd className="mt-2 text-sm font-medium">{project.status}</dd>
          </div>
        </dl>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <TechnologyList technologies={project.technologies} />
          {project.links.length > 0 && (
            <div className="flex shrink-0 flex-wrap gap-3">
              {project.links.map((link) => (
                <ButtonLink key={link.href} href={link.href} external>
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="container-page">
        <ProjectCover project={project} size="lg" className="h-64 w-full md:h-auto md:aspect-[21/9]" />
      </div>

      <div className="container-page grid gap-10 py-12 lg:grid-cols-12 lg:py-16">
        <nav aria-label="Case study sections" className="hidden lg:col-span-3 lg:block">
          <ol className="sticky top-24 space-y-1 border-l border-line text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-ink-3 hover:border-ink hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="lg:col-span-9">
          <CaseStudySection id="overview" title="Overview">
            <Paragraphs items={project.overview} />
          </CaseStudySection>

          <CaseStudySection id="problem" title="The problem">
            <Paragraphs items={project.problem} />
            {project.audience && (
              <div className="mt-8">
                <h3 className="eyebrow">Who it’s for</h3>
                <div className="mt-3">
                  <BulletList items={project.audience} />
                </div>
              </div>
            )}
          </CaseStudySection>

          <CaseStudySection id="role" title="My role">
            <p className="mb-5 max-w-2xl">{project.role}.</p>
            <BulletList items={project.contribution} columns />
          </CaseStudySection>

          {project.techReasons.length > 0 && (
            <CaseStudySection id="stack" title="Technology, and why">
              <dl className="grid gap-4 md:grid-cols-3">
                {project.techReasons.map((tech) => (
                  <div key={tech.name} className="rounded-2xl border border-line bg-raised p-5">
                    <dt className="font-semibold text-ink">{tech.name}</dt>
                    <dd className="mt-2 text-sm leading-relaxed">{tech.reason}</dd>
                  </div>
                ))}
              </dl>
            </CaseStudySection>
          )}

          {project.architecture && (
            <CaseStudySection id="architecture" title="Architecture">
              <ArchitectureFlow diagram={project.architecture} />
            </CaseStudySection>
          )}

          {project.sections.map((section) => (
            <CaseStudySection key={section.id} id={section.id} title={section.title}>
              {section.body && <Paragraphs items={section.body} />}
              {section.bullets && <BulletList items={section.bullets} columns />}
            </CaseStudySection>
          ))}

          <CaseStudySection id="features" title="Features">
            <BulletList items={project.features} columns />
          </CaseStudySection>

          <CaseStudySection id="challenges" title="Challenges & approach">
            <ol className="space-y-4">
              {project.challenges.map((item, index) => (
                <li key={item.title} className="grid gap-4 rounded-2xl border border-line p-5 md:grid-cols-12 md:p-6">
                  <div className="md:col-span-4">
                    <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
                  </div>
                  <div className="space-y-3 text-sm leading-relaxed md:col-span-8">
                    <p>
                      <span className="eyebrow mr-2">Challenge</span>
                      {item.challenge}
                    </p>
                    <p>
                      <span className="eyebrow mr-2 !text-accent">Approach</span>
                      {item.approach}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </CaseStudySection>

          <CaseStudySection id="results" title="Results">
            <BulletList items={project.outcomes} />
            <div className="mt-8">
              <ProjectGallery project={project} />
            </div>
          </CaseStudySection>
        </div>
      </div>

      {next.slug !== project.slug && (
        <div className="container-page pb-20">
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col gap-2 rounded-3xl border border-line p-6 transition-colors hover:border-ink md:flex-row md:items-center md:justify-between md:p-10"
          >
            <span className="eyebrow">Next case study</span>
            <span className="display flex items-center gap-3 text-3xl md:text-5xl">
              {next.title}
              <ArrowRight aria-hidden className="size-8 transition-transform group-hover:translate-x-1 md:size-10" />
            </span>
          </Link>
        </div>
      )}

      {project.status === "Published" && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: project.title,
            description: project.summary,
            operatingSystem: "Android",
            applicationCategory: "ReferenceApplication",
            url: project.links[0]?.href,
          }}
        />
      )}
    </article>
  );
}

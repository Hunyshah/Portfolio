import type { Project } from "@/types/project";
import { ProjectCover } from "@/components/projects/project-cover";
import { TechnologyList } from "@/components/projects/technology-list";
import { ButtonLink } from "@/components/ui/button-link";
import { StatusBadge } from "@/components/ui/tag";

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="reveal grid gap-8 rounded-3xl border border-line bg-raised p-4 md:grid-cols-12 md:gap-10 md:p-6">
      <ProjectCover project={project} size="lg" className="min-h-72 md:col-span-6 md:min-h-[28rem]" />
      <div className="flex flex-col px-1 pb-2 md:col-span-6 md:py-4 md:pr-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <StatusBadge status={project.status} />
          <span className="eyebrow">{project.platform}</span>
        </div>
        <h3 className="display mt-5 text-[clamp(2.25rem,4vw,3.25rem)]">{project.title}</h3>
        <p className="mt-3 text-lg text-ink-2">{project.tagline}</p>
        <p className="mt-5 leading-relaxed text-ink-2">{project.summary}</p>

        <dl className="mt-6 grid grid-cols-1 border-t border-line sm:grid-cols-2">
          {project.highlights.map((item, index) => (
            <div key={item} className="flex gap-3 border-b border-line py-3 sm:odd:pr-4">
              <dt className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</dt>
              <dd className="text-sm font-medium">{item}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6">
          <TechnologyList technologies={project.technologies} />
        </div>

        <div className="mt-8 flex flex-wrap gap-3 md:mt-auto md:pt-8">
          <ButtonLink href={`/projects/${project.slug}`}>Read the case study</ButtonLink>
          {project.links.map((link) => (
            <ButtonLink key={link.href} href={link.href} variant="secondary" external>
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </article>
  );
}

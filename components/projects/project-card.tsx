import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";
import { ProjectCover } from "@/components/projects/project-cover";
import { TechnologyList } from "@/components/projects/technology-list";
import { StatusBadge } from "@/components/ui/tag";

export function ProjectCard({ project, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="group relative flex h-full flex-col">
      <div className="overflow-hidden rounded-2xl">
        <ProjectCover
          project={project}
          className="aspect-[4/3] transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-center justify-between gap-3">
          <StatusBadge status={project.status} />
          <span className="eyebrow">{project.category}</span>
        </div>
        <Heading className="mt-3 text-xl font-semibold tracking-tight">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:rounded-2xl">
            {project.title}
          </Link>
        </Heading>
        <p className="mt-2 text-sm leading-relaxed text-ink-2">{project.tagline}</p>
        <div className="mt-4">
          <TechnologyList technologies={project.technologies} limit={4} />
        </div>
        <p className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-ink group-hover:text-accent">
          Read case study
          <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </p>
      </div>
    </article>
  );
}

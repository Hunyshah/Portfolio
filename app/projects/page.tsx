import { ProjectExplorer } from "@/components/projects/project-explorer";
import { PageHeader } from "@/components/ui/page-header";
import { archiveProjects, getAllTechnologies, getProjects } from "@/lib/projects";
import { pageMetadata } from "@/lib/metadata";
import type { ProjectCategory } from "@/types/project";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Case studies from Syed Bilal Haider: FrameLab Pro (published Android app), KyaPakega (offline-first meal planning), a construction company website and a Laravel marketplace contribution.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getProjects();
  const categories = [...new Set(projects.map((p) => p.category))] as ProjectCategory[];
  const technologies = getAllTechnologies().filter((tech) =>
    ["React Native", "Expo", "TypeScript", "SQLite", "Supabase", "Laravel 12", "PostgreSQL", "MySQL"].includes(tech),
  );

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            Work, with the <span className="serif-accent text-accent">context</span> behind it.
          </>
        }
        description="Each project lists its real status — published, in development or client collaboration — and what my role actually was."
      />

      <section aria-label="Case studies" className="container-page pb-20">
        <ProjectExplorer projects={projects} categories={categories} technologies={technologies} />
      </section>

      <section aria-labelledby="archive-title" className="container-page pb-24">
        <div className="border-t border-line pt-6">
          <h2 id="archive-title" className="text-2xl font-semibold tracking-tight">
            Earlier projects
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-2">
            Listed on my CV. Full case studies will be added as each project’s details and screenshots are documented.
          </p>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[34rem] text-left text-sm">
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="eyebrow py-3 pr-4 font-normal">Project</th>
                <th scope="col" className="eyebrow py-3 pr-4 font-normal">Platform</th>
                <th scope="col" className="eyebrow py-3 font-normal">Stack</th>
              </tr>
            </thead>
            <tbody>
              {archiveProjects.map((project) => (
                <tr key={project.name} className="border-b border-line">
                  <th scope="row" className="py-4 pr-4 font-medium">{project.name}</th>
                  <td className="py-4 pr-4 text-ink-2">{project.platform}</td>
                  <td className="py-4 font-mono text-xs text-ink-2">{project.technologies.join(" · ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

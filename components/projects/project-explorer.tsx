"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Project, ProjectCategory } from "@/types/project";
import { ProjectCard } from "@/components/projects/project-card";

type Filter = { kind: "all" } | { kind: "category"; value: ProjectCategory } | { kind: "tech"; value: string };

export function ProjectExplorer({
  projects,
  categories,
  technologies,
}: {
  projects: Project[];
  categories: ProjectCategory[];
  technologies: string[];
}) {
  const [filter, setFilter] = useState<Filter>({ kind: "all" });
  const reduceMotion = useReducedMotion();

  const visible = useMemo(() => {
    if (filter.kind === "category") return projects.filter((p) => p.category === filter.value);
    if (filter.kind === "tech") return projects.filter((p) => p.technologies.includes(filter.value));
    return projects;
  }, [filter, projects]);

  const isActive = (candidate: Filter) =>
    candidate.kind === filter.kind &&
    (candidate.kind === "all" || (filter.kind !== "all" && candidate.value === filter.value));

  const chip =
    "min-h-9 rounded-full border px-3.5 text-sm transition-colors aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper border-line text-ink-2 hover:border-ink hover:text-ink";

  return (
    <div>
      <div className="space-y-4">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          <button type="button" className={chip} aria-pressed={isActive({ kind: "all" })} onClick={() => setFilter({ kind: "all" })}>
            All work
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={chip}
              aria-pressed={isActive({ kind: "category", value: category })}
              onClick={() => setFilter({ kind: "category", value: category })}
            >
              {category}
            </button>
          ))}
        </div>
        <div role="group" aria-label="Filter by technology" className="flex flex-wrap items-center gap-2">
          <span className="eyebrow mr-1">Stack</span>
          {technologies.map((tech) => (
            <button
              key={tech}
              type="button"
              className={`${chip} font-mono text-xs`}
              aria-pressed={isActive({ kind: "tech", value: tech })}
              onClick={() => setFilter(isActive({ kind: "tech", value: tech }) ? { kind: "all" } : { kind: "tech", value: tech })}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <motion.ul layout={!reduceMotion} className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.li
              key={project.slug}
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ProjectCard project={project} headingLevel="h2" />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}

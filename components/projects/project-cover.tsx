import type { Project } from "@/types/project";

const tones = {
  ink: "bg-ink-panel text-on-ink",
  accent: "bg-accent text-on-accent",
  sand: "bg-sand text-ink",
  slate: "bg-slate text-on-ink",
} as const;

/**
 * Typographic project cover. Used instead of screenshots until real, approved images exist —
 * it is a designed title card, never a mock of the product UI.
 */
export function ProjectCover({
  project,
  size = "md",
  className = "",
}: {
  project: Project;
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <div
      className={`relative isolate flex overflow-hidden rounded-2xl ${tones[project.cover.tone]} ${className}`}
      aria-hidden
    >
      <svg className="absolute inset-0 -z-10 h-full w-full opacity-[0.12]" preserveAspectRatio="none">
        <defs>
          <pattern id={`grid-${project.slug}`} width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${project.slug})`} />
      </svg>
      <div className="flex w-full flex-col justify-between p-5 md:p-7">
        <div className="flex items-start justify-between gap-4 font-mono text-[0.68rem] uppercase tracking-[0.1em] opacity-80">
          <span>{project.category}</span>
          <span>{project.platform.split(" · ")[0]}</span>
        </div>
        <div>
          <p
            className={`display leading-[0.85] opacity-95 ${
              size === "lg" ? "text-[clamp(5rem,14vw,10rem)]" : "text-[clamp(4rem,9vw,6rem)]"
            }`}
          >
            {project.cover.mark}
          </p>
          <p className="mt-3 text-sm font-medium opacity-85">{project.title}</p>
        </div>
      </div>
    </div>
  );
}

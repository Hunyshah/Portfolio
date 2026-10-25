import type { ProjectStatus } from "@/types/project";

export function Tag({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "inverse" }) {
  const styles =
    tone === "inverse"
      ? "border-white/15 text-on-ink-2"
      : "border-line text-ink-2";
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[0.7rem] leading-none tracking-wide ${styles}`}>
      {children}
    </span>
  );
}

const statusDot: Record<ProjectStatus, string> = {
  Published: "bg-emerald-500",
  "In development": "bg-amber-500",
  "In progress": "bg-amber-500",
  "Client collaboration": "bg-sky-500",
};

export function StatusBadge({ status, tone = "default" }: { status: ProjectStatus; tone?: "default" | "inverse" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] ${
        tone === "inverse" ? "text-on-ink" : "text-ink"
      }`}
    >
      <span aria-hidden className={`size-1.5 rounded-full ${statusDot[status]}`} />
      {status}
    </span>
  );
}

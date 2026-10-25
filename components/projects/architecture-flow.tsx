import type { ArchitectureDiagram } from "@/types/project";

export function ArchitectureFlow({ diagram }: { diagram: ArchitectureDiagram }) {
  return (
    <figure className="rounded-2xl border border-line bg-raised p-4 md:p-6">
      <ol className="grid gap-3 md:grid-flow-col md:auto-cols-fr md:gap-0">
        {diagram.nodes.map((node, index) => (
          <li key={node.label} className="relative flex md:flex-col">
            <div className="flex-1 rounded-xl border border-line bg-paper p-4 md:mr-6">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-accent">
                Step {index + 1}
              </p>
              <p className="mt-2 font-semibold tracking-tight">{node.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-2">{node.detail}</p>
            </div>
            {index < diagram.nodes.length - 1 && (
              <span
                aria-hidden
                className="absolute -bottom-3 left-6 h-3 w-px bg-ink-3 md:bottom-auto md:left-auto md:right-1 md:top-1/2 md:h-px md:w-4"
              />
            )}
          </li>
        ))}
      </ol>
      <figcaption className="mt-4 text-sm text-ink-3">{diagram.caption}</figcaption>
    </figure>
  );
}

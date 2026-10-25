import { principles } from "@/lib/content";

export function Principles() {
  return (
    <ol className="border-t border-line">
      {principles.map((principle, index) => (
        <li key={principle.title} className="reveal grid gap-2 border-b border-line py-6 md:grid-cols-12 md:gap-8">
          <span className="font-mono text-sm text-accent md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="text-xl font-semibold tracking-tight md:col-span-5">{principle.title}</h3>
          <p className="leading-relaxed text-ink-2 md:col-span-6">{principle.body}</p>
        </li>
      ))}
    </ol>
  );
}

import type { ReactNode } from "react";

export function CaseStudySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="reveal scroll-mt-24 border-t border-line py-10 md:py-12">
      <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      <div className="mt-5 text-base leading-relaxed text-ink-2 md:text-[1.0625rem]">{children}</div>
    </section>
  );
}

export function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="prose-body max-w-2xl">
      {items.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}

export function BulletList({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return (
    <ul className={`grid gap-x-8 ${columns ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 border-b border-line py-3 text-ink">
          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

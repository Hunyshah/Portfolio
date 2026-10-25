import type { ReactNode } from "react";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  id,
  action,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  action?: ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-line pt-6 md:grid-cols-12 md:gap-8">
      <p className="eyebrow md:col-span-3">
        {index && <span className="text-accent">{index} — </span>}
        {eyebrow}
      </p>
      <div className="md:col-span-9">
        <h2 id={id} className="display max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-2 md:text-lg">
            {description}
          </p>
        )}
        {action && <div className="mt-6">{action}</div>}
      </div>
    </div>
  );
}

import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="container-page pb-12 pt-14 md:pb-16 md:pt-20">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display mt-5 max-w-4xl text-[clamp(2.5rem,6vw,4.75rem)]">{title}</h1>
      {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">{description}</p>}
      {children}
    </header>
  );
}

import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { StatusBadge } from "@/components/ui/tag";
import { getProject } from "@/lib/projects";
import { heroStack } from "@/lib/skills";
import { site } from "@/lib/site";

export function Hero() {
  const featured = getProject("framelab-pro")!;

  return (
    <section aria-labelledby="hero-title" className="container-page pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="eyebrow flex items-center gap-2">
            <span aria-hidden className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {site.availability}
          </p>
          <p className="mt-8 text-sm font-medium text-ink-2">
            {site.name} · {site.title}
          </p>
          <h1 id="hero-title" className="display mt-3 text-[clamp(2.6rem,6.4vw,5.4rem)]">
            Building web and mobile products that solve{" "}
            <span className="serif-accent text-accent">real problems.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">{site.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/projects">View projects</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact me
            </ButtonLink>
            {site.cv && (
              <a
                href={site.cv}
                download
                className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-ink-2 hover:text-ink"
              >
                <Download aria-hidden className="size-4" /> Download CV
              </a>
            )}
          </div>
        </div>

        <aside aria-label="Featured project" className="lg:col-span-5 lg:pt-6">
          <div className="relative overflow-hidden rounded-3xl bg-ink-panel p-6 text-on-ink md:p-7">
            <div className="flex items-center justify-between">
              <StatusBadge status={featured.status} tone="inverse" />
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-on-ink-2">Featured</span>
            </div>
            <p className="display mt-10 text-4xl md:text-5xl">{featured.title}</p>
            <p className="mt-3 max-w-sm text-on-ink-2">{featured.tagline}</p>
            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10 text-sm">
              {featured.highlights.map((item) => (
                <li key={item} className="flex items-center justify-between gap-4 py-3">
                  <span>{item}</span>
                  <span aria-hidden className="font-mono text-xs text-on-ink-2">●</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-xs text-on-ink-2">{featured.technologies.join(" · ")}</p>
              <Link
                href={`/projects/${featured.slug}`}
                className="group inline-flex min-h-10 items-center gap-1.5 rounded-full bg-on-ink px-4 text-sm font-medium text-ink-panel transition-colors hover:bg-accent hover:text-on-accent"
              >
                Case study
                <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-16 border-t border-line pt-6">
        <p className="sr-only">Core technologies</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-ink-2">
          {heroStack.map((tech) => (
            <li key={tech} className="flex items-center gap-6">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

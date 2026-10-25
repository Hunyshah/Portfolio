import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col justify-center py-20">
      <p className="eyebrow">404</p>
      <h1 className="display mt-5 max-w-2xl text-[clamp(2.5rem,6vw,4.5rem)]">
        This page <span className="serif-accent text-accent">doesn’t exist.</span>
      </h1>
      <p className="mt-5 max-w-lg text-lg text-ink-2">The link may be outdated. The work is still here, though.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">
          View projects
        </ButtonLink>
      </div>
    </section>
  );
}

import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section aria-labelledby="cta-title" className="container-page py-20 md:py-28">
      <div className="reveal relative overflow-hidden rounded-3xl bg-accent px-6 py-14 text-on-accent md:px-14 md:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.1em] opacity-80">{site.availability}</p>
        <h2 id="cta-title" className="display mt-5 max-w-3xl text-[clamp(2.25rem,5vw,4rem)]">
          Have a product to build or an app to <span className="serif-accent">maintain?</span>
        </h2>
        <p className="mt-5 max-w-xl text-lg opacity-90">
          Tell me what you’re working on — web, mobile, backend or an AI feature — and I’ll reply with how I’d approach it.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/contact" className="!bg-on-accent !text-accent hover:!bg-ink hover:!text-paper">
            Start a conversation
          </ButtonLink>
          <ButtonLink href="/projects" variant="secondary" className="!border-on-accent/40 !text-on-accent hover:!border-on-accent">
            See the work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHeader } from "@/components/ui/page-header";
import { pageMetadata } from "@/lib/metadata";
import { contactLinks, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Syed Bilal Haider about remote developer roles, freelance web and mobile projects, or AI integration work.",
  path: "/contact",
});

const topics = [
  "Remote developer roles",
  "Freelance web or mobile projects",
  "Maintaining an existing React or React Native app",
  "Adding AI features — LLMs, RAG, MCP tools",
];

export default function ContactPage() {
  const primary = contactLinks[0];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let’s talk about <span className="serif-accent text-accent">what you’re building.</span>
          </>
        }
        description={`${site.availability}. A short note about the product, timeline and stack is the best place to start.`}
      />

      <section aria-label="Contact options" className="container-page pb-24">
        <div className="grid gap-12 border-t border-line pt-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="sr-only">Send a message</h2>
            <ContactForm fallbackHref={primary.href} />
          </div>

          <aside className="space-y-10 lg:col-span-5 lg:pl-6">
            <div>
              <h2 className="eyebrow">Direct</h2>
              <ul className="mt-4 border-t border-line">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex min-h-16 items-center justify-between gap-4 border-b border-line py-4"
                      {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      <span>
                        <span className="block text-sm text-ink-3">{link.label}</span>
                        <span className="block font-medium group-hover:text-accent">{link.value}</span>
                      </span>
                      <ArrowUpRight aria-hidden className="size-5 text-ink-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow">Good reasons to get in touch</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-2">
                {topics.map((topic) => (
                  <li key={topic} className="flex gap-3">
                    <span aria-hidden className="text-accent">→</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

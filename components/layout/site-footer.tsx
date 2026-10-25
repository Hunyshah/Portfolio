import Link from "next/link";
import { navigation } from "@/lib/navigation";
import { contactLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="container-page grid gap-10 py-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="text-lg font-semibold tracking-tight">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-2">
            {site.title}. TypeScript across web, mobile and backend — with AI where it earns its place.
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="eyebrow">Site</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink-2 hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="eyebrow">Elsewhere</p>
          <ul className="mt-3 space-y-2 text-sm">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-ink-2 hover:text-ink"
                  {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-page flex flex-col gap-2 border-t border-line py-6 text-xs text-ink-3 sm:flex-row sm:justify-between">
        <p>© {site.name}. All rights reserved.</p>
        <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/navigation";
import { site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const menuId = useId();
  const reduceMotion = useReducedMotion();

  // Close the mobile menu after navigation.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md supports-[backdrop-filter]:bg-paper/75">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-full bg-ink font-mono text-[0.65rem] font-semibold tracking-wider text-paper transition-colors group-hover:bg-accent group-hover:text-on-accent"
          >
            {site.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative rounded-full px-4 py-2 text-sm text-ink-2 transition-colors hover:text-ink aria-[current=page]:text-ink"
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span aria-hidden className="absolute inset-x-4 -bottom-[13px] h-px bg-ink" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex min-h-10 items-center rounded-full bg-ink px-4 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-on-accent"
          >
            Let’s talk
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 grid size-11 place-items-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-16 h-[calc(100dvh-4rem)] border-t border-line bg-paper md:hidden"
          >
            <nav aria-label="Mobile" className="container-page py-6">
              <ul className="divide-y divide-line border-y border-line">
                {[{ label: "Home", href: "/" }, ...navigation].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="flex items-center justify-between py-4 text-2xl font-semibold tracking-tight aria-[current=page]:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="eyebrow mt-8">{site.availability}</p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

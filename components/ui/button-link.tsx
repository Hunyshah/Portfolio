import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-[background-color,color,border-color,transform] duration-200 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-accent hover:text-on-accent",
  secondary: "border border-line bg-transparent text-ink hover:border-ink",
  ghost: "px-0 text-ink underline-offset-4 hover:text-accent hover:underline",
};

interface Props extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: Variant;
  external?: boolean;
  children: ReactNode;
  className?: string;
}

export function ButtonLink({ variant = "primary", external, children, className = "", ...props }: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a
        href={String(props.href)}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link {...props} className={classes}>
      {children}
    </Link>
  );
}

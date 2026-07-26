import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  download?: boolean;
  openInNewTab?: boolean;
  className?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-[var(--accent)] text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/15 hover:shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--accent)_35%,transparent)] active:bg-[var(--accent)]/20 motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0",
  secondary:
    "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--foreground)]/70 hover:bg-[var(--surface)] active:border-[var(--foreground)] active:bg-[var(--surface)] motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0",
};

export function Button({
  href,
  children,
  variant = "primary",
  download,
  openInNewTab,
  className,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
}: ButtonProps) {
  return (
    <Link
      href={href}
      download={download}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "inline-flex max-w-full min-w-0 items-center justify-center border px-5 py-2.5 text-sm tracking-wide transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] motion-reduce:transition-[color,background-color,border-color,box-shadow]",
        variantStyles[variant],
        className
      )}
    >
      {children}
      {openInNewTab ? (
        <span className="sr-only"> (opens in new tab)</span>
      ) : null}
    </Link>
  );
}

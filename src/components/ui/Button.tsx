import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  download?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-[var(--accent)] text-[var(--foreground)] hover:bg-[var(--accent)]/10",
  secondary:
    "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--foreground)] hover:bg-[var(--surface)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  download,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      download={download}
      className={cn(
        "inline-flex items-center justify-center border px-5 py-2.5 text-sm tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}

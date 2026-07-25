import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300",
        className
      )}
    >
      {children}
    </span>
  );
}
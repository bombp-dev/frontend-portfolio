import { cn } from "@/lib/cn";

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  children: React.ReactNode;
}

export function Section({
  id,
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-32", className)}
      {...props}
    >
      {children}
    </section>
  );
}

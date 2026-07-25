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
      className={cn("py-16 md:py-24 lg:py-32", className)}
      {...props}
    >
      {children}
    </section>
  );
}

import { cn } from "@/lib/cn";

type HeadingLevel = "h1" | "h2";
type HeadingSize = "default" | "hero";

interface HeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  as?: HeadingLevel;
  size?: HeadingSize;
  className?: string;
}

const sizeStyles: Record<HeadingSize, string> = {
  default: "text-3xl font-semibold tracking-tight md:text-5xl",
  hero: "text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl",
};

export function Heading({
  id,
  title,
  subtitle,
  as: Component = "h2",
  size = "default",
  className,
}: HeadingProps) {
  return (
    <div className={cn("min-w-0 space-y-4", className)}>
      <Component
        id={id}
        className={cn(sizeStyles[size], "max-w-full break-words [overflow-wrap:anywhere]")}
      >
        {title}
      </Component>

      {subtitle && (
        <p className="max-w-2xl text-base leading-7 break-words text-[var(--secondary)] [overflow-wrap:anywhere] md:text-lg md:leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}

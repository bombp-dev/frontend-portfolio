import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { heroContent } from "@/data/hero";

export function Hero() {
  return (
    <Section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[90vh] items-center overflow-hidden py-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 md:block"
      >
        <div className="absolute right-[18%] top-1/2 h-40 w-40 -translate-y-1/2 border border-[var(--border)] opacity-30" />
        <div className="absolute right-[8%] top-[30%] h-24 w-24 border border-[var(--border)] opacity-20" />
        <div className="absolute bottom-[18%] right-[28%] h-20 border-l border-[var(--border)] opacity-30" />
      </div>

      <Container>
        <div className="relative max-w-3xl text-left">
          <div className="flex flex-col items-start gap-8 md:gap-10">
            <Badge className="border-[var(--border)] text-[var(--secondary)]">
              {heroContent.badge}
            </Badge>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--secondary)]">
              {heroContent.eyebrow}
            </p>

            <Heading
              id="hero-heading"
              as="h1"
              size="hero"
              className="whitespace-pre-line"
              title={heroContent.title}
              subtitle={heroContent.description}
            />

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Button
                href={heroContent.primaryButton.href}
                variant="primary"
                className="w-full sm:w-auto"
              >
                {heroContent.primaryButton.label}
              </Button>
              <Button
                href={heroContent.secondaryButton.href}
                variant="secondary"
                download={heroContent.secondaryButton.download}
                className="w-full sm:w-auto"
              >
                {heroContent.secondaryButton.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

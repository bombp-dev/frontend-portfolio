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
      className="relative flex min-h-[85vh] items-center overflow-hidden py-16 sm:min-h-[88vh] sm:py-20 md:min-h-[90vh] md:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden md:inset-y-0 md:left-auto md:w-2/5 lg:w-1/3"
      >
        <div className="absolute right-5 top-[22%] h-14 w-14 border border-[var(--border)] opacity-[0.14] sm:right-8 sm:h-16 sm:w-16 md:right-[18%] md:top-1/2 md:h-40 md:w-40 md:-translate-y-1/2 md:opacity-[0.26] lg:opacity-30" />
        <div className="absolute right-3 top-[12%] h-8 w-8 border border-[var(--border)] opacity-10 sm:right-6 md:right-[8%] md:top-[30%] md:h-24 md:w-24 md:opacity-20" />
        <div className="absolute bottom-[20%] right-6 h-px w-10 bg-[var(--border)] opacity-20 md:bottom-[18%] md:right-[28%] md:h-20 md:w-px md:bg-transparent md:opacity-30 md:border-l md:border-[var(--border)]" />
        <div className="absolute bottom-[28%] right-10 hidden h-px w-16 bg-[var(--accent)] opacity-20 md:block lg:w-20 lg:opacity-25" />
      </div>

      <Container>
        <div className="relative min-w-0 max-w-3xl text-left">
          <div className="flex flex-col items-start gap-6 sm:gap-7 md:gap-9 lg:gap-10">
            <Badge className="max-w-full whitespace-normal border-[var(--border)] text-[var(--secondary)]">
              {heroContent.badge}
            </Badge>

            <p className="max-w-full text-xs font-medium uppercase tracking-[0.2em] text-[var(--secondary)] sm:tracking-[0.18em]">
              {heroContent.eyebrow}
            </p>

            <Heading
              id="hero-heading"
              as="h1"
              size="hero"
              className="space-y-5 whitespace-pre-line md:space-y-6"
              title={heroContent.title}
              subtitle={heroContent.description}
            />

            <div className="flex w-full max-w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-3 sm:pt-2 md:items-center md:gap-4 md:pt-3">
              <nav aria-label="Hero actions" className="contents">
              <Button
                href={heroContent.primaryButton.href}
                variant="primary"
                className="w-full min-w-0 sm:w-auto sm:max-w-full"
              >
                {heroContent.primaryButton.label}
              </Button>
              <Button
                href={heroContent.secondaryButton.href}
                variant="secondary"
                download={heroContent.secondaryButton.download}
                openInNewTab={heroContent.secondaryButton.openInNewTab}
                className="w-full min-w-0 sm:w-auto sm:max-w-full"
              >
                {heroContent.secondaryButton.label}
              </Button>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";

export function About() {
  return (
    <Section id="about" aria-labelledby="about-heading">
      <Container>
        <div className="max-w-[700px] space-y-6 text-left md:space-y-8">
          <Heading
            id="about-heading"
            as="h2"
            title="About Me"
            subtitle="Frontend Developer with experience building dashboards, business systems, and responsive web applications."
          />

          <p className="text-base leading-7 text-[var(--secondary)] md:text-lg md:leading-8">
            I enjoy transforming business requirements into clean, maintainable
            and user-friendly interfaces using React, Next.js and TypeScript.
          </p>
        </div>
      </Container>
    </Section>
  );
}

import { ExperienceItem } from "@/components/experience/ExperienceItem";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-heading">
      <Container>
        <div className="min-w-0 space-y-8 md:space-y-10">
          <Heading
            id="experience-heading"
            as="h2"
            title="Experience"
            subtitle="Professional experience and selected client work."
          />

          <ol className="flex list-none flex-col gap-10 p-0 md:gap-12">
            {experiences.map((experience) => (
              <li key={`${experience.company}-${experience.period}`}>
                <ExperienceItem experience={experience} />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

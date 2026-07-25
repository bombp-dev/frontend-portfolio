import { ExperienceItem } from "@/components/experience/ExperienceItem";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-heading">
      <Container>
        <div className="space-y-8 md:space-y-10">
          <Heading
            id="experience-heading"
            as="h2"
            title="Experience"
            subtitle="Professional experience and selected client work."
          />

          <div className="flex flex-col gap-10 md:gap-12">
            {experiences.map((experience) => (
              <ExperienceItem
                key={`${experience.company}-${experience.period}`}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

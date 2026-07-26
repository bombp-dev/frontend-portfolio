import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { skills } from "@/data/skills";

const skillCategories = [...new Set(skills.map((skill) => skill.category))];

function skillCategoryId(category: string) {
  return `skills-${category.toLowerCase().replace(/\s+/g, "-")}-heading`;
}

export function Skills() {
  return (
    <Section id="skills" aria-labelledby="skills-heading">
      <Container>
        <div className="max-w-3xl min-w-0 space-y-10 text-left md:space-y-14">
          <Heading id="skills-heading" as="h2" title="Skills" />

          <div className="space-y-8 md:space-y-10">
            {skillCategories.map((category) => {
              const headingId = skillCategoryId(category);

              return (
                <section
                  key={category}
                  aria-labelledby={headingId}
                  className="space-y-4"
                >
                  <h3
                    id={headingId}
                    className="text-sm font-medium tracking-wide text-[var(--foreground)]"
                  >
                    {category}
                  </h3>
                  <ul className="flex flex-wrap gap-3" role="list">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill) => (
                        <li
                          key={skill.name}
                          className="max-w-full border border-[var(--border)] px-3 py-2 text-sm break-words text-[var(--secondary)]"
                        >
                          {skill.name}
                        </li>
                      ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

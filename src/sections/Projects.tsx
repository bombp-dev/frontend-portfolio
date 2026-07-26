import { ProjectCard } from "@/components/project/ProjectCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <Container>
        <div className="min-w-0 space-y-8 md:space-y-10">
          <Heading
            id="projects-heading"
            as="h2"
            title="Projects"
            subtitle="Selected projects and business systems I have worked on."
          />

          <ul
            className="grid min-w-0 list-none gap-5 p-0 sm:gap-6 md:grid-cols-2 md:gap-6"
            role="list"
          >
            {projects.map((project) => (
              <li key={project.id} className="min-w-0">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

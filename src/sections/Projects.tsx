import { ProjectCard } from "@/components/project/ProjectCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <Container>
        <div className="space-y-8 md:space-y-10">
          <Heading
            id="projects-heading"
            as="h2"
            title="Projects"
            subtitle="Selected projects and business systems I have worked on."
          />

          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

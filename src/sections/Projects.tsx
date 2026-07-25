import { ProjectCard } from "@/components/project/ProjectCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <Container>
        <div className="space-y-12 md:space-y-16">
          <Heading
            id="projects-heading"
            as="h2"
            title="Projects"
            subtitle="Selected projects I&apos;ve worked on."
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

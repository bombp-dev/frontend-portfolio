import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/projects";

import { ProjectTech } from "./ProjectTech";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const links = [
    { label: "View Demo", href: project.demoUrl, variant: "primary" as const },
    { label: "GitHub", href: project.githubUrl, variant: "secondary" as const },
  ].filter((link) => link.href);

  return (
    <article className="flex h-full flex-col gap-8 border border-[var(--border)] p-6 transition-[transform,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-[var(--secondary)] motion-reduce:transform-none motion-reduce:transition-none md:gap-10 md:p-8">
      <header className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-6">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--secondary)]">
            {project.role}
          </p>
          <h3 className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
            {project.title}
          </h3>
        </div>
        <span className="border border-[var(--border)] px-3 py-1.5 text-xs font-medium tracking-wide text-[var(--secondary)]">
          {project.status}
        </span>
      </header>

      <p className="max-w-xl text-base leading-7 text-[var(--secondary)] md:text-[1.0625rem] md:leading-8">
        {project.description}
      </p>

      <ProjectTech technologies={project.technologies} />

      {links.length > 0 && (
        <nav aria-label={`Links for ${project.title}`} className="mt-auto flex flex-wrap gap-3">
          {links.map((link) => (
            <Button key={link.label} href={link.href} variant={link.variant}>
              {link.label}
            </Button>
          ))}
        </nav>
      )}
    </article>
  );
}

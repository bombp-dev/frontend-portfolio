import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types/project";

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
        <div className="space-y-4">
          {project.featured && (
            <Badge className="rounded-none border-[var(--border)] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-[var(--secondary)]">
              Featured
            </Badge>
          )}

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
              {project.title}
            </h3>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--secondary)]">
              {project.role}
            </p>
          </div>

          {(project.company || project.year) && (
            <dl className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--secondary)]">
              {project.company && (
                <div>
                  <dt className="sr-only">Company</dt>
                  <dd>{project.company}</dd>
                </div>
              )}
              {project.year && (
                <div>
                  <dt className="sr-only">Year</dt>
                  <dd>{project.year}</dd>
                </div>
              )}
            </dl>
          )}
        </div>
        <Badge className="rounded-none border-[var(--border)] px-3 py-1.5 text-xs font-medium tracking-wide text-[var(--secondary)]">
          {project.status}
        </Badge>
      </header>

      <p className="max-w-xl text-base leading-7 text-[var(--secondary)] md:text-[1.0625rem] md:leading-8">
        {project.description}
      </p>

      <ProjectTech technologies={project.technologies} />

      <section
        aria-labelledby={`${project.id}-responsibilities`}
        className="space-y-3 border-t border-[var(--border)] pt-6"
      >
        <h4
          id={`${project.id}-responsibilities`}
          className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--secondary)]"
        >
          Responsibilities
        </h4>
        <ul className="space-y-2 text-sm leading-6 text-[var(--secondary)]">
          {project.responsibilities.map((responsibility) => (
            <li key={responsibility} className="flex gap-3">
              <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-[var(--border)]" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </section>

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

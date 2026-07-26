import { ProjectTech } from "@/components/project/ProjectTech";
import type { Experience } from "@/types/experience";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const responsibilitiesId = `${experience.company}-${experience.role}-responsibilities`;
  const titleId = `${experience.company}-${experience.role}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="border-l border-[var(--border)] py-1 pl-5 sm:pl-6 md:py-2 md:pl-8"
    >
      <div className="max-w-3xl space-y-6 md:space-y-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-x-6 sm:gap-y-2">
          <div className="min-w-0 flex-1 space-y-2">
            <h3
              id={titleId}
              className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl"
            >
              {experience.role}
            </h3>
            <p className="text-sm leading-6 text-[var(--secondary)]">{experience.company}</p>
          </div>

          <p className="w-full shrink-0 text-sm tabular-nums leading-6 tracking-wide text-[var(--secondary)] sm:w-auto sm:text-right">
            {experience.period}
          </p>
        </header>

        <p className="max-w-xl text-base leading-7 text-[var(--secondary)] md:text-[1.0625rem] md:leading-8">
          {experience.summary}
        </p>

        <section
          aria-labelledby={responsibilitiesId}
          className="space-y-3 border-t border-[var(--border)] pt-6 md:pt-8"
        >
          <h4
            id={responsibilitiesId}
            className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--secondary)]"
          >
            Responsibilities
          </h4>
          <ul className="space-y-2.5 text-sm leading-6 text-[var(--secondary)] md:space-y-3">
            {experience.responsibilities.map((responsibility) => (
              <li key={responsibility} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-3 h-px w-3 shrink-0 bg-[var(--border)]"
                />
                <span className="min-w-0">{responsibility}</span>
              </li>
            ))}
          </ul>
        </section>

        <ProjectTech technologies={experience.technologies} />
      </div>
    </article>
  );
}

import { ProjectTech } from "@/components/project/ProjectTech";
import type { Experience } from "@/types/experience";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const responsibilitiesId = `${experience.company}-${experience.role}-responsibilities`;

  return (
    <article className="border-l border-[var(--border)] py-1 pl-5 sm:pl-6 md:py-2 md:pl-8">
      <div className="max-w-3xl space-y-6 md:space-y-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
              {experience.role}
            </h3>
            <p className="text-sm leading-6 text-[var(--secondary)]">{experience.company}</p>
          </div>

          <p className="shrink-0 text-sm tabular-nums leading-6 tracking-wide text-[var(--secondary)] sm:text-right">
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
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </section>

        <ProjectTech technologies={experience.technologies} />
      </div>
    </article>
  );
}

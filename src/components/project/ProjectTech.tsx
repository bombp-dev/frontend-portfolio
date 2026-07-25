interface ProjectTechProps {
  technologies: readonly string[];
}

export function ProjectTech({ technologies }: ProjectTechProps) {
  return (
    <ul aria-label="Technologies" className="flex flex-wrap gap-2" role="list">
      {technologies.map((technology) => (
        <li
          key={technology}
          className="border border-[var(--border)] px-3 py-1.5 text-xs font-medium tracking-wide text-[var(--secondary)]"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}

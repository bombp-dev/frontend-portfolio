export type SkillCategory = "Frontend" | "Backend" | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "REST API", category: "Backend" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "VS Code", category: "Tools" },
];

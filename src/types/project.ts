export type ProjectStatus = "Completed" | "In Progress" | "Archived";

export interface Project {
  id: string;
  title: string;
  description: string;
  responsibilities: readonly string[];
  technologies: readonly string[];
  status: ProjectStatus;
  featured: boolean;
  demoUrl: string;
  githubUrl: string;
  year: number | null;
  role: string;
  company: string | null;
}

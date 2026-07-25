export type ProjectStatus = "Completed";

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  status: ProjectStatus;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "air-repair-platform",
    title: "Air Repair Platform",
    description:
      "Developed and maintained a responsive business platform for air-conditioner repair services.",
    role: "Frontend Developer",
    technologies: ["React", "Next.js", "TypeScript", "REST API"],
    status: "Completed",
    demoUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "ai-news-dashboard",
    title: "AI News Dashboard",
    description:
      "Built an AI-powered dashboard for managing and reviewing news content.",
    role: "Frontend Developer",
    technologies: ["React", "Next.js", "TypeScript"],
    status: "Completed",
    demoUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "digital-profile-card",
    title: "Digital Profile Card",
    description:
      "Created digital business profile pages accessible via QR Code and NFC.",
    role: "Frontend Developer",
    technologies: ["Next.js", "TypeScript", "Responsive Design"],
    status: "Completed",
    demoUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: "amulet-dashboard",
    title: "Amulet Dashboard",
    description:
      "Developed internal dashboard features for inventory, sales and management.",
    role: "Frontend Developer",
    technologies: ["React", "REST API", "Dashboard UI"],
    status: "Completed",
    demoUrl: "",
    githubUrl: "",
    featured: false,
  },
];

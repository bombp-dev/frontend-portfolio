import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "air-repair-platform",
    title: "Air Repair Platform",
    description:
      "A responsive service-management platform for air-conditioner repair requests, technician workflows, and customer updates.",
    responsibilities: [
      "Built responsive request and service-management interfaces with React and Next.js.",
      "Implemented form validation, loading states, and REST API-driven frontend workflows.",
      "Maintained reusable UI patterns across operational screens.",
    ],
    role: "Frontend Developer",
    technologies: ["React", "Next.js", "TypeScript", "REST API"],
    status: "Completed",
    demoUrl: "",
    githubUrl: "",
    featured: true,
    year: 2024,
    company: "Confidential Client",
  },
  {
    id: "ai-news-dashboard",
    title: "AI News Dashboard",
    description:
      "An AI-powered dashboard for reviewing, organizing, and managing news content in a focused editorial workflow.",
    responsibilities: [
      "Developed responsive dashboard layouts for content review and management.",
      "Created filter, search, and content-state interfaces for editorial workflows.",
      "Integrated frontend views with existing REST API endpoints.",
    ],
    role: "Frontend Developer",
    technologies: ["React", "Next.js", "TypeScript"],
    status: "Completed",
    demoUrl: "",
    githubUrl: "",
    featured: true,
    year: 2025,
    company: "Confidential Client",
  },
  {
    id: "digital-profile-card",
    title: "Digital Profile Card",
    description:
      "A digital business profile experience that makes contact details and professional information available through QR Code and NFC entry points.",
    responsibilities: [
      "Built responsive public profile pages optimized for mobile scanning flows.",
      "Created reusable profile and contact-information UI components.",
      "Implemented polished layouts for QR Code and NFC entry experiences.",
    ],
    role: "Frontend Developer",
    technologies: ["Next.js", "TypeScript", "Responsive Design"],
    status: "Completed",
    demoUrl: "",
    githubUrl: "",
    featured: false,
    year: 2024,
    company: "Confidential Client",
  },
  {
    id: "amulet-dashboard",
    title: "Amulet Dashboard",
    description:
      "An internal operations dashboard supporting inventory, sales, and management teams with clear business reporting views.",
    responsibilities: [
      "Developed responsive inventory, sales, and management dashboard screens.",
      "Built reusable data-display, filter, and status-management interface patterns.",
      "Connected frontend dashboard views to REST API data sources.",
    ],
    role: "Frontend Developer",
    technologies: ["React", "REST API", "Dashboard UI"],
    status: "Completed",
    demoUrl: "",
    githubUrl: "",
    featured: false,
    year: 2023,
    company: "Confidential Client",
  },
];

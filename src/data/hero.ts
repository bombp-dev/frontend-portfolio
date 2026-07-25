interface HeroButton {
  label: string;
  href: string;
  download?: boolean;
  openInNewTab?: boolean;
}

interface HeroContent {
  badge: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryButton: HeroButton;
  secondaryButton: HeroButton;
}

export const heroContent: HeroContent = {
  badge: "Open to Frontend Opportunities",
  eyebrow: "Frontend Developer",
  title: `Building modern websites
and business platforms
with React & Next.js.`,
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, and responsive business applications.",
  primaryButton: {
    label: "View Projects →",
    href: "#projects",
  },
  secondaryButton: {
    label: "Download Resume",
    href: "/resume.pdf",
    download: true,
    openInNewTab: true,
  },
};

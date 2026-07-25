import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

const linkClassName =
  "text-sm tracking-wide text-[var(--secondary)] transition-colors duration-200 hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-8 md:py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-[var(--foreground)]">
              {siteConfig.name}
            </p>
            <p className="text-sm text-[var(--secondary)]">Frontend Developer</p>
          </div>

          <nav aria-label="Footer links" className="flex gap-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              GitHub
            </a>
            <a href={`mailto:${siteConfig.email}`} className={linkClassName}>
              Email
            </a>
          </nav>
        </div>

        <p className="mt-6 text-xs text-[var(--secondary)]">
          © {currentYear} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}

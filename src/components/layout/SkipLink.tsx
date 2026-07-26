const skipLinkClassName =
  "fixed left-4 top-4 z-[100] -translate-y-[calc(100%+2rem)] rounded-sm bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-[var(--background)] transition-transform duration-200 focus:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

export function SkipLink() {
  return (
    <a href="#main-content" className={skipLinkClassName}>
      Skip to main content
    </a>
  );
}

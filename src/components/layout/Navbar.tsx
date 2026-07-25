"use client";

import Link from "next/link";
import {
  type ButtonHTMLAttributes,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";

import { Container } from "@/components/layout/Container";
import { navigation } from "@/constants/navigation";
import { cn } from "@/lib/cn";

const SCROLL_THRESHOLD = 8;

const MENU_LABELS = {
  open: "Open navigation menu",
  close: "Close navigation menu",
} as const;

const styles = {
  focusRing:
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
  navLink:
    "text-sm tracking-wide text-[var(--secondary)] transition-colors duration-200 hover:text-[var(--foreground)]",
  resumeButton:
    "inline-flex items-center justify-center border border-[var(--border)] px-4 py-2 text-sm tracking-wide text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--foreground)] hover:bg-[var(--surface)]",
  hamburgerButton:
    "relative flex h-10 w-10 items-center justify-center text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--secondary)] lg:hidden",
  logo:
    "text-sm font-medium tracking-[0.2em] text-[var(--foreground)] transition-colors duration-200 hover:text-[var(--secondary)]",
  mobilePanel:
    "border-t border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md transition-opacity duration-300 ease-in-out",
  mobileMenuGrid:
    "grid transition-[grid-template-rows] duration-300 ease-in-out lg:hidden",
  header:
    "sticky top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-300 ease-in-out",
} as const;

function useScrolled(threshold = SCROLL_THRESHOLD) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setScrolled(window.scrollY > threshold);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, [threshold]);

  return scrolled;
}

function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close, isOpen]);

  return { isOpen, close, toggle };
}

interface AriaExpandedButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-expanded"> {
  expanded: boolean;
  controlsId: string;
  openLabel: string;
  closedLabel: string;
}

function AriaExpandedButton({
  expanded,
  controlsId,
  openLabel,
  closedLabel,
  className,
  children,
  ...props
}: AriaExpandedButtonProps) {
  const label = expanded ? openLabel : closedLabel;

  if (expanded) {
    return (
      <button
        type="button"
        aria-expanded="true"
        aria-controls={controlsId}
        aria-label={label}
        className={className}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-expanded="false"
      aria-controls={controlsId}
      aria-label={label}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}

interface AriaHiddenPanelProps {
  hidden: boolean;
  id: string;
  className?: string;
  label?: string;
  children: ReactNode;
}

function AriaHiddenPanel({
  hidden,
  id,
  className,
  label,
  children,
}: AriaHiddenPanelProps) {
  if (hidden) {
    return (
      <div id={id} aria-hidden="true" inert className={className}>
        {children}
      </div>
    );
  }

  return (
    <div id={id} aria-hidden="false" aria-label={label} className={className}>
      {children}
    </div>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

function NavLink({ href, label, onClick, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(styles.navLink, styles.focusRing, className)}
    >
      {label}
    </Link>
  );
}

interface ResumeButtonProps {
  className?: string;
  onClick?: () => void;
}

function ResumeButton({ className, onClick }: ResumeButtonProps) {
  return (
    <Link
      href="/resume.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cn(styles.resumeButton, styles.focusRing, className)}
    >
      Download Resume
    </Link>
  );
}

interface NavItemsProps {
  itemClassName?: string;
  linkClassName?: string;
  onNavigate?: () => void;
}

function NavItems({ itemClassName, linkClassName, onNavigate }: NavItemsProps) {
  return navigation.map((item) => (
    <li key={item.href} className={itemClassName}>
      <NavLink
        href={item.href}
        label={item.label}
        onClick={onNavigate}
        className={linkClassName}
      />
    </li>
  ));
}

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="flex w-5 flex-col items-center justify-center gap-1.5" aria-hidden="true">
      <span
        className={cn(
          "block h-px w-full bg-current transition-transform duration-300 ease-in-out",
          isOpen && "translate-y-[7px] rotate-45"
        )}
      />
      <span
        className={cn(
          "block h-px w-full bg-current transition-opacity duration-200 ease-in-out",
          isOpen && "opacity-0"
        )}
      />
      <span
        className={cn(
          "block h-px w-full bg-current transition-transform duration-300 ease-in-out",
          isOpen && "-translate-y-[7px] -rotate-45"
        )}
      />
    </span>
  );
}

interface HamburgerButtonProps {
  isOpen: boolean;
  controlsId: string;
  onToggle: () => void;
}

function HamburgerButton({
  isOpen,
  controlsId,
  onToggle,
}: HamburgerButtonProps) {
  return (
    <AriaExpandedButton
      expanded={isOpen}
      controlsId={controlsId}
      openLabel={MENU_LABELS.close}
      closedLabel={MENU_LABELS.open}
      onClick={onToggle}
      className={cn(styles.hamburgerButton, styles.focusRing)}
    >
      <HamburgerIcon isOpen={isOpen} />
    </AriaExpandedButton>
  );
}

interface DesktopNavProps {
  onNavigate?: () => void;
}

function DesktopNav({ onNavigate }: DesktopNavProps) {
  return (
    <div className="hidden items-center gap-5 lg:flex xl:gap-8">
      <ul className="flex items-center gap-5 xl:gap-8">
        <NavItems onNavigate={onNavigate} />
      </ul>
      <ResumeButton />
    </div>
  );
}

interface MobileNavProps {
  id: string;
  isOpen: boolean;
  onNavigate: () => void;
}

function MobileNav({ id, isOpen, onNavigate }: MobileNavProps) {
  return (
    <AriaHiddenPanel
      hidden={!isOpen}
      id={id}
      label="Mobile navigation"
      className={cn(
        styles.mobileMenuGrid,
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      )}
    >
      <div className="overflow-hidden">
        <div
          className={cn(
            styles.mobilePanel,
            isOpen ? "opacity-100" : "opacity-0"
          )}
        >
          <ul className="flex flex-col px-6 py-6">
            <NavItems
              onNavigate={onNavigate}
              itemClassName="border-b border-[var(--border)]"
              linkClassName="block py-4 text-base"
            />
            <li className="pt-6">
              <ResumeButton className="w-full" onClick={onNavigate} />
            </li>
          </ul>
        </div>
      </div>
    </AriaHiddenPanel>
  );
}

export function Navbar() {
  const scrolled = useScrolled();
  const { isOpen, close, toggle } = useMobileMenu();
  const mobileMenuId = useId();

  return (
    <header
      className={cn(
        styles.header,
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav aria-label="Main navigation">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className={cn(styles.logo, styles.focusRing)}>
              CHANCHAI
            </Link>

            <DesktopNav />

            <HamburgerButton
              isOpen={isOpen}
              controlsId={mobileMenuId}
              onToggle={toggle}
            />
          </div>
        </Container>

        <MobileNav id={mobileMenuId} isOpen={isOpen} onNavigate={close} />
      </nav>
    </header>
  );
}

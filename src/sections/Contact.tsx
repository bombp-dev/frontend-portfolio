import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { siteConfig } from "@/config/site";

const phone = "080-007-6409";
const portfolioUrl = "https://bombp.vercel.app";

const contactItems = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    value: siteConfig.email,
    variant: "primary" as const,
  },
  {
    label: "Phone",
    href: `tel:${phone.replace(/[\s-]/g, "")}`,
    value: phone,
    variant: "secondary" as const,
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    value: siteConfig.github,
    variant: "secondary" as const,
  },
  {
    label: "Portfolio",
    href: portfolioUrl,
    value: portfolioUrl,
    variant: "secondary" as const,
  },
];

export function Contact() {
  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <Container>
        <div className="grid min-w-0 gap-8 md:grid-cols-2 md:items-start md:gap-10 lg:gap-16">
          <Heading
            id="contact-heading"
            as="h2"
            title="Contact"
            subtitle="Open to frontend opportunities, collaborations, and project inquiries."
            className="min-w-0"
          />

          <div className="flex min-w-0 flex-col gap-6 md:gap-8">
            <div className="space-y-2">
              <p className="text-base leading-7 text-[var(--foreground)] md:text-lg md:leading-8">
                Interested in working together?
              </p>
              <p className="text-base leading-7 text-[var(--secondary)] md:text-lg md:leading-8">
                Feel free to get in touch.
              </p>
            </div>

            {contactItems.map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--secondary)]">
                  {item.label}
                </p>
                <Button
                  href={item.href}
                  variant={item.variant}
                  className="w-full max-w-full justify-start break-all"
                >
                  {item.value}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

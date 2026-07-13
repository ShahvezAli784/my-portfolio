import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: `Get in touch with ${site.name}.`,
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "GitHub", value: "@ShahvezAli784", href: site.github, icon: Github },
  { label: "LinkedIn", value: "in/shahvez-memon", href: site.linkedin, icon: Linkedin },
];

export default function ContactPage() {
  return (
    <div className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h1 className="mt-3 max-w-xl font-display text-fluid-h1 font-semibold leading-[1.05] text-ink">
            Let&apos;s talk about what you&apos;re building.
          </h1>
        </RevealOnScroll>

        <div className="mt-14 grid gap-16 md:grid-cols-[1fr_1.3fr]">
          <RevealOnScroll className="space-y-6">
            {channels.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                target={c.label === "Email" ? undefined : "_blank"}
                className="group flex items-center gap-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent">
                  <c.icon className="h-4 w-4 text-muted group-hover:text-accent" />
                </span>
                <span>
                  <span className="block font-mono text-xs uppercase tracking-wider text-muted">
                    {c.label}
                  </span>
                  <span className="block text-ink group-hover:text-accent">
                    {c.value}
                  </span>
                </span>
              </Link>
            ))}
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <ContactForm email={site.email} />
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}

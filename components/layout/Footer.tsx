import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-display text-lg text-ink">{site.name}</p>
          <p className="mt-1 max-w-sm text-sm text-muted">{site.role}</p>
        </div>

        <div className="flex gap-6 font-mono text-xs uppercase tracking-wider text-muted">
          <Link href={site.github} target="_blank" className="hover:text-accent">
            GitHub
          </Link>
          <Link href={site.linkedin} target="_blank" className="hover:text-accent">
            LinkedIn
          </Link>
          <Link href="/contact" className="hover:text-accent">
            Contact
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-content px-6 pb-8 font-mono text-[11px] text-muted md:px-10">
        © {new Date().getFullYear()} {site.name}. Built by hand, not from a template.
      </div>
    </footer>
  );
}

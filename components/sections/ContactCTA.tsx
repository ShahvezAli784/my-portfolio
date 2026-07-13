import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ContactCTA() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-10">
      <RevealOnScroll className="mx-auto flex max-w-content flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Get in touch
          </p>
          <h2 className="mt-3 max-w-xl font-display text-fluid-h2 font-semibold leading-[1.1] text-ink">
            Building something worth a second look?
          </h2>
        </div>
        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-sm text-bg transition-transform duration-300 hover:-translate-y-0.5"
        >
          Start a conversation
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </RevealOnScroll>
    </section>
  );
}

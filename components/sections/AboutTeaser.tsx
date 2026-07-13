import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function AboutTeaser() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-10">
      <div className="mx-auto max-w-content grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Field notes
          </p>
          <h2 className="mt-3 font-display text-fluid-h2 font-semibold text-ink">
            Notebooks, not tutorials
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="font-serif text-lg leading-relaxed text-muted">
            Most of what I build starts as a Jupyter notebook and doesn&apos;t
            stop there. A model that only lives in a `.ipynb` file isn&apos;t
            finished — I take it through to a saved artifact, a real interface,
            and something a person who isn&apos;t me could actually use. That
            pattern shows up across a Streamlit calorie predictor, an Oscar
            outcome classifier, and a troubleshooting agent with its own
            decision engine.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-accent"
          >
            Read the full story
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}

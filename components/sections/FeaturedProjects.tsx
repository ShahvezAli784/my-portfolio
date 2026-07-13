import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FeaturedProjects() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-10">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Selected work"
            title="Case studies, not cards"
            description="Each project below is the real repository behind it — problem, approach, and trade-offs, not a screenshot and a badge."
          />
        </RevealOnScroll>

        <div className="mt-14 divide-y divide-border border-t border-border">
          {featuredProjects.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={i * 0.05}>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid gap-4 py-8 transition-colors md:grid-cols-[80px_1fr_auto] md:items-center md:gap-8"
              >
                <span className="font-mono text-sm text-muted">
                  {project.year}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-accent">
                    {project.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-muted">
                    {project.oneLiner}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <Chip key={tech}>{tech}</Chip>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="hidden h-6 w-6 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent md:block" />
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.15}>
          <Link
            href="/projects"
            className="mt-10 inline-flex items-center gap-2 font-mono text-sm text-ink"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}

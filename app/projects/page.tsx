import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
  description: "Engineering case studies, sourced directly from GitHub.",
};

export default function ProjectsPage() {
  return (
    <div className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Everything, unfiltered"
            title="Projects"
            description="Every project here traces back to a real repository — problem, approach, and the trade-offs that came with it."
          />
        </RevealOnScroll>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={i * 0.04}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border p-7 transition-colors duration-300 hover:border-accent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted">
                      {project.year}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-muted">{project.oneLiner}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Chip } from "@/components/ui/Chip";
import { MarginNote } from "@/components/ui/MarginNote";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${site.name}`,
    description: project.oneLiner,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <article className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All projects
          </Link>

          <h1 className="mt-6 max-w-3xl font-display text-fluid-h1 font-semibold leading-[1.05] text-ink">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-xl text-muted">
            {project.oneLiner}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-sm text-bg"
            >
              <Github className="h-4 w-4" />
              View source
            </Link>
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-sm text-ink hover:border-accent hover:text-accent"
              >
                <ExternalLink className="h-4 w-4" />
                Live demo
              </Link>
            )}
          </div>
        </RevealOnScroll>

        {/* Architecture / screenshot placeholder */}
        <RevealOnScroll delay={0.1}>
          <div className="mt-14 flex aspect-[16/8] items-center justify-center rounded-2xl border border-dashed border-border bg-surface">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              Screenshot / architecture diagram placeholder — add real assets to
              /public/images/{project.slug}/
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-16 grid gap-14 md:grid-cols-[1fr_220px]">
          {/* Main narrative column */}
          <div className="space-y-14">
            <RevealOnScroll>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Problem
              </h2>
              <p className="mt-3 max-w-prose font-serif text-lg leading-relaxed text-ink">
                {project.problem}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.05}>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Why I built it
              </h2>
              <p className="mt-3 max-w-prose font-serif text-lg leading-relaxed text-ink">
                {project.why}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Approach
              </h2>
              <ul className="mt-4 space-y-4">
                {project.approach.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-1 font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="max-w-prose text-muted">{step}</p>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Challenges &amp; lessons
              </h2>
              <p className="mt-3 max-w-prose text-muted">
                {project.challenges ??
                  "PLACEHOLDER — the specific challenges and lessons from building this haven't been written up yet. Worth adding: what broke, what surprised you, what you'd do differently."}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Future improvements
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-1 text-muted">
                {project.future.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          {/* Margin rail — signature element */}
          <aside className="space-y-10 md:border-l md:border-border md:pl-8">
            <MarginNote label="Stack">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </MarginNote>
            <MarginNote label="Year">{project.year}</MarginNote>
            <MarginNote label="Repository">
              <Link
                href={project.github}
                target="_blank"
                className="break-all text-accent hover:underline"
              >
                {project.github.replace("https://", "")}
              </Link>
            </MarginNote>
          </aside>
        </div>
      </div>
    </article>
  );
}

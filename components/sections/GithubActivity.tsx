import Link from "next/link";
import { GitCommitHorizontal } from "lucide-react";
import { repos, languageTally, githubUsername } from "@/data/github";
import { formatMonthYear } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function GithubActivity() {
  const maxCount = Math.max(...languageTally.map((l) => l.count));

  return (
    <section className="border-t border-border px-6 py-24 md:px-10">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Version control"
            title="What's actually shipping"
            description="Pulled straight from GitHub — not a curated highlight reel."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mt-10 overflow-hidden rounded-2xl border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/3730A9/${githubUsername}`}
            alt={`${githubUsername}'s GitHub contribution graph`}
            className="w-full dark:invert dark:hue-rotate-180"
            loading="lazy"
          />
        </RevealOnScroll>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <RevealOnScroll>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Primary languages
            </h3>
            <ul className="mt-5 space-y-3">
              {languageTally.map((l) => (
                <li key={l.language}>
                  <div className="flex justify-between font-mono text-xs text-muted">
                    <span>{l.language}</span>
                    <span>{l.count}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${(l.count / maxCount) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Latest activity
            </h3>
            <ul className="mt-5 space-y-4">
              {repos
                .slice()
                .sort((a, b) => (a.pushedAt < b.pushedAt ? 1 : -1))
                .slice(0, 5)
                .map((repo) => (
                  <li key={repo.name}>
                    <Link
                      href={repo.url}
                      target="_blank"
                      className="group flex items-start gap-3"
                    >
                      <GitCommitHorizontal className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>
                        <span className="font-mono text-sm text-ink group-hover:text-accent">
                          {repo.name}
                        </span>
                        <span className="block text-xs text-muted">
                          pushed {formatMonthYear(repo.pushedAt)}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

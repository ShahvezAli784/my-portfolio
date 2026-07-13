import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { site } from "@/data/site";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { experience } from "@/data/experience";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: site.subTagline,
};

const storyBeats: { label: string; text: string }[] = [
  { label: "Why computer science", text: site.about.whyCS },
  { label: "Finding AI", text: site.about.discoveringAI },
  { label: "How I learn", text: site.about.howYouLearn },
  { label: "How I solve problems", text: site.about.howYouSolveProblems },
  { label: "What drives me", text: site.about.motivation },
  { label: "Right now", text: site.about.currentGoals },
];

export default function AboutPage() {
  return (
    <div className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            About
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-fluid-h1 font-semibold leading-[1.05] text-ink">
            The story behind the repos.
          </h1>
        </RevealOnScroll>

        {/* Story — margin-note style running commentary */}
        <div className="mt-16 space-y-14 border-t border-border pt-14">
          {storyBeats.map((beat, i) => (
            <RevealOnScroll key={beat.label} delay={i * 0.03}>
              <div className="grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  {beat.label}
                </p>
                <p className="max-w-prose font-serif text-lg leading-relaxed text-ink">
                  {beat.text}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Education */}
        <div className="mt-24 border-t border-border pt-14">
          <RevealOnScroll>
            <SectionHeading eyebrow="Foundation" title="Education" />
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="mt-8 grid gap-6 md:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="font-display text-xl font-semibold text-ink">
                {education.institution}
              </p>
              <p className="mt-1 text-muted">{education.degree}</p>
              <p className="mt-1 font-mono text-xs text-muted">
                {education.duration}
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Relevant coursework
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {education.coursework.map((c) => (
                    <Chip key={c}>{c}</Chip>
                  ))}
                </div>
              </div>
              {education.achievements.length > 0 && (
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    Achievements
                  </p>
                  <ul className="mt-2 list-inside list-disc text-muted">
                    {education.achievements.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </RevealOnScroll>
        </div>

        {/* Experience & Leadership */}
        {experience.length > 0 && (
          <div className="mt-24 border-t border-border pt-14">
            <RevealOnScroll>
              <SectionHeading
                eyebrow="In practice"
                title="Experience & Leadership"
                description="Hackathons, leadership, and hands-on work outside the classroom."
              />
            </RevealOnScroll>
            <div className="mt-10 space-y-8">
              {experience.map((e, i) => (
                <RevealOnScroll key={e.title} delay={i * 0.05}>
                  <div className="grid gap-2 border-b border-border pb-8 md:grid-cols-[160px_1fr]">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted">
                      {e.duration}
                    </p>
                    <div>
                      <p className="font-display text-lg font-semibold text-ink">
                        {e.title}{" "}
                        <span className="font-serif text-base font-normal text-muted">
                          — {e.organization}
                        </span>
                      </p>
                      <p className="mt-2 text-muted">{e.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="mt-24 border-t border-border pt-14">
            <RevealOnScroll>
              <SectionHeading eyebrow="Verified" title="Certifications" />
            </RevealOnScroll>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {certifications.map((cert) => (
                <RevealOnScroll key={cert.name}>
                  <div className="flex items-start justify-between gap-4 rounded-xl border border-border p-5">
                    <div>
                      <p className="font-display font-semibold text-ink">
                        {cert.name}
                      </p>
                      <p className="mt-1 text-sm text-muted">
                        {cert.organization}
                      </p>
                      <p className="mt-1 font-mono text-xs text-muted">
                        {cert.issueDate}
                      </p>
                    </div>
                    {cert.credentialUrl && (
                      <Link href={cert.credentialUrl} target="_blank">
                        <ExternalLink className="h-4 w-4 text-accent" />
                      </Link>
                    )}
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

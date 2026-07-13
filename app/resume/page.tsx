import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { site } from "@/data/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: `Resume — ${site.name}`,
  description: `Download or preview ${site.name}'s resume.`,
};

export default function ResumePage() {
  return (
    <div className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-content">
        <RevealOnScroll className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Resume
            </p>
            <h1 className="mt-3 font-display text-fluid-h1 font-semibold text-ink">
              {site.name}
            </h1>
            <p className="mt-2 text-muted">{site.role}</p>
          </div>
          <Link
            href={site.resumeFile}
            download
            className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-sm text-bg"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Link>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              src={site.resumeFile}
              title={`${site.name} resume preview`}
              className="h-[85vh] w-full"
            />
          </div>
          <p className="mt-4 font-mono text-xs text-muted">
            Note: replace /public/resume.pdf with your real resume file — this
            path is a placeholder.
          </p>
        </RevealOnScroll>
      </div>
    </div>
  );
}

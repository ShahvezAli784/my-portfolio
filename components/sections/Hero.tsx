"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, FileText } from "lucide-react";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
      <div className="mx-auto max-w-content">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          {site.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-4xl font-display text-fluid-hero font-semibold leading-[1.02] tracking-tight text-ink"
        >
          {site.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-xl font-serif text-lg leading-relaxed text-muted md:text-xl"
        >
          {site.subTagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-sm text-bg transition-transform duration-300 hover:-translate-y-0.5"
          >
            See the work
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-sm text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            <FileText className="h-4 w-4" />
            Resume
          </Link>
          <div className="ml-1 flex items-center gap-3 text-muted">
            <Link
              href={site.github}
              target="_blank"
              aria-label="GitHub"
              className="transition-colors hover:text-accent"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href={site.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="transition-colors hover:text-accent"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Ambient signature mark — a faint notebook rule, not a glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 paper-rule opacity-[0.35]"
      />
    </section>
  );
}

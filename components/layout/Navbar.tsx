"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight text-ink"
        >
          {site.name}
          <span className="ml-2 font-mono text-xs font-normal text-accent">
            /log
          </span>
        </Link>

        <div className="flex items-center gap-1 md:gap-2">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors duration-200 md:px-4 md:text-[13px]",
                  active
                    ? "text-accent"
                    : "text-muted hover:text-ink"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-[13px] h-[2px] bg-accent md:inset-x-4" />
                )}
              </Link>
            );
          })}
          <div className="ml-1 md:ml-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

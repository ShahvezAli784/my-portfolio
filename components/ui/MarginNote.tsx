import { cn } from "@/lib/utils";

/**
 * The site's signature element: a running margin-annotation column,
 * like a note pinned in the margin of a lab notebook. Used beside
 * case-study prose to surface metadata without breaking the reading flow.
 */
export function MarginNote({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("margin-tick pl-5", className)}>
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
        {label}
      </p>
      <div className="mt-1.5 text-sm leading-relaxed text-muted">
        {children}
      </div>
    </div>
  );
}

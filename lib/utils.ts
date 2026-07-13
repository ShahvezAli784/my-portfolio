type ClassValue = string | number | null | undefined | false;

/** Tiny classnames joiner — avoids pulling in a dependency for one function. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Formats a GitHub-style ISO date into "Mon YYYY". */
export function formatMonthYear(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

import { cn } from "@/lib/utils";

export function Chip({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider",
        active
          ? "border-accent bg-accent-soft text-accent"
          : "border-border text-muted"
      )}
    >
      {children}
    </span>
  );
}

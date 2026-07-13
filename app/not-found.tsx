import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        404
      </p>
      <h1 className="mt-3 font-display text-fluid-h2 font-semibold text-ink">
        This page didn&apos;t make it to production.
      </h1>
      <p className="mt-3 max-w-md text-muted">
        Whatever you were looking for isn&apos;t here — but the rest of the
        site is.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-sm text-bg"
      >
        Back home
      </Link>
    </div>
  );
}

import { CheckCircle2 } from "lucide-react";
import type { ProjectMetrics as ProjectMetricsData } from "@/data/projects";

const OVERVIEW_LABELS: Record<string, string> = {
  model: "Model",
  architecture: "Architecture",
  deployment: "Deployment",
  readiness: "Readiness",
};

const PERFORMANCE_LABELS: Record<string, string> = {
  mae: "MAE",
  rmse: "RMSE",
  r2: "R²",
  accuracy: "Accuracy",
  precision: "Precision",
  recall: "Recall",
  f1: "F1 Score",
  rocAuc: "ROC-AUC",
  prAuc: "PR-AUC",
};

export function ProjectMetrics({ metrics }: { metrics: ProjectMetricsData }) {
  const overviewEntries = Object.entries(metrics.overview ?? {}).filter(
    ([, value]) => Boolean(value)
  );
  const performanceEntries = Object.entries(metrics.performance ?? {}).filter(
    ([, value]) => Boolean(value)
  );
  const engineering = metrics.engineering ?? [];

  const hasContent =
    overviewEntries.length > 0 ||
    performanceEntries.length > 0 ||
    engineering.length > 0;

  if (!hasContent) return null;

  return (
    <div className="mt-14 rounded-2xl border border-border bg-surface p-8 md:p-10">
      <div className="space-y-10">
        {overviewEntries.length > 0 && (
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Overview
            </h3>
            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {overviewEntries.map(([key, value]) => (
                <div key={key}>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    {OVERVIEW_LABELS[key] ?? key}
                  </dt>
                  <dd className="mt-1.5 font-display text-sm font-semibold leading-snug text-ink">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {performanceEntries.length > 0 && (
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Performance
            </h3>
            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-4">
              {performanceEntries.map(([key, value]) => (
                <div key={key}>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    {PERFORMANCE_LABELS[key] ?? key}
                  </dt>
                  <dd className="mt-1.5 font-display text-2xl font-semibold text-ink">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {engineering.length > 0 && (
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Engineering
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {engineering.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-muted"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
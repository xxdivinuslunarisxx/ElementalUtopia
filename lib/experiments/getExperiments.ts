import experimentsJson from "./generated";
import type { Experiment, ExperimentStatus } from "./types";

const experiments = experimentsJson as Experiment[];

export function getExperiments(): Experiment[] {
  return [...experiments].sort((a, b) => {
    const order = {
      Complete: 1,
      "In Progress": 2,
      Planned: 3,
    };

    return (
      (order[a.status] ?? 99) -
      (order[b.status] ?? 99)
    );
  });
}

export function getExperiment(
  slug: string
): Experiment | undefined {
  return getExperiments().find(
    (e) => e.id === slug
  );
}

const PLACEHOLDERS = ["tbd", "tbc", "pending", "experiment in progress"];

/** True when a value is real content, not "TBD" / "Pending" / "[Jane to add …]". */
export function hasContent(value: unknown): value is string {
  if (typeof value !== "string") return false;
  const v = value.trim().toLowerCase().replace(/\.+$/, "");
  if (!v) return false;
  if (v.startsWith("[jane to")) return false;
  return !PLACEHOLDERS.includes(v);
}

export function statusLabel(status: ExperimentStatus): string {
  return status === "Complete" ? "Completed" : status;
}

export function statusClassName(status: ExperimentStatus): string {
  const classes: Record<ExperimentStatus, string> = {
    Complete: "statusComplete",
    "In Progress": "statusInProgress",
    Planned: "statusPlanned",
  };
  return classes[status];
}
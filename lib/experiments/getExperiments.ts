import experimentsJson from "./generated";
import type { Experiment } from "./types";

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
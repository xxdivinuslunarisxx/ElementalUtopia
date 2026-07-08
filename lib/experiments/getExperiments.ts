import fs from "fs";
import path from "path";
import type { Experiment } from "./types";

export function getExperiments(): Experiment[] {
  const experimentsDirectory = path.join(
    process.cwd(),
    "content",
    "experiments"
  );

  const files = fs.readdirSync(experimentsDirectory);

  const experiments = files
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const filePath = path.join(
        experimentsDirectory,
        file
      );

      const json = fs.readFileSync(filePath, "utf8");

      return JSON.parse(json) as Experiment;
    });

  const statusOrder = {
    Complete: 1,
    "In Progress": 2,
    Planned: 3
  };

  return experiments.sort(
    (a, b) =>
      statusOrder[a.status] - statusOrder[b.status]
  );
}


export function getExperiment(slug: string): Experiment | undefined {
  const experiments = getExperiments();

  return experiments.find(
    (experiment) => experiment.id === slug
  );
}
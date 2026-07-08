import fs from "fs";
import path from "path";
import type { Experiment } from "./types";

export function getExperiments(): Experiment[] {
  const experimentsDirectory = path.join(
    process.cwd(),
    "content",
    "experiments"
  );

  if (!fs.existsSync(experimentsDirectory)) {
    console.error("Missing:", experimentsDirectory);
    return [];
  }

  console.log(
    "Experiment files:",
    fs.readdirSync(experimentsDirectory)
  );

  const files = fs.readdirSync(experimentsDirectory);

  return files
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const filePath = path.join(
        experimentsDirectory,
        file
      );

      const json = fs.readFileSync(filePath, "utf8");

      return JSON.parse(json) as Experiment;
    })
    .sort((a, b) => {
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
    (experiment) => experiment.id === slug
  );
}
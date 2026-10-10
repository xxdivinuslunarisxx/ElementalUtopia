import type { ReactNode } from "react";
import type { ExperimentIconName } from "@/lib/experiments/types";

const ICONS: Record<ExperimentIconName, ReactNode> = {
  // Sweet spot: bullseye
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  // Extraction time: stopwatch
  timer: (
    <>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 2.5" />
      <path d="M9.5 2.5h5M12 2.5V5" />
    </>
  ),
  // Brew temperature: thermometer
  thermometer: (
    <>
      <path d="M10 13.5V5a2 2 0 1 1 4 0v8.5a4 4 0 1 1-4 0Z" />
      <path d="M12 9v7" />
    </>
  ),
  // Flow rate: drop
  flow: <path d="M12 3.5c3 3.6 5.5 6.6 5.5 10a5.5 5.5 0 0 1-11 0c0-3.4 2.5-6.4 5.5-10Z" />,
  // Pressure: gauge
  gauge: (
    <>
      <path d="M4.5 16a8 8 0 1 1 15 0" />
      <path d="M12 14l4-4" />
      <circle cx="12" cy="14" r="1.2" fill="currentColor" />
    </>
  ),
};

export function ExperimentIcon({ name }: { name?: ExperimentIconName }) {
  if (!name) return null;

  return (
    <span className="experimentIcon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {ICONS[name]}
      </svg>
    </span>
  );
}

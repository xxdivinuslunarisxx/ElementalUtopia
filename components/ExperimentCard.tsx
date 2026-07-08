import Link from "next/link";
import type { Experiment } from "@/lib/experiments/types";

export default function ExperimentCard({
  experiment,
}: {
  experiment: Experiment;
}) {
  return (
    <article className="experimentCard">
      <div className="experimentCardTop">
        <span className="experimentCategory">
          {experiment.type}
        </span>

        <span className="experimentStatus">
          {experiment.status}
        </span>
      </div>

      <h2>{experiment.title}</h2>

      <p className="experimentSummary">
        {experiment.summary}
      </p>

      <div className="experimentFooter">
        <Link href={`/experiments/${experiment.id}`}>
          View Experiment →
        </Link>
      </div>
    </article>
  );
}
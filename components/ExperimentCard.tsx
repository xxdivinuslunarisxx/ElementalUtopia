import Link from "next/link";
import type { Experiment } from "@/lib/experiments/types";
import { ExperimentIcon } from "@/components/ExperimentIcon";
import { statusClassName, statusLabel } from "@/lib/experiments/getExperiments";

export default function ExperimentCard({
  experiment,
}: {
  experiment: Experiment;
}) {
  return (
    <article className="experimentCard">
      <div className="experimentCardTop">
        <div className="experimentCardMeta">
          <ExperimentIcon name={experiment.icon} />
          <span className="experimentCategory">
            {experiment.type}
          </span>
        </div>

        <span className={`experimentStatus ${statusClassName(experiment.status)}`}>
          {statusLabel(experiment.status)}
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

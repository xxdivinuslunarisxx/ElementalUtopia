import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExperimentPhoto, ShotCard } from "@/components/ShotCard";
import {
  getExperiment,
  hasContent,
  statusClassName,
  statusLabel,
} from "../../../lib/experiments/getExperiments";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const experiment = getExperiment(slug);

  if (!experiment) {
    return { title: "Experiment Not Found", robots: { index: false } };
  }

  return {
    title: experiment.title,
    description: experiment.summary,
    alternates: {
      canonical: `https://elementalutopia.com/experiments/${experiment.id}`,
    },
  };
}

function formatLabel(key: string) {
  const text = key.replaceAll("_", " ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const COFFEE_FIELDS = [
  ["name", "Coffee"],
  ["dose", "Dose"],
  ["yield", "Yield"],
  ["ratio", "Ratio"],
] as const;

export default async function ExperimentPage({ params }: Props) {
  const { slug } = await params;

  const experiment = getExperiment(slug);

  if (!experiment) {
    notFound();
  }

  const isPlanned = experiment.status === "Planned";

  const coffeeRows = COFFEE_FIELDS.filter(([key]) =>
    hasContent(experiment.coffee?.[key])
  );

  return (
    <div className="experimentPage">
      <header className="experimentHeader">
        <div className="experimentBadges">
          <span className="experimentType">{experiment.type}</span>

          <span className={`experimentStatus ${statusClassName(experiment.status)}`}>
            {statusLabel(experiment.status)}
          </span>
        </div>

        <h1>{experiment.title}</h1>

        <p>{experiment.summary}</p>
      </header>

      <ExperimentPhoto src={experiment.photo} alt={experiment.photoAlt} />

      {hasContent(experiment.question) && (
        <section>
          <h2>Question</h2>
          <p>{experiment.question}</p>
        </section>
      )}

      {hasContent(experiment.hypothesis) && (
        <section>
          <h2>Hypothesis</h2>
          <p>{experiment.hypothesis}</p>
        </section>
      )}

      {isPlanned ? (
        <section>
          <p className="experimentPlannedNote">
            This experiment is planned. The method, results and conclusions
            will be added once it has been run.
          </p>
        </section>
      ) : (
        <>
          {coffeeRows.length > 0 && (
            <section>
              <h2>Coffee</h2>
              {coffeeRows.map(([key, label]) => (
                <p key={key}>
                  {label}: {experiment.coffee?.[key]}
                </p>
              ))}
            </section>
          )}

          {experiment.shots && experiment.shots.length > 0 && (
            <section>
              <h2>Shots</h2>
              <div className="shotGrid">
                {experiment.shots.map((shot, index) => (
                  <ShotCard key={index} shot={shot} index={index} />
                ))}
              </div>
            </section>
          )}

          {experiment.method && (
            <section>
              <h2>Method</h2>

              {Object.entries(experiment.method).map(([name, test]) => {
                const details = Object.entries(test).filter(
                  ([key, value]) => key !== "notes" && hasContent(value)
                );

                return (
                  <article key={name}>
                    <h3>{name.replaceAll("_", " ")}</h3>

                    {details.map(([key, value]) => (
                      <p key={key}>
                        {formatLabel(key)}: {String(value)}
                      </p>
                    ))}

                    {hasContent(test.notes) && <p>{test.notes}</p>}
                  </article>
                );
              })}
            </section>
          )}

          {hasContent(experiment.results) && (
            <section>
              <h2>Results</h2>
              <p>{experiment.results}</p>
            </section>
          )}

          {hasContent(experiment.conclusion) && (
            <section>
              <h2>Conclusion</h2>
              <p>{experiment.conclusion}</p>
            </section>
          )}

          {experiment.limitations && experiment.limitations.length > 0 && (
            <section>
              <h2>Limitations</h2>
              <ul>
                {experiment.limitations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {hasContent(experiment.next_steps) && (
            <section>
              <h2>Next Steps</h2>
              <p>{experiment.next_steps}</p>
            </section>
          )}
        </>
      )}

      <section className="experimentBack">
        <Link href="/experiments">← Back to Experiments</Link>
      </section>
    </div>
  );
}

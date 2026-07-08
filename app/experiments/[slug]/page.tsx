import { getExperiment } from "../../../lib/experiments/getExperiments";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ExperimentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const experiment = getExperiment(slug);

  if (!experiment) {
    notFound();
  }

  return (
    <main className="experimentPage">

      <header className="experimentHeader">
        <div className="experimentBadges">
          <span className="experimentType">
            {experiment.type}
          </span>

          <span className="experimentStatus">
            {experiment.status}
          </span>
        </div>

        <h1>{experiment.title}</h1>

        <p>
          {experiment.summary}
        </p>
      </header>


      <section>
        <h2>Question</h2>
        <p>{experiment.question}</p>
      </section>


      {experiment.hypothesis && (
        <section>
          <h2>Hypothesis</h2>
          <p>{experiment.hypothesis}</p>
        </section>
      )}


      {experiment.coffee && (
        <section>
          <h2>Coffee</h2>

          {experiment.coffee.name && (
            <p>
              Coffee: {experiment.coffee.name}
            </p>
          )}

          {experiment.coffee.dose && (
            <p>
              Dose: {experiment.coffee.dose}
            </p>
          )}

          {experiment.coffee.yield && (
            <p>
              Yield: {experiment.coffee.yield}
            </p>
          )}

          {experiment.coffee.ratio && (
            <p>
              Ratio: {experiment.coffee.ratio}
            </p>
          )}
        </section>
      )}


      {experiment.method && (
        <section>
          <h2>Method</h2>

          {Object.entries(experiment.method).map(
            ([name, test]) => (
              <article key={name}>
                <h3>
                  {name.replaceAll("_", " ")}
                </h3>

                {test.time && (
                  <p>
                    Time: {test.time}
                  </p>
                )}

                {test.notes && (
                  <p>
                    {test.notes}
                  </p>
                )}
              </article>
            )
          )}

        </section>
      )}


      {experiment.results && (
        <section>
          <h2>Results</h2>
          <p>{experiment.results}</p>
        </section>
      )}


      {experiment.conclusion && (
        <section>
          <h2>Conclusion</h2>
          <p>{experiment.conclusion}</p>
        </section>
      )}


      {experiment.limitations?.length > 0 && (
        <section>
          <h2>Limitations</h2>

          <ul>
            {experiment.limitations.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}


        {experiment.next_steps && (
        <section>
            <h2>Next Steps</h2>
            <p>{experiment.next_steps}</p>

            <br /> <br />

            
            <Link href="/experiments">
            ← Back to Experiments
            </Link>
        </section>
        )}
    </main>
  );
}
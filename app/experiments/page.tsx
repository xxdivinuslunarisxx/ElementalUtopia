import { getExperiments } from "@/lib/experiments/getExperiments";
import ExperimentCard from "@/components/ExperimentCard";

export default function ExperimentsPage() {
  const experiments = getExperiments();

  const completed = experiments.filter(
    (experiment) => experiment.status === "Complete"
  );

  const planned = experiments.filter(
    (experiment) => experiment.status === "Planned"
  );

  const inProgress = experiments.filter(
    (experiment) => experiment.status === "In Progress"
  );

  return (
    <main>
      <header className="experimentsHeader">
        <h1>Experiments</h1>
        <p>
          Exploring coffee through controlled testing,
          observation, and curiosity.
        </p>
      </header>

      <div className="experimentSections">

        {completed.length > 0 && (
          <section className="experimentSection">
            <h2>Completed Experiments</h2>

            <div className="experimentGrid">
              {completed.map((experiment) => (
                <ExperimentCard
                  key={experiment.id}
                  experiment={experiment}
                />
              ))}
            </div>
          </section>
        )}

        {inProgress.length > 0 && (
          <section className="experimentSection">
            <h2>In Progress</h2>

            <div className="experimentGrid">
              {inProgress.map((experiment) => (
                <ExperimentCard
                  key={experiment.id}
                  experiment={experiment}
                />
              ))}
            </div>
          </section>
        )}

        {planned.length > 0 && (
          <section className="experimentSection">
            <h2>Planned Experiments</h2>

            <div className="experimentGrid">
              {planned.map((experiment) => (
                <ExperimentCard
                  key={experiment.id}
                  experiment={experiment}
                />
              ))}
            </div>
          </section>
        )}

      </div>
      
    </main>
  );
}
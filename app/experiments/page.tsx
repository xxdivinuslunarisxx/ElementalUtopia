import { getExperiments } from "@/lib/experiments/getExperiments";
import ExperimentCard from "@/components/ExperimentCard";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coffee Experiments & Research",

  description:
    "Explore our coffee experiments investigating espresso extraction, brew ratios, temperature, pressure and flavour.",

  alternates: {
    canonical: "https://elementalutopia.com/experiments",
  },
};

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
    <div>
      <header className="experimentsHeader">
        <p className="experimentsEyebrow">Coffee Lab</p>
        <h1>Experiments</h1>
        <p>
          Exploring coffee through controlled testing,
          observation, and curiosity.
        </p>
      </header>

      <div className="experimentSections">

        {completed.length > 0 && (
          <section className="experimentSection">
            <h2>Completed</h2>

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
            <h2>Planned</h2>

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

        <section className="experimentSection speciesTeaser">
          <h2>Beyond Arabica</h2>
          <p>
            Most coffee comes from just two species. Meet four we find
            fascinating, including stenophylla, a rare West African coffee
            with arabica-like flavour and notable heat tolerance.
          </p>
          <Link href="/species">Explore coffee species →</Link>
        </section>


      </div>
      
    </div>
  );
}
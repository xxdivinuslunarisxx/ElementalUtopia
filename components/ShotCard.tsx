import type { ExperimentShot } from "@/lib/experiments/types";
import { hasContent } from "@/lib/experiments/getExperiments";

const SHOT_SPECS = [
  ["dose", "Dose"],
  ["yield", "Yield"],
  ["time", "Time"],
  ["ratio", "Ratio"],
] as const;

/** Renders a photo only when both the image path and its alt text are set. */
export function ExperimentPhoto({ src, alt }: { src?: string; alt?: string }) {
  if (!hasContent(src) || !hasContent(alt)) return null;

  return (
    <figure className="experimentPhoto">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}

export function ShotCard({ shot, index }: { shot: ExperimentShot; index: number }) {
  const specs = SHOT_SPECS.filter(([key]) => hasContent(shot[key]));
  const hasEspresso = hasContent(shot.aroma) || hasContent(shot.espressoNotes);

  return (
    <article className="shotCard">
      <h3>{hasContent(shot.name) ? shot.name : `Shot ${index + 1}`}</h3>

      {specs.length > 0 && (
        <dl className="shotSpecs">
          {specs.map(([key, label]) => (
            <div key={key}>
              <dt>{label}</dt>
              <dd>{shot[key]}</dd>
            </div>
          ))}
        </dl>
      )}

      <ExperimentPhoto src={shot.photo} alt={shot.photoAlt} />

      {hasEspresso && (
        <div className="shotNotes">
          <h4>Straight espresso</h4>
          {hasContent(shot.aroma) && (
            <p>
              <strong>Aroma:</strong> {shot.aroma}
            </p>
          )}
          {hasContent(shot.espressoNotes) && <p>{shot.espressoNotes}</p>}
        </div>
      )}

      {hasContent(shot.milkNotes) && (
        <div className="shotNotes">
          <h4>With milk</h4>
          <p>{shot.milkNotes}</p>
        </div>
      )}
    </article>
  );
}

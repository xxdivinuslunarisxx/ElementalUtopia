export type ExperimentStatus =
  | "Planned"
  | "In Progress"
  | "Complete";


export type ExperimentType =
  | "Observation"
  | "Experiment";

export type ExperimentIconName =
  | "target"
  | "timer"
  | "thermometer"
  | "flow"
  | "gauge";



export type CoffeeDetails = {
  name?: string;
  dose?: string;
  yield?: string;
  ratio?: string;

  [key: string]: unknown;
};


export type ExperimentTest = {
  time?: string;
  notes?: string;

  [key: string]: unknown;
};


export type ExperimentMethod = Record<
  string,
  ExperimentTest
>;


/**
 * One espresso shot. Every field is optional; anything left out simply
 * isn't shown on the site.
 *
 * Adding a photo: put the image in `public/experiments/` (for example
 * `public/experiments/sweet-shop-shot-a.jpg`), then set
 *   "photo": "/experiments/sweet-shop-shot-a.jpg",
 *   "photoAlt": "Short description of what the photo shows"
 * on the shot (or on the experiment itself for a main photo).
 * `photoAlt` is required whenever `photo` is set; the generator stops
 * with an error if it's missing or if the file doesn't exist.
 */
export type ExperimentShot = {
  name?: string;
  dose?: string;
  yield?: string;
  time?: string;
  ratio?: string;
  aroma?: string;
  espressoNotes?: string;
  milkNotes?: string;
  photo?: string;
  photoAlt?: string;
};


export type Experiment = {
  id: string;
  title: string;
  type: ExperimentType;
  status: ExperimentStatus;
  icon?: ExperimentIconName;

  summary: string;

  coffee?: CoffeeDetails;

  question?: string;
  hypothesis?: string;

  method?: ExperimentMethod;

  shots?: ExperimentShot[];

  /** Optional main photo (see ExperimentShot for how to add one). */
  photo?: string;
  photoAlt?: string;

  results?: string;
  conclusion?: string;

  limitations?: string[];

  next_steps?: string;

  variables?: {
    independent?: string[];
    controlled?: string[];
    dependent?: string[];
  };
};
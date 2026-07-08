export type ExperimentStatus =
  | "Planned"
  | "In Progress"
  | "Complete";


export type ExperimentType =
  | "Observation"
  | "Experiment";


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


export type Experiment = {
  id: string;
  title: string;
  type: ExperimentType;
  status: ExperimentStatus;

  summary: string;

  coffee?: CoffeeDetails;

  question?: string;
  hypothesis?: string;

  method?: ExperimentMethod;

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
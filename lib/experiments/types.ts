export type ExperimentStatus = 
  | "Planned"
  | "In Progress"
  | "Complete";

export type ExperimentType =
  | "Observation"
  | "Experiment";

export type CoffeeDetails = {
  name: string;
  dose: string;
  yield: string;
  ratio: string;
};

export type ExtractionTest = {
  time: string;
  notes: string;
};

export type ExperimentMethod = {
  test_one: ExtractionTest;
  test_two: ExtractionTest;
};

export type Experiment = {
  id: string;
  title: string;
  type: ExperimentType;
  status: ExperimentStatus;

  summary: string;

  coffee: CoffeeDetails;

  question: string;
  hypothesis: string;

  method: ExperimentMethod;

  results: string;
  conclusion: string;

  limitations: string[];

  next_steps: string;
};
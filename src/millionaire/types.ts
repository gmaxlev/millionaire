export type MillionaireQuestion = string;

export type MillionaireOption = {
  id: number;
  text: string;
  isCorrect: boolean;
};

export type MillionaireReward = {
  value: number;
};

export type MillionaireTask = {
  id: number;
  question: MillionaireQuestion;
  options: MillionaireOption[];
  reward: MillionaireReward;
};

export type MillionaireConfig = {
  tasks: MillionaireTask[];
  currency: string;
};

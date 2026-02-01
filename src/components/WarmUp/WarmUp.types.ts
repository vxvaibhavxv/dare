export interface WarmUpQuestionOption {
  text: string;
  value: number;
  feedback: string;
}

export interface WarmUpQuestion {
  question: string;
  options: Array<WarmUpQuestionOption>;
}

export type WarmUpData = Array<WarmUpQuestion>;

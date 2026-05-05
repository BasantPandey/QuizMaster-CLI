import { UserAnswer } from './types.js';

export function calculateScore(answers: UserAnswer[]): number {
  return answers.reduce((score, ans) => (ans.isCorrect ? score + 1 : score), 0);
}

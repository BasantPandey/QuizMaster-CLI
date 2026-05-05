import { Question } from './schema.js';
import { QuizSession } from './types.js';

export function createInitialSession(questions: Question[]): QuizSession {
  return {
    questions,
    currentIdx: 0,
    score: 0,
    answers: [],
    status: 'Ready',
  };
}

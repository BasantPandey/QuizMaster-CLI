import { Question } from './schema.js';

export interface UserAnswer {
  questionId: string;
  givenIndex: number;
  isCorrect: boolean;
}

export interface QuizSession {
  questions: Question[];
  currentIdx: number;
  score: number;
  answers: UserAnswer[];
  status: 'Ready' | 'InProgress' | 'Completed';
}

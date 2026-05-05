import { QuizSession } from './types.js';

export function processAnswer(session: QuizSession, answerIndex: number): QuizSession {
  const currentQuestion = session.questions[session.currentIdx];
  const isCorrect = currentQuestion.answerIndex === answerIndex;

  const updatedSession: QuizSession = {
    ...session,
    score: isCorrect ? session.score + 1 : session.score,
    answers: [
      ...session.answers,
      {
        questionId: currentQuestion.id,
        givenIndex: answerIndex,
        isCorrect,
      },
    ],
    currentIdx: session.currentIdx + 1,
    status: 'InProgress',
  };

  if (updatedSession.currentIdx >= updatedSession.questions.length) {
    updatedSession.status = 'Completed';
  }

  return updatedSession;
}

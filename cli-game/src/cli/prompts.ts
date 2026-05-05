import * as p from '@clack/prompts';
import { QuizSession } from '../core/types.js';
import { processAnswer } from '../core/engine.js';

export async function runQuizLoop(session: QuizSession): Promise<QuizSession> {
  let currentSession = session;

  p.intro('Welcome to QuizMaster CLI!');

  while (currentSession.status !== 'Completed') {
    const question = currentSession.questions[currentSession.currentIdx];
    
    const answer = await p.select({
      message: question.text,
      options: question.options.map((opt, idx) => ({
        value: idx,
        label: opt,
      })),
    });

    if (p.isCancel(answer)) {
      p.cancel('Quiz cancelled.');
      process.exit(0);
    }

    currentSession = processAnswer(currentSession, answer as number);
    
    const lastAnswer = currentSession.answers[currentSession.answers.length - 1];
    if (lastAnswer.isCorrect) {
      p.log.success('Correct!');
    } else {
      p.log.error(`Incorrect. The correct answer was: ${question.options[question.answerIndex]}`);
    }
  }

  return currentSession;
}

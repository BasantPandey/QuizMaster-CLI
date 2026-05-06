import * as p from '@clack/prompts';
import { QuizSession } from '../core/types.js';
import { processAnswer } from '../core/engine.js';
import { playVictoryAnimation, playEncouragementAnimation } from './animations.js';

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

    const s = p.spinner();
    s.start('Checking your answer...');
    await new Promise((resolve) => setTimeout(resolve, 800));
    s.stop('Result:');

    currentSession = processAnswer(currentSession, answer as number);
    
    const lastAnswer = currentSession.answers[currentSession.answers.length - 1];
    if (lastAnswer.isCorrect) {
      p.log.success('Correct!');
    } else {
      p.log.error(`Incorrect. The correct answer was: ${question.options[question.answerIndex]}`);
    }
  }

  // Animation based on score
  const isPerfect = currentSession.score === currentSession.questions.length;
  if (isPerfect) {
    await playVictoryAnimation();
  } else {
    await playEncouragementAnimation();
  }

  return currentSession;
}

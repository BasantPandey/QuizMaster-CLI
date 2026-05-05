import path from 'path';
import * as p from '@clack/prompts';
import { loadQuestions } from './core/loader.js';
import { createInitialSession } from './core/session.js';
import { runQuizLoop } from './cli/prompts.js';
import { formatResults } from './cli/formatter.js';

async function main() {
  const questionsPath = path.resolve('src/data/questions.json');
  
  const s = p.spinner();
  try {
    s.start('Loading questions...');
    const questions = await loadQuestions(questionsPath);
    s.stop('Questions loaded!');
    
    const session = createInitialSession(questions);
    
    const finalSession = await runQuizLoop(session);
    
    const summary = formatResults(finalSession);
    p.note(summary, 'Quiz Results');
    p.outro('Thanks for playing!');
  } catch (error) {
    p.log.error('Failed to start quiz: ' + (error instanceof Error ? error.message : String(error)));
    process.exit(1);
  }
}

main();

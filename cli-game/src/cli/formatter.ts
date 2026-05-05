import { QuizSession } from '../core/types.js';

export function formatResults(session: QuizSession): string {
  const total = session.questions.length;
  const score = session.score;
  const percentage = Math.round((score / total) * 100);

  let summary = `Final Score: ${score}/${total} (${percentage}%)\n\n`;
  summary += 'Detailed Breakdown:\n';

  session.questions.forEach((q, idx) => {
    const ans = session.answers[idx];
    const status = ans.isCorrect ? '✅ Correct' : '❌ Incorrect';
    summary += `${idx + 1}. ${q.text}\n   Your answer: ${q.options[ans.givenIndex]} (${status})\n`;
    if (!ans.isCorrect) {
      summary += `   Correct answer: ${q.options[q.answerIndex]}\n`;
    }
  });

  return summary;
}

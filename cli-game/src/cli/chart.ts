export interface ChartData {
  correct: number;
  incorrect: number;
  total: number;
}

/**
 * Generates an ASCII horizontal bar chart for quiz results.
 * @param data The results data (correct, incorrect, total)
 * @returns A formatted string containing the chart
 */
export function generateResultsChart(data: ChartData): string {
  const { correct, incorrect, total } = data;
  const maxWidth = 20;

  if (total === 0) {
    return 'Results Breakdown:\nNo questions answered.';
  }

  // Calculate widths relative to total
  const correctWidth = Math.round((correct / total) * maxWidth);
  const incorrectWidth = Math.round((incorrect / total) * maxWidth);

  // Generate bars
  const correctBar = '█'.repeat(correctWidth);
  const incorrectBar = '░'.repeat(incorrectWidth);

  return [
    'Results Breakdown:',
    `Correct:   ${correctBar.padEnd(maxWidth)} (${correct})`,
    `Incorrect: ${incorrectBar.padEnd(maxWidth)} (${incorrect})`
  ].join('\n');
}

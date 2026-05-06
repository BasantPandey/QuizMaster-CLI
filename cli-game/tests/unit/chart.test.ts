import { describe, it, expect } from 'vitest';
import { generateResultsChart } from '../../src/cli/chart';

describe('generateResultsChart', () => {
  it('should generate a full correct bar when all answers are correct', () => {
    const data = { correct: 10, incorrect: 0, total: 10 };
    const chart = generateResultsChart(data);
    expect(chart).toContain('█'.repeat(20));
    expect(chart).toContain('(10)');
    expect(chart).toContain('(0)');
  });

  it('should generate a full incorrect bar when all answers are incorrect', () => {
    const data = { correct: 0, incorrect: 10, total: 10 };
    const chart = generateResultsChart(data);
    expect(chart).toContain('░'.repeat(20));
    expect(chart).toContain('(0)');
    expect(chart).toContain('(10)');
  });

  it('should handle partial results correctly', () => {
    const data = { correct: 5, incorrect: 5, total: 10 };
    const chart = generateResultsChart(data);
    expect(chart).toContain('█'.repeat(10));
    expect(chart).toContain('░'.repeat(10));
  });

  it('should handle zero questions', () => {
    const data = { correct: 0, incorrect: 0, total: 0 };
    const chart = generateResultsChart(data);
    expect(chart).toContain('No questions answered');
  });

  it('should maintain consistent width with padEnd', () => {
    const data = { correct: 1, incorrect: 1, total: 10 };
    const chart = generateResultsChart(data);
    const lines = chart.split('\n');
    // Lines are "Correct:   [bar] (val)"
    // The bar part should be 20 chars long due to padEnd
    expect(lines[1]).toMatch(/Correct:\s+.{20}\s+\(1\)/);
    expect(lines[2]).toMatch(/Incorrect:\s+.{20}\s+\(1\)/);
  });
});

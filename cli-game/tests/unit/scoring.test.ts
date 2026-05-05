import { describe, it, expect } from 'vitest';
import { calculateScore } from '../../src/core/scoring.js';
import { UserAnswer } from '../../src/core/types.js';

describe('calculateScore', () => {
  it('should correctly sum up scores from answers', () => {
    const answers: UserAnswer[] = [
      { questionId: '1', givenIndex: 0, isCorrect: true },
      { questionId: '2', givenIndex: 1, isCorrect: false },
      { questionId: '3', givenIndex: 2, isCorrect: true },
    ];
    expect(calculateScore(answers)).toBe(2);
  });

  it('should return 0 for empty answers', () => {
    expect(calculateScore([])).toBe(0);
  });
});

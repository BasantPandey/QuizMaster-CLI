import { describe, it, expect } from 'vitest';
import { processAnswer } from '../../src/core/engine.js';
import { createInitialSession } from '../../src/core/session.js';
import { Question } from '../../src/core/schema.js';

describe('processAnswer', () => {
  const mockQuestions: Question[] = [
    { id: '1', text: 'Q1', options: ['A', 'B'], answerIndex: 0 },
    { id: '2', text: 'Q2', options: ['C', 'D'], answerIndex: 1 },
  ];

  it('should update session state correctly for a correct answer', () => {
    let session = createInitialSession(mockQuestions);
    session = processAnswer(session, 0);

    expect(session.currentIdx).toBe(1);
    expect(session.score).toBe(1);
    expect(session.answers).toHaveLength(1);
    expect(session.answers[0].isCorrect).toBe(true);
    expect(session.status).toBe('InProgress');
  });

  it('should update session state correctly for an incorrect answer', () => {
    let session = createInitialSession(mockQuestions);
    session = processAnswer(session, 1);

    expect(session.currentIdx).toBe(1);
    expect(session.score).toBe(0);
    expect(session.answers[0].isCorrect).toBe(false);
  });

  it('should transition to Completed after the last question', () => {
    let session = createInitialSession(mockQuestions);
    session = processAnswer(session, 0);
    session = processAnswer(session, 1);

    expect(session.currentIdx).toBe(2);
    expect(session.status).toBe('Completed');
  });
});

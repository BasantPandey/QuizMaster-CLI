import { describe, it, expect } from 'vitest';
import { loadQuestions } from '../../src/core/loader.js';
import fs from 'fs/promises';
import path from 'path';

describe('loadQuestions', () => {
  it('should load and validate questions from a JSON file', async () => {
    const testFilePath = path.resolve('tests/unit/test-questions.json');
    const testData = [
      {
        id: 'q1',
        text: 'What is 2+2?',
        options: ['3', '4', '5'],
        answerIndex: 1,
      },
    ];

    await fs.writeFile(testFilePath, JSON.stringify(testData));

    try {
      const questions = await loadQuestions(testFilePath);
      expect(questions).toHaveLength(1);
      expect(questions[0].text).toBe('What is 2+2?');
      expect(questions[0].answerIndex).toBe(1);
    } finally {
      await fs.unlink(testFilePath);
    }
  });

  it('should throw an error for invalid JSON format', async () => {
    const testFilePath = path.resolve('tests/unit/invalid-questions.json');
    const testData = [{ id: 'q1' }]; // Missing fields

    await fs.writeFile(testFilePath, JSON.stringify(testData));

    try {
      await expect(loadQuestions(testFilePath)).rejects.toThrow();
    } finally {
      await fs.unlink(testFilePath);
    }
  });
});

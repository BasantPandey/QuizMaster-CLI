import fs from 'fs/promises';
import { QuestionsSchema, Question } from './schema.js';

export async function loadQuestions(filePath: string): Promise<Question[]> {
  const data = await fs.readFile(filePath, 'utf-8');
  const json = JSON.parse(data);
  return QuestionsSchema.parse(json);
}

import { z } from 'zod';

export const QuestionSchema = z.object({
  id: z.string(),
  text: z.string(),
  options: z.array(z.string()).min(1),
  answerIndex: z.number().int().nonnegative(),
});

export const QuestionsSchema = z.array(QuestionSchema);

export type Question = z.infer<typeof QuestionSchema>;

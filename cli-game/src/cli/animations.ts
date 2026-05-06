import * as p from '@clack/prompts';

export interface AnimationFrame {
  content: string;
  delay: number;
}

export const VICTORY_FRAMES: AnimationFrame[] = [
  { content: '  *  \n     \n     ', delay: 150 },
  { content: ' * * \n  *  \n     ', delay: 150 },
  { content: '* * *\n * * \n  *  ', delay: 150 },
  { content: ' \!/ \n--*--\n / \ ', delay: 200 },
  { content: '  🎉 \n 🎉🎉 \n  🎉 ', delay: 300 },
];

export const ENCOURAGEMENT_FRAMES: AnimationFrame[] = [
  { content: '  .  ', delay: 200 },
  { content: '  .. ', delay: 200 },
  { content: '  ...', delay: 200 },
  { content: '  💡 ', delay: 400 },
  { content: 'Keep going!', delay: 600 },
];

/**
 * Plays a simple ASCII animation in the terminal.
 */
export async function playAnimation(frames: AnimationFrame[]): Promise<void> {
  const s = p.spinner();
  s.start('Preparing celebration...');
  
  for (const frame of frames) {
    s.message(frame.content);
    await new Promise((resolve) => setTimeout(resolve, frame.delay));
  }
  
  s.stop('Done!');
}

export async function playVictoryAnimation(): Promise<void> {
  await playAnimation(VICTORY_FRAMES);
}

export async function playEncouragementAnimation(): Promise<void> {
  await playAnimation(ENCOURAGEMENT_FRAMES);
}

import { describe, it, expect } from 'vitest';
import { VICTORY_FRAMES, ENCOURAGEMENT_FRAMES } from '../../src/cli/animations';

describe('animations', () => {
  it('should have a set of victory frames', () => {
    expect(VICTORY_FRAMES.length).toBeGreaterThan(0);
    expect(VICTORY_FRAMES[0]).toHaveProperty('content');
    expect(VICTORY_FRAMES[0]).toHaveProperty('delay');
  });

  it('should have a set of encouragement frames', () => {
    expect(ENCOURAGEMENT_FRAMES.length).toBeGreaterThan(0);
    expect(ENCOURAGEMENT_FRAMES[0]).toHaveProperty('content');
    expect(ENCOURAGEMENT_FRAMES[0]).toHaveProperty('delay');
  });
});

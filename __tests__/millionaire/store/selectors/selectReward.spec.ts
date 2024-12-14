import { describe, it, expect } from 'vitest';
import selectReward from '@/millionaire/store/selectors/selectReward';
import { MillionaireState } from '../../../../src/millionaire/store/types';

describe('selectReward', () => {
  it('should return 0 when tasks are null', () => {
    const state: MillionaireState = {
      currentTaskIndex: 0,
      currency: 'USD',
      tasks: null,
    };
    const reward = selectReward(state);
    expect(reward).toBe(0);
  });

  it('should return correct reward for completed tasks', () => {
    const state: MillionaireState = {
      currentTaskIndex: 0,
      currency: 'USD',
      tasks: [
        {
          id: 1,
          question: 'Sample Question?',
          options: [
            {
              id: 1, text: 'Option 1', isCorrect: true, isSelected: true,
            },
            {
              id: 2, text: 'Option 2', isCorrect: false, isSelected: false,
            },
          ],
          reward: { value: 100 },
        },
        {
          id: 2,
          question: 'Another Question?',
          options: [
            {
              id: 3, text: 'Option 3', isCorrect: true, isSelected: true,
            },
            {
              id: 4, text: 'Option 4', isCorrect: false, isSelected: false,
            },
          ],
          reward: { value: 200 },
        },
        {
          id: 3,
          question: 'Third Question?',
          options: [
            {
              id: 5, text: 'Option 5', isCorrect: false, isSelected: true,
            },
            {
              id: 6, text: 'Option 6', isCorrect: true, isSelected: false,
            },
          ],
          reward: { value: 300 },
        },
      ],
    };
    const reward = selectReward(state);
    expect(reward).toBe(200);
  });
});

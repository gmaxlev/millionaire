import { describe, it, expect } from 'vitest';
import selectReward from '../../../../src/millionaire/store/selectors/selectReward';
import { MillionaireState } from '../../../../src/millionaire/store/types';

describe('selectReward', () => {
  it('should return 0 if tasks are not initialized', () => {
    const state: MillionaireState = {
      currentTaskIndex: 0,
      currency: null,
      tasks: null,
      isStart: false,
    };

    const result = selectReward(state);
    expect(result).toBe(0);
  });

  it('should return the reward value of the last won task', () => {
    const state: MillionaireState = {
      currentTaskIndex: 0,
      currency: 'USD',
      tasks: [
        {
          id: 1,
          question: 'Question 1',
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
          question: 'Question 2',
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
      ],
      isStart: true,
    };

    const result = selectReward(state);
    expect(result).toBe(200);
  });

  it('should return 0 if no task is won', () => {
    const state: MillionaireState = {
      currentTaskIndex: 0,
      currency: 'USD',
      tasks: [
        {
          id: 1,
          question: 'Question 1',
          options: [
            {
              id: 1, text: 'Option 1', isCorrect: true, isSelected: false,
            },
            {
              id: 2, text: 'Option 2', isCorrect: false, isSelected: true,
            },
          ],
          reward: { value: 100 },
        },
        {
          id: 2,
          question: 'Question 2',
          options: [
            {
              id: 3, text: 'Option 3', isCorrect: true, isSelected: false,
            },
            {
              id: 4, text: 'Option 4', isCorrect: false, isSelected: false,
            },
          ],
          reward: { value: 200 },
        },
      ],
      isStart: true,
    };

    const result = selectReward(state);
    expect(result).toBe(0);
  });
});

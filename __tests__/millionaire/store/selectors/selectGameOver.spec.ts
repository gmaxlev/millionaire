import { describe, it, expect } from 'vitest';
import selectGameOver from '../../../../src/millionaire/store/selectors/selectGameOver';
import { MillionaireState } from '../../../../src/millionaire/store/types';

describe('selectGameOver', () => {
  it('should return false if tasks are not initialized', () => {
    const state: MillionaireState = {
      currentTaskIndex: 0,
      currency: null,
      tasks: null,
      isStart: false,
    };

    const result = selectGameOver(state);
    expect(result).toBe(false);
  });

  it('should return true if all tasks are won', () => {
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

    const result = selectGameOver(state);
    expect(result).toBe(true);
  });

  it('should return true if any task is lost', () => {
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

    const result = selectGameOver(state);
    expect(result).toBe(true);
  });

  it('should return false if no task is completed', () => {
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

    const result = selectGameOver(state);
    expect(result).toBe(false);
  });
});

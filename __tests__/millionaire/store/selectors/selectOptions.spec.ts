import { describe, it, expect } from 'vitest';
import selectOptions from '@/millionaire/store/selectors/selectOptions';
import { MillionaireState } from '../../../../src/millionaire/store/types';

describe('selectOptions', () => {
  it('should return null when current task is null', () => {
    const state: MillionaireState = {
      currentTaskIndex: 0,
      currency: 'USD',
      tasks: null,
    };
    const options = selectOptions(state);
    expect(options).toBeNull();
  });

  it('should return options for current task', () => {
    const state: MillionaireState = {
      currentTaskIndex: 0,
      currency: 'USD',
      tasks: [
        {
          id: 1,
          question: 'Sample Question?',
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
      ],
    };
    const options = selectOptions(state);
    expect(options).toEqual(state.tasks[0].options);
  });

  it('should return options for the second task', () => {
    const state: MillionaireState = {
      currentTaskIndex: 1,
      currency: 'USD',
      tasks: [
        {
          id: 1,
          question: 'Sample Question 1?',
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
          question: 'Sample Question 2?',
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
    };
    const options = selectOptions(state);
    expect(options).toEqual(state.tasks[1].options);
  });
});

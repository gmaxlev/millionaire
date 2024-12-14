import { describe, it, expect } from 'vitest';
import selectCurrentTask from '@/millionaire/store/selectors/selectCurrentTask';
import { MillionaireState } from '../../../../src/millionaire/store/types';

describe('selectCurrentTask', () => {
  it('should return null when current task is null', () => {
    const state: MillionaireState = {
      currentTaskIndex: 0,
      currency: 'USD',
      tasks: null,
    };
    const currentTask = selectCurrentTask(state);
    expect(currentTask).toBeNull();
  });

  it('should return current task from state', () => {
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
    const currentTask = selectCurrentTask(state);
    expect(currentTask).toEqual(state.tasks[0]);
  });

  it('should return the correct task when there are multiple tasks', () => {
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
              id: 1, text: 'Option 1', isCorrect: false, isSelected: false,
            },
            {
              id: 2, text: 'Option 2', isCorrect: true, isSelected: false,
            },
          ],
          reward: { value: 200 },
        },
      ],
    };
    const currentTask = selectCurrentTask(state);
    expect(currentTask).toEqual(state.tasks[1]);
  });
});

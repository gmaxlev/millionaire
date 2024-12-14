import { describe, it, expect } from 'vitest';
import selectTasks from '@/millionaire/store/selectors/selectTasks';
import { MillionaireState } from '../../../../src/millionaire/store/types';

describe('selectTasks', () => {
  it('should return tasks from state', () => {
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
    const tasks = selectTasks(state);
    expect(tasks).toEqual(state.tasks);
  });

  it('should return null when tasks are null', () => {
    const state: MillionaireState = {
      currentTaskIndex: 0,
      currency: 'USD',
      tasks: null,
    };
    const tasks = selectTasks(state);
    expect(tasks).toBeNull();
  });
});

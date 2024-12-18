import { describe, it, expect } from 'vitest';
import selectCurrentTask from '../../../../src/millionaire/store/selectors/selectCurrentTask';
import { MillionaireState } from '../../../../src/millionaire/store/types';

describe('selectCurrentTask', () => {
  it('should return null if tasks are not initialized', () => {
    const state: MillionaireState = {
      currentTaskIndex: 0,
      currency: null,
      tasks: null,
      isStart: false,
    };

    const result = selectCurrentTask(state);
    expect(result).toBeNull();
  });

  it('should return the current task with status', () => {
    const state: MillionaireState = {
      currentTaskIndex: 1,
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

    const result = selectCurrentTask(state);
    expect(result).toEqual({
      task: state.tasks[1],
      status: {
        isCompleted: false,
        isLose: false,
        isWin: false,
        isFirstTask: false,
        isLastTask: true,
      },
    });
  });
});

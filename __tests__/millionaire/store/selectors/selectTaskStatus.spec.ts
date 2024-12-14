import { describe, it, expect } from 'vitest';
import selectTaskStatus from '@/millionaire/store/selectors/selectTaskStatus';
import { MillionaireState } from '../../../../src/millionaire/store/types';

describe('selectTaskStatus', () => {
  it('should return default status when tasks are null', () => {
    const state: MillionaireState = {
      currentTaskIndex: 0,
      currency: null,
      tasks: null,
    };
    const status = selectTaskStatus(state, 0);
    expect(status).toEqual({
      isWin: false,
      isLose: false,
      isCompleted: false,
      isLastTask: false,
    });
  });

  it('should return correct status for a task', () => {
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
      ],
    };
    const status = selectTaskStatus(state, 0);
    expect(status).toEqual({
      isWin: true,
      isLose: false,
      isCompleted: true,
      isLastTask: true,
    });
  });
});

import { describe, it, expect } from 'vitest';
import selectStatus from '@/millionaire/store/selectors/selectStatus';
import { MillionaireState } from '../../../../src/millionaire/store/types';

describe('selectStatus', () => {
  it('should return status for current task', () => {
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
    const status = selectStatus(state);
    expect(status).toEqual({
      isWin: true,
      isLose: false,
      isCompleted: true,
      isLastTask: true,
    });
  });

  it('should return status for current task with wrong answer', () => {
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
              id: 2, text: 'Option 2', isCorrect: false, isSelected: true,
            },
          ],
          reward: { value: 100 },
        },
        {
          id: 2,
          question: 'Sample Question 2?',
          options: [
            {
              id: 1, text: 'Option 1', isCorrect: true, isSelected: false,
            },
            {
              id: 2, text: 'Option 2', isCorrect: false, isSelected: true,
            },
          ],
          reward: { value: 200 },
        },
      ],
    };
    const status = selectStatus(state);
    expect(status).toEqual({
      isWin: false,
      isLose: true,
      isCompleted: true,
      isLastTask: true,
    });
  });
});

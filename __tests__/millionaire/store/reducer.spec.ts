import { describe, it, expect } from 'vitest';
import { MillionaireConfig } from '@/millionaire/types';
import { millionaireReducer, createInitialState } from '../../../src/millionaire/store/reducer';
import { MillionaireState } from '../../../src/millionaire/store/types';

describe('millionaireReducer', () => {
  it('should initialize state with INIT action', () => {
    const initialState = createInitialState();
    const config: MillionaireConfig = {
      currency: 'USD',
      tasks: [
        {
          id: 1,
          question: 'What is the capital of France?',
          options: [
            { id: 1, text: 'Paris', isCorrect: true },
            { id: 2, text: 'London', isCorrect: false },
            { id: 3, text: 'Berlin', isCorrect: false },
            { id: 4, text: 'Madrid', isCorrect: false },
          ],
          reward: { value: 100 },
        },
      ],
    };

    const newState = millionaireReducer(initialState, { type: 'INIT', payload: config });

    expect(newState.currency).toBe('USD');
    expect(newState.tasks).toHaveLength(1);
    expect(newState.tasks![0].options).toHaveLength(4);
    expect(newState.tasks![0].options[0].isSelected).toBe(false);
  });

  it('should handle ANSWER action', () => {
    const initialState: MillionaireState = {
      currentTaskIndex: 0,
      currency: 'USD',
      tasks: [
        {
          id: 1,
          question: 'What is the capital of France?',
          options: [
            {
              id: 1, text: 'Paris', isCorrect: true, isSelected: false,
            },
            {
              id: 2, text: 'London', isCorrect: false, isSelected: false,
            },
            {
              id: 3, text: 'Berlin', isCorrect: false, isSelected: false,
            },
            {
              id: 4, text: 'Madrid', isSelected: false, isCorrect: false,
            },
          ],
          reward: { value: 100 },
        },
      ],
    };

    const newState = millionaireReducer(initialState, { type: 'ANSWER', payload: { optionId: 1 } });

    expect(newState.tasks![0].options[0].isSelected).toBe(true);
    expect(newState.tasks![0].options[1].isSelected).toBe(false);
  });

  it('should handle RESTART action', () => {
    const initialState: MillionaireState = {
      currentTaskIndex: 0,
      currency: 'USD',
      tasks: [
        {
          id: 1,
          question: 'What is the capital of France?',
          options: [
            {
              id: 1, text: 'Paris', isCorrect: true, isSelected: true,
            },
            {
              id: 2, text: 'London', isCorrect: false, isSelected: false,
            },
            {
              id: 3, text: 'Berlin', isCorrect: false, isSelected: false,
            },
            {
              id: 4, text: 'Madrid', isCorrect: false, isSelected: false,
            },
          ],
          reward: { value: 100 },
        },
      ],
    };

    const newState = millionaireReducer(initialState, { type: 'RESTART' });

    expect(newState.tasks![0].options[0].isSelected).toBe(false);
  });
});

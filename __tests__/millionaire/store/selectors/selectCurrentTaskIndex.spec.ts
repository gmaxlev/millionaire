import { describe, it, expect } from 'vitest';
import selectCurrentTaskIndex from '@/millionaire/store/selectors/selectCurrentTaskIndex';
import { MillionaireState } from '../../../../src/millionaire/store/types';

describe('selectCurrentTaskIndex', () => {
  it('should return current task index from state', () => {
    const state: MillionaireState = {
      currentTaskIndex: 1,
      currency: 'USD',
      tasks: null,
    };
    const currentTaskIndex = selectCurrentTaskIndex(state);
    expect(currentTaskIndex).toBe(1);
  });
});

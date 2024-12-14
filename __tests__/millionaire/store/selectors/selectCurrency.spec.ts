import { describe, it, expect } from 'vitest';
import selectCurrency from '../../../../src/millionaire/store/selectors/selectCurrency';
import { MillionaireState } from '../../../../src/millionaire/store/types';

describe('selectCurrency', () => {
  it('should return the currency from the state', () => {
    const state: MillionaireState = {
      currentTaskIndex: 0,
      currency: 'USD',
      tasks: null,
    };
    const result = selectCurrency(state);
    expect(result).toBe('USD');
  });

  it('should return null if currency is not set in the state', () => {
    const state: MillionaireState = {
      currentTaskIndex: 0,
      currency: null,
      tasks: null,
    };
    const result = selectCurrency(state);
    expect(result).toBeNull();
  });
});

import { describe, expect, test } from 'vitest';
import useOptionWord from '../../../src/millionaire/hooks/useOptionWord';

describe('useOptionWord', () => {
  test('should return a letter for index less than 26', () => {
    expect(useOptionWord(0)).toBe('A');
    expect(useOptionWord(1)).toBe('B');
    expect(useOptionWord(25)).toBe('Z');
  });

  test('should return the index for index 26 or greater', () => {
    expect(useOptionWord(26)).toBe(26);
    expect(useOptionWord(100)).toBe(100);
  });
});

import { formatTimeString } from '@/utility/number';

describe('Number', () => {
  it('formats time string', () => {
    expect(formatTimeString('4')).toBe('4:00');
    expect(formatTimeString('4:')).toBe('4:00');
    expect(formatTimeString('4:0')).toBe('4:00');
    expect(formatTimeString('4:00')).toBe('4:00');
    expect(formatTimeString('4:1')).toBe('4:01');
    expect(formatTimeString('4:10')).toBe('4:10');
    expect(formatTimeString()).toBe(undefined);
    expect(formatTimeString('')).toBe(undefined);
    expect(formatTimeString('a')).toBe(undefined);
    expect(formatTimeString('4:10a')).toBe(undefined);
  });
});

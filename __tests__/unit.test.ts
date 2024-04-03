import {
  convertKmStringToMiString,
  convertMiStringToKmString,
} from '@/unit';

describe('Unit', () => {
  it('converts reversibly', () => {
    // #1
    expect(convertKmStringToMiString('4:00')).toBe('6:26');
    expect(convertMiStringToKmString('6:26')).toBe('4:00');
    // #2
    expect(convertKmStringToMiString('3:00')).toBe('4:50');
    expect(convertMiStringToKmString('4:50')).toBe('3:00');
    // #3
    expect(convertKmStringToMiString('2:29')).toBe('4:00');
    expect(convertMiStringToKmString('4:00')).toBe('2:29');
    // #4
    expect(convertKmStringToMiString('3:06')).toBe('4:59');
    expect(convertMiStringToKmString('4:59')).toBe('3:06');
  });
});

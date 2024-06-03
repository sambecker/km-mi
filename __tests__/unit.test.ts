import {
  convertPaceKmStringToMiString,
  convertPaceMiStringToKmString,
} from '@/site/unit';

describe('Unit', () => {
  it('converts reversibly', () => {
    // #1
    expect(convertPaceKmStringToMiString('4:00')).toBe('6:26');
    expect(convertPaceMiStringToKmString('6:26')).toBe('4:00');
    // #2
    expect(convertPaceKmStringToMiString('3:00')).toBe('4:50');
    expect(convertPaceMiStringToKmString('4:50')).toBe('3:00');
    // #3
    expect(convertPaceKmStringToMiString('2:29')).toBe('4:00');
    expect(convertPaceMiStringToKmString('4:00')).toBe('2:29');
    // #4
    expect(convertPaceKmStringToMiString('3:06')).toBe('4:59');
    expect(convertPaceMiStringToKmString('4:59')).toBe('3:06');
  });
});

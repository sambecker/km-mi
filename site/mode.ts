import { Unit } from './unit';

export type Mode = 'distance' | 'pace' | 'race';

export const MODES: Mode[] = ['distance', 'pace', 'race'];

export const DEFAULT_MODE: Mode = 'distance';

export const inputLabelForModeUnit = (mode: Mode = 'distance', unit: Unit) => {
  if (mode === 'pace') {
    return unit === 'km' ? 'minutes/km' : 'minutes/mile';
  } else {
    return unit === 'km' ? 'kilometers' : 'miles';
  }
};

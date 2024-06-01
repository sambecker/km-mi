import { Unit } from './unit';

export type Mode = 'pace' | 'distance';

type ModeOption = { label: string, mode: Mode };

const MODE_OPTIONS: Record<Mode, Record<Unit, string>> = {
  pace: {
    km: 'minutes/km',
    mi: 'minutes/mile',
  },
  distance: {
    km: 'kilometers',
    mi: 'miles',
  },
};

const MODE_OPTIONS_KM: ModeOption[] = [
  { label: MODE_OPTIONS.pace.km, mode: 'pace' },
  { label: MODE_OPTIONS.distance.km, mode: 'distance' },
];

const MODE_OPTIONS_MI: ModeOption[] = [
  { label: MODE_OPTIONS.pace.mi, mode: 'pace' },
  { label: MODE_OPTIONS.distance.mi, mode: 'distance' },
];

export const optionsForUnit = (unit: Unit) => unit === 'km'
  ? MODE_OPTIONS_KM
  : MODE_OPTIONS_MI;

export const labelForModeUnit = (mode: Mode = 'pace', unit: Unit) =>
  MODE_OPTIONS[mode][unit];

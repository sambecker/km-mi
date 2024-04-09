import {
  convertSecondsToTimeString,
  convertTimeStringToSeconds,
} from '@/utility/number';

const KM_MI_CONVERSION = 1.60934;
const MI_KM_CONVERSION = 0.621371;

export type Unit = 'km' | 'mi';

export type UnitValues = Partial<Record<Unit, string>>;

export type KmParams = { params: { km: string } };
export type MiParams = { params: { mi: string } };

const INITIAL_VALUES: UnitValues = { km: '', mi: '' };

export const characterForUnit = (unit?: Unit) => {
  switch (unit) {
  case 'km':
    return '→';
  case 'mi':
    return '←';
  default:
    return '/';
  }
};

const convertKmToMi = (km: number) => km * KM_MI_CONVERSION;

const convertMiToKm = (mi: number) => mi * MI_KM_CONVERSION;

export const convertKmStringToMiString = (km: string) => {
  const time = convertTimeStringToSeconds(km);
  return !isNaN(time)
    ? convertSecondsToTimeString(convertKmToMi(time))
    : '';
};

export const convertMiStringToKmString = (mi: string) => {
  const time = convertTimeStringToSeconds(mi);
  return !isNaN(time)
    ? convertSecondsToTimeString(convertMiToKm(time))
    : '';
};

export const initializeUnit = (km?: string, mi?: string): Unit | undefined =>
  Boolean(km)
    ? 'km'
    : Boolean(mi)
      ? 'mi'
      : undefined;

export const initializeValues = (km?: string, mi?: string): UnitValues =>
  Boolean(km)
    ? generateValuesFromKm(km)
    : Boolean(mi)
      ? generateValuesFromMi(mi)
      : INITIAL_VALUES;

export const generateValuesFromKm = (
  km?: string,
  current = INITIAL_VALUES,
) => ({
  ...current,
  km,
  mi: km ? convertKmStringToMiString(km) : undefined,
});

export const generateValuesFromMi = (
  mi?: string,
  current = INITIAL_VALUES,
) => ({
  ...current,
  mi,
  km: mi ? convertMiStringToKmString(mi) : undefined,
});

export const pathForKm = (km?: string) =>
  km ? `/km/${km}` : '/';

export const pathForMi = (mi?: string) =>
  mi ? `/mi/${mi}` : '/';

export const pathForKmImage = (km?: string) =>
  `${pathForKm(km)}/image`;

export const pathForMiImage = (mi?: string) =>
  `${pathForMi(mi)}/image`;

export const updateUrlForUnit = ({ km, mi }: UnitValues) => {
  if (Boolean(km)) {
    window.history.pushState({ km }, '', pathForKm(km));
  } else if (Boolean(mi)) {
    window.history.pushState({ mi }, '', pathForMi(mi));
  } else {
    window.history.pushState({ }, '', '/');
  }
};

export const getUnitBasedTitle = (unit: Unit, value: string) => unit === 'km'
  ? `${value} → ${convertKmStringToMiString(value)}`
  : `${convertMiStringToKmString(value)} ← ${value}`;

export const getUnitBasedDescription = (unit: Unit) =>
  `minutes/km ${unit === 'km' ? '→' : '←'} minutes/mile`;

export const getWordBasedTitle = (unit: Unit, value: string) =>
  `${value} minutes per ${unit === 'km' ? 'kilometer' : 'mile'}`;

export const getWordBasedDescription = (unit: Unit, value: string) => {
  const valueConverted = unit === 'km'
    ? convertKmStringToMiString(value)
    : convertMiStringToKmString(value);
  const unitConverted = unit === 'km' ? 'mile' : 'kilometer';
  return `${valueConverted} minutes per ${unitConverted}`;
};

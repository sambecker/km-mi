import {
  convertSecondsToTimeString,
  convertTimeStringToSeconds,
} from '@/utility/number';

const KM_MI_CONVERSION = 1.60934;
const MI_KM_CONVERSION = 0.621371;

export type Unit = 'km' | 'mi';

export type UnitValues = Partial<Record<Unit, string>>;

const INITIAL_VALUES: UnitValues = { km: '', mi: '' };

const convertKmToMi = (km: number) => km * KM_MI_CONVERSION;

const convertMiToKm = (mi: number) => mi * MI_KM_CONVERSION;

const convertKmStringToMiString = (km: string) => {
  const time = convertTimeStringToSeconds(km);
  return !isNaN(time)
    ? convertSecondsToTimeString(convertKmToMi(time))
    : '';
};

const convertMiStringToKmString = (mi: string) => {
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

const pathForKm = (km?: string) =>
  km ? `/km/${km}` : '/';

const pathForMi = (mi?: string) =>
  mi ? `/mi/${mi}` : '/';

export const updateUrlForUnit = ({ km, mi }: UnitValues) => {
  if (Boolean(km)) {
    window.history.pushState({ km }, '', pathForKm(km));
  } else if (Boolean(mi)) {
    window.history.pushState({ mi }, '', pathForMi(mi));
  } else {
    window.history.pushState({ }, '', '/');
  }
};

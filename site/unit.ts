import {
  convertSecondsToTimeString,
  convertTimeStringToSeconds,
} from '@/utility/number';
import { DEFAULT_MODE, Mode } from './mode';

const DISTANCE_KM_MI_CONVERSION = 0.621371;
const PACE_KM_MI_CONVERSION = 1.60934;

export const DEFAULT_UNIT: Unit = 'km';

export type Unit = 'km' | 'mi';

export type UnitValues = Partial<Record<Unit, string>>;

export type ParamsDistance = {
  params: {
    distance: string
    unit: string
  }
}

export type ParamsPace = {
  params: {
    pace: string
    unit: string
  }
}

export type ParamsRace = {
  params: {
    distance: string
    unit: string
    time: string
  }
}

export const INITIAL_VALUES: UnitValues = { km: '', mi: '' };

export const unitFromString = (unit: string): Unit =>
  unit.toLocaleLowerCase() === 'km' ? 'km' : 'mi';

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

const convertDistanceKmToMi = (km: number) => km * DISTANCE_KM_MI_CONVERSION;
const convertDistanceMiToKm = (mi: number) => mi / DISTANCE_KM_MI_CONVERSION;

export const convertDistanceKmStringToMiString = (km: string) => {
  const number = parseFloat(km);
  return !isNaN(number)
    ? convertDistanceKmToMi(number).toFixed(2)
    : '';
};

export const convertDistanceMiStringToKmString = (mi: string) => {
  const number = parseFloat(mi);
  return !isNaN(number)
    ? convertDistanceMiToKm(number).toFixed(2)
    : '';
};

const convertPaceKmToMi = (km: number) => km * PACE_KM_MI_CONVERSION;
const convertPaceMiToKm = (mi: number) => mi / PACE_KM_MI_CONVERSION;

export const convertPaceKmStringToMiString = (km: string) => {
  const time = convertTimeStringToSeconds(km);
  return !isNaN(time)
    ? convertSecondsToTimeString(convertPaceKmToMi(time))
    : '';
};

export const convertPaceMiStringToKmString = (mi: string) => {
  const time = convertTimeStringToSeconds(mi);
  return !isNaN(time)
    ? convertSecondsToTimeString(convertPaceMiToKm(time))
    : '';
};

export const getPace = (
  distanceString: string,
  timeString: string,
): string => {
  const distance = parseFloat(distanceString);
  const time = convertTimeStringToSeconds(timeString);
  return !isNaN(time)
    ? convertSecondsToTimeString(time/distance)
    : '';
};

export const getPaceWithUnit = (
  distanceString: string,
  timeString: string,
  unit: Unit,
): string => {
  const pace = getPace(distanceString, timeString);
  return `${pace} minutes/${unit === 'km' ? 'km' : 'mile'}`;
};

export const initializeUnit = (km?: string, mi?: string): Unit | undefined =>
  Boolean(km)
    ? 'km'
    : Boolean(mi)
      ? 'mi'
      : undefined;

export const initializeValues = (
  mode: Mode = DEFAULT_MODE,
  value: string | undefined,
  unit: Unit = 'km',
): UnitValues => {
  switch (mode) {
  case 'distance':
  case 'race':
    return generateDistanceValues(value, unit);
  case 'pace':
    return generatePaceValues(value, unit);
  }
};

export const generateDistanceValues = (
  value = '',
  unit: Unit,
  current = INITIAL_VALUES,
): UnitValues => ({
  ...current,
  ...unit === 'km'
    ? {
      km: value,
      mi: value ? convertDistanceKmStringToMiString(value) : '',
    } : {
      mi: value,
      km: value ? convertDistanceMiStringToKmString(value) : '',
    },
});

export const generatePaceValues = (
  value = '',
  unit: Unit,
  current = INITIAL_VALUES,
): UnitValues => ({
  ...current,
  ...unit === 'km'
    ? {
      km: value,
      mi: value ? convertPaceKmStringToMiString(value) : '',
    } : {
      mi: value,
      km: value ? convertPaceMiStringToKmString(value) : '',
    },
});

export const getTitleForPace = (pace: string, unit: Unit) =>
  `${pace} minutes per ${unit === 'km' ? 'kilometer' : 'mile'}`;

export const getDescriptionForPace = (pace: string, unit: Unit) => {
  const valueConverted = unit === 'km'
    ? convertPaceKmStringToMiString(pace)
    : convertPaceMiStringToKmString(pace);
  const unitConverted = unit === 'km' ? 'mile' : 'kilometer';
  return `${valueConverted} minutes per ${unitConverted}`;
};

export const getTitleForDistance = (distance: string, unit: Unit) => {
  const distanceNumber = parseFloat(distance);
  const distancePhrase = distanceNumber === 1
    ? unit === 'km' ? 'kilometer' : 'mile'
    : unit === 'km' ? 'kilometers' : 'miles';
  return `${distance} ${distancePhrase}`;
};

export const getDescriptionForDistance = (distance: string, unit: Unit) => {
  const valueConverted = unit === 'km'
    ? convertDistanceKmStringToMiString(distance)
    : convertDistanceMiStringToKmString(distance);
  const numberConverted = parseFloat(valueConverted);
  const unitConverted = numberConverted === 1
    ? unit === 'km' ? 'mile' : 'kilometer'
    : unit === 'km' ? 'miles' : 'kilometers';
  return `${valueConverted} ${unitConverted}`;
};

export const getTitleForRace = (
  distance: string,
  unit: Unit,
  time: string,
) => {
  const distanceNumber = parseFloat(distance);
  const distancePhrase = distanceNumber === 1
    ? unit === 'km' ? 'kilometer' : 'mile'
    : unit === 'km' ? 'kilometers' : 'miles';
  return `${distance} ${distancePhrase} in ${time} minutes`;
};

export const getDescriptionForRace = (
  distance: string,
  unit: Unit,
  time: string,
) => {
  const valueConverted = unit === 'km'
    ? convertDistanceKmStringToMiString(distance)
    : convertDistanceMiStringToKmString(distance);
  const numberConverted = parseFloat(valueConverted);
  const unitConverted = numberConverted === 1
    ? unit === 'km' ? 'mile' : 'kilometer'
    : unit === 'km' ? 'miles' : 'kilometers';
  return `${valueConverted} ${unitConverted} in ${time} minutes`;
};

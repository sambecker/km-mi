import { Mode } from './mode';
import {
  Unit,
  convertDistanceKmStringToMiString,
  convertPaceKmStringToMiString,
} from './unit';

export type SiteParams = {
  distance?: string
  pace?: string
  unit?: string
  time?: string
}

const DISTANCE_PLACEHOLDER_KM = '10';
const PACE_PLACEHOLDER_KM = '4:00';
export const TIME_PLACEHOLDER = '20:00';

export const modeFromParams = ({ distance, pace, time }: SiteParams): Mode => {
  if (time && distance) {
    return 'race';
  } else if (pace) {
    return 'pace';
  } else {
    return 'distance';
  }
};

export const inputPlaceholderForModeUnit = (
  mode: Mode = 'distance',
  unit: Unit,
) => {
  switch (mode) {
  case 'pace':
    return unit === 'km'
      ? PACE_PLACEHOLDER_KM
      : convertPaceKmStringToMiString(PACE_PLACEHOLDER_KM);
  default:
    return unit === 'km'
      ? DISTANCE_PLACEHOLDER_KM
      : convertDistanceKmStringToMiString(DISTANCE_PLACEHOLDER_KM);
  }
};

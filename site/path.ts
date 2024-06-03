import { formatTimeString } from '@/utility/number';
import { DEFAULT_MODE } from './mode';
import { INITIAL_VALUES, Unit } from './unit';

// DISTANCE: 2/km
export const pathForDistance = (value: string | undefined, unit: Unit) =>
  value ? `/${value}/${unit}` : '/';

// PACE: pace/2:20/km
export const pathForPace = (value: string | undefined, unit: Unit) =>
  value ? `/pace/${value}/${unit}` : '/';

// RACE: 5/km/in/34:30
export const pathForRace = (
  distance: string | undefined,
  unit: Unit,
  time: string | undefined,
) =>
  distance ? `${pathForDistance(distance, unit)}/in/${time}` : '/';

export const pathForDistanceImage = (value: string | undefined, unit: Unit) =>
  `${pathForDistance(value, unit)}/image`;

export const pathForPaceImage = (value: string | undefined, unit: Unit) =>
  `${pathForPace(value, unit)}/image`;

export const pathForRaceImage = (
  value: string | undefined,
  unit: Unit,
  time: string | undefined,
) =>
  `${pathForRace(value, unit, time)}/image`;

export const updateUrl = (
  mode = DEFAULT_MODE,
  { km, mi } = INITIAL_VALUES,
  time?: string,
) => {
  if (mode === 'race' && Boolean(time)) {
    window.history.pushState(
      { mode, time },
      '',
      pathForRace(km || mi, km ? 'km' : 'mi', formatTimeString(time)),
    );
  } else if (Boolean(km)) {
    window.history.pushState(
      { mode, km },
      '',
      mode === 'pace'
        ? pathForPace(km, 'km')
        : pathForDistance(km, 'km')
    );
  } else if (Boolean(mi)) {
    window.history.pushState(
      { mode, mi },
      '',
      mode === 'pace'
        ? pathForPace(mi, 'mi')
        : pathForDistance(mi, 'mi')
    );
  } else {
    window.history.pushState(
      { mode },
      '',
      '/',
    );
  }
};

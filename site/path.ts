import { UnitValues } from './unit';

export const pathForKm = (km?: string) => km ? `/km/${km}` : '/';

export const pathForMi = (mi?: string) => mi ? `/mi/${mi}` : '/';

export const pathForKmImage = (km?: string) => `${pathForKm(km)}/image`;

export const pathForMiImage = (mi?: string) => `${pathForMi(mi)}/image`;

export const updateUrlForUnit = ({ km, mi }: UnitValues) => {
  if (Boolean(km)) {
    window.history.pushState({ km }, '', pathForKm(km));
  } else if (Boolean(mi)) {
    window.history.pushState({ mi }, '', pathForMi(mi));
  } else {
    window.history.pushState({}, '', '/');
  }
};

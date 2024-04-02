import { ReadonlyURLSearchParams } from 'next/navigation';

const KM_MI_CONVERSION = 0.621371;
const MI_KM_CONVERSION = 1.60934;

export type Unit = 'km' | 'mi';

export type UnitValues = Record<Unit, string | undefined>;

const INITIAL_VALUES: UnitValues = { km: '', mi: '' };

export const pathForKm = (km?: string) =>
  km ? `/km/${km}` : '/';

export const pathForMi = (mi?: string) =>
  mi ? `/mi/${mi}` : '/';

export const getUnitFromSearchParams = (
  params: ReadonlyURLSearchParams,
): Unit | undefined => {
  if (params.has('km')) {
    return 'km';
  } else if (params.has('mi')) {
    return 'mi';
  }
};

export const getValuesFromSearchParams = (
  params: ReadonlyURLSearchParams,
): UnitValues => ({
  km: params.get('km') ?? undefined,
  mi: params.get('mi') ?? undefined,
});

const convertKmToMi = (km: number): number => km * KM_MI_CONVERSION;

const convertMiToKm = (mi: number): number => mi * MI_KM_CONVERSION;

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
  mi: km ? convertKmToMi(parseFloat(km)).toString() : undefined,
});

export const generateValuesFromMi = (
  mi?: string,
  current = INITIAL_VALUES,
) => ({
  ...current,
  mi,
  km: mi ? convertMiToKm(parseFloat(mi)).toString() : undefined,
});

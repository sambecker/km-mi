import { ReadonlyURLSearchParams } from 'next/navigation';

const KM_MI_CONVERSION = 0.621371;
const MI_KM_CONVERSION = 1.60934;

export type Unit = 'km' | 'mi';

export type UnitValues = Record<Unit, string | undefined>;

const INITIAL_VALUES: UnitValues = { km: '', mi: '' };

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

export const updateKmValue = (
  current: UnitValues = INITIAL_VALUES,
  km?: string,
) => ({
  ...current,
  km,
  mi: km ? convertKmToMi(parseFloat(km)).toString() : undefined,
});

export const updateMiValue = (
  current: UnitValues = INITIAL_VALUES,
  mi?: string,
) => ({
  ...current,
  mi,
  km: mi ? convertMiToKm(parseFloat(mi)).toString() : undefined,
});

import { ReadonlyURLSearchParams } from 'next/navigation';

export type Unit = 'km' | 'mi';

export type UnitValues = Record<Unit, string | undefined>;

export const getUnitFromSearchParams = (
  params: ReadonlyURLSearchParams,
): Unit | undefined => {
  if (params.has('km')) {
    return 'km';
  } else if (params.has('mi')) {
    return 'mi';
  }
};

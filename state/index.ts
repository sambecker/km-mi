import { Unit, UnitValues } from '@/site';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface AppState {
  unit?: Unit
  setUnit?: Dispatch<SetStateAction<Unit | undefined>>
  values?: UnitValues
  setValues?: Dispatch<SetStateAction<UnitValues | undefined>>
}

export const AppStateContext = createContext<AppState>({});

export const useAppState = () =>
  useContext(AppStateContext);

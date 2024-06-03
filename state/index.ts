import { Mode } from '@/site/mode';
import { Unit, UnitValues } from '@/site/unit';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface AppState {
  mode?: Mode
  setMode?: (mode: Mode) => void
  unit?: Unit
  setUnit?: Dispatch<SetStateAction<Unit | undefined>>
  paceValues?: UnitValues
  setPaceValues?: Dispatch<SetStateAction<UnitValues | undefined>>
  distanceValues?: UnitValues
  setDistanceValues?: Dispatch<SetStateAction<UnitValues | undefined>>
  time?: string
  setTime?: Dispatch<SetStateAction<string | undefined>>
}

export const AppStateContext = createContext<AppState>({});

export const useAppState = () =>
  useContext(AppStateContext);

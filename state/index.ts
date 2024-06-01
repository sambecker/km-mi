import { Mode } from '@/site/mode';
import { Unit, UnitValues } from '@/site/unit';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface AppState {
  mode?: Mode
  setMode?: Dispatch<SetStateAction<Mode | undefined>>
  unit?: Unit
  setUnit?: Dispatch<SetStateAction<Unit | undefined>>
  values?: UnitValues
  setValues?: Dispatch<SetStateAction<UnitValues | undefined>>
}

export const AppStateContext = createContext<AppState>({});

export const useAppState = () =>
  useContext(AppStateContext);

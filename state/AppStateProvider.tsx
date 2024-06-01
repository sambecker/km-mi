'use client';

import {
  Unit,
  UnitValues,
  initializeUnit,
  initializeValues,
} from '@/site/unit';
import { AppStateContext } from '.';
import { ReactNode, useState } from 'react';
import { Mode } from '@/site/mode';

export default function AppStateProvider({
  km,
  mi,
  children,
}: {
  km?: string
  mi?: string
  children: ReactNode
}) {
  const [mode, setMode] = useState<Mode | undefined>('pace');

  const [unit, setUnit] = useState<Unit | undefined>(
    initializeUnit(km, mi)
  );
  const [values, setValues] = useState<UnitValues | undefined>(
    initializeValues(km, mi)
  );

  return (
    <AppStateContext.Provider value={{
      mode,
      setMode,
      unit,
      setUnit,
      values,
      setValues,
    }}>
      {children}
    </AppStateContext.Provider>
  );
}

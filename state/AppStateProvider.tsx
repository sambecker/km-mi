'use client';

import { Unit, UnitValues, initializeUnit, initializeValues } from '@/unit';
import { AppStateContext } from '.';
import { useState } from 'react';

export default function AppStateProvider({
  km,
  mi,
  children,
}: {
  km?: string
  mi?: string
  children: React.ReactNode
}) {
  const [unit, setUnit] = useState<Unit | undefined>(
    initializeUnit(km, mi)
  );
  const [values, setValues] = useState<UnitValues | undefined>(
    initializeValues(km, mi)
  );

  return (
    <AppStateContext.Provider value={{
      unit,
      setUnit,
      values,
      setValues,
    }}>
      {children}
    </AppStateContext.Provider>
  );
}

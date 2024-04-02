'use client';

import { Unit, UnitValues } from '@/unit';
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
  const [unit, setUnit] = useState<Unit | undefined>(Boolean(km)
    ? 'km'
    : Boolean(mi)
      ? 'mi'
      : undefined);
  const [values, setValues] = useState<UnitValues | undefined>({ km, mi });

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

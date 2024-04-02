'use client';

import { Unit, UnitValues } from '@/unit';
import { AppStateContext } from '.';
import { useState } from 'react';

export default function AppStateProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [unit, setUnit] = useState<Unit>();
  const [values, setValues] = useState<UnitValues>();

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

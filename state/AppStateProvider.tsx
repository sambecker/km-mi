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
import { useParams } from 'next/navigation';

export default function AppStateProvider({
  children,
}: {
  children: ReactNode
}) {
  const params = useParams<{ km?: string, mi?: string }>();
  
  const km = params.km ? decodeURIComponent(params.km) : undefined;
  const mi = params.mi ? decodeURIComponent(params.mi) : undefined;

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

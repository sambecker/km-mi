'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useAppState } from '.';
import { getUnitFromSearchParams, getValuesFromSearchParams } from '@/unit';

export default function AppStateInitializer() {
  const hasInitialized = useRef(false);

  const params = useSearchParams();
  
  const { setUnit, setValues } = useAppState();

  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      setUnit?.(getUnitFromSearchParams(params));
      setValues?.(getValuesFromSearchParams(params));
    }
  }, [params, setUnit, setValues]);
  return <></>;
}

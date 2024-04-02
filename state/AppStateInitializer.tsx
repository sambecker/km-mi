'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useAppState } from '.';
import { getUnitFromSearchParams } from '@/unit';

export default function AppStateInitializer() {
  const params = useSearchParams();

  const { setUnit } = useAppState();

  useEffect(() => {
    setUnit?.(getUnitFromSearchParams(params));
  }, [params, setUnit]);
  return <></>;
}

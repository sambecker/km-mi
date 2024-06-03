'use client';

import {
  Unit,
  UnitValues,
  initializeValues,
  unitFromString,
} from '@/site/unit';
import { AppStateContext } from '.';
import { ReactNode, useCallback, useState } from 'react';
import { Mode } from '@/site/mode';
import { useParams, useRouter } from 'next/navigation';
import { SiteParams, modeFromParams } from '@/site';
import { pathForDistance, pathForPace } from '@/site/path';
import { formatTimeString } from '@/utility/number';

export default function AppStateProvider({
  children,
}: {
  children: ReactNode
}) {
  const params = useParams<SiteParams>();

  const router = useRouter();
  
  const distance = params.distance
    ? decodeURIComponent(params.distance)
    : undefined;
  const pace = params.pace
    ? decodeURIComponent(params.pace)
    : undefined;
  const unitFromParams = params.unit
    ? unitFromString(params.unit)
    : undefined;
  const timeFromParams = params.time
    ? decodeURIComponent(params.time)
    : undefined;

  const [mode, _setMode] = useState<Mode | undefined>(
    modeFromParams(params)
  );

  const [unit, setUnit] = useState<Unit | undefined>(
    unitFromParams
  );

  const [paceValues, setPaceValues] = useState<UnitValues | undefined>(
    initializeValues(mode, pace, unitFromParams)
  );

  const [distanceValues, setDistanceValues] = useState<UnitValues | undefined>(
    initializeValues(mode, distance, unitFromParams)
  );

  const [time, setTime] = useState<string | undefined>(
    formatTimeString(timeFromParams)
  );

  const setMode = useCallback((mode: Mode) => {
    _setMode(mode);
    switch (mode) {
    case 'distance':
      if (!distanceValues?.km || !distanceValues?.mi) {
        initializeValues('distance', distance, unitFromParams);
      }
      router.push(pathForDistance(
        unit === 'km' ? distanceValues?.km : distanceValues?.mi,
        unit ?? 'km',
      ));
      break;
    case 'pace':
      if (!paceValues?.km || !paceValues?.mi) {
        initializeValues('pace', pace, unitFromParams);
      }
      router.push(pathForPace(
        unit === 'km' ? paceValues?.km : paceValues?.mi,
        unit ?? 'km',
      ));
      break;
    }
  }, [
    distance,
    pace,
    unitFromParams,
    distanceValues?.km,
    distanceValues?.mi,
    paceValues?.km,
    paceValues?.mi,
    router,
    unit,
  ]);


  return (
    <AppStateContext.Provider value={{
      mode,
      setMode,
      unit,
      setUnit,
      paceValues,
      setPaceValues,
      distanceValues,
      setDistanceValues,
      time,
      setTime,
    }}>
      {children}
    </AppStateContext.Provider>
  );
}

'use client';

import { useAppState } from '@/state';
import { characterForUnit } from '@/site/unit';
import AppHeaderSegment from './AppHeaderSegment';

export default function AppHeader() {
  const { unit, setUnit } = useAppState();

  return (
    <div className="relative flex gap-2 text-8xl font-bold select-none">
      <AppHeaderSegment
        text="KM"
        shouldFade={unit !== 'km'}
        onClick={() => setUnit?.('km')}
      />
      <AppHeaderSegment
        text={characterForUnit(unit)}
      />
      <AppHeaderSegment
        text="MI"
        shouldFade={unit !== 'mi'}
        onClick={() => setUnit?.('mi')}
      />
    </div>
  );
}

'use client';

import { useAppState } from '@/state';
import { characterForUnit } from '@/site/unit';
import AppUnitSegment from './AppUnitSegment';

export default function AppUnits() {
  const { unit, setUnit } = useAppState();

  return (
    <div className="relative flex gap-2 text-8xl font-bold select-none">
      <AppUnitSegment
        text="KM"
        shouldFade={unit !== 'km'}
        onClick={() => setUnit?.('km')}
      />
      <AppUnitSegment
        text={characterForUnit(unit)}
      />
      <AppUnitSegment
        text="MI"
        shouldFade={unit !== 'mi'}
        onClick={() => setUnit?.('mi')}
      />
    </div>
  );
}

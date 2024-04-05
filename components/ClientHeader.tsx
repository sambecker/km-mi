'use client';

import { useAppState } from '@/state';
import { characterForUnit } from '@/site';
import ClientHeaderSegment from './ClientHeaderSegment';

export default function ClientHeader() {
  const { unit, setUnit } = useAppState();

  return (
    <div className="flex gap-2 text-8xl font-bold select-none">
      <ClientHeaderSegment
        text="KM"
        shouldFade={unit !== 'km'}
        onClick={() => setUnit?.('km')}
      />
      <ClientHeaderSegment
        text={characterForUnit(unit)}
      />
      <ClientHeaderSegment
        text="MI"
        shouldFade={unit !== 'mi'}
        onClick={() => setUnit?.('mi')}
      />
    </div>
  );
}

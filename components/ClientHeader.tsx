'use client';

import { useAppState } from '@/state';
import { characterForUnit } from '@/site/unit';
import ClientHeaderSegment from './ClientHeaderSegment';
import { twMerge } from 'tailwind-merge';
import RaceBadge from './RaceBadge';

export default function ClientHeader() {
  const { unit, setUnit } = useAppState();

  return (
    <div className="relative flex gap-2 text-8xl font-bold select-none">
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
      <RaceBadge className={twMerge(
        'absolute -top-2',
        unit === 'km' ? '-left-6' : '-right-6',
      )}>
        29:30
      </RaceBadge>
    </div>
  );
}

'use client';

import { useAppState } from '@/state';

export default function ClientHeader() {
  const { unit } = useAppState();

  return (
    <div>
      <span className={unit !== 'km' ? 'opacity-10' : undefined}>
        KM
      </span>
      /
      <span className={unit !== 'mi' ? 'opacity-10' : undefined}>
        MI
      </span>
    </div>
  );
}

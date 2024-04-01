'use client';

import { useSearchParams } from 'next/navigation';

export default function ClientHeader() {
  const searchParams = useSearchParams();
  const isKm = Boolean(searchParams.get('km'));
  const isMi = Boolean(searchParams.get('mi'));
  return (
    <div>
      <span className={!isKm ? 'opacity-10' : undefined}>
        KM
      </span>
      /
      <span className={!isMi ? 'opacity-10' : undefined}>
        MI
      </span>
    </div>
  );
}

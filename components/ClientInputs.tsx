'use client';

import { useSearchParams } from 'next/navigation';
import ClientInput from './ClientInput';
import { useAppState } from '@/state';

export default function ClientInputs() {
  const searchParams = useSearchParams();
  const km = searchParams.get('km') || '0';
  const mi = searchParams.get('mi') || '0';
  const { setUnit } = useAppState();
  return (
    <div className="flex gap-2 [&>*]:grow">
      <ClientInput
        path="km"
        value={km === '0' ? '' : km}
        onFocus={() => setUnit?.('km')}
      />
      <ClientInput
        path="mi"
        value={mi === '0' ? '' : mi}
        onFocus={() => setUnit?.('mi')}
      />
    </div>
  );
}

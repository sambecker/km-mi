'use client';

import { useSearchParams } from 'next/navigation';
import ClientInput from './ClientInput';

export default function ClientInputs() {
  const searchParams = useSearchParams();
  const km = searchParams.get('km') || '0';
  const mi = searchParams.get('mi') || '0';
  return (
    <div className="flex gap-2 [&>*]:grow">
      <ClientInput
        path="km"
        value={km === '0' ? '' : km}
      />
      <ClientInput
        path="mi"
        value={mi === '0' ? '' : mi}
      />
    </div>
  );
}

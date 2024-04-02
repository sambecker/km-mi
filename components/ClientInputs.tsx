'use client';

import { useAppState } from '@/state';
import { updateKmValue, updateMiValue } from '@/unit';

export default function ClientInputs() {
  const { setUnit, values, setValues } = useAppState();

  return (
    <div className="flex gap-2 [&>*]:grow">
      <input
        type="text"
        value={values?.km ?? ''}
        onChange={e => {
          setValues?.(updateKmValue(values, e.target.value));
          window.history.pushState(
            { km: e.target.value },
            '',
            e.target.value ? `/km/${e.target.value}` : '/',
          );
        }}
        onFocus={() => setUnit?.('km')}
        placeholder="Per hour"
      />
      <input
        type="text"
        value={values?.mi ?? ''}
        onChange={e => {
          setValues?.(updateMiValue(values, e.target.value));
          window.history.pushState(
            { mi: e.target.value },
            '',
            e.target.value ? `/mi/${e.target.value}` : '/',
          );
        }}
        onFocus={() => setUnit?.('mi')}
        placeholder="Per hour"
      />
    </div>
  );
}

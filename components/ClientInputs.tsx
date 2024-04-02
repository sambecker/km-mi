'use client';

import { useAppState } from '@/state';
import { pathForKm, pathForMi, generateValuesFromKm, generateValuesFromMi } from '@/unit';

export default function ClientInputs() {
  const { setUnit, values, setValues } = useAppState();

  const renderInput = (
    value = '',
    onChange: (value?: string) => void,
    onFocus: () => void,
  ) =>
    <input
      type="text"
      className="grow"
      value={value}
      onChange={e => onChange(e.target.value)}
      onFocus={onFocus}
      placeholder="Per hour"
    />;

  return (
    <div className="flex gap-2">
      {renderInput(
        values?.km,
        km => {
          setValues?.(generateValuesFromKm(km, values));
          window.history.pushState({ km }, '', pathForKm(km));
        },
        () => setUnit?.('km'),
      )}
      {renderInput(
        values?.mi,
        mi => {
          setValues?.(generateValuesFromMi(mi, values));
          window.history.pushState({ mi }, '', pathForMi(mi));
        },
        () => setUnit?.('mi'),
      )}
    </div>
  );
}

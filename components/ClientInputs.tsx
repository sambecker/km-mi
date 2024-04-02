'use client';

import { useAppState } from '@/state';
import {
  pathForKm,
  pathForMi,
  generateValuesFromKm,
  generateValuesFromMi,
} from '@/unit';

export default function ClientInputs() {
  const { setUnit, values, setValues } = useAppState();

  const renderInput = (
    id: string,
    label: string,
    value = '',
    onChange: (value?: string) => void,
    onFocus: () => void,
    placeholder?: string,
  ) =>
    <div className="flex flex-col basis-full gap-1">
      <div className="flex">
        <input
          id={id}
          type="text"
          className="basis-full"
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={() => {
            if (!values?.km && !values?.mi) {
              setUnit?.(undefined);
            }
          }}
          placeholder={placeholder ?? '4:40'}
        />
      </div>
      <label
        htmlFor={id}
        className="text-sm text-gray-300 dark:text-gray-700"
      >
        {label}
      </label>
    </div>;

  return (
    <div className="flex gap-2">
      {renderInput(
        'km',
        'minutes per km',
        values?.km,
        km => {
          setValues?.(generateValuesFromKm(km, values));
          window.history.pushState({ km }, '', pathForKm(km));
        },
        () => setUnit?.('km'),
      )}
      {renderInput(
        'mi',
        'minutes per mile',
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

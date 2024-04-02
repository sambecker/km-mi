'use client';

import { useAppState } from '@/state';
import {
  generateValuesFromKm,
  generateValuesFromMi,
  updateUrlForUnit,
} from '@/unit';
import { twMerge } from 'tailwind-merge';

const DEFAULT_PLACEHOLDER = '4:40';

export default function ClientInputs() {
  const { unit, setUnit, values, setValues } = useAppState();

  const renderInput = (
    id: string,
    label: string,
    value = '',
    isSelected: boolean,
    onChange: (value?: string) => void,
    onFocus: (value?: string) => void,
    placeholder?: string,
  ) =>
    <div className="flex flex-col basis-full gap-2">
      <div className="flex">
        <input
          id={id}
          type="text"
          className="basis-full"
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={e => onFocus(e.target.value)}
          onBlur={() => {
            if (!values?.km && !values?.mi) {
              setUnit?.(undefined);
            }
          }}
          placeholder={placeholder ?? DEFAULT_PLACEHOLDER}
        />
      </div>
      <label
        htmlFor={id}
        className={twMerge(
          'pl-2 text-[12.5px] font-medium',
          !isSelected && 'text-gray-700',
        )}
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
        unit === 'km',
        km => {
          setValues?.(generateValuesFromKm(km, values));
          updateUrlForUnit ({ km });
        },
        km => {
          setUnit?.('km');
          updateUrlForUnit({ km });
        }
      )}
      {renderInput(
        'mi',
        'minutes per mile',
        values?.mi,
        unit === 'mi',
        mi => {
          setValues?.(generateValuesFromMi(mi, values));
          updateUrlForUnit({ mi });
        },
        mi => {
          setUnit?.('mi');
          updateUrlForUnit({ mi });
        }
      )}
    </div>
  );
}

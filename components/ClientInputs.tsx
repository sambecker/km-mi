'use client';

import { useAppState } from '@/state';
import {
  convertKmStringToMiString,
  generateValuesFromKm,
  updateUrlForUnit,
} from '@/unit';
import { useCallback, useEffect, useRef } from 'react';
import ClientInput from './ClientInput';

const PLACEHOLDER_KM = '4:00';
const PLACEHOLDER_MI = convertKmStringToMiString(PLACEHOLDER_KM);

export default function ClientInputs() {
  const { unit, setUnit, values, setValues } = useAppState();

  const inputRefKm = useRef<HTMLInputElement>(null);
  const inputRefMi = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (unit === 'km') {
      inputRefKm.current?.focus();
    } else if (unit === 'mi') {
      inputRefMi.current?.focus();
    }
  }, [unit]);

  const onBlur = useCallback(() => {
    if (!values?.km && !values?.mi) {
      setUnit?.(undefined);
    }
  }, [values?.km, values?.mi, setUnit]);

  return (
    <div className="flex gap-2">
      <ClientInput
        id="km"
        inputRef={inputRefKm}
        label="minutes/km"
        value={values?.km}
        isSelected={unit === 'km' || Boolean(values?.km)}
        onChange={km => {
          setValues?.(generateValuesFromKm(km, values));
          updateUrlForUnit ({ km });
        }}
        onFocus={km => {
          setUnit?.('km');
          updateUrlForUnit({ km });
        }}
        onBlur={onBlur}
        placeholder={PLACEHOLDER_KM}
      />
      <ClientInput
        id="mi"
        inputRef={inputRefMi}
        label="minutes/mile"
        value={values?.mi}
        isSelected={unit === 'mi' || Boolean(values?.mi)}
        onChange={mi => {
          setValues?.(generateValuesFromKm(mi, values));
          updateUrlForUnit ({ mi });
        }}
        onFocus={mi => {
          setUnit?.('mi');
          updateUrlForUnit({ mi });
        }}
        onBlur={onBlur}
        placeholder={PLACEHOLDER_MI}
      />
    </div>
  );
}

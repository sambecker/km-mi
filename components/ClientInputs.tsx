'use client';

import { useAppState } from '@/state';
import {
  Unit,
  convertKmStringToMiString,
  generateValuesFromKm,
  generateValuesFromMi,
  updateUrlForUnit,
} from '@/site/unit';
import { useCallback, useEffect, useRef } from 'react';
import ClientInput from './ClientInput';
import { formatTimeString } from '@/utility/number';

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

  const onChange = useCallback((unit: Unit, value?: string) => {
    setValues?.(values => unit === 'km'
      ? generateValuesFromKm(value, values)
      : generateValuesFromMi(value, values));
    const valueFormatted = formatTimeString(value);
    // Only update the URL if formatted value is valid
    if (valueFormatted) {
      updateUrlForUnit(unit === 'km'
        ? { km: valueFormatted }
        : { mi: valueFormatted });
    }
  }, [setValues]);

  const onBlur = useCallback((unit: Unit) => {
    if (!values?.km && !values?.mi) {
      setUnit?.(undefined);
    }
    const km = formatTimeString(values?.km);
    const mi = formatTimeString(values?.mi);
    setValues?.({ km, mi });
    updateUrlForUnit(unit === 'km' ? { km } : { mi });
  }, [values?.km, values?.mi, setUnit, setValues]);

  return (
    <div className="flex gap-2">
      <ClientInput
        id="km"
        inputRef={inputRefKm}
        label="minutes/km"
        value={values?.km}
        isSelected={unit === 'km' || Boolean(values?.km)}
        onChange={km => onChange('km', km)}
        onFocus={km => {
          setUnit?.('km');
          updateUrlForUnit({ km });
        }}
        onBlur={() => onBlur('km')}
        placeholder={PLACEHOLDER_KM}
      />
      <ClientInput
        id="mi"
        inputRef={inputRefMi}
        label="minutes/mile"
        value={values?.mi}
        isSelected={unit === 'mi' || Boolean(values?.mi)}
        onChange={mi => onChange('mi', mi)}
        onFocus={mi => {
          setUnit?.('mi');
          updateUrlForUnit({ mi });
        }}
        onBlur={() => onBlur('mi')}
        placeholder={PLACEHOLDER_MI}
      />
    </div>
  );
}

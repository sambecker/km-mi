'use client';

import { useAppState } from '@/state';
import {
  Unit,
  generateDistanceValues,
  generatePaceValues,
} from '@/site/unit';
import { updateUrlForModeUnit } from '@/site/path';
import { useCallback, useEffect, useRef } from 'react';
import ClientInput from './ClientInput';
import { formatTimeString } from '@/utility/number';
import { inputPlaceholderForModeUnit } from '@/site';
import { DEFAULT_MODE } from '@/site/mode';

export default function ClientInputs() {
  const {
    mode = DEFAULT_MODE,
    unit,
    setUnit,
    paceValues,
    setPaceValues,
    distanceValues,
    setDistanceValues,
  } = useAppState();

  const inputRefKm = useRef<HTMLInputElement>(null);
  const inputRefMi = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (unit === 'km') {
      inputRefKm.current?.focus();
    } else if (unit === 'mi') {
      inputRefMi.current?.focus();
    }
  }, [unit]);

  const onChange = useCallback((
    value: string | undefined,
    unit: Unit,
  ) => {
    if (mode === 'pace') {
      setPaceValues?.(values =>
        generatePaceValues(value, unit, values));
    } else {
      setDistanceValues?.(values =>
        generateDistanceValues(value, unit, values));
    }

    const valueFormatted = mode === 'pace'
      ? formatTimeString(value)
      : value;

    // Only update the URL if formatted value is valid
    if (valueFormatted) {
      updateUrlForModeUnit(
        mode,
        unit === 'km'
          ? { km: valueFormatted }
          : { mi: valueFormatted });
    }
  }, [mode, setDistanceValues, setPaceValues]);

  const onBlur = useCallback((unit: Unit) => {
    if (
      !distanceValues?.km &&
      !distanceValues?.mi &&
      !paceValues?.km &&
      !paceValues?.mi
    ) {
      setUnit?.(undefined);
      updateUrlForModeUnit();
    } else {
      const km = mode === 'pace'
        ? formatTimeString(paceValues?.km)
        : distanceValues?.km;
      const mi = mode === 'pace'
        ? formatTimeString(paceValues?.mi)
        : distanceValues?.mi;

      if (mode === 'pace') {
        setPaceValues?.({ km, mi });
      } else {
        setDistanceValues?.({ km, mi });
      }

      updateUrlForModeUnit(mode, unit === 'km' ? { km } : { mi });
    }
  }, [
    distanceValues?.km,
    distanceValues?.mi,
    paceValues?.km,
    paceValues?.mi,
    mode,
    setUnit,
    setPaceValues,
    setDistanceValues,
  ]);

  return (
    <div className="flex gap-2">
      <ClientInput
        mode={mode}
        unit="km"
        inputRef={inputRefKm}
        value={mode === 'pace'
          ? paceValues?.km
          : distanceValues?.km}
        isSelected={
          unit === 'km' ||
          (mode !== 'pace' && Boolean(distanceValues?.km)) ||
          (mode === 'pace' && Boolean(paceValues?.km))
        }
        onChange={km => onChange(km, 'km')}
        onFocus={km => {
          setUnit?.('km');
          updateUrlForModeUnit(mode, { km });
        }}
        onBlur={() => onBlur('km')}
        placeholder={inputPlaceholderForModeUnit(mode, 'km')}
      />
      <ClientInput
        mode={mode}
        unit="mi"
        inputRef={inputRefMi}
        value={mode === 'pace'
          ? paceValues?.mi
          : distanceValues?.mi}
        isSelected={
          unit === 'mi' ||
          (mode !== 'pace' && Boolean(distanceValues?.mi)) ||
          (mode === 'pace' && Boolean(paceValues?.mi))
        }
        onChange={mi => onChange(mi, 'mi')}
        onFocus={mi => {
          setUnit?.('mi');
          updateUrlForModeUnit(mode, { mi });
        }}
        onBlur={() => onBlur('mi')}
        placeholder={inputPlaceholderForModeUnit(mode, 'mi')}
      />
    </div>
  );
}

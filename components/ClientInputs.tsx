'use client';

import { useAppState } from '@/state';
import {
  Unit,
  generateDistanceValues,
  generatePaceValues,
} from '@/site/unit';
import { updateUrl } from '@/site/path';
import { useCallback, useEffect, useRef } from 'react';
import ClientInput from './ClientInput';
import { formatTimeString } from '@/utility/number';
import { TIME_PLACEHOLDER, inputPlaceholderForModeUnit } from '@/site';
import { DEFAULT_MODE, inputLabelForModeUnit } from '@/site/mode';

export default function ClientInputs() {
  const {
    mode = DEFAULT_MODE,
    unit,
    setUnit,
    paceValues,
    setPaceValues,
    distanceValues,
    setDistanceValues,
    time,
    setTime,
  } = useAppState();

  const inputRefKm = useRef<HTMLInputElement>(null);
  const inputRefMi = useRef<HTMLInputElement>(null);
  const inputRefTime = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (unit === 'km') {
      inputRefKm.current?.focus();
    } else if (unit === 'mi') {
      inputRefMi.current?.focus();
    }
  }, [unit]);

  const onDistancePaceChange = useCallback((
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
      updateUrl(
        mode,
        unit === 'km'
          ? { km: valueFormatted }
          : { mi: valueFormatted },
        mode === 'race' ? time : undefined,
      );
    }
  }, [mode, setDistanceValues, setPaceValues, time]);

  const onRaceChange = useCallback((value: string | undefined) => {
    setTime?.(value);
    updateUrl(
      mode,
      unit === 'km'
        ? { km: distanceValues?.km }
        : { mi: distanceValues?.mi },
      value,
    );
  }, [distanceValues?.km, distanceValues?.mi, mode, setTime, unit]);

  const onDistancePaceBlur = useCallback((unit: Unit) => {
    if (
      !distanceValues?.km &&
      !distanceValues?.mi &&
      !paceValues?.km &&
      !paceValues?.mi &&
      !time
    ) {
      setUnit?.(undefined);
      updateUrl();
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

      updateUrl(
        mode,
        unit === 'km' ? { km } : { mi },
        mode === 'race' ? time : undefined,
      );
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
    time,
  ]);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <ClientInput
          id={`${mode}-${unit}`}
          label={inputLabelForModeUnit(mode, 'km')}
          inputRef={inputRefKm}
          value={mode === 'pace'
            ? paceValues?.km
            : distanceValues?.km}
          isSelected={
            unit === 'km' ||
            (mode !== 'pace' && Boolean(distanceValues?.km)) ||
            (mode === 'pace' && Boolean(paceValues?.km))
          }
          onChange={km => onDistancePaceChange(km, 'km')}
          onFocus={km => {
            setUnit?.('km');
            updateUrl(mode, { km }, time);
          }}
          onBlur={() => onDistancePaceBlur('km')}
          placeholder={inputPlaceholderForModeUnit(mode, 'km')}
        />
        <ClientInput
          id={`${mode}-${unit}`}
          label={inputLabelForModeUnit(mode, 'mi')}
          inputRef={inputRefMi}
          value={mode === 'pace'
            ? paceValues?.mi
            : distanceValues?.mi}
          isSelected={
            unit === 'mi' ||
            (mode !== 'pace' && Boolean(distanceValues?.mi)) ||
            (mode === 'pace' && Boolean(paceValues?.mi))
          }
          onChange={mi => onDistancePaceChange(mi, 'mi')}
          onFocus={mi => {
            setUnit?.('mi');
            updateUrl(mode, { mi }, time);
          }}
          onBlur={() => onDistancePaceBlur('mi')}
          placeholder={inputPlaceholderForModeUnit(mode, 'mi')}
        />
      </div>
      {mode === 'race' &&
        <ClientInput
          id={mode}
          label="race time"
          inputRef={inputRefTime}
          value={time}
          onChange={onRaceChange}
          isSelected={Boolean(time)}
          placeholder={TIME_PLACEHOLDER}
          onFocus={() => {
            updateUrl(
              mode,
              unit === 'km'
                ? { km: distanceValues?.km }
                : { mi: distanceValues?.mi },
              time,
            );
          }}
        />}
    </div>
  );
}

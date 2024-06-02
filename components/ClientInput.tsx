import { RefObject } from 'react';
import { Unit } from '@/site/unit';
import { twMerge } from 'tailwind-merge';
import { Mode, inputLabelForModeUnit } from '@/site/mode';

export default function ClientInput({
  mode,
  unit,
  inputRef,
  value = '',
  isSelected,
  onChange,
  onFocus,
  onBlur,
  placeholder,
}: {
  mode: Mode
  unit: Unit
  inputRef: RefObject<HTMLInputElement>
  value?: string,
  isSelected: boolean
  onChange: (value?: string) => void
  onFocus: (value?: string) => void
  onBlur: () => void
  placeholder: string
}) {
  return (
    <div className="flex flex-col basis-full gap-2">
      <div className="flex">
        <input
          id={unit}
          ref={inputRef}
          type="text"
          className="basis-full"
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={e => onFocus(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </div>
      <label
        htmlFor={unit}
        className={twMerge(
          'pl-2 text-[12.5px] font-medium',
          !isSelected && 'text-gray-700',
        )}
      >
        {inputLabelForModeUnit(mode, unit)}
      </label>
    </div>
  );
}

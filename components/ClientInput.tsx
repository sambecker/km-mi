import { RefObject } from 'react';
import ModeDropdown from './ModeDropdown';
import { Unit } from '@/site/unit';
import PaceBadge from './PaceBadge';

export default function ClientInput({
  unit,
  inputRef,
  value = '',
  isSelected,
  onChange,
  onFocus,
  onBlur,
  placeholder,
}: {
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
      <div className="relative">
        <div className="w-full">
          <ModeDropdown
            unit={unit}
            active={isSelected}
          />
        </div>
        <div className="absolute -top-5 -right-8 z-10">
          <PaceBadge>7:00</PaceBadge>
        </div>
      </div>
    </div>
  );
}

import { RefObject } from 'react';
import { twMerge } from 'tailwind-merge';

export default function ClientInput({
  id,
  inputRef,
  label,
  value = '',
  isSelected,
  onChange,
  onFocus,
  onBlur,
  placeholder,
}: {
  id: string
  inputRef: RefObject<HTMLInputElement>
  label: string
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
          id={id}
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
        htmlFor={id}
        className={twMerge(
          'pl-2 text-[12.5px] font-medium',
          !isSelected && 'text-gray-700',
        )}
      >
        {label}
      </label>
    </div>
  );
}

'use client';

import { labelForModeUnit, optionsForUnit } from '@/site/mode';
import { Unit } from '@/site/unit';
import { useAppState } from '@/state';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FaCheck } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

export default function UnitDropdown({
  unit,
  active,
}: {
  unit: Unit
  active?: boolean
}) {
  const { mode, setMode } = useAppState();

  return (
    <Menu>
      <MenuButton className={twMerge(
        'py-1 px-2 text-left',
        'text-[12.5px] font-medium',
        'text-gray-700',
        active && 'text-gray-50',
        'data-[open]:text-gray-50 hover:text-text-gray-50',
        'border border-transparent rounded-md',
        'hover:border-gray-800 data-[open]:border-gray-800',
        'active:bg-gray-900/50 data-[open]:bg-gray-900/50',
      )}>
        <span className="select-none">
          {labelForModeUnit(mode, unit)}
        </span>
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className={twMerge(
          '[--anchor-gap:8px]',
          'border border-gray-800 rounded-md',
          'w-[var(--button-width)]',
        )}
      >
        {(optionsForUnit(unit)).map(option =>
          <MenuItem key={option.label}>
            <button
              className={twMerge(
                'flex py-1.5 px-2 text-left w-full',
                'text-[12.5px] font-medium',
                '[&:not(:last-child)]:border-b border-gray-800',
                'active:bg-gray-900/50',
              )}
              onClick={() => setMode?.(option.mode)}
            >
              <span className="flex-grow">
                {option.label}
              </span>
              <span className={twMerge(
                'text-[10px] pt-1 hidden',
                option.label === labelForModeUnit(mode, unit) && 'inline',
              )}>
                <FaCheck />
              </span>
            </button>
          </MenuItem>)}
      </MenuItems>
    </Menu>
  );
}

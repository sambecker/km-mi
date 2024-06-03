'use client';

import { MODES } from '@/site/mode';
import { useAppState } from '@/state';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FaCheck } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

export default function ModeDropdown() {
  const { mode, setMode } = useAppState();
  return (
    <Menu>
      <MenuButton className={twMerge(
        'py-2 sm:py-1.5',
        'px-3 bg-main w-[160px]',
        'text-[12.5px] font-medium tracking-wider',
        'text-gray-700',
        'text-main',
        'data-[open]:text-main hover:text-text-main',
        'border rounded-full',
        'border-gray-800',
        'active:bg-gray-900/50 data-[open]:bg-gray-900/50',
      )}>
        <span className="select-none uppercase">
          {mode}
        </span>
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className={twMerge(
          'bg-main',
          '[--anchor-gap:8px]',
          'border border-gray-800 rounded-xl',
          'w-[var(--button-width)]',
        )}
      >
        {MODES.map(option =>
          <MenuItem key={option}>
            <button
              className={twMerge(
                'py-2.5 sm:py-2',
                'flex px-2 w-full relative',
                'text-[12.5px] font-medium uppercase tracking-wider',
                '[&:not(:last-child)]:border-b border-gray-800',
                'active:bg-gray-900/50',
              )}
              onClick={() => setMode?.(option)}
            >
              <span className="flex-grow">
                {option}
              </span>
              <span className={twMerge(
                'absolute right-2',
                'text-[10px] pt-1 hidden',
                option === mode && 'inline',
              )}>
                <FaCheck />
              </span>
            </button>
          </MenuItem>)}
      </MenuItems>
    </Menu>
  );
}

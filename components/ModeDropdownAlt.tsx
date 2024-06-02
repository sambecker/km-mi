'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FaCheck } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

export default function ModeDropdownAlt() {

  return (
    <Menu>
      <MenuButton className={twMerge(
        'py-1 px-3 bg-main w-[160px]',
        'text-[12.5px] font-medium',
        'text-gray-700',
        'text-main',
        'data-[open]:text-main hover:text-text-main',
        'border rounded-full',
        'border-gray-800',
        'active:bg-gray-900/50 data-[open]:bg-gray-900/50',
      )}>
        <span className="select-none uppercase">
          Pace
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
        {['Pace', 'Distance', 'Race'].map((page, index) =>
          <MenuItem key={page}>
            <button
              className={twMerge(
                'flex py-1.5 px-2 w-full relative',
                'text-[12.5px] font-medium uppercase',
                '[&:not(:last-child)]:border-b border-gray-800',
                'active:bg-gray-900/50',
              )}
            >
              <span className="flex-grow">
                {page}
              </span>
              <span className={twMerge(
                'absolute right-2',
                'text-[10px] pt-1 hidden',
                index === 0 && 'inline',
              )}>
                <FaCheck />
              </span>
            </button>
          </MenuItem>)}
      </MenuItems>
    </Menu>
  );
}

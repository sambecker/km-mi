'use client';

import { useAppState } from '@/state';
import { twMerge } from 'tailwind-merge';

export default function ClientHeader() {
  const { unit } = useAppState();

  return (
    <div>
      <span className={twMerge(
        'transition-opacity duration-300',
        unit !== 'km' && 'opacity-10',
      )}>
        KM
      </span>
      /
      <span className={twMerge(
        'transition-opacity duration-300',
        unit !== 'mi' && 'opacity-10',
      )}>
        MI
      </span>
    </div>
  );
}

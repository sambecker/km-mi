'use client';

import { useAppState } from '@/state';
import { twMerge } from 'tailwind-merge';

export default function ClientHeader() {
  const { unit } = useAppState();

  const renderFadingSegment = (text: string, shouldFade?: boolean) =>
    <span className={twMerge(
      'transition-opacity duration-300',
      shouldFade && 'opacity-10',
    )}>
      {text}
    </span>;

  return (
    <div className="flex gap-2">
      {renderFadingSegment('KM', unit !== 'km')}
      {renderFadingSegment(unit === 'km' ? '→' : unit === 'mi' ? '←' : '/')}
      {renderFadingSegment('MI', unit !== 'mi')}
    </div>
  );
}

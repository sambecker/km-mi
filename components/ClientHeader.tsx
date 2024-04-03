'use client';

import { useAppState } from '@/state';
import { characterForUnit } from '@/unit';
import { twMerge } from 'tailwind-merge';

export default function ClientHeader() {
  const { unit } = useAppState();

  const renderFadingSegment = (text: string, shouldFade?: boolean) =>
    <span className={twMerge(
      'transition-colors duration-300',
      shouldFade && 'text-gray-900',
    )}>
      {text}
    </span>;

  return (
    <div className="flex gap-2">
      {renderFadingSegment('KM', unit !== 'km')}
      {renderFadingSegment(characterForUnit(unit))}
      {renderFadingSegment('MI', unit !== 'mi')}
    </div>
  );
}

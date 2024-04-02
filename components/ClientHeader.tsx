'use client';

import { useAppState } from '@/state';
import { twMerge } from 'tailwind-merge';

export default function ClientHeader() {
  const { unit, values } = useAppState();

  const renderFadingSegment = (text: string, shouldFade: boolean) =>
    <span className={twMerge(
      'transition-opacity duration-300',
      shouldFade && 'opacity-10',
    )}>
      {text}
    </span>;

  return (
    <div>
      {renderFadingSegment('KM', unit !== 'km')}
      {renderFadingSegment('/', values == undefined)}
      {renderFadingSegment('MI', unit !== 'mi')}
    </div>
  );
}

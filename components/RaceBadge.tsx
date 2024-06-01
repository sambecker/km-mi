import { ReactNode } from 'react';
import { FaAward } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

export default function RaceBadge ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={twMerge(
      'flex items-center gap-1.5',
      'px-2.5 py-0.5 rounded-full',
      'text-lg font-medium',
      'surface-main',
      'border border-gray-700 shadow-lg',
      className,
    )}>
      <FaAward className="text-[0.9em]" />
      {children}
    </div>
  );
}

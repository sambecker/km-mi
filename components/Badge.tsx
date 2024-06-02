import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Badge({
  icon,
  invert,
  className,
  children,
}: {
  icon?: ReactNode
  invert?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <div className={twMerge(
      'inline-flex self-start items-center gap-1.5',
      'py-0.5 rounded-full',
      Boolean(icon) ? 'pl-2.5 pr-3' : 'px-3',
      'text-lg font-medium',
      invert ? 'surface-invert' : 'surface-main',
      'border border-gray-700 shadow-lg',
      className,
    )}>
      {icon}
      {children}
    </div>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export default function Header({ className } : { className?: string}) {
  const pathname = usePathname();

  const renderLink = (text: string, href: string, selected?: boolean) =>
    <Link
      href={href}
      className={twMerge(
        selected ? 'text-gray-50' : 'text-gray-800',
      )}
    >
      {text}
    </Link>;

  return (
    <div className={twMerge(
      'h-16',
      'flex items-center justify-center gap-3',
      'text-base font-normal',
      className,
    )}>
      {renderLink('Pace', '/', !pathname.startsWith('/distance'))}
      <span className="text-gray-800">/</span>
      {renderLink('Distance', '/distance', pathname.startsWith('/distance'))}
    </div>
  );
}
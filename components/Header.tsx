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
        'uppercase text-sm font-bold tracking-widest',
        selected ? 'text-gray-50' : 'text-gray-800',
      )}
    >
      {text}
    </Link>;

  const renderDivider = () => <span className="text-gray-800">/</span>;

  return (
    <div className={twMerge(
      'h-16',
      'flex items-center justify-center gap-3',
      className,
    )}>
      {renderLink('Pace', '/', (
        !pathname.startsWith('/distance') &&
        !pathname.startsWith('/race')
      ))}
      {renderDivider()}
      {renderLink('Distance', '/distance', pathname.startsWith('/distance'))}
      {renderDivider()}
      {renderLink('Race', '/race', pathname.startsWith('/race'))}
    </div>
  );
}
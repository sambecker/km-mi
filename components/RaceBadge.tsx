import { ReactNode } from 'react';
import { FaAward } from 'react-icons/fa6';
import Badge from './Badge';

export default function RaceBadge({
  children,
  className,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <Badge
      icon={<FaAward className="text-[0.9em]" />}
      className={className}
    >
      {children}
    </Badge>
  );
}

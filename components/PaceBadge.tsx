import { ReactNode } from 'react';
import Badge from './Badge';
import { BiStopwatch } from 'react-icons/bi';

export default function PaceBadge({
  children,
  className,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <Badge
      icon={<span className="w-5 ml-[-1px]">
        <BiStopwatch
          className="text-[1.2em]"
        />
      </span>}
      className={className}
      invert
    >
      {children}
    </Badge>
  );
}

'use client';

import { useRouter } from 'next/navigation';

export default function ClientInput({
  value,
  className,
  path,
  onFocus,
  onBlur,
}: {
  value?: string
  className?: string
  path: string
  onFocus?: () => void
  onBlur?: () => void
}) {
  const router = useRouter();
  return (
    <input
      type="text"
      value={value}
      className={className}
      onChange={e =>
        router.push(`/?${path}=${e.target.value || '0'}`, { scroll: false })}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder="Per hour"
    />
  );
}

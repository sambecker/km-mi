'use client';

import { useRouter } from 'next/navigation';

export default function ClientInput({
  value,
  className,
  path,
}: {
  value?: string
  className?: string
  path: string
}) {
  const router = useRouter();
  return (
    <input
      type="text"
      value={value}
      className={className}
      onChange={e =>
        router.push(`/?${path}=${e.target.value || '0'}`, { scroll: false })}
    />
  );
}

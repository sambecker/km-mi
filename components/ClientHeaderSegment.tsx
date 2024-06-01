import { twMerge } from 'tailwind-merge';

export default function ClientHeaderSegment({
  text,
  shouldFade,
  onClick,
}: {
  text: string
  shouldFade?: boolean,
  onClick?: () => void,
}) {
  return (
    <span
      className={twMerge(
        'transition-colors duration-300',
        shouldFade && 'text-gray-900',
        Boolean(onClick) && 'cursor-pointer active:text-main',
      )}
      onClick={onClick}
    >
      {text}
    </span>
  );
}

import { IoLogoVercel } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

export default function Footer({ className } : { className?: string}) {
  return (
    <div className={twMerge(
      'h-16',
      'flex items-center justify-center gap-3',
      'text-base font-normal',
      'transition-colors duration-200 ease-in-out',
      'text-gray-800 hover:text-main',
      className,
    )}>
      <Link href="https://vercel.com" target="_blank">
        <IoLogoVercel
          title="Powered by Vercel"
          size={16}
        />
      </Link>
      <span className="text-gray-800">/</span>
      <Link href="https://github.com/sambecker/km-mi" target="_blank">
        <FaGithub
          title="Source on Github"
          size={18}
        />
      </Link>
    </div>
  );
}
'use client';

import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';


export default function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-slate-300 px-4 shadow-sm dark:border-gray-800 dark:bg-gray-800 sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
          <span className="sr-only">Open sidebar</span>
        </button>
              
        <div
          className="h-6 w-px bg-gray-900/10 dark:bg-gray-100/10 lg:hidden"
          aria-hidden="true"
        />

        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div className="flex flex-1" />
            <div className="flex items-center gap-x-4 lg:gap-x-6">
                <Link href='/services'> Services </Link>
                <Link href='/about-us'> About Us </Link>
                <Link href='/contact-us'> Contact Us </Link>
            </div>
        </div>
            <div
          className="h-6 w-px bg-gray-900/10 dark:bg-gray-100/10 lg:hidden"
          aria-hidden="true"
              />
            <ThemeToggle/>
      </div>
    </>
  );
}

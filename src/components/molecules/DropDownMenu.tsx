'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import clsx from 'clsx';
import Link from 'next/link';

export function DropDownMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: 'Home', href: '/', isHome: true },
    { label: 'Tentang', href: '/tentang', isHome: false },
    { label: 'Proyek', href: '/proyek', isHome: false },
    { label: 'Dokumentasi', href: '/dokumentasi', isHome: false },
    { label: 'Kontak', href: '/kontak', isHome: false },
  ];

  return (
    <DropdownMenu open={isOpenMenu} onOpenChange={setIsOpenMenu}>
      <DropdownMenuTrigger asChild>
        <button className="relative w-6 h-6 flex flex-col justify-between py-1.5 px-0.5 items-center z-50">
          <span
            className={clsx(
              'block w-full h-0.5 bg-blue-primary transition-all duration-300 rounded-full',
              {
                'rotate-45 translate-y-[4.8px]': isOpenMenu,
              }
            )}
          ></span>
          <span
            className={clsx(
              'block w-full h-0.5 bg-blue-primary transition-all duration-300 rounded-full',
              {
                'opacity-0': isOpenMenu,
              }
            )}
          ></span>
          <span
            className={clsx(
              'block w-full h-0.5 bg-blue-primary transition-all duration-300 rounded-full',
              {
                '-rotate-45 -translate-y-[4.8px]': isOpenMenu,
              }
            )}
          ></span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="ml-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <nav key={item.label}>
              <DropdownMenuItem
                onClick={() => setIsOpenMenu(false)}
                className={clsx('w-full', {
                  'bg-blue-primary text-white': isActive && !item.isHome,
                  'text-blue-primary': isActive && item.isHome,
                })}
              >
                <Link href={item.href} className="w-full h-full">
                  {item.label}
                </Link>
              </DropdownMenuItem>
              {item.isHome && <DropdownMenuSeparator />}
            </nav>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

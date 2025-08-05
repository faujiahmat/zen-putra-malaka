import Link from 'next/link';
import { DropDownMenu } from '../molecules/DropDownMenu';

export function Navbar() {
  return (
    <header className="w-full max-w-screen-xl flex py-4 md:py-4 md:px-12 md:justify-between items-center mx-auto">
      <div className="md:hidden flex-none ml-4">
        <DropDownMenu />
      </div>

      <div className="flex-1 text-center md:text-left font-oswald text-blue-primary font-medium md:text-xl">
        <Link href="/" className="cursor-pointer">
          ZEN PUTRA MALAKA
        </Link>
      </div>

      {/* Empty space for alignment */}
      <div className="md:hidden flex-none w-9"></div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block" aria-label="Navigasi Utama">
        <ul className="flex gap-4 items-center text-sm">
          {[
            { name: 'Home', href: '/', isBlue: true },
            { name: 'Tentang', href: '/tentang', isBlue: false },
            { name: 'Proyek', href: '/proyek', isBlue: false },
            { name: 'Dokumentasi', href: '/dokumentasi', isBlue: false },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`relative ${
                  item.isBlue ? 'text-blue-primary' : 'text-gray-600'
                }  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-orange-300 after:w-0 after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Kontak Button */}
          <li>
            <Link
              href="/kontak"
              className="bg-blue-primary hover:bg-blue-900 text-white px-4 py-2 rounded-xs inline-block transition-colors"
            >
              Kontak
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

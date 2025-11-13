// components/nav.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Route } from "next";
import { useState } from 'react';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/enquiry', label: 'Enquiry' },
  { href: '/contact', label: 'Contact' },
  { href: '/admin/products', label: 'Admin' },
];

export default function Nav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-600 to-sky-700 text-white shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              {/* <span className="text-lg font-bold">ES</span> */}
              <Image src={"/logo.png"} width={200} height={200} alt='logo' />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Export</span>
              <span className="text-md text-gray-500 -mt-1 font-medium">Now</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href as Route}
                className={`
                  relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                  ${pathname === link.href 
                    ? 'text-sky-600 bg-sky-50' 
                    : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50'
                  }
                `}
              >
                {link.label}
                {pathname === link.href && (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-sky-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-sky-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href as Route}
                  className={`
                    px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200
                    ${pathname === link.href 
                      ? 'text-sky-600 bg-sky-50 border border-sky-100' 
                      : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50'
                    }
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
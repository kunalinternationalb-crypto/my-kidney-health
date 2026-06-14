import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Anatomy', href: '/anatomy' },
    { label: 'Diseases', href: '/diseases' },
    { label: 'Lifestyle', href: '/lifestyle' },
    { label: 'Guidelines', href: '/guidelines' },
    { label: 'News', href: '/news' },
    { label: 'Patient Ed', href: '/patient-education' },
  ];

  return (
    <nav className="bg-kidney-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl hover:text-kidney-200 transition">
            <span className="text-2xl">🫘</span>
            <span className="hidden sm:inline">My Kidney Health</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive(item.href)
                    ? 'bg-kidney-600 text-white'
                    : 'text-kidney-100 hover:bg-kidney-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-kidney-200 hover:bg-kidney-700 focus:outline-none"
          >
            <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-kidney-700 px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition ${
                isActive(item.href)
                  ? 'bg-kidney-600 text-white'
                  : 'text-kidney-100 hover:bg-kidney-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

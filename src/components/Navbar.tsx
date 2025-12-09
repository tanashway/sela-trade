'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className={`text-2xl font-bold font-serif transition-colors duration-300 ${
              scrolled ? 'text-[#1a365d]' : 'text-white'
            }`}>
              Sela Trade
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors duration-300 hover:text-[#c9a962] ${
                scrolled ? 'text-[#1a365d]' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/privacy-policy" 
              className={`font-medium transition-colors duration-300 hover:text-[#c9a962] ${
                scrolled ? 'text-[#1a365d]' : 'text-white'
              }`}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/contacts" 
              className={`font-medium transition-colors duration-300 hover:text-[#c9a962] ${
                scrolled ? 'text-[#1a365d]' : 'text-white'
              }`}
            >
              Contacts
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              className={`w-6 h-6 transition-colors duration-300 ${
                scrolled ? 'text-[#1a365d]' : 'text-white'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col gap-4 pt-4">
              <Link 
                href="/" 
                className={`font-medium ${scrolled ? 'text-[#1a365d]' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/privacy-policy" 
                className={`font-medium ${scrolled ? 'text-[#1a365d]' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/contacts" 
                className={`font-medium ${scrolled ? 'text-[#1a365d]' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacts
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


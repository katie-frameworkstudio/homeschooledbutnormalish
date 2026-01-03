"use client";

import { siteContent } from "@/content/siteContent";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : 'bg-white border-b border-sage-100'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <a
            href="#hero"
            className="focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 rounded transition-transform hover:scale-105"
          >
            <img
              src="/images/logo.png"
              alt="Homeschooled But Normal...ish"
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {siteContent.nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 rounded-lg px-4 py-2"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-sage-700 hover:text-sage-900 hover:bg-sage-50 focus:outline-none focus:ring-2 focus:ring-sage-400 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-sage-200 animate-slide-up">
            <div className="flex flex-col space-y-2">
              {siteContent.nav.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sage-400 rounded-lg px-4 py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


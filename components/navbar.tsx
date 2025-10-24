'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-bold text-white">
          MyAuth
        </Link>

        
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleScrollTo('home')}
            className="text-white hover:text-indigo-400 transition"
          >
            Home
          </button>
          <button
            onClick={() => handleScrollTo('services')}
            className="text-white hover:text-indigo-400 transition"
          >
            Services
          </button>
          <button
            onClick={() => handleScrollTo('contact')}
            className="text-white hover:text-indigo-400 transition"
          >
            Contact
          </button>

          <Link
            href="/login"
            className="text-white hover:text-indigo-400 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
          >
            Get Started
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl ml-4 text-white hover:text-indigo-400 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-4 space-y-3 border-t border-gray-800">
          <button
            onClick={() => handleScrollTo('home')}
            className="block w-full text-left text-white hover:text-indigo-400 transition"
          >
            Home
          </button>
          <button
            onClick={() => handleScrollTo('services')}
            className="block w-full text-left text-white hover:text-indigo-400 transition"
          >
            Services
          </button>
          <button
            onClick={() => handleScrollTo('contact')}
            className="block w-full text-left text-white hover:text-indigo-400 transition"
          >
            Contact
          </button>
          <Link
            href="/login"
            className="block text-white hover:text-indigo-400 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="block bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 rounded-md transition"
          >
            Get Started
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="block w-full text-left text-white hover:text-indigo-400 mt-2 transition"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

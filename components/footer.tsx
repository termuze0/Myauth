'use client';

import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">MyAuth</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            MyAuth is a secure online platform for generating and managing time-based one-time passwords (TOTP). 
            Protect your accounts with two-factor authentication made simple.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-indigo-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-indigo-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-indigo-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-indigo-400 transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">
            Email: <a href="mailto:support@myauth.com" className="text-indigo-400 hover:underline">support@myauth.com</a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/termuze0/Myauth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 MyAuth Project. All rights reserved. | Built by{' '}
        <span className="text-indigo-400 font-medium">termuze0</span>
      </div>
    </footer>
  );
};

export default Footer;

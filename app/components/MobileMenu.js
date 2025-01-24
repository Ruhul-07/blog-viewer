'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Mobile Menu Button (opens the menu) */}
      <button onClick={toggleMenu} className="text-white md:hidden">
        Menu
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 left-0 w-full bg-gray-700 p-4 space-y-4 md:hidden"
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>

          {/* Menu Links */}
          <Link href="/" className="block text-white py-2 hover:text-gray-300">
            Home
          </Link>
          <Link href="/profile" className="block text-white py-2 hover:text-gray-300">
            Profile
          </Link>
          <div className="flex items-center space-x-4 mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

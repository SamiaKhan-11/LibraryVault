'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-700  text-white shadow-md">
      <div className="mx-auto max-w-screen-xl px-6 py-4 flex items-center justify-between ">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-white">Library Vault</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-bold">
          <a href="/" className="text-white hover:text-black transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-300">Home</a>
          <a href="/browse-libraries" className="text-white hover:text-black transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-300">Libraries</a>
          <a href="/About" className="text-white hover:text-black transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-300">About</a>
          <a href="/Contact" className="text-white hover:text-black transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-300">Contact</a>
          <a href="/Login" className="text-gray-900 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-700 border bg-white ">Login</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 right-4 bg-gray-800 text-white w-48 md:hidden rounded-lg shadow-lg transition-transform duration-300 ${isMobileMenuOpen ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'}`}
        >
          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-700 rounded-lg">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-700 rounded-lg">Libraries</a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-700 rounded-lg">About</a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-700 rounded-lg">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

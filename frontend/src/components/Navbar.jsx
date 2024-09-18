'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-tr from-blue-800 to-blue-800  text-white shadow-md">
      <div className="mx-auto max-w-screen-xl px-6 py-4 flex items-center justify-between ">
        {/* Logo */}
        <div className="flex items-center ">
          <a href="/" className="text-2xl font-bold text-white">Library Vault</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-bold">
          <Link href="/" className="text-white hover:text-black transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-blue-100">Home</Link>
          <Menu as="a" className="">
            <MenuButton className="text-white hover:text-black transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-blue-100">View Libraries</MenuButton>
            <MenuItems anchor="bottom" className="bg-white p-1 rounded-md border-2 w-40">
              <MenuItem>
                <Link className="data-[focus]:bg-blue-800 block text-black hover:text-white transition-colors duration-300 px-2 py-2 rounded-lg hover:bg-blue-400" href="/browse-libraries/python">
                  Python
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="block text-black hover:text-white transition-colors duration-300 px-2 py-2 rounded-lg hover:bg-blue-400 data-[focus]:bg-blue-800" href="/browse-libraries/react">
                  React
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="data-[focus]:bg-blue-800 block text-black hover:text-white transition-colors duration-300 px-2 py-2 rounded-lg " href="/browse-libraries/javascript">
                  JavaScript
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className=" data-[focus]:bg-blue-800 block text-black hover:text-white transition-colors duration-300 px-2 py-2 rounded-lg " href="/browse-libraries/java">
                  Java
                </Link>
              </MenuItem>
            </MenuItems>

          </Menu>
          <Link href="/ManageLibrary" className="text-white hover:text-black transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-blue-100">Manage Libraries</Link>
          <Link href="/Login" className="text-white hover:text-black transition-colors duration-300 px-3 py-2 rounded-lg border bg-gradient-to-tr from-blue-500 to-cyan-300  ">Sign In</Link>
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
          className={`p-1 absolute top-16 right-4 bg-black text-white w-48 md:hidden rounded-lg shadow-lg transition-transform duration-300 ${isMobileMenuOpen ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'}`}
        >
          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-700 rounded-lg">Home</a>
          <Menu as="a" className="">
            <MenuButton className="block px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-700 rounded-lg w-full text-left">View Libraries</MenuButton>
            <MenuItems anchor="bottom" className="bg-white p-1 rounded-md border-2 w-40">
              <MenuItem>
                <Link className="data-[focus]:bg-blue-800 block text-black hover:text-white transition-colors duration-300 px-2 py-2 rounded-lg hover:bg-blue-400" href="/browse-libraries/python">
                  Python
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="block text-black hover:text-white transition-colors duration-300 px-2 py-2 rounded-lg hover:bg-blue-400 data-[focus]:bg-blue-800" href="/browse-libraries/react">
                  React
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="data-[focus]:bg-blue-800 block text-black hover:text-white transition-colors duration-300 px-2 py-2 rounded-lg " href="/browse-libraries/javascript">
                  JavaScript
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className=" data-[focus]:bg-blue-800 block text-black hover:text-white transition-colors duration-300 px-2 py-2 rounded-lg " href="/browse-libraries/java">
                  Java
                </Link>
              </MenuItem>
            </MenuItems>

          </Menu>
          <Link href="/ManageLibrary" className="block px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-700 rounded-lg">Manage Libraries</Link>
          <Link href="/Login" className="block px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-700 rounded-lg  ">Sign In</Link>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

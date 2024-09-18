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
        <nav className="bg-gradient-to-tr from-blue-200 to-blue-100 text-white shadow-md ">
            <div className="mx-auto  max-w-screen-xl px-6 py-4 flex items-center justify-between ">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" className="text-2xl font-bold text-black">Library Vault</a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 font-bold">
                    <a href="/" className="text-black hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-blue-400">Home</a>
                    
                    <Menu as="a" className="">
                        <MenuButton className="text-black hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-blue-400">Libraries</MenuButton>
                        <MenuItems anchor="bottom" className="bg-white p-1 rounded-md border-2">
                            <MenuItem>
                                <a className="data-[focus]:bg-blue-400 block text-black hover:text-white transition-colors duration-300 px-2 py-2 rounded-lg hover:bg-blue-400" href="/browse-libraries/python">
                                    Python
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block text-black hover:text-white transition-colors duration-300 px-2 py-2 rounded-lg hover:bg-blue-400 data-[focus]:bg-blue-400" href="/browse-libraries/react">
                                    React
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="data-[focus]:bg-blue-400 block text-black hover:text-white transition-colors duration-300 px-2 py-2 rounded-lg " href="/browse-libraries/javascript">
                                    JavaScript
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className=" data-[focus]:bg-blue-400 block text-black hover:text-white transition-colors duration-300 px-2 py-2 rounded-lg " href="/browse-libraries/java">
                                    Java
                                </a>
                            </MenuItem>
                        </MenuItems>

                    </Menu>





                    <a href="/About" className="text-black hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-blue-400">About</a>
                    <a href="/Contact" className="text-black hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-blue-400">Contact</a>
                    <a href="/Login" className="text-white hover:text-black transition-colors duration-300 px-3 py-2 rounded-lg border bg-gradient-to-tr from-blue-500 to-cyan-300  ">Sign In</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-lg focus:outline-none"
                >
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Mobile Menu */}
                <div
                    className={`p-2 absolute top-16 right-4 bg-black text-white w-48 md:hidden rounded-lg shadow-lg transition-transform duration-300 ${isMobileMenuOpen ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'}`}
                >
                    <a href="/" className="block text-white hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-600">Home</a>



                    <Menu as="a" className="">
                        <MenuButton className=" text-white hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-600 w-full text-left">Libraries</MenuButton>
                        <MenuItems anchor="bottom" className="bg-white p-4 rounded-3xl border-2">
                            <MenuItem>
                                <a className="block data-[focus]:bg-blue-200 rounded-full w-28  p-1 " href="/browse-libraries/python">
                                    Python
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-[focus]:bg-blue-200 rounded-full w-28  p-1" href="/browse-libraries/react">
                                    React
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-[focus]:bg-blue-200 rounded-full w-28 t p-1" href="/browse-libraries/javascript">
                                    JavaScript
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-[focus]:bg-blue-200 rounded-full w-28  p-1" href="/browse-libraries/java">
                                    Java
                                </a>
                            </MenuItem>
                        </MenuItems>

                    </Menu>



                    <a href="/About" className="block text-white hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-600">About</a>
                    <a href="/Contact" className="block text-white hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-600">Contact</a>
                    <a href="/Login" className="block text-white hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-600  ">Sign In</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;



'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React from 'react';

const Login = () => {
  return (
    <div className=''>
    <div className=" min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 py-20">
    <div className="absolute w-52 h-52 rounded-xl bg-blue-100 -top-20 -left-20  transform rotate-45 hidden md:block" />
    <div className="absolute w-48 h-48 rounded-xl bg-blue-200 bottom-10 right-10 transform rotate-12 hidden md:block" />
      <div className="bg-gray-100 shadow-xl rounded-lg p-8 max-w-md w-full transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-3xl font-extrabold text-center text-black mb-8 tracking-wide">
          Welcome Back to Library Vault
        </h2>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-800 text-md font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-100 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 placeholder-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block text-gray-800 text-md font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-100 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 placeholder-gray-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg transform hover:translate-y-1"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Don't have an account?{' '}
              <a href="/signup" className="text-blue-400 hover:text-blue-500 font-semibold transition-colors duration-200">
                Sign up
              </a>
            </p>
          </div>
        </form>
        
      </div>
      <div className="w-40 h-40 absolute bg-blue-200 rounded-full -top-10 right-12 hidden md:block" />
      <div className="w-20 h-40 absolute bg-blue-200 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block" />
    </div>





    </div>
  );
};

export default Login;

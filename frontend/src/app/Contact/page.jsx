'use client';
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here, you should implement the actual API call to your backend or email service
      await axios.post('http://localhost:5000/contact', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Contact Us</h2>
      <p className="text-center text-gray-700 mb-8 max-w-md">
        Have questions or feedback? Reach out to us using the form below.
      </p>

      {!submitted ? (
        <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-green-600 mb-4">Thank you!</h3>
          <p className="text-gray-700">
            Your message has been successfully sent. We'll get back to you soon.
          </p>
        </div>
      )}

      {/* Contact Info Section */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Get in Touch</h3>
        <p className="text-gray-700 mb-4">
          Email: <a href="mailto:info@libraryvault.com" className="text-blue-600 hover:underline">info@libraryvault.com</a>
        </p>
        <p className="text-gray-700 mb-4">
          Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Social Media Icons */}
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.56v15.08c0 2.49-2.02 4.52-4.52 4.52H4.52C2.02 24 0 21.98 0 19.48V4.52C0 2.02 2.02 0 4.52 0h15.08C21.98 0 24 2.02 24 4.52zM9.55 19.48h2.97v-6.92h2.13l.32-2.6H12.5V8.66c0-.75.21-1.27 1.3-1.27h1.39v-2.5c-.24-.03-1.07-.1-2.03-.1-2.02 0-3.41 1.23-3.41 3.49v1.94H7.43v2.6h2.12v6.92z"/>
            </svg>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.954 4.569a10 10 0 01-2.827.775 4.958 4.958 0 002.163-2.723 9.92 9.92 0 01-3.127 1.184A4.92 4.92 0 0016.616 3c-2.726 0-4.92 2.193-4.92 4.917 0 .38.045.751.127 1.106C7.728 8.84 4.1 6.868 1.671 3.88a4.822 4.822 0 00-.665 2.475 4.917 4.917 0 002.188 4.093 4.902 4.902 0 01-2.229-.615v.06c0 2.37 1.685 4.342 3.918 4.784a4.996 4.996 0 01-2.224.084c.623 1.945 2.431 3.364 4.573 3.406A9.863 9.863 0 010 19.538a13.97 13.97 0 007.548 2.212c9.056 0 14.01-7.497 14.01-13.985 0-.215 0-.428-.016-.64A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.988 0H7.013C3.147 0 0 3.148 0 7.014v9.975C0 20.851 3.147 24 7.013 24h9.975C20.851 24 24 20.851 24 16.989V7.014C24 3.148 20.851 0 16.988 0zm-4.56 18.354h-1.806V12h1.806v6.354zm-1.098-7.417c-.606 0-1.098-.491-1.098-1.098s.491-1.098 1.098-1.098 1.098.491 1.098 1.098-.491 1.098-1.098 1.098zm8.888 7.417h-1.805V15.3c0-1.07-.392-1.798-1.372-1.798-.748 0-1.194.506-1.39 1.001-.072.175-.09.417-.09.661v3.19h-1.806s.025-5.178 0-5.719h1.806v.81c.239-.368.668-.894 1.625-.894 1.187 0 2.08.78 2.08 2.459v3.344z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

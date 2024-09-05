import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 text-gray-100 py-8">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {/* About Section */}
      <div>
        <h4 className="text-lg font-semibold mb-4">About Us</h4>
        <p className="text-gray-400">
          We provide a curated collection of libraries to enhance your development experience. Explore our extensive range of resources and find the tools you need.
        </p>
      </div>

      {/* Quick Links Section */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Libraries</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
        <p className="text-gray-400">1234 Library Lane, Dev City, DC 12345</p>
        <p className="text-gray-400">Email: <a href="mailto:info@example.com" className="text-gray-300 hover:text-white transition-colors duration-200">info@example.com</a></p>
        <p className="text-gray-400">Phone: <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors duration-200">+1 (234) 567-890</a></p>
      </div>

      {/* Social Media Section */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            <i className="fab fa-facebook-f"></i>
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            <i className="fab fa-twitter"></i>
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            <i className="fab fa-linkedin-in"></i>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            <i className="fab fa-github"></i>
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="text-center mt-8 border-t border-gray-700 pt-4">
      <p className="text-gray-400">
        &copy; {new Date().getFullYear()} Library Vaulty. All rights reserved.
      </p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
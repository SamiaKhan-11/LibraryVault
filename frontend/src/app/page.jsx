'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React, { useState } from 'react';

//






//
const HomePage = () => {
  return (
    <>
      {/* Header */}
      <Navbar />
      {/* Main Article Content */}
      <main>
        <article>
          <header className="mx-auto mt-2 max-w-screen-lg rounded-t-lg bg-transparent text-white pt-16 text-center ">
            <p className="">Discover the best libraries for your projects</p>
            <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Welcome to Library Vault</h1>
            <p className="mt-6 text-lg ">Find the perfect library to boost your development workflow</p>

            {/* */}


            <div className="mt-6 flex flex-wrap mb-8 justify-center gap-2">
              {/* Updated button categories */}
              <Link href='/browse-libraries/python'   className="rounded-lg bg-blue-100 px-2 py-1 font-medium text-blue-600 hover:bg-blue-200">Python</Link>
              <Link href='/browse-libraries/react' className="rounded-lg bg-blue-100 px-2 py-1 font-medium text-blue-600 hover:bg-blue-200">React</Link>
              <Link href='/browse-libraries/javascript'  className="rounded-lg bg-blue-100 px-2 py-1 font-medium text-blue-600 hover:bg-blue-200">JavaScript</Link>
              <Link href='/browse-libraries/java'  className="rounded-lg bg-blue-100 px-2 py-1 font-medium text-blue-600 hover:bg-blue-200">Java</Link>
            </div>
    



            {/* */}
            <img
              className="-z-10 opacity- absolute top-0 left-0 mt-10 h-96 w-full object-cover"
              src="https://png.pngtree.com/background/20230521/original/pngtree-large-amount-of-dark-squares-on-the-surface-of-a-computer-picture-image_2682903.jpg"
              alt="Library Vaulty Cover"
            /*https://img.freepik.com/premium-photo/binary-code-programming-language-colorful-background_605022-11909.jpg
            https://png.pngtree.com/background/20230521/original/pngtree-black-computer-keyboard-with-black-light-in-the-background-picture-image_2682975.jpg 
            https://png.pngtree.com/background/20230521/original/pngtree-large-amount-of-dark-squares-on-the-surface-of-a-computer-picture-image_2682903.jpg*/
            />
          </header>

          <div className="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <h2 className="text-2xl font-semibold">Why Use Library Vault?</h2>
            <blockquote className="max-w-lg border-l-4 px-4">
              "A central place to discover the best libraries for any language or framework."
              <span className="whitespace-nowrap text-sm">— Your Developer Community</span>
            </blockquote>
            <p>
              Library Vaulty is your one-stop platform to find and share the most efficient and well-documented libraries for Python, React, JavaScript, and Java. Save time and improve your projects with curated libraries from fellow developers.
            </p>
            <p>
              Join our community and start contributing your favorite libraries today!
            </p>
          </div>
        </article>
      </main>

      <div className="w-fit mx-auto mt-10 flex space-x-2">
        <div className="h-0.5 w-2 bg-gray-600"></div>
        <div className="h-0.5 w-32 bg-gray-600"></div>
        <div className="h-0.5 w-2 bg-gray-600"></div>
      </div>

      {/* Aside Section for Recent Posts */}
      <section className="mx-auto mt-10 max-w-screen py-20 bg-gray-50">
        <div className="mx-auto px-4 md:px-8">
          {/* Heading */}


          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">Featured Libraries</h2>
            <Link
              href="/browse-libraries"
              type="submit"
              className="group flex w-40 cursor-pointer select-none items-center justify-center rounded-full bg-blue-500 hover:bg-blue-700 px-6 py-3 text-white transition"
              fdprocessedid="evdvf6">
              View all

              <svg
                className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
          {/* Featured Libraries Container */}
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-6">
            {/* Featured Library Items */}
            {['Redux', 'Axios', 'Lodash'].map((lib, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-5 text-center group"
              >
                <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden transition-transform">
                  <img
                    className="w-full h-full object-cover"
                    src={`https://dummyimage.com/200x200/4B5563/ffffff&text=${lib}`}
                    alt={lib}
                  />
                  <div className="absolute inset-0 bg-gray-300 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-black text-sm font-semibold">{lib}</span>
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-gray-800">{lib}</h3>
                <p className="mt-4 text-gray-600">
                  Discover the power of {lib} and enhance your development workflow.
                </p>

              </div>
            ))}
          </div>





        </div>
      </section>

      {/*section 2 */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Section Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-800 sm:text-4xl">Explore Our Library Collection</h2>
            <p className="mt-4 text-blue-600">
              Find libraries that suit your development needs. Explore our curated categories for Python, React, JavaScript, Java, and more.
            </p>
          </div>

          {/* Library Categories */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Python Libraries */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-out">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefh3qBCxSDkyyEkxnT8F0N2Kce6lp7ngIL6JYgrOORXw9oyEvdCaTfYm2dpYIin2pKT0&usqp=CAU"
                alt="Python Libraries"
                className="w-20 h-20 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800">Python Libraries</h3>
              <p className="mt-2 text-center text-blue-600">
                Discover a range of libraries to enhance your Python projects, from data science to web development.
              </p>

            </div>

            {/* React Libraries */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-out">
              <img
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="React Libraries"
                className="w-20 h-20 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800">React Libraries</h3>
              <p className="mt-2 text-center text-blue-600">
                Browse the best React libraries to build interactive UIs and improve your frontend development.
              </p>

            </div>

            {/* JavaScript Libraries */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-out">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="JavaScript Libraries"
                className="w-20 h-20 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800">JavaScript Libraries</h3>
              <p className="mt-2 text-center text-blue-600">
                Explore a variety of JavaScript libraries for everything from DOM manipulation to data visualization.
              </p>

            </div>

            {/* Java Libraries */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-out">
              <img
                src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Java Libraries"
                className="w-20 h-20 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800">Java Libraries</h3>
              <p className="mt-2 text-center text-blue-600">
                Access Java libraries for building robust and scalable applications, from desktop to server-side.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/*end of section 2 */}

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Library Vault?</h2>
            <p className="mt-4 text-gray-600">
              Discover the benefits of using Library Vaulty for all your library needs.
            </p>
          </div>

          {/* Features */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m4-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Curated Collection</h3>
              <p className="mt-2 text-gray-700">
                Access a carefully curated selection of the best libraries for your projects, saving you time and effort.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Easy to Use</h3>
              <p className="mt-2 text-gray-700">
                Enjoy a user-friendly interface that makes finding and integrating libraries straightforward.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c.294 0 .565.116.755.305A1.062 1.062 0 0113 9v6a1.062 1.062 0 01-1.245 1.695A1.062 1.062 0 0111 15V9a1.062 1.062 0 011.245-1.695A1.062 1.062 0 0112 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Frequent Updates</h3>
              <p className="mt-2 text-gray-700">
                Stay ahead with regularly updated content and libraries, ensuring you have the latest tools.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h18M3 12h18M3 21h18"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Broad Compatibility</h3>
              <p className="mt-2 text-gray-700">
                Find libraries compatible with various programming languages and frameworks like Python, React, JavaScript, and Java.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Active Community</h3>
              <p className="mt-2 text-gray-700">
                Join an active community of developers contributing and sharing libraries, tips, and best practices.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h18v4H3v-4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Free Access</h3>
              <p className="mt-2 text-gray-700">
                Access all the libraries and resources for free, without any hidden costs or subscriptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Users Say</h2>
            <p className="mt-4 text-gray-600">
              Hear from the developers and contributors who make our library collection robust and diverse.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1603415529363-a2d04b6c623e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="User"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Jane Doe</h3>
                  <p className="text-sm text-gray-500">Full-Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Library Vaulty is my go-to resource for finding the best libraries for my projects. The community contributions are invaluable!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1573497019416-5f54ec3b57b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="User"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">John Smith</h3>
                  <p className="text-sm text-gray-500">Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The variety and quality of libraries here have improved my workflow tremendously. I highly recommend Library Vaulty!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="User"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Emily Johnson</h3>
                  <p className="text-sm text-gray-500">Backend Engineer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "A fantastic collection of libraries! It's great to see such an active and engaged community."
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block bg-blue-500 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600"
            >
              Join Our Community
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;

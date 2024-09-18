'use client'
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Link from 'next/link';
import React, { useState } from 'react';

//






//
const HomePage = () => {
  return (
    <>
      {/* Header */}
      <Nav/>
      {/* Main Article Content */}
      <main className=''>
        <article className=''>
          <header className="mx-auto mt-2 max-w-screen-lg rounded-t-lg bg-transparent text-white pt-16 text-center ">
            <p className="font-bold">Discover the best libraries for your projects</p>
            <h1 className="mt-2 text-4xl font-bold sm:text-5xl ">Welcome to Library Vault</h1>
            <p className="mt-6 font-bold text-lg ">Find the perfect library to boost your development workflow</p>

            {/* */}


            <div className="mt-6 flex flex-wrap mb-8 justify-center gap-2">
              {/* Updated button categories */}
              <Link href='/browse-libraries/python' className="rounded-lg bg-blue-100 px-2 py-1 font-medium text-blue-600 hover:bg-blue-200">Python</Link>
              <Link href='/browse-libraries/react' className="rounded-lg bg-blue-100 px-2 py-1 font-medium text-blue-600 hover:bg-blue-200">React</Link>
              <Link href='/browse-libraries/javascript' className="rounded-lg bg-blue-100 px-2 py-1 font-medium text-blue-600 hover:bg-blue-200">JavaScript</Link>
              <Link href='/browse-libraries/java' className="rounded-lg bg-blue-100 px-2 py-1 font-medium text-blue-600 hover:bg-blue-200">Java</Link>
            </div>




            {/* */}
            <img
              className="-z-10 opacity absolute top-0 left-0 mt-10 h-96 w-full object-cover"
              src="https://png.pngtree.com/background/20210714/original/pngtree-abstract-background-with-low-poly-design-picture-image_1196317.jpg"
              alt="Library Vaulty Cover"
            /*https://4kwallpapers.com/images/wallpapers/dark-background-abstract-background-network-3d-background-2560x1440-8324.png
            https://www.amd.com/content/dam/amd/en/images/backgrounds/abstract/2384009-embedded-prod-apps-background.jpg
            https://img.freepik.com/premium-photo/binary-code-programming-language-colorful-background_605022-11909.jpg
            https://png.pngtree.com/background/20230521/original/pngtree-black-computer-keyboard-with-black-light-in-the-background-picture-image_2682975.jpg 
            https://png.pngtree.com/background/20230521/original/pngtree-large-amount-of-dark-squares-on-the-surface-of-a-computer-picture-image_2682903.jpg
            https://static.vecteezy.com/system/resources/previews/001/984/884/non_2x/abstract-futuristic-technology-digital-lines-in-dark-blue-color-background-free-vector.jpg
            https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/other/ul/g/90/34/90341b6b-a78f-404d-a77d50a280840189.component.xl.ts=1724086580639.png/content/adobe-cms/us/en/topics/iaas-paas-saas/_jcr_content/root/leadspace*/

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

      <section className="bg-gray-50 py-20 mt-10">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured libraries</h2>
            <p className="mt-4 text-gray-600">
              Here are some of the featured libraries of our website
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {['Redux', 'Axios', 'Lodash'].map((lib, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-5 text-center group"
              >
                <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden transition-transform">
                  <img
                    className="w-full h-full object-cover object-centre"
                    src={`https://dummyimage.com/200x200/cae0fa/000000&text=${lib}`}
                    alt={lib}
                  />
                  <div className="absolute inset-0 bg-gray-400 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-black text-md font-semibold">{lib}</span>
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-gray-800">{lib}</h3>
                <p className="mt-4 text-gray-600">
                  Discover the power of {lib} and enhance your development workflow.
                </p>

              </div>
            ))}
          </div>



          {/* Call to Action */}
          <div className="mt-12 -mb-4 text-center">
            <button className="group flex w-72 mx-auto cursor-pointer select-none items-center justify-center rounded-full px-6 py-4 bg-blue-100 text-lg text-blue-600 transition focus:outline-none focus:ring focus:ring-indigo-200 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 border-4 hover:border-blue-500">
              <Link
                href="/Signup"
                className="group flex w-fit items-center justify-center rounded py-1 text-center"
              >
                {" "}
                Get started{" "}
              </Link>
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
            </button>
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
                src="/i1.jpeg"
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
                src="i2.webp"
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


      <Footer />
    </>
  );
};

export default HomePage;

import React from 'react';

const About = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 sm:text-5xl">About Library Vault</h2>
          <p className="mt-4 text-lg text-blue-600">
            Discover, explore, and contribute to the best libraries across languages and frameworks. We empower developers to make better choices and accelerate their projects.
          </p>
        </div>

        {/* About Content */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/Screenshot (57).png"
              alt="Library Vault"
              className="rounded-lg shadow-lg w-full object-cover h-80"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-blue-800">Our Mission</h3>
            <p className="text-gray-700 text-lg">
              At <strong>Library Vault</strong>, we aim to bring the most effective and well-documented libraries right at your fingertips. Whether you’re working with Python, React, JavaScript, or Java, our goal is to provide a curated collection of the best tools and resources to enhance your development experience.
            </p>

            <h3 className="text-2xl font-semibold text-blue-800">Why Choose Us</h3>
            <p className="text-gray-700 text-lg">
              Unlike other platforms,  <strong>Library Vault</strong> focuses on delivering a carefully curated collection. Each library featured on our site has been selected based on compatibility, performance, and developer usability, ensuring that you have access to the highest quality tools for your projects.
            </p>
          </div>
        </div>
      </div>


      <div className="mx-auto max-w-screen-xl px-4 md:px-8 mt-20">


        {/* About Content */}
        <div className="flex flex-col md:flex-row items-center gap-8">



          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-blue-800">Effortless Discovery</h3>
            <p className="text-gray-700 text-lg">
              With our intuitive search and category-based browsing system, finding the right library has never been easier. Whether you’re building a web application, working on data science, or managing backend systems, <strong>Library Vault</strong> has the resources to support your development needs.
            </p>
            <h3 className="text-2xl font-semibold text-blue-800">Effortless Discovery</h3>
            <p className="text-gray-700 text-lg">
              Save time by using libraries that are proven to work effectively. From <strong>UI components</strong> to <strong>data visualization</strong>  tools, <strong>Library Vault</strong> connects you to the best resources to accelerate your development process.
            </p>


          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/Screenshot (58).png"
              alt="Library Vault"
              className="rounded-lg shadow-lg w-full object-cover h-80"
            />
          </div>
        </div>



      </div>

      <div className='mt-20 text-center'>
        <h3 className="text-2xl font-semibold text-blue-800">Join Us</h3>
        <p className="text-gray-700 text-lg">
          Be part of a growing community of passionate developers. Explore, share, and contribute to a platform that evolves with your needs.
        </p>

      </div>

    </section>
  );
};

export default About;

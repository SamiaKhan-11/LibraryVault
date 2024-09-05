import React from "react";

const AboutSection = () => {
  return (
    <div className="sm:p-10 my-auto">
      <section className="mx-auto max-w-screen-xl md:rounded-md md:border md:shadow-lg bg-white">
        <div className="grid grid-cols-4 text-gray-800 lg:grid-cols-3">
          {/* About Us Content */}
          <div className="col-span-4 bg-gray-100 px-8 py-10 text-gray-800 md:col-span-3 md:px-10 md:py-12 lg:col-span-2">
            <h2 className="mb-8 text-2xl font-bold text-blue-800">About Library Vault</h2>
            <p className="mt-2 mb-4 font-sans text-base text-gray-600 leading-relaxed">
              Library Vault is your ultimate resource for finding and sharing the best libraries across various programming languages like React, Python, JavaScript, and Java. Our curated collection ensures you have access to the most relevant and high-quality libraries to enhance your development projects.
            </p>
            <p className="mt-4 mb-6 font-sans text-base text-gray-600 leading-relaxed">
              Whether you're a beginner or a seasoned developer, Library Vault aims to simplify your workflow by providing a centralized platform to explore, search, and access libraries that meet your specific needs. Join our community to stay updated with the latest and greatest libraries available.
            </p>
            <p className="mt-4 font-sans text-base text-gray-600 leading-relaxed">
              Our mission is to foster a collaborative and resourceful environment where developers can share their insights and discover new tools to boost productivity and creativity.
            </p>
          </div>
          {/* Image or Illustration Section */}
          <div className="col-span-4 lg:col-span-1 hidden md:block bg-blue-50 px-8 py-10">
            <img
              src="path-to-your-image.jpg"
              alt="Library Vault Illustration"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;

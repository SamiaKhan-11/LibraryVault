'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useParams } from 'next/navigation';

// Define categories for filtering libraries
const languageCategories = {
react:[
  'Styling',
  'UI',
  'State Management',
  'Data Fetching',
  'Animations',
  'Forms',
  'Utilities',
  'Testing',
],
python:[
  'Data Analytics',
  'Machine Learning',
  'Data Visualization',
  'Scripting',
  'Graphics',
  'Utilities',
],
javascript:[
  'Styling',
  'UI',
  'State Management',
  'Data Fetching',
  'Utilities',
  'Testing',
],
java:[
  'Database Management',
  'Testing',
  'Build Tools',
  'Libraries',
],
};

const BrowseLibraries = () => {
  const runOnce = useRef(false);
  const [librarylist, setLibrarylist] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [masterList, setMasterList] = useState([]);
  const [selLibrary, setSelLibrary] = useState(null);

  const { language } = useParams();
  // Fetch libraries data from the backend API
  const fetchLibrary = async () => {
    try {
      const res = await axios.get('http://localhost:5000/library/getbylanguage/'+language);
      console.log(res.data);

      setLibrarylist(res.data);
      setMasterList(res.data);
    } catch (error) {
      console.error('Error fetching libraries:', error);
    }
  };

  // Fetch libraries only once when component mounts
  useEffect(() => {
    if (!runOnce.current) {
      fetchLibrary();
      runOnce.current = true;
    }
  }, []);

  // Open the modal dialog
  function open() {
    setIsOpen(true);
  }

  // Close the modal dialog
  function close() {
    setIsOpen(false);
  }

  // Search libraries based on the input keyword
  const searchLibrary = (e) => {
    const keyword = e.target.value;
    setLibrarylist(
      masterList.filter((library) =>
        library.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  // Filter libraries by category
  const filterCategory = (keyword) => {
    setLibrarylist(
      masterList.filter((library) =>
        library.category.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  // Display the list of libraries
  const displayLibrary = () => {
    if (librarylist.length > 0) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {librarylist.map((lib) => (
            <div
              key={lib.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out  
               delay-150 hover:-translate-y-2 hover:scale-105 flex flex-col items-center justify-between bg-gradient-to-tr from-orange-100 via-purple-200 to-pink-200"
            >
              <h3 className="font-bold text-xl text-blue-800 mb-2">{lib.name}</h3>
              <p className="text-gray-700 text-sm mb-4">{lib.package_name}</p>
              <button
                className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                onClick={() => {
                  open();
                  setSelLibrary(lib);
                }}
              >
                View More
              </button>
            </div>
          ))}
        </div>
      );
    } else {
      return <h2 className="text-center text-gray-700 font-semibold mt-10">No Libraries Found</h2>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      {/* Dialog for library details */}
      <Dialog open={isOpen} as="div" className="relative z-10" onClose={close}>
        {/* Backdrop for the modal */}
        <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-out" />
        <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl transform transition-all duration-300 ease-out scale-95">
            {selLibrary && (
              <>
                <DialogTitle as="h3" className="text-2xl font-bold text-blue-800 mb-4">
                  {selLibrary.name} Details
                </DialogTitle>
                <div className="space-y-4">
                  <p className="text-gray-700"><strong>Package:</strong> {selLibrary.package_name}</p>
                  <p className="text-gray-700"><strong>Version:</strong> {selLibrary.version}</p>
                  <p className="text-gray-700"><strong>Tags:</strong> {selLibrary.tags}</p>
                  <p className="text-gray-700"><strong>Description:</strong> {selLibrary.description}</p>
                  <p className="text-gray-700"><strong>Downloads:</strong> {selLibrary.downloads}</p>
                  <p className="text-gray-700"><strong>Updated:</strong> {selLibrary.updated}</p>
                </div>
                <div className="mt-6">
                  <Link
                    href={selLibrary.link}
                    className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    View Library
                  </Link>
                </div>
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>

      {/* Page Header */}
      <div className="text-center font-bold text-3xl bg-blue-800 text-white py-10">
        Browse Libraries
      </div>

      {/* Search and Filter Section */}
      <div className="p-6 bg-blue-100 flex flex-col items-center">
        <div className="relative w-full max-w-lg mb-6">
          <input
            onChange={searchLibrary}
            type="search"
            className="w-full rounded-full border-2 border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 transition duration-200"
            placeholder="Search libraries..."
          />
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {languageCategories[language].map((category) => (
            <button
              key={category}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              onClick={() => filterCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Display Libraries */}
      {displayLibrary()}
    </div>
  );
};

export default BrowseLibraries;

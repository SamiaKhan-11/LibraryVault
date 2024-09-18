'use client'
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import Navbar from '@/components/Navbar';
import toast from 'react-hot-toast';

const AddLibrary = () => {
  const router = useRouter();

  const LibraryForm = useFormik({
    initialValues: {
      language: '',
      category: '',
      name: '',
      version: '',
      package_name: '',
      tags: '',
      description: '',
      downloads: '',
      updated: '',
      link: ''
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);

      axios.post('http://localhost:5000/library/add', values)
        .then((response) => {
          console.log(response.status);
          toast.success('Library Added');
          resetForm();
         
        }).catch((err) => {
          console.log(err);
          toast.error('Unable to add the Library');
          setSubmitting(false);
        });
    }
  });

  return (
    <div>
      <Navbar />
      <div className=' justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 p-6'>

        <div className="w-full mx-auto max-w-2xl p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Add a New Library</h2>
          <form onSubmit={LibraryForm.handleSubmit} className="space-y-4">
            {/* Category Field */}
            <div className="flex flex-col">
              <label htmlFor="category" className="text-sm font-semibold text-gray-700 mb-1">Language</label>
              <select
                id="language"
                className='border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={LibraryForm.handleChange}
                value={LibraryForm.values.language}
              > 
                <option value="react">React</option>
                <option value="python">Python</option>
                <option value="javascript">Javascript</option>
                <option value="java">Java</option>
              </select>



              {/* <input
              type="text"
              id='language'
              onChange={LibraryForm.handleChange}
              value={LibraryForm.values.language}
              className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder='Enter category'
              required
            /> */}

            </div>

            <div className="flex flex-col">
              <label htmlFor="category" className="text-sm font-semibold text-gray-700 mb-1">Category</label>
              <input
                type="text"
                id='category'
                onChange={LibraryForm.handleChange}
                value={LibraryForm.values.category}
                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder='Enter category'
                required
              />
            </div>

            {/* Name Field */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-1">Library Name</label>
              <input
                type="text"
                id='name'
                onChange={LibraryForm.handleChange}
                value={LibraryForm.values.name}
                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder='Enter library name'
                required
              />
            </div>

            {/* Version Field */}
            <div className="flex flex-col">
              <label htmlFor="version" className="text-sm font-semibold text-gray-700 mb-1">Version</label>
              <input
                type="text"
                id='version'
                onChange={LibraryForm.handleChange}
                value={LibraryForm.values.version}
                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder='Enter version'
                required
              />
            </div>

            {/* Package Name Field */}
            <div className="flex flex-col">
              <label htmlFor="package_name" className="text-sm font-semibold text-gray-700 mb-1">Package Name</label>
              <input
                type="text"
                id='package_name'
                onChange={LibraryForm.handleChange}
                value={LibraryForm.values.package_name}
                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder='Enter package name'
                required
              />
            </div>

            {/* Tags Field */}
            <div className="flex flex-col">
              <label htmlFor="tags" className="text-sm font-semibold text-gray-700 mb-1">Tags</label>
              <input
                type="text"
                id='tags'
                onChange={LibraryForm.handleChange}
                value={LibraryForm.values.tags}
                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder='Enter tags (comma separated)'
                required
              />
            </div>

            {/* Description Field */}
            <div className="flex flex-col">
              <label htmlFor="description" className="text-sm font-semibold text-gray-700 mb-1">Description</label>
              <textarea
                id='description'
                onChange={LibraryForm.handleChange}
                value={LibraryForm.values.description}
                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder='Enter a brief description'
                required
              />
            </div>

            {/* Downloads Field */}
            <div className="flex flex-col">
              <label htmlFor="downloads" className="text-sm font-semibold text-gray-700 mb-1">Downloads</label>
              <input
                type="text"
                id='downloads'
                onChange={LibraryForm.handleChange}
                value={LibraryForm.values.downloads}
                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder='Enter number of downloads'
                required
              />
            </div>

            {/* Updated Field */}
            <div className="flex flex-col">
              <label htmlFor="updated" className="text-sm font-semibold text-gray-700 mb-1">Last Updated</label>
              <input
                type="text"
                id='updated'
                onChange={LibraryForm.handleChange}
                value={LibraryForm.values.updated}
                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder='Enter last updated date'
                required
              />
            </div>

            {/* Link Field */}
            <div className="flex flex-col">
              <label htmlFor="link" className="text-sm font-semibold text-gray-700 mb-1">Library Link</label>
              <input
                type="url"
                id='link'
                onChange={LibraryForm.handleChange}
                value={LibraryForm.values.link}
                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder='Enter library URL'
                required
              />
            </div>

            {/* Submit Button with Animation */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full max-w-sm mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 active:scale-95"
              >
                Add Library
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLibrary;

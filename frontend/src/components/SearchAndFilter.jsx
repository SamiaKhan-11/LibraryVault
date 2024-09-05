import React, { useState } from 'react';

const SearchAndFilter = ({ onSearch, onFilter }) => {
  // State for managing search input and selected filter
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  // Handler for search input changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);  // Update the search term state
    onSearch(e.target.value);  // Call the onSearch function passed from the parent component
  };

  // Handler for filter selection changes
  const handleFilterChange = (e) => {
    setSelectedLanguage(e.target.value);  // Update the selected language state
    onFilter(e.target.value);  // Call the onFilter function passed from the parent component
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
        {/* Search Bar */}
        <div className="relative w-full lg:w-1/2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search libraries..."
          />
          <span className="absolute right-3 top-2.5 text-gray-500">
            🔍
          </span>
        </div>

        {/* Filter Options */}
        <div className="flex items-center space-x-4">
          <select
            value={selectedLanguage}
            onChange={handleFilterChange}
            className="w-full lg:w-auto px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Languages</option>
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Java">Java</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SearchAndFilter;

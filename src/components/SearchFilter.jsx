import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const SearchFilter = ({ onSearch, onFilter }) => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  // Handle search input change
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = () => {
    onFilter(city, state); // Fix: Remove sortOrder and pass city, state only
  };

  return (
    <div className="space-y-6">
      {/* Search box with logo and button */}
      <div className="flex items-center">
        <form className="flex items-center max-w-4xl mx-auto w-full">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FaMapMarkerAlt className="h-5 w-5" />
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-4"
              placeholder="Search branch name..."
              value={query}
              onChange={handleSearchChange}
            />
          </div>
          <button
            type="button"
            onClick={handleFilterChange}
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>

      {/* Filter section */}
      <div className="space-y-4 p-4">
        {/* City and State Filters */}
        <div className="flex space-x-2">
          <input
            type="text"
            className="w-1/2 p-2 border border-gray-300 rounded"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            className="w-1/2 p-2 border border-gray-300 rounded"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>

        {/* Apply Filters Button */}
        <button
          onClick={handleFilterChange}
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;

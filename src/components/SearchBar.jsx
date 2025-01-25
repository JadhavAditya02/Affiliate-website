// SearchBar.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ value, onChange, className = "" }) => {
  const [searchTerm, setSearchTerm] = useState(value || "");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(searchTerm);
    }, 300); // Debounce for 300ms

    return () => clearTimeout(handler);
  }, [searchTerm, onChange]);

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder="Search watches..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-5 py-3 border rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 ${
          isFocused ? "shadow-lg" : "shadow-md"
        } bg-white`}
      />
      <span
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-200 ${
          isFocused ? "text-gray-600" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </span>
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default SearchBar;
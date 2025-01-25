// WatchList.jsx
import React from "react";  // ADDED React import here

import { useState, useEffect } from "react";
import WatchCard from "./WatchCard";
import PropTypes from "prop-types";


const WatchList = ({ watches = [], searchQuery = "" }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const showMoreCount = 6;
  const [filteredWatches, setFilteredWatches] = useState([]); // Initialize as an empty array

  useEffect(() => {
    if (searchQuery) {
      const filtered = watches.filter(
        (watch) =>
          watch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          watch.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredWatches(filtered);
      setVisibleCount(6);
    } else {
      setFilteredWatches(watches); // Update with initial watches
      setVisibleCount(6);
    }
  }, [searchQuery, watches]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + showMoreCount);
  };

  const visibleWatches = filteredWatches.slice(0, visibleCount);

  return (
    <div className="pt-6">
      {visibleWatches.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {visibleWatches.map((watch) => (
              <WatchCard key={watch.id} watch={watch} />
            ))}
          </div>
          {visibleCount < filteredWatches.length && (
            <div className="text-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={handleShowMore}
              >
                Show More
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center text-gray-500 py-8 opacity-70">
          {searchQuery
            ? `No watches match your search for "${searchQuery}"`
            : "No watches found"}
        </div>
      )}
    </div>
  );
};


WatchList.propTypes = {
    watches: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })).isRequired,
    searchQuery: PropTypes.string,
}

export default WatchList;
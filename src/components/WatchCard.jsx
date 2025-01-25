// WatchCard.jsx
import React from "react";  // ADDED React import here

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const WatchCard = ({ watch }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-auto">
      <div className="flex flex-col items-center p-4">
        <div className="relative w-full h-32 mb-3 overflow-hidden rounded-md">
          <img
            src={watch.imageUrl}
            alt={watch.name}
            className="object-contain w-full h-full transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center leading-tight">
          {watch.name}
        </h2>
        <p className="text-gray-500 text-center text-sm mb-2 line-clamp-2">
          {watch.description}
        </p>
      </div>
      <div className="mt-auto p-4 border-t border-gray-100 text-center">
        <Link
          to={`/product/${watch.id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md inline-block transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

WatchCard.propTypes = {
  watch: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};


export default WatchCard;
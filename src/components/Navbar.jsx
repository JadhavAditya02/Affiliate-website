import React from "react";  // ADDED React import here

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white font-semibold text-xl tracking-wide hover:text-gray-200 transition duration-200"
        >
          Watch Collector
        </Link>
        <ul className="flex space-x-6">
          {["Casio", "Citizen", "Timex"].map((brand) => (
            <li key={brand}>
              <Link
                to={`/brand/${brand.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition duration-200 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {brand}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

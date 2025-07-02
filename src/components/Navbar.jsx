import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-semibold text-xl tracking-wide hover:text-gray-200 transition duration-200"
        >
          Watch Collector
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["Casio", "Citizen", "Timex", "Titan", "G-Shock", "HMT", "Tissot", "Seiko", "Accessories"].map((brand) => (
            <li key={brand}>
              <Link
                to={`/brand/${brand.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition duration-200 px-3 py-2 rounded-md"
              >
                {brand}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 px-4">
          <ul className="space-y-2">
            {["Casio", "Citizen", "Timex", "Titan", "G-Shock", "HMT", "Tissot", "Seiko", "Accessories"].map((brand) => (
              <li key={brand}>
                <Link
                  to={`/brand/${brand.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-white transition duration-200 px-3 py-2 rounded-md"
                >
                  {brand}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";  // ADDED React import here

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} Watch Collector
        </p>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="/privacy"
                className="hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-white transition-colors duration-200 text-sm"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

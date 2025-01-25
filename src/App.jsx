// App.jsx
import React, { useState } from "react";  // ADDED React import here
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WatchList from "./components/WatchList";
import SearchBar from "./components/SearchBar";
import { watchesData } from "./data";
import BrandPage from "./pages/BrandPage";
import ProductPage from "./pages/ProductPage";
import PropTypes from 'prop-types';


const FilterWrapper = ({ children, setSearchQuery, searchQuery }) => {
  const location = useLocation();

  // Only show search bar on the home route
  if (location.pathname !== "/") {
    return children;
  }

  return (
    <>
      <div className="flex justify-center items-center mb-4">
        <SearchBar
          value={searchQuery}
          onChange={(query) => {
            setSearchQuery(query);
          }}
          className="w-full max-w-md"
        />
      </div>
      {children}
    </>
  );
};

FilterWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
};


const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWatches = watchesData.filter(
    (watch) =>
      watch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      watch.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <main className="flex-grow container mx-auto p-6">
          <FilterWrapper
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <WatchList
                    watches={filteredWatches}
                    searchQuery={searchQuery}
                  />
                }
              />
              <Route path="/brand/:brandName" element={<BrandPage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
            </Routes>
          </FilterWrapper>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
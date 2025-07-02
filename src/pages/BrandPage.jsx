import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { watchesData } from "../data";
import WatchList from "../components/WatchList";
import SearchBar from "../components/SearchBar";

const BrandPage = () => {
  const { brandName } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWatches = watchesData.filter((watch) => {
    const isMatchingBrand = Array.isArray(watch.brand)
      ? watch.brand.some((b) => b.toLowerCase() === brandName.toLowerCase())
      : watch.brand.toLowerCase() === brandName.toLowerCase();

    const isMatchingSearch =
      watch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      watch.description.toLowerCase().includes(searchQuery.toLowerCase());

    return isMatchingBrand && isMatchingSearch;
  });

  return (
    <div className="container mx-auto px-4 py-2">
      {/* Title + SearchBar Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 capitalize whitespace-nowrap">
          {brandName} Watches
        </h1>
        <div className="w-full sm:max-w-md">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={`Search ${brandName} watches...`}
          />
        </div>
      </div>

      <WatchList watches={filteredWatches} />
    </div>
  );
};

export default BrandPage;

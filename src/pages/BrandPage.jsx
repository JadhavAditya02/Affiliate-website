import React from "react";  // ADDED React import here

import { useParams } from "react-router-dom";
import { watchesData } from "../data";
import WatchList from "../components/WatchList";

const BrandPage = () => {
  const { brandName } = useParams();
  const filteredWatches = watchesData.filter((watch) => {
  if (Array.isArray(watch.brand)) {
    return watch.brand.some(
      (b) => b.toLowerCase() === brandName.toLowerCase()
    );
  }
  return watch.brand.toLowerCase() === brandName.toLowerCase();
});


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2 border-gray-200 capitalize">
        {brandName} Watches
      </h1>
      <WatchList watches={filteredWatches} />
    </div>
  );
};

export default BrandPage;

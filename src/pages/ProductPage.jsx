import React from "react";

import { useParams } from "react-router-dom";
import { watchesData } from "../data";
import { FaAmazon, FaShopify, FaJediOrder } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";

const ProductPage = () => {
  const { productId } = useParams();
  const watch = watchesData.find((watch) => watch.id === parseInt(productId));

  if (!watch) {
    return (
      <div className="container mx-auto p-6 text-center text-gray-500">
        Product not found.
      </div>
    );
  }

  const platformIcons = {
    amazon: <FaAmazon className="mr-1" />,
    flipkart: <SiFlipkart className="mr-1" />,
    myntra: <FaShopify className="mr-1" />,
    ajio: <FaJediOrder className="mr-1" />,
  };

   const platformStyles = {
    amazon: "bg-yellow-400 hover:bg-yellow-500 text-gray-900",
    flipkart: "bg-blue-400 hover:bg-blue-500 text-white",
    myntra: "bg-red-400 hover:bg-red-500 text-white",
    ajio: "bg-green-400 hover:bg-green-500 text-white",
  };

  const platforms = {
    amazon: "Amazon",
    flipkart: "Flipkart",
    myntra: "Myntra",
    ajio: "Ajio",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 p-6 flex justify-center items-center">
          {watch.imageUrl && (
            <div className="w-full max-h-96 overflow-hidden rounded-md">
              <img
                src={watch.imageUrl}
                alt={watch.name}
                className="object-contain w-full h-full max-h-96 transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            {watch.name && (
              <h1 className="text-3xl font-semibold text-gray-800 mb-3 leading-tight">
                {watch.name}
              </h1>
            )}
            {watch.description && (
              <p className="text-gray-700 text-base mb-5 leading-relaxed">
                {watch.description}
              </p>
            )}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {watch.affiliateLinks &&
              Object.entries(watch.affiliateLinks).map(
                ([platform, link]) =>
                  link && (
                    <a
                      key={platform}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                     className={`flex items-center font-medium py-2.5 px-4 rounded-md transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 ${platformStyles[platform]}`}
                    >
                       <span className="flex items-center">
                         {platformIcons[platform]}
                         Buy on {platforms[platform]}
                       </span>
                    </a>
                  )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
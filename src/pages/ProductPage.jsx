import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { watchesData } from "../data";
import { slugify } from "../utils";
import {
  FaAmazon,
  FaShopify,
  FaJediOrder,
  FaShareAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { SiFlipkart, SiWhatsapp } from "react-icons/si";
import { MdContentCopy } from "react-icons/md";

const ProductPage = () => {
  const { productSlug } = useParams();
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copied, setCopied] = useState(false);

  const watch = watchesData.find((watch) => slugify(watch.name) === productSlug);

  const shareUrl = window.location.href;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [copied]);

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
    <div className="container mx-auto px-4 py-8 relative">
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
            <h1 className="text-3xl font-semibold text-gray-800 mb-3 leading-tight">
              {watch.name}
            </h1>
            <p className="text-gray-700 text-base mb-5 leading-relaxed">
              {watch.description}
            </p>
          </div>

          {/* Price comparison label and buy buttons */}
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2 italic">
              🔍 Always compare prices from all links below before buying.
            </p>
            <div className="flex flex-wrap gap-3">
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

      {/* Share Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {showShareOptions && (
          <>
            <button
              onClick={handleCopy}
              className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center shadow-md hover:bg-gray-700 transition"
              aria-label="Copy Link"
            >
              <MdContentCopy />
            </button>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md hover:bg-green-600 transition"
              aria-label="Share on WhatsApp"
            >
              <SiWhatsapp />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition"
              aria-label="Share on Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href={`https://www.instagram.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-md hover:bg-pink-600 transition"
              aria-label="Open Instagram"
            >
              <FaInstagram />
            </a>
          </>
        )}

        {/* Share Toggle Button */}
        <button
          onClick={() => setShowShareOptions((prev) => !prev)}
          className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center shadow-md hover:bg-gray-700 transition"
          aria-label="Share"
        >
          <FaShareAlt size={18} />
        </button>

        {copied && (
          <div className="absolute right-16 bottom-1 bg-gray-700 text-white text-xs px-3 py-1 rounded-full shadow-sm">
            Link copied!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

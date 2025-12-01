"use client";
import React from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

const CatalogImage = ({ 
  imageUrl, 
  altText, 
  size = "md",
  onClick 
}) => {
  // Size classes mapping
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-48 h-48",
    xl: "w-64 h-64"
  };

  return (
    <div 
      className={`relative group cursor-pointer `}
      onClick={onClick}
    >
      {/* Product Image */}
      <div className="relative w-full h-full overflow-hidden rounded-lg bg-gray-100">
        {imageUrl ? (
          <Image
            width={600}
            height={400}
            src={`https://healdiway.bkarogyam.com/media/${imageUrl}`}
            alt={altText}
          
            className="w-screen h-auto transition-transform duration-300 group-hover:scale-105"
            objectFit="cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
        
        {/* Plus Icon Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white p-2 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
            <FiPlus className="w-5 h-5 text-gray-800" />
          </div>
        </div> */}
      </div>
      
      {/* Catalog Badge */}
      {/* <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full p-1 shadow-md">
        <FiPlus className="w-4 h-4" />
      </div> */}
    </div>
  );
};

export default CatalogImage;
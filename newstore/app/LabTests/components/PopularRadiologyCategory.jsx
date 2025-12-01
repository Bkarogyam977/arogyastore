
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PopularRadiologyCategory = () => {
  const [showAll, setShowAll] = useState(false);

  const packages = [
    {
      id: 1,
      name: 'CT-Scan',
      image: '/images/imageBox/hopes/CT-Scan.png',
      link: '#'
    },
    {
      id: 2,
      name: 'ECG-Test',
      image: '/images/imageBox/hopes/ECG-Test.png',
      link: '#'
    },
    {
      id: 3,
      name: 'X-Ray',
      image: '/images/imageBox/hopes/X-Ray.png',
      link: '#'
    },
    {
      id: 4,
      name: 'Echo-Test',
      image: '/images/imageBox/hopes/Echo-Test.png',
      link: '#'
    },
    {
      id: 5,
      name: 'MRI',
      image: '/images/imageBox/hopes/MRI.png',
      link: '#'
    },
    {
      id: 6,
      name: 'UltraSound',
      image: '/images/imageBox/hopes/UltraSound.png',
      link: '#'
    }
  ];

  const handleShowAll = () => setShowAll(true);

  return (
    <div className="w-full p-5 rounded-lg shadow-md bg-white">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-blue-600 px-2">Popular Radiology Category</h2>
        {!showAll && packages.length > 6 && (
          <span 
            onClick={handleShowAll}
            className="text-blue-600 text-sm font-semibold cursor-pointer hover:underline"
          >
            View More &gt;
          </span>
        )}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {(showAll ? packages : packages.slice(0, 6)).map((pkg) => (
          <div key={pkg.id} className="flex flex-col items-center">
            <Link 
              href={pkg.link} 
              className="w-full aspect-square flex items-center justify-center bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <Image
                src={pkg.image}
                alt={pkg.name}
                width={80}
                height={80}
                className="rounded-md object-cover w-full h-full"
              />
            </Link>
            <span className="mt-2 text-xs text-center text-gray-700 font-medium line-clamp-2">
              {pkg.name}
            </span>
          </div>
        ))}

        {!showAll && packages.length > 6 && (
          <div className="flex flex-col items-center">
            <div
              onClick={handleShowAll}
              className="w-full aspect-square flex items-center justify-center bg-blue-100 rounded-lg cursor-pointer hover:bg-blue-200"
            >
              <span className="text-blue-600 font-bold text-xl">+{packages.length - 6}</span>
            </div>
            <span className="mt-2 text-xs text-center text-gray-700 font-medium">
              More Packages
            </span>
          </div>
        )}
      </div>
    </div>
  );
};


export default PopularRadiologyCategory;
// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import { ArrowRightOutlined } from "@ant-design/icons";

// const ProductCategories = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [visibleCount, setVisibleCount] = useState(8); // Show 8 initially

//   // Fetch Categories Data from API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(
//           "https://healdiway.bkarogyam.com/erp-api/inv_category/"
//         );
//         setCategories(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//         setError("Failed to load categories.");
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Handle Loading and Error States
//   if (loading) return (
//     <div className="flex justify-center items-center h-64">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2E7D32]"></div>
//     </div>
//   );
  
//   if (error) return (
//     <div className="bg-red-50 p-6 rounded-xl text-center">
//       <p className="text-red-600 font-medium">{error}</p>
//     </div>
//   );

//   // Load More Handler
//   const handleLoadMore = () => {
//     setVisibleCount((prevCount) => prevCount + 8);
//   };

//   return (
//     <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
//       {/* Section Header */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2E7D32] to-[#43A047]">
//             Product Categories
//           </span>
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Explore our premium range of health and wellness products
//         </p>
//         <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#2E7D32] to-[#43A047] mx-auto rounded-full"></div>
//       </div>

//       {/* Categories Grid */}
//       <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
//         {categories.slice(0, visibleCount).map((category) => (
//           <div 
//             key={category.id} 
//             className="group flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-1"
//           >
//             {/* Category Image Container */}
//             <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md border border-gray-100 group-hover:shadow-lg transition-all duration-300">
//               <Image
//                 src={`https://healdiway.bkarogyam.com/media/${category.image}`}
//                 alt={category.name}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
            
//             {/* Category Name */}
//             <p className="text-center font-medium text-gray-800 mt-4 group-hover:text-[#2E7D32] transition-colors duration-300">
//               {category.name}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Load More Button */}
//       {visibleCount < categories.length && (
//         <div className="text-center mt-12">
//           <button
//             onClick={handleLoadMore}
//             className="flex items-center justify-center mx-auto gap-2 px-8 py-3 bg-gradient-to-r from-[#2E7D32] to-[#43A047] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:from-[#43A047] hover:to-[#2E7D32]"
//           >
//             Load More
//             <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductCategories;

"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";

// List of parent category IDs to exclude
const excludedParentIds = [295, 297, 300, 296, 298];

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://healdiway.bkarogyam.com/erp-api/inv_category/");
        const filtered = response.data.filter(
          (item) => item.parent_data !== null && !excludedParentIds.includes(item.parent_id)
        );
        setCategories(filtered);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories.");
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2E7D32]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-6 rounded-xl text-center">
        <p className="text-red-600 font-medium">{error}</p>
      </div>
    );
  }

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2E7D32] to-[#43A047]">
            Product Categories
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our premium range of health and wellness products
        </p>
        <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#2E7D32] to-[#43A047] mx-auto rounded-full"></div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
        {categories.slice(0, visibleCount).map((category) => {
          const imageUrl = category.image
            ? `https://healdiway.bkarogyam.com/media/${category.image}`
            : "/placeholder-category.png";

          return (
            <div
              key={category.id}
              className="group flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              {/* Category Image */}
              <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md border border-gray-100 group-hover:shadow-lg transition-all duration-300">
                <Image
                  src={imageUrl}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder-category.png";
                  }}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Category Name */}
              <p className="text-center font-medium text-gray-800 mt-4 group-hover:text-[#2E7D32] transition-colors duration-300">
                {category.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {visibleCount < categories.length && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="flex items-center justify-center mx-auto gap-2 px-8 py-3 bg-gradient-to-r from-[#2E7D32] to-[#43A047] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:from-[#43A047] hover:to-[#2E7D32]"
          >
            Load More
            <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCategories;

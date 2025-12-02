"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAPI } from "@/dataarrange/utils/common";
import { motion, AnimatePresence } from "framer-motion";

const CategoryImage = ({ imageSrc }) => {
  return (
    <Image
      src={imageSrc}
      alt="Category Icon"
      fill
      className="object-contain"
      unoptimized={true}
    />
  );
};

function ProductCategoryScroller({ categoryproduct = [] }) {
  const [isMobile, setIsMobile] = useState(false);
  const [categories, setCategories] = useState(categoryproduct);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  // IDs to exclude
  const excludedParentIds = [295, 297, 300, 296, 298];

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (categoryproduct.length === 0) {
      loadCategory();
    } else {
      setCategories(filterCategories(categoryproduct));
    }
  }, [categoryproduct]);

  const filterCategories = (data) => {
    if (!Array.isArray(data)) return [];
    return data.filter(
      (item) =>
        item?.parent_data !== null &&
        !excludedParentIds.includes(item?.parent_id)
    );
  };

  const loadCategory = () => {
    setIsLoading(true);
    setError(null);

    const successFn = (data) => {
      if (!Array.isArray(data)) {
        setError("Invalid data format");
        setIsLoading(false);
        return;
      }
      setCategories(filterCategories(data));
      setIsLoading(false);
    };

    const errorFn = (err) => {
      console.error("Error fetching categories:", err);
      setError("Failed to load categories");
      setIsLoading(false);
    };

    getAPI(`inv_category`, successFn, errorFn);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      const scrollAmount = Math.min(containerWidth * 0.8, 400);
      sliderRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      const scrollAmount = Math.min(containerWidth * 0.8, 400);
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Check scroll position for button visibility
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScrollPosition);
      // Initial check
      setTimeout(checkScrollPosition, 100);
    }
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, [categories]);

  // Animation configs
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  const circleHoverEffect = {
    scale: 1.1,
    boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
    transition: { duration: 0.3 }
  };

  if (error) {
    return (
      <div className="w-full md:px-4 px-2 py-10 text-center bg-white"> {/* White background added */}
        <h2 className="font-bold text-2xl text-gray-800 mb-4">Shop By Categories</h2>
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={loadCategory}
          className="bg-blue-500 text-white px-5 py-2 rounded-full shadow-md"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full md:px-4 px-2 py-8 bg-white"> {/* White background added */}
      <div className="md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="font-bold text-2xl md:text-3xl text-gray-800">
            Shop By Products <span className="text-green-600">Concern</span>
          </h2>
          <div className="w-16 h-0.5 bg-orange-500 mx-auto my-2"></div>
          <p className="max-w-xl mx-auto text-gray-500 text-sm hidden md:block">
            Discover products tailored to your needs
          </p>
        </motion.div>

        {/* SLIDER CONTAINER */}
        <div className="relative">
          {/* LEFT ARROW BUTTON */}
          {showLeftButton && categories.length > 0 && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-all hidden md:flex items-center justify-center w-10 h-10"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          )}

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4 md:space-x-6 px-2 md:px-4 py-4"
            onScroll={checkScrollPosition}
          >
            {/* LOADING STATE */}
            {isLoading ? (
              <div className="flex space-x-4 md:space-x-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center animate-pulse flex-shrink-0">
                    <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-gray-200"></div> {/* Changed to gray-200 for better visibility */}
                    <div className="w-20 h-3 bg-gray-200 rounded mt-2"></div> {/* Changed to gray-200 */}
                  </div>
                ))}
              </div>
            ) : (
              /* CATEGORIES SLIDER */
              <AnimatePresence>
                {categories.map((category) => {
                  const imgSrc =
                    category.image
                      ? `https://healdiway.bkarogyam.com/media/${category.image}`
                      : "/placeholder-category.png";

                  return (
                    <motion.div
                      key={category.id}
                      variants={item}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="flex flex-col items-center flex-shrink-0"
                      style={{ minWidth: isMobile ? '100px' : '160px' }}
                    >
                      <Link
                        href={`/e-store/categoryproduct/${category.id}`}
                        className="flex flex-col items-center group"
                      >
                        {/* CIRCLE ICON */}
                        <motion.div
                          whileHover={circleHoverEffect}
                          className="relative w-20 h-20 md:w-32 md:h-32 rounded-full bg-white border-2 border-black shadow-sm overflow-hidden transition-all"
                        >
                          <CategoryImage imageSrc={imgSrc} />
                        </motion.div>

                        {/* TITLE BELOW */}
                        <h3 className="mt-2 text-center text-xs md:text-sm font-medium text-gray-800 group-hover:text-orange-600 line-clamp-2 max-w-[90px] md:max-w-[120px]">
                          {category.name}
                        </h3>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            )}
          </div>

          {/* RIGHT ARROW BUTTON */}
          {showRightButton && categories.length > 0 && (
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-all hidden md:flex items-center justify-center w-10 h-10"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          )}
        </div>

        {/* VIEW ALL BUTTON */}
        {categories.length > 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-8"
          >
            <Link href="/e-store/categories">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium shadow-md hover:bg-orange-600 transition-all"
              >
                View All Categories
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Tailwind classes for scrollbar hide */}
      <div className="[&_.scrollbar-hide]:overflow-x-auto [&_.scrollbar-hide]:scrollbar-hide">
        <style jsx global>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
}

export default ProductCategoryScroller;

















// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { getAPI } from "@/dataarrange/utils/common";
// import { motion, AnimatePresence } from "framer-motion";

// const CategoryImage = ({ category, isMobile }) => {
//   const [imageSrc, setImageSrc] = useState(
//     category.image 
//       ? `https://healdiway.bkarogyam.com/media/${category.image}`
//       : '/placeholder-category.png'
//   );
//   const [retryCount, setRetryCount] = useState(0);

//   const handleError = () => {
//     if (retryCount < 2) {
//       setRetryCount(retryCount + 1);
//       setImageSrc(`https://healdiway.bkarogyam.com/media/${category.image}?retry=${retryCount}&t=${Date.now()}`);
//     } else {
//       setImageSrc('/placeholder-category.png');
//     }
//   };

//   return (
//     <Image
//       src={imageSrc}
//       alt={category.name || 'Product category'}
//       className="object-contain group-hover:scale-110 transition-transform duration-300"
//       fill
//       sizes="(max-width: 640px) 80px, 160px"
//       onError={handleError}
//       unoptimized={true}
//     />
//   );
// };


// function ProductCategoryScroller({ categoryproduct = [] }) {
//   const [isMobile, setIsMobile] = useState(false);
//   const [categories, setCategories] = useState(categoryproduct);
//   const [expanded, setExpanded] = useState(false);
//   const [initialItemsToShow, setInitialItemsToShow] = useState(15);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // List of parent IDs to exclude
//   const excludedParentIds = [295, 297, 300, 296, 298];

//   useEffect(() => {
//     const checkScreenSize = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobile(mobile);
//       setInitialItemsToShow(mobile ? 9 : 10);
//     };

//     checkScreenSize();
//     const resizeHandler = () => checkScreenSize();
//     window.addEventListener("resize", resizeHandler);

//     return () => window.removeEventListener("resize", resizeHandler);
//   }, []);

//   useEffect(() => {
//     if (categoryproduct.length === 0) {
//       loadCategory();
//     } else {
//       setCategories(filterCategories(categoryproduct));
//     }
//   }, [categoryproduct]);

//   const filterCategories = (data) => {
//     if (!Array.isArray(data)) return [];
//     return data.filter(item => 
//       item?.parent_data !== null && 
//       !excludedParentIds.includes(item?.parent_id)
//     );
//   };

//   const loadCategory = () => {
//     setIsLoading(true);
//     setError(null);
    
//     const successFn = (data) => {
//       if (!Array.isArray(data)) {
//         throw new Error("Invalid data format received");
//       }
//       setCategories(filterCategories(data));
//       setIsLoading(false);
//     };
    
//     const errorFn = (error) => {
//       console.error("Error fetching categories:", error);
//       setError(error.message || "Failed to load categories");
//       setIsLoading(false);
//     };
    
//     getAPI(`inv_category`, successFn, errorFn);
//   };

//   const toggleExpand = () => setExpanded(!expanded);

//   const itemsToShow = expanded ? categories.length : initialItemsToShow;
//   const canExpand = categories.length > initialItemsToShow;

//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.05
//       }
//     }
//   };



//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   // Circle hover effect
//   const circleHoverEffect = {
//     scale: 1.08,
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
//     transition: {
//       duration: 0.3,
//       ease: "easeOut"
//     }
//   };

//   if (error) {
//     return (
//       <div className="w-full md:px-4 px-2 py-8 bg-gradient-to-b from-gray-50 to-white">
//         <div className="md:px-10 text-center py-10">
//           <h2 className="font-bold text-2xl mb-4 text-gray-800">
//             Shop By Categories
//           </h2>
//           <div className="text-red-500 mb-4">{error}</div>
//           <button
//             onClick={loadCategory}
//             className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full md:px-4 px-2 py-8 bg-gradient-to-b from-gray-50 to-white">
//       <div className="md:px-10">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-8"
//         >
//           <h2 className="font-bold text-2xl md:text-3xl mb-2 text-gray-800">
//             Shop By Products <span className="text-green-600">Concern</span>
//           </h2>
//           <div className="w-16 h-0.5 bg-orange-500 mx-auto mb-2"></div>
//           <p className="text-gray-600 text-sm max-w-2xl hidden md:block mx-auto">
//             Discover products tailored to your needs
//           </p>
//         </motion.div>

//         {isLoading ? (
//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4"
//           >
//             {[...Array(initialItemsToShow)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 variants={item}
//                 className="flex flex-col items-center animate-pulse"
//               >
//                 <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-200 rounded-full mb-2"></div>
//                 <div className="h-3 w-16 md:w-24 bg-gray-200 rounded"></div>
//               </motion.div>
//             ))}
//           </motion.div>
//         ) : (
//           <>
//             {categories.length === 0 ? (
//               <div className="text-center py-10 text-gray-500">
//                 No categories available
//               </div>
//             ) : (
//               <>
//                 <motion.div
//                   variants={container}
//                   initial="hidden"
//                   animate="show"
//                   className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4"
//                 >
//                   <AnimatePresence>
//                     {categories.slice(0, itemsToShow).map((category) => (
//                       <motion.div
//                         key={category.id}
//                         variants={item}
//                         initial="hidden"
//                         animate="show"
//                         exit={{ opacity: 0, scale: 0.5 }}
//                         className="flex flex-col items-center"
//                       >
//                         <Link 
//                           href={`/e-store/categoryproduct/${category.id}`}
//                           className="flex flex-col items-center w-full group"
//                         >
//                           {/* Direct Circular Icon - No Extra Card */}
//                           <motion.div
//                             whileHover={circleHoverEffect}
//                             className="relative w-20 h-20 md:w-32 md:h-32 bg-white rounded-full shadow-sm border border-gray-200 overflow-hidden mb-2 transition-all duration-300 group-hover:border-orange-300"
//                           >
//                             <CategoryImage category={category} isMobile={isMobile} />
//                           </motion.div>
                          
//                           {/* Title below the circle */}
//                           <div className="text-center w-full">
//                             <h3 className="font-medium text-xs md:text-sm text-gray-800 line-clamp-2 group-hover:text-orange-600 transition-colors leading-tight px-1">
//                               {category.name || 'Category'}
//                             </h3>
//                           </div>
//                         </Link>
//                       </motion.div>
//                     ))}
//                   </AnimatePresence>
//                 </motion.div>

//                 {canExpand && (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.3 }}
//                     className="flex justify-center mt-6 md:mt-8"
//                   >
//                     <motion.button
//                       onClick={toggleExpand}
//                       whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
//                       whileTap={{ scale: 0.98 }}
//                       className="px-28 md:px-40 py-3 bg-white border border-gray-300 rounded-full text-gray-700 text-sm font-medium flex items-center gap-2 hover:bg-gray-50 shadow-sm hover:shadow-md transition-all min-w-[140px] justify-center"
//                     >
//                       {expanded ? (
//                         <>
//                           <span className="text-sm">Show Less </span>
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
//                           </svg>
//                         </>
//                       ) : (
//                         <>
//                           <span className="text-sm">Show More </span>
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                           </svg>
//                         </>
//                       )}
//                     </motion.button>
//                   </motion.div>
//                 )}
//               </>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCategoryScroller;



// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { getAPI } from "@/dataarrange/utils/common";
// import { motion, AnimatePresence } from "framer-motion";

// function ProductCategoryScroller({ categoryproduct = [] }) {
//   const [isMobile, setIsMobile] = useState(false);
//   const [categories, setCategories] = useState(categoryproduct);
//   const [expanded, setExpanded] = useState(false);
//   const [initialItemsToShow, setInitialItemsToShow] = useState(12);
//   const [isLoading, setIsLoading] = useState(false);

//   // List of parent IDs to exclude
//   const excludedParentIds = [295, 297, 300, 296, 298];

//   useEffect(() => {
//     const checkScreenSize = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobile(mobile);
//       setInitialItemsToShow(mobile ? 8 : 16);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   useEffect(() => {
//     if (categoryproduct.length === 0) {
//       loadCategory();
//     } else {
//       // Filter the prop data if provided
//       setCategories(filterCategories(categoryproduct));
//     }
//   }, [categoryproduct]);

//   // Filter function to exclude unwanted categories
//   const filterCategories = (data) => {
//     return data.filter(item => 
//       item.parent_data !== null && 
//       !excludedParentIds.includes(item.parent_id)
//     );
//   };

//   const loadCategory = () => {
//     setIsLoading(true);
//     const successFn = (data) => {
//       setCategories(filterCategories(data));
//       setIsLoading(false);
//     };
//     const errorFn = (error) => {
//       console.error("Error fetching categories:", error);
//       setIsLoading(false);
//     };
//     getAPI(`inv_category`, successFn, errorFn);
//   };

//   const toggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   const itemsToShow = expanded ? categories.length : initialItemsToShow;
//   const canExpand = categories.length > initialItemsToShow;

//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.05
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   const hoverEffect = {
//     scale: 1.05,
//     boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
//     transition: {
//       duration: 0.3,
//       ease: "easeOut"
//     }
//   };

//   return (
//     <div className="w-full md:px-4 px-2 py-8 bg-gradient-to-b from-gray-50 to-white">
//       <div className="md:px-10">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-6"
//         >
//           <h2 className="font-bold text-2xl md:text-3xl mb-2 text-gray-800">
//             Shop By Products <span className="text-green-600">Categories</span>
//           </h2>
//           <div className="w-16 h-0.5 bg-orange-500 mx-auto mb-2"></div>
//           <p className="text-gray-600 text-sm max-w-2xl hidden md:block mx-auto">
//             Discover products tailored to your needs
//           </p>
//         </motion.div>

//         {isLoading ? (
//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3"
//           >
//             {[...Array(initialItemsToShow)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 variants={item}
//                 className="bg-white rounded-lg shadow-xs p-1 md:p-2 h-full animate-pulse"
//               >
//                 <div className="aspect-[1/0.9] md:aspect-[1/0.8] w-full bg-gray-200 rounded mb-1"></div>
//                 <div className="h-3 w-3/4 bg-gray-200 rounded mx-auto"></div>
//               </motion.div>
//             ))}
//           </motion.div>
//         ) : (
//           <>
//             <motion.div
//               variants={container}
//               initial="hidden"
//               animate="show"
//               className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3"
//             >
//               <AnimatePresence>
//                 {categories.slice(0, itemsToShow).map((category, id) => (
//                   <motion.div
//                     key={id}
//                     variants={item}
//                     initial="hidden"
//                     animate="show"
//                     exit={{ opacity: 0, scale: 0.5 }}
//                     whileHover={hoverEffect}
//                     className="bg-white rounded-lg shadow-xs hover:shadow-sm border border-gray-100 overflow-hidden transition-all"
//                   >
//                     <Link href={`/e-store/categoryproduct/${category.id}`}>
//                       <div className="relative aspect-[1/0.9] md:aspect-[1/0.8] w-full p-1 md:p-2 flex items-center justify-center group">
//                         <div className={`relative ${isMobile ? 'w-12 h-12' : 'w-16 md:w-20 h-16 md:h-20'}`}>
//                           <Image
//                             fill
//                             src={`https://healdiway.bkarogyam.com/media/${category.image}`}
//                             alt={category.name}
//                             className="object-contain group-hover:scale-110 transition-transform duration-300"
//                             sizes="(max-width: 640px) 50px, 64px"
//                           />
//                         </div>
//                         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 rounded-lg"></div>
//                       </div>
//                       <div className="p-1 md:p-2 text-center">
//                         <h3 className="font-medium text-[10px] md:text-xs text-gray-800 line-clamp-2 group-hover:text-orange-600 transition-colors">
//                           {category.name}
//                         </h3>
//                       </div>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </motion.div>

//             {canExpand && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="flex justify-center mt-4 md:mt-6"
//               >
//                 <motion.button
//                   onClick={toggleExpand}
//                   whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
//                   whileTap={{ scale: 0.98 }}
//                   className="px-28 md:px-40 py-2 bg-white border border-gray-300 rounded-full text-gray-700 text-sm font-medium flex items-center gap-2 hover:bg-gray-50 shadow-sm hover:shadow-md transition-all min-w-[140px] justify-center"
//                 >
//                   {expanded ? (
//                     <>
//                       <span className="text-sm">Show Less </span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
//                       </svg>
//                     </>
//                   ) : (
//                     <>
//                       <span className="text-sm">Show More </span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                       </svg>
//                     </>
//                   )}
//                 </motion.button>
//               </motion.div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCategoryScroller;
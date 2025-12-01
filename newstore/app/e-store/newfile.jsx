// components/CategorySlider.jsx

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const categories = [
  { 
    name: "Hair Wellness", 
    img: "/images/home-slider/hairwelness.jpg",
    link: "e-store/categoryproduct/220" 
  },
  { 
    name: "Heart Wellness", 
    img: "/images/home-slider/heartwellness.jpg",
    link: "e-store/allproducts?practice=5&category_id=264" 
  },
  { 
    name: "Kidney Wellness", 
    img: "/images/home-slider/Kidneywellness.jpg",
    link: "e-store/allproducts?practice=5&category_id=266" 
  },
  { 
    name: "women Wellness", 
    img: "/images/home-slider/womenwellness.jpg",
    link: "e-store/categoryproduct/328" 
  },
  { 
    name: "Sexual Wellness", 
    img: "/images/home-slider/Sexualwellnes.jpg",
    link: "e-store/categoryproduct/244" 
  },
];

export default function CategorySlider() {
  const [centerIndex, setCenterIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  
  const sliderRef = useRef(null);
  const dragThreshold = 50;

  const prev = useCallback(() => {
    setCenterIndex((i) => (i === 0 ? categories.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setCenterIndex((i) => (i === categories.length - 1 ? 0 : i + 1));
  }, []);

  const handleTouchStart = useCallback((e) => {
    setIsPaused(true);
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    
    const dragDistance = startX - currentX;
    
    if (Math.abs(dragDistance) > dragThreshold) {
      if (dragDistance > 0) {
        next();
      } else {
        prev();
      }
    }
    
    setIsDragging(false);
    handleInteraction();
  }, [isDragging, startX, currentX, next, prev]);

  const handleMouseDown = useCallback((e) => {
    setIsPaused(true);
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    
    const dragDistance = startX - currentX;
    
    if (Math.abs(dragDistance) > dragThreshold) {
      if (dragDistance > 0) {
        next();
      } else {
        prev();
      }
    }
    
    setIsDragging(false);
    handleInteraction();
  }, [isDragging, startX, currentX, next, prev]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      handleInteraction();
    }
  }, [isDragging]);

  useEffect(() => {
    if (isPaused || isDragging) return;

    const interval = setInterval(() => {
      next();
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, isDragging, next]);

  const handleInteraction = useCallback(() => {
    setIsPaused(true);
    const timeoutId = setTimeout(() => setIsPaused(false), 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handlePrev = () => {
    prev();
    handleInteraction();
  };

  const handleNext = () => {
    next();
    handleInteraction();
  };

  const dragOffset = isDragging ? (startX - currentX) : 0;

  return (
    <div className="py-6 pb-12 bg-white relative"> 
      <h2 className="text-center text-2xl md:text-4xl font-bold text-green-800 mb-8 md:mb-16">
        Shop by Category
      </h2>

      <div className="relative max-w-screen-2xl mx-auto px-4 mb-8 md:mb-16">
        
        {/* Arrow buttons - mobile me chhote ho jaye */}
        <button
          onClick={handlePrev}
          className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-xl z-30"
        >
          <ChevronLeft size={20} className="md:size-7" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-xl z-30"
        >
          <ChevronRight size={20} className="md:size-7" />
        </button>

        {/* Main slider container */}
        <div
          ref={sliderRef}
          className="flex items-center justify-center relative cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          {[-2, -1, 0, 1, 2].map((offset) => {
            const index =
              (centerIndex + offset + categories.length) % categories.length;
            const item = categories[index];
            const distance = Math.abs(offset);

            const isCenter = distance === 0;
            // Mobile aur desktop ke liye alag-alag scale values
            const scale = isCenter ? 
              (1.15) :  // Desktop pe yehi rahega
              distance === 1 ? 
                (0.92) :  // Desktop pe yehi rahega
                (0.8);    // Desktop pe yehi rahega
            
            // Mobile ke liye scale ko adjust karo
            const mobileScale = isCenter ? 
              (1.1) :  // Mobile me thoda chhota
              distance === 1 ? 
                (0.85) :  // Mobile me thoda chhota
                (0.7);    // Mobile me thoda chhota

            const opacity = isCenter ? 1 : distance === 1 ? 0.92 : 0.7;
            const blur = isCenter ? "" : "blur-[1px] md:blur-[2px]";

            const dragTransform = isDragging && isCenter ? `translateX(${dragOffset * 0.5}px)` : '';

            return (
              <div
                key={index}
                className={`transition-all duration-500 ease-out flex-shrink-0 ${blur} ${
                  isDragging ? 'transition-none' : ''
                }`}
                style={{
                  // Mobile aur desktop ke liye alag scale
                  transform: `scale(${mobileScale}) ${dragTransform}`,
                  '@media (min-width: 768px)': {
                    transform: `scale(${scale}) ${dragTransform}`,
                  },
                  opacity,
                  zIndex: isCenter ? 25 : 20 - distance * 5,
                  // Mobile aur desktop ke liye alag margins
                  marginLeft:
                    offset === -2 ? "0" : offset < 0 ? 
                    "-1rem md:-2.5rem" :  // Mobile me chhota margin
                    "-1rem md:-2.5rem",
                  marginRight:
                    offset === 2 ? "0" : offset > 0 ? 
                    "-1rem md:-2.5rem" :  // Mobile me chhota margin
                    "-1rem md:-2.5rem",
                }}
              >
                <div
                  className={`relative rounded-xl md:rounded-2xl overflow-hidden border-2 md:border-4 border-black ${
                    isCenter ? "ring-2 md:ring-4 ring-white shadow-lg md:shadow-xl" : "shadow-md md:shadow-lg"
                  } ${isDragging ? 'select-none' : ''}`}
                >
                  {/* MOBILE: h-48 w-32 (half of original), DESKTOP: h-96 md:h-[28rem] w-64 md:w-80 */}
                  <div className="w-32 h-48 md:w-64 md:h-96 lg:w-80 lg:h-[28rem] relative">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/png;basebase64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+4dJQAJBgPq8g0AAAAASUVORK5CYII="
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/600x900/10b981/ffffff?text=${encodeURIComponent(
                          item.name
                        )}`;
                      }}
                      draggable="false"
                      sizes="(max-width: 768px) 128px, (max-width: 1024px) 256px, 320px"
                    />
                    {!isCenter && (
                      <div className="absolute inset-0 bg-black/60 md:bg-black/70"></div>
                    )}
                  </div>

                  {/* Bottom Gray Bar - Mobile me chhota font size */}
                  <div className="absolute bottom-0 inset-x-0 bg-gray-100/95 backdrop-blur-sm py-2 md:py-3 px-2 md:px-4 text-center">
                    <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800 mb-1 md:mb-2">
                      {item.name}
                    </h3>
                    <Link 
                      href={item.link}
                      className={`w-fit mx-auto px-3 py-1 md:px-5 md:py-1.5 rounded-full font-semibold text-xs md:text-sm transition-all inline-block ${
                        isCenter
                          ? "border border-green-600 md:border-2 text-green-600 hover:bg-green-600 hover:text-white"
                          : "border border-gray-400 md:border-2 text-gray-700 hover:bg-gray-200"
                      }`}
                      onClick={(e) => {
                        if (isDragging) {
                          e.preventDefault();
                        }
                      }}
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}












// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useAppContext } from "../providers";

// const ProductCard = ({
//   product,
//   onClick,
//   onAddToCart,
//   trackingData
// }) => {
//   const [imageSrc, setImageSrc] = useState(
//     product.thumbnail
//       ? `https://healdiway.bkarogyam.com/media/${product.thumbnail}`
//       : '/placeholder-product.jpg'
//   );
//   const [retryCount, setRetryCount] = useState(0);

//   const handleImageError = () => {
//     if (retryCount < 2) {
//       setRetryCount(retryCount + 1);
//       setImageSrc(`https://healdiway.bkarogyam.com/media/${product.thumbnail}?retry=${retryCount}`);
//     } else {
//       setImageSrc('/placeholder-product.jpg');
//     }
//   };

//   // Calculate discount percentage
//   const originalPrice = product.retail_with_tax;
//   const discountedPrice = product.retail_with_tax_with_discount;
//   const discountPercentage = originalPrice > discountedPrice
//     ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
//     : 0;

//   const finalPrice = discountedPrice && discountedPrice < originalPrice
//     ? discountedPrice
//     : originalPrice;

//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       whileTap={{ scale: 0.98 }}
//       className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
//       onClick={onClick}
//     >
//       <div className="relative w-full aspect-square rounded-lg overflow-hidden">
//         <Image
//           src={imageSrc}
//           alt={product.name || 'Product image'}
//           fill
//           className="object-cover"
//           sizes="(max-width: 640px) 160px, 200px"
//           onError={handleImageError}
//           unoptimized={true}
//         />

//         {/* Discount Badge */}
//         {discountPercentage > 0 && (
//           <div className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
//             {discountPercentage}% OFF
//           </div>
//         )}

//         {/* In Stock Badge */}
//         <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
//           IN STOCK
//         </div>
//       </div>

//       <div className="mt-2">
//         <h3 className="text-sm font-semibold text-gray-800 truncate">
//           {product.name || 'Product Name'}
//         </h3>

//         {/* Description */}
//         <p
//           className="text-xs text-gray-500 mt-1 line-clamp-2"
//           dangerouslySetInnerHTML={{
//             __html: product.short_description || product.description || ''
//           }}
//         />

//         <div className="flex items-center mt-2">
//           <div className="flex items-baseline space-x-2">
//             {/* Show original price only if there's a discount */}
//             {discountPercentage > 0 && (
//               <span className="text-sm font-bold text-gray-400 line-through">
//                 ₹{Math.round(originalPrice) || '0.00'}
//               </span>
//             )}
//             <span className="text-sm font-bold text-green-600">
//               ₹{Math.round(finalPrice) || '0.00'}
//             </span>
//           </div>
//           <button
//             className="ml-auto text-xs bg-blue-500 text-white px-2 py-1 rounded-full hover:bg-blue-600 transition-colors"
//             onClick={(e) => {
//               e.stopPropagation();
//               onAddToCart(product, trackingData);
//             }}
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Newfile = () => {
//   const { cart, state } = useAppContext();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const sliderRef = useRef(null);
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchTrendingProducts = async () => {
//       try {
//         setLoading(true);

//         // First, fetch categories
//         const categoriesRes = await fetch(
//           "https://healdiway.bkarogyam.com/erp-api/inv_category"
//         );

//         if (!categoriesRes.ok) {
//           throw new Error(`Failed to fetch categories: ${categoriesRes.status}`);
//         }

//         const categoriesData = await categoriesRes.json();
//         const subcategories = categoriesData.filter(cat => cat.parent_id !== null);

//         if (subcategories.length === 0) {
//           setProducts([]);
//           return;
//         }

//         // Fetch products from first few subcategories for trending products
//         const allProducts = [];
//         const categoriesToFetch = subcategories.slice(0, 3); // Get from first 3 categories

//         for (const subcat of categoriesToFetch) {
//           try {
//             const productsRes = await fetch(
//               `https://healdiway.bkarogyam.com/erp-api/inventory_item/?practice=${state.practice?.id || 1}&category_id=${subcat.id}&page_size=5&maintain_inventory=true`
//             );

//             if (productsRes.ok) {
//               const productsData = await productsRes.json();
//               if (productsData.results && productsData.results.length > 0) {
//                 allProducts.push(...productsData.results.slice(0, 5));
//               }
//             }
//           } catch (error) {
//             console.error(`Error fetching products for category ${subcat.id}:`, error);
//           }
//         }

//         // Shuffle and take top products for trending
//         const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());
//         setProducts(shuffledProducts.slice(0, 10)); // Show max 10 trending products

//       } catch (error) {
//         console.error("Error fetching trending products:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const timer = setTimeout(fetchTrendingProducts, 300);
//     return () => clearTimeout(timer);
//   }, [state.practice]);

//   const goToProductDetails = (productId) => {
//     if (!isDragging && productId) {
//       router.push(`/e-store/productdetails/${productId}`);
//     }
//   };

//   const handleDragStart = (e) => {
//     setIsDragging(true);
//     startX.current = e.pageX || e.touches[0].pageX;
//     scrollLeft.current = sliderRef.current.scrollLeft;
//   };

//   const handleDragMove = (e) => {
//     if (!isDragging) return;
//     const x = e.pageX || e.touches[0].pageX;
//     const walk = (x - startX.current) * 2;
//     sliderRef.current.scrollLeft = scrollLeft.current - walk;
//   };

//   const handleDragEnd = () => {
//     setIsDragging(false);
//   };

//   const handleAddToCart = (product, trackingData) => {
//     if (!product?.id) return;

//     // Calculate final price (use discounted price if available and lower)
//     const originalPrice = product.retail_with_tax;
//     const discountedPrice = product.retail_with_tax_with_discount;
//     const finalPrice = discountedPrice && discountedPrice < originalPrice
//       ? discountedPrice
//       : originalPrice;

//     cart.addToCart({
//       id: product.id,
//       name: product.name,
//       price: finalPrice,
//       mrp: originalPrice,
//       image: product.thumbnail,
//       discount: Math.round(((originalPrice - finalPrice) / originalPrice) * 100),
//       tracking_id: trackingData?.tracking_id || null,
//       domaintracking: trackingData?.domain_id || null
//     });
//   };

//   if (loading) {
//     return (
//       <div className="w-full bg-white py-4 px-2 md:px-10">
//         <div className="flex justify-between items-center mb-4 px-2">
//           <div className="h-8 w-40 bg-gray-200 rounded animate-pulse"></div>
//           <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
//         </div>
//         <div className="md:hidden flex gap-3 px-3 py-2">
//           {[...Array(4)].map((_, i) => (
//             <div key={i} className="w-40 h-48 bg-gray-100 rounded-xl animate-pulse"></div>
//           ))}
//         </div>
//         <div className="hidden md:grid grid-cols-5 gap-6 px-3 py-2">
//           {[...Array(5)].map((_, i) => (
//             <div key={i} className="h-64 bg-gray-100 rounded-xl animate-pulse"></div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-full bg-white py-4 px-2 md:px-10">
//         <div className="flex justify-between items-center mb-4 px-2">
//           <h2 className="text-xl font-bold text-gray-800">
//             <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
//               🔥 Trending Products
//             </span>
//           </h2>
//         </div>
//         <div className="text-center py-8 text-red-500">
//           <p>Failed to load products: {error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="mt-2 text-sm bg-blue-500 text-white px-4 py-1 rounded-full"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!products.length) {
//     return (
//       <div className="w-full bg-white py-4 px-2 md:px-10">
//         <div className="flex justify-between items-center mb-4 px-2">
//           <h2 className="text-xl font-bold text-gray-800">
//             <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
//               🔥 Trending Products
//             </span>
//           </h2>
//         </div>
//         <div className="text-center py-8 text-gray-500">
//           <p>No trending products available</p>
//         </div>
//       </div>
//     );
//   }

//   const trackingData = {
//     tracking_id: null,
//     domain_id: state.domaindata?.id || null
//   };

//   return (
//     <div className="w-full bg-white py-4 px-2 md:px-10">
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//         className="flex justify-between items-center mb-4 px-2"
//       >
//         <h2 className="text-xl font-bold text-gray-800">
//           <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
//             🔥 Trending Products
//           </span>
//         </h2>
//         <button
//           onClick={() => router.push('/e-store/allproducts')}
//           className="text-xs bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-all"
//         >
//           View All
//         </button>
//       </motion.div>

//       {/* Mobile View - Horizontal Scroll */}
//       <div className="md:hidden relative">
//         <div
//           ref={sliderRef}
//           className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide px-3 py-2"
//           onMouseDown={handleDragStart}
//           onMouseMove={handleDragMove}
//           onMouseUp={handleDragEnd}
//           onMouseLeave={handleDragEnd}
//           onTouchStart={handleDragStart}
//           onTouchMove={handleDragMove}
//           onTouchEnd={handleDragEnd}
//         >
//           {products.map((product) => (
//             <div key={product.id} className="flex-shrink-0 w-40">
//               <ProductCard
//                 product={product}
//                 onClick={() => goToProductDetails(product.id)}
//                 onAddToCart={handleAddToCart}
//                 trackingData={trackingData}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center gap-1 mt-2">
//           {products.slice(0, Math.min(5, products.length)).map((_, index) => (
//             <div
//               key={index}
//               className={`w-2 h-2 rounded-full ${
//                 index === 0 ? 'bg-blue-500' : 'bg-gray-300'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Desktop View - Grid Layout */}
//       <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-3 py-2">
//         {products.slice(0, 10).map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             onClick={() => goToProductDetails(product.id)}
//             onAddToCart={handleAddToCart}
//             trackingData={trackingData}
//           />
//         ))}
//       </div>

//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Newfile;

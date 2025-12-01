
"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAppContext } from "../providers";

const ProductCard = ({ 
  product, 
  onClick, 
  onAddToCart,
  trackingData
}) => {
  const [imageSrc, setImageSrc] = useState(
    product.thumbnail 
      ? `https://healdiway.bkarogyam.com/media/${product.thumbnail}`
      : '/placeholder-product.jpg'
  );
  const [retryCount, setRetryCount] = useState(0);

  const handleImageError = () => {
    if (retryCount < 2) {
      setRetryCount(retryCount + 1);
      setImageSrc(`https://healdiway.bkarogyam.com/media/${product.thumbnail}?retry=${retryCount}`);
    } else {
      setImageSrc('/placeholder-product.jpg');
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
      onClick={onClick}
    >
      <div className="relative w-full aspect-square rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={product.name || 'Product image'}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 160px, 200px"
          onError={handleImageError}
          unoptimized={true}
        />
         {product.discount > 0 && (
    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
      {product.discount}% off
    </div>
  )}
      </div>
      <div className="mt-2">
  <h3 className="text-sm font-semibold text-gray-800 truncate">
    {product.name || 'Product Name'}
  </h3>
  <div className="flex items-center mt-2">
    <div className="flex items-baseline space-x-2">
      <span className="text-sm font-bold text-gray-400 line-through">
        ₹{product.retail_with_tax || '0.00'}
      </span>
      <span className="text-sm font-bold text-green-600">
        ₹{product.retail_with_tax_with_discount || '0.00'}
      </span>
    </div>
    <button
      className="ml-auto text-xs bg-blue-500 text-white px-2 py-1 rounded-full hover:bg-blue-600 transition-colors"
      onClick={(e) => {
        e.stopPropagation();
        onAddToCart(product, trackingData);
      }}
    >
      Add
    </button>
  </div>
</div>
    </motion.div>
  );
};

const TopSellingProducts = () => {
  const { cart, state } = useAppContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://healdiway.bkarogyam.com/erp-api/inventory_item/?is_selective=true"
        );
        
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data.results || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchProducts, 300); // Small delay to avoid flash
    return () => clearTimeout(timer);
  }, []);

  const goToProductDetails = (productId) => {
    if (!isDragging && productId) {
      router.push(`/e-store/productdetails/${productId}`);
    }
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    startX.current = e.pageX || e.touches[0].pageX;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX.current) * 2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

 const handleAddToCart = (product, trackingData) => {
  if (!product?.id) return;

  const finalPrice = product.retail_with_tax_with_discount || product.retail_with_tax;

  cart.addToCart({
    id: product.id,
    name: product.name,
    price: finalPrice,  // ✅ Always use discounted price if exists
    mrp: product.retail_with_tax, // original price as reference (optional)
    image: product.thumbnail,
    discount: product.discount,
    tracking_id: trackingData?.tracking_id || null,
    domaintracking: trackingData?.domain_id || null
  });
};

  if (loading) {
    return (
      <div className="w-full bg-white py-4 px-2 md:px-10">
        <div className="flex justify-between items-center mb-4 px-2">
          <div className="h-8 w-40 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
        <div className="md:hidden flex gap-3 px-3 py-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-40 h-48 bg-gray-100 rounded-xl animate-pulse"></div>
          ))}
        </div>
        <div className="hidden md:grid grid-cols-5 gap-6 px-3 py-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-100 rounded-xl animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-white py-4 px-2 md:px-10">
        <div className="flex justify-between items-center mb-4 px-2">
          <h2 className="text-xl font-bold text-gray-800">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              🔥 Trending Products
            </span>
          </h2>
        </div>
        <div className="text-center py-8 text-red-500">
          <p>Failed to load products: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 text-sm bg-blue-500 text-white px-4 py-1 rounded-full"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="w-full bg-white py-4 px-2 md:px-10">
        <div className="flex justify-between items-center mb-4 px-2">
          <h2 className="text-xl font-bold text-gray-800">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              🔥 Trending Products
            </span>
          </h2>
        </div>
        <div className="text-center py-8 text-gray-500">
          <p>No trending products available</p>
        </div>
      </div>
    );
  }

  const trackingData = {
    tracking_id: null,
    domain_id: state.domaindata?.id || null
  };

  return (
    <div className="w-full bg-white py-4 px-2 md:px-10">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-between items-center mb-4 px-2"
      >
        <h2 className="text-xl font-bold text-gray-800">
          <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            🔥 Trending Products
          </span>
        </h2>
        <button 
          onClick={() => router.push('/e-store/allproducts')}
          className="text-xs bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-all"
        >
          View All
        </button>
      </motion.div>

      {/* Mobile View - Horizontal Scroll */}
      <div className="md:hidden relative">
        <div
          ref={sliderRef}
          className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide px-3 py-2"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-40">
              <ProductCard 
                product={product}
                onClick={() => goToProductDetails(product.id)}
                onAddToCart={handleAddToCart}
                trackingData={trackingData}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-1 mt-2">
          {products.slice(0, Math.min(5, products.length)).map((_, index) => (
            <div 
              key={index} 
              className={`w-2 h-2 rounded-full ${
                index === 0 ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View - Grid Layout */}
      <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-3 py-2">
        {products.slice(0, 5).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => goToProductDetails(product.id)}
            onAddToCart={handleAddToCart}
            trackingData={trackingData}
          />
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default TopSellingProducts;













// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useAppContext } from "../providers";

// const TopSellingProducts = () => {
//   const { cart, state } = useAppContext(); // Added state from context
//   const [products, setProducts] = useState([]);
//   const [isDragging, setIsDragging] = useState(false);
//   const sliderRef = useRef(null);
//   const router = useRouter();
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(
//           "https://healdiway.bkarogyam.com/erp-api/inventory_item/?is_selective=true"
//         );
//         const data = await response.json();
//         setProducts(data.results || []);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const goToProductDetails = (productId) => {
//     if (!isDragging) {
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

//   if (!products.length) return null;

//   const handleAddToCart = (product, tracking_id, domaintracking) => {
//     cart.addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.retail_with_tax,
//       image: product.thumbnail,
//       tracking_id: tracking_id ?? null,
//       domaintracking: domaintracking ?? null
//     });
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
//           className="text-xs bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full shadow-sm"
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
//             <motion.div
//               key={product.id}
//               whileTap={{ scale: 0.95 }}
//               className="flex-shrink-0 w-40 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
//               onClick={() => goToProductDetails(product.id)}
//             >
//               <div className="relative w-full h-32 rounded-lg overflow-hidden">
//                 <Image
//                   src={product.thumbnail ? 
//                     `https://healdiway.bkarogyam.com/media/${encodeURIComponent(product.thumbnail)}` : 
//                     '/placeholder-product.jpg'}
//                   alt={product.name}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 640px) 100vw"
//                   onError={(e) => {
//                     e.target.src = '/placeholder-product.jpg';
//                     e.target.style.objectFit = 'contain';
//                     e.target.style.backgroundColor = '#f3f4f6';
//                   }}
//                 />
//                 <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
//                   Hot
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <h3 className="text-sm font-semibold text-gray-800 truncate">{product.name}</h3>
//                 <div className="flex justify-between items-center mt-2">
//                   <span className="text-sm font-bold text-green-600">₹{product.retail_with_tax}</span>
//                   <button 
//                     className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleAddToCart(product, null, state.domaindata?.id || null);
//                     }}
//                   >
//                     Add
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         <div className="flex justify-center gap-1 mt-2">
//           {products.slice(0, 5).map((_, index) => (
//             <div 
//               key={index} 
//               className="w-2 h-2 rounded-full bg-gray-300"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Desktop View - Grid Layout */}
//       <div className="hidden md:grid grid-cols-5 gap-6 px-3 py-2">
//         {products.slice(0, 5).map((product) => (
//           <motion.div
//             key={product.id}
//             whileHover={{ y: -5 }}
//             whileTap={{ scale: 0.98 }}
//             className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
//             onClick={() => goToProductDetails(product.id)}
//           >
//             <div className="relative w-full aspect-square rounded-lg overflow-hidden">
//               <Image
//                 src={product.thumbnail ? 
//                   `https://healdiway.bkarogyam.com/media/${product.thumbnail}` : 
//                   '/placeholder-product.jpg'}
//                 alt={product.name}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 1024px) 20vw"
//                 onError={(e) => {
//                   e.target.src = '/placeholder-product.jpg';
//                   e.target.style.objectFit = 'contain';
//                   e.target.style.backgroundColor = '#f3f4f6';
//                 }}
//               />
//               <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
//                 Hot
//               </div>
//             </div>
//             <div className="mt-2">
//               <h3 className="text-sm font-semibold text-gray-800 truncate">{product.name}</h3>
//               <div className="flex justify-between items-center mt-2">
//                 <span className="text-sm font-bold text-green-600">₹{product.retail_with_tax}</span>
//                 <button 
//                   className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full hover:bg-blue-600 transition-colors"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleAddToCart(product, null, state.domaindata?.id || null);
//                   }}
//                 >
//                   Add
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TopSellingProducts;
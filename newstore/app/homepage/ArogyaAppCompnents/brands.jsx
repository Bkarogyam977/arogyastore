// "use client";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { motion } from 'framer-motion';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay';


// const BrandsSection = () => {
//   const [brands, setBrands] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         const response = await fetch("https://healdiway.bkarogyam.com/erp-api/inv_category?is_parent_null=true");
//         if (!response.ok) throw new Error("Failed to fetch brands");
//         const data = await response.json();
//         setBrands(data);
//       } catch (error) {
//         console.error("Error fetching brands:", error);
//       }
//     };

//     fetchBrands();
//   }, []);

//   const visibleBrands = showAll ? brands : brands.slice(0, 9);

//   return (
//     <div className="w-full p-5 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg md:px-10 mt-5">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="flex justify-between items-center mb-8 px-2 md:px-4"
//       >
//         <div>
//           <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
//             Our Brands
//           </h2>
//         </div>
//         {brands.length > 9 && (
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setShowAll(!showAll)}
//             className="text-sm bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
//           >
//             {showAll ? 'Show Less' : 'View All'}
//           </motion.button>
//         )}
//       </motion.div>

//       {/* Mobile View - Enhanced 3x3 Grid */}
//       <div className="md:hidden grid grid-cols-3 gap-5 px-2">
//         {visibleBrands.map((brand, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3, delay: index * 0.05 }}
//             className="flex flex-col items-center"
//           >
//             <Link
//               href={`/e-store/categoryproduct/${brand.id}`}
//               className="w-full aspect-square flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border-2 border-emerald-100 hover:border-emerald-200"
//             >
//               <div className="relative w-3/4 h-3/4">
//                 <Image
//                   src={brand.image ?
//                     `https://healdiway.bkarogyam.com/media/${brand.image}` :
//                     '/placeholder-brand.png'}
//                   alt={brand.name}
//                   fill
//                   className="object-contain"
//                   onError={(e) => {
//                     e.target.src = '/placeholder-brand.png';
//                     e.target.style.objectFit = 'contain';
//                   }}
//                 />
//               </div>
//             </Link>
//             <p className="text-center text-xs md:text-sm mt-3 font-medium text-gray-700 truncate w-full">
//               {brand.name}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Desktop View - Enhanced Swiper */}
//       <div className="hidden md:block px-4">
//         <Swiper
//           modules={[Navigation]}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           }}

//           spaceBetween={30}
//           slidesPerView={'auto'}
//           centeredSlides={false}
//           loop={true}
//           className="relative group"
//         >
//           {brands.map((brand, index) => (
//             <SwiperSlide key={index} style={{ width: '180px' }}>
//               <motion.div
//                 whileHover={{ y: -5 }}
//                 className="flex flex-col items-center h-full"
//               >
//                 <Link
//                   href={`/e-store/categoryproduct/${brand.id}`}
//                   className="w-full aspect-square flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-emerald-50 hover:border-emerald-100"
//                 >
//                   <div className="relative w-3/4 h-3/4">
//                     <img
//                       src={brand.image 
//                         ? `https://healdiway.bkarogyam.com/media/${brand.image}` 
//                         : '/placeholder-brand.png'}
//                       alt={brand.name}
//                       className="object-contain w-full h-full"
//                       onError={(e) => {
//                         e.target.src = '/placeholder-brand.png';
//                         e.target.style.objectFit = 'contain';
//                       }}
//                     />
//                   </div>
//                 </Link>

//                 {/* <Link
//                   href={`/e-store/categoryproduct/${brand.id}`}
//                   className="w-full aspect-square flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-emerald-50 hover:border-emerald-100"
//                 >
//                   <div className="relative w-3/4 h-3/4">
//                     <Image
//                       src={brand.image ?
//                         `https://healdiway.bkarogyam.com/media/${brand.image}` :
//                         '/placeholder-brand.png'}
//                       alt={brand.name}
//                       fill
//                       className="object-contain"
//                       onError={(e) => {
//                         e.target.src = '/placeholder-brand.png';
//                         e.target.style.objectFit = 'contain';
//                       }}
//                     />
//                   </div>
//                 </Link> */}
//                 <p className="text-center text-sm mt-3 font-medium text-gray-700 truncate w-full">
//                   {brand.name}
//                 </p>
//               </motion.div>
//             </SwiperSlide>
//           ))}

//           <div className="swiper-button-prev hidden group-hover:block !text-emerald-500 !h-full !top-0 !mt-0 !w-[50px] !left-0 !bg-gradient-to-r from-white to-transparent"></div>
//           <div className="swiper-button-next hidden group-hover:block !text-emerald-500 !h-full !top-0 !mt-0 !w-[50px] !right-0 !bg-gradient-to-l from-white to-transparent"></div>
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default BrandsSection;








"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const BrandImage = ({ brand }) => {
  const [imageSrc, setImageSrc] = useState(
    brand.image ? `https://healdiway.bkarogyam.com/media/${brand.image}` : '/placeholder-brand.png'
  );
  const [retryCount, setRetryCount] = useState(0);

  const handleError = () => {
    if (retryCount < 2) {
      setRetryCount(retryCount + 1);
      // Add cache busting parameter for retry
      setImageSrc(`https://healdiway.bkarogyam.com/media/${brand.image}?retry=${retryCount}&t=${Date.now()}`);
    } else {
      setImageSrc('/placeholder-brand.png');
    }
  };

  return (
    <div className="relative w-3/4 h-3/4">
      <Image
        src={imageSrc}
        alt={brand.name || 'Brand logo'}
        fill
        className="object-contain"
        onError={handleError}
        unoptimized={true}
        sizes="(max-width: 768px) 100px, 180px"
        priority={retryCount === 0} // Only prioritize first load
      />
    </div>
  );
};


const BrandsSection = () => {
  const [brands, setBrands] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://healdiway.bkarogyam.com/erp-api/inv_category?is_parent_null=true");
        
        if (!response.ok) {
          throw new Error(`Failed to fetch brands: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        setBrands(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching brands:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Add a small delay to prevent flash of loading state if fetch is fast
    const timer = setTimeout(fetchBrands, 300);
    return () => clearTimeout(timer);
  }, []);

  const visibleBrands = showAll ? brands : brands.slice(0, 9);

  if (loading) {
    return (
      <div className="w-full p-5 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg md:px-10 mt-5">
        <div className="flex justify-between items-center mb-8 px-2 md:px-4">
          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Our Brands
          </h2>
          <div className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
        <div className="grid grid-cols-3 gap-5 px-2">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-square bg-gray-200 rounded-xl animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded mt-3 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-5 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg md:px-10 mt-5">
        <div className="flex justify-between items-center mb-8 px-2 md:px-4">
          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Our Brands
          </h2>
        </div>
        <div className="text-center py-10">
          <p className="text-red-500 mb-4">Error loading brands: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!brands || brands.length === 0) {
    return (
      <div className="w-full p-5 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg md:px-10 mt-5">
        <div className="flex justify-between items-center mb-8 px-2 md:px-4">
          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Our Brands
          </h2>
        </div>
        <div className="text-center py-10">
          <p className="text-gray-500">No brands available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-5 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg md:px-10 mt-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center mb-8 px-2 md:px-4"
      >
        <div>
          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Our Brands
          </h2>
          <p className="text-sm text-gray-500 mt-1">Trusted by millions worldwide</p>
        </div>
        {brands.length > 9 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="text-sm bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            {showAll ? 'Show Less' : 'View All'}
          </motion.button>
        )}
      </motion.div>

      {/* Mobile View - Enhanced 3x3 Grid */}
      <div className="md:hidden grid grid-cols-3 gap-5 px-2">
        {visibleBrands.map((brand, index) => (
          <motion.div
            key={brand.id || index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex flex-col items-center"
          >
            <Link
              href={`/e-store/categoryproduct/${brand.id}`}
              className="w-full aspect-square flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border-2 border-emerald-100 hover:border-emerald-200"
              prefetch={false}
            >
              <BrandImage brand={brand} />
            </Link>
            <p className="text-center text-xs md:text-sm mt-3 font-medium text-gray-700 truncate w-full px-1">
              {brand.name || 'Unnamed Brand'}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Desktop View - Enhanced Swiper */}
      <div className="hidden md:block px-4">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={30}
          slidesPerView={'auto'}
          centeredSlides={false}
          loop={brands.length > 5} // Only loop if enough brands
          className="relative group"
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={brand.id || index} style={{ width: '180px' }}>
              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center h-full"
              >
                <Link
                  href={`/e-store/categoryproduct/${brand.id}`}
                  className="w-full aspect-square flex items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-emerald-50 hover:border-emerald-100"
                  prefetch={false}
                >
                  <BrandImage brand={brand} />
                </Link>
                <p className="text-center text-sm mt-3 font-medium text-gray-700 truncate w-full px-1">
                  {brand.name || 'Unnamed Brand'}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* <div className="swiper-button-prev hidden group-hover:block !text-emerald-500 !h-full !top-0 !mt-0 !w-[50px] !left-0 !bg-gradient-to-r from-white/80 to-transparent hover:from-white"></div> */}
          {/* <div className="swiper-button-next hidden group-hover:block !text-emerald-500 !h-full !top-0 !mt-0 !w-[50px] !right-0 !bg-gradient-to-l from-white/80 to-transparent hover:from-white"></div> */}
        </Swiper>
      </div>  
    </div>
  );
};

export default BrandsSection;

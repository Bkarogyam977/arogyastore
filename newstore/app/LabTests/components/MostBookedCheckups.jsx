// // components/LabTests/FullBodyCheckupPackages.jsx

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { FaStar } from "react-icons/fa";


// const MostBookedCheckups = () => {
//   // Static data for full body checkup packages
//   const packages = [
//     {
//       id: 1,
//       name: 'Advanced Full Body Checkup',
//       image: '/images/checkups/full-body-advanced.jpg',
//       tests: 145,
//       reportTime: '24 Hours',
//       price: 2999,
//       discountPrice: 1999,
//       rating: 4.8,
//       link: '/book-checkup/advanced'
//     },
//     {
//       id: 2,
//       name: 'Basic Health Screening',
//       image: '/images/checkups/basic-screening.jpg',
//       tests: 85,
//       reportTime: '24 Hours',
//       price: 1999,
//       discountPrice: 1299,
//       rating: 4.5,
//       link: '/book-checkup/basic'
//     },
//     {
//       id: 3,
//       name: 'Executive Health Package',
//       image: '/images/checkups/executive-health.jpg',
//       tests: 120,
//       reportTime: 'Same Day',
//       price: 4999,
//       discountPrice: 3499,
//       rating: 4.9,
//       link: '/book-checkup/executive'
//     },
//     {
//       id: 4,
//       name: 'Diabetic Care Package',
//       image: '/images/checkups/diabetic-care.jpg',
//       tests: 65,
//       reportTime: '24 Hours',
//       price: 1799,
//       discountPrice: 1199,
//       rating: 4.6,
//       link: '/book-checkup/diabetic'
//     },
//     {
//       id: 5,
//       name: 'Cardiac Wellness Check',
//       image: '/images/checkups/cardiac-wellness.jpg',
//       tests: 95,
//       reportTime: '48 Hours',
//       price: 3599,
//       discountPrice: 2599,
//       rating: 4.7,
//       link: '/book-checkup/cardiac'
//     },
//     {
//       id: 6,
//       name: 'Senior Citizen Package',
//       image: '/images/checkups/senior-citizen.jpg',
//       tests: 110,
//       reportTime: '24 Hours',
//       price: 2499,
//       discountPrice: 1799,
//       rating: 4.8,
//       link: '/book-checkup/senior'
//     }
//   ];

//   return (
//     <div className="w-full p-4 bg-white rounded-lg">
//       <style jsx>{`
//         .scroll-container {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scroll-container::-webkit-scrollbar {
//           display: none;
//         }
//         .package-card {
//           scroll-snap-align: start;
//         }
//       `}</style>

//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold text-gray-800">Most Booked Health Checkups</h2>
//         <Link href="/#">
//           <span className="text-blue-600 text-sm font-semibold cursor-pointer hover:underline">
//             View All &gt;
//           </span>
//         </Link>
//       </div>

//       <div className="relative">
//         <div className="flex gap-3 overflow-x-auto pb-4 scroll-container">
//           {packages.map((pkg) => (
//             <div key={pkg.id} className="flex-shrink-0 w-48 package-card bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
//               <div className="p-2">
//                 <div className="relative h-32 rounded-md overflow-hidden">
//                   <Image
//                     src={pkg.image}
//                     alt={pkg.name}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                   />
//                 </div>
                
//                 <div className="mt-2 px-1">
//                   <h3 className="text-xs font-semibold text-gray-800 line-clamp-2">{pkg.name}</h3>
//                   <p className="text-[10px] text-gray-500 mt-1">Contains {pkg.tests} Tests</p>
//                   <p className="text-[10px] text-green-600 mt-1">Reports in {pkg.reportTime}</p>
                  
//                   <div className="flex items-center justify-between mt-1">
//                     <div>
//                       <span className="text-xs font-bold text-gray-900">₹{pkg.discountPrice}</span>
//                       <span className="text-[10px] text-gray-500 line-through ml-1">₹{pkg.price}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <FaStar className="text-yellow-400 text-[10px]" />
//                       <span className="text-[10px] text-gray-700 ml-1">{pkg.rating}</span>
//                     </div>
//                   </div>
                  
//                   <button className="w-full mt-2 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-semibold rounded transition-colors">
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MostBookedCheckups;


// components/LabTests/MostBookedCheckups.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { StarFilled } from '@ant-design/icons';


const MostBookedCheckups = () => {
  // Static data for most booked checkups
  const packages = [
    {
      id: 1,
      name: 'Advanced Full Body Checkup',
      image: '/images/imageBox/OfferCards/Lab-test-1.jpg',
      tests: 145,
      reportTime: '24 Hours',
      price: 2999,
      discountPrice: 1999,
      rating: 4.8,
      link: '/book-checkup/advanced'
    },
    {
      id: 2,
      name: 'Basic Health Screening',
      image: '/images/imageBox/OfferCards/Lab-test-1.jpg',
      tests: 85,
      reportTime: '24 Hours',
      price: 1999,
      discountPrice: 1299,
      rating: 4.5,
      link: '/book-checkup/basic'
    },
    {
      id: 3,
      name: 'Executive Health Package',
      image: '/images/imageBox/OfferCards/Lab-test-1.jpg',
      tests: 120,
      reportTime: 'Same Day',
      price: 4999,
      discountPrice: 3499,
      rating: 4.9,
      link: '/book-checkup/executive'
    },
    {
      id: 4,
      name: 'Diabetic Care Package',
      image: '/images/imageBox/OfferCards/Lab-test-1.jpg',
      tests: 65,
      reportTime: '24 Hours',
      price: 1799,
      discountPrice: 1199,
      rating: 4.6,
      link: '/book-checkup/diabetic'
    },
    {
      id: 5,
      name: 'Cardiac Wellness Check',
      image: '/images/imageBox/OfferCards/Lab-test-1.jpg',
      tests: 95,
      reportTime: '48 Hours',
      price: 3599,
      discountPrice: 2599,
      rating: 4.7,
      link: '/book-checkup/cardiac'
    },
    {
      id: 6,
      name: 'Senior Citizen Package',
      image: '/images/imageBox/OfferCards/Lab-test-1.jpg',
      tests: 110,
      reportTime: '24 Hours',
      price: 2499,
      discountPrice: 1799,
      rating: 4.8,
      link: '/book-checkup/senior'
    }
  ];
    

  return (
    <div className="w-full p-4 md:p-6 bg-white rounded-lg shadow-sm">
      <style jsx>{`
        .scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
          padding-bottom: 1rem;
        }
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        .package-card {
          scroll-snap-align: start;
        }
      `}</style>

      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Most Booked Health Checkups</h2>
        <Link href="/lab-tests">
          <span className="text-blue-600 text-sm md:text-base font-semibold cursor-pointer hover:underline">
            View All &gt;
          </span>
        </Link>
      </div>

      <div className="relative">
        <div className="flex gap-4 md:gap-6 overflow-x-auto scroll-container">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="flex-shrink-0 w-56 md:w-64 lg:w-72 xl:w-80 package-card bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="p-3 md:p-4">
                <div className="relative h-40 md:h-48 rounded-lg overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                
                <div className="mt-3 md:mt-4 px-1">
                  <h3 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2">{pkg.name}</h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">Contains {pkg.tests} Tests</p>
                  <p className="text-xs md:text-sm text-green-600 mt-1">Reports in {pkg.reportTime}</p>
                  
                  <div className="flex items-center justify-between mt-2 md:mt-3">
                    <div>
                      <span className="text-sm md:text-base font-bold text-gray-900">₹{pkg.discountPrice}</span>
                      <span className="text-xs md:text-sm text-gray-500 line-through ml-2">₹{pkg.price}</span>
                    </div>
                    <div className="flex items-center">
                      <StarFilled className="text-yellow-400 text-xs md:text-sm" />
                      <span className="text-xs md:text-sm text-gray-700 ml-1">{pkg.rating}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-3 md:mt-4 py-2 md:py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-semibold rounded-md transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostBookedCheckups;
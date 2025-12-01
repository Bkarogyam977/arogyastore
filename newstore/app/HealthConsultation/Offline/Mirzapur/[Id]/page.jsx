

'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const doctors = [
  {
    id: 4,
    name: "Dr. Ritesh Tiwari",
    specialization: "Ayurveda Specialist",
    experience: "12 years",
    rating: 4.8,
    image: "/images/imageBox/doctors/Dr-Ritesh.jpeg"
  },
  {
    id: 5,
    name: "Dr. NL Chaurasia",
    specialization: "General Physician",
    experience: "44 years",
    rating: 4.7,
    image: "/images/imageBox/doctors/Dr.nl.jpeg"
  }
];

const CenterDetails = () => {
  const router = useRouter();
  const [id, setId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.location.pathname) {
      const pathId = window.location.pathname.split('/').pop();
      setId(pathId);
      setIsLoading(false);
    }
  }, []);

  const center = {
    name: id === "1" ? "AyushKalp Ayurveda" : "Arogya Clinic",
    address: id === "1"
      ? "PandeyPur, Near Ajora Garden, Mirzapur"
      : "Opposite of Tahsil, Mirzapur",
    tagline: "Traditional Healing Center"
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-48"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-32">
          <div className="text-center mb-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-600 bg-emerald-50 rounded-full mb-3">
              {center.tagline}
            </span>
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
              {center.name}
            </h1>
            <p className="text-gray-500 max-w-md mx-auto">
              {center.address}
            </p>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-light text-gray-700">
            Our <span className="font-medium text-gray-900">Specialists</span>
          </h2>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-500">Mirzapur</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center bg-white/90 px-2 py-1 rounded-full">
                  <svg className="w-4 h-4 text-amber-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-medium text-gray-800">{doctor.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3">
                  <h3 className="text-lg font-normal text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-sm text-gray-500">{doctor.specialization}</p>
                  <p className="text-xs text-gray-400 mt-1">{doctor.experience} experience</p>
                </div>

                <div className="flex justify-end">
                  <Link href={`/HealthConsultation/Doctors/${doctor.id}`}>
                    <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center">
                      Book Consultation
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facilities Section */}
      <div className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-light text-gray-700 mb-8 text-center">
            Center <span className="font-medium text-gray-900">Facilities</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
                title: 'Ayurvedic Pharmacy' },
              { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Panchakarma' },
              { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                title: 'Herbal Dispensary' },
              { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
                title: 'Yoga Therapy' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center border border-gray-100">
                <svg className="w-8 h-8 text-emerald-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                </svg>
                <p className="text-sm text-gray-600">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterDetails;


// 'use client';
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';

// // Dummy data for doctors
// const doctors = [
//   {
//     id: 4,
//     name: "Dr. Ritesh Tiwari",
//     specialization: "Ayurveda Specialist",
//     experience: "12 years",
//     rating: 4.8,
//     image: "/images/imageBox/doctors/doctor1.png"
//   },
//   {
//     id: 5,
//     name: "Dr. NL Chaurasia",
//     specialization: "General Physician",
//     experience: "44 years",
//     rating: 4.7,
//     image: "/images/imageBox/doctors/doctor2.png"
//   }
// ];

// const CenterDetails = () => {
//   const router = useRouter();
//   const [id, setId] = useState(null);

//   // Wait for router to be ready
//   useEffect(() => {
//     if (window.location.pathname) {
//       const pathId = window.location.pathname.split('/').pop();
//       setId(pathId);
//     }
//   }, []);

//   // Simulating center data fetch
//   const center = {
//     name: id === "1" ? "AyushKalp Ayurveda" : "Arogya Clinic",
//     address: id === "1"
//       ? "PandeyPur, Near Ajora Garden, Mirzapur, 221009"
//       : "Opposite of Tahsil Mirzapur, 221010",
//   };

//   if (!id) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="p-4 pt-8 md:pt-12 md:p-8 bg-white min-h-screen">
//       {/* Center Details Section */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold text-green-600 mb-2">{center.name}</h2>
//         <p className="text-gray-600">{center.address}</p>
//       </div>

//       {/* Doctor Listing Section */}
//       <h3 className="text-xl font-bold text-gray-800 mb-6">Available Doctors</h3>
//       <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
//         {doctors.map((doctor) => (
//           <div key={doctor.id} className="bg-yellow-50 flex border-2 border-dashed border-green-500 p-4 rounded-lg shadow-md items-center">
//             {/* Left Side - Doctor Image */}
//             <div className="w-24 h-24 md:w-28 md:h-28">
//               <Image
//                 src={doctor.image}
//                 alt={doctor.name}
//                 width={500}
//                 height={500}
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>

//             {/* Right Side - Doctor Details */}
//             <div className="flex-1 ml-4 md:ml-6">
//               <h4 className="text-lg md:text-xl font-bold text-green-600">{doctor.name}</h4>
//               <p className="text-gray-600 text-sm md:text-base">{doctor.specialization}</p>
//               <p className="text-yellow-500 font-semibold">⭐ {doctor.rating} / 5</p>

//               {/* Action Buttons */}
//               <div className="mt-4 flex space-x-4">
//                 <Link href={`/HealthConsultation/Doctors/${doctor.id}`}>
//                   <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 text-sm md:text-base">
//                     Book Now
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CenterDetails;
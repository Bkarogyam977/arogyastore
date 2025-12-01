// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';


// const OfflineConsultation = () => {
//   return (
//     <div className="p-8 bg-white min-h-screen">

//       {/* Choose What Suits You Best Section */}
//       <h2 className="text-2xl font-bold text-green-600 mb-6">Choose the Location Suitable For you</h2>

//       <div className="grid grid-cols-2 gap-4">

//         <Link href="/HealthConsultation/Offline/Mirzapur">
//           <div className="bg-yellow-100 border-2 border-dashed border-green-500 p-4 rounded-lg flex flex-col items-center cursor-pointer">
//             <Image
//               src="/images/imageBox/hopes/Mirzapur.png"
//               alt="Online Consultation"
//               width={144}
//               height={96}
//               className="w-36 h-24 mb-2"
//             />
//             <h3 className="text-lg font-bold">Mirzapur</h3>
//           </div>
//         </Link>

//         <Link href="/HealthConsultation/Offline/Varanasi">
//           <div className="bg-yellow-100 border-2 border-dashed border-green-500 p-4 rounded-lg flex flex-col items-center cursor-pointer">
//             <Image
//               src="/images/imageBox/hopes/Varanasi.png"
//               alt="Offline Consultation"
//               width={144}
//               height={96}
//               className="mb-2"
//             />
//             <h3 className="text-lg font-bold">Varanasi</h3>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };


// export default OfflineConsultation;


'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const OfflineConsultation = () => {
  const locations = [
    {
      name: "Mirzapur",
      image: "/images/imageBox/hopes/Mirzapur1.jpg",
      href: "/HealthConsultation/Offline/Mirzapur"
    },
    {
      name: "Varanasi",
      image: "/images/imageBox/hopes/Varanasi.jpg",
      href: "/HealthConsultation/Offline/Varanasi"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-28">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Find Our <span className="text-green-600">Clinics</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a location convenient for your in-person consultation
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Link key={index} href={location.href}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{location.name}</h3>
                  <div className="flex items-center text-green-600">
                    <span>View details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          {/* Additional location placeholder */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">More Locations Coming Soon</h3>
              <p className="text-gray-500">We are expanding to serve you better</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                title: "Modern Facilities",
                description: "State-of-the-art equipment and comfortable waiting areas"
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Expert Staff",
                description: "Board-certified specialists and caring support staff"
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Minimal Wait Times",
                description: "Efficient scheduling to respect your time"
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflineConsultation;
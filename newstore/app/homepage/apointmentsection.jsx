// 'use client';
// import React from 'react';
// import ApointmentBooking from './apointmentbooking';
// import Image from 'next/image';

// function ApointmentSection() {

//   return (
//     <div className="px-1 md:px-20 md:py-10 py-5" style={{ backgroundColor: '#f4f1ea' }}>
//       <div className="flex flex-col md:flex-row justify-between p-5 text-black gap-4 md:gap-10">
//         {/* Left Section: Description and Stats */}

//         <div className="flex-1 mb-10 md:mb-0">
//           <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mt-20">
//             BK Arogyam <span className="text-orange-600 text-4xl">Consultation</span>
//           </h1>
//           <p className="mb-4 text-sm md:text-base">
//             BK Arogyam, a beacon in healthcare, blends Ayurvedic wisdom with modern advances. With 8,000+ daily patients, our practitioners offer personalized treatments. In today&apos;s fast-paced life, we focus on promoting health and conduct continuous research. Boasting 100+ Ayurvedic doctors and 45+ years of experience, we treat 500,000+ patients, extending to Arogyadham for admissions.
//           </p>

//           <div className="flex flex-wrap justify-between mt-10 md:gap-4">
//             <div className="bg-white p-2 rounded shadow flex flex-col items-center text-center w-1/2 lg:w-1/5 py-5 mb-4 sm:mb-0">
//               <Image
//                 src="/images/hops/103.webp"
//                 alt="Doctors"
//                 width={80}
//                 height={80}
//                 className="text-3xl mb-2"
//               />
//               <h3 className="font-semibold mt-5">100+ Ayurvedic doctors</h3>
//             </div>

//             <div className="bg-white p-2 rounded shadow flex flex-col items-center text-center w-1/2 lg:w-1/5 py-5 mb-4 sm:mb-0">
//               <Image
//                 src="/images/hops/25+yrsexprince-icon.webp"
//                 alt="Experience"
//                 width={80}
//                 height={80}
//                 className="text-3xl mb-2"
//               />
//               <h3 className="font-semibold mt-5">45+ Years of Experience</h3>
//             </div>

//             <div className="bg-white p-2 rounded shadow flex flex-col items-center text-center w-1/2 lg:w-1/5 py-5 mb-4 sm:mb-0">
//               <Image
//                 src="/images/hops/103.webp"
//                 alt="Doctors"
//                 width={80}
//                 height={80}
//                 className="text-3xl mb-2"
//               />
//               <h3 className="font-semibold mt-5">500,000+ treated patients</h3>
//             </div>

//             <div className="bg-white p-2 rounded shadow flex flex-col items-center text-center w-1/2 lg:w-1/5 py-5 mb-4 sm:mb-0">
//               <Image
//                 src="/images/hops/25+yrsexprince-icon.webp"
//                 alt="Experience"
//                 width={80}
//                 height={80}
//                 className="text-3xl mb-2"
//               />
//               <h3 className="font-semibold mt-5">Arogyadham for Admit</h3>
//             </div>
//           </div>
//         </div>

//         {/* Right Section: Appointment Form */}
//         <div className="flex-1 border border-gray-300 p-5 rounded shadow max-w-xs w-full mx-auto">
//           <h2 className="text-2xl font-semibold mb-4">Book An Appointment</h2>
//           <ApointmentBooking />
//         </div>

//       </div>
//     </div>
//   );
// }

// export default ApointmentSection;



'use client';
import React from 'react';
import ApointmentBooking from './apointmentbooking';
import Image from 'next/image';
import { motion } from 'framer-motion';

function ApointmentSection() {
  const stats = [
    {
      icon: '/images/icons/doctor-icon.svg',
      value: '100+',
      label: 'Ayurvedic Doctors',
      delay: 0.1
    },
    {
      icon: '/images/icons/experience-icon.svg',
      value: '45+',
      label: 'Years Experience',
      delay: 0.2
    },
    {
      icon: '/images/icons/patient-icon.svg',
      value: '500K+',
      label: 'Treated Patients',
      delay: 0.3
    },
    {
      icon: '/images/icons/hospital-icon.svg',
      value: 'Arogyadham',
      label: 'For Admissions',
      delay: 0.4
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50 py-16 px-4 md:px-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                BK Arogyam <span className="text-teal-600">Consultation</span>
              </h2>
              <div className="w-20 h-1.5 bg-teal-500 my-4"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                BK Arogyam blends ancient Ayurvedic wisdom with modern medical advances to provide holistic healthcare. 
                With over 8,000 daily patients, our expert practitioners deliver personalized treatments tailored to 
                your unique needs in today&apos;s fast-paced world.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    {/* <div className="p-3 bg-teal-50 rounded-lg">
                      <Image 
                        src={stat.icon} 
                        alt={stat.label}
                        width={40}
                        height={40}
                      />
                    </div> */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                      <p className="text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl opacity-20 blur-lg"></div>
            <div className="relative bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Book Your Appointment</h3>
                <p className="text-gray-500 mt-2">Get personalized Ayurvedic consultation</p>
              </div>
              <ApointmentBooking />
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>We&apos;ll confirm your appointment within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ApointmentSection;
// 'use client';
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// import { FaLeaf, FaSpa, FaHeartbeat, FaHandsHelping } from 'react-icons/fa';
// import Head from 'next/head';

// function WhyChose() {
//   const features = [
//     {
//       id: 1,
//       icon: <FaLeaf className="text-green-600 text-4xl md:text-5xl mx-auto" />,
//       title: 'Expert Ayurvedic Consultation',
//       description: 'Personalized guidance from experienced Ayurvedic practitioners'
//     },
//     {
//       id: 2,
//       icon: <FaSpa className="text-green-600 text-4xl md:text-5xl mx-auto" />,
//       title: 'Fast & Reliable Delivery',
//       description: 'Get authentic Ayurvedic medicines delivered to your doorstep'
//     },
//     {
//       id: 3,
//       icon: <FaHeartbeat className="text-green-600 text-4xl md:text-5xl mx-auto" />,
//       title: 'AI-Powered Symptom Checker',
//       description: 'Modern technology meets ancient wisdom for accurate diagnosis'
//     },
//     {
//       id: 4,
//       icon: <FaHandsHelping className="text-green-600 text-4xl md:text-5xl mx-auto" />,
//       title: 'Customized Therapy',
//       description: 'Tailored detox programs for your specific needs'
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Pacifico&display=swap"
//           rel="stylesheet"
//         />
//       </Head>

//       <div className="md:p-5 border-green-600 border-2 md:border-0 md:border-transparent p-2 m-3 rounded-xl px-4 pt-5 md:px-[5em] bg-gray-100">
//         <h2 className="text-2xl md:text-4xl font-bold md:p-5 md:text-center md:mt-10 text-black font-sans">
//           Why <span className='text-green-700'>Arogya Bharat</span>
//         </h2>
//         <p className="text-black text-center p-2 md:px-20 text-sm sm:text-base font-serif hidden md:block">
//           Arogya Bharat is dedicated to bringing the essence of Ayurveda and holistic healing to every individual.
//           We offer personalized health solutions rooted in ancient Ayurvedic wisdom, integrating time-tested therapies like
//           Panchakarma, Abhyanga, Shirodhara, Nasya, and Herbal remedies to rejuvenate the body and mind.
//           <br />
//           <span className="font-dancing text-lg text-green-800 mt-2 block">
//           &quot;Experience the power of Ayurveda with Arogya Bharat – A journey towards complete wellness and harmony.&quot;
//           </span>
//         </p>

//         {/* Mobile Grid View (hidden on larger screens) */}
//         <div className="md:hidden grid grid-cols-2 gap-4 mt-6">
//           {features.map((feature) => (
//             <div key={feature.id} className="p-3 text-center border border-gray-200 rounded-lg shadow-sm bg-white h-full flex flex-col items-center">
//               <div className="mb-2">{feature.icon}</div>
//               <h3 className="text-sm font-bold text-green-700">
//                 {feature.title}
//               </h3>
//               <p className="text-xs text-gray-600 mt-1 hidden md:block">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Desktop Swiper (hidden on mobile) */}
//         <div className="hidden md:block">
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={10}
//             pagination={false}
//             modules={[Pagination]}
//             breakpoints={{
//               640: { slidesPerView: 1.5, spaceBetween: 20 },
//               768: { slidesPerView: 2, spaceBetween: 20 },
//               1024: { slidesPerView: 3, spaceBetween: 30 },
//               1280: { slidesPerView: 4, spaceBetween: 30 }
//             }}
//             className="mySwiper mt-5"
//           >
//             {features.map((feature) => (
//               <SwiperSlide key={feature.id}>
//                 <div className="p-4 h-full text-center border border-gray-200 rounded-lg shadow-sm bg-white flex flex-col items-center">
//                   <div className="mb-3">{feature.icon}</div>
//                   <h3 className="text-lg font-semibold text-orange-800">
//                     {feature.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-2">
//                     {feature.description}
//                   </p>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// }

// export default WhyChose;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaLeaf, FaSpa, FaHeartbeat, FaHandsHelping } from "react-icons/fa";
import Head from "next/head";
import {
  FaCalendarAlt,
  FaUsers,
  FaPills,
  FaMobileAlt,
  FaIndustry,
  FaCertificate,
} from "react-icons/fa";

function WhyChose() {
  // const features = [
  //   {
  //     id: 1,
  //     icon: <FaLeaf className="text-emerald-500 text-3xl" />,
  //     title: 'Expert Ayurvedic Consultation',
  //     description: 'Personalized guidance from experienced practitioners'
  //   },
  //   {
  //     id: 2,
  //     icon: <FaSpa className="text-emerald-500 text-3xl" />,
  //     title: 'Fast Delivery',
  //     description: 'Authentic medicines to your doorstep'
  //   },
  //   {
  //     id: 3,
  //     icon: <FaHeartbeat className="text-emerald-500 text-3xl" />,
  //     title: 'AI Symptom Checker',
  //     description: 'Technology meets ancient wisdom'
  //   },
  //   {
  //     id: 4,
  //     icon: <FaHandsHelping className="text-emerald-500 text-3xl" />,
  //     title: 'Custom Therapy',
  //     description: 'Tailored detox programs'
  //   }
  // ];
  const features = [
    {
      id: 1,
      icon: <FaCalendarAlt className="text-emerald-500 text-3xl" />, // Using calendar icon for legacy
      title: "45 सालों का विश्वास",
      description: "45 Years of Ayurvedic Trust",
      englishTitle: "45 Years of Trust", // Optional for multilingual support
    },
    {
      id: 2,
      icon: <FaUsers className="text-emerald-500 text-3xl" />, // Users icon for patients
      title: "5,00,000+ संतुष्ठ मरीज",
      description: "500,000+ Satisfied Patients",
      englishTitle: "Trusted by Patients",
    },
    {
      id: 3,
      icon: <FaPills className="text-emerald-500 text-3xl" />, // Pills icon for medicines
      title: "400+ दवाइयाँ",
      description: "400+ Ayurvedic Formulations",
      englishTitle: "Authentic Medicines",
    },
    {
      id: 4,
      icon: <FaMobileAlt className="text-emerald-500 text-3xl" />, // Mobile icon for app
      title: "हेल्थ ट्रेनिंग ऐप",
      description: "Health Training Mobile App",
      englishTitle: "Health Training App",
    },
    {
      id: 5,
      icon: <FaIndustry className="text-emerald-500 text-3xl" />, // Factory icon for manufacturing
      title: "स्वदेशी तकनीक",
      description: "Made with Indigenous Technology",
      englishTitle: "Swadeshi Technology",
    },
    {
      id: 6,
      icon: <FaCertificate className="text-emerald-500 text-3xl" />, // Certificate icon
      title: "आयुष मंत्रालय मान्यता",
      description: "Approved by AYUSH Ministry",
      englishTitle: "AYUSH Certified",
    },
  ];

  const desktopFeatures = [
    {
      id: 1,
      icon: (
        <FaLeaf className="text-emerald-500 text-4xl md:text-5xl mx-auto" />
      ),
      title: "Expert Ayurvedic Consultation",
      description:
        "Personalized guidance from experienced Ayurvedic practitioners",
    },
    {
      id: 2,
      icon: <FaSpa className="text-emerald-500 text-4xl md:text-5xl mx-auto" />,
      title: "Fast & Reliable Delivery",
      description:
        "Get authentic Ayurvedic medicines delivered to your doorstep",
    },
    {
      id: 3,
      icon: (
        <FaHeartbeat className="text-emerald-500 text-4xl md:text-5xl mx-auto" />
      ),
      title: "AI-Powered Symptom Checker",
      description:
        "Modern technology meets ancient wisdom for accurate diagnosis",
    },
    {
      id: 4,
      icon: (
        <FaHandsHelping className="text-emerald-500 text-4xl md:text-5xl mx-auto" />
      ),
      title: "Customized Therapy",
      description: "Tailored detox programs for your specific needs",
    },
  ];

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Pacifico&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-playfair">
            Why <span className="text-emerald-600">Arogya Bharat</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mt-3 mb-4 md:mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed hidden md:block">
            Arogya Bharat is dedicated to bringing the essence of Ayurveda and
            holistic healing to every individual. We offer personalized health
            solutions rooted in ancient Ayurvedic wisdom.
          </p>
          <p className="font-dancing text-lg text-emerald-700 mt-2 hidden md:block">
            &quot;Experience the power of Ayurveda with Arogya Bharat – A
            journey towards complete wellness and harmony.&quot;
          </p>
        </div>

        {/* Mobile Grid View - Simplified Square Cards */}
        <div className="lg:hidden grid grid-cols-2 gap-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-3 text-center rounded-lg bg-white border border-gray-200 shadow-xs hover:shadow-sm transition-shadow h-full flex flex-col items-center justify-center aspect-square"
            >
              <div className="mb-2 p-2">{feature.icon}</div>
              <h3 className="text-sm font-semibold text-gray-800 px-1">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 px-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Swiper - Premium Version */}
        <div className="hidden lg:block">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="why-choose-swiper"
          >
            {desktopFeatures.map((feature) => (
              <SwiperSlide key={feature.id}>
                <div className="p-6 h-full text-center rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center min-h-[280px]">
                  {/* Icon */}
                  <div className="mb-5 p-4 bg-emerald-50 rounded-full flex-shrink-0">
                    {feature.icon}
                  </div>

                  {/* Title (fixed max lines) */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                    {feature.title}
                  </h3>

                  {/* Description (scrollable or clamped) */}
                  <div className="flex-grow overflow-y-auto w-full">
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .why-choose-swiper {
          padding: 20px 0 40px;
        }
        .why-choose-swiper .swiper-pagination-bullet {
          background: #d1fae5;
          opacity: 1;
        }
        .why-choose-swiper .swiper-pagination-bullet-active {
          background: #10b981;
        }
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
        .font-dancing {
          font-family: "Dancing Script", cursive;
        }
      `}</style>
    </>
  );
}

export default WhyChose;


// 'use client'
// import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';
// import Link from 'next/link';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// const steps = [
//   {
//     title: "Download & Register",
//     description: "Get the app and create your account in minutes.",
//     icon: "📱",
//     step: "1",
//     slug: "download-and-register"
//   },
//   {
//     title: "Choose Service",
//     description: "Select from our Ayurvedic healthcare options.",
//     icon: "🛒",
//     step: "2",
//     slug: "choose-service"
//   },
//   {
//     title: "Doctor Consultation",
//     description: "Connect with certified Ayurvedic doctors.",
//     icon: "👩‍⚕️",
//     step: "3",
//     slug: "consult-ayurvedic-doctors"
//   },
//   {
//     title: "Medicine Delivery",
//     description: "Get prescribed remedies delivered to you.",
//     icon: "📦",
//     step: "4",
//     slug: "order-medicine"
//   },
//   {
//     title: "Ayurvedic Diet",
//     description: "Receive personalized nutrition plans.",
//     icon: "🥗",
//     step: "5",
//     slug: "follow-ayurvedic-diet"
//   },
//   {
//     title: "Progress Tracking",
//     description: "Monitor your health journey.",
//     icon: "📈",
//     step: "6",
//     slug: "track-progress"
//   },
//   {
//     title: "Join Community",
//     description: "Connect with wellness enthusiasts.",
//     icon: "👥",
//     step: "7",
//     slug: "join-arogya-community"
//   },
// ];

// export const ProcessSection = () => {
//   return (
//     <div className="w-full bg-white py-8 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-medium text-center text-gray-800 mb-8">
//           Simple Steps to Wellness
//         </h2>

//         {/* Mobile Swiper */}
//         <div className="md:hidden">
//           <Swiper
//             modules={[Pagination]}
//             spaceBetween={16}
//             slidesPerView={1.2}
//             pagination={{
//               clickable: true,
//             }}
//             className="!pb-8"
//           >
//             {steps.map((step, index) => (
//               <SwiperSlide key={index}>
//                 <Link href={`/homepage/flashCards/${step.slug}`} className="block h-full">
//                   <div className="bg-white border border-gray-200 rounded-lg p-5 h-full shadow-sm hover:shadow-md transition-shadow">
//                     <div className="text-3xl mb-3">{step.icon}</div>
//                     <div className="flex items-start">
//                       <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-1 rounded mr-2">
//                         {step.step}
//                       </span>
//                       <h3 className="text-lg font-medium text-gray-800">{step.title}</h3>
//                     </div>
//                     <p className="text-sm text-gray-600 mt-2">{step.description}</p>
//                   </div>
//                 </Link>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Desktop Grid */}
//         <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
//           {steps.map((step, index) => (
//             <Link key={index} href={`/homepage/flashCards/${step.slug}`} className="block h-full">
//               <div className="bg-white border border-gray-200 rounded-lg p-5 h-full hover:border-green-300 transition-colors group">
//                 <div className="flex items-start mb-3">
//                   <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded mr-2">
//                     {step.step}
//                   </span>
//                   <h3 className="text-lg font-medium text-gray-800 group-hover:text-green-700 transition-colors">
//                     {step.title}
//                   </h3>
//                 </div>
//                 <p className="text-sm text-gray-600">{step.description}</p>
//                 <div className="text-3xl mt-4 text-green-600 opacity-80">
//                   {step.icon}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProcessSection;




'use client'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const steps = [
  {
    title: "Download and Register",
    description: "Download the Arogya Talk App from the Play Store and register using your name, phone number, and email for seamless access.",
    icon: "⬇️",
    step: "01",
    slug: "download-and-register"
  },
  {
    title: "Choose Your Service",
    description: "Browse a variety of Ayurvedic healthcare services, including expert doctor consultations, personalized therapy bookings, and holistic wellness solutions tailored to you.",
    icon: "🛍️",
    step: "02",
    slug: "choose-service"
  },
  {
    title: "Consult an Ayurvedic Doctor",
    description: "Easily select a certified Ayurvedic doctor and schedule an appointment via secure video, audio, or chat for personalized medical guidance.",
    icon: "🩺",
    step: "03",
    slug: "consult-ayurvedic-doctors"
  },
  {
    title: "Order Medicines",
    description: "Conveniently order prescribed Ayurvedic medicines through the app and get them delivered quickly to your doorstep for hassle-free treatment.",
    icon: "💊",
    step: "04",
    slug: "order-medicine"
  },
  {
    title: "Follow Ayurvedic Diet",
    description: "Receive expert-crafted personalized diet plans based on Ayurvedic principles to improve digestion, boost immunity, and promote overall well-being naturally.",
    icon: "🥗",
    step: "05",
    slug: "follow-ayurvedic-diet"
  },
  {
    title: "Track Your Progress",
    description: "Monitor your health improvements with regular expert check-ins, track vital signs, and stay updated on your wellness journey with helpful insights.",
    icon: "📊",
    step: "06",
    slug: "track-progress"
  },
  {
    title: "Join Arogya Community",
    description: "Engage with like-minded individuals, share wellness tips, access Ayurvedic knowledge, and stay motivated through our active and supportive health community.",
    icon: "🤝",
    step: "07",
    slug: "join-arogya-community"
  },
];

export const ProcessSection = () => {
  return (
    <div className="w-full bg-green-100 md:py-12 py-5 px-4 md:px-10">
      <h2 className="text-xl md:text-3xl font-bold text-center md:text-left text-green-700 mb-5 bg-green-100 p-1 rounded-lg border-2 border-green-700 md:border-0 md:border-transparent">
        Our Seamless Process!
      </h2>

      {/* Mobile Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1.5}
          centeredSlides={false}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="!overflow-visible"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <Link href={`/homepage/flashCards/${step.slug}`} className="block h-full">
                <div className="bg-green-600 text-white rounded-lg shadow-lg p-4 flex flex-col justify-between h-full min-h-[280px] w-full hover:bg-green-700 transition-colors duration-300">
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm mt-2">{step.description}</p>
                  </div>
                  <div className="flex justify-between items-end mt-3 relative">
                    <span className="text-4xl">{step.icon}</span>
                    <div className="bg-white text-green-600 w-8 h-8 text-lg rounded-full flex items-center justify-center font-bold ml-auto">
                      {step.step}
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Swiper */}
      <div className="hidden md:block">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          navigation
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            }
          }}
          className="pb-12 px-2"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <Link href={`/homepage/flashCards/${step.slug}`} className="block h-full">
                <ProcessCard step={step} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const ProcessCard = ({ step }) => {
  return (
    <div className="bg-green-600 text-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-72 w-full hover:bg-green-700 transition-colors duration-300 cursor-pointer">
      <div>
        <h3 className="text-xl font-semibold">{step.title}</h3>
        <p className="text-md mt-2">{step.description}</p>
      </div>
      <div className="flex justify-between items-end mt-4">
        <span className="text-5xl">{step.icon}</span>
        <div className="bg-white text-green-600 w-10 h-10 text-xl rounded-full flex items-center justify-center font-bold">
          {step.step}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
// "use client";
// import React, { useState, useEffect } from "react";

// const YouTubeReelPopup = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMinimized, setIsMinimized] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   const minimizePopup = () => {
//     setIsMinimized(true);
//   };

//   const restorePopup = () => {
//     setIsMinimized(false);
//   };

//   const closePopup = () => {
//     setIsVisible(false);
//     setIsMinimized(false); // Reset minimization state
//   };

//   // If not visible at all, return null
//   if (!isVisible) return null;

//   // If minimized, show only the small circle
//   if (isMinimized) {
//     return (
//       <div 
//         className="fixed bottom-4 right-4 z-50"
//         onClick={restorePopup}
//       >
//         <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 border-2 border-white">
//           <div className="relative">
//             <div className="w-8 h-6 bg-white rounded-sm"></div>
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
//           </div>
//         </div>
//         <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">
//           ▶
//         </span>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* =======================
//           DESKTOP VERSION
//       ======================== */}
//       <div className="hidden md:block fixed bottom-4 right-4 z-50 w-64 bg-white rounded-xl shadow-2xl border border-gray-300 overflow-hidden">
//         {/* CLOSE BUTTON - Now properly centered in circle */}
//         <button
//           onClick={minimizePopup}
//           className="absolute top-2 right-2 bg-black/70 text-white w-7 h-7 flex items-center justify-center rounded-full text-base leading-none hover:bg-black/90 z-50 transition-colors"
//           aria-label="Minimize video"
//         >
//           <span className="relative -top-[1px]">×</span>
//         </button>

//         {/* VIDEO SECTION */}
//         <div className="relative w-full h-[420px] bg-black overflow-hidden">
//           <iframe
//             src="https://www.youtube.com/embed/mQVTI5oXx08?autoplay=1&mute=1&loop=1&playlist=mQVTI5oXx08&controls=0&modestbranding=1&rel=0"
//             className="absolute top-0 left-0 w-full h-full scale-[1.25]"
//             style={{ transformOrigin: "center" }}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             title="YouTube Reel"
//           ></iframe>
//         </div>

//         {/* OPTIONAL: Minimize button at bottom */}
//         <div className="p-2 bg-gray-100 border-t border-gray-300">
//           <button
//             onClick={minimizePopup}
//             className="w-full text-xs bg-gray-800 text-white py-1.5 rounded-md hover:bg-gray-900 transition flex items-center justify-center gap-1"
//           >
//             <span>Minimize</span>
//             <span className="text-lg">−</span>
//           </button>
//         </div>
//       </div>

//       {/* =======================
//           MOBILE VERSION (Optimized)
//       ======================== */}
//       <div className="block md:hidden fixed bottom-4 right-4 z-50 w-52 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
//         {/* CLOSE BUTTON - Now properly centered in circle */}
//         <button
//           onClick={minimizePopup}
//           className="absolute top-1 right-1 bg-black/70 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm leading-none hover:bg-black/90 z-50 transition-colors"
//           aria-label="Minimize video"
//         >
//           <span className="relative -top-[1px]">×</span>
//         </button>

//         {/* VIDEO */}
//         <div className="relative w-full h-[320px] bg-black overflow-hidden">
//           <iframe
//             src="https://www.youtube.com/embed/mQVTI5oXx08?autoplay=1&mute=1&loop=1&playlist=mQVTI5oXx08&controls=0&modestbranding=1&rel=0"
//             className="absolute top-0 left-0 w-full h-full scale-[1.3]"
//             style={{ transformOrigin: "center" }}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             title="YouTube Reel"
//           ></iframe>
//         </div>

//         {/* OPTIONAL: Minimize button at bottom */}
//         <div className="p-2 bg-gray-100 border-t border-gray-200">
//           <button
//             onClick={minimizePopup}
//             className="w-full text-xs bg-gray-800 text-white py-1.5 rounded-md hover:bg-gray-900 transition flex items-center justify-center gap-1"
//           >
//             <span>Minimize</span>
//             <span className="text-lg">−</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default YouTubeReelPopup;







'use client'
import {Collapse, Divider} from 'antd';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

const items = [
    {
      key: '1',
      label: <span className="text-xl font-semibold">What is the Arogya Bharat ?</span>,
      children: <p className="text-lg leading-relaxed">Arogya Bharat is a non-profit organization dedicated to providing quality healthcare to the poor and underprivileged in India. It was founded in 2005 by Dr. BK Chaurasia, a renowned Indian physician, author, and medical educationist.</p>,
    },
    {
      key: '2',
      label: <span className="text-xl font-semibold">Will this be live or pre-recorded ?</span>,
      children: <p className="text-lg leading-relaxed">It is a completely offline Program</p>,
    },
    {
      key: '3',
      label: <span className="text-xl font-semibold">Is it a certified Frachise Program ?</span>,
      children: <p className="text-lg leading-relaxed">Absolutely. You will be certified by three types of certificates through Arogya Bharat founder – Dr.Bk Chaurasia who have jointly built multiple 8 figure companies .</p>,
    },
    {
      key: '4',
      label: <span className="text-xl font-semibold">What should I be prepared with before the MicroFranchise starts ?</span>,
      children: <p className="text-lg leading-relaxed">Make sure you have space 200 Square feet place and Computer Knowledge Basic and minimum age 18 year old</p>,
    },
    {
      key: '5',
      label: <span className="text-xl font-semibold">I made the Submit information but did not receive any email</span>,
      children: <p className="text-lg leading-relaxed">Please write to us at Whatsappchatbot & our awesome support team will get back to you as soon as possible.</p>,
    },
  ];

const Accordian = () => (
  <div className='container mx-auto p-6 md:p-6 hidden md:block'>
    <Divider orientation="center">
      <p className='text-black md:text-4xl text-2xl font-bold'>Frequently Asked Questions(FAQs)</p>
    </Divider>
    <div className='md:px-4'>
      <Collapse
        expandIconPosition="end"
        accordion
        items={items}
        className="text-lg"
      />
    </div>
  </div>
);

export default Accordian;

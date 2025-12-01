
"use client";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { FilePdfOutlined, DownloadOutlined } from '@ant-design/icons';

function RelatedDocuments() {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const calculateSlidesPerView = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1280) {
        setSlidesPerView(4);
        setShowNavigation(true);
      } else if (screenWidth >= 1024) {
        setSlidesPerView(3);
        setShowNavigation(true);
      } else if (screenWidth >= 768) {
        setSlidesPerView(2.5);
        setShowNavigation(false);
      } else {
        setSlidesPerView(2);
        setShowNavigation(false);
      }
    };

    calculateSlidesPerView();
    window.addEventListener('resize', calculateSlidesPerView);
    return () => window.removeEventListener('resize', calculateSlidesPerView);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-3 md:mb-0">
          Related Documents
        </h2>
        <button className="flex items-center text-green-600 hover:text-green-700 transition-colors text-sm md:text-base">
          <span className="font-medium mr-1">View All</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={showNavigation}
        spaceBetween={16}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        className="pb-8 md:pb-12"
      >
        {documentData.map((doc, id) => (
          <SwiperSlide key={id}>
            <div className="group relative h-full rounded-lg md:rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden">
              {/* Compact Document Card */}
              <div className="p-4 md:p-5 h-full flex flex-col">
                {/* Document Icon and Title */}
                <div className="flex items-start mb-3">
                  <div className="p-2 bg-green-50 rounded-md md:rounded-lg mr-3">
                    <FilePdfOutlined className="text-green-600 text-xl md:text-2xl" />
                  </div>
                  <h3 className="text-sm md:text-base font-medium text-gray-800 line-clamp-2 flex-grow">
                    {doc.title}
                  </h3>
                </div>
                
                {/* Date */}
                <p className="text-xs text-gray-500 mb-3 md:mb-4 flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {doc.date}
                </p>
                
                {/* Download Button */}
                <a
                  href={doc.link}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center space-x-1 bg-green-600 text-white text-xs md:text-sm px-3 py-2 md:px-4 md:py-2 rounded-md hover:bg-green-700 transition-all"
                >
                  <DownloadOutlined className="text-xs md:text-sm" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// Sample Documents Data
const documentData = [
  {
    title: "Heart Care Diet Chart",
    date: "Feb 1, 2025",
    link: "/files/heart-care-diet-chart.pdf",
  },
  {
    title: "Obesity Care Diet Chart",
    date: "Jan 15, 2025",
    link: "/files/Obesity-care-diet-chart.pdf",
  },
  {
    title: "Pain Care Diet Chart",
    date: "Dec 20, 2024",
    link: "/files/Pain-care-diet-chart.pdf",
  },
  {
    title: "Diabetese Care Diet Chart",
    date: "Nov 10, 2024",
    link: "/files/Diabetese-care-diet-chart.pdf",
  },
  {
    title: "Kideny Care Diet Chart",
    date: "Nov 10, 2024",
    link: "/files/Kidney-care-diet-chart.pdf",
  },
];


export { RelatedDocuments };
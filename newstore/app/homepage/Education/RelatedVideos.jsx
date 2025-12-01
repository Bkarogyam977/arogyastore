

"use client";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

function RelatedVideos() {
  const [slidesPerView, setSlidesPerView] = useState(1);
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
        setSlidesPerView(2.2);
        setShowNavigation(false);
      } else {
        setSlidesPerView(1.2);
        setShowNavigation(false);
      }
    };

    calculateSlidesPerView();
    window.addEventListener('resize', calculateSlidesPerView);
    return () => window.removeEventListener('resize', calculateSlidesPerView);
  }, []);

  return (
    <div className='container mx-auto px-4 py-4 max-w-7xl'>
      {/* Header Section */}
      <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4 md:mb-0">
          Related Videos
        </h2>
        <button className="flex items-center text-green-600 hover:text-green-700 transition-colors">
          <span className="font-semibold mr-2">View More</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={showNavigation}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={24}
        slidesPerView={slidesPerView}
        loop={true}
        centeredSlides={slidesPerView < 2}
        className="pb-12"
      >
        {videoData.map((video, id) => (
          <SwiperSlide key={id}>
            <div className='group relative rounded-xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300'>
              {/* Video Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden">
              <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-video overflow-hidden block"
              >
                {/* YouTube Thumbnail Image (faster load than iframe) */}
                <img 
                  src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 group-hover:bg-black/40">
                  <div className="w-16 h-16 bg-green-600 bg-opacity-80 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </a>
              </div>
              
              {/* Video Info */}
              <div className="p-5">
                <h3 className="text-md font-semibold text-gray-800 mb-2 line-clamp-2">{video.title}</h3>
                {/* <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>12:45 min</span>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// Sample YouTube Videos
const videoData = [
  {
    title: "Green Tea Tablet Weight Loss: ग्रीन टी से वजन ऐसे घटाएं?",
    videoId: "ItQ3CtC_kCs",
  },
  {
    title: "Cabbage for Kidney Patients |Diet For Kidney Disease",
    videoId: "J7ILGEPsi0Y",
  },
  {
    title: "दिन की शानदार शुरुआत करें सिर्फ़ एक गिलास पानी के साथ! | Health Tips",
    videoId: "TQFpravq8lc",
  },
  {
    title: " किडनी स्वस्थ कैसे रखें? | किडनी स्टोन का समाधान | बेस्ट किडनी हेल्थ टिप्स ",
    videoId: "FAUCJkXNVDI",
  },
  {
    title: "  Kidney Test किडनी स्वस्थ है या नहीं कैसे पता करे Chronic kidney Disease ",
    videoId: "XrXR1W9k9_8",
  },
  // {
  //   title: "How to Improve Your Kidney Health Naturally with Ayurveda",
  //   videoId: "h5uZmi-AUds",
  // },
  // {
  //   title: "Best Ayurvedic Remedies for Liver Health and Detox",
  //   videoId: "W4FliHHvcjo",
  // },
  // {
  //   title: "5 Powerful Tips to Manage Diabetes with Ayurveda",
  //   videoId: "tV7G5H1A9qA",
  // },
  // {
  //   title: "Yoga for Heart Health and Improved Blood Circulation",
  //   videoId: "JzXtNi3joFk",
  // },
];

export { RelatedVideos };
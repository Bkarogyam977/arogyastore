
"use client";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';
import Link from 'next/link';


function Articles() {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const calculateSlidesPerView = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        setSlidesPerView(3);
        setShowNavigation(true);
      } else if (screenWidth >= 768) {
        setSlidesPerView(2);
        setShowNavigation(true);
      } else {
        setSlidesPerView(1.2); // Slightly more than 1 to indicate scrollability
        setShowNavigation(false);
      }
    };

    calculateSlidesPerView();
    window.addEventListener('resize', calculateSlidesPerView);
    return () => window.removeEventListener('resize', calculateSlidesPerView);
  }, []);

  return (
    <div className='container mx-auto px-4 py-6 max-w-7xl'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4 md:mb-0">
          Related Articles
        </h2>
        <button className="flex items-center text-green-600 hover:text-green-700 transition-colors">
          <Link href='/blog'>
            <span className="font-semibold mr-2">View More</span>
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

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
        centeredSlides={slidesPerView === 1.2}
        className="pb-12" // Add padding for navigation arrows
      >
        {blogdata.map((d, id) => (
          <SwiperSlide key={id}>
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <Image
                  src={d.img}
                  alt={d.content}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg md:text-xl font-semibold text-white line-clamp-2">
                  {d.content}
                </h3>
                <Link href={d.bloglink}>
                  <button className="mt-3 inline-flex items-center text-sm font-medium text-green-300 hover:text-white transition-colors">
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </Link>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const blogdata = [
  {
    content: `What makes Ayurveda different?`,
    img: `https://healdiway.bkarogyam.com/media/clinic-image/blogimage/2020/8/24/2020-08-24 17:53:19.044952 05:30/What_Make_Ayurveda_Different.jpg`,
    bloglink: `/blog/28?title=What makes Ayurveda different%3F`,
  },
  {
    content: `Why Should Ayurvedic Be Preferred?`,
    img: `https://healdiway.bkarogyam.com/media/clinic-image/blogimage/2025/2/8/2025-02-08 10:49:28.687355 05:30/ayurved_home_remedies.png`,
    bloglink: `/blog/42?title=Ayurvedic Home Remedies for Kidney Stones`,
  },
  {
    content: `A Life-Changing Ayurvedic Routine How I Healed My Liver & Kidneys Naturally`,
    img: `https://healdiway.bkarogyam.com/media/clinic-image/blogimage/2025/3/4/2025-03-04 18:53:53.324197 05:30/A_Life-Changing_Ayurved_FU7iuAw.png`,
    bloglink: `/blog/55?title=A Life-Changing Ayurvedic Routine How I Healed My Liver %26 Kidneys Naturally`,
  },
  {
    content: `What Is Importance Of Yoga In Today's Life ?`,
    img: `https://healdiway.bkarogyam.com/media/clinic-image/blogimage/2020/8/27/2020-08-27 11:39:40.309835 05:30/Yoga_Blog.jpg`,
    bloglink: `/blog/29?title=What Is Importance Of Yoga In Today's Life %3F`,
  },
];

export { Articles };
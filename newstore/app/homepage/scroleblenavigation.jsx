
'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import Request_Appointment from '../Request_Appointment/page';

function ScrolebleNav() {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const calculateSlidesPerView = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        return 6;
      } else if (screenWidth >= 768) {
        return 4;
      } else {
        return 3; 
      }
    };

    setSlidesPerView(calculateSlidesPerView());

    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='container mx-auto'>
      <div className="fixed top-10 left-0 right-0 z-50 bg-gradient-to-t bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-md py-2">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20} // Increased space between items
          slidesPerView={slidesPerView}
          centeredSlides={false}
        >
          {scroleblenavdata.map((d, id) => (
            <SwiperSlide key={id}>
              {d.name && (
                <div className='flex items-center justify-center h-full'>
                  <Link
                    href={`${d.url}`}
                    className="text-md md:text-base font-semibold text-black hover:text-blue-600 transition-colors duration-200 px-4 py-1 rounded-lg hover:bg-gray-100/50 whitespace-nowrap"
                  >
                    {d.name}
                  </Link>
                </div>
              )}
              {d.component && d.component}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const scroleblenavdata = [
  {
    name: 'About Us',
    url: '/aboutus'
  },
  {
    name: 'Business Opportunities',
    url: '/business-opportunity'
  },
  {
    name: 'Clinics',
    url: '/clinics'
  },
  {
    name: 'Blogs',
    url: '/blog'
  },
  {
    name: 'Products',
    url: '/e-store'
  },
  // Add more items as needed
];

export { ScrolebleNav };






// 'use client'
// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import Link from 'next/link';
// import Request_Appointment from '../Request_Appointment/page';

// function ScrolebleNav() {

//   const [slidesPerView, setSlidesPerView] = useState(1);

//   useEffect(() => {
//     const calculateSlidesPerView = () => {
//       const screenWidth = window.innerWidth;

//       if (screenWidth >= 768) {
//         return 4;
//       } else {
//         return 4;
//       }
//     };

//     setSlidesPerView(calculateSlidesPerView);

//     const handleResize = () => {
//       setSlidesPerView(calculateSlidesPerView);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     // <div className='container mx-auto bg-gradient-to-t from-blue-100 to-green-500'>
//     //   <div className="fixed top-10 left-0 right-0 z-50 bg-gradient-to-t from-blue-100 to-green-500 shadow-lg">
//     <div className='container mx-auto'>
//       <div className="fixed top-10 left-0 right-0 z-50 bg-gradient-to-t bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-md">
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={3}
//           slidesPerView={slidesPerView}
//           onSlideChange={() => console.log('slide change')}
//           onSwiper={(swiper) => console.log(swiper)}
//         >
//           {scroleblenavdata.map((d, id) => (
//             <SwiperSlide key={id} className='rounded-xl text-center'>
//               {d.name && (
//                 <div key={d.id} className='flex items-center justify-center h-full'>
//                   <div className='p-2'>
//                     <Link
//                       href={`${d.url}`}
//                       className="text-l p-2 font-semibold text-black whitespace-nowrap px-2 hover:text-blue-700 focus:text-blue-700"
//                     >
//                       {d.name}
//                     </Link>
//                   </div>
//                 </div>
//               )}
//               {d.component ? d.component : null}
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }

// const scroleblenavdata = [
//   // {
//   //   component: <div className='cursor-pointer hover:text-blue-700' style={{ marginTop: '5px' }}><Request_Appointment /></div>
//   // },
//   {
//     name: `AboutUs`,
//     url: '/aboutus'
//   },
//   {
//     name: `Business Opportunities`,
//     url: '/business-opportunity'
//   },
//   {
//     name: `Clinics`,
//     url: '/clinics'
//   },
//   {
//     name: `Blogs`,
//     url: '/blog'
//   },
//   {
//     name: `Products`,
//     url: '/e-store'
//   },
//   // {
//   //   name: `Webinar`,
//   //   url: '/webinar'
//   // },
//   // {
//   //   name: `Feed`,
//   //   url: '/feed'
//   // },
//   // {
//   //   name: `Learning`,
//   //   url: '/learning'
//   // },
//   // {
//   //   name: `Quiz`,
//   //   url: '/quizzes'
//   // },
// ];

// export { ScrolebleNav };

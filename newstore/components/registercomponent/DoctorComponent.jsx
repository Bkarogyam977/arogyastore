'use client'

import React, { Component, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, EffectCube, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import Image from 'next/image';


function DoctorsComponent() {


  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const calculateSlidesPerView = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        return 8;
      } else {
        return 1;
      }
    };

    setSlidesPerView(calculateSlidesPerView);

    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 

  return (
    <div className=' m-auto p-4 px-2 ' >
      <div>
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={true}

          navigation={{
            "enabled": true
          }}
          loop

          spaceBetween={slidesPerView === 8 ? 5 : 50}
          slidesPerView={slidesPerView}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {doctorsdata.map((d, id) => (
            <SwiperSlide key={id} className=''>
              <div className='flex flex-col shadow-xl rounded-xl bg-white m-4 justify-center items-center  mx-2'>
                <Image
                  src={d.img}
                  alt=""
                  width={160} // Adjust the size as needed
                  height={160} // Ensure width and height are the same
                  className="rounded-full p-3"
                />
                <p className="text-l p-2 font-semibold text-center text-black dark:text-black">{d.name}</p>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </div>

  );
}


const doctorsdata = [
  {
    name: `John Morgan`,
    img: `/images/doctortej.jpeg`,
  },
  {
    name: `Dr. Rupali`,
    img: `/images/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg`,
  },
  {
    name: `Dr. Ramesh`,
    img: `/images/doctorarvind.jpeg`,
  },
  {
    name: `Dr. Nilam Bano`,
    img: `/images/doctyorswqe.jpeg`,
  },
  {
    name: `Mia Williams`,
    img: `/images/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg`,
  },
  {
    name: `John Morgan`,
    img: `/images/doctorrahul.jpeg`,
  },
  {
    name: `Ellie Anderson`,
    img: `/images/doctortendu.jpeg`,
  },
  {
    name: `Dr. Vinode Singh`,
    img: `/images/photo-1612349317150-e413f6a5b16d.jpeg`,
  },
  {
    name: `Dr. Minakshi `,
    img: `/images/doctorrahul.jpeg`,
  },
  {
    name: `Dr. Saroj`,
    img: `/images/doctyorswqe.jpeg`,
  },

];

export default DoctorsComponent;
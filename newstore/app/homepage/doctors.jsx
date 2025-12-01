'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import gsap from 'gsap';
import Image from 'next/image';

function Doctors() {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const sectionRef = useRef(null); // Ref to target the section for animations

  useEffect(() => {
    const calculateSlidesPerView = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        return 4;
      } else {
        return 2;
      }
    };

    // Update the state with the calculated value
    setSlidesPerView(calculateSlidesPerView);

    // Attach an event listener to window resize to dynamically update the slidesPerView
    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleAnimation = () => {
      gsap.fromTo(
        '.doctor', // Targeting all elements with the 'doctor' class
        { opacity: 0, x: 200 }, // Start state: opacity 0 and translateX by 200px (moving from right)
        {
          opacity: 1, // End state: opacity 1 (fully visible)
          x: 0, // End state: translateX back to 0 (original position)
          stagger: 0.2, // Stagger the animations of the individual slides
          duration: 1, // Duration of the animation
          ease: 'power3.out', // Easing function for smooth animation
        }
      );
    };

    // Set up IntersectionObserver to detect when the section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleAnimation(); // Trigger animation when the section comes into view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer when component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto px-4">
      <p className="font-bold text-center mt-10 text-3xl mb-10">
        Trusted by experienced doctors
      </p>
      <Swiper
        modules={[Autoplay]}
        autoplay={true}
        spaceBetween={1}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="sm:p-10"
      >
        {doctorsdata.map((d, id) => (
          <SwiperSlide key={id} className="doctor bg-slate-200 rounded-3xl text-center">
            <div key={d.id} className="flex items-center justify-center h-full">
              <div className="bg-blue h-full">
                <Image
                  src={d.img}
                  alt=""
                  width={800} 
                  height={600} 
                  className="md:h-[16vw] md:w-full w-full md:p-10 p-10 rounded-[3.5rem]"
                  style={{ borderRadius: "3.5rem" }}
                />
                <div className="px-10 pb-10">
                  <p className="text-l p-1 font-semibold text-black">{d.name}</p>
                  <p className="text-l p-1 font-semibold text-black">{d.experiance}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const doctorsdata = [
  {
    name: `Dr. Anamika`,
    img: `/images/newsiteimg/Doctors_Img/Anamika.jpg`,
    location: `Varansi`,
    streem: `Ayurved Doctor`,
    experiance: `10 years Experience`,
    about: `Lifestyle counsellor, Diet & Lifestyle Modification Advice, Ayurveda Doctor, Ayurveda Clinic`,
  },
  {
    name: `Dr. Ritesh-Chaursia`,
    img: `/images/newsiteimg/Doctors_Img/docter_ritesh.jpg`,
    location: `Varansi`,
    streem: `Ayurved Doctor`,
    experiance: `10 years Experience`,
    about: `Lifestyle counsellor, Diet & Lifestyle Modification Advice, Ayurveda Doctor, Ayurveda Clinic`,
  },
  {
    name: `Dr. BK Chaurasia`,
    img: `/images/newsiteimg/Doctors_Img/dr-brijesh-chaurasia-1476286069-57fe56758be3f.jpg`,
    location: `Varansi`,
    streem: `Ayurved Doctor`,
    experiance: `10 years Experience`,
    about: `Lifestyle counsellor, Diet & Lifestyle Modification Advice, Ayurveda Doctor, Ayurveda Clinic`,
  },
  // Additional doctor data here...
];

export { Doctors };

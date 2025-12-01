'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from "next/image";


function OurDoctorsSlider() {
  const doctors = [
    { id: 1, name: 'Dr. J.K. Tiwari', qualification: 'BAMS', specialty: 'Diabetes', experience: '15 years', image: '/images/hops/dr_jitendra.jpg' },
    { id: 2, name: 'Dr. Shimali Chaurasia', qualification: 'BAMS', specialty: 'Skin, Hair', experience: '6 years', image: '/images/hops/drsimaliya.jpeg' },
    { id: 3, name: 'Dr. Ratanesh Kumar', qualification: 'MD', specialty: 'Panchkarma', experience: '9 years', image: '/images/hops/drRatanesh.png' },
    { id: 4, name: 'Dr. Vandana Chaurasia', qualification: 'MD', specialty: 'Panchkarma', experience: '8 years', image: '/images/hops/vandana.png' },
  ];

  return (
    <div className="p-5 sm:px-[2em] md:px-[4em] bg-gray-50">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold p-5 text-center md:mt-10 text-black">Meet Our Doctors</h2>
      <p className="text-black text-center px-4 sm:px-10 lg:px-28 text-sm sm:text-base">
        Our team of 500+ doctors follows the Ayurvedic principles of diagnosis to provide personalized treatment.
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="mySwiper mt-5"
      >
        {doctors.map((doctor) => (
          <SwiperSlide key={doctor.id}>
            <div className="text-center border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative bg-white">
              <div className="h-[15em] overflow-hidden rounded-lg">

                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={500} 
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="mt-4 text-sm sm:text-lg text-black font-bold"><span className='text-black font-bold'>Name:</span> {doctor.name}</h3>
              <p className="text-gray-600 text-sm"><span>Qualification:</span> {doctor.qualification}</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1"><span>Specialty:</span> {doctor.specialty}</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 pb-3"><span>Experience:</span> {doctor.experience}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OurDoctorsSlider;

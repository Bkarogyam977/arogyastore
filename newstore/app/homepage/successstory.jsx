'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

function SuccessStory() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('https://main.bkarogyam.com/bkapitestimonials/');
        const shuffledTestimonials = shuffleArray(response.data);
        setTestimonials(shuffledTestimonials.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Function to shuffle the array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };

  if (loading) {
    return <p className="text-center">Loading testimonials...</p>;
  }

  return (
    <div className="testimonial-section bg-gray-100 text-black py-10 md:py-20 md:px-20">
      <h2 className="text-center md:text-4xl text-3xl font-bold mb-6">Stories of Health & Healing</h2>
      <p className="text-center text-xl font-bold mb-6">Thousands have experienced relief after treatment at BK Arogyam</p>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id || index} className="p-4">
            <div className="relative border border-gray-300 rounded-lg shadow-lg p-6 bg-white text-center overflow-visible">
              {/* Image absolutely positioned on top of the card */}
              <Image
                src={testimonial.Profile_Pic}
                alt={testimonial.Patient_Name}
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute top-[-20px] left-1/2 transform -translate-x-1/2 border-4 border-white"
              />
              {/* Content below the image */}
              <div className="pt-20">
                <p className="text-lg italic mb-4">
                  &quot;{truncateText(testimonial.Description, 30)}&quot;
                </p>
                <h4 className="text-xl font-semibold mb-2 mt-3">{testimonial.Patient_Name}</h4>
                <p className="text-gray-500">{testimonial.Patient_Location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-6 md:px-80 px-3">
        <Link href="/testimonials">
          <button
            className="bg-blue-700 text-white hover:text-blue-600 font-bold py-2 px-4 rounded hover:bg-white transition w-full sm:w-[20em]"
          >
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SuccessStory;

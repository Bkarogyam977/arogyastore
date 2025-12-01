'use client';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import gsap from 'gsap';  // Import GSAP
import Image from 'next/image';  // Import Image component

function AwardsAndRewards() {
  const [awardsData, setAwardsData] = useState([]);
  const awardsSectionRef = useRef(null); // Ref for the section

  // Fetch awards data from the API when the component mounts
  useEffect(() => {
    axios
      .get('https://main.bkarogyam.com/bkapiawards/')  // Your API endpoint here
      .then((response) => {
        setAwardsData(response.data); // Set the response data to the state
      })
      .catch((error) => {
        console.error('There was an error fetching the awards:', error);
      });
  }, []);

  useEffect(() => {
    // GSAP animation for the awards after the component mounts
    const handleAnimation = () => {
      gsap.fromTo(
        '.award', // Targeting all elements with the 'award' class
        { opacity: 0, y: 50 }, // Start state: opacity 0 and translateY by 50px
        {
          opacity: 1, // End state: opacity 1 (fully visible)
          y: 0, // End state: translateY back to 0 (original position)
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

    if (awardsSectionRef.current) {
      observer.observe(awardsSectionRef.current);
    }

    // Cleanup observer when component unmounts
    return () => {
      if (awardsSectionRef.current) {
        observer.unobserve(awardsSectionRef.current);
      }
    };
  }, [awardsData]);

  return (
    <section
      ref={awardsSectionRef} // Attach the ref to the section
      className="award-section py-10 mt-10 md:px-20"
      style={{
        backgroundImage: "url('/images/award-bg.png')",
        backgroundSize: 'cover',  // Ensure the background covers the section
        backgroundPosition: 'center',  // Center the background image
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-white text-3xl font-bold pb-10 text-center">
              Awards & Recognition
            </h3>
            <Swiper
              slidesPerView={4}  // Shows 4 awards in large screens
              spaceBetween={30}  // Space between slides
              loop={true}  // Infinite loop
              autoplay={{
                delay: 3000,  // Auto slide every 3 seconds
                disableOnInteraction: false,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 4,  // 4 slides on larger screens
                  spaceBetween: 30,  // Space between slides
                },
                768: {
                  slidesPerView: 3,  // 3 slides on medium screens
                  spaceBetween: 20,  // Space between slides
                },
                600: {
                  slidesPerView: 2,  // 2 slides on small screens
                  spaceBetween: 15,  // Space between slides
                },
                480: {
                  slidesPerView: 1,  // 1 slide on very small screens
                  spaceBetween: 10,  // Space between slides
                },
              }}
              modules={[Autoplay]}  // Autoplay module for continuous scrolling
              className="award-wrapper"
            >
              {awardsData.map((award) => (
                <SwiperSlide key={award.id} className="slick-slide">
                  <div className="award">
                    <Image
                      src={award.Awards_image}  // Directly use the full URL from the API response
                      alt={award.title}
                      width={500}  // Adjust width based on your design
                      height={300}  // Adjust height based on your design
                      className="w-full h-auto rounded-lg" // Apply rounded corners
                    />
                    <h5 className="award-name text-white text-center font-bold text-2xl mt-3 capitalize">{award.title}</h5>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardsAndRewards;

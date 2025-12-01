"use client";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { getAPI } from "@/dataarrange/utils/common";
import { Navigation, Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProductCategory() {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [category, setCategory] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    loadCategory();

    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;
      setSlidesPerView(screenWidth >= 768 ? 6 : 3);
      setIsMobile(screenWidth < 768);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const loadCategory = () => {
    const successFn = (data) => {
      setCategory(data);
    };
    const errorFn = (data) => {
      console.log(data);
    };
    getAPI(`inv_category`, successFn, errorFn);
  };

  useEffect(() => {
    if (category.length && containerRef.current) {
      const slides = containerRef.current.querySelectorAll(".swiper-slide");

      // Adjust GSAP animation for faster transition
      gsap.fromTo(
        slides,
        { opacity: 0, x: -30 }, // Smaller initial offset
        {
          opacity: 1,
          x: 0,
          duration: 0.3, // Reduced animation duration
          stagger: 0.05, // Reduced stagger delay for faster animation
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, [category]);


  // Handle mouse scroll to control Swiper
  useEffect(() => {
    const handleMouseScroll = (event) => {
      if (swiperRef.current && containerRef.current && containerRef.current.contains(event.target)) {
        const swiper = swiperRef.current.swiper;
        const isAtEnd = swiper.isEnd && event.deltaY > 0;
        const isAtBeginning = swiper.isBeginning && event.deltaY < 0;

        if (!isAtEnd && !isAtBeginning) {
          event.preventDefault(); // Prevent page scroll if not at the end/beginning
          if (event.deltaY > 0) {
            swiper.slideNext(); // Scroll down to swipe left to right
          } else {
            swiper.slidePrev(); // Scroll up to swipe right to left
          }
        }
      }
    };

    // Ensure containerRef.current exists before attaching event listener
    if (containerRef.current) {
      containerRef.current.addEventListener("wheel", handleMouseScroll, { passive: false });

      // Clean up the event listener on component unmount
      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener("wheel", handleMouseScroll);
        }
      };
    }
  }, []);

  return (
    <div className="w-full h-full p-5 md:p-20 mt-5 md:mt-5">
      <div ref={containerRef}>
        <p className="font-bold text-center text-2xl md:text-5xl mb-10">
          Shop By Health Benefits With Top Product Categories
        </p>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          navigation={isMobile ? false : { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          pagination={isMobile ? { clickable: true } : true}
          spaceBetween={15}
          slidesPerView={slidesPerView}
          className="relative"
        >
          {category.map((categoryimage, id) => (
            <SwiperSlide key={id} className="swiper-slide">
              <div className="relative flex flex-col justify-center items-center md:mt-5">
                <Link
                  href={`/e-store/allproducts/?practice=${"5"}&category_id=${categoryimage.id}`}
                  className="rounded-full overflow-hidden"
                >
                  <Image
                    width={100}
                    height={100}
                    src={`https://healdiway.bkarogyam.com/media/${categoryimage.image}`}
                    alt={categoryimage.name}
                    className="object-cover max-w-full max-h-full rounded-full"
                  />
                </Link>
                <p className="text-center text-sm md:text-xl mt-2">
                  {categoryimage.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
          {!isMobile && (
            <>
              <div className="swiper-button-next hidden md:block"></div>
              <div className="swiper-button-prev hidden md:block"></div>
            </>
          )}
          <div className="md:mt-20 mt-10">
            <div className={`swiper-pagination ${isMobile ? 'absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2' : 'hidden'}`}></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default ProductCategory;

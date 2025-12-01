

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

function NewCategoryScroller() {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [category, setCategory] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetchCategory();

    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;
      setSlidesPerView(screenWidth >= 768 ? 6 : 4);
      setIsMobile(screenWidth < 768);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const fetchCategory = async () => {
    try {
      // Fetch all brands (parent_data is null)
      const brandResponse = await getAPI('inv_category?is_parent_null=true');
      if (!brandResponse) return;

      let categories = [];
      // Fetch child categories of each brand
      for (const brand of brandResponse) {
        const childResponse = await getAPI(`inv_category?parent_id=${brand.id}`);
        if (childResponse) {
          categories = [...categories, ...childResponse];
        }
      }
      setCategory(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    if (category.length && containerRef.current) {
      const slides = containerRef.current.querySelectorAll(".swiper-slide");

      gsap.fromTo(
        slides,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
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

  useEffect(() => {
    const handleMouseScroll = (event) => {
      if (swiperRef.current && containerRef.current?.contains(event.target)) {
        const swiper = swiperRef.current.swiper;
        const isAtEnd = swiper.isEnd && event.deltaY > 0;
        const isAtBeginning = swiper.isBeginning && event.deltaY < 0;

        if (!isAtEnd && !isAtBeginning) {
          event.preventDefault();
          event.deltaY > 0 ? swiper.slideNext() : swiper.slidePrev();
        }
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("wheel", handleMouseScroll, { passive: false });
      return () => containerRef.current?.removeEventListener("wheel", handleMouseScroll);
    }
  }, []);

  return (
    <div className="w-full h-full p-5 md:p-20 md:pt-5 bg-gradient-to-b from-white to-white">
      <div ref={containerRef}>
        <p className="font-bold text-2xl md:text-5xl mb-10">
          Popular categories
        </p>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          navigation={!isMobile && { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          pagination={isMobile ? { clickable: true } : false}
          spaceBetween={15}
          slidesPerView={slidesPerView}
          className="relative"
        >
          {category.map((categoryimage, id) => (
            <SwiperSlide key={id} className="swiper-slide">
              <div className="relative flex flex-col justify-center items-center md:mt-5">
                <Link
                  href={`/e-store/allproducts/?practice=5&category_id=${categoryimage.id}`}
                  className="w-28 h-28 md:w-40 md:h-40 bg-green-100 flex justify-center items-center rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    width={100}
                    height={100}
                    src={`https://healdiway.bkarogyam.com/media/${categoryimage.image}`}
                    alt={categoryimage.name}
                    className="object-cover max-w-full max-h-full"
                  />
                </Link>
                <p className="text-center text-sm md:text-xl mt-2">{categoryimage.name}</p>
              </div>
            </SwiperSlide>
          ))}
          {!isMobile && (
            <>
              <div className="swiper-button-next hidden md:block"></div>
              <div className="swiper-button-prev hidden md:block"></div>
            </>
          )}
          {isMobile && <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"></div>}
        </Swiper>
      </div>
    </div>
  );
}

export default NewCategoryScroller;

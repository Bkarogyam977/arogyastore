"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get(
          "https://healdiway.bkarogyam.com/erp-api/offers-banners/?category=5"
        );
        const activeSlides = response.data.filter((slide) => slide.is_active);
        setSlides(activeSlides.length > 0 ? activeSlides : response.data);
      } catch (error) {
        console.error("Error fetching slides:", error);
        setError("Failed to load slides");
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides]);

  const handleSlideClick = (url) => {
    if (!url || url.trim() === "") {
      router.push("/");
    } else {
      try {
        const u = new URL(url);
        if (u.protocol === "http:" || u.protocol === "https:") {
          window.open(url, "_blank", "noopener,noreferrer");
        } else {
          router.push(url);
        }
      } catch {
        router.push(url);
      }
    }
  };

  if (loading || slides.length === 0) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center bg-gray-100 rounded-xl shadow-md">
        <div className="text-center text-gray-500 animate-pulse">Loading slides...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center bg-red-100 rounded-xl shadow-md">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="md:mt-16 relative w-full h-[220px] sm:h-[280px] md:h-[380px] lg:h-[450px] xl:h-[500px] shadow-lg overflow-hidden group rounded-xl">
      {/* Show only one image */}
      {slides.length > 0 && (
        <div
          className="relative w-full h-full cursor-pointer"
          onClick={() => handleSlideClick(slides[currentIndex]?.url || "/")}
        >
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title || `Slide ${currentIndex + 1}`}
            fill
            priority
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
        </div>
      )}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

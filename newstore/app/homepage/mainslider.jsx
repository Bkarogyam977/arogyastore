"use client";
import { Carousel } from "antd";
import React from "react";
import Image from "next/image";
import DoctorsMarque from "./doctorsmarque";

function Mainslider() {
  // Static data for the banner images and content
  const carouselContent = [
    {
      id: 1,
      imageUrl: "/favicon.ico",
      title: "Largest Academia of Doctors",
      description:
        "One of the world's largest and fastest growing online communities of verified doctors, where patients can easily access top-tier medical advice.",
    },
    {
      id: 2,
      imageUrl: "/favicon.ico",
      title: "Global Recognition for Advisors",
      description:
        "Recognized worldwide for excellence in healthcare guidance and medical education, empowering advisors to shape the future of healthcare.",
    },
    {
      id: 3,
      imageUrl: "/favicon.ico",
      title: "Building Stronger Communities",
      description:
        "Connecting doctors, advisors, and patients globally, enabling knowledge sharing and fostering collaboration to improve healthcare delivery.",
    },
    {
      id: 4,
      imageUrl: "/favicon.ico",
      title: "Doctors at Your Service",
      description:
        "Providing patients with access to experienced doctors, offering consultations and personalized care from medical professionals across the globe.",
    },
    {
      id: 5,
      imageUrl: "/favicon.ico",
      title: "Connecting Patients with Healthcare Professionals",
      description:
        "A seamless platform where patients can find and connect with trusted healthcare providers and advisors to meet their medical needs.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-t from-emerald-100 to-teal-950 md:pt-28 hidden md:inline-block">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left side - Static Image and Carousel Content (50% width) */}
        <div className="col-span-1 space-y-4">
          <div className="overflow-hidden">
            <Carousel autoplay draggable className="flex mt-4">
              {carouselContent.map((content) => (
                <div key={content.id} className="flex flex-col items-center text-center relative">
                  {/* Content */}
                  <div className="z-10 md:px-10 px-2">
                    <div className="flex justify-center items-center">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Image
                          height={250} // Default height
                          width={250}  // Default width
                          className="w-32 h-32 md:w-auto md:h-auto rounded-lg"
                          src={content.imageUrl}
                          alt={`Banner ${content.id}`}
                        />
                      </a>
                    </div>


                    {/* Left Leaf Background */}
                    <div className="hidden md:block absolute left-0 top-0 w-1/6 h-full bg-no-repeat bg-left bg-[url('/images/swiperbanner/left_leaf.svg')]"></div>

                    {/* Right Leaf Background */}
                    <div className="hidden md:block absolute right-0 top-0 w-1/6 h-full bg-no-repeat bg-right bg-[url('/images/swiperbanner/right_leaf.svg')]"></div>
                    <p className="text-white md:text-3xl text-lg font-semibold">{content.title}</p>
                    <p className="text-white md:text-xl text-sm font-bold mt-2">{content.description}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <DoctorsMarque />
      </div>
    </div>
  );
}

export default Mainslider;

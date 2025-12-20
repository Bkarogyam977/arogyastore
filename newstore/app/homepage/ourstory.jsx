"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

function OurStory() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              cardsRef.current,
              { opacity: 0, scale: 0.8, y: 50 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power4.out",
              }
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionElement);

    return () => {
      observer.unobserve(sectionElement);
    };
  }, []);

  const handleMouseEnter = (index) => {
    gsap.killTweensOf(cardsRef.current[index]);

    gsap.fromTo(
      cardsRef.current[index],
      { opacity: 0.8, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power4.out" }
    );
  };

  return (
    <div
      ref={sectionRef}
      className="ourMilestone__our_milestone_container py-16 md:px-20 hidden md:inline-block bg-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {[
          {
            imgSrc:
              "/images/our-milestones-India.png",
            altText: "India icon",
            title: "45+ Years",
            description:
              "Empowering people to live better, healthier lives with our flagship brands Nutrilite & Artistry",
          },
          {
            imgSrc:
              "/images/Amway-Icons-India_1.png",
            altText: "Unleashing Entrepreneurship",
            title: "Unleashing Entrepreneurship",
            description:
              "Proud to have more than 5.50 lakh passionate distributors",
          },
          {
            imgSrc:
              "/images/Amway-Icons-Bar-Graph_1.png",
            altText: "Making In India",
            title: "Making In India",
            description:
              "Manufacturing in a state-of-the-art, LEED Gold Certified plant in Uttar Pradesh",
          },
          {
            imgSrc:
              "/images/our-milestones-eyes-closed-smile.png",
            altText: "Eye closed smile icon",
            title: "100% Satisfaction",
            description:
              "We offer our customers with money-back guarantee & seamless product experience",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="ourMilestone__milestone_details bg-white p-6 rounded-lg shadow-lg"
            ref={(el) => (cardsRef.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() =>
              gsap.to(cardsRef.current[index], {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.3,
              })
            }
          >
            <div className="ourMilestone__img_area mb-4">
              <Image
                src={item.imgSrc}
                alt={item.altText}
                width={64}
                height={64}
                className="w-16 h-16 mx-auto"
              />
            </div>
            <div className="ourMilestone__details text-center">
              <div className="ourMilestone__title text-xl font-semibold text-gray-800">
                {item.title}
              </div>
              <div className="ourMilestone__desc text-sm text-gray-600 mt-2">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurStory;

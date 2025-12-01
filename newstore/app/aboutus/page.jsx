"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const honors = [
  {
    image: "/images/imageBox/business/Certificate-PrideOfBharat.png",
    name: "Pride Of Bharat Award",
    description: "For outstanding contributions to traditional medicine",
    year: "2023",
  },
  {
    image: "/images/imageBox/business/India 5000 Award.jpg",
    name: "India 5000 Awards",
    description: "Recognizing groundbreaking formulations",
    year: "2019",
  },
  {
    image: "/images/imageBox/business/AWARD-SUPER HERO.jpg",
    name: "India 5000 Awards",
    description: "Recognizing groundbreaking formulations",
    year: "2019",
  },
];

const awards = [
  {
    image: "/images/imageBox/business/Award-By-SunilShetty.jpg",
    name: "Pride Of Bharat Award",
    description: "For outstanding contributions to traditional medicine",
    year: "2023",
  },
  {
    image: "/images/imageBox/business/Award-India5000.jpg",
    name: "India 5000 Awards",
    description: "Recognizing groundbreaking formulations",
    year: "2019",
  },
];

function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden lg:top-8">
        <Image
          src="/images/aboutusbanner.png"
          layout="fill"
          objectFit="cover"
          alt="Arogya Bharat Banner"
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-800/40 flex items-center lg:top-8">
          <div className="container mx-auto px-6 md:px-12 text-white ">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight ">
              Healing India <br /> Through{" "}
              <span className="text-yellow-400">Ayurveda</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-8">
              Pioneering Ayurvedic solutions for modern health challenges since
              1979
            </p>
            {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                            Discover Our Story
                        </button> */}
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="text-green-600 font-semibold text-lg bg-green-100 px-4 py-2 rounded-full">
                About Arogya Bharat
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Redefining <span className="text-green-600">Healthcare</span>{" "}
              Through Ayurveda
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Arogya Bharat is an Indian Ayurveda-based pharmaceutical company
              that specializes in the development and production of various
              health products and services. Established in 1979 with
              headquarters in Mumbai, we combine ancient wisdom with modern
              research to deliver authentic Ayurvedic solutions.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/ayurvedic-pattern.png')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Centered Title Section */}
          <div className="w-full text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Our <span className="text-yellow-400">Mission</span> & Vision
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-10">
            {/* Mission & Vision Content (Left Column) */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-yellow-500 p-2 md:p-3 rounded-full flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-6 md:w-6 text-green-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                      Mission
                    </h3>
                    <p className="text-green-100 text-base md:text-lg font-medium">
                      To make authentic Ayurveda accessible to every household,
                      reducing dependency on allopathic medicines and building a
                      healthcare ecosystem that eliminates diseases from their
                      roots.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-yellow-500 p-2 md:p-3 rounded-full flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-6 md:w-6 text-green-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                      Vision
                    </h3>
                    <p className="text-green-100 text-base md:text-lg font-medium">
                      To re-establish Ayurveda as India&apos;s pride and primary
                      healthcare foundation, creating a healthy, empowered
                      society while generating employment opportunities in the
                      healthcare sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image (Right Column) */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/arogyabharat.avif"
                  width={600}
                  height={400}
                  alt="Arogya Bharat Mission"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/90 to-transparent p-4 md:p-6 lg:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                    Arogya Bharat Mission
                  </h3>
                  <p className="text-green-100 text-sm md:text-base">
                    Connecting thousands of doctors, millions of advisors, and
                    crores of people through our Arogyatalk platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-green-600">Distinctive</span> Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets Arogya Bharat apart in the field of Ayurvedic healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="bg-green-600 h-2"></div>
              <div className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Comprehensive Product Range
                </h3>
                <p className="text-gray-600">
                  From Ayurvedic medicines to nutraceuticals, wellness services
                  to Panchakarma treatments, we offer holistic solutions for
                  complete health.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="bg-yellow-500 h-2"></div>
              <div className="p-8">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Social Commitment
                </h3>
                <p className="text-gray-600">
                  Health awareness programs, educational initiatives, and remote
                  healthcare services demonstrate our dedication to societal
                  wellbeing.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="bg-green-600 h-2"></div>
              <div className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Extensive Network
                </h3>
                <p className="text-gray-600">
                  With production facilities across India and growing
                  international exports, we&apos;re taking Ayurveda to the
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Impact <span className="text-yellow-400">in Numbers</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-green-100">
              Quantifying our journey in transforming healthcare through
              Ayurveda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-4">
                223,654+
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Successful Consultations
              </h3>
              <p className="text-green-100">
                World-leading Ayurveda experts with over 1 million successful
                consultations
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-4">
                1 Lakh+
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Consultation Hours
              </h3>
              <p className="text-green-100">
                Combined treatment experience surpassing Lakhs Of Hours
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-4">50+</div>
              <h3 className="text-2xl font-semibold mb-4">
                Daily Consultations
              </h3>
              <p className="text-green-100">
                Thousands of patients served daily via voice and video calls
              </p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-4">50+</div>
              <h3 className="text-2xl font-semibold mb-4">Expert Doctors</h3>
              <p className="text-green-100">
                Team of experienced Ayurveda doctors for all disease types
              </p>
            </div>

            {/* Stat 5 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-4">
                500+
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Medicines & Products
              </h3>
              <p className="text-green-100">
                Expansive collection of classical Ayurveda formulations
              </p>
            </div>

            {/* Stat 6 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-4">5+</div>
              <h3 className="text-2xl font-semibold mb-4">
                Clinics Nationwide
              </h3>
              <p className="text-green-100">
                Walk-in clinics across India offering personalized treatments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section - Updated for mobile visibility */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Section - Now visible on all screens */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <div className="relative rounded-xl overflow-hidden shadow-2xl h-96">
                <Image
                  src="/images/hops/bksir.webp"
                  layout="fill"
                  objectFit="cover"
                  alt="Dr. B.K. Chaurasia"
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-block mb-6">
                <span className="text-green-600 font-semibold text-lg bg-green-100 px-4 py-2 rounded-full">
                  Our Founder
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Dr. B.K. <span className="text-green-600">Chaurasia</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                India&apos;s Leading <strong>Ayurved Guru</strong> and Multiple
                Award-Winning <strong>Health Motivational Speaker</strong>,
                transforming lives of over 30,000+ kidney patients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <strong>23 years of experience</strong> in Ayurvedic
                    treatments for kidney diseases
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Renowned{" "}
                    <strong>
                      Urologist, Nephrologist, and Motivational Coach
                    </strong>
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Pioneer in <strong>alternative kidney treatments</strong>{" "}
                    combining ancient wisdom with modern techniques
                  </p>
                </div>
              </div>

              <Link href="/aboutus/bkchaurasia">
                <button className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
                  Learn More About Our Founder
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-900 text-white hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Experience{" "}
            <span className="text-yellow-400">Authentic Ayurveda</span>?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 text-green-100">
            Join thousands who have transformed their health with our Ayurvedic
            solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Book a Consultation
            </button>
            <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Explore Our Products
            </button>
          </div>
        </div>
      </section>

      {/* Certifications and Awards Section - Minimal Design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-green-600 font-semibold text-lg bg-green-100 px-4 py-2 rounded-full">
                Our Credentials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Certifications & <span className="text-green-600">Awards</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized by prestigious organizations for our excellence in
              Ayurvedic healthcare
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Scrolling Container */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

              <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:px-16 scrollbar-hide">
                <div className="flex space-x-8">
                  {[
                    {
                      image: "/images/imageBox/business/Certificate-ISO.png",
                      name: "ISO Certified",
                      description: "Quality Management",
                    },
                    {
                      image: "/images/imageBox/business/Certificate-GMP.png",
                      name: "GMP Certified",
                      description: "Manufacturing Excellence",
                    },
                    {
                      image: "/images/imageBox/business/Certificate-ROHINI.png",
                      name: "Rohini Certified",
                      description: "Ayurvedic Standards",
                    },
                    {
                      image: "/images/imageBox/business/Certificate-MSME.png",
                      name: "MSME Registered",
                      description: "Govt. of India",
                    },
                    {
                      image:
                        "/images/imageBox/business/Certificate-Startup.jpg",
                      name: "Certification Of StartUp",
                      description: "Govt. of India",
                    },
                  ].map((cert, index) => (
                    <div key={index} className="flex-shrink-0 w-60">
                      <div className="rounded-xl hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                        {/* Image without any padding or border */}
                        <div className="mb-4 flex items-center justify-center h-48">
                          <Image
                            src={cert.image}
                            alt={cert.name}
                            width={320}
                            height={240}
                            className="object-contain h-full w-full rounded-lg"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-center text-gray-800 mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-gray-500 text-center">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl font-light text-gray-800 mb-2">
              RECOGNITIONS & HONORS
            </h2>
            <div className="w-20 h-px bg-gray-200 mx-auto"></div>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Our commitment to excellence in Ayurveda has been acknowledged
              through these honors
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3  gap-6">
            {honors.map((award, index) => (
              <div key={index} className="group">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden">
                  <Image
                    src={award.image}
                    width={400}
                    height={300}
                    alt={award.name}
                    className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-90"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-normal text-gray-800">
                      {award.name}
                    </h3>
                    <span className="text-xs text-gray-400">{award.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Awards Section */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl font-light text-gray-800 mb-2">Awards</h2>
            <div className="w-20 h-px bg-gray-200 mx-auto"></div>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Our commitment to excellence in Ayurveda has been acknowledged
              through these honors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2  gap-6">
            {awards.map((award, index) => (
              <div key={index} className="group">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden">
                  <Image
                    src={award.image}
                    width={400}
                    height={300}
                    alt={award.name}
                    className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-90"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-normal text-gray-800">
                      {award.name}
                    </h3>
                    <span className="text-xs text-gray-400">{award.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Business Info - Side by Side Layout */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light text-gray-800 mb-2">
              BUSINESS INFORMATION
            </h2>
            <div className="w-20 h-px bg-gray-200 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Company Name */}
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Legal Name
                </p>
                <h3 className="text-xl font-normal text-gray-800 leading-snug">
                  B.K. AROGYAM HEALTHCARE
                  <br />
                  PRIVATE LIMITED
                </h3>
              </div>

              {/* GSTIN */}
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  GSTIN
                </p>
                <p className="text-lg font-mono text-gray-700 tracking-wide">
                  09AAJCB4411A1Z7
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Business Type */}
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Business Type
                </p>
                <p className="text-gray-700">Private Limited Company</p>
              </div>

              {/* Address */}
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Registered Address
                </p>
                <address className="text-gray-600 not-italic leading-relaxed">
                  Near Laxmi Marriage Lawn
                  <br />
                  C/O Brijesh Kumar Chaurasia
                  <br />
                  Mandua Dih Road
                  <br />
                  Varanasi, Uttar Pradesh 221106
                </address>
              </div>
            </div>
          </div>

          {/* Verification - Full width below */}
          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              Verifiable on{" "}
              <a
                href="https://www.gst.gov.in/"
                className="underline hover:text-gray-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GST Portal
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

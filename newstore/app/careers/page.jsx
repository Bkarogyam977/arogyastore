"use client";
import { Layout } from 'antd';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import AllJobs from './jobs';

function Careers() {

  return (
    <Layout className="bg-gray-100">

      <div className="relative w-full h-auto md:pt-28 pt-6">
        <Image
          src="/images/not_just.jpg"
          layout="responsive"
          width={500}
          height={500}
          alt="Careers Banner"
          className="w-full h-auto"
        />
        {/* Overlay Content */}
        <div className="absolute md:top-1/2 top-24 left-28 transform -translate-x-1/2 -translate-y-1/2 text-center md:text-left px-4 sm:px-6 md:left-[30em]">
          <h1 className="text-xl md:text-4xl font-extrabold text-green-600 md:mb-4 mb-2">
            Join Arogya Bharat
          </h1>
          <p className="text-[9px] md:text-2xl text-green-600 md:mb-6 mb-2 max-w-lg mx-auto md:mx-0">
            Be a part of our mission to revolutionize healthcare in India. Explore opportunities to work with passionate individuals making a real impact.
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-8 md:py-2 py-1 rounded-lg font-semibold md:text-lg text-[15px] transition-all"
            onClick={() => {
              const element = document.getElementById("allJobsSection"); // Reference to AllJobs section
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >Browse Vacancies
          </button>
        </div>
      </div>

      <section className="bg-white py-12">
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />

        <div className="container mx-auto md:px-4 px-2">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-brown-700 mb-4">Start your career path with BK Arogyam</h2>
            <div className="flex justify-center">
              <Image
                src="/images/arogyadham/images__1_-removebg-preview.png"
                alt="BK Arogyam"
                className="object-contain"
                width={640}
                height={400}
                layout="intrinsic"
              />
            </div>
            <p className="text-gray-600 text-[15px] md:text-xl mt-6 md:px-40">
              BK Arogyam is not just work but a stepping stone to a successful Ayurvedic career. Doctors can acquire valuable experience here by experimenting with innovative ideas, treating the wide cross-section of the patients, and zealously striving towards better health outcomes.
            </p>
            <p className="text-gray-600 text-[15px] md:text-xl mt-4 md:px-40">
              Whether you are an experienced practitioner or are just beginning, BK Arogyam offers a fantastic opportunity to immerse yourself in the world of Ayurveda. Unlock the endless possibilities for growth and fulfillment at BK Arogyam - Your pathway to success!
            </p>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6 md:px-20">
            <li className="flex flex-col h-full">
              <div className="flex flex-col items-center bg-green-800 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition h-full">
                <i className="fas fa-hand-holding-usd text-5xl mb-4"></i>
                <h6 className="md:text-lg text-[15px] font-semibold text-center">Career stability and growth</h6>
              </div>
            </li>
            <li className="flex flex-col h-full">
              <div className="flex flex-col items-center bg-green-800 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition h-full">
                <i className="fas fa-graduation-cap text-5xl mb-4"></i>
                <h6 className="md:text-lg text-[15px] font-semibold text-center">Continuous learning and skill evolution</h6>
              </div>
            </li>
            <li className="flex flex-col h-full">
              <div className="flex flex-col items-center bg-green-800 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition h-full">
                <i className="fas fa-crown text-5xl mb-4"></i>
                <h6 className="md:text-lg text-[15px] font-semibold text-center">Leaders in Authentic Ayurveda</h6>
              </div>
            </li>
            <li className="flex flex-col h-full">
              <div className="flex flex-col items-center bg-green-800 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition h-full">
                <i className="fas fa-globe text-5xl mb-4"></i>
                <h6 className="md:text-lg text-[15px] font-semibold text-center">International exposure</h6>
              </div>
            </li>
            <li className="flex flex-col h-full">
              <div className="flex flex-col items-center bg-green-800 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition h-full">
                <i className="fas fa-trophy text-5xl mb-4"></i>
                <h6 className="md:text-lg text-[15px] font-semibold text-center">Best in industry perks and benefits</h6>
              </div>
            </li>
            <li className="flex flex-col h-full">
              <div className="flex flex-col items-center bg-green-800 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition h-full">
                <i className="fas fa-users text-5xl mb-4"></i>
                <h6 className="md:text-lg text-[15px] font-semibold text-center">Diverse roles to broaden horizons</h6>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Add ID to AllJobs section */}
      <div id="allJobsSection">
        <AllJobs />
      </div>

    </Layout>
  );
}

export default Careers;

'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HealthConsultation = () => {
  return (
    <div className="p-4 md:pt-32 bg-white min-h-screen max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 md:p-8 rounded-xl overflow-hidden flex items-center justify-between mb-8 md:mb-12">
        <div className="z-10 max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Consult With Experts</h2>
          <p className="text-green-100 mb-4">Get professional medical advice from certified doctors</p>
          <Link
            href="/HealthConsultation/Online"
            className="inline-block mt-2 bg-white text-green-600 py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-green-50 transition duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-6 md:mb-8">Choose What Suits You Best</h2>

        {/* Consultation Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {/* Online Consultation Card */}
          <Link href="/HealthConsultation/Online">
            <div className="bg-teal-50 border-2 border-dashed border-green-400 hover:border-green-500 p-6 rounded-lg flex flex-col items-center cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Image
                  src="/images/imageBox/icons/bi_phone-flip.svg"
                  alt="Online Consultation"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-14 md:h-14"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Online Consultation</h3>
              <p className="text-gray-600 text-center text-sm md:text-base">Video call or chat with doctors from home</p>
            </div>
          </Link>

          {/* Offline Consultation Card */}
          <Link href="/HealthConsultation/Offline">
            <div className="bg-teal-50 border-2 border-dashed border-green-400 hover:border-green-500 p-6 rounded-lg flex flex-col items-center cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Image
                  src="/images/imageBox/icons/solar_hospital-bold-duotone.svg"
                  alt="Offline Consultation"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-14 md:h-14"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Offline Consultation</h3>
              <p className="text-gray-600 text-center text-sm md:text-base">In-person visit to our healthcare facility</p>
            </div>
          </Link>
        </div>

        {/* Additional Information Section */}
        <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-green-600 mb-4">How it works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center p-3">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h4 className="font-medium mb-1">Choose Consultation Type</h4>
              <p className="text-sm text-gray-600">Select online or offline based on your needs</p>
            </div>
            <div className="flex flex-col items-center text-center p-3">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h4 className="font-medium mb-1">Select Doctor & Time</h4>
              <p className="text-sm text-gray-600">Pick your preferred specialist and slot</p>
            </div>
            <div className="flex flex-col items-center text-center p-3">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h4 className="font-medium mb-1">Get Consultation</h4>
              <p className="text-sm text-gray-600">Connect with doctor and receive care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HealthConsultation;
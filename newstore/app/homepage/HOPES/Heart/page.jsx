import React from 'react';
// import ProductSlider from '@/components/ProductSlider';
import { CalendarOutlined, DownloadOutlined } from '@ant-design/icons';
import OurSegment from '../OurSegment';
import ProductSlider from '../ProductSlider';
import ReviewComponent from '../ReviewComponent';
import Image from 'next/image';
import Link from 'next/link';

const HeartPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-[#FDE7D4] text-center py-20 md:py-32">
                <h1 className="text-3xl md:text-5xl md:pt-12 font-bold text-gray-500">Healthy Heart Happy Life with <span className="text-red-500">Cardioveda</span></h1>
            </section>

            {/* Our Segment Section */}
            <section className="py-4">
                <h2 className="text-2xl md:text-4xl font-semibold px-6 mb-2 md:mb-8 text-green-600 text-center">Our Segments</h2>
                <OurSegment parentId={295} />
            </section>

            {/* Image Banner Section--Mobile */}
            <section className="py-4 md:hidden">
                <Image
                    src="/images/imageBox/Cardioveda_H.png"
                    alt="Heart Care Banner"
                    className="w-full h-30 object-cover"
                    width={800}
                    height={240}
                    layout="intrinsic"
                />
            </section>

            {/* Image Banner Section--Desktop */}
            <section className="py-4 hidden md:block">
                <Image
                    src="/images/imageBox/banner/BKCardio_Banner.jpg"
                    alt="Heart Care Banner"
                    className="w-full h-30 object-cover"
                    width={800}
                    height={120}
                    layout="intrinsic"
                />
            </section>

            {/* Product Section */}
            <section className="py-4">
                <h2 className="text-2xl md:text-4xl text-center font-semibold px-6 mb-2 md:mb-8 text-green-600">Our Products</h2>
                <ProductSlider categoryId={430} />
            </section>

            {/* Diet Chart Section */}
            <section className="hidden md:block py-20 text-center">
                <Image
                    src="/images/imageBox/hopes/Diet-Banner-Heart.png"
                    alt="Diet Chart Banner"
                    width={800}
                    height={400}
                    className="w-full h-full md:h-80 object-cover"
                />
                <a 
                    href="/files/heart-care-diet-chart.pdf" download 
                    className="text-xl py-3 bg-green-400 text-bold block text-white hover:bg-green-500 transition"
                    > Download Heart Care Diet Chart <DownloadOutlined />
                </a>
            </section>

            <section className="py-16 text-center md:hidden">
                <Image
                    src="/images/imageBox/CardioDietChartBanner.png"
                    alt="Diet Chart Banner"
                    width={500}
                    height={300}
                    className="w-full h-30 md:h-60 object-cover"
                />
                <a 
                    href="/files/heart-care-diet-chart.pdf" download 
                    className="text-xl py-3 bg-green-400 text-bold block text-white hover:bg-green-500 transition"
                    > Download Heart Care Diet Chart <DownloadOutlined />
                </a>
            </section>
            

            <section className="py-4 md:hidden relative">
                <Image
                    src="/images/imageBox/3D-doctor-with-mask.png"
                    alt="Heart Care Second Banner"
                    width={500}
                    height={300}
                    className="w-full h-30 object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 text-center bg-gradient-to-t from-black/50 to-transparent">
                    <h3 className="text-green-700 text-3xl font-bold mb-10">Consult With Expert</h3>
                     <Link href="/HealthConsultation" passHref>
                    <button className="bg-green-500 text-white py-2 px-6 rounded-lg">Book Appointment</button>
                    </Link>
                </div>
            </section>

            {/* Consult Section */}
            <div className="w-full px-4 md:px-6 py-12">
                <ConsultSection />
            </div>

            {/* Product Section */}
            <section className="py-4">
                <h2 className="text-2xl md:text-4xl text-center font-semibold px-6 mb-2 md:mb-8 text-green-600">Our Heart care Packages</h2>
                <ProductSlider categoryId={440} />
            </section>

            {/* Third Image Banner Section */}
            <section className="py-4 md:hidden">
                <Image
                    src="/images/imageBox/Book now banner_H.png"
                    alt="Heart Care Second Banner"
                    width={500}
                    height={300}
                    className="w-full h-30 object-cover"
                />
            </section>

            {/* Product Section */}
            <section className="py-4">
                <ReviewComponent />
            </section>

            <section className="py-8 md:py-12 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-r from-sky-500 to-sky-600 rounded-xl shadow-xl p-6 md:p-8">
                    {/* Section Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-12">
                        Why Choose Arogyabharat?
                    </h2>
                    
                    {/* Benefits Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6">
                        {/* 0 Side Effect - Mobile: col-span-1, Desktop: col-span-1 row-span-1 */}
                        <div className="bg-white rounded-xl shadow-md flex items-center justify-center p-4 md:p-6 text-center hover:transform hover:-translate-y-1 transition-transform duration-300">
                        <div>
                            <p className="font-semibold text-sm md:text-base lg:text-lg">0 Side Effect</p>
                        </div>
                        </div>

                        {/* 45 Years of Experience - Mobile: col-span-1, Desktop: col-span-1 row-span-1 */}
                        <div className="bg-white rounded-xl shadow-md flex items-center justify-center p-4 md:p-6 text-center hover:transform hover:-translate-y-1 transition-transform duration-300">
                        <div>
                            <p className="font-semibold text-sm md:text-base lg:text-lg">45 Years of Experience</p>
                        </div>
                        </div>

                        {/* 6 Lakh+ Happy Patients - Mobile: col-span-2, Desktop: col-span-1 row-span-2 */}
                        <div className="bg-white rounded-xl shadow-md flex items-center justify-center p-4 md:p-6 text-center row-span-1 md:row-span-2 col-span-2 md:col-span-1 hover:transform hover:-translate-y-1 transition-transform duration-300">
                        <div>
                            <p className="font-semibold text-base md:text-xl lg:text-2xl">6 Lakh+ Happy Patients</p>
                        </div>
                        </div>

                        {/* Bina Surgery Prakritik Samadhan - Mobile: col-span-2, Desktop: col-span-2 row-span-1 */}
                        <div className="bg-white rounded-xl shadow-md flex items-center justify-center p-4 md:p-6 text-center col-span-2 hover:transform hover:-translate-y-1 transition-transform duration-300">
                        <div>
                            <p className="font-semibold text-base md:text-xl lg:text-2xl">बिना सर्जरी प्राकृतिक समाधान</p>
                            <p className="text-gray-600 text-sm md:text-base mt-2">Natural Solution Without Surgery</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </div>
    );
}



const ConsultSection = () => (
  <div className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg hidden md:block">
    <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 md:p-10">
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Text Content - Always first in DOM */}
        <div className="order-1 md:order-none text-center md:text-left mb-6 md:mb-0 md:mr-8">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-3">
            Consult With Our Experts
          </h2>
          <p className="text-green-100 mb-6 md:mb-4 max-w-lg mx-auto md:mx-0">
            Get personalized treatment plans from experienced doctors specialized in various fields
          </p>
          
          {/* Desktop Button - Hidden on mobile */}
            <Link href="/HealthConsultation" passHref>
          <button className="hidden md:flex bg-white text-green-600 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-green-50 transition-colors duration-300 items-center gap-2">
            <CalendarOutlined /> Book Appointment
          </button>
          </Link>
        </div>

        {/* Image and Mobile Button Container */}
        <div className="order-3 md:order-none w-full md:w-auto flex flex-col items-center">
          {/* Doctor Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 md:mb-0">
            <Image
              src="/images/imageBox/icons/doctor.png"
              alt="Doctor"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Mobile Button - Hidden on desktop */}
          
          <button className="md:hidden w-full max-w-xs bg-white text-green-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-green-50 transition-colors duration-300 flex items-center justify-center gap-2">
            <CalendarOutlined /> Book Appointment
          </button>
        </div>
      </div>
    </div>
  </div>
);


export default HeartPage;
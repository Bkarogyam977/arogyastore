'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';


function ProductDealership() {


  return (
    <>
        {/* Video Banner Section */}
        <section className="relative w-full overflow-hidden">
          <video autoPlay muted loop playsInline className="w-full object-cover h-[auto] sm:h-[500px]">
            <source src="/images/videos/full_franchise.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-teal-400 text-white text-base sm:text-2xl rounded-lg shadow-lg transition hover:bg-[#5c291a]">
            Apply Now
          </button>
        </section>


        {/* Franchise Section */}
        <section className="container mx-auto p-8 text-left md:px-16">
          <div className="flex items-center justify-center mb-8">
            <span className="flex-grow border-t border-gray-300 mx-4"></span>
            <h1 className="text-xl sm:text-3xl text-brown-600 font-semibold">
                ArogyaBharat Product Dealership
            </h1>
            <span className="flex-grow border-t border-gray-300 mx-4"></span>
          </div>
          <div className="bg-gray p-2 sm:p-6 rounded-lg shadow-lg">
            <p class="text-base sm:text-lg leading-relaxed p-4">
                ArogyaBharat offers an extensive range of premium Ayurvedic products designed to promote holistic health and well-being. 
                Our products are crafted using the perfect blend of traditional Ayurvedic wisdom and modern scientific research, ensuring high efficacy, safety, and quality. 
                With over 300 classical formulations and 150 patented products, ArogyaBharat provides solutions for a variety of health needs, catering to diverse customer requirements
            </p>
          </div>
        </section>

        
        <section class="bg-gradient-to-b from-white to-[#f8f4f4] py-20 md:px-16">
            <div class="container mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                
                <div class="bg-gradient-to-r from-teal-500 to-teal-500 py-10 px-6 sm:px-12 text-center text-white">
                    <h2 class="text-3xl md:text-4xl font-extrabold">Unlock Success with ArogyaBharat</h2>
                    <p class="mt-4 text-lg md:text-xl">
                        Join a trusted name in authentic Ayurveda and wellness as a proud Product Dealer.
                    </p>
                </div>
                
                <div class="px-8 py-12 md:py-16 text-gray-700">
                    <h3 class="text-2xl font-semibold text-center text-teal-600 mb-10">Why Choose ArogyaBharat for Product Dealership?</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div class="bg-[#f1e8e8] rounded-lg p-6 shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
                            <h4 class="text-xl font-bold text-teal-600">Established Brand Recognition</h4>
                            <p class="mt-2">ArogyaBharat is known worldwide for authenticity, quality, and dedication to Ayurveda.</p>
                        </div>
                        
                        <div class="bg-[#f1e8e8] rounded-lg p-6 shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
                            <h4 class="text-xl font-bold text-teal-600">Diverse Product Portfolio</h4>
                            <p class="mt-2">Gain access to a vast array of Ayurvedic products, catering to a broad range of health needs.</p>
                        </div>
                        
                        <div class="bg-[#f1e8e8] rounded-lg p-6 shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
                            <h4 class="text-xl font-bold text-teal-600">Quality Assurance</h4>
                            <p class="mt-2">Every product meets high standards, supported by GMP & ISO certification for quality you can trust.</p>
                        </div>
                        
                        <div class="bg-[#f1e8e8] rounded-lg p-6 shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
                            <h4 class="text-xl font-bold text-teal-600">Comprehensive Training</h4>
                            <p class="mt-2">Receive thorough training on product knowledge and effective sales strategies.</p>
                        </div>
                        
                        <div class="bg-[#f1e8e8] rounded-lg p-6 shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
                            <h4 class="text-xl font-bold text-teal-600">Marketing & Promotional Support</h4>
                            <p class="mt-2">Access extensive marketing materials and support to enhance visibility and sales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <div class="container mx-auto bg-[#f8f4f4] p-8 md:px-16">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Key Features of ArogyaBharat Products</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                <div class="bg-white shadow-lg rounded-lg">
                    <div class="bg-green-600 p-4 rounded-t-lg">
                        <h3 class="text-lg font-semibold text-white">Authenticity</h3>
                    </div>
                    <div class="p-4">
                        <p class="text-gray-600 text-sm">
                            Every product is based on time-tested Ayurvedic principles and recipes derived from ancient scriptures.
                        </p>
                    </div>
                </div>

                <div class="bg-white shadow-lg rounded-lg">
                    <div class="bg-green-600 p-4 rounded-t-lg">
                        <h3 class="text-lg font-semibold text-white">Scientific Backing</h3>
                    </div>
                    <div class="p-4">
                        <p class="text-gray-600 text-sm">
                            Products are developed after rigorous clinical trials to ensure their effectiveness.
                        </p>
                    </div>
                </div>

                <div class="bg-white shadow-lg rounded-lg">
                    <div class="bg-green-600 p-4 rounded-t-lg">
                        <h3 class="text-lg font-semibold text-white">Quality Assurance</h3>
                    </div>
                    <div class="p-4">
                        <p class="text-gray-600 text-sm">
                            Manufactured in GMP-certified and ISO-compliant facilities to meet global standards.
                        </p>
                    </div>
                </div>

                <div class="bg-white shadow-lg rounded-lg">
                    <div class="bg-green-600 p-4 rounded-t-lg">
                        <h3 class="text-lg font-semibold text-white">Natural Ingredients</h3>
                    </div>
                    <div class="p-4">
                        <p class="text-gray-600 text-sm">
                            Only pure and natural herbs are used, sourced from trusted suppliers.
                        </p>
                    </div>
                </div>

                <div class="bg-white shadow-lg rounded-lg">
                    <div class="bg-green-600 p-4 rounded-t-lg">
                        <h3 class="text-lg font-semibold text-white">No Harmful Chemicals</h3>
                    </div>
                    <div class="p-4">
                        <p class="text-gray-600 text-sm">
                            Free from parabens, sulfates, and synthetic additives.
                        </p>
                    </div>
                </div>

                <div class="bg-white shadow-lg rounded-lg">
                    <div class="bg-green-600 p-4 rounded-t-lg">
                        <h3 class="text-lg font-semibold text-white">EcoFriendly Packages</h3>
                    </div>
                    <div class="p-4">
                        <p class="text-gray-600 text-sm">
                            Committed to sustainable practices with biodegradable and recyclable materials.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        
        {/* Services Section */}
        <section className="bg-teal-500 py-12 px-4 md:px-16">
          <div className="container mx-auto flex flex-wrap items-center justify-center text-center md:text-left">
            <div className="w-full md:w-7/12 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Services of ArogyaBharat Ayurved Arogya Point</h2>
              <ul className="list-disc pl-8 space-y-3 text-xl">
                <li>Ayurvedic Consultation</li>
                <li>Specialized Treatment for Kidney and Other Diseases</li>
                <li>Diet Plan with Expert Dietician Consultation</li>
                <li>Ayurveda Patient Product</li>
                <li>Day Care Therapy</li>
                <li>Complete Food Range for Kidney Patients</li>
              </ul>
            </div>
            <div className="w-full md:w-5/12">
              <Image
                src="/images/imageBox/beter_treatment.jpg"
                className="rounded-lg w-4/5 mx-auto h-auto"
                alt="Doctor"
                width={300}
                height={200}
              />
            </div>
          </div>
        </section>


        {/* Product Dealership Testimonial Section */}
        <section className="bg-gray-100 py-12" id="dealership-testimonials">
            <div className="container mx-auto px-4 md:px-16">
                {/* Section Header */}
                <div className="text-center mb-8">
                <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                    What Our Product Dealers Say About <span className="italic text-green-600">ArogyaBharat</span>
                </h2>
                </div>

                {/* Testimonial Cards */}
                <div className="flex gap-6 overflow-x-auto pb-4">
                {/* Card 1 */}
                <div className="bg-green-200 rounded-lg shadow-lg p-6 flex-shrink-0 w-80">
                    <div className="flex items-center mb-4">
                    {/* <img
                        src="/img/dealer_partner_1.jpg"
                        alt="Manoj Tiwari, Uttar Pradesh"
                        className="w-12 h-12 rounded-full object-cover"
                    /> */}
                    <div className="ml-4">
                        <h5 className="text-lg font-bold text-gray-800">Manoj Tiwari</h5>
                        <p className="text-sm text-gray-600">Uttar Pradesh</p>
                    </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                    “Being a ArogyaBharat dealer has been rewarding. The high demand for their products and strong brand value has helped me grow my business in a short span of time.”
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-yellow-200 rounded-lg shadow-lg p-6 flex-shrink-0 w-80">
                    <div className="flex items-center mb-4">
                    {/* <img
                        src="/img/dealer_partner_2.jpg"
                        alt="Preeti Shah, Gujarat"
                        className="w-12 h-12 rounded-full object-cover"
                    /> */}
                    <div className="ml-4">
                        <h5 className="text-lg font-bold text-gray-800">Preeti Shah</h5>
                        <p className="text-sm text-gray-600">Gujarat</p>
                    </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                    “The Ayurvedic products by ArogyaBharat are top-notch and loved by customers. Their support team ensured I had everything I needed to establish a strong dealership in my area.”
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-green-200 rounded-lg shadow-lg p-6 flex-shrink-0 w-80">
                    <div className="flex items-center mb-4">
                    {/* <img
                        src="/img/dealer_partner_3.jpg"
                        alt="Rohit Mishra, Maharashtra"
                        className="w-12 h-12 rounded-full object-cover"
                    /> */}
                    <div className="ml-4">
                        <h5 className="text-lg font-bold text-gray-800">Rohit Mishra</h5>
                        <p className="text-sm text-gray-600">Maharashtra</p>
                    </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                    “The partnership with ArogyaBharat has helped me create a profitable business. Their Ayurvedic products are trusted, and customers keep coming back for more.”
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-yellow-200 rounded-lg shadow-lg p-6 flex-shrink-0 w-80">
                    <div className="flex items-center mb-4">
                    {/* <img
                        src="/img/dealer_partner_4.jpg"
                        alt="Snehal Patil, Karnataka"
                        className="w-12 h-12 rounded-full object-cover"
                    /> */}
                    <div className="ml-4">
                        <h5 className="text-lg font-bold text-gray-800">Snehal Patil</h5>
                        <p className="text-sm text-gray-600">Karnataka</p>
                    </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                    “ArogyaBharat’s dealership program provided me with high-quality Ayurvedic products that practically sell themselves. The team’s guidance and prompt support make this partnership a success.”
                    </p>
                </div>
                </div>
            </div>
        </section>


        {/* product-categories-sectiom */}
        <section className="pt-16 pb-24 bg-gray-100 md:px-12">
            <div className="container mx-auto px-4">
                {/* Title with Divider */}
                <div className="flex items-center justify-center mb-12">
                <span className="flex-grow border-t border-gray-300 mx-4"></span>
                <h2 className="text-3xl font-semibold text-brown-700 mx-4">Product Category</h2>
                <span className="flex-grow border-t border-gray-300 mx-4"></span>
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300">
                    <Image 
                    className="w-full h-76 object-cover"
                    src="/images/imageBox/Brow-848x388.jpg"
                    alt="Immunity"
                    width={848}
                    height={388}
                    />
                    <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-700 mb-2">
                        <Link href="#" className="text-blue-500 font-semibold hover:text-blue-600">
                            Immunity Products
                        </Link>
                    </h4>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300">
                    <Image 
                    className="w-full h-76 object-cover"
                    src="/images/imageBox/beauty-products1.png"
                    alt="Beauty Products"
                    width={848}
                    height={388}
                    />
                    <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-700 mb-2">
                        <Link href="https://arogyabharat.store/index.php?route=product/product&path=104_128&product_id=500"
                            className="text-blue-500 hover:text-blue-600"
                        >Beauty Products
                        </Link>
                    </h4>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300">
                    <Image 
                    className="w-full h-76 object-cover"
                    src="/images/imageBox/patent medicines.webp"
                    alt="Patient Medicine"
                    width={848}
                    height={388}
                    />
                    <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-700 mb-2">
                        <Link href="https://arogyabharat.store/index.php?route=product/product&product_id=297"
                            className="text-blue-500 hover:text-blue-600"> Patient Medicine
                        </Link>
                    </h4>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300">
                    <Image 
                    className="w-full h-76 object-cover"
                    src="/images/imageBox/Helth and wellness.webp"
                    alt="Health And Wellness"
                    width={848}
                    height={388}
                    />
                    <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-700 mb-2">
                        <Link href="https://arogyabharat.store/index.php?route=product/product&product_id=237"
                            className="text-blue-500 hover:text-blue-600">Health And Wellness
                        </Link>
                    </h4>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300">
                    <Image 
                    className="w-full h-76 object-cover"
                    src="/images/imageBox/FOOD PRoduct.webp"
                    alt="Food Products"
                    width={848}
                    height={388}
                    />
                    <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-700 mb-2">
                        <Link href="https://arogyabharat.store/orgenic%20food?product_id=364" 
                            className="text-blue-500 hover:text-blue-600">Food Products
                        </Link>
                    </h4>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300">
                    <Image 
                    className="w-full h-76 object-cover"
                    src="/images/imageBox/NMO-848x388.jpg"
                    alt="OFFER ZONE"
                    width={848}
                    height={388}
                    />
                    <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-700 mb-2">
                        <Link href="https://arogyabharat.store/orgenic%20food?product_id=364" 
                            className="text-blue-500 hover:text-blue-600">OFFER ZONE
                        </Link>
                    </h4>                    
                    </div>
                </div>
                </div>
            </div>
        </section>


        {/* business-opportunity */}
        <section className="pt-12 pb-16 bg-gray-50 md:px-16">
            <div className="container mx-auto">
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Clinic Franchise */}
                <li>
                    <div className="li-innr rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Link href="/business-opportunity/clinic-franchise">
                        <div className="img-grp flex justify-center mb-4">
                        <Image
                            className="rounded-lg w-full h-60 object-cover"
                            src="/images/imageBox/clinic_franchise-img.png" alt="Clinic Franchise" width={400} height={240}
                        />
                        </div>
                    </Link>
                    <div className="text-center">
                        <Link href="/business-opportunity/clinic_franchise"
                        className="text-lg font-semibold bg-gray-200 py-2 px-6 rounded-md shadow-sm inline-block mb-3 hover:bg-gray-300 transition"
                        > Clinic Arogya Hub
                        </Link>
                        <button type="button"
                            className="knowmore-link bg-blue-500 text-white py-2 px-6 rounded-md shadow-sm inline-block hover:bg-blue-600 transition"
                        > Apply Now
                        </button>
                    </div>
                    </div>
                </li>

                {/* Product Dealership */}
                <li>
                    <div className="li-innr rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Link href="/business-opportunity/product-dealership">
                        <div className="img-grp flex justify-center mb-4">
                        <Image
                            className="rounded-lg w-full h-60 object-cover" src="/images/imageBox/product_dealership_baner.jpeg"
                            alt="Product Dealership" width={400} height={240}
                        />
                        </div>
                    </Link>
                    <div className="text-center">
                        <Link href="/business-opportunity/product_dealership"
                        className="text-lg font-semibold bg-gray-200 py-2 px-6 rounded-md shadow-sm inline-block mb-3 hover:bg-gray-300 transition"
                        > Product Dealership
                        </Link>
                        <button type="button"
                        className="knowmore-link bg-blue-500 text-white py-2 px-6 rounded-md shadow-sm inline-block hover:bg-blue-600 transition"
                        > Apply Now
                        </button>
                    </div>
                    </div>
                </li>

                {/* Micro Franchise */}
                <li>
                    <div className="li-innr rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Link href="/business-opportunity/micro-clinic-franchise">
                            <div className="img-grp flex justify-center mb-4">
                            <Image className="rounded-lg w-full h-60 object-cover"
                                src="/images/imageBox/microfranchises.jpeg" alt="Micro Franchise" width={400} height={240}
                            />
                            </div>
                        </Link>
                        <div className="text-center">
                            <Link href="/business-opportunity/micro_clinic_franchise"
                            className="text-lg font-semibold bg-gray-200 py-2 px-6 rounded-md shadow-sm inline-block mb-3 hover:bg-gray-300 transition"
                            > Micro Arogya Hub
                            </Link>
                            <button type="button"
                                className="knowmore-link bg-blue-500 text-white py-2 px-6 rounded-md shadow-sm inline-block hover:bg-blue-600 transition"
                            > Apply Now
                            </button>
                        </div>
                    </div>
                </li>
                </ul>
            </div>
        </section>


        {/* Contact Section */}
        <footer className="bg-teal-400 text-white py-10 md:px-4">
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between px-6 lg:px-12 space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="text-center lg:text-left max-w-lg">
              <h2 className="text-3xl font-semibold mb-2">Contact Dr. BK Chaurasia</h2>
              <p>Got questions about partnering with ArogyaBharat? We’re here to help.</p>
            </div>
            <div className="space-y-4 text-center lg:text-left">
              <a href="tel:8081222333" className="flex items-center justify-center lg:justify-start space-x-3">
                <Image src="/images/imageBox/call.png" alt="Call" width={24} height={24} />
                <span>+91 8081222333</span>
              </a>
              <a href="mailto:doctor@bkarogyam.com" className="flex items-center justify-center lg:justify-start space-x-3">
                <Image src="/images/imageBox/email.png" alt="Email" width={24} height={24} />
                <span>doctor@bkarogyam.com</span>
              </a>
            </div>
          </div>
        </footer>
    </>
  );
}


export default ProductDealership;
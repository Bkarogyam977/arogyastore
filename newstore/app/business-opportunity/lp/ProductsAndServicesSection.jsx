import React from 'react';
import { GiHealthNormal } from 'react-icons/gi';
import { FaHeart, FaWeight, FaSyringe, FaLeaf, FaDumbbell, FaSpa, FaBone } from 'react-icons/fa';
import Image from 'next/image'; // Assuming Next.js for Image component


const coreOfferings = [
    {
        title: "Advanced Telehealth Platform (Arogya Point)",
        description: "Seamlessly connect patients with doctors through our intuitive Arogya Point. Empowering virtual consultations, digital prescriptions, and efficient patient management for modern healthcare delivery.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m1.5-1.5L15 12m0 0l-3.75 3.75M15 12H9m1.5 0h-1.5m-1.5 0H7.5M12 21a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
        ),
        learnMoreLink: "/offerings/telehealth-platform",
        gradient: "from-blue-50 to-blue-100",
        iconBg: "bg-blue-100"
    },
    {
        title: "Premium Ayurvedic Wellness Products",
        description: "Curated range of high-quality, authentic Ayurvedic products formulated for holistic wellness, preventive care, and natural healing. Expand your portfolio with trusted, in-demand health solutions.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15M12 12a3 3 0 110-6 3 3 0 010 6zm0 0a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
        ),
        learnMoreLink: "/offerings/ayurvedic-products",
        gradient: "from-green-50 to-green-100",
        iconBg: "bg-green-100"
    },
    {
        title: "Integrated Diagnostic Services",
        description: "Provide convenient access to certified diagnostic and lab services for your clients. Seamlessly connect them with accurate testing, enhancing your Arogya Point's comprehensive care capabilities.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-red-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12.75l-7.5 7.5-7.5-7.5m15-6l-7.5 7.5L4.5 6.75" />
            </svg>
        ),
        learnMoreLink: "/offerings/diagnostic-services",
        gradient: "from-red-50 to-red-100",
        iconBg: "bg-red-100"
    },
    {
        title: "Community Health & Wellness Programs",
        description: "Participate in and lead local health camps, awareness drives, and preventive initiatives. Make a tangible difference in community health while building brand visibility and trust.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-purple-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 01-.491 6.347A48.972 48.972 0 013 16.5c0-1.04.113-2.053.325-3.046m12.969 1.816a60.472 60.472 0 00-6.107-1.187m8.05-4.927s1.5 2.5 1.5 5.5s-1.5 2.5-1.5 2.5M12 12a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
        ),
        learnMoreLink: "/offerings/community-programs",
        gradient: "from-purple-50 to-purple-100",
        iconBg: "bg-purple-100"
    }
];


export default function ProductsAndServicesSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                        Our Core Offerings: Driving Health & Growth in Varanasi
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto">
                        Arogya Bharat provides a robust suite of **products and services**, meticulously designed to meet the evolving healthcare needs of your community. Partner with us to deliver unparalleled value and accelerate your business&apos;s success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coreOfferings.map((item, index) => (
                        <div
                            key={index}
                            className={`relative bg-gradient-to-br ${item.gradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center border border-gray-100`}
                        >
                            {/* Icon with subtle background circle */}
                            <div className={`w-20 h-20 mb-6 rounded-full flex items-center justify-center ${item.iconBg} bg-opacity-75`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{item.title}</h3>
                            <p className="text-gray-700 text-sm mb-6 flex-grow">{item.description}</p>
                            {/* <a
                                href={item.learnMoreLink}
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200"
                            >
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a> */}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}


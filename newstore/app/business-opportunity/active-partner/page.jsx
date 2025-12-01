'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { Card, Table,Steps   } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import {Modal, Form, Input, Select, Button } from 'antd';
import axios from 'axios';
import TrainingSupportSection from '../TrainingSupportSection';
import AdvisorSection from './AdvisorSection';

const { Step } = Steps;
const { Option } = Select;

// Apply Now Modal Component
const ApplyNowModal = ({ visible, onCancel, onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSubmit(values);
    } catch (error) {
      console.error('Validation Failed:', error);
    }
  };

  return (
    <Modal
      title="Apply Now"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Submit
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          name="mobile"
          label="Mobile Number"
          rules={[{ required: true, message: 'Please enter your mobile number' }]}
        >
          <Input placeholder="Enter your mobile number" />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          initialValue="Associate Partner"
        >
          <Select disabled>
            <Option value="Associate Partner">Associate Partner</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};


function AssociatePartner() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSubmit = async (values) => {
        try {
        const response = await axios.post('https://main.bkarogyam.com/bkapienquiry/', values);
        console.log('API Response:', response.data);
        setIsModalVisible(false);
        alert('Application submitted successfully!');
        } catch (error) {
        console.error('API Error:', error);
        alert('Failed to submit application. Please try again.');
        }
    };


    const benefits = [
        "Startup Arogya Hub Kit",
        "Product Catalogue",
        "Micro Arogya Hub Decor Plan & Layout Guidelines",
        "Owner Training & Staff Training",
        "Doctor Training & Management Guidelines",
        "Day-to-Day Maintenance Planner",
        "Online Nation-Level Digital Branding Integration",
        "Arogya Hub License for 2 Years",
        "Arogya Talk App",
        "ERP Software",
        "Online Promotion Guidelines",
        "Arogya Hub Helpline Support",
    ];

    const pricingData = [
        { key: "1", description: "Average Sale", amount: "2000/-" },
        { key: "2", description: "50 Customers (20% Margin)", amount: "100000/- Sale" },
        { key: "3", description: "100 Customers (30%+ Margin)", amount: "200000/- Sale" },
        { key: "4", description: "200 Customers (40% Margin)", amount: "400000/- Sale" },
    ];

    return (
        <>
            {/* Video Banner Section */}
            <section className="relative w-full overflow-hidden">
            <video autoPlay muted loop playsInline className="w-full object-cover h-[auto] sm:h-[500px]">
                <source src="/images/videos/full_franchise.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button
              onClick={showModal}
              className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-teal-400 text-white text-base sm:text-2xl rounded-lg shadow-lg transition hover:bg-[#5c291a]"
            >
              Apply Now
            </button>
            </section>

            {/* Apply Now Modal */}
            <ApplyNowModal visible={isModalVisible} onCancel={handleCancel} onSubmit={handleSubmit} />


            {/* Associate Section - Modern Redesign */}
            <AdvisorSection/>


            {/* Strength & Quality  */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-3">
                    OUR DIFFERENTIATORS
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    ArogyaBharat Advantage
                </h2>
                <div className="max-w-2xl mx-auto">
                    <p className="text-xl text-gray-600">
                    Where ancient Ayurvedic wisdom meets modern scientific validation
                    </p>
                </div>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {/* Strength Card */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-all duration-300"></div>
                    <div className="relative h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="pt-8 pb-6 px-8">
                        <div className="flex items-center mb-6">
                        <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 shadow-sm">
                            <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="ml-4 text-2xl font-bold text-gray-900">Our Core Strength</h3>
                        </div>
                        <p className="text-gray-600 mb-6 text-lg">
                        Four decades of pioneering Ayurvedic innovation and holistic healing
                        </p>
                        <ul className="space-y-4">
                        {[
                            "44+ years of formulation expertise",
                            "300+ classical Ayurvedic products",
                            "GMP & ISO certified manufacturing",
                            "Panchkarma, Naturopathy & Yoga specialists",
                            "Comprehensive kidney health solutions",
                            "Expert team of Ayurveda doctors"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                            <svg className="flex-shrink-0 h-5 w-5 text-teal-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                        <div className="flex items-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                            Heritage
                        </span>
                        <span className="ml-2 text-sm text-gray-500">Since 1979</span>
                        </div>
                    </div>
                    </div>
                </div>

                {/* USP Card */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-all duration-300"></div>
                    <div className="relative h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="pt-8 pb-6 px-8">
                        <div className="flex items-center mb-6">
                        <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 shadow-sm">
                            <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="ml-4 text-2xl font-bold text-gray-900">Quality & USP</h3>
                        </div>
                        <p className="text-gray-600 mb-6 text-lg">
                        Uncompromising standards in Ayurvedic product development
                        </p>
                        <ul className="space-y-4">
                        {[
                            "100% effective clinically-tested formulas",
                            "In-house production facilities",
                            "Pure vegetarian, no artificial additives",
                            "Scientifically validated efficacy",
                            "GMP & ISO certified processes",
                            "Integrated day care facilities"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                            <svg className="flex-shrink-0 h-5 w-5 text-teal-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                        <div className="flex items-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            Innovation
                        </span>
                        <span className="ml-2 text-sm text-gray-500">Evidence-based Ayurveda</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                    { value: "44+", label: "Years Experience" },
                    { value: "300+", label: "Ayurvedic Products" },
                    { value: "100%", label: "Natural Formulas" },
                    { value: "GMP", label: "Certified Quality" }
                ].map((stat, index) => (
                    <div key={index} className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                    <p className="text-4xl font-bold text-teal-600 mb-2">{stat.value}</p>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                    </div>
                ))}
                </div>
            </div>
            </section>

            <TrainingSupportSection />

            {/* Startup Kit Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                    <h2 className="text-3xl font-light text-gray-900 mb-4">
                        Your Advisor Startup Kit
                    </h2>
                    <div className="w-24 h-0.5 bg-teal-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to launch your Ayurvedic wellness business
                    </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {[
                        { image: "/images/imageBox/business/Business-Kit-Calender.png", name: "Premium Calender" },
                        { image: "/images/imageBox/business/Business-Kit-Cup.png", name: "Cup" },
                        { image: "/images/imageBox/business/Business-Kit-TShirt.png", name: "T-Shirt" },
                        { image: "/images/imageBox/business/Business-Kit-MapHolder.png", name: "Map Holder" },
                        { image: "/images/imageBox/business/Business-Kit-ScreenHolder.png", name: "Screen Holder" },
                        { image: "/images/imageBox/business/Business-Kit-Diary.png", name: "Business Diary" },
                    ].map((item, index) => (
                        <div key={index} className="group text-center">
                        <div className="bg-gray-50 p-6 rounded-xl mb-3 transition-all duration-300 group-hover:bg-teal-50 group-hover:shadow-sm">
                            <div className="relative aspect-square w-full">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-contain rounded-xl"
                            />
                            </div>
                        </div>
                        <h3 className="font-medium text-gray-700">{item.name}</h3>
                        </div>
                    ))}
                    </div>
                </div>
            </section>


            {/* Onboarding Process */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium tracking-widest mb-4">
                        ONBOARDING PROCESS
                    </span>
                    <h2 className="text-4xl font-light text-gray-900 mb-4">
                        Simple <span className="font-medium">4-Step Partnership</span>
                    </h2>
                    <div className="w-20 h-0.5 bg-gray-300 mx-auto"></div>
                    </div>

                    {/* Process Timeline */}
                    <div className="relative">
                    {/* Progress line */}
                    <div className="hidden md:block absolute left-16 right-16 h-px bg-gray-200 top-1/2 transform -translate-y-1/2"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
                        {/* Phase 1 */}
                        <div className="relative z-10">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center mb-6 transition-all duration-300 hover:border-teal-500 hover:shadow-lg">
                            <span className="text-2xl font-light text-gray-700">01</span>
                            </div>
                            <div className="text-center px-4">
                            <h3 className="text-xl font-normal text-gray-900 mb-3">Arogya Hub Booking</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-2">
                                Submit application & complete e-Sign agreement
                            </p>
                            <p className="text-xs text-teal-600 font-medium">
                                PROCESSING TIME: 1-3 DAYS
                            </p>
                            </div>
                        </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="relative z-10 md:mt-16">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center mb-6 transition-all duration-300 hover:border-teal-500 hover:shadow-lg">
                            <span className="text-2xl font-light text-gray-700">02</span>
                            </div>
                            <div className="text-center px-4">
                            <h3 className="text-xl font-normal text-gray-900 mb-3">Initial Payment</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-2">
                                ₹20,000 deposit to activate partnership
                            </p>
                            <p className="text-xs text-teal-600 font-medium">
                                PROCESSING TIME: 3-4 DAYS
                            </p>
                            </div>
                        </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="relative z-10">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center mb-6 transition-all duration-300 hover:border-teal-500 hover:shadow-lg">
                            <span className="text-2xl font-light text-gray-700">03</span>
                            </div>
                            <div className="text-center px-4">
                            <h3 className="text-xl font-normal text-gray-900 mb-3">Material Dispatch</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-2">
                                Receive all materials & software access
                            </p>
                            <p className="text-xs text-teal-600 font-medium">
                                PROCESSING TIME: 5-7 DAYS
                            </p>
                            </div>
                        </div>
                        </div>

                        {/* Phase 4 */}
                        <div className="relative z-10 md:mt-16">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center mb-6 transition-all duration-300 hover:border-teal-500 hover:shadow-lg">
                            <span className="text-2xl font-light text-gray-700">04</span>
                            </div>
                            <div className="text-center px-4">
                            <h3 className="text-xl font-normal text-gray-900 mb-3">Ongoing Support</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-2">
                                Monthly monitoring & dedicated executive
                            </p>
                            <p className="text-xs text-teal-600 font-medium">
                                PROCESSING TIME: 1-2 DAYS
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Mobile indicators */}
                    <div className="md:hidden flex justify-center space-x-4 mt-8">
                        {[1, 2, 3, 4].map((step) => (
                        <div key={step} className="w-2 h-2 rounded-full bg-gray-300"></div>
                        ))}
                    </div>
                    </div>

                </div>
            </div>


            {/* Franchise Testimonial Section */}
            <section className="bg-gray-100 py-12" id="franchise-testimonials">
                <div className="container mx-auto px-4 md:px-16">
                    {/* Section Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                            What Our Arogya Hub Partners Say About <span className="italic text-green-600">ArogyaBharat</span>
                        </h2>
                    </div>

                    {/* Testimonial Cards */}
                    <div className="flex gap-6 overflow-x-auto pb-4">
                    {/* Card 1 */}
                    <div className="bg-green-200 rounded-lg shadow-lg p-6 flex-shrink-0 w-80">
                        <div className="flex items-center mb-4">
                        {/* <img
                            src="/img/franchise_partner_1.jpg"
                            alt="Ramesh Verma, Uttar Pradesh"
                            className="w-12 h-12 rounded-full object-cover"
                        /> */}
                        <div className="ml-4">
                            <h5 className="text-lg font-bold text-gray-800">Ramesh Verma</h5>
                            <p className="text-sm text-gray-600">Uttar Pradesh</p>
                        </div>
                        </div>
                        <p className="text-gray-700 text-sm">
                        “Partnering with ArogyaBharat has been a life-changing experience. The proven Ayurvedic treatments and support system helped me build a successful Arogya Point in my city. Patients trust the brand, and so do I!”
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-yellow-200 rounded-lg shadow-lg p-6 flex-shrink-0 w-80">
                        <div className="flex items-center mb-4">
                        {/* <img
                            src="/img/franchise_partner_2.jpg"
                            alt="Anita Singh, Maharashtra"
                            className="w-12 h-12 rounded-full object-cover"
                        /> */}
                        <div className="ml-4">
                            <h5 className="text-lg font-bold text-gray-800">Anita Singh</h5>
                            <p className="text-sm text-gray-600">Maharashtra</p>
                        </div>
                        </div>
                        <p className="text-gray-700 text-sm">
                        “Opening a ArogyaBharat Arogya Point in Maharashtra was the best decision I made. Their business model, training, and marketing support made the setup seamless, and the results are phenomenal.”
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-green-200 rounded-lg shadow-lg p-6 flex-shrink-0 w-80">
                        <div className="flex items-center mb-4">
                        {/* <img
                            src="/img/franchise_partner_3.jpg"
                            alt="Rahul Sharma, Gujarat"
                            className="w-12 h-12 rounded-full object-cover"
                        /> */}
                        <div className="ml-4">
                            <h5 className="text-lg font-bold text-gray-800">Rahul Sharma</h5>
                            <p className="text-sm text-gray-600">Gujarat</p>
                        </div>
                        </div>
                        <p className="text-gray-700 text-sm">
                        “ArogyaBharat`&apos;`s Arogya Point model provided me with everything I needed to start my Arogya Point. From operational guidance to marketing materials, their support has been exceptional.”
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-yellow-200 rounded-lg shadow-lg p-6 flex-shrink-0 w-80">
                        <div className="flex items-center mb-4">
                        {/* <img
                            src="/img/franchise_partner_4.jpg"
                            alt="Priya Das, West Bengal"
                            className="w-12 h-12 rounded-full object-cover"
                        /> */}
                        <div className="ml-4">
                            <h5 className="text-lg font-bold text-gray-800">Priya Das</h5>
                            <p className="text-sm text-gray-600">West Bengal</p>
                        </div>
                        </div>
                        <p className="text-gray-700 text-sm">
                        “Thanks to ArogyaBharat`&apos;`s proven reputation and excellent support system, my Arogya Point has become a trusted name in Ayurvedic treatment in my region. I highly recommend partnering with them.”
                        </p>
                    </div>
                    
                </div>
                </div>
            </section>


            <section className="bg-teal-600 py-16">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        {/* Content Section */}
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Who Can Join Our Network</h2>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                <ul className="space-y-4 text-teal-50">
                                    <li className="flex items-start gap-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-teal-300 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>
                                            BAMS Doctors, B-Pharmacy graduates, and Healthcare Professionals looking to establish their practice
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-teal-300 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>
                                            Existing Arogya Point/Hospitals wanting to add Ayurvedic services
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-teal-300 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>
                                            Entrepreneurs capable of setting up Ayurvedic healthcare infrastructure
                                        </span>
                                    </li>
                                </ul>
                                <p className="mt-6 text-teal-100 italic">
                                    Join ArogyaBharat to establish Ayurveda Clinic Arogya Hub, Wellness Centers, and Panchakarma Centres in prime locations, promoting traditional holistic healthcare.
                                </p>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <div className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-white/20">
                                <Image
                                    src="/images/imageBox/shakehand.jpg"
                                    className="w-full h-auto object-cover"
                                    alt="Healthcare professional partnership"
                                    width={600}
                                    height={400}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-teal-800/40 to-teal-500/20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <footer className="bg-teal-400 text-white py-10">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between px-6 lg:px-12 space-y-8 lg:space-y-0 lg:space-x-8">
                <div className="text-center lg:text-left max-w-lg">
                <h2 className="text-3xl font-semibold mb-2">Connect with ArogyaBharat</h2>
                <p>Got questions about partnering with ArogyaBharat? We are here to help.</p>
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

export default AssociatePartner;

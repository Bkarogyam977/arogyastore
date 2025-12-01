"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { Card, Table, Steps } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Modal, Form, Input, Select, Button } from "antd";
import axios from "axios";

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
      console.error("Validation Failed:", error);
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
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          name="mobile"
          label="Mobile Number"
          rules={[
            { required: true, message: "Please enter your mobile number" },
          ]}
        >
          <Input placeholder="Enter your mobile number" />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          initialValue="Micro Franchise/Clinic"
        >
          <Select disabled>
            <Option value="Micro Franchise/Clinic">
              Micro Arogya Hub/Clinic
            </Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

function MicroClinicFranchise() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://main.bkarogyam.com/bkapienquiry/",
        values
      );
      console.log("API Response:", response.data);
      setIsModalVisible(false);
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to submit application. Please try again.");
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
    {
      key: "2",
      description: "50 Customers (20% Margin)",
      amount: "100000/- Sale",
    },
    {
      key: "3",
      description: "100 Customers (30%+ Margin)",
      amount: "200000/- Sale",
    },
    {
      key: "4",
      description: "200 Customers (40% Margin)",
      amount: "400000/- Sale",
    },
  ];

  const kitItems = [
    "Diary + Pen + Pen Stand + Mobile Stand + Branding Cup",
    "3 Certificate Courses",
    "Adviser Application",
    "Arogya Talk App",
    "Center Setup Support",
    "Online Support",
  ];

  return (
    <>
      {/* Video Banner Section */}
      <section className="relative w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full object-cover h-[auto] sm:h-[500px]"
        >
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
      <ApplyNowModal
        visible={isModalVisible}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />

      {/* Franchise Section */}
      <section className="container mx-auto p-8 text-left px-4 md:px-16">
        <div className="flex items-center justify-center mb-8">
          <span className="flex-grow border-t border-gray-300 mx-4"></span>
          <h1 className="text-xl sm:text-3xl text-brown-600 font-semibold">
            ArogyaBharat Arogya Hub
          </h1>
          <span className="flex-grow border-t border-gray-300 mx-4"></span>
        </div>
        <div className="bg-gray p-2 sm:p-6 rounded-lg shadow-lg">
          <p className="text-base sm:text-lg leading-relaxed p-4">
            Start your own ArogyaBharat Arogya Hub and be part of an
            exceptional business model that’s designed to bring authentic
            Ayurvedic healing to every district headquarters and key cities
            across India and worldwide. ArogyaBharat is an established and
            trusted Ayurvedic brand in India, renowned for its expertise in
            Ayurveda-based clinical treatments. As part of our comprehensive
            Arogya Hub model, we offer a unique opportunity to run a
            Arogya Hub with support from our proven system of Ayurvedic
            treatments and product offerings.
          </p>
        </div>
      </section>

      <section>
        <div className="flex justify-center items-center py-10 bg-gray-50 px-4">
          <Card
            title="What You Get?"
            bordered={false}
            className="w-full max-w-7xl shadow-lg text-center rounded-lg bg-white"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-lg p-2 bg-gray-100 rounded-lg"
                >
                  <CheckCircleOutlined className="text-green-500" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <div className="flex justify-center items-center py-10 bg-gray-50 px-4">
        <Card
          title="Micro Arogya Hub E-Arogyam"
          bordered={false}
          className="w-full max-w-7xl shadow-lg rounded-lg bg-white"
        >
          <p className="text-lg font-semibold text-gray-700">
            Investment:{" "}
            <span className="text-green-600 font-bold">₹100,000/-</span>
            <span className="text-gray-500">
              {" "}
              (Includes ₹140,000/- Medicine, 10% Wallet Payment)
            </span>
          </p>

          {/* Sales & Margin Table */}
          <Table
            dataSource={pricingData}
            pagination={false}
            className="mt-4"
            columns={[
              {
                title: "Description",
                dataIndex: "description",
                key: "description",
              },
              {
                title: "Amount",
                dataIndex: "amount",
                key: "amount",
                align: "right",
              },
            ]}
          />

          {/* Kit Items */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Kit Items:</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
              {kitItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </Card>
      </div>

      <div className="flex justify-center items-center py-10 bg-gray-50 px-4">
        <Card
          title="Arogya Hub Application & Setup Process"
          bordered={false}
          className="w-full max-w-7xl shadow-lg rounded-lg bg-white p-6"
        >
          <Steps
            direction="vertical"
            size="large"
            current={4}
            className="text-gray-700"
          >
            <Step
              title="PHASE 01 - Arogya Hub Booking"
              description={
                <>
                  <p>
                    Deposit ₹5,000 in{" "}
                    <strong>B K Arogyam and Research Pvt Ltd</strong> account &
                    submit the application form.
                  </p>
                  <p>Legal agreement is completed via Aadhar e-Sign.</p>
                  <p className="font-semibold text-green-600">
                    ⏳ Time: 1-3 Days
                  </p>
                </>
              }
            />
            <Step
              title="PHASE 02 - Initial Installment & Setup Guidelines"
              description={
                <>
                  <p>
                    Pay ₹20,000 within 10 days of booking to prevent lapse of
                    Arogya Hub.
                  </p>
                  <p>Owner orientation & setup guidelines are provided.</p>
                  <p className="font-semibold text-green-600">
                    ⏳ Time: 3-4 Days
                  </p>
                </>
              }
            />
            <Step
              title="PHASE 03 - Material Dispatch & Software Access"
              description={
                <>
                  <p>
                    All materials are dispatched after full balance payment.
                  </p>
                  <p>Online Arogya Hub management software is provided.</p>
                  <p className="font-semibold text-green-600">
                    ⏳ Time: 5-7 Days
                  </p>
                </>
              }
            />
            <Step
              title="PHASE 04 - Inauguration & Ongoing Monitoring"
              description={
                <>
                  <p>Agreement period starts from the date of inauguration.</p>
                  <p>
                    Monthly monitoring & dedicated helpline executive assigned.
                  </p>
                  <p className="font-semibold text-green-600">
                    ⏳ Time: 1-2 Days
                  </p>
                </>
              }
            />
          </Steps>
        </Card>
      </div>

      {/* Services Section */}
      <section className="bg-teal-500 py-12 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-center text-center md:text-left px-4 md:px-16">
          <div className="w-full md:w-7/12 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">
              Services of ArogyaBharat Ayurved Arogya Point
            </h2>
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

      {/* <!-- Strength, USP & Quality Section --> */}
      <section class="bg-gradient-to-r from-teal-100 to-teal-50 py-16 md:px-16">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-teal-700">Why Choose Us</h2>
            <p class="text-gray-600 mt-4">
              Discover the core of our excellence and commitment to quality.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="absolute inset-0 w-2 bg-teal-600"></div>
              <div class="p-8">
                <div class="flex items-center mb-6">
                  <div class="w-14 h-14 flex justify-center items-center bg-orange-100 rounded-full">
                    <i class="fas fa-balance-scale fa-2x text-teal-700"></i>
                  </div>
                  <h3 class="text-2xl font-semibold text-teal-700 ml-4">
                    Our Strength
                  </h3>
                </div>
                <p class="text-gray-600 mb-6">
                  With over 44 years of experience, we bring unmatched expertise
                  in Ayurveda and holistic health.
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>44+ Years Experience in Formulation Development</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>Expert Team of Qualified Ayurveda Specialists</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>Panchkarma, Naturopathy, and Yoga Treatments</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>GMP & ISO Certified Manufacturing Unit</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>300+ Classical Ayurvedic Products</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>Comprehensive Kidney Health Food Range</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="absolute inset-0 w-2 bg-teal-600"></div>
              <div class="p-8">
                <div class="flex items-center mb-6">
                  <div class="w-14 h-14 flex justify-center items-center bg-orange-100 rounded-full">
                    <i class="fas fa-thumbs-up fa-2x text-teal-700"></i>
                  </div>
                  <h3 class="text-2xl font-semibold text-teal-700 ml-4">
                    Our USP & Quality
                  </h3>
                </div>
                <p class="text-gray-600 mb-6">
                  Delivering clinically-tested products with uncompromising
                  standards in Ayurveda.
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>100% Effective Medicines & Products</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>In-House Production Facilities</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>100% Vegetarian, No Artificial Additives</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>Clinically Proven Efficacy</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>GMP & ISO Certified Production</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>Day Care and Admit Facilities Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-500 py-12">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-wrap items-center justify-between">
            {/* Content Section */}
            <div className="w-full md:w-7/12 p-6 text-white">
              <h2 className="text-3xl font-semibold mb-4">
                Who Can Associate with Us:
              </h2>
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  To be a part of this exceptional Ayurveda Business Opportunity
                  – Ayurveda Clinic Arogya Hub & Panchkarma Centre, ArogyaBharat
                  invites individuals with backgrounds such as BAMS Doctors,
                  B-Pharmacy, Health Care Professionals, Clinics/Hospitals, or
                  any business owners capable of arranging Ayurveda Health Care
                  infrastructure. Join us to establish Ayurveda Clinic
                  Arogya Hub, Ayurveda Wellness Clinic, and Panchakrma Centre in
                  prime commercial/residential locations, contributing to the
                  promotion of traditional Ayurvedic practices and providing
                  holistic healthcare solutions. Embrace this unique opportunity
                  with ArogyaBharat and be a catalyst for a healthier world.
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-5/12 p-6">
              <Image
                src="/images/imageBox/shakehand.jpg"
                className="rounded-lg w-full h-auto"
                alt="doctor"
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Testimonial Section */}
      <section className="bg-gray-100 py-12" id="franchise-testimonials">
        <div className="container mx-auto px-4 md:px-16">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800">
              What Our Arogya Hub Partners Say About{" "}
              <span className="italic text-green-600">ArogyaBharat</span>
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
                  <h5 className="text-lg font-bold text-gray-800">
                    Ramesh Verma
                  </h5>
                  <p className="text-sm text-gray-600">Uttar Pradesh</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                “Partnering with ArogyaBharat has been a life-changing
                experience. The proven Ayurvedic treatments and support system
                helped me build a successful Arogya Point in my city. Patients trust
                the brand, and so do I!”
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
                  <h5 className="text-lg font-bold text-gray-800">
                    Anita Singh
                  </h5>
                  <p className="text-sm text-gray-600">Maharashtra</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                “Opening a ArogyaBharat Arogya Point in Maharashtra was the best
                decision I made. Their business model, training, and marketing
                support made the setup seamless, and the results are
                phenomenal.”
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
                  <h5 className="text-lg font-bold text-gray-800">
                    Rahul Sharma
                  </h5>
                  <p className="text-sm text-gray-600">Gujarat</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                “ArogyaBharat`&apos;`s Arogya Hub provided me with
                everything I needed to start my Arogya Point. From operational
                guidance to marketing materials, their support has been
                exceptional.”
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
                “Thanks to ArogyaBharat`&apos;`s proven reputation and excellent
                support system, my Arogya Point has become a trusted name in Ayurvedic
                treatment in my region. I highly recommend partnering with
                them.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-teal-400 text-white py-10">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between px-6 lg:px-12 space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="text-center lg:text-left max-w-lg">
            <h2 className="text-3xl font-semibold mb-2">
              Contact Dr. BK Chaurasia
            </h2>
            <p>
              Got questions about partnering with ArogyaBharat? We`&pos;`re here
              to help.
            </p>
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <a
              href="tel:8081222333"
              className="flex items-center justify-center lg:justify-start space-x-3"
            >
              <Image
                src="/images/imageBox/call.png"
                alt="Call"
                width={24}
                height={24}
              />
              <span>+91 8081222333</span>
            </a>
            <a
              href="mailto:doctor@bkarogyam.com"
              className="flex items-center justify-center lg:justify-start space-x-3"
            >
              <Image
                src="/images/imageBox/email.png"
                alt="Email"
                width={24}
                height={24}
              />
              <span>doctor@bkarogyam.com</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MicroClinicFranchise;

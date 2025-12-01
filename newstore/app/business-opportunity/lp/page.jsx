"use client"
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function DoctorpreneurPage() {
  const [activeTab, setActiveTab] = useState('challenges');

  return (
    <div className="bg-white">
      <Head>
        <title>Arogya Bharat - From Doctor to Doctorpreneur</title>
        <meta name="description" content="Transform your Ayurvedic practice with Arogya Bharat's Doctor Entrepreneur Program" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            From Doctor to <span className="text-yellow-300">Doctorpreneur</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Now Serve and Prosper with Arogya Bharat!
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            A revolutionary opportunity for Ayush doctors to transform their practice
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-colors">
            Join the Program
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              The <span className="text-green-600">Arogya Bharat</span> Initiative
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Spearheaded by B.K. Arogyam & Research Pvt. Ltd., this transformative endeavor aims to re-establish Ayurveda as India&apos;s primary healthcare choice. Built on <span className="font-semibold">&quot;43 years of reliability&quot;</span> and <span className="font-semibold">&quot;the power of AI,&quot;</span> our goal is to bring Ayurveda to every home.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                <h3 className="text-xl font-bold text-green-600 mb-2">43+ Years</h3>
                <p className="text-gray-600">Of Ayurvedic Excellence</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                <h3 className="text-xl font-bold text-green-600 mb-2">AI-Powered</h3>
                <p className="text-gray-600">Technology Platform</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                <h3 className="text-xl font-bold text-green-600 mb-2">Pan-India</h3>
                <p className="text-gray-600">Network of Doctors</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Challenges & Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Challenges */}
            <div className="md:w-1/2 bg-red-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Are You Facing These Challenges?
              </h2>
              <ul className="space-y-4">
                {[
                  "Low Margin Products: No profit, only hard work",
                  "Patient Retention Challenge: Patients visit once, then are not seen again",
                  "No Tech Support: No software, no system",
                  "Clinic Bound Growth: Future confined within four walls",
                  "Lack of Specialization: No distinct identity in the market",
                  "Lack of Visibility: Difficulty reaching wider patient base"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="md:w-1/2 bg-green-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Arogya Bharat&apos;s Solution
              </h2>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                The Doctor Entrepreneur Program
              </h3>
              <p className="text-gray-700 mb-6">
                Our <span className="font-bold">&quot;Associate Doctor Program&quot;</span> offers an integrated solution with <span className="font-bold">&quot;Integrated Digital Platform + Monopoly Products + Multiple Income Streams.&quot;</span>
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Three Core Pillars:
                </h4>
                <ol className="space-y-4">
                  {[
                    "Specialization: Build your unique identity",
                    "Technology: Digitize your practice",
                    "Business Mindset: Become a successful Doctorpreneur"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-green-100 text-green-600 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">{index + 1}</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Program Details Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            The Doctor Entrepreneur Program Details
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab('specialization')}
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${activeTab === 'specialization' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                Specialization
              </button>
              <button
                onClick={() => setActiveTab('technology')}
                className={`px-6 py-3 text-sm font-medium ${activeTab === 'technology' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                Technology
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${activeTab === 'business' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                Business Mindset
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-md p-8">
            {activeTab === 'specialization' && (
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Build Your Identity Through Specialization</h3>
                <p className="text-gray-600 mb-6">
                  90% of Ayurvedic doctors practice generally, creating a huge opportunity for specialization.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {[
                        "Choose high-demand specializations like Heart, Obesity, Pain, Kidney Disease, or Diabetes",
                        "Access exclusive research-based formulas under HOPES",
                        "Gain rapid recognition as a specialist",
                        "Develop a strong reputation in your chosen field"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3">Specialization Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Heart Care', 'Obesity', 'Pain Management', 'Kidney Disease', 'Diabetes', 'Skin Care', 'Women Health', 'Digestive Disorders'].map((item) => (
                        <span key={item} className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'technology' && (
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Digitize Your Practice with HOPES App</h3>
                <p className="text-gray-600 mb-6">
                  India&apos;s first AI-Integrated Ayurvedic Platform designed to streamline and expand your practice.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-3">
                      {[
                        "One-click online OPD for virtual consultations",
                        "Auto-generated prescriptions for efficiency",
                        "Comprehensive patient management system",
                        "Medicine recommendation across India",
                        "Pan-India recognition on Arogya Talk app/website",
                        "Potential to earn ₹1 lakh per month"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-64 h-96 border-4 border-gray-200 rounded-2xl overflow-hidden">
                      {/* Mock phone with app screenshot */}
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400">App Screenshot</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'business' && (
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Become a Successful Doctorpreneur</h3>
                <p className="text-gray-600 mb-6">
                  Transform into a Doctorpreneur - manage specialized products, services, and build your own teams.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Business Advantages:</h4>
                    <ul className="space-y-3">
                      {[
                        "Monopoly products with 50-55% retail margin (highest in segment)",
                        "Strong networking for sustainable high income",
                        "Time compounding concept for exponential growth",
                        "Multiple income streams beyond consultations",
                        "Team building and leadership opportunities"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3">Income Potential:</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Individual Practice:</p>
                        <p className="text-gray-600">₹20,000 - ₹80,000 from ₹2,00,000 sales</p>
                      </div>
                      <div>
                        <p className="font-medium">Team Practice (5 doctors):</p>
                        <p className="text-gray-600">₹50,000 from ₹10,00,000 team sales</p>
                      </div>
                      <div>
                        <p className="font-medium">Leadership Earnings:</p>
                        <p className="text-gray-600">2% of company turnover for top performers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Income Model Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Comprehensive Financial Model
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Product Margins & Direct Sales</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">1</span>
                  <div>
                    <p className="font-medium">40% to 60% margin on medicine sales</p>
                    <p className="text-gray-600">Earn ₹40,000 to ₹60,000 on ₹1,00,000 sales</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">2</span>
                  <div>
                    <p className="font-medium">15% to 20% special discount</p>
                    <p className="text-gray-600">On all products purchased</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Network & Team Incentives</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">1</span>
                  <div>
                    <p className="font-medium">Team Royalty</p>
                    <p className="text-gray-600">5% from Level 1, 3% from Level 2, 2% from Level 3, 1% from Level 4</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">2</span>
                  <div>
                    <p className="font-medium">Leadership Pool</p>
                    <p className="text-gray-600">2% of company&apos;s total turnover</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Illustrative Income Examples</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3">Individual Practice</h4>
                <p className="mb-2">100 patients → ₹2,00,000 sales</p>
                <p className="text-yellow-300 font-bold">Earnings: ₹20,000 - ₹80,000</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Team Practice (5 doctors)</h4>
                <p className="mb-2">₹10,00,000 team sales</p>
                <p className="text-yellow-300 font-bold">Earnings: ₹50,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Brands & Ecosystem
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['HOPES', 'BK Arogyam', 'BK Kidney Care', 'Arogya Bharat', 'Arogya Talk App'].map((brand) => (
              <div key={brand} className="bg-white p-6 rounded-xl shadow-md w-48 text-center">
                <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">{brand.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-800">{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
            
            <div className="bg-white bg-opacity-10 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">&quot;Ayurveda to Every Home!&quot;</h3>
              <ul className="space-y-3 text-left">
                {[
                  "Make Ayurvedic treatment simple and accessible to everyone",
                  "Reduce dependence on Allopathic medicines",
                  "Create a healthcare ecosystem focused on root cause treatment",
                  "Promote healthy living through Ayurvedic lifestyle"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">&quot;Healthy India, Prosperous India&quot;</h3>
              <ul className="space-y-3 text-left">
                {[
                  "Build a vast Ayurvedic ecosystem with thousands of doctors",
                  "Transform India's medical system with Ayurveda",
                  "Ensure healthcare services for every citizen",
                  "Generate millions of jobs in health and related sectors"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join Arogya Bharat today and become part of India&apos;s health revolution
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
                Apply Now
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full text-lg border-2 border-gray-300 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

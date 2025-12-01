// pages/b2b-partnership.tsx

"use client"
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';


export default function B2BPartnership() {
      const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        interest: 'Online Sales Model (20% Margin)'
      });
      const [loading, setLoading] = useState(false);
      const [isSuccess, setIsSuccess] = useState(false);


      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.mobile) {
          alert("Please fill in all fields");
          return;
        }

        setLoading(true);
        try {
          // Extract the sales model from the selected option
          const salesModel = formData.interest.includes('Online') ? 
            'Online Sales Model' : 
            formData.interest.includes('Bulk') ? 
            'Bulk Purchase Model' : 
            'Both Models';

          const leadData = {
            name: formData.name,
            mobile: formData.mobile,
            source: "Arogyabharat",
            lead_name: salesModel,
            // business: "B2B Partnership",
            hot: false,
            worm: false,
            cold: false
          };

          const response = await fetch('https://healdiway.bkarogyam.com/erp-api/funnel-lead/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(leadData),
          });

          if (response.ok) {
            setIsSuccess(true);
            setFormData({
              name: '',
              mobile: '',
              interest: 'Online Sales Model (20% Margin)'
            });
            setTimeout(() => setIsSuccess(false), 3000);
          } else {
            alert("Submission failed. Please try again.");
          }
        } catch (error) {
          console.error("Error submitting form", error);
          alert("Something went wrong! Please try again later.");
        } finally {
          setLoading(false);
        }
      };


      return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
          <Head>
            <title>BK Arogyam - B2B Partnership Program</title>
            <meta name="description" content="Earn 20-50% margins by selling authentic Ayurvedic products through our B2B partnership program" />
          </Head>

          {/* Hero Section */}
          <section className="relative bg-amber-700 text-white md:pt-8">
            <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-6">
                <span className="block">Boost Your Revenue</span>
                <span className="block text-amber-200">With Ayurveda</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Exclusive B2B program for call centers & digital marketers offering 
                <span className="font-semibold"> 20-50% margins</span> on 750+ GMP-certified Ayurvedic products
              </p>
              <div className="mt-10">
                <a 
                  href="#partner-form" 
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-700 bg-white hover:bg-amber-50 md:py-4 md:text-lg md:px-10"
                >
                  Apply for Partnership
                </a>
              </div>
            </div>
          </section>


          {/* Margin Calculator */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Your <span className="text-amber-600">Earning Potential</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Online Sales Model */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 bg-amber-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-900">Online Sales Model</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3"><strong>20% Margin</strong> on all sales through our platform</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3">No inventory risk - we handle fulfillment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3">Real-time dashboard for tracking sales</span>
                    </li>
                  </ul>
                  <div className="mt-8 bg-white p-4 rounded-lg border border-amber-200">
                    <p className="text-sm font-medium text-gray-600">Example Calculation:</p>
                    <p className="font-bold text-amber-700">10 sales/day @ ₹1,000 = ₹2,000 daily profit</p>
                  </div>
                </div>

                {/* Bulk Purchase Model */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 bg-amber-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-900">Bulk Purchase Model</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3"><strong>Up to 50% Margin</strong> when you purchase inventory</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3">Wholesale pricing on bulk orders (100+ units)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3">Complete control over pricing and sales channels</span>
                    </li>
                  </ul>
                  <div className="mt-8 bg-white p-4 rounded-lg border border-amber-200">
                    <p className="text-sm font-medium text-gray-600">Example Calculation:</p>
                    <p className="font-bold text-amber-700">100 units @ ₹500 cost = ₹25,000 profit at 50% margin</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Product Showcase */}
          <section className="py-12 px-4 bg-gray-50">
              <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Our Best-Selling Ayurvedic Solutions</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                  Doctor-approved formulations with proven results
                  </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                  { name: "Gluco Veda", category: "Diabetes", margin: "25%", img:"/images/imageBox/brands/GlucoVeda.png" },
                  { name: "Cardio Veda", category: "Heart Care", margin: "30%", img:"/images/imageBox/brands/CardioVeda.png" },
                  { name: "Kidney Veda", category: "Renal Care", margin: "25%",img:"/images/imageBox/brands/KidneyVeda.png" },
                  { name: "Slim Veda", category: "Weight Loss", margin: "20%",img:"/images/imageBox/brands/SlimVeda.png" },
                  { name: "OrthoVeda", category: "Pain Relief", margin: "25%",img:"/images/imageBox/brands/ArthoVeda.png" },
                  { name: "Rupam", category: "Skin Care", margin: "25%", img:"/images/imageBox/brands/rupam_logo.png" }
                  ].map((product, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                      {/* <div className="h-32 bg-gray-200"> */}
                          <div className="h-40 sm:h-48 relative overflow-hidden bg-gray-100">
                              <Image
                              src={product.img}
                              alt={`${product.name} - ${product.category}`}
                              fill
                              className="object-contain group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                              />
                          </div>
                      {/* </div> */}
                      <div className="p-3">
                      <h3 className="font-bold">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {product.margin} margin
                      </span>
                      </div>
                  </div>
                  ))}
              </div>
              </div>
          </section>


          {/* Partner Benefits */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center mb-12">
                <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">Why Partner With Us</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Built for <span className="text-amber-600">B2B Success</span>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "No Minimum Commitment",
                    description: "Start small with our online model, scale up when ready"
                  },
                  {
                    title: "Marketing Collateral",
                    description: "Ready-to-use creatives, scripts, and sales materials"
                  },
                  {
                    title: "Dedicated Account Manager",
                    description: "Personalized support for your business"
                  },
                  {
                    title: "45+ Years of Trust",
                    description: "Leverage our established Ayurvedic brand"
                  },
                  {
                    title: "GMP Certified Quality",
                    description: "Assured product efficacy and safety"
                  },
                  {
                    title: "Flexible Payment Terms",
                    description: "Net 30 available for qualified partners"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Partnership Form */}
          {/* <section id="partner-form" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 sm:p-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Become a Partner
                    </h2>
                    <form className="space-y-6">

                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                          Contact Person
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>


                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                          Interested In
                        </label>
                        <select
                          id="interest"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                        >
                          <option>Online Sales Model (20% Margin)</option>
                          <option>Bulk Purchase Model (50% Margin)</option>
                          <option>Both Models</option>
                        </select>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                        >
                          Submit Application
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="bg-amber-700 p-8 sm:p-10 flex items-center">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-4">Partner Support</h3>
                      <p className="mb-6">
                        Our B2B team will contact you within 24 hours to discuss:
                      </p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <svg className="flex-shrink-0 h-5 w-5 text-amber-200" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-3">Custom margin structures</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="flex-shrink-0 h-5 w-5 text-amber-200" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-3">Volume discount programs</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="flex-shrink-0 h-5 w-5 text-amber-200" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-3">Exclusive product training</span>
                        </li>
                      </ul>
                      <div className="bg-amber-800 p-4 rounded-lg">
                        <p className="font-medium">Have questions now?</p>
                        <p className="text-amber-100 mt-1">Call: +91 XXXX XXX XXX</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section id="partner-form" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 sm:p-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Become a Partner
                    </h2>
                    {!isSuccess ? (
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                            Contact Person
                          </label>
                          <input
                            type="text"
                            id="contact-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            pattern="[0-9]{10}"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                            Interested In
                          </label>
                          <select
                            id="interest"
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                          >
                            <option>Online Sales Model (20% Margin)</option>
                            <option>Bulk Purchase Model (50% Margin)</option>
                            <option>Both Models</option>
                          </select>
                        </div>

                        <div>
                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                          >
                            {loading ? 'Submitting...' : 'Submit Application'}
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-green-700 mb-2">Thank You!</h3>
                        <p className="text-gray-600">Our B2B team will contact you within 24 hours.</p>
                      </div>
                    )}
                  </div>
                  <div className="bg-amber-700 p-8 sm:p-10 flex items-center">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-4">Partner Support</h3>
                      <p className="mb-6">
                        Our B2B team will contact you within 24 hours to discuss:
                      </p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <svg className="flex-shrink-0 h-5 w-5 text-amber-200" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-3">Custom margin structures</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="flex-shrink-0 h-5 w-5 text-amber-200" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-3">Volume discount programs</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="flex-shrink-0 h-5 w-5 text-amber-200" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-3">Exclusive product training</span>
                        </li>
                      </ul>
                      <div className="bg-amber-800 p-4 rounded-lg">
                        <p className="font-medium">Have questions now?</p>
                        <p className="text-amber-100 mt-1">Call: +91 XXXX XXX XXX</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      );
}
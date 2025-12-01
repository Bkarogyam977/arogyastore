

// pages/influencer-program.jsx
"use client";
import { CrownOutlined, FireOutlined, RiseOutlined, SolutionOutlined, WarningOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function InfluencerProgram() {
  const [activeTab, setActiveTab] = useState('silver');

  const plans = {
    silver: {
      name: 'Silver Plan',
      price: '₹0.00',
      originalPrice: '₹5000/-',
      commission: '5%',
      tagline: 'Kickstart Your Influencer Earnings',
      features: [
        '5% Commission on Direct Sales',
        'Access to Basic Products',
        'Arogyam Advisor App Access',
      ],
      bonuses: [
        'FREE Product worth ₹5000/-',
        'Day Care Package worth ₹5000/-',
        '2000 Bonus Minutes on Arogya Talk App',
      ],
      cta: 'Get Started',
      ctaColor: 'bg-blue-600 hover:bg-blue-700',
    },
    gold: {
      name: 'Gold Plan',
      price: '₹5000/-',
      originalPrice: '₹15000/-',
      commission: '10%',
      tagline: 'Accelerate Your Influence & Income',
      features: [
        '10% Commission on Direct Sales',
        'Access to Exclusive Products',
        'Build Your Team & Earn Royalties',
        'Full App Access with Training',
      ],
      bonuses: [], // No explicit bonuses mentioned in the second snippet for Gold, assuming they are part of the plan features
      cta: 'Choose Gold Plan',
      ctaColor: 'bg-orange-500 hover:bg-orange-600',
    },
    platinum: {
      name: 'Platinum Plan',
      price: '₹10000/-',
      originalPrice: '₹25000/-',
      commission: '15%',
      tagline: 'Dominate Your Niche & Maximize Returns',
      features: [
        '15% Commission on Direct Sales',
        'Premium Access to High-Demand Products',
        'Build & Lead Powerful Teams',
        'Priority Support & Advanced Training',
      ],
      bonuses: [
        'FREE Product worth ₹10000/-',
        'Day Care Package worth ₹5000/-',
        '2000 Bonus Minutes on Arogya Talk App',
        'Coupon worth ₹5000/-',
        '2000 App Talktime for Your Family',
      ],
      cta: 'Go Platinum',
      ctaColor: 'bg-blue-600 hover:bg-blue-700',
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Head>
        <title>Ignite Your Influence | India&apos;s First High-Return Influencer Program</title>
        <meta name="description" content="Transform your social media presence into a powerful wealth creation engine with our exclusive influencer program. Earn with Ayurveda through our affiliate marketing program. Join 5,000+ influencers promoting 750+ GMP-certified products with 45+ years of Ayurvedic expertise." />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800 mb-6">
              <svg className="-ml-1 mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              India&apos;s First High-Return Influencer Program
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-4 leading-tight">
              Ignite Your Influence: <span className="text-orange-300">Financial Freedom</span> Through Ayurveda
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Transform your online presence into a powerful engine for wealth creation and achieve true financial independence. Join our affiliate program and earn commissions promoting 750+ Ayurvedic products backed by 45 years of expertise.
            </p>
          </div>
        </div>
        {/* Decorative wave element, adjusted to match blue theme */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-blue-50 transform skew-y-1 -mb-8 z-10"></div>
      </section>


      {/* Stats Section */}
      <section className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stats Section from first snippet, re-integrated for consistency */}
          <div className="bg-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-orange-600 sm:text-4xl">45+</p>
                  <p className="mt-2 text-sm font-medium text-gray-500">Years in Ayurveda</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-orange-600 sm:text-4xl">750+</p>
                  <p className="mt-2 text-sm font-medium text-gray-500">GMP-certified Products</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-orange-600 sm:text-4xl">200+</p>
                  <p className="mt-2 text-sm font-medium text-gray-500">Expert Doctors</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-orange-600 sm:text-4xl">5L+</p>
                  <p className="mt-2 text-sm font-medium text-gray-500">Treatments Done</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* Mentor Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
               <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-orange-500 shadow-xl">
                 <Image 
                   src="/images/imageBox/dr-chaurasia.png" // Ensure this path is correct
                   alt="Dr. B.K. Chaurasia" 
                   layout="fill"
                   objectFit="cover"
                 />
               </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">
                Your Mentor to Millions: <span className="text-orange-500">Dr. B.K. Chaurasia</span>
              </h2>
              <p className="text-lg mb-6 text-gray-700">
                A renowned Ayurveda Guru, Preventive Nephrologist, and Health Motivational Speaker with <span className="font-semibold">23 years of experience</span>. He transformed his YouTube presence into a multi-crore affiliate marketing empire.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-blue-500">
                <p className="text-xl italic font-medium text-gray-800">
                  "I didn't earn a single rupee from YouTube, but I made crores from Affiliate Marketing."
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { number: "1 Lakh+", label: "Subscribers" },
                  { number: "1 Crore+", label: "Viewers" },
                  { number: "1,000+", label: "Videos" }
                ].map((stat, index) => (
                  <div key={index} className="bg-blue-100 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-900">{stat.number}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}



    <section className="py-10 sm:py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"> 
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4"> 
          Unlocking Influencer Success
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12"> 
          Insights from top industry leaders on what it truly takes to thrive.
        </p>

    

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"> {/* Reduced gap */}
          {/* Influencer Challenges */}
          <div className="text-left bg-white p-6 sm:p-8 rounded-xl shadow-lg border-t-4 border-red-500"> {/* Smaller padding */}
            <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 sm:mb-6 flex items-center"> 
              <WarningOutlined className="mr-2 sm:mr-3 text-red-500 text-xl sm:text-2xl" /> 
              Influencer Challenges
            </h3>
            <ul className="space-y-4 sm:space-y-6"> {/* Reduced space between items */}
              {[
                {
                  title: 'Incorrect Niche Focus',
                  description: 'Many influencers struggle because their content niche isn\'t strategically aligned with monetization opportunities.',
                  icon: <SolutionOutlined />
                },
                {
                  title: 'Ineffective Marketing Strategies',
                  description: 'Without proven marketing tactics, even great content fails to convert into substantial income.',
                  icon: <FireOutlined />
                },
                {
                  title: 'Lack of Patience and Consistency',
                  description: 'Building a successful influencer career requires dedication and persistence, which many abandon too soon.',
                  icon: <CrownOutlined />
                }
              ].map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 text-red-500 text-xl sm:text-2xl mr-3 mt-1"> {/* Adjusted icon size and margin */}
                    {challenge.icon}
                  </span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800">{challenge.title}</h4> 
                    <p className="text-sm sm:text-base text-gray-600">{challenge.description}</p> 
                  </div>
                </li>
              ))}
            </ul>
          </div>


          {/* Quote Section */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 sm:p-8 rounded-lg shadow-xl relative overflow-hidden mb-12 sm:mb-16 max-w-4xl mx-auto"> 
            <div className="absolute inset-0 opacity-10">
              <FireOutlined className="text-8xl sm:text-9xl transform rotate-12 -translate-x-1/4 -translate-y-1/4" /> 
            </div>
            <div className="relative z-10">
              <RiseOutlined className="text-5xl sm:text-6xl mb-2 sm:mb-4 text-orange-200" /> 
              <p className="text-2xl sm:text-4xl font-bold leading-tight italic"> 
                &quot;Earned Crores from Affiliate Marketing, <br className="sm:hidden" /> Not a Single Rupee from YouTube.&quot;
              </p>
              <p className="mt-3 text-base sm:text-lg font-semibold">- Dr. B.K. Chaurasia (Influencer & Ayurveda Guru)</p> 
            </div>
          </div>

          {/* Secret to Success */}
          <div className="text-center bg-blue-600 text-white p-2 sm:p-10 rounded-xl shadow-lg relative overflow-hidden"> {/* Smaller padding */}
            <Image
              src="/images/imageBox/icons/secret-success.png" // Placeholder image, ensure this path exists
              alt="Secret to success"
              width={260} // Smaller image on mobile
              height={260} // Smaller image on mobile
              className="mx-auto mb-2 sm:mb-6 opacity-80"
            />
            <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 flex items-center justify-center"> 
              <CrownOutlined className="mr-3 sm:mr-4 text-yellow-300 text-xl sm:text-3xl" /> 
              Secret to Top Influencer Success
            </h3>
            <p className="text-4xl sm:text-6xl font-extrabold text-orange-300 leading-tight"> 
              AFFILIATE MARKETING
            </p>
            <p className="mt-3 text-lg sm:text-xl text-blue-200"> 
              The most profitable pathway for influencers to monetize their audience and expertise.
            </p>
          </div>
        </div>
      </div>
    </section>


      {/* Affiliate Marketing Section - Updated */}
      <section className="py-16 bg-gradient-to-br from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-200 bg-blue-700 rounded-full uppercase tracking-wide mb-4">
              Influencer Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The Ultimate Influencer Accelerator: <span className="text-orange-300">Affiliate Marketing</span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Transform your influence into sustainable income with performance-based earnings
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Image/Illustration Column - Uncomment when you have the image */}
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 bg-blue-700 aspect-video flex items-center justify-center">
                {/* Placeholder for image - replace with your Image component */}
                <div className="text-center p-6">
                  <svg className="w-20 h-20 mx-auto text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                  <p className="mt-4 text-blue-100">Affiliate Marketing Visual</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  What is Affiliate Marketing?
                </h3>
                <p className="mb-6 text-blue-100">
                  A performance-based model where you earn commissions by promoting products. 
                  Get a unique link - each sale through it earns you money. No inventory, no customer service, just pure profit.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 mt-8 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                  Why Health Sector Dominates
                </h3>
                
                <ul className="space-y-3">
                  {[
                    {text: "Second-largest global sector after food", icon: "🌍"},
                    {text: "₹50,00,000 crores Indian market value", icon: "💰"},
                    {text: "Continuous innovation & growth", icon: "📈"},
                    {text: "Universal, evergreen demand", icon: "🔄"},
                    {text: "High-trust recommendations convert", icon: "🤝"}
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 bg-blue-700/50 text-orange-300 rounded-full p-1 mr-3">
                        {item.icon}
                      </span>
                      <span className="text-blue-100">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Product Segments Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
            High-Demand Product Segments for Influencers
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Hair & Skin Care", icon: "💆‍♀️" },
              { name: "Supplements", icon: "💊" },
              { name: "Amulya", icon: "🌿" },
              { name: "Classical Medicine", icon: "📜" },
              { name: "Patient-Specific Medicine", icon: "🩺" },
              { name: "Medical Tourism", icon: "✈️" },
              { name: "Day Care Packages", icon: "🏥" },
              { name: "Ayurvedic Remedies", icon: "🍃" }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why BK Arogyam - Compact Version */}
      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-600 bg-orange-100 rounded-full uppercase tracking-wide">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
              Trusted Ayurveda Since 1978 & Your Path to Success
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Join India&apos;s most trusted Ayurvedic influencer network with proven results
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                title: "45+ Years Legacy", 
                desc: "Pioneers in authentic Ayurvedic solutions", 
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ) 
              },
              { 
                title: "200+ Experts", 
                desc: "Senior doctors & researchers network", 
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ) 
              },
              { 
                title: "5L+ Treatments", 
                desc: "Proven results across diseases", 
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) 
              },
              { 
                title: "750+ Products", 
                desc: "GMP-certified Ayurvedic range", 
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ) 
              },
              { 
                title: "Chronic Care", 
                desc: "Specialized in kidney & heart care", 
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ) 
              },
              { 
                title: "Research Focus", 
                desc: "Continuous innovation in Ayurveda", 
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ) 
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors shadow-sm hover:shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange-100 p-2 rounded-lg text-orange-600">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* How It Works */}
      <div id="how-it-works" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Start Earning in 4 Simple Steps
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Our affiliate marketing model makes it easy to monetize your influence
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: 'Choose Your Niche',
                  description: 'Select from health, wellness, or specific Ayurvedic products based on your expertise',
                  icon: '🔍'
                },
                {
                  name: 'Join Affiliate Program',
                  description: 'Register for free and get your unique affiliate links',
                  icon: '📝'
                },
                {
                  name: 'Promote Products',
                  description: 'Share through social media, blogs, or paid ads using our marketing tools',
                  icon: '📢'
                },
                {
                  name: 'Earn Commissions',
                  description: 'Get 5-15% on every sale, track earnings in real-time via our app',
                  icon: '💰'
                }
              ].map((step) => (
                <div key={step.name} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white text-xl">
                    {step.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{step.name}</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>



      {/* Membership Plans */}
      <section id="plans" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">Choose Your Influencer Success Plan</h2>
            <p className="mt-5 text-xl text-blue-200 text-center">Start for free. Upgrade anytime for higher earnings.</p>
            
            {/* Tabs */}
            <div className="relative mt-12 bg-blue-800 rounded-lg sm:w-full sm:max-w-2xl mx-auto">
              <div className="flex border-b border-blue-700">
                {Object.keys(plans).map((tab) => (
                  <button
                    key={tab}
                    className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm ${activeTab === tab ? 'border-orange-500 text-orange-300' : 'border-transparent text-blue-200 hover:text-white'}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {plans[tab].name.replace(' Plan', '')}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Plan */}
          <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto">
            {Object.entries(plans).map(([key, plan]) => (
              <div 
                key={key}
                className={`bg-white text-gray-800 rounded-xl overflow-hidden shadow-lg ${activeTab === key ? 'block' : 'hidden sm:block'} ${key === 'gold' ? 'border-2 border-orange-400 transform scale-105' : 'border border-gray-200'}`} // Highlight Gold plan
              >
                {key === 'gold' && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                <div className={`py-4 px-6 ${key === 'gold' ? 'bg-orange-100' : 'bg-gray-200'}`}>
                  <h3 className="text-2xl font-bold text-blue-900">{plan.name}</h3>
                  <p className="text-gray-600">{plan.tagline}</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl font-bold mb-4 text-orange-500">{plan.price}</div>
                  {plan.originalPrice && (
                    <p className="text-gray-500 mb-6"><s>Original Value: {plan.originalPrice}</s></p>
                  )}
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.bonuses.length > 0 && (
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-blue-900 mb-2">{key === 'platinum' ? 'Elite Bonuses:' : 'Exclusive Bonuses:'}</h4>
                      <ul className="text-sm space-y-1">
                        {plan.bonuses.map((bonus, idx) => (
                          <li key={idx}>{bonus}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <button className={`w-full ${plan.ctaColor} text-white font-bold py-3 px-4 rounded-lg transition duration-300`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Success Stories</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Influencers Say
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "I earned ₹50,000 in my first month promoting BK Arogyam's kidney care products! The training made it so easy.",
                name: "Priya Sharma",
                role: "Health Influencer (50K followers)"
              },
              {
                quote: "As a fitness coach, my audience loved the Ayurvedic supplements. 30% conversion rate with minimal effort!",
                name: "Rahul Verma",
                role: "Fitness Coach"
              },
              {
                quote: "The team building feature helped me create passive income. Now I earn from my team's sales too!",
                name: "Neha Patel",
                role: "Wellness Blogger"
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <blockquote className="mt-6">
                      <p className="text-base text-gray-600">&quot;{testimonial.quote}&quot;</p>
                    </blockquote>
                    <footer className="mt-6">
                      <p className="text-base font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-base text-orange-600">{testimonial.role}</p>
                    </footer>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Influence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            The health sector represents an unparalleled opportunity for influencers. Join today and embark on your journey to groundbreaking success.
          </p>
          <p className="mt-4 text-sm text-orange-100">
            Have questions? Call us at +91 XXXX XXX XXX
          </p>
        </div>
      </section>

    </div>
  );
}
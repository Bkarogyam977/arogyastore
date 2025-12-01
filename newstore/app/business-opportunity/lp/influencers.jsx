

// pages/influencer-program.tsx
"use client";
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function InfluencerProgram() {
  const [activeTab, setActiveTab] = useState('silver');

  const plans = {
    silver: {
      name: 'Silver',
      price: '₹0',
      commission: '10%',
      features: [
        'Affiliate Link - Start earning immediately',
        'Limited product access (basic products only)',
        'Standard 10% commission rate',
        'App access with limited features',
        '₹5,000 welcome coupon'
      ],
      cta: 'Get Started'
    },
    gold: {
      name: 'Gold',
      price: '₹5,000',
      commission: '10%',
      features: [
        'Full affiliate marketing access',
        'Exclusive health products',
        'Team building opportunities',
        'Unlimited app features',
        'Free ₹5,000 product + Day care package'
      ],
      cta: 'Upgrade Now'
    },
    platinum: {
      name: 'Platinum',
      price: '₹25,000',
      commission: '15%',
      features: [
        'Highest commission rate (15%)',
        'Priority product access',
        'Advanced team building',
        'Premium support',
        'Free ₹10,000 product + Day care package'
      ],
      cta: 'Join Elite'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Head>
        <title>BK Arogyam - India&apos;s First High Return Influencer Program</title>
        <meta name="description" content="Earn with Ayurveda through our affiliate marketing program. Join 5,000+ influencers promoting 750+ GMP-certified products with 45+ years of Ayurvedic expertise." />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
        <Image
          src="/images/imageBox/BusinessOportunity_Banner.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="BK Arogyam Influencer Program"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-100 text-amber-800 mb-6">
              <svg className="-ml-1 mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              India&apos;s First High-Return Influencer Program
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-4">
              Financial Freedom Through <span className="text-amber-300">Ayurveda</span>
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Join our affiliate program and earn commissions promoting 750+ Ayurvedic products backed by 45 years of expertise
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#plans"
                className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-amber-700 bg-white hover:bg-amber-50 shadow-sm transition-colors duration-200"
              >
                Start Earning Today
              </a>
              <a
                href="#how-it-works"
                className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition-colors duration-200"
              >
                How It Works →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-amber-600 sm:text-4xl">45+</p>
              <p className="mt-2 text-sm font-medium text-gray-500">Years in Ayurveda</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-amber-600 sm:text-4xl">750+</p>
              <p className="mt-2 text-sm font-medium text-gray-500">GMP-certified Products</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-amber-600 sm:text-4xl">200+</p>
              <p className="mt-2 text-sm font-medium text-gray-500">Expert Doctors</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-amber-600 sm:text-4xl">5L+</p>
              <p className="mt-2 text-sm font-medium text-gray-500">Treatments Done</p>
            </div>
          </div>
        </div>
      </div>

      {/* About BK Arogyam */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">Why BK Arogyam?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Trusted Ayurveda Since 1978
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Research-Backed Products",
                description: "200+ senior doctors panel continuously improving our 750+ product range"
              },
              {
                title: "Integrated Healthcare",
                description: "India's only Ayurvedic healthcare chain with hospitals and clinics"
              },
              {
                title: "Digital Platform",
                description: "BK Arogyam app for consultations, product orders, and affiliate tracking"
              },
              {
                title: "GMP Certified",
                description: "World-class manufacturing facility with quality certifications"
              },
              {
                title: "Dr. B.K. Chaurasia",
                description: "Renowned Ayurveda Guru and Preventive Nephrologist leading our team"
              },
              {
                title: "5 Lakh+ Success Stories",
                description: "Proven results across common and complex health conditions"
              }
            ].map((item, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-base text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">Process</h2>
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
                  description: 'Get 10-15% on every sale, track earnings in real-time via our app',
                  icon: '💰'
                }
              ].map((step) => (
                <div key={step.name} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white text-xl">
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
      <div id="plans" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">Membership Plans</h2>
            <p className="mt-5 text-xl text-gray-500 text-center">Start for free. Upgrade anytime for higher earnings.</p>
            
            {/* Tabs */}
            <div className="relative mt-12 bg-white rounded-lg sm:w-full sm:max-w-2xl mx-auto">
              <div className="flex border-b border-gray-200">
                {Object.keys(plans).map((tab) => (
                  <button
                    key={tab}
                    className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm ${activeTab === tab ? 'border-amber-500 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {plans[tab].name} Plan
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
                className={`rounded-lg shadow-lg divide-y divide-gray-200 ${activeTab === key ? 'block' : 'hidden sm:block'} ${key === 'platinum' ? 'border-2 border-amber-500 transform scale-105' : 'border border-gray-200'}`}
              >
                <div className="p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{plan.name} Plan</h3>
                  <div className="mt-4">
                    <p className="text-4xl font-extrabold text-gray-900">{plan.price}</p>
                    <p className="mt-2 text-sm text-gray-500">{plan.commission} commission rate</p>
                  </div>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex">
                        <svg className="flex-shrink-0 h-5 w-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-3 text-base text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-4 bg-gray-50 text-center">
                  <button className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${key === 'platinum' ? 'bg-amber-700 hover:bg-amber-800' : 'bg-amber-600 hover:bg-amber-700'} focus:outline-none`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-amber-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">Success Stories</h2>
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
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <blockquote className="mt-6">
                      <p className="text-base text-gray-600">&quot;{testimonial.quote}&quot;</p>
                    </blockquote>
                    <footer className="mt-6">
                      <p className="text-base font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-base text-amber-600">{testimonial.role}</p>
                    </footer>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-amber-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready for Financial Freedom?
          </h2>
          <p className="mt-4 text-lg leading-6 text-amber-100">
            Join India&apos;s First High-Return Ayurveda Influencer Program Today
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#plans"
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-amber-700 bg-white hover:bg-amber-50 shadow-sm transition-colors duration-200"
            >
              Choose Your Plan
            </a>
            <a
              href="https://payments.cashfree.com/forms/affiliate123"
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition-colors duration-200"
            >
              Pay Now (Gold/Platinum)
            </a>
          </div>
          <p className="mt-4 text-sm text-amber-100">
            Have questions? Call us at +91 XXXX XXX XXX
          </p>
        </div>
      </div>
    </div>
  );
}
"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import ApointmentBooking from "@/app/homepage/apointmentbooking";
import ConditionsTreated from "@/app/homepage/conditionstreated";
import TestimonialSection from "@/app/homepage/testomonials";
import Image from "next/image";

const TabContent = [
  {
    id: "vaman",
    title: "Vaman",
    subtitle: "Medicated Emesis",
    purpose:
      "Vaman helps in removing ama (toxins) from the body tissues and digestive tract.",
    benefits:
      "Promotes lightness of body, clarity of the chest and throat, and also improves appetite.",
    recommended:
      "Obesity, Asthma, Hyperacidity, and other common Kapha-dominated disorders.",
  },
  {
    id: "virechan",
    title: "Virechan",
    subtitle: "Medicine-induced Purgation",
    purpose:
      "Eliminate toxins through the bowels, as well as to provide internal and external oleation.",
    benefits:
      "Reduces accumulation of Pitta dosha as well as eliminates toxins from the GI tract.",
    recommended:
      "Jaundice, liver disorders, Colitis, Celiac Disease, and Pitta-dominated disorders.",
  },
  {
    id: "nasya",
    title: "Nasya",
    subtitle: "Herbal Nasal Therapy",
    purpose:
      "Clears the nasal canal as well as the head region. Eliminates blockages and clears the path for smooth prana flow.",
    benefits:
      "Enhances mental and sensory clarity, promotes mental sharpness, and lightness of the body.",
    recommended:
      "Headache, Migraine, hair problems, sleep disorders, neurological disorders, Sinusitis.",
  },
  {
    id: "basti",
    title: "Basti",
    subtitle: "Medicated Enema",
    purpose: "Nourishes and cleanses the entire colon and detoxifies the body.",
    benefits:
      "Promotes lightness in the body, reduces pain, stiffness, and lethargy.",
    recommended:
      "Arthritis, Piles, Urinary infections, Constipation, and vata-dominated disorders.",
  },
  {
    id: "raktamokshan",
    title: "Raktamokshan",
    subtitle: "Therapeutic Blood-letting",
    purpose: "Cleanses impurities in blood through Jalauka (leech therapy).",
    benefits:
      "Reduces toxic load, balances blood pressure, and promotes healthy skin.",
    recommended:
      "Psoriasis, Eczema, lesions, pigmentation, and common skin disorders.",
  },
];

const benefits = [
  {
    id: 1,
    title: "COMPLETELY PURIFIES BODY",
    icon: "/images/panchkarma/Asset 1.svg", // Replace with the correct SVG or icon path
    bgColor: "bg-gradient-to-r from-green-400 to-teal-500", // Gradient from green to teal
  },
  {
    id: 2,
    title: "RIDDANCE OF TOXINS",
    icon: "/images/panchkarma/Asset 2.svg", // Replace with the correct SVG or icon path
    bgColor: "bg-gradient-to-r from-gray-400 to-gray-500", // Gradient from gray to darker gray
  },
  {
    id: 3,
    title: "SPEEDING UP THE METABOLISM",
    icon: "/images/panchkarma/Asset 3.svg", // Replace with the correct SVG or icon path
    bgColor: "bg-gradient-to-r from-yellow-400 to-orange-500", // Gradient from yellow to orange
  },
  {
    id: 4,
    title: "REDUCING WEIGHT",
    icon: "/images/panchkarma/Asset 4.svg", // Replace with the correct SVG or icon path
    bgColor: "bg-gradient-to-r from-blue-400 to-indigo-500", // Gradient from blue to indigo
  },
  {
    id: 5,
    title: "OPENS UP OF BLOCKED CHANNELS",
    icon: "/images/panchkarma/Asset 5.svg", // Replace with the correct SVG or icon path
    bgColor: "bg-gradient-to-r from-red-400 to-pink-500", // Gradient from red to pink
  },
  {
    id: 6,
    title: "RELAXING THE MIND AND BODY",
    icon: "/images/panchkarma/Asset 6.svg", // Replace with the correct SVG or icon path
    bgColor: "bg-gradient-to-r from-purple-400 to-pink-500", // Gradient from purple to pink
  },
  {
    id: 7,
    title: "BOOSTS IMMUNITY",
    icon: "/images/panchkarma/Asset 7.svg", // Replace with the correct SVG or icon path
    bgColor: "bg-gradient-to-r from-teal-400 to-blue-500", // Gradient from teal to blue
  },
  {
    id: 8,
    title: "REJUVENATION OF TISSUES",
    icon: "/images/panchkarma/Asset 8.svg", // Replace with the correct SVG or icon path
    bgColor: "bg-gradient-to-r from-indigo-400 to-blue-500", // Gradient from indigo to blue
  },
];

const testimonials = [
  {
    name: "Sunil Kumar",
    location: "Bihar",
    message:
      "His wife Sumanti Devi came to know about kidney problems in 2020. Despite visiting many hospitals, her creatinine increased from 2 to 5.5. After a 10-day stay at BK Arogyam, she experienced significant improvement, avoiding dialysis and achieving better health. Thank you!",
    photo: "/imgBox/testimonial_sunil_sumar.jpg",
    bgColor: "#B6A28E",
  },
  {
    name: "Swaminath",
    location: "Mumbai",
    message:
      "After sudden BP issues, I discovered kidney damage. BK Arogyam provided a week of treatment that improved my physical symptoms and reduced my creatinine levels. They saved my life.",
    photo: "/imgBox/testimonial_swaminath.jpg",
    bgColor: "#B6A28E",
  },
  {
    name: "Deepak Kumar",
    location: "Bihar",
    message:
      "I had kidney failure and suffered from weakness, bloating, and other symptoms. After receiving Ayurvedic treatment at B K Arogyam, I am free from these complications and now lead a normal life. Thank you to the doctors at B K Arogyam for their amazing care.",
    photo: "/imgBox/testimonial_deepak_kumar.jpeg",
    bgColor: "#B6A28E",
  },
];

const Panchakarma = () => {
  const [activeTab, setActiveTab] = useState("vaman");
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Layout>
      <section
        className="bg-cover bg-center h-[25em]  md:h-[35em] md:mt-20"
        style={{
          backgroundImage: "url('/images/panchkarma/panchkarma-banner.png')",
        }}
      >
        <div className="container mx-auto h-full">
          <div className="content-inner text-left max-w-3xl h-full flex flex-col justify-center px-4 md:pl-40">
            <h2 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
              Panchakarma
            </h2>
            <p className="text-white text-base sm:text-lg md:text-2xl mb-6 leading-relaxed">
              Panchakarma: Ayurvedic detoxification, cleansing body&apos;s{" "}
              <br className="hidden md:block" />
              deep tissues, balancing doshas, enhancing energy,{" "}
              <br className="hidden md:block" />
              rejuvenation, and wellbeing.
            </p>
            <div className="consult-btn">
              <a
                href="/HealthConsultation"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-12 gap-6 mt-5 md:px-20 px-3">
        {/* Left Content Section (Wider) */}
        <div className="lg:col-span-8">
          <div>
            <h2 className="md:text-7xl text-4xl font-bold text-green-800 mb-4 md:mt-16">
              स्वस्थस्य स्वास्थ्य रक्षणं,
              <br />
              आतुरस्य विकार प्रशमनं।।
            </h2>
            <h3 className="md:text-4xl text-2xl font-semibold text-green-700 mb-5">
              <span className="text-green-900">Meaning:</span> आयुर्वेद मौजूदा
              बीमारियों का इलाज करने के अलावा शरीर के समग्र स्वास्थ्य की भी
              रक्षा करता है।
            </h3>
            <h1 className="md:text-4xl text-3xl font-bold text-gray-800 mb-6">
              &apos;Panchakarma&apos; <br />
              The Five Therapies
            </h1>
            <p className="text-gray-700 leading-relaxed text-xl">
              Panchakarma&apos;s five therapies cleanse and revitalize your
              body. It balances Doshas, strengthens digestion, and removes
              toxins. This holistic approach promotes overall well-being,
              boosting energy, reducing stress, and leading to a happier you.
            </p>
          </div>
        </div>

        {/* Right Content Section - Enquire Form (Narrower) */}
        <div className="lg:col-span-4">
          <div className="enquire-form bg-white shadow-md rounded-lg p-5">
            <div className="top-part bg-blue-200 p-5">
              <p className="text-clack font-bold text-black">
                Panchakarma does not just treat diseases, it ensures health!
              </p>
            </div>
            <div className="form-prt p-5">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed px-4 ">
                Ayurveda recommends Panchakarma at least twice a year for
                healthy individuals, speak with a BK Arogyam Panchakarma
                specialist to know more
              </p>
              <div className="form mt-3">
                <ApointmentBooking />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-green-400 to-blue-100 mt-10 md:px-20">
        <div className="">
          {/* Tabs Section */}
          <div className="md:pl-16 p-6 flex flex-col lg:flex-row">
            {/* Left Side: Tabs */}
            <div className="mb-4 lg:mb-0">
              <div className="flex flex-col space-y-4">
                {TabContent.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-4 py-2 text-lg font-semibold text-left w-auto transition-all duration-300 transform 
                            ${
                              activeTab === tab.id
                                ? "bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg border-l-4 border-white scale-105"
                                : "bg-white text-gray-600 hover:bg-green-100 hover:text-green-700 hover:shadow-md"
                            }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side: Content */}
            <div className=" pl-10 bg-gradient-to-r from-orange-200 to-blue-100 p-6 rounded-lg">
              {TabContent.map(
                (tab) =>
                  activeTab === tab.id && (
                    <div key={tab.id} className="text-gray-700 space-y-4">
                      <h2 className="text-3xl font-bold text-green-800">
                        {tab.title}
                      </h2>
                      <h3 className="text-xl font-semibold text-green-700">
                        {tab.subtitle}
                      </h3>
                      <p className="text-xl">
                        <b>Purpose:</b> {tab.purpose}
                      </p>
                      <p className="text-xl">
                        <b>Benefits:</b> {tab.benefits}
                      </p>
                      <p className="text-xl">
                        <b>Commonly recommended in treating:</b>{" "}
                        {tab.recommended}
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className=" md:px-14 px-5">
          <div className="flex flex-col lg:flex-row items-start">
            {/* Left Content Section - Decrease Width */}
            <div className="lg:w-1/3 mb-6  md:mt-12 mt-5">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Diseases in which Panchakarma is very effective
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Panchakarma can bring limitless benefits to the individual. It
                helps in treating various conditions by detoxifying the body,
                balancing doshas, and rejuvenating the system. It is highly
                effective in addressing several diseases such as chronic
                ailments, stress-related disorders, digestive issues, and more.
              </p>
            </div>

            {/* Right Content Section - Increase Width */}
            <div className="lg:w-2/3">
              <ConditionsTreated />
            </div>
          </div>
        </div>
      </section>

      <section className="ayurveda-testimonial bg-gradient-to-r from-green-100 to-blue-50 py-12 md:px-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Video Section */}
            <div className="video-sec rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-80"
                src="https://www.youtube.com/embed/y9etvSv2ZT4?list=PLWALk8QK4syLEk3YJAUR7j54XnqHM-TG8&autoplay=1"
                title="Diabetes ka ilaj (in hindi) || How To Control Diabetes ||"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Content Section */}
            <div className="md:pl-8">
              <div className="inner-content">
                <h2 className="md:text-5xl text-3xl font-bold text-green-800 mb-4">
                  What Ayurveda says about Panchakarma?
                </h2>
                <p className="md:text-lg text-gray-700">
                  The human body is like a car! Just like it needs to be
                  serviced regularly, your body also needs regular maintenance.
                  The pollution in air &amp; water, fertilizers in your food,
                  cosmetics - all of these are sources of ama (toxins) that
                  gradually accumulate in your body &amp; create diseases.
                  Ayurveda recommends that everybody, even healthy individuals
                  must detoxify &amp; rejuvenate the entire body with
                  Panchakarma, at least twice a year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* benfit of panchkarma */}
      <div className="md:py-16 py-5 px-2 lg:px-24 bg-white">
        <h2 className="md:text-3xl text-2xl font-bold text-center text-gray-800 mb-12">
          BENEFITS OF PANCHAKARMA TREATMENT
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className={`p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl ${benefit.bgColor}`}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-12 h-12"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-white font-semibold text-lg">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="md:py-16 py-5 px-3 lg:px-24 bg-white">
        {/* Section Heading */}
        <h2 className="md:text-3xl text-2xl font-bold text-center text-gray-800 md:mb-12 mb-5">
          WHY CHOOSE B.K. AROGYAM FOR PANCHKARMA THEREPIES?
        </h2>

        {/* Top Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-5">
          <div className="lg:w-1/2">
            <ul className="list-disc list-inside text-gray-700 text-base lg:text-lg leading-loose">
              <li>
                B.K. Arogyam specializes in providing personalized Ayurvedic
                treatments tailored to individual needs.
              </li>
              <li>
                The treatments use pure, organic herbs and oils to ensure
                maximum effectiveness and safety.
              </li>
              <li>
                Experienced Ayurvedic practitioners with over 10 years of
                expertise in the field.
              </li>
            </ul>
          </div>

          {/* Logo Section */}
          <div className="lg:w-1/4 flex justify-center">
            <Image
              src="/favicon.ico"
              alt="B.K. Arogyam Logo"
              className="w-56 h-56 object-contain"
              width={224}
              height={224}
            />
          </div>

          {/* Additional Points */}
          <div className="lg:w-1/2">
            <ul className="list-disc list-inside text-gray-700 text-base lg:text-lg leading-loose ">
              <li>
                B.K. Arogyam provides a safe and healing environment for
                complete detoxification and rejuvenation.
              </li>
              <li>
                Trusted by thousands of patients for its holistic approach to
                restoring health and vitality.
              </li>
              <li>
                Combines traditional Ayurvedic wisdom with modern health
                diagnostics.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Highlight Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="bg-green-700 text-white p-6 rounded-lg shadow-lg">
            <p className="text-sm md:text-base font-semibold">
              Over 90% success rate in Ayurvedic management of chronic kidney
              diseases.
            </p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
            <p className="text-sm md:text-base font-semibold">
              Personalized consultation for every patient based on body type and
              medical history.
            </p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
            <p className="text-sm md:text-base font-semibold">
              Provides a 100% natural and safe alternative to invasive
              treatments like dialysis.
            </p>
          </div>
          <div className="bg-green-700 text-white p-6 rounded-lg shadow-lg">
            <p className="text-sm md:text-base font-semibold">
              Located in India with a global reputation for authentic Ayurvedic
              healing.
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-green-700 text-2xl font-medium mt-12">
          B.K. Arogyam has been trusted for its expertise in authentic Ayurveda
          since 1979.
        </p>
      </div>

      {/* panchkarma-therepies-list */}
      <section className="panchakarma-therapy bg-[#f3f9f6] p-2 md:p-12 rounded-xl shadow-lg text-center md:px-20">
        <div className="container mx-auto">
          <div className="therapy-header">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4d796a]">
              Panchakarma Therapy Price List
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed px-4 md:px-20 lg:px-60">
              Experience the ancient art of healing with our personalized
              Panchakarma therapies designed to detoxify, rejuvenate, and
              harmonize your body and soul.
            </p>
          </div>
          <div className="therapy-content">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="benefit-card bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="icon text-center mb-4">
                  <span className="text-4xl text-[#41b382]">🌿</span>{" "}
                  {/* Increased icon size */}
                </div>
                <h3 className="text-lg font-semibold text-[#4d796a] mb-2">
                  Tailored Detoxification
                </h3>
                <p className="text-gray-700 mb-3">
                  Our personalized treatments help detoxify your body, leaving
                  you refreshed and free of toxins.
                </p>
              </div>

              {/* Card 2 */}
              <div className="benefit-card bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="icon text-center mb-4">
                  <span className="text-4xl text-[#41b382]">🧘‍♂️</span>{" "}
                  {/* Increased icon size */}
                </div>
                <h3 className="text-lg font-semibold text-[#4d796a] mb-2">
                  Mental Clarity Boost
                </h3>
                <p className="text-gray-700 mb-3">
                  Rejuvenate your mind and gain focus through our restorative
                  therapies designed for mental clarity.
                </p>
              </div>

              {/* Card 3 */}
              <div className="benefit-card bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="icon text-center mb-4">
                  <span className="text-4xl text-[#41b382]">💆‍♀️</span>{" "}
                  {/* Increased icon size */}
                </div>
                <h3 className="text-lg font-semibold text-[#4d796a] mb-2">
                  Relaxation & Rejuvenation
                </h3>
                <p className="text-gray-700 mb-3">
                  Our therapies provide deep relaxation and rejuvenation,
                  promoting well-being and harmony.
                </p>
              </div>

              {/* Card 4 */}
              <div className="benefit-card bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="icon text-center mb-4">
                  <span className="text-4xl text-[#41b382]">🍃</span>{" "}
                  {/* Increased icon size */}
                </div>
                <h3 className="text-lg font-semibold text-[#4d796a] mb-2">
                  Authentic Ayurvedic Practices
                </h3>
                <p className="text-gray-700 mb-3">
                  Experience the healing power of authentic Ayurvedic therapies
                  that have been passed down for centuries.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/panchkarma-price"
                className="bg-[#41b382] text-white py-3 px-6 rounded-md text-lg hover:bg-[#467560] transition-transform duration-300 transform hover:scale-105"
              >
                Explore Price List
              </a>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
    </Layout>
  );
};

export default Panchakarma;

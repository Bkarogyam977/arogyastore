import Image from "next/image";
import Link from 'next/link';


const HeroSection = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="w-full p-6 rounded-lg shadow-lg bg-gradient-to-b from-white to-white md:hidden">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-green-700">ArogyaBharat</h2>
          <h3 className="text-lg font-semibold text-green-500">
            Your Natural Health Solution
          </h3>
          <p className="text-gray-700 mt-2 px-4">
            Arogya Bharat is a leading name in Ayurvedic medicine, Panchakarma, and 
            natural treatments. Our mission is to help every individual live a healthier 
            life through holistic healing and natural therapies.
          </p>
        </div>

        {/* Rotating Image Section */}
        <div className="flex justify-center relative">
          <div className="relative w-80 h-72 flex items-center justify-center">
            {/* Rotating Chakra-Spiral */}
            <div className="absolute w-full h-full animate-spin-slow">
              <Image
                src="/images/imageBox/ChakraSpiral1.png"
                alt="chakra spiral"
                fill
                className="object-contain"
              />
            </div>

            {/* Fixed Meditation Girl */}
            <div className="absolute w-full h-full">
              <Image
                src="/images/imageBox/Mediation_girl.png"
                alt="meditation girl"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-6">
          {/* <button className="bg-green-500 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md hover:bg-green-600 transition-all">
            Start Your Wellness Journey Today
          </button> */}
          <h2 className="mt-4 text-green-600 font-bold text-lg lg:text-xl">
              Your Wellness Journey Starts Here..
            </h2>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-6">
          <Link href="/HealthConsultation" passHref>
            <div className="flex items-center justify-center border border-yellow-800 bg-blue-100 text-black font-medium text-sm px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer">
              Health Consultation
            </div>
          </Link>
          <a href="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/17/08/20250117082909-O5PHDG2A.json" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center border border-yellow-800 bg-blue-100 text-black font-medium text-sm px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer">
              Chat with Tisya
            </div>
          </a>
        </div>
      </div>

      {/* Desktop View - Exactly as specified */}
      <div className="w-full mt-24 py-12 bg-gradient-to-b from-green-50 to-white rounded-lg shadow-md hidden md:block">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          {/* Left Side Content */}
          <div className="text-center md:text-left space-y-6 md:mx-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-green-700">ArogyaBharat</h2>
            <h3 className="text-xl lg:text-2xl font-semibold text-green-500">
              Your Natural Health Solution
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg lg:text-xl">
              Arogya Bharat is a leading name in Ayurvedic medicine, Panchakarma, and
              natural treatments. Our mission is to help individuals achieve holistic well-being
              through ancient wisdom and modern research.
            </p>

            {/* Call to Action */}
            {/* <button className="mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg lg:text-xl px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              Start Your Wellness Journey Today
            </button> */}
             <h2 className="mt-4 text-green-600 font-bold text-xl lg:text-xl">
              Your Wellness Journey Starts Here..
            </h2>

            {/* Options Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Link href="/HealthConsultation" passHref>
                <div className="flex items-center justify-center border-2 border-green-400 bg-blue-100 text-black font-bold text-lg py-2 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                  Health Consultation
                </div>
              </Link>
              <a
                href="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/17/08/20250117082909-O5PHDG2A.json"
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <div className="flex items-center justify-center border-2 border-green-400 bg-blue-100 text-black font-bold text-lg py-2 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer w-full">
                  Chat with Tisya
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Rotating Image */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] flex items-center justify-center">
              {/* Rotating Chakra-Spiral */}
              <div className="absolute w-full h-full animate-spin-slow">
                <Image
                  src="/images/imageBox/ChakraSpiral1.png"
                  alt="chakra spiral"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Fixed Meditation Girl */}
              <div className="absolute w-[75%] h-[75%]">
                <Image
                  src="/images/imageBox/Mediation_girl.png"
                  alt="meditation girl"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global CSS for Animation */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
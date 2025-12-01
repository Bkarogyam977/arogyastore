import Image from 'next/image';


const awards = [
  {
    image: "/images/imageBox/business/Award-By-SunilShetty.jpg",
    name: "Pride Of Bharat Award",
    description: "For outstanding contributions to traditional medicine",
    year: "2023"
  },
  {
    image: "/images/imageBox/business/Award-India5000.jpg",
    name: "India 5000 Awards",
    description: "Recognizing groundbreaking formulations",
    year: "2019"
  },
];


export default function DoctorProfile() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden md:pt-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Dr. B.K. Chaurasia</span>
                  <span className="block text-green-600">Ayurvedic Guru</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    &quot;Dr. B.K. Chaurasia is a renowned Ayurvedic Physician, Visionary Healthcare Leader, and the Founder & Director of Arogya Bharat and BK Arogyam & Research Pvt. Ltd.
                     With over 15 years of clinical and research experience, Dr. Chaurasia has dedicated his life to transforming the healthcare ecosystem in India through Ayurveda, awareness, and accessibility.
                    .&quot;
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full md:h-56 lg:w-full lg:h-full relative">
            <Image
              src="/images/hops/bksir.webp"
              alt="Dr. B.K. Chaurasia"
              layout="fill"
              objectFit="cover"
              className="p-6 md:p-24"
              priority
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted Ayurvedic Expertise
            </h2>
            <p className="mt-3 text-xl text-green-100">
              Over 15 years of transforming lives through authentic Ayurveda
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pt-6">
              <div className="flow-root bg-green-800 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-green-700 mx-auto">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-white text-center">250,000+</h3>
                  <p className="mt-1 text-base text-green-100 text-center">Patients Treated</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-green-800 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-green-700 mx-auto">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-white text-center">25+</h3>
                  <p className="mt-1 text-base text-green-100 text-center">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-green-800 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-green-700 mx-auto">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-white text-center">100+</h3>
                  <p className="mt-1 text-base text-green-100 text-center">Treatment Protocols</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-green-800 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-green-700 mx-auto">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-white text-center">1,000+</h3>
                  <p className="mt-1 text-base text-green-100 text-center">Health Education Sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* About Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">About Dr. Chaurasia</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Transforming Healthcare Through Ayurveda
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Professional Background</h3>
                  <p className="mt-2 text-base text-gray-500">
                    B.A.M.S. (Bachelor of Ayurvedic Medicine & Surgery) with specialization in Kidney & Chronic Disease Management through Ayurveda.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Research & Innovation</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Developed several successful Ayurvedic Kits and Diet Protocols for chronic conditions like kidney failure, diabetes, and obesity.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Vision</h3>
                  <p className="mt-2 text-base text-gray-500">
                    To build a Swasth Bharat (Healthy India) by bringing authentic Ayurvedic care to every doorstep and making people self-reliant in their health.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Achievements</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Awarded for Excellence in Ayurvedic Healthcare by reputed organizations and recognized for combining traditional healing with modern digital health practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Vision Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Vision & Leadership</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Building a Swasth Bharat (Healthy India)
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto italic">
              &quot;Treat the root, not just the symptoms. Heal the body, educate the mind, empower the soul.&quot;
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white mx-auto">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">Authentic Ayurvedic Care</h3>
                  <p className="mt-1 text-base text-gray-500 text-center">
                    Bringing authentic Ayurvedic care to every doorstep across India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white mx-auto">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">Youth Empowerment</h3>
                  <p className="mt-1 text-base text-gray-500 text-center">
                    Empowering youth through Health Advisor Programs
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white mx-auto">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 text-center">Self-Reliance</h3>
                  <p className="mt-1 text-base text-gray-500 text-center">
                    Making people self-reliant in their health and income through Arogya Bharat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Minimal Awards Section */}
       <section className="py-4 bg-white">
           <div className="container mx-auto px-4 max-w-5xl">
               <div className="text-center mb-14">
               <h2 className="text-2xl font-light text-gray-800 mb-2">Awards</h2>
               <div className="w-20 h-px bg-gray-200 mx-auto"></div>
                   <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                       Our commitment to excellence in Ayurveda has been acknowledged through these honors
                   </p>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-2  gap-6">
               {awards.map((award, index) => (
                  <div key={index} className="group">
                  <div className="aspect-w-3 aspect-h-2 overflow-hidden">
                      <Image
                      src={award.image}
                      width={400}
                      height={300}
                      alt={award.name}
                      className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-90"
                      />
                  </div>
                  <div className="mt-4">
                      <div className="flex items-center justify-between">
                      <h3 className="text-lg font-normal text-gray-800">{award.name}</h3>
                      <span className="text-xs text-gray-400">{award.year}</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{award.description}</p>
                  </div>
                  </div>
              ))}
              </div>
          </div>
      </section>


      {/* Testimonial/Quote Section */}
      <div className="bg-green-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                A Movement for Holistic Health
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                &quot;Arogya Bharat is not just a brand – it&apos;s a movement. A movement where we treat, teach, and transform. Let&apos;s build an India where every person lives healthy, earns proudly, and helps others heal.&quot;
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                    Join the Movement
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 sm:p-10 sm:pb-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Dr. B.K. Chaurasia</h3>
                      <p className="text-sm leading-5 text-gray-500">Founder & Director, Arogya Bharat</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-base leading-6 text-gray-500">
                      With over 15 years of clinical and research experience, I&apos;ve dedicated my life to transforming the healthcare ecosystem in India through Ayurveda, awareness, and accessibility.
                    </p>
                  </div>
                </div>
                <div className="px-6 py-6 bg-gray-50 border-t border-gray-200 sm:px-10">
                  <p className="text-xs leading-5 text-gray-500">
                    Founder of BK Arogyam & Research Pvt. Ltd. and multiple health initiatives for public awareness and wellness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


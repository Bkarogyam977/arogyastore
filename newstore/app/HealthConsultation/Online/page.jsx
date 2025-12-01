
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const OnlineConsultation = () => {
  const specialties = [
    {
      name: "Cardiology",
      icon: "/images/imageBox/icons/heart.png",
      href: "/HealthConsultation/Doctors/8",
      bgColor: "bg-red-50"
    },
    {
      name: "Obesity",
      icon: "/images/imageBox/icons/obesity.png",
      href: "/HealthConsultation/Doctors/6",
      bgColor: "bg-blue-50"
    },
    {
      name: "Nephrology",
      icon: "/images/imageBox/icons/Kidney stone.png",
      href: "/HealthConsultation/Doctors/8",
      bgColor: "bg-purple-50"
    },
    {
      name: "Pain Management",
      icon: "/images/imageBox/icons/pain-in-joints.png",
      href: "/HealthConsultation/Doctors/8",
      bgColor: "bg-orange-50"
    },
    {
      name: "Endocrinology",
      icon: "/images/imageBox/icons/Sugar blood level.png",
      href: "/HealthConsultation/Doctors/8",
      bgColor: "bg-green-50"
    },
    {
      name: "More Soon..",
      icon: "/images/imageBox/icons/Waffle menu.png",
      href: "/HealthConsultation/Online#",
      bgColor: "bg-gray-50"
    }
  ];

  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Premium Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-emerald-700 text-white pt-24 pb-20 md:pt-28 md:pb-32 px-6 md:px-12 rounded-b-3xl shadow-lg -mt-16">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Text content */}
            <div className="max-w-2xl pt-8 md:pt-20">
              <h1 className="text-3xl md:text-3xl lg:text-6xl font-bold mb-6 leading-tight">
                Expert Online Medical <span className="text-emerald-200">Consultations</span>
              </h1>
              <p className="text-teal-100 text-xl md:text-2xl mb-10 leading-relaxed">
                Connect instantly with board-certified specialists from the comfort of your home
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-5">
                <button className="bg-white text-emerald-700 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Book Instant Consultation
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-20 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg">
                  How It Works
                </button>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        {/* Specialties Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Browse by <span className="text-emerald-600">Specialty</span>
            </h2>
            <Link href="/HealthConsultation/Online" className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
              View all <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
            {specialties.map((specialty, index) => (
              <Link key={index} href={specialty.href}>
                <div className={`${specialty.bgColor} rounded-xl p-6 flex flex-col items-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100`}>
                  <div className="bg-white p-3 rounded-full mb-4 shadow-sm w-16 h-16 flex items-center justify-center">
                    <Image
                      src={specialty.icon}
                      alt={specialty.name}
                      width={48}
                      height={48}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h3 className="text-center font-medium text-gray-800 text-sm md:text-base">{specialty.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-16 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            How Our <span className="text-emerald-600">Online Consultation</span> Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Select Your Specialist",
                description: "Browse our network of certified doctors and choose the right specialist for your needs.",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              },
              {
                step: "2",
                title: "Schedule Your Session",
                description: "Pick a convenient time slot and receive instant confirmation of your appointment.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                step: "3",
                title: "Secure Video Consultation",
                description: "Connect via our encrypted platform for a private, high-quality video consultation.",
                icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            What Our <span className="text-emerald-600">Patients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Anannda Singh",
                role: "Diabetes Patient",
                content: "The endocrinologist I consulted was incredibly knowledgeable and took time to explain everything. Saved me hours of waiting at a clinic!",
                rating: 5
              },
              {
                name: "Mira Rajpoot",
                role: "Heart Patient",
                content: "As someone with a busy schedule, being able to consult a cardiologist from my office during lunch break was a game-changer.",
                rating: 5
              },
              {
                name: "Priya Patel",
                role: "Chronic Pain Sufferer",
                content: "The pain management specialist provided personalized exercises that have significantly improved my quality of life.",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">`&quot;`{testimonial.content}`&quot;`</p>
                <div className="flex items-center">
                  <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center text-emerald-600 font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineConsultation;





//--------------------------------
// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';


// const OnlineConsultation = () => {
//   return (
//     <div className="p-8 bg-white min-h-screen">

//       {/* Consult With Experts Section */}
//       <div className="relative bg-green-500 text-white p-7 mt-12 rounded-xl overflow-hidden flex items-center justify-between mb-8 md:hidden">
//         <div>
//           <h2 className="text-2xl font-bold">Consult With Experts</h2>
//           <button className="mt-4 bg-white text-green-500 py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-green-100">
//             Book Appointment
//           </button>
//         </div>
//       </div>

//       {/* Doctor Image with Overflow Effect */}
//       <div className="absolute top-16 right-8 md:hidden">
//         <Image
//           src="/images/imageBox/icons/doctor.png"
//           alt="Doctor"
//           width={224}
//           height={224}
//           className="object-cover transform translate-x-12 translate-y-8"
//         />
//       </div>

//       {/* Choose What Suits You Best Section */}
//       <h2 className="text-2xl font-bold text-green-600 mb-6">Choose the Speciality</h2>

//       <div className="grid grid-cols-3 gap-2">

//         {/* Online Consultation Card */}
//         <Link href="/HealthConsultation/Online">
//           <div className="bg-yellow-100 border-2 border-dashed border-green-500 p-6 rounded-lg flex flex-col items-center cursor-pointer">
//             <Image
//               src="/images/imageBox/icons/heart.png"
//               alt="Online Consultation"
//               width={64}
//               height={64}
//               className="mb-4"
//             />
//             <h3 className="text-sm font-bold">Heart</h3>
//           </div>
//         </Link>

//         {/* Offline Consultation Card */}
//         <Link href="/HealthConsultation/Online">
//           <div className="bg-yellow-100 border-2 border-dashed border-green-500 p-6 rounded-lg flex flex-col items-center cursor-pointer">
//             <Image
//               src="/images/imageBox/icons/obesity.png"
//               alt="Offline Consultation"
//               width={64}
//               height={64}
//               className="mb-4"
//             />
//             <h3 className="text-sm font-bold">Obesity</h3>
//           </div>
//         </Link>

//         {/* Offline Consultation Card */}
//         <Link href="/HealthConsultation/Online">
//           <div className="bg-yellow-100 border-2 border-dashed border-green-500 p-6 rounded-lg flex flex-col items-center cursor-pointer">
//             <Image
//               src="/images/imageBox/icons/Kidney stone.png"
//               alt="Offline Consultation"
//               width={64}
//               height={64}
//               className="mb-4"
//             />
//             <h3 className="text-sm font-bold">Kidney</h3>
//           </div>
//         </Link>

//         {/* Online Consultation Card */}
//         <Link href="/HealthConsultation/Online">
//           <div className="bg-yellow-100 border-2 border-dashed border-green-500 p-6 rounded-lg flex flex-col items-center cursor-pointer">
//             <Image
//               src="/images/imageBox/icons/pain-in-joints.png"
//               alt="Online Consultation"
//               width={64}
//               height={64}
//               className="mb-4"
//             />
//             <h3 className="text-sm font-bold">Pain</h3>
//           </div>
//         </Link>

//         {/* Offline Consultation Card */}
//         <Link href="/HealthConsultation/Online">
//           <div className="bg-yellow-100 border-2 border-dashed border-green-500 p-6 rounded-lg flex flex-col items-center cursor-pointer">
//             <Image
//               src="/images/imageBox/icons/Sugar blood level.png"
//               alt="Offline Consultation"
//               width={64}
//               height={64}
//               className="w-16 h-16 mb-4"
//             />
//             <h3 className="text-sm font-bold">Sugar</h3>
//           </div>
//         </Link>

//         {/* Offline Consultation Card */}
//         <Link href="/HealthConsultation/Online">
//           <div className="bg-yellow-100 border-2 border-dashed border-green-500 p-6 rounded-lg flex flex-col items-center cursor-pointer">
//             <Image
//               src="/images/imageBox/icons/Waffle menu.png"
//               alt="Offline Consultation"
//               width={64}
//               height={64}
//               className="mb-4 object-contain"
//             />
//             <h3 className="text-sm font-bold">Kidney</h3>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default OnlineConsultation;


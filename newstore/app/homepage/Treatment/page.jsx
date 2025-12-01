// "use client";
// import React from "react";
// import TherapySection from "./TherepySection";
// import Image from "next/image";


// // Education options with Image icons
// const educationItems = [
//   { title: "Heart", image: "/images/imageBox/icons/heart.png" },
//   { title: "Obesity", image: "/images/imageBox/icons/obesity.png" },
//   { title: "Pain", image: "/images/imageBox/icons/pain-in-joints.png" },
//   { title: "Kidney", image: "/images/imageBox/icons/Kidney stone.png" },
//   { title: "Sugar", image: "/images/imageBox/icons/Sugar blood level.png" },
//   { title: "Others", image: "/images/imageBox/icons/Waffle menu.png" },
// ];

// // Doctor Data
// const onlineDoctors = [
//   {
//     name: "Dr. JK Tiwari",
//     image: "/images/imageBox/icons/doctor.png",
//   },
//   {
//     name: "Dr. Roza",
//     image: "/images/imageBox/icons/doctor.png",
//   },
// ];

// const experts = [
//   {
//     name: "Dr. Roza",
//     image: "/images/imageBox/icons/doctor.png",
//     qualification: "BAMS",
//     experience: "13yrs+ Experience",
//     location: "Varanasi | Mirzapur",
//   },
//   {
//     name: "Dr. B.K Chaurasia",
//     image: "/images/imageBox/icons/doctor.png",
//     qualification: "Nephrologist",
//     experience: "20yrs+ Experience",
//     location: "Mirzapur",
//   },
//   {
//     name: "Dr. Ritesh Chaurasia",
//     image: "/images/imageBox/icons/doctor.png",
//     qualification: "Cardiologist",
//     experience: "20yrs+ Experience",
//     location: "Mirzapur",
//   },
//   {
//     name: "Dr. Shimali Chaurasia",
//     image: "/images/imageBox/icons/doctor.png",
//     qualification: "Dermatologist",
//     experience: "20yrs+ Experience",
//     location: "Mirzapur",
//   },
// ];

// // Reusable Card Component
// const DoctorCard = ({ name, image, qualification, experience, location, isOnline }) => (
//   <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
//     {/* Image */}
//     <Image
//       src={image}
//       alt={name}
//       width={96}
//       height={96}
//       className="w-24 h-24 object-cover rounded-lg mr-4"
//     />

//     {/* Doctor Info */}
//     <div>
//       <h3 className="text-xl font-semibold">{name}</h3>
//       {isOnline ? (
//         <button className="mt-2 bg-green-500 text-white font-semibold py-1 px-4 rounded-full shadow-md hover:bg-green-600">
//           Consult Now
//         </button>
//       ) : (
//         <>
//           <p className="text-sm text-gray-600">{qualification}</p>
//           <p className="text-sm text-gray-500">{experience}</p>
//           <p className="text-sm text-green-600 mt-1">📍 {location}</p>
//         </>
//       )}
//     </div>
//   </div>
// );

// // Consult Section Component
// const ConsultSection = () => (
//   <div className="relative w-full max-w-7xl mx-auto bg-green-500 rounded-xl px-8 overflow-hidden flex flex-row items-center justify-between">
//     {/* Left Section - Text and Button */}
//     <div className="mb-4 md:mb-0">
//       <h2 className="text-white text-2xl md:text-5xl font-bold mb-4">Consult With Experts</h2>
//       <button className="bg-white text-green-500 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-green-100">
//         Book Appointment
//       </button>
//     </div>

//     {/* Right Section - Image Overflowing */}
//     <div className="md:relative">
//       <Image
//         src="/images/imageBox/icons/doctor.png"
//         alt="Doctor"
//         width={128}
//         height={128}
//         className="w-32 md:w-48"
//       />
//     </div>
//   </div>
// );


// const TreatmentSection = () => {
//   return (
//     <div className="relative w-full flex flex-col items-center bg-[#D5E9D6] pb-16">

//       {/* Hero Section with Curved Bottom */}
//       <div className="relative w-full bg-[#D5E9D6] h-20 md:h-80 flex items-center justify-center text-white font-bold text-2xl rounded-b-[40px]">
//         <p className="px-6 md:text-5xl text-orange-600">TREATMENT</p>
//       </div>

//       <div className="bg-orange-500 w-[90%] md:w-[70%] shadow-lg rounded-xl px-6 py-6">
//         <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
//           {educationItems.map((item, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg hover:shadow-md transition-all cursor-pointer">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={48}
//                   height={48}
//                   className="w-12 h-12 object-contain"
//                 />
//               </div>
//               <p className="text-sm mt-2 text-gray-700 text-center">{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Consult Section */}
//       <div className="w-full px-4 md:px-6 pt-16">
//         <ConsultSection />
//       </div>

//       {/* Online Doctor Section */}
//       <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
//         <h2 className="text-2xl font-bold mb-4">Online Doctor</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {onlineDoctors.map((doctor, index) => (
//             <DoctorCard key={index} {...doctor} isOnline={true} />
//           ))}
//         </div>

//         {/* Our Experts Section */}
//         <h2 className="text-2xl font-bold mt-8 mb-4">Our Experts</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {experts.map((expert, index) => (
//             <DoctorCard key={index} {...expert} isOnline={false} />
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };
// export default TreatmentSection;


"use client";
import React from "react";
import Image from "next/image";
import { CalendarOutlined, MessageOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";

// Education options with Image icons
const educationItems = [
  { title: "Heart", image: "/images/imageBox/icons/heart.png", docId: 2, url:"/homepage/HOPES/Heart" },
  { title: "Obesity", image: "/images/imageBox/icons/obesity.png", docId: 7, url:"/homepage/HOPES/Obesity"},
  { title: "Pain", image: "/images/imageBox/icons/pain-in-joints.png", docId: 6, url:"/homepage/HOPES/Pain" },
  { title: "Kidney", image: "/images/imageBox/icons/Kidney stone.png", docId: 4, url:"/homepage/HOPES/EveryKidney" },
  { title: "Sugar", image: "/images/imageBox/icons/Sugar blood level.png", docId: 8, url:"/homepage/HOPES/Sugar" },
  { title: "Others", image: "/images/imageBox/icons/Waffle menu.png", docId: 2 , url:"#"},
];


// Doctor Data
const onlineDoctors = [
  {
    name: "Dr. JK Tiwari",
    image: "/images/imageBox/doctors/dr_jitendra.jpg",
    specialty: "General Physician",
    rating: "4.9",
  },
  {
    name: "Dr. Anil",
    image: "/images/imageBox/doctors/drRatanesh.png",
    specialty: "Ayurveda Specialist",
    rating: "4.8",
  },
];


const experts = [
  {
    name: "Dr. Jitendra Tiwari",
    image: "/images/imageBox/doctors/dr_jitendra.jpg",
    qualification: "BAMS",
    experience: "13yrs+ Experience",
    location: "Varanasi",
    specialty: "Heart Specialist",
    docId: 2,
  },
  {
    name: "Dr. Vandana Chaurasia",
    image: "/images/imageBox/doctors/vandana.png",
    qualification: "Nephrologist",
    experience: "20yrs+ Experience",
    location: "Mirzapur",
    specialty: "Sugar Specialist",
    docId: 8,
  },
  {
    name: "Dr. Ritesh Chaurasia",
    image: "/images/imageBox/doctors/Dr-Ritesh.jpeg",
    qualification: "Cardiologist",
    experience: "20yrs+ Experience",
    location: "Mirzapur",
    specialty: "Kidney Specialist",
    docId: 4,
  },
  {
    name: "Dr. Sashi Chaurasia",
    image: "/images/imageBox/doctors/Dr.Sashi.jpeg",
    qualification: "Dermatologist",
    experience: "20yrs+ Experience",
    location: "Mirzapur",
    specialty: "Obesity Specialist",
    docId: 7,
  },
  {
    name: "Dr. Anshu",
    image: "/images/imageBox/doctors/vandana.png",
    qualification: "Cardiologist",
    experience: "20yrs+ Experience",
    location: "Mirzapur",
    specialty: "Pain Specialist",
    docId: 6,
  },
];


// Reusable Card Component
const DoctorCard = ({ name, image, qualification, experience, location, isOnline, specialty, rating, docId }) => (
  <div className={`group flex flex-col h-full rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg ${
    isOnline ? 'bg-green-50 border border-green-100' : 'bg-white border border-gray-100'
  }`}>
    <div className="flex p-4 md:p-6 flex-1">
      {/* Doctor Image */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 border-white shadow-md">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      
      {/* Doctor Info */}
      <div className="ml-4 flex-1">
        <h3 className="text-lg md:text-xl font-bold text-gray-800">{name}</h3>
        {isOnline ? (
          <>
            <p className="text-sm text-gray-600 mt-1">{specialty}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★</span>
              <span className="text-sm text-gray-700 ml-1">{rating}</span>
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Online</span>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-600 mt-1">{specialty}</p>
            <p className="text-sm text-gray-500">{experience}</p>
            <p className="text-sm text-green-600 mt-2">📍 {location}</p>
          </>
        )}
      </div>
    </div>
    
    {/* Action Button */}
    <div className="px-4 pb-4 md:px-6 md:pb-6">
      <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 ${
        isOnline 
          ? 'bg-green-600 text-white hover:bg-green-700' 
          : 'bg-white text-green-600 border border-green-600 hover:bg-green-50'
      }`}>
        {isOnline ? (
          <>
            <MessageOutlined /> Consult Now
          </>
        ) : (
          <>
          <Link href={`/HealthConsultation/Doctors/${docId}`} passHref>
            <CalendarOutlined /> Book Appointment
          </Link>
          </>
        )}
      </button>
    </div>
  </div>
);


const ConsultSection = () => (
  <div className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg">
    <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 md:p-10">
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Text Content - Always first in DOM */}
        <div className="order-1 md:order-none text-center md:text-left mb-6 md:mb-0 md:mr-8">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-3">
            Consult With Our Experts
          </h2>
          <p className="text-green-100 mb-6 md:mb-4 max-w-lg mx-auto md:mx-0">
            Get personalized treatment plans from experienced doctors specialized in various fields
          </p>
          
          {/* Desktop Button - Hidden on mobile */}
          <button className="hidden md:flex bg-white text-green-600 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-green-50 transition-colors duration-300 items-center gap-2">
            <CalendarOutlined /> Book Appointment
          </button>
        </div>

        {/* Image and Mobile Button Container */}
        <div className="order-3 md:order-none w-full md:w-auto flex flex-col items-center">
          {/* Doctor Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 md:mb-0">
            <Image
              src="/images/imageBox/icons/doctor.png"
              alt="Doctor"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Mobile Button - Hidden on desktop */}
          <Link href="/Healthconsultaion/online" passHref>
          <button className="md:hidden w-full max-w-xs bg-white text-green-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-green-50 transition-colors duration-300 flex items-center justify-center gap-2">
            <CalendarOutlined /> Book Appointment
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);



const TreatmentSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#f0f9f0] to-[#e0f2e0]">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-r from-[#2E7D32] to-[#388E3C] h-40 md:h-64 flex items-center justify-center rounded-b-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E0F7FA]">
            TREATMENT
          </span>
        </h1>
      </div>

      {/* Disease Categories Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 -mt-8 md:-mt-16 relative">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
            Specialized Treatments
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 md:gap-6">
            {educationItems.map((item, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-green-50 rounded-xl p-3 group-hover:bg-green-100 transition-colors duration-300">
                  {/* <Link href={`/HealthConsultation/Doctors/${item.docId}`} passHref> */}
                  <Link href={item.url} passHref>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />
                  </Link>
                </div>
                  <p className="text-sm md:text-base font-medium text-gray-700 mt-3 text-center">
                    {item.title}
                  </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Consult Section */}
      <div className="w-full px-4 md:px-6 pt-12 md:pt-16">
        <ConsultSection />
      </div>

      {/* Doctors Sections */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Online Doctor Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Online Doctors</h2>
              <p className="text-gray-600">Available now for immediate consultation</p>
            </div>
            {/* <button className="mt-4 md:mt-0 text-green-600 font-medium flex items-center">
              View all <ArrowRightOutlined className="ml-1" />
            </button> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineDoctors.map((doctor, index) => (
              <DoctorCard key={index} {...doctor} isOnline={true} />
            ))}
          </div>
        </div>

        {/* Our Experts Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Specialists</h2>
              <p className="text-gray-600">Highly qualified doctors with extensive experience</p>
            </div>
            {/* <button className="mt-4 md:mt-0 text-green-600 font-medium flex items-center">
              View all <ArrowRightOutlined className="ml-1" />
            </button> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((expert, index) => (
              <DoctorCard key={index} {...expert} isOnline={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default TreatmentSection;
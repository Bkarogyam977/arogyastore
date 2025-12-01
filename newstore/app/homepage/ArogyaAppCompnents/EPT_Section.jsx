// "use client";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// const EPT_Section = () => {
//   const router = useRouter();

//   const cards = [
//     {
//       title: "EDUCATION",
//       description: "The First Step to Wellness!",
//       longDescription: "ArogyaBharat offers holistic education and health programs that nurtures body as a whole, empower individuals with knowledge for disease prevention, wellness, and healing.",
//       btnText: "Know More",
//       bgColor: "bg-green-500",
//       mobileBgColor: "bg-green-500",
//       desktopBgColor: "bg-green-100",
//       imgSrc: "/images/imageBox/education.png",
//       icon: "📚",
//       route: "/homepage/Education",
//     },
//     {
//       title: "PREVENTION",
//       description: "Your First Step to a Disease-Free Life!",
//       longDescription: "Arogya Bharat empowers you with Ayurvedic prevention strategies to safeguard health, restore balance, and lead a disease-free life.",
//       btnText: "Know More",
//       bgColor: "bg-yellow-400",
//       mobileBgColor: "bg-yellow-400",
//       desktopBgColor: "bg-yellow-100",
//       imgSrc: "/images/imageBox/prevention.png",
//       icon: "🛡️",
//       route: "/homepage/Prevention",
//     },
//     {
//       title: "TREATMENT",
//       description: "Your Journey to Complete Rerrcovery!",
//       longDescription: "Arogya Bharat personalizes Ayurvedic treatments, herbal remedies, and lifestyle guidance to address individual health concerns and balance doshas through a scientific approach.",
//       btnText: "Know More",
//       bgColor: "bg-red-400",
//       mobileBgColor: "bg-red-400",
//       desktopBgColor: "bg-red-100",
//       imgSrc: "/images/imageBox/treatment.png",
//       icon: "🌿",
//       route: "/homepage/Treatment",
//     },
//   ];

//   return (
//     <div className="w-full bg-gradient-to-b from-white to-gray-100 md:py-14">
//       {/* Mobile View */}
//       <div className="md:hidden px-4">
//         <div className="flex overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory pb-2">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`min-w-[85vw] h-[180px] ${card.mobileBgColor} rounded-xl p-5 shadow-lg flex flex-row justify-between items-center snap-center`}
//             >
//               {/* Left Section - Text */}
//               <div className="flex flex-col space-y-2 w-3/5">
//                 <h2 className="text-xl font-bold text-white">{card.title}</h2>
//                 <p className="text-sm font-bold text-white opacity-90">{`${card.description}`}</p>
//                 <button
//                   onClick={() => router.push(card.route)}
//                   className="bg-white text-gray-800 font-semibold py-2 px-3 rounded-md shadow-md hover:bg-gray-200 transition-all text-sm w-fit"
//                 >
//                   {card.btnText}
//                 </button>
//               </div>

//               {/* Right Section - Image */}
//               <div className="relative w-2/5 h-full flex justify-center items-center">
//                 <Image
//                   src={card.imgSrc}
//                   alt={card.title}
//                   width={120}
//                   height={120}
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Desktop View */}
//       <div className="hidden md:block md:px-10 lg:px-16">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Arogya Bharat – With You at Every Step,
//           <span className="text-green-600"> Education</span>,
//           <span className="text-yellow-600"> Prevention</span> &
//           <span className="text-red-600"> Treatment</span>
//         </h2>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {cards.map((section, index) => (
//             <div
//               key={index}
//               className={`p-6 rounded-xl shadow-lg ${section.desktopBgColor} flex flex-row h-64 transition-all duration-300 hover:shadow-xl`}
//             >
//               {/* Left Section - Text */}
//               <div className="flex flex-col w-3/5 pr-4">
//                 <div className='flex flex-row items-center mb-3'>
//                   <div className="text-3xl mr-2">{section.icon}</div>
//                   <h3 className="text-lg font-bold">{section.title}</h3>
//                 </div>
//                 <p className="text-gray-700 font-bold text-sm mb-4">{section.longDescription}</p>
//                 <button
//                   onClick={() => router.push(section.route)}
//                   className="mt-auto bg-white text-green-600 font-bold px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm w-fit"
//                 >
//                   {section.btnText}
//                 </button>
//               </div>

//               {/* Right Section - Image */}
//               <div className="relative w-2/5 h-full flex justify-center items-center">
//                 <Image
//                   src={section.imgSrc}
//                   alt={section.title}
//                   width={160}
//                   height={160}
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default EPT_Section;

"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const EPT_Section = () => {
  const router = useRouter();

  const cards = [
    {
      title: "EDUCATION",
      description: "The First Step to Wellness!",
      longDescription:
        "ArogyaBharat offers holistic education and health programs that nurtures body as a whole, empower individuals with knowledge for disease prevention, wellness, and healing.",
      btnText: "Know More",
      bgColor: "bg-green-500",
      mobileBgColor: "bg-green-50",
      desktopBgColor: "bg-green-100",
      imgSrc: "/images/imageBox/education.png",
      icon: "📚",
      route: "/homepage/Education",
      textColor: "text-green-600",
    },
    {
      title: "PREVENTION",
      description: "Your First Step to a Disease-Free Life!",
      longDescription:
        "Arogya Bharat empowers you with Ayurvedic prevention strategies to safeguard health, restore balance, and lead a disease-free life.",
      btnText: "Know More",
      bgColor: "bg-yellow-400",
      mobileBgColor: "bg-yellow-50",
      desktopBgColor: "bg-yellow-100",
      imgSrc: "/images/imageBox/prevention.png",
      icon: "🛡️",
      route: "/homepage/Prevention",
      textColor: "text-yellow-600",
    },
    {
      title: "TREATMENT",
      description: "Your Journey to Complete Recovery!",
      longDescription:
        "Arogya Bharat personalizes Ayurvedic treatments, herbal remedies, and lifestyle guidance to address individual health concerns and balance doshas through a scientific approach.",
      btnText: "Know More",
      bgColor: "bg-red-400",
      mobileBgColor: "bg-red-50",
      desktopBgColor: "bg-red-100",
      imgSrc: "/images/imageBox/treatment.png",
      icon: "🌿",
      route: "/homepage/Treatment",
      textColor: "text-red-600",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-100 md:py-14">
      {/* New Minimalist Mobile View */}
      <div className="md:hidden px-4 py-4 bg-white">
        {/* <h2 className="text-2xl font-medium text-center mb-6 text-gray-800">
          Your Wellness Journey
        </h2> */}

        <div className="space-y-4">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => router.push(card.route)}
              className={`${card.mobileBgColor} p-5 rounded-xl border border-gray-100 active:scale-[0.98] transition-transform`}
            >
              <div className="flex items-start space-x-4">
                <div className={`text-3xl ${card.textColor}`}>{card.icon}</div>
                <div>
                  <h3 className={`text-lg font-semibold ${card.textColor}`}>
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {card.description}
                  </p>
                  {/* <div className="mt-3">
                    <span className="text-xs font-medium text-gray-500 inline-flex items-center">
                      Learn more
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-3 w-3 ml-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Original Desktop View */}
      <div className="hidden md:block md:px-10 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Arogya Bharat – With You at Every Step,
          <span className="text-green-600"> Education</span>,
          <span className="text-yellow-600"> Prevention</span> &
          <span className="text-red-600"> Treatment</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((section, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg ${section.desktopBgColor} flex flex-col sm:flex-row transition-all duration-300 hover:shadow-xl`}
            >
              {/* Left Section - Text */}
              <div className="flex flex-col w-full sm:w-3/5 pr-0 sm:pr-4">
                <div className="flex flex-row items-center mb-3">
                  <div className="text-3xl mr-2">{section.icon}</div>
                  <h3 className="text-lg font-bold break-words">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-700 font-bold text-sm mb-4 break-words">
                  {section.longDescription}
                </p>
                <button
                  onClick={() => router.push(section.route)}
                  className="mt-auto bg-white text-green-600 font-bold px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm w-fit"
                >
                  {section.btnText}
                </button>
              </div>

              {/* Right Section - Image */}
              <div className="relative w-full sm:w-2/5 h-auto mt-4 sm:mt-0 flex justify-center items-center">
                <Image
                  src={section.imgSrc}
                  alt={section.title}
                  width={160}
                  height={160}
                  className="object-contain max-h-[160px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EPT_Section;

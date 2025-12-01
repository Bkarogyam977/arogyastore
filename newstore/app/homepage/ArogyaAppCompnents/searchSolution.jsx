'use client';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SearchOutlined } from "@ant-design/icons";

const categories = [
  {
    name: "ALLOPATH",
    path: "/AllopathToAyurveda",
    icon: "/images/imageBox/icons/Icon-Allopath.png",
    color: "bg-red-100",
    textColor: "text-red-600",
    title: "Allopathic Medicine Solutions",
    description: "Find Ayurvedic alternatives for common allopathic medicines"
  },
  {
    name: "AYURVEDA",
    path: "/AllopathToAyurveda",
    icon: "/images/imageBox/icons/Icon-Ayurveda.png",
    color: "bg-orange-100",
    textColor: "text-orange-600",
    title: "Ayurvedic Remedies",
    description: "Discover authentic Ayurvedic treatments and their benefits"
  },
  {
    name: "DISEASE",
    path: "/AllopathToAyurveda",
    icon: "/images/imageBox/icons/Icon-Disease.png",
    color: "bg-green-100",
    textColor: "text-green-600",
    title: "Disease Specific Solutions",
    description: "Get personalized Ayurvedic recommendations for your condition"
  },
];


const SearchSolutions = () => {
  const router = useRouter();

  return (
    <div className="bg-white md:bg-gray-100 p-4 md:p-8">
       <div className="flex items-center text-xl md:text-2xl font-semibold text-green-500 mb-6 justify-start">
         Search your Solutions here..
         <SearchOutlined className="ml-2 text-lg md:text-xl text-gray-500" />
       </div>


        {/* Mobile Layout - Horizontal row */}
        <div className="md:hidden flex flex-row items-center justify-between space-x-2 overflow-x-auto py-1 scrollbar-hide">
          {categories.map((category, index) => (
            <div 
              key={index}
              onClick={() => router.push(category.path)}
              className={`flex flex-col items-center justify-center min-w-[100px] cursor-pointer ${category.color} rounded-lg p-3`}
            >
              <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-2 ${category.color}`}>
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">BY</div>
                <div className={`text-sm font-bold ${category.textColor}`}>{category.name}</div>
              </div>
            </div>
          ))}
        </div>



        {/* Desktop Layout - Image left, content right */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              onClick={() => router.push(category.path)}
              className={`grid grid-cols-5 gap-6 items-center cursor-pointer group hover:shadow-lg transition-shadow p-6 rounded-xl  ${category.color}`}
            >
              <div className="col-span-1 flex justify-center">
                <div className={`w-full h-full rounded-full flex items-center justify-center ${category.color} group-hover:scale-105 transition-transform`}>
                  <Image
                    src={category.icon}
                    alt={category.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="col-span-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-500 mr-2">BY</span>
                  <span className={`text-xl font-bold ${category.textColor}`}>{category.name}</span>
                </div>
                <button className={`mt-4 px-6 py-2 rounded-lg ${category.textColor} border ${category.textColor.replace('text', 'border')} hover:bg-opacity-10 ${category.color.replace('bg', 'hover:bg')} transition-colors`}>
                  Explore Options
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* Inline CSS for Scrollbar Hide */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
    </div>
  );
};

export default SearchSolutions;







// 'use client';
// import { SearchOutlined } from "@ant-design/icons";
// import { useRouter } from "next/navigation";

// // Card Data
// const categories = [
//   {
//     name: "By Allopath",
//     path: "/AllopathToAyurveda",
//     title: "Chemical or Nature?",
//     bgColor: "bg-green-500",
//   },
//   {
//     name: "By Symptoms",
//     path: "/AllopathToAyurveda",
//     title: "Decode Your Health",
//     bgColor: "bg-green-500",
//   },
//   {
//     name: "By Ayurveda",
//     path: "/AllopathToAyurveda",
//     title: "Ayurveda - Safe Choice?",
//     bgColor: "bg-green-500",
//   },
// ];


// const SearchSolutions = () => {
//   const router = useRouter();

//   return (
//     <div className="bg-gradient-to-b from-white to-white p-4 md:px-10 px-2">
//       {/* Search Heading */}
//       <div className="flex items-center text-xl md:text-2xl font-semibold text-green-500 mb-6 justify-center md:justify-start">
//         Search your Solutions here..
//         <SearchOutlined className="ml-2 text-lg md:text-xl text-gray-500" />
//       </div>

//       {/* Cards Container - Different layout for mobile vs desktop */}
//       <div className="md:hidden flex overflow-x-auto space-x-4 scrollbar-hide pb-2">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             onClick={() => router.push(category.path)}
//             className={`min-w-[150px] h-28 p-2 rounded-xl text-white cursor-pointer shadow-md ${category.bgColor} hover:scale-105 transition-transform`}
//           >
//             <h3 className="text-[15px] font-bold">{category.title}</h3>
//             <div className="mt-2">
//               <div className="flex items-center justify-center bg-white text-gray-800 rounded-lg py-2 px-1 text-sm font-semibold">
//                 {category.name}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Desktop Layout */}
//       <div className="hidden md:grid grid-cols-3 gap-6">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             onClick={() => router.push(category.path)}
//             className={`h-32 p-4 rounded-xl text-white cursor-pointer shadow-md ${category.bgColor} hover:scale-105 transition-transform flex flex-col justify-between`}
//           >
//             <h3 className="text-lg font-bold">{category.title}</h3>
//             <div className="mt-auto">
//               <div className="flex items-center justify-center bg-white text-gray-800 rounded-lg py-2 px-4 text-base font-semibold">
//                 {category.name}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Inline CSS for Scrollbar Hide */}
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

// export default SearchSolutions;


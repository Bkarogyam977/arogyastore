
import {
  BookOutlined,
  ReadOutlined,
  MedicineBoxOutlined,
  ThunderboltOutlined,
  ExperimentOutlined,
  BugOutlined,
  HeartOutlined,
  SmileOutlined,
  CheckCircleOutlined,
  FireOutlined,
  CloudOutlined,
  RestOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import { Articles } from "./RelatedArticle";
import { RelatedVideos } from "./RelatedVideos";
import { RelatedDocuments } from "./RelatedDocs";
import Link from 'next/link';


const EducationSection = () => {
  // Education options with Ant Design icons
  const educationItems = [
    { title: "Courses", icon: <BookOutlined className="text-blue-600" />, navLink:"#" },
    { title: "Articles", icon: <ReadOutlined className="text-blue-600" />, navLink:"#" },
    { title: "Allopath to Ayurveda", icon: <MedicineBoxOutlined className="text-blue-600" />, navLink:"/AllopathToAyurveda" },
    { title: "Flash Cards", icon: <ThunderboltOutlined className="text-blue-600" />, navLink:"#" },
    { title: "Golden Rules", icon: <ExperimentOutlined className="text-blue-600" />, navLink:"#" },
    { title: "Diseases", icon: <BugOutlined className="text-blue-600" />, navLink:"#" },
  ];

  // Updated Golden Rules List in Hindi with Ayurvedic focus
  const goldenRules = [
    { title: "सुबह खाली पेट 3-4 ग्लास पानी (तांबे के बर्तन में)", icon: <CloudOutlined className="text-teal-500" />, emoji: "💧" },
    { title: "भोजन के तुरंत बाद पानी न पीयें", icon: <CheckCircleOutlined className="text-teal-500" />, emoji: "🚫" },
    { title: "रोज 10-15 ग्लास पानी पीयें", icon: <RestOutlined className="text-teal-500" />, emoji: "🥛" },
    { title: "सुबह नाश्ते में फल व कच्चे आहार", icon: <SafetyOutlined className="text-teal-500" />, emoji: "🍎" },
    { title: "रोजाना कम से कम 2 कि.मी. पैदल चलें", icon: <FireOutlined className="text-teal-500" />, emoji: "🚶‍♂️" },
    { title: "सप्ताह में एक दिन फलाहार व उपवास", icon: <HeartOutlined className="text-teal-500" />, emoji: "🕉️" },
    { title: "प्रति वर्ष कायाशुद्धि करायें", icon: <SmileOutlined className="text-teal-500" />, emoji: "🧘‍♀️" },
    { title: "सकारात्मक सोच व आध्यात्मिक पठन", icon: <MedicineBoxOutlined className="text-teal-500" />, emoji: "📖" },
    { title: "साल में एक बार पूरी शरीर जांच", icon: <ThunderboltOutlined className="text-teal-500" />, emoji: "🩺" },
    { title: "आयुर्वेद आधारित फूड सप्लिमेंट", icon: <BugOutlined className="text-teal-500" />, emoji: "🌿" },
  ];

  return (
    <div className="relative w-full flex flex-col items-center bg-gradient-to-b from-[#D5E9D6] to-gray-100 min-h-screen">
      {/* Hero Section - Mobile first approach */}
      <div className="relative w-full h-48 md:h-96 bg-gradient-to-r from-green-600 to-teal-500 rounded-b-[40px] md:rounded-b-[80px] overflow-hidden flex items-center justify-center">
        <div className="relative text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-1 md:mb-2 md:pt-4">Our</h1>
          <h1 className="text-4xl md:text-7xl font-bold text-orange-300 drop-shadow-md md:drop-shadow-lg">EDUCATION</h1>
          <p className="text-white mt-2 md:mt-4 text-sm md:text-xl max-w-2xl mx-auto hidden md:block">
            Discover holistic health knowledge through our comprehensive resources
          </p>
        </div>
      </div>

      {/* Education Cards Grid - Positioned differently for mobile vs desktop */}
      <div className="w-[90%] max-w-6xl mt-[-60px] md:mt-[-80px] ">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {educationItems.map((item, index) => (
            <Link key={index} href={item.navLink} passHref>
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="bg-blue-50 p-2 md:p-3 rounded-full mb-2">
                  <span className="text-xl md:text-2xl">{item.icon}</span>
                </div>
                <p className="text-xs md:text-sm font-semibold text-gray-700 text-center">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Golden Rules Section - Adjusted for mobile */}
      <div className="w-[90%] max-w-6xl mt-16 md:mt-20 mb-8 md:mb-12 bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-teal-500 to-green-500 p-3 md:p-4">
          <h2 className="text-lg md:text-2xl font-bold text-white text-center">
            सम्पूर्ण स्वास्थ्य के सुनहरे व सर्वश्रेष्ठ नियम
          </h2>
        </div>
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {goldenRules.map((rule, index) => (
              <div
                key={index}
                className="flex items-start p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-teal-50 transition-all duration-200 border border-gray-100"
              >
                <div className="bg-teal-100 p-1 md:p-2 rounded-full mr-2">
                  {/* <span className="text-base md:text-lg">{rule.icon}</span> */}
                  <span className="text-base md:text-lg">{rule.emoji}</span>
                </div>
                <div>
                  <p className="text-sm md:text-md font-semibold text-green-800">{rule.title}</p>
                  {/* <p className="text-xl md:text-2xl">{rule.emoji}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections - Adjusted spacing for mobile */}
      <div className="w-[90%] max-w-6xl space-y-8 md:space-y-12 mb-12 md:mb-16">
        <Articles />
        <RelatedVideos />
        <RelatedDocuments />
      </div>
    </div>
  );
};

export default EducationSection;






// import {
//   BookOutlined,
//   ReadOutlined,
//   MedicineBoxOutlined,
//   ThunderboltOutlined,
//   ExperimentOutlined,
//   BugOutlined,
//   HeartOutlined,
//   SmileOutlined,
//   CheckCircleOutlined,
//   FireOutlined,
//   CloudOutlined,
//   RestOutlined,
//   SafetyOutlined,
// } from "@ant-design/icons";
// import { Articles } from "./RelatedArticle";
// import { RelatedVideos } from "./RelatedVideos";
// import { RelatedDocuments } from "./RelatedDocs";

// const EducationSection = () => {
//   // Education options with Ant Design icons
//   const educationItems = [
//     { title: "Courses", icon: <BookOutlined className="text-blue-600" /> },
//     { title: "Articles", icon: <ReadOutlined className="text-blue-600" /> },
//     { title: "Allopath to Ayurveda", icon: <MedicineBoxOutlined className="text-blue-600" /> },
//     { title: "Flash Cards", icon: <ThunderboltOutlined className="text-blue-600" /> },
//     { title: "Golden Rules", icon: <ExperimentOutlined className="text-blue-600" /> },
//     { title: "Diseases", icon: <BugOutlined className="text-blue-600" /> },
//   ];

//   // Golden Rules List
//   const goldenRules = [
//     { title: "Hydrate Your Body", icon: <CloudOutlined className="text-teal-500" />, emoji: "💧" },
//     { title: "Eat Balanced Diet", icon: <CheckCircleOutlined className="text-teal-500" />, emoji: "🥗" },
//     { title: "Quality Sleep", icon: <RestOutlined className="text-teal-500" />, emoji: "😴" },
//     { title: "Manage Stress", icon: <SafetyOutlined className="text-teal-500" />, emoji: "🧘‍♀️" },
//     { title: "Limit Processed Foods", icon: <FireOutlined className="text-teal-500" />, emoji: "🚫🍭" },
//     { title: "Healthy Gut", icon: <HeartOutlined className="text-teal-500" />, emoji: "🦠" },
//     { title: "Stay Positive", icon: <SmileOutlined className="text-teal-500" />, emoji: "😊" },
//     { title: "Health Checkups", icon: <MedicineBoxOutlined className="text-teal-500" />, emoji: "🩺" },
//     { title: "Move Every Day", icon: <ThunderboltOutlined className="text-teal-500" />, emoji: "🏃‍♂️" },
//     { title: "Avoid Toxins", icon: <BugOutlined className="text-teal-500" />, emoji: "🚭" },
//   ];

//   return (
//     <div className="relative w-full flex flex-col items-center bg-gradient-to-b from-[#D5E9D6] to-gray-100 min-h-screen">
//       {/* Hero Section - Mobile first approach */}
//       <div className="relative w-full h-48 md:h-96 bg-gradient-to-r from-green-600 to-teal-500 rounded-b-[40px] md:rounded-b-[80px] overflow-hidden flex items-center justify-center">
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-3xl md:text-6xl font-bold text-white mb-1 md:mb-2">Our</h1>
//           <h1 className="text-4xl md:text-7xl font-bold text-orange-300 drop-shadow-md md:drop-shadow-lg">EDUCATION</h1>
//           <p className="text-white mt-2 md:mt-4 text-sm md:text-xl max-w-2xl mx-auto hidden md:block">
//             Discover holistic health knowledge through our comprehensive resources
//           </p>
//         </div>
//       </div>

//       {/* Education Cards Grid - Positioned differently for mobile vs desktop */}
//       <div className="w-[90%] max-w-6xl mt-[-60px] md:mt-[-80px] relative z-20">
//         <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
//           {educationItems.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
//             >
//               <div className="bg-blue-50 p-2 md:p-3 rounded-full mb-2">
//                 <span className="text-xl md:text-2xl">{item.icon}</span>
//               </div>
//               <p className="text-xs md:text-sm font-medium text-gray-700 text-center">{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Golden Rules Section - Adjusted for mobile */}
//       <div className="w-[90%] max-w-6xl mt-16 md:mt-20 mb-8 md:mb-12 bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
//         <div className="bg-gradient-to-r from-teal-500 to-green-500 p-3 md:p-4">
//           <h2 className="text-lg md:text-2xl font-bold text-white text-center">
//             10 Golden Rules for a Healthy Life
//           </h2>
//         </div>
//         <div className="p-4 md:p-6">
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
//             {goldenRules.map((rule, index) => (
//               <div
//                 key={index}
//                 className="flex items-start p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-teal-50 transition-all duration-200 border border-gray-100"
//               >
//                 <div className="bg-teal-100 p-1 md:p-2 rounded-full mr-2">
//                   <span className="text-base md:text-lg">{rule.icon}</span>
//                 </div>
//                 <div>
//                   <p className="text-xs md:text-sm font-medium text-gray-800">{rule.title}</p>
//                   <p className="text-xl md:text-2xl">{rule.emoji}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Content Sections - Adjusted spacing for mobile */}
//       <div className="w-[90%] max-w-6xl space-y-8 md:space-y-12 mb-12 md:mb-16">
//         <Articles />
//         <RelatedVideos />
//         <RelatedDocuments />
//       </div>
//     </div>
//   );
// };
// export default EducationSection;


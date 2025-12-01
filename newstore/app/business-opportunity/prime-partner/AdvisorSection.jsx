// import { CheckCircleOutlined } from '@ant-design/icons';


// const benefits = [
//     "Startup Franchise Kit",
//     "Product Catalogue",
//     "Micro Franchise Decor Plan & Layout Guidelines",
//     "Owner Training & Staff Training",
//     "Doctor Training & Management Guidelines",
//     "Day-to-Day Maintenance Planner",
//     "Online Nation-Level Digital Branding Integration",
//     "Franchise License for 2 Years",
//     "Arogya Talk App",
//     "ERP Software",
//     "Online Promotion Guidelines",
//     "Franchise Helpline Support",
// ];


// const AdvisorSection = () => {
//   return (
//     <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-7xl mx-auto">

//         {/* Section Header */}
//         <div className="text-center mb-12 relative">
//           <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-30"></div>
//           <h2 className="relative inline-block px-6 py-2 bg-white text-3xl md:text-4xl font-bold text-amber-900">
//                 Associate-Advisor (For Doctors Only)
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-amber-500"></span>
//           </h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
//                 Join our mission to bring authentic Ayurvedic healing worldwide
//           </p>
//         </div>


//         {/* Hero Card for Associate Advisor (Doctors) */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 border border-blue-100">
//             <div className="md:flex">
//                 <div className="md:w-2/3 p-8 md:p-12">
//                 <div className="flex items-center mb-2">
//                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">HTC</span>
//                     <h3 className="text-2xl font-semibold text-blue-800">
//                     Associate Advisor
//                     </h3>
//                 </div>
//                 <p className="text-sm text-blue-600 mb-4">
//                     (For Doctors Only)
//                 </p>
                
//                 {/* Main Benefit */}
//                 <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
//                     <div className="flex items-center">
//                     <div className="bg-blue-100 p-2 rounded-full mr-4">
//                         <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                         </svg>
//                     </div>
//                     <div>
//                         <p className="text-lg font-medium">
//                         <span className="text-blue-600">20% Wallet Money + 10% Retail Margin</span>
//                         </p>
//                         <p className="text-blue-700 font-bold">
//                         30% Direct Benefit
//                         </p>
//                     </div>
//                     </div>
//                 </div>
                
//                 {/* Practice Note */}
//                 <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
//                     <p className="text-sm text-gray-600 italic">
//                     Can practice offline/online, refer OPD/IPD cases but cannot distribute products as stockists to advisors/market
//                     </p>
//                 </div>
                
//                 {/* Benefits List */}
//                 <div className="space-y-4 mb-8">
//                     {/* Benefit 1 */}
//                     <div className="flex items-start">
//                     <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
//                         <span className="text-blue-800 font-bold text-sm">1</span>
//                     </div>
//                     <div>
//                         <p className="text-lg font-medium">
//                         <span className="text-blue-600">30%-60% benefit on your own OPD</span>
//                         </p>
//                     </div>
//                     </div>
                    
//                     {/* Benefit 2 */}
//                     <div className="flex items-start">
//                     <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
//                         <span className="text-blue-800 font-bold text-sm">2</span>
//                     </div>
//                     <div>
//                         <p className="text-lg font-medium">
//                         <span className="text-blue-600">25%-55% benefit on downline referrals</span>
//                         </p>
//                     </div>
//                     </div>
                    
//                     {/* Benefit 3 */}
//                     <div className="flex items-start">
//                     <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
//                         <span className="text-blue-800 font-bold text-sm">3</span>
//                     </div>
//                     <div>
//                         <p className="text-lg font-medium">
//                         <span className="text-blue-600">15% benefit on downline purchases</span>
//                         </p>
//                     </div>
//                     </div>
//                 </div>
                
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
//                     Doctor Registration
//                 </button>
//                 </div>
                
//                 {/* Right Side Panel */}
//                 <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-8">
//                 <div className="text-center">
//                     <svg className="w-16 h-16 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
//                     </svg>
//                     <h4 className="mt-4 text-2xl font-medium text-blue-800">Exclusive for Doctors</h4>
//                     <p className="mt-2 text-sm text-blue-700">
//                     Higher Commission Structure
//                     </p>
//                 </div>
//                 </div>
//             </div>
//         </div>

//         {/* Benefits Section */}
//         <div className="text-center mb-12">
//           <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6">
//             Your Partner Benefits
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-amber-400">
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full">
//                     <CheckCircleOutlined className="text-amber-600 text-xl" />
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="text-lg font-medium text-gray-800">{benefit}</h4>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };


// export default AdvisorSection;


import { CheckCircleOutlined } from '@ant-design/icons';

const benefits = [
  "20% discount on top health and wellness products",
  "Start with less money and earn good income",
  "Earn 10% on your sales and also from your team",
  "No need to hire doctor or staff",
  "You can sell medicine even without a medical degree",
  "Get permission to run a digital Arogya Point",
  "Easy tools to manage your customers",
  "See your sales and earnings live anytime",
  "Free training and help to grow your business",
  "Get rewards and bonus for good performance",
  "Build your team and earn extra money",
  "Official license to run a Arogya Point under our brand",
  "First access to our new products",
  "Full support from our expert team",
  "Chance to attend big events and meet leaders"
];


const PrimePartnerSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-30"></div>
          <h2 className="relative inline-block px-6 py-2 bg-white text-3xl md:text-4xl font-bold text-purple-900">
                Prime Partner Program
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-purple-500"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Launch your E-Arogya Point and build a thriving wellness business
          </p>
        </div>

        {/* Hero Card for Prime Partner */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 border border-purple-100">
            <div className="md:flex">
                <div className="md:w-2/3 p-8 md:p-12">
                <div className="flex items-center mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">PREMIUM</span>
                    <h3 className="text-2xl font-semibold text-purple-800">
                    Prime Partner
                    </h3>
                </div>
                <p className="text-sm text-purple-600 mb-4">
                    (₹25,000 Investment)
                </p>
                
                {/* Main Benefit */}
                <div className="bg-purple-50 p-4 rounded-lg mb-6 border border-purple-200">
                    <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-4">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <div>
                        <p className="text-lg font-medium">
                        <span className="text-purple-600">E-Arogya Point (E-Clinic) Authorization + 20% Product Discount</span>
                        </p>
                        <p className="text-purple-700 font-bold">
                        Premium Business Package
                        </p>
                    </div>
                    </div>
                </div>
                
                {/* Investment Highlights */}
                <div className="space-y-4 mb-8">
                    {/* Highlight 1 */}
                    <div className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                        <span className="text-purple-800 font-bold text-sm">1</span>
                    </div>
                    <div>
                        <p className="text-lg font-medium">
                        <span className="text-purple-600">₹25,000 investment</span> with ₹30,000 worth products + Starter Kit + Cources
                        </p>
                    </div>
                    </div>
                    
                    {/* Highlight 2 */}
                    <div className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                        <span className="text-purple-800 font-bold text-sm">2</span>
                    </div>
                    <div>
                        <p className="text-lg font-medium">
                        <span className="text-purple-600">10% commission</span> on all sales + team performance bonuses
                        </p>
                    </div>
                    </div>
                    
                    {/* Highlight 3 */}
                    <div className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                        <span className="text-purple-800 font-bold text-sm">3</span>
                    </div>
                    <div>
                        <p className="text-lg font-medium">
                        <span className="text-purple-600">Advanced CRM tools</span> for professional management
                        </p>
                    </div>
                    </div>

                    {/* Highlight 4 */}
                    <div className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                        <span className="text-purple-800 font-bold text-sm">4</span>
                    </div>
                    <div>
                        <p className="text-lg font-medium">
                        <span className="text-purple-600">Rank boosting</span> with leadership incentives
                        </p>
                    </div>
                    </div>
                </div>
                
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
                    Become a Prime Partner
                </button>
                </div>
                
                {/* Right Side Panel */}
                <div className="md:w-1/3 bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center p-8">
                <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    <h4 className="mt-4 text-2xl font-medium text-purple-800">E-Arogya Point (E-Clinic) Power</h4>
                    <p className="mt-2 text-sm text-purple-700">
                    Launch your digital wellness Arogya Point
                    </p>
                    <div className="mt-4 bg-white p-3 rounded-lg shadow-inner border border-purple-200">
                        <p className="text-xs text-purple-600 font-medium">Includes:</p>
                        <p className="text-sm text-purple-700">• Authorized Letter</p>
                        <p className="text-sm text-purple-700">• Arogya Point Branding Rights</p>
                        <p className="text-sm text-purple-700">• Special Selling Privileges</p>
                    </div>
                </div>
                </div>
            </div>
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">
            Prime Partner Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-400">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 p-2 rounded-full">
                    <CheckCircleOutlined className="text-purple-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">{benefit}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrimePartnerSection;
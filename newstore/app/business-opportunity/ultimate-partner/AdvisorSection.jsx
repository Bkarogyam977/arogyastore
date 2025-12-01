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
//                 Micro Franchise/E-Arogya Program
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-amber-500"></span>
//           </h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
//                 Join our mission to bring authentic Ayurvedic healing worldwide
//           </p>
//         </div>


//         {/* Hero Card for Micro Franchise/E-Arogya */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 border border-green-100">
//           <div className="md:flex">
//             <div className="md:w-2/3 p-8 md:p-12">
//               <h3 className="text-2xl font-semibold text-green-800 mb-2">
//                 Micro Franchise/E-Arogya
//               </h3>
//               <p className="text-lg text-green-600 mb-6">
//                 Best commission structure for health services and products
//               </p>
              
//               {/* Benefits Grid */}
//               <div className="grid gap-4 mb-8">
//                 {/* Benefit 1 */}
//                 <div className="bg-green-50 p-4 rounded-lg border border-green-200">
//                   <div className="flex items-center">
//                     <div className="bg-green-100 p-2 rounded-full mr-4">
//                       <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                       </svg>
//                     </div>
//                     <p className="text-lg font-medium">
//                       <span className="text-green-600">15% Referral Commission</span>
//                     </p>
//                   </div>
//                   <p className="text-sm text-gray-600 mt-1 ml-12">
//                     On all treatments, tests, therapies, food products etc.
//                   </p>
//                 </div>
                
//                 {/* Benefit 2 */}
//                 <div className="bg-green-50 p-4 rounded-lg border border-green-200">
//                   <div className="flex items-center">
//                     <div className="bg-green-100 p-2 rounded-full mr-4">
//                       <span className="text-green-800 font-bold">1</span>
//                     </div>
//                     <p className="text-lg font-medium">
//                       <span className="text-green-600">15% Wallet Money + 10% Retail Margin</span>
//                     </p>
//                   </div>
//                   <p className="text-green-700 font-bold ml-12">
//                     (Total 25% benefit)
//                   </p>
//                   <p className="text-sm text-gray-600 mt-1 ml-12">
//                     On single product purchase
//                   </p>
//                 </div>
                
//                 {/* Benefit 3 */}
//                 <div className="bg-green-50 p-4 rounded-lg border border-green-200">
//                   <div className="flex items-center">
//                     <div className="bg-green-100 p-2 rounded-full mr-4">
//                       <span className="text-green-800 font-bold">2</span>
//                     </div>
//                     <p className="text-lg font-medium">
//                       <span className="text-green-600">₹30,000 product on ₹25,000 + 15% Wallet Money</span>
//                     </p>
//                   </div>
//                   <p className="text-green-700 font-bold ml-12">
//                     (20% + 15% = Total 35% benefit)
//                   </p>
//                 </div>
                
//                 {/* Benefit 4 */}
//                 <div className="bg-green-50 p-4 rounded-lg border border-green-200">
//                   <div className="flex items-center">
//                     <div className="bg-green-100 p-2 rounded-full mr-4">
//                       <span className="text-green-800 font-bold">3</span>
//                     </div>
//                     <p className="text-lg font-medium">
//                       <span className="text-green-600">₹65,000 product on ₹50,000 + 15% Wallet Money</span>
//                     </p>
//                   </div>
//                   <p className="text-green-700 font-bold ml-12">
//                     (30% + 15% = Total 45% benefit)
//                   </p>
//                 </div>
                
//                 {/* Benefit 5 */}
//                 <div className="bg-green-50 p-4 rounded-lg border border-green-200">
//                   <div className="flex items-center">
//                     <div className="bg-green-100 p-2 rounded-full mr-4">
//                       <span className="text-green-800 font-bold">4</span>
//                     </div>
//                     <p className="text-lg font-medium">
//                       <span className="text-green-600">₹140,000 product on ₹100,000 + 15% Wallet Money</span>
//                     </p>
//                   </div>
//                   <p className="text-green-700 font-bold ml-12">
//                     (40% + 15% = Total 55% benefit)
//                   </p>
//                 </div>
//               </div>
              
//               <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
//                 Join Now
//               </button>
//             </div>
            
//             {/* Right Side Panel */}
//             <div className="md:w-1/3 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-8">
//               <div className="text-center">
//                 <svg className="w-16 h-16 mx-auto text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
//                 </svg>
//                 <h4 className="mt-4 text-lg md:text-3xl font-medium text-green-800"> Micro Franchise Benefits</h4>
//                 <p className="mt-2 text-sm md:text-lg text-green-700">
//                   Highest benefit structure
//                 </p>
//                 <div className="mt-4 bg-white p-3 rounded-lg shadow-sm inline-block">
//                   <p className="text-xs md:text-xl font-bold text-green-600">BULK PURCHASE BENEFITS</p>
//                   <p className="text-sm md:text-md text-gray-700">₹25K → 35%</p>
//                   <p className="text-sm md:text-md text-gray-700">₹50K → 45%</p>
//                   <p className="text-sm md:text-md text-gray-700">₹100K → 55%</p>
//                 </div>
//               </div>
//             </div>
//           </div>
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
    "₹1,40,000 worth of premium health products",
    "Retail selling rights for products",
    "Arogya Point authorization with full digital clinic setup",
    "All Prime and Elite Partner benefits included",
    "Highest commission structure (40% product value + 15% wallet money)",
    "Exclusive leadership training programs",
    "Priority access to new product launches",
    "Advanced business analytics dashboard",
    "VIP invitation to corporate events",
    "Dedicated account manager",
    "Customized marketing materials",
    "Ultimate partner certification",
];

const UltimatePartnerSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30"></div>
          <h2 className="relative inline-block px-6 py-2 bg-white text-3xl md:text-4xl font-bold text-red-900">
                Ultimate Partner Program
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-500"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                The pinnacle of our wellness business opportunity with retail rights
          </p>
        </div>

        {/* Hero Card for Ultimate Partner */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 border border-red-100">
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="flex items-center mb-2">
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">PREMIUM</span>
                <h3 className="text-2xl font-semibold text-red-800">
                  Ultimate Partner
                </h3>
              </div>
              <p className="text-sm text-red-600 mb-4">
                (₹1,00,000 Investment)
              </p>
              
              {/* Main Benefit */}
              <div className="bg-red-50 p-4 rounded-lg mb-6 border border-red-200">
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium">
                      <span className="text-red-600">Retail Selling Rights + ₹1,40,000 Product Package</span>
                    </p>
                    <p className="text-red-700 font-bold">
                      55% Total Benefit (40% + 15% Wallet Money)
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Investment Highlights */}
              <div className="space-y-4 mb-8">
                {/* Highlight 1 */}
                <div className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-red-800 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-lg font-medium">
                      <span className="text-red-600">₹1,00,000 investment</span> with ₹1,40,000 premium product value
                    </p>
                  </div>
                </div>
                
                {/* Highlight 2 */}
                <div className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-red-800 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-lg font-medium">
                      <span className="text-red-600">Retail distribution rights</span> to sell products in your market
                    </p>
                  </div>
                </div>
                
                {/* Highlight 3 */}
                <div className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-red-800 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-lg font-medium">
                      <span className="text-red-600">Full Arogya Point power</span> with digital clinic authorization
                    </p>
                  </div>
                </div>

                {/* Highlight 4 */}
                <div className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-red-800 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <p className="text-lg font-medium">
                      <span className="text-red-600">All lower-tier benefits</span> including team commissions and CRM tools
                    </p>
                  </div>
                </div>
              </div>
              
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
                Become an Ultimate Partner
              </button>
            </div>
            
            {/* Right Side Panel */}
            <div className="md:w-1/3 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-8">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                <h4 className="mt-4 text-2xl font-medium text-red-800">Retail Authority</h4>
                <p className="mt-2 text-sm text-red-700">
                  Earn from both retail and network
                </p>
                <div className="mt-4 bg-white p-3 rounded-lg shadow-inner border border-red-200">
                  <p className="text-xs text-red-600 font-medium">Exclusive Rights:</p>
                  <p className="text-sm text-red-700">• Product Distribution License</p>
                  <p className="text-sm text-red-700">• Premium Arogya Point Branding</p>
                  <p className="text-sm text-red-700">• Bulk Purchase Privileges</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-red-900 mb-6">
            Ultimate Partner Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-400">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-2 rounded-full">
                    <CheckCircleOutlined className="text-red-600 text-xl" />
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

export default UltimatePartnerSection;
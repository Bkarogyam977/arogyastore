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
//                 Advisor Program
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-amber-500"></span>
//           </h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
//                 Join our mission to bring authentic Ayurvedic healing worldwide
//           </p>
//         </div>

//         {/* Hero Card with Investment Details */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 border border-amber-100">
//           <div className="md:flex">
//             <div className="md:w-2/3 p-8 md:p-12">
//               <h3 className="text-2xl font-semibold text-amber-800 mb-4">
//                 Zero Investment Opportunity
//               </h3>
//               <p className="text-lg leading-relaxed text-gray-700 mb-6">
//                 Become an Associate Partner with ArogyaBharat at absolutely <strong>no cost</strong> and 
//                 earn generous commissions promoting authentic Ayurvedic wellness products.
//               </p>
              
//               <div className="mb-8">
//                 <div className="flex items-center mb-3">
//                   <div className="bg-amber-100 p-2 rounded-full mr-4">
//                     <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                   </div>
//                   <span className="text-lg font-medium">Investment: <span className="text-green-600">₹0/- (FREE)</span></span>
//                 </div>
                
//                 <div className="flex items-center mb-3">
//                   <div className="bg-amber-100 p-2 rounded-full mr-4">
//                     <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                   </div>
//                   <span className="text-lg font-medium">Earn: <span className="text-green-600">10% commission</span> on every product sold</span>
//                 </div>
                
//                 <div className="flex items-center">
//                   <div className="bg-amber-100 p-2 rounded-full mr-4">
//                     <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                   </div>
//                   <span className="text-lg font-medium">Commission paid <span className="text-green-600">weekly</span> via preferred method</span>
//                 </div>
//               </div>
              
//               <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
//                 Start Earning Today
//               </button>
//             </div>
            
//             <div className="md:w-1/3 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center p-8">
//               <div className="text-center">
//                 <svg className="w-16 h-16 mx-auto text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                 </svg>
//                 <h4 className="mt-4 text-lg font-medium text-amber-800">Risk-Free Earnings</h4>
//                 <p className="mt-2 text-sm text-amber-700">No upfront costs, pure profit sharing</p>
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

//         {/* CTA Section */}
//         {/* <div className="bg-amber-800 rounded-xl p-8 md:p-12 text-center text-white">
//           <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Wellness Journey?</h3>
//           <p className="text-lg mb-8 max-w-3xl mx-auto text-amber-100">
//             Join hundreds of partners already transforming lives with authentic Ayurveda
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <button className="bg-white text-amber-800 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300">
//               Request Information
//             </button>
//             <button className="bg-transparent border-2 border-white hover:bg-amber-700 font-semibold py-3 px-8 rounded-lg transition duration-300">
//               Call Us: +1 (800) 123-4567
//             </button>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default AdvisorSection;


import { CheckCircleOutlined } from '@ant-design/icons';

const benefits = [
    "₹30,000 worth of health and wellness products",
    "10% commission on every sale",
    "Sales dashboard for real-time tracking",
    "Affiliate link for instant earnings",
    "Free training and marketing tools",
    "Team-building power to earn from team performance",
    "Course certificate upon training completion",
    "Exclusive product discounts",
    "Priority customer support",
    "Access to promotional content library",
    "Monthly performance bonuses",
    "Invitation to partner events",
];

const ActivePartnerSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-30"></div>
          <h2 className="relative inline-block px-6 py-2 bg-white text-3xl md:text-4xl font-bold text-blue-900">
            Active Partner Program
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Accelerate your earnings with premium products and team-building opportunities.
          </p>
        </div>

        {/* Hero Card with Investment Details */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 border border-blue-100">
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                High-Growth Business Opportunity
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Invest <strong>₹7,999</strong> to unlock premium health products, training, and the power to build your own sales team for scalable income.
              </p>
              
              <div className="mb-8">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium">Investment: <span className="text-green-600">₹7,999</span> (Product Kit Worth ₹30,000)</span>
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium">Earn: <span className="text-green-600">10% direct commission</span> + team performance bonuses</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium">Tools: <span className="text-green-600">Sales dashboard</span> + affiliate link + training</span>
                </div>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
                Become an Active Partner
              </button>
            </div>
            
            <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-8">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                <h4 className="mt-4 text-lg font-medium text-blue-800">Team Earnings</h4>
                <p className="mt-2 text-sm text-blue-700">Build your network and earn from their sales</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            Active Partner Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-400">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <CheckCircleOutlined className="text-blue-600 text-xl" />
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

export default ActivePartnerSection;
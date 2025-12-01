
"use client";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ProductSlider from './ProductSlider';
import ProductCategories from "./ProductCategories";
import { useRouter } from 'next/navigation';

const Prevention = () => {
  const router = useRouter();

  const precautions = [
    { icon: "🛡️", label: "Immune Support", desc: "Boost your natural defenses" },
    { icon: "👨‍👩‍👧‍👦", label: "Family Wellness", desc: "Solutions for all ages" },
    { icon: "🧴", label: "Daily Hygiene", desc: "Essential protective products" },
    { icon: "💊", label: "Vitamins", desc: "Essential nutrients" },
    { icon: "🌿", label: "Herbal Remedies", desc: "Natural wellness support" },
    { icon: "😌", label: "Stress Relief", desc: "Calm mind & body" },
    { icon: "❤️", label: "Heart Health", desc: "Cardiovascular support" },
    { icon: "🚚", label: "Fast Delivery", desc: "Get it when you need it" }
  ];

  return (
    <div className="bg-gradient-to-b from-[#E8F5E9] to-[#F1F8E9] min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-4xl mx-auto pt-16 md:pt-24"> {/* Added pt-16 md:pt-24 */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#2E7D32] mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF9800] to-[#F44336]">
            PREVENTION
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-medium">
          Stay One Step Ahead with Our Premium Healthcare Solutions
        </p>
        <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#FF9800] to-[#F44336] mx-auto rounded-full"></div>
      </div>

      {/* Precautionary Measures Section - Updated */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Wellness Focus Areas
          </h2>
          <div className="hidden md:block">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {precautions.map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.03] bg-gray-50 hover:bg-white group"
                >
                  <div className="text-4xl mb-2 group-hover:text-[#2E7D32] transition-colors">{item.icon}</div>
                  <p className="text-sm font-semibold text-gray-700 text-center">{item.label}</p>
                  <p className="text-xs text-gray-500 text-center mt-1 hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          
          {/* Mobile Carousel Alternative */}
          <div className="sm:hidden mt-6 overflow-x-auto pb-4">
            <div className="flex space-x-4 w-max">
              {precautions.map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 rounded-lg shadow-sm min-w-[120px] bg-gray-50"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-xs font-semibold text-gray-700 text-center">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Product Sliders */}
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <ProductSlider 
            categoryId={238} 
            title="Immune-Boosting Supplements"
            subtitle="Premium formulations for enhanced protection"
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <ProductCategories />
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <ProductSlider 
            categoryId={381} 
            title="Wellness Essentials"
            subtitle="Curated selection for your health needs"
          />
        </div>
      </div>

      {/* Premium CTA */}
      <div className="max-w-7xl mx-auto mt-16 bg-gradient-to-r from-[#43A047] to-[#2E7D32] rounded-xl shadow-xl overflow-hidden">
        <div className="p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Premium Healthcare Delivered to Your Doorstep
          </h3>
          <p className="text-white text-opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their wellness needs.
          </p>
          <button 
            onClick={() => router.push('/e-store/categoryproduct/235')}
            className="px-8 py-3 bg-white text-[#2E7D32] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};


export default Prevention;


// "use client";
// import React from "react";
// import { ShoppingCartOutlined } from "@ant-design/icons";
// import ProductSlider from './ProductSlider';
// import ProductCategories from "./ProductCategories";

// const Prevention = () => {
//   const precautions = [
//     "🧤", "👨‍👩‍👧", "🧼", "🏥",
//     "👵", "🤒", "❤️", "📦"
//   ];

//   const supplements = [
//     { name: "Slim Tea Tablet", quantity: "60 Tab", price: 500, img: "/path/to/slim-tea.png" },
//     { name: "Shree Arogyam Tablet", quantity: "30 Tab", price: 500, img: "/path/to/arogyam.png" },
//     { name: "Nutriveda Multi Tablet", quantity: "60 Tab", price: 500, img: "/path/to/nutriveda.png" }
//   ];

//   return (
//     <div className="bg-[#D5E9D6] p-4 min-h-screen">
//       {/* Header Section */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-orange-500">PREVENTION</h1>
//         <p className="text-lg text-black">Stay One Step Ahead</p>
//       </div>

//       {/* Precautionary Measures Section */}
//       <div className="bg-orange-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Precautionary Measures & Multiple Diseases</h2>
//         <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
//           {precautions.map((icon, index) => (
//             <div key={index} className="text-4xl bg-white p-4 rounded-lg shadow-sm">
//               {icon}
//             </div>
//           ))}
//         </div>
//       </div>

//       <ProductSlider categoryId={225} title="Immune-Boosting Supplements" />

//       <ProductCategories />

//       <ProductSlider categoryId={225} title="Immune-Boosting Supplements" />

//     </div>
//   );
// };

// export default Prevention;


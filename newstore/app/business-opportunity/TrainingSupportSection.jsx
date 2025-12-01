import React from 'react';

const TrainingSupportCard = ({ 
  icon, 
  title, 
  description, 
  items, 
  colorClasses 
}) => {
  const { bg, text, hoverBg } = colorClasses;
  
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-xs border border-gray-100 hover:shadow-md transition-all duration-300 group">
      <div className="flex items-start">
        <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 ${bg} rounded-lg flex items-center justify-center mr-3 md:mr-4 group-hover:${hoverBg} transition-colors`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-xs md:text-sm text-gray-600 mt-1 hidden md:block">
            {description}
          </p>
          <ul className="mt-2 space-y-1">
            {items.map((item, index) => (
              <li key={index} className="flex items-start text-xs md:text-sm">
                <svg className={`flex-shrink-0 h-4 w-4 ${text} mt-0.5 mr-1.5`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const TrainingSupportSection = () => {
  const supportItems = [
    {
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Owner Support",
      description: "Comprehensive onboarding program",
      items: ["Business operations", "Dedicated manager"],
      colorClasses: {
        bg: "bg-indigo-50",
        text: "text-indigo-500",
        hoverBg: "bg-indigo-100"
      }
    },
    {
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Staff Training",
      description: "Build your dream team",
      items: ["Recruitment help", "Training modules"],
      colorClasses: {
        bg: "bg-blue-50",
        text: "text-blue-500",
        hoverBg: "bg-blue-100"
      }
    },
    {
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "ERP Software",
      description: "Proprietary management systems",
      items: ["Inventory system", "Financial reports"],
      colorClasses: {
        bg: "bg-purple-50",
        text: "text-purple-500",
        hoverBg: "bg-purple-100"
      }
    },
    {
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Digital Marketing",
      description: "Boost your online presence",
      items: ["Social media", "Local SEO"],
      colorClasses: {
        bg: "bg-teal-50",
        text: "text-teal-500",
        hoverBg: "bg-teal-100"
      },
      mobileHidden: false
    },
    {
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      title: "Egyanshala",
      description: "Continuous learning platform",
      items: ["Training portal", "Growth resources"],
      colorClasses: {
        bg: "bg-amber-50",
        text: "text-amber-500",
        hoverBg: "bg-amber-100"
      },
      mobileHidden: false
    },
    {
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "24-Hour Support",
      description: "Prompt query resolution",
      items: ["Dedicated team", "Guaranteed response"],
      colorClasses: {
        bg: "bg-green-50",
        text: "text-green-500",
        hoverBg: "bg-green-100"
      },
      mobileHidden: false
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs md:text-sm font-semibold mb-3">
            COMPREHENSIVE SUPPORT
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Training & Ongoing Support
          </h2>
          <p className="text-sm md:text-xl text-gray-600 mt-2 max-w-2xl mx-auto">
            Everything to run your Arogya Hub successfully
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {supportItems.map((item, index) => (
            <div 
              key={index} 
              className={item.mobileHidden ? "hidden md:block" : ""}
            >
              <TrainingSupportCard {...item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrainingSupportSection;
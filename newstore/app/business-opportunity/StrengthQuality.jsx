import React from 'react';

// StatItem Component
const StatItem = ({ value, label }) => (
  <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
    <p className="text-4xl font-bold text-teal-600 mb-2">{value}</p>
    <p className="text-gray-600 font-medium">{label}</p>
  </div>
);

// FeatureCard Component
const FeatureCard = ({ 
  title, 
  description, 
  items, 
  icon, 
  iconBg, 
  tag, 
  tagBg, 
  tagText 
}) => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-all duration-300"></div>
    <div className="relative h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="pt-8 pb-6 px-8">
        <div className="flex items-center mb-6">
          <div className={`flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br ${iconBg} shadow-sm`}>
            {icon}
          </div>
          <h3 className="ml-4 text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6 text-lg">{description}</p>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <svg className="flex-shrink-0 h-5 w-5 text-teal-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
        <div className="flex items-center">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${tagBg} ${tagText}`}>
            {tag}
          </span>
          <span className="ml-2 text-sm text-gray-500">{tag === 'Heritage' ? 'Since 1979' : 'Evidence-based Ayurveda'}</span>
        </div>
      </div>
    </div>
  </div>
);

// StrengthQualitySection Component
const StrengthQualitySection = () => {
  const stats = [
    { value: "44+", label: "Years Experience" },
    { value: "300+", label: "Ayurvedic Products" },
    { value: "100%", label: "Natural Formulas" },
    { value: "GMP", label: "Certified Quality" }
  ];

  const strengthItems = [
    "44+ years of formulation expertise",
    "300+ classical Ayurvedic products",
    "GMP & ISO certified manufacturing",
    "Panchkarma, Naturopathy & Yoga specialists",
    "Comprehensive kidney health solutions",
    "Expert team of Ayurveda doctors"
  ];

  const qualityItems = [
    "100% effective clinically-tested formulas",
    "In-house production facilities",
    "Pure vegetarian, no artificial additives",
    "Scientifically validated efficacy",
    "GMP & ISO certified processes",
    "Integrated day care facilities"
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-3">
            OUR DIFFERENTIATORS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ArogyaBharat Advantage
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-600">
              Where ancient Ayurvedic wisdom meets modern scientific validation
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <FeatureCard
            title="Our Core Strength"
            description="Four decades of pioneering Ayurvedic innovation and holistic healing"
            items={strengthItems}
            icon={
              <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            iconBg="from-amber-100 to-amber-50"
            tag="Heritage"
            tagBg="bg-teal-100"
            tagText="text-teal-800"
          />

          <FeatureCard
            title="Quality & USP"
            description="Uncompromising standards in Ayurvedic product development"
            items={qualityItems}
            icon={
              <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            iconBg="from-blue-100 to-blue-50"
            tag="Innovation"
            tagBg="bg-blue-100"
            tagText="text-blue-800"
          />
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthQualitySection;



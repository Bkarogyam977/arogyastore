import Image from 'next/image';
import React from 'react';

function ConditionsTreated() {
  const conditions = [
    { title: "Kidney", image: "/images/hops/kidney.webp", description: "Maintaining kidney health and function." },
    { title: "Heart Disease", image: "/images/hops/heart.png", description: "Caring for your heart's wellbeing." },
    { title: "Obesity", image: "/images/hops/obesity.png", description: "Promoting healthy weight management." },
    { title: "Sugar", image: "/images/hops/sugar.png", description: "Managing blood sugar levels effectively." },
    { title: "Joint Pain", image: "/images/hops/joint_pain.png", description: "Relieving discomfort and improving mobility." },
  ];

  return (
    <div className="text-center my-10 lg:px-10 px-2 md:mt-12">
      <h1 className="text-2xl md:text-4xl md:mt-10 font-bold mb-6 text-green-800">
        Conditions Treated Through Ayurveda at BK Arogyam
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {conditions.map((condition, index) => (
          <div
            className="bg-green-700 border border-green-700 rounded-lg shadow-md md:p-4 md:h-64 py-3 md:py-5 flex flex-col items-center"
            key={index}
          >
            <div className="mb-4">
              <Image
                src={condition.image}
                alt={condition.title}
                width={500}
                height={500}
                className="w-auto h-auto object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-white text-center mb-2">{condition.title}</h2>
            <p className="text-white text-center mb-2">{condition.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConditionsTreated;

'use client'
import Image from 'next/image';
import React from 'react';

const Concern_Area_Data = [
  {
    id: 1,
    bgColor: 'bg-[#D2F7EC]',
    discountTextColor: 'text-[#4ad5ac]',
    title: 'Kidney Diseases',
    imgSrc: '/images/homepage/corner_area/kidney_diseas.png',
  },
  {
    id: 2,
    bgColor: 'bg-[#F2E4D9]',
    discountTextColor: 'text-[#CB9917]',
    title: 'Pain Management',
    imgSrc: '/images/homepage/corner_area/pain_management.png',
  },
  {
    id: 3,
    bgColor: 'bg-[#F9DCDC]',
    title: 'Obesity',
    imgSrc: '/images/homepage/corner_area/obecity.png',
  },
  {
    id: 4,
    bgColor: 'bg-[#D2F7EC]',
    discountTextColor: 'text-[#4ad5ac]',
    title: 'Heart Diseases',
    imgSrc: '/images/homepage/corner_area/heart_disease.png',
  },
  {
    id: 5,
    bgColor: 'bg-[#F2E4D9]',
    discountText: 'Rs.25%',
    discountTextColor: 'text-[#cb3817]',
    title: 'Sugar/BP',
    imgSrc: '/images/homepage/corner_area/sugar.png',
  },
  {
    id: 6,
    bgColor: 'bg-[#F2E4D9]',
    discountText: 'Rs.25%',
    discountTextColor: 'text-[#cb3817]',
    title: 'Female Health Issues',
    imgSrc: '/images/homepage/corner_area/female_health_issues.webp',
  },
  {
    id: 7,
    bgColor: 'bg-[#F9DCDC]',
    discountTextColor: 'text-[#1789cb]',
    title: 'Digestive Issues',
    imgSrc: '/images/homepage/corner_area/digestive_issues.png',
  },
  {
    id: 8,
    bgColor: 'bg-[#F2E4D9]',
    discountTextColor: 'text-[#CB9917]',
    title: 'Cosmetic Issues',
    imgSrc: '/images/homepage/corner_area/cosmetic_issues.png',
  },
];

const Concern_Area = () => {
  return (
    <div className="w-full h-auto p-1">
      <p className="font-bold text-center mt-5 md:text-5xl text-2xl md:mb-10">Consult Doctor by Concern Area</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:px-24 p-2">
        {Concern_Area_Data.map((item) => (
          <div key={item.id} className={`md:max-w-sm ${item.bgColor} md:top-5 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700`}>

            <Image
              src={item.imgSrc}
              alt="Ayurveda Therapies"
              width={800}
              height={500}
              className="rounded-t-lg w-full"
            />            <div className="p-5 text-center bg-white w-full rounded-b-lg">
              {item.title && <p className="text-lg font-bold text-black">{item.title}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concern_Area;

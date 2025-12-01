'use client'
import Image from 'next/image';
import React from 'react';

const discountData = [
  {
    id: 1,
    bgColor: 'bg-[#F2E4D9]',
    discountTextColor: 'text-[#CB9917]',
    title: 'Consultation',
    description: 'Tech-augmented ayurveda for science-based treatment...',
    imgSrc: '/images/homepage/ayurveda_therapies/consultation.webp',
  },
  {
    id: 2,
    bgColor: 'bg-[#F9DCDC]',
    discountTextColor: 'text-[#1789cb]',
    title: 'Panchkarma',
    description: 'Panchkarma ayurvedic therapy to purify and rejuvenate body, mind, and...',
    imgSrc: '/images/homepage/ayurveda_therapies/panchkarma.png',
  },
  {
    id: 3,
    bgColor: 'bg-[#D2F7EC]',
    discountTextColor: 'text-[#4ad5ac]',
    title: 'Pulse Diagnosis',
    description: 'Ancient pulse diagnosis meets modern tech to rejuvenate body, mind, and...',
    imgSrc: '/images/homepage/ayurveda_therapies/pulse_diagnosis.png',
  },
  {
    id: 4,
    bgColor: 'bg-[#F2E4D9]',
    discountText: 'Rs.25%',
    discountTextColor: 'text-[#cb3817]',
    title: 'Prakriti Analysis',
    description: 'Prakriti is a lifelong constitution shaped by dominant dosha at conception...',
    imgSrc: '/images/homepage/ayurveda_therapies/prakriti_analysis.webp',
  },
];

const GetDiscount = () => {
  return (
    <div className="w-full h-auto md:mt-28 mt-5">
      <p className="font-bold text-center mt-5 md:text-5xl text-2xl md:mb-10">Avail World Class Ayurveda Therapies</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:px-20 p-2">
        {discountData.map((item) => (
          <div key={item.id} className={`relative rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 ${item.bgColor}`}>
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={800}
              height={600}
              className="rounded-lg w-full"
            />            <div className="absolute bottom-0 p-2 text-center bg-gradient-to-t from-gray-800 to-transparent w-full rounded-b-lg">
              {item.title && <p className="text-lg font-bold text-white">{item.title}</p>}
              <p className="text-sm text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetDiscount;

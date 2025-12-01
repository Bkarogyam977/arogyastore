import Image from "next/image";
import React from "react";

// Therapy Data
const therapyItems = [
  {
    title: "Panchakarma Therapy",
    image: "/images/imageBox/icons/therapy1.png",
    price: "₹3,500",
  },
  {
    title: "Abhyanga Massage",
    image: "/images/imageBox/icons/therapy2.png",
    price: "₹2,000",
  },
  {
    title: "Shirodhara",
    image: "/images/imageBox/icons/therapy3.png",
    price: "₹4,000",
  },
  {
    title: "Nasya Treatment",
    image: "/images/imageBox/icons/therapy4.png",
    price: "₹2,500",
  },
  {
    title: "Basti Therapy",
    image: "/images/imageBox/icons/therapy5.png",
    price: "₹3,200",
  },
];

// Reusable Therapy Card Component
const TherapyCard = ({ title, image, price }) => (
  <div className="min-w-[240px] sm:min-w-[280px] bg-white rounded-xl overflow-hidden shadow-md">
    <Image
      src={image}
      alt={title}
      width={500}
      height={160}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex items-center justify-between mt-4">
        <p className="text-green-600 font-semibold">{price}</p>
        <button className="bg-green-500 text-white py-1 px-4 rounded-full text-sm hover:bg-green-600">
          Book Now
        </button>
      </div>
    </div>
  </div>
);

// Therapy Section Component
const TherapySection = () => (
  <div className="w-full my-12">
    <h2 className="text-2xl font-bold mb-6">Therapy Section</h2>
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex space-x-6">
        {therapyItems.map((therapy, index) => (
          <TherapyCard key={index} {...therapy} />
        ))}
      </div>
    </div>
  </div>
);

export default TherapySection;

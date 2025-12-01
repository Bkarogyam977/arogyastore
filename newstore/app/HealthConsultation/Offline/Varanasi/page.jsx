

'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Dummy data for centers
const centers = [
  {
    id: 1,
    name: "BKArogyam Research Pvt. Ltd",
    address: "Shivadaspur, Lahartara, Near Railway St, 221009",
    image: "/images/imageBox/hopes/Varanasi.png",
    phone: "+91 1234567890",
  },
  {
    id: 2,
    name: "Arogyam Wellness Center",
    address: "Sigra, Varanasi, Near Mall Road, 221010",
    image: "/images/imageBox/hopes/Varanasi.png",
    phone: "+91 9876543210",
  }
];

const VaranasiConsultation = () => {
  return (
    <div className="p-4 pt-8 md:pt-28 bg-white min-h-screen">
      {/* Choose Center Heading */}
      <h2 className="text-2xl font-bold text-green-600 mb-6">Choose the Center</h2>

      {/* List of Centers - Mobile remains exactly the same, desktop changes */}
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6">
        {centers.map((center) => (
          <div key={center.id} className="bg-yellow-50 border-2 border-dashed border-green-500 p-4 rounded-lg flex items-center gap-6 md:w-1/2">
            {/* Center Image - unchanged */}
            <Image
              src={center.image}
              alt={center.name}
              width={128}
              height={128}
              className="w-32 h-32 rounded-md object-cover"
            />
            
            {/* Center Details - unchanged */}
            <div className="flex-1">
              <h3 className="text-md font-bold">{center.name}</h3>
              <p className="text-gray-600 text-md">{center.address}</p>

              {/* Action Buttons - unchanged */}
              <div className="flex gap-4 mt-4">
                <Link href={`/HealthConsultation/Offline/Varanasi/${center.id}`}>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600">Book Now</button>
                </Link>
                <a href={`tel:${center.phone}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600">Call Us</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VaranasiConsultation;
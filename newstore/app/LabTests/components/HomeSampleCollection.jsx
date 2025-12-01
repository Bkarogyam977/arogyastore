// components/LabTests/HomeSampleCollection.jsx
"use client";
import { BookOutlined, HomeOutlined, WhatsAppOutlined, FileTextOutlined } from '@ant-design/icons';

const HomeSampleCollection = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">How Home Sample Collection Works</h2>
      
      <div className="space-y-6">
        {/* 1. Complete Booking */}
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <BookOutlined className="text-blue-600 text-xl" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Complete Booking</h3>
            <p className="text-sm text-gray-600 mt-1">
              Include selection of all required tests, labs and time slot
            </p>
          </div>
        </div>

        {/* 2. Safe Home Sample Collection */}
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-full">
            <HomeOutlined className="text-green-600 text-xl" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Safe Home Sample Collection</h3>
            <p className="text-sm text-gray-600 mt-1">
              Highly trained phlebotomist adhering to all standards and protocols
            </p>
          </div>
        </div>

        {/* 3. Book Through WhatsApp */}
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-full">
            <WhatsAppOutlined className="text-green-600 text-xl" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Book Through WhatsApp</h3>
            <p className="text-sm text-gray-600 mt-1">
              To book a test, just say  `&quot;`Hi`&quot;`on WhatsApp
            </p>
          </div>
        </div>

        {/* 4. Online Report Delivery */}
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-full">
            <FileTextOutlined className="text-purple-600 text-xl" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Online Report Delivery & Free Doctor Consultation</h3>
            <p className="text-sm text-gray-600 mt-1">
              Reports are delivered on registered email ID, WhatsApp with free doctor consultation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSampleCollection;
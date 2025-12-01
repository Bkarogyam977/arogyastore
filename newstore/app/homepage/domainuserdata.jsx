"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// AdvisorPage Component that takes the passed data as a prop
const DomainAdvisorComponent = ({ advisor }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (!advisor) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg font-medium text-red-600">
          Failed to load advisor details. Please try again later.
        </p>
      </div>
    );
  }

  const {
     name, mobile, email, referal_code,image ,
    
  } = advisor.user_data;

  return (
    <section id="aboutAdviser" className="relative bg-gradient-to-r from-teal-500 to-teal-700 text-white">
        {/* {JSON.stringify(advisor)} */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="lg:grid lg:grid-cols-3 gap-8 px-8 py-10">


            <div className="lg:col-span-1 flex justify-center items-center">
              <Image
              width={100}
              height={100}
                src={`https://healdiway.bkarogyam.com/media/${image}` || "/images/default-profile.png"}
                alt={`${name}`}
                className="h-72 w-72 object-cover rounded-full border-4 border-teal-600 shadow-lg"
              />
            </div>


            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {name} 
              </h1>
              <p className="text-xl font-medium text-teal-600 mb-6">{'Advisor'}</p>
              <div className="mb-6">
                {/* <p className="text-lg text-gray-700">
                  <strong>Location:</strong> {city}, {state}
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Address:</strong> {address}, {pincode}
                </p> */}
                <p className="text-lg text-gray-700">
                  <strong>Referer Code:</strong> {referal_code || "N/A"}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-lg text-gray-700">
                  <strong>Contact:</strong> {mobile}
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Email:</strong> <a href={`mailto:${email}`} className="text-teal-600">{email}</a>
                </p>
              </div>

              <a href={`tel:${mobile}`} className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
                <span className="mr-2">📞</span> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default DomainAdvisorComponent;
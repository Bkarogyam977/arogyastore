'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from 'axios';
import ApointmentSection from "../apointmentsection";

function FindDoctors() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 8;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      axios
        .get('https://healdiway.bkarogyam.com/erp-api/doctorprofile')
        .then((response) => {
          console.log('API Response:', response.data);
          if (response.data && Array.isArray(response.data)) {
            // Using a Map to ensure unique doctors by 'userid'
            const uniqueDoctors = Array.from(
              new Map(response.data.map((doctor) => [doctor.userid, doctor])).values()
            );
            setDoctors(uniqueDoctors);
            setFilteredDoctors(uniqueDoctors);
          } else {
            console.error('Doctors data is not in the expected format:', response.data);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching doctor data:', error);
          setLoading(false);
        });
    }
  }, [isHydrated]);

  useEffect(() => {
    // Filter doctors based on search query
    setFilteredDoctors(
      doctors.filter((doctor) =>
        (doctor.name || "").toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, doctors]);

  // Get doctors for the current page
  const currentDoctors = filteredDoctors.slice(
    (currentPage - 1) * doctorsPerPage,
    currentPage * doctorsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  if (!isHydrated) {
    return null;
  }

  return (
    <div className="md:mt-28 mt-16">
      {/* Banner */}
      <div className="relative bg-cover bg-center md:h-52 h-48" style={{ backgroundImage: "url('/images/arogyadham/feed-banner-bg.jpg')" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
          <h2 className="text-black md:text-4xl text-2xl font-bold mb-3 md:mb-0">Our Best Doctors</h2>
          <p className="md:px-48 px-2 md:text-sm text-[15px]">
            Meet our team of highly skilled doctors committed to providing exceptional healthcare. With expertise in diverse specialties, they deliver personalized care, ensuring patient well-being and satisfaction. Dedicated to advancing medical excellence, our doctors prioritize compassion, innovation, and professionalism, striving to meet the unique needs of every individual for optimal health.
          </p>
        </div>
      </div>

      {/* Search Box */}
      <div className="mt-10 px-4 md:px-40 flex justify-center">
        <input
          type="text"
          placeholder="Search doctors by name..."
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full px-2 md:px-40 mt-8">
        <div className="p-4">
          {loading ? (
            <p className="text-center">Loading doctors...</p>
          ) : currentDoctors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentDoctors.map((doctor) => (
                <div
                  key={doctor.userid}
                  className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition"
                >
                  <div className="relative w-full h-48 mb-4">
                    {doctor.user_imageurl ? (
                      <Image
                        src={`https://patient.bkarogyam.com/media/${doctor.user_imageurl}`}
                        alt={doctor.name || 'Doctor'}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                        <Image
                          src="/images/swiperbanner/busines.png"
                          alt="Default Doctor"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                  <h2 className="text-lg font-bold mb-2">
                    {doctor.name || 'Doctor Name'}
                  </h2>
                  <p className="text-sm text-gray-600">
                    <strong>Experience:</strong> {doctor.experiance || 'Not specified'} years
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Description:</strong> {doctor.discription || 'No description available.'}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Language:</strong> {doctor.language || 'Not specified'}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">No doctors found</p>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 items-center md:space-x-4 space-x-1">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="md:px-4 px-1 md:py-2 py-1 border rounded-lg bg-white text-blue-500 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages })
          .map((_, index) => index + 1)
          .filter((page) => {
            // Display logic for mobile: Only show 3 page numbers
            if (window.innerWidth < 768) {
              if (currentPage === 1) return page <= 5;
              if (currentPage === totalPages) return page >= totalPages - 2;
              return Math.abs(page - currentPage) <= 1;
            }
            // Show all page numbers on larger screens
            return true;
          })
          .map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`md:px-4  px-2 md:py-2 py-1 border rounded-lg ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                }`}
            >
              {page}
            </button>
          ))}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="md:px-4 px-2 md:py-2 py-1 border rounded-lg bg-white text-blue-500 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>



      <ApointmentSection />
    </div>
  );
}

export default FindDoctors;

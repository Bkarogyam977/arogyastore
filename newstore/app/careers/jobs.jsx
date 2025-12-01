"use client";
import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";

function AllJobs() {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  const excludedIds = [11, 14, 18, 22];
  const filteredData = jobs.filter(
    (item) =>
      !excludedIds.includes(item.id) &&
      item.requistion_data.job_title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  // Calculate pagination details
  const totalPages = Math.ceil(filteredData.length / jobsPerPage);
  const paginatedJobs = filteredData.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://healdiway.bkarogyam.com/erp-api/hr_job_opening"
        );
        const data = await response.json();
        setJobs(data.results || []);
        setSelectedJob(data.results?.[0] || null);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Function to remove HTML tags from a string
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div className="container mx-auto md:px-6 max-w-7xl md:pb-10">
      {/* Header Section */}
      <div className="md:py-5 py-3 text-center">
        <p className="md:text-3xl text-xl font-bold text-green-700 mt-4">
          EXPLORE our Latest JOB Openings,
        </p>
        <p className="md:text-2xl text-xl font-bold text-gray-700 md:mt-4 mt-3">
          Become a part of ArogyaBharat&apos;s mission to make a difference.
        </p>
      </div>

      <hr className="mb-3 border-green-500 shadow" />

      {/* Job Search Section */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search your jobs..."
          className="md:w-[30em] w-[23em] p-2 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring focus:ring-green-400"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 bg-gray-100">
          <div>
            <p className="p-3 text-2xl font-bold bg-green-600 text-white">
              Our All Latest Jobs
            </p>
            {paginatedJobs.map((job) => (
              <div
                key={job.id}
                className={`p-4 cursor-pointer hover:bg-green-100 transition-all duration-200 ${
                  selectedJob?.id === job.id ? "bg-green-200" : ""
                }`}
                onClick={() => {
                  setSelectedJob(job);
                  if (window.innerWidth <= 768) {
                    window.open(
                      `https://arogya.bkarogyam.com/hrm?id=${job.id}`,
                      "_blank"
                    );
                  }
                }}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {job.requistion_data.job_title}
                </h3>
                <p className="text-gray-500 mt-2">
                  📍 {job.requistion_data.location_data.name}
                </p>
                <p className="text-gray-500">
                  📆{" "}
                  {new Intl.DateTimeFormat("en-GB", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }).format(new Date(job.created_at))}
                </p>

                <p className="text-gray-600 mt-4">
                  {stripHtmlTags(job.job_description).slice(0, 100)}...
                  <span className="text-green-700 font-semibold">
                    Read more
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center gap-4 py-4 px-5 w-full">
            <button
              className={`px-4 py-2 text-white font-semibold rounded-lg ${
                currentPage === 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-800"
              }`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </button>

            <p className="text-gray-700">
              Page {currentPage} of {totalPages}
            </p>

            <button
              className={`px-4 py-2 text-white font-semibold rounded-lg ${
                currentPage === totalPages
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-800"
              }`}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>

        {/* Right: Job Details (Hidden on Mobile) */}
        <div className="col-span-2 bg-white rounded-lg shadow-lg p-6 hidden md:block border border-gray-100">
          {selectedJob ? (
            <div className="space-y-6">
              {/* Job Header */}
              <div className="border-b border-green-100 pb-4">
                <h2 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                  {selectedJob.requistion_data.job_title}
                </h2>

                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <div className="flex items-center text-gray-600">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-green-100 rounded-full">
                      📍
                    </span>
                    {selectedJob.requistion_data.location_data.name}
                  </div>

                  <div className="flex items-center text-gray-600">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-green-100 rounded-full">
                      📆
                    </span>
                    {new Intl.DateTimeFormat("en-GB", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    }).format(new Date(selectedJob.created_at))}
                  </div>

                  <div className="flex items-center text-gray-600">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-green-100 rounded-full">
                      👤
                    </span>
                    Raised by:{" "}
                    {selectedJob.requistion_data.raise_by_data.user.first_name}
                  </div>
                </div>
              </div>

              {/* Job Description Section */}
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-6 bg-green-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Job Description
                  </h3>
                </div>
                <div
                  className="text-gray-700 prose prose-green max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: selectedJob.job_description,
                  }}
                ></div>
              </div>

              {/* Job Requirements Section */}
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-6 bg-green-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Job Requirements
                  </h3>
                </div>
                <div
                  className="text-gray-700 prose prose-green max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: selectedJob.job_requirements,
                  }}
                ></div>
              </div>

              {/* CTA Button */}
              <div className="text-center pt-4">
                <a
                  href={`https://arogya.bkarogyam.com/hrm?id=${selectedJob.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-md hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Full Details
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a2 2 0 002-2V6m0 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6"
                  ></path>
                </svg>
              </div>
              <p className="text-gray-500 text-lg font-medium">
                Select a job to view its details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllJobs;

'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Comments from '../comments/page';

const PatentDetailPage = ({ params }) => {
  const { id } = params;  // Extracting the patent ID from the URL params
  const [selectedPatent, setSelectedPatent] = useState(null);
  const [patentsList, setPatentsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching the top 20 latest patents
    axios
      .get('https://main.bkarogyam.com/bkapitestimonials/?limit=20')
      .then((response) => {
        const patents = response.data.slice(0, 20);
        setPatentsList(patents);

        // If the URL has an ID, set the selected patent based on the ID
        if (id) {
          const patent = patents.find((patent) => patent.id === parseInt(id));
          setSelectedPatent(patent);
        } else if (patents.length > 0) {
          // Default to the first patent if no ID in the URL
          setSelectedPatent(patents[0]);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching patents list:', err);
        setError('Failed to load patents list');
        setLoading(false);
      });
  }, [id]);

  const handlePatentClick = (patentId) => {
    const patent = patentsList.find((patent) => patent.id === patentId);
    setSelectedPatent(patent); // Update the selected patent on click
  };

  if (loading) {
    return <div className="text-center py-10 text-xl text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500 text-xl">{error}</div>;
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="pt-6 md:pt-24">
        <Image
          src="/images/testomonials-banner.webp"
          layout="responsive"
          width={500}
          height={500}
          alt="Patents Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row md:py-10 py-2 px-2 md:px-24 gap-8">
        {/* Left Section: Patent List */}
        <div className="w-full md:w-1/3 bg-gradient-to-b from-gray-100 to-gray-200 p-6 rounded-xl shadow-lg hidden md:block">
          <h3 className="text-3xl font-bold mb-2 text-blue-800">Top 20 Latest Patents</h3>
          <ul>
            {patentsList.map((patent) => (
              <li
                key={patent.id}
                className={`flex items-center mb-4 cursor-pointer p-3 rounded-xl transition-all duration-300 ease-in-out ${selectedPatent?.id === patent.id ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white' : 'hover:bg-gray-300'}`}
                onClick={() => handlePatentClick(patent.id)} // Handle click
              >
                <Image
                  src={patent.Profile_Pic || '/images/default-profile.png'} // Add fallback image if Profile_Pic is null
                  alt={patent.Patient_Name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  width={48}
                  height={48}
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{patent.Patient_Name}</h4>
                  <p className="text-sm text-gray-600">{patent.Patient_Location}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Patent Details */}
        <div className="w-full md:w-2/3 bg-white md:p-8 p-2 rounded-xl shadow-lg">
          {selectedPatent ? (
            <div>
              {/* Patent Details */}
              <div className="text-center">
                <Image
                  src={selectedPatent.Profile_Pic || '/images/default-profile.png'} // Fallback if Profile_Pic is null
                  alt={selectedPatent.Patient_Name}
                  className="w-40 h-40 mx-auto rounded-full object-cover shadow-xl"
                  width={160}
                  height={160}
                />
                <h1 className="text-3xl font-bold mt-4 text-blue-800">{selectedPatent.Patient_Name}</h1>
                <p className="text-lg text-gray-600">{selectedPatent.Patient_Location}</p>
                <p className="text-red-500 font-medium mt-2">{selectedPatent.Diseases}</p>
              </div>

              <div className="mb-8 text-center md:px-10">
                <p className="text-gray-800 leading-relaxed">{selectedPatent.Description}</p>
              </div>

              <div className="mb-8 md:px-10">
                <h2 className="text-2xl text-black font-semibold text-gradient-to-r from-blue-400 to-blue-600 mb-4">Treatment Progress</h2>
                <div className="flex gap-8">
                  <div className="w-1/2">
                    <h3 className="font-medium text-gray-700 mb-2">Before Treatment</h3>
                    {selectedPatent.Before_Report ? (
                      <Image
                        src={selectedPatent.Before_Report}
                        alt="Before Report"
                        className="rounded-md shadow-md w-full h-64 object-cover"
                        width={640}
                        height={256}
                      />
                    ) : (
                      <div>No report available</div> // Fallback if Before_Report is null
                    )}
                  </div>
                  <div className="w-1/2">
                    <h3 className="font-medium text-gray-700 mb-2">After Treatment</h3>
                    {selectedPatent.After_Report ? (
                      <Image
                        src={selectedPatent.After_Report}
                        alt="After Report"
                        className="rounded-md shadow-md w-full h-64 object-cover"
                        width={640}
                        height={256}
                      />
                    ) : (
                      <div>No report available</div> // Fallback if After_Report is null
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-8 md:px-10">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">What Say Our Patents</h2>
                <iframe
                  className="w-full h-[22em] rounded-md shadow-md"
                  src={`https://www.youtube.com/embed/${selectedPatent.video}`}
                  title={selectedPatent.Patient_Name}
                  allowFullScreen
                ></iframe>
              </div>

              <Comments />
            </div>
          ) : (
            <div className="text-center text-gray-500 text-xl">Select a patent to view details</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatentDetailPage;

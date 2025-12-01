"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';


const AllopathMedicineDetails = () => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCategory, setSearchCategory] = useState('allopath'); // Default category
    const [allData, setAllData] = useState([]); // Store all fetched data
    const [medicineDetails, setMedicineDetails] = useState(null);
    const [ayurvedaDetails, setAyurvedaDetails] = useState(null);
    const [symptomDetails, setSymptomDetails] = useState(null);
    const [notFoundMessage, setNotFoundMessage] = useState('');


    useEffect(() => {
        // Fetch all pages of data on initial load
        const fetchData = async () => {
            setLoading(true);
            try {
                let allResults = [];
                let currentPage = 1;

                const storedToken = localStorage.getItem('token');
                const parsedToken = storedToken ? JSON.parse(storedToken).data : null;

                if (!parsedToken) {
                    console.error('Token not found in local storage');
                    setNotFoundMessage('Authentication token missing. Please log in again.');
                    setLoading(false);
                    return;
                }

                while (currentPage) {
                    const response = await axios.get(
                        `https://healdiway.bkarogyam.com/erp-api/ayurvedmedicinemapping?page=${currentPage}`,
                        {
                            headers: {
                                Authorization: `Token ${parsedToken}`,
                            },
                        }
                    );

                    const { results, next } = response.data;
                    allResults = [...allResults, ...results];
                    currentPage = next; // Update currentPage to next page or null if no more pages
                }

                setAllData(allResults); // Store all fetched results
            } catch (error) {
                console.error('Error fetching data:', error);
                setNotFoundMessage('Failed to fetch data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSearch = () => {
        if (!searchTerm.trim()) {
            alert('Please enter a search term');
            return;
        }

        setLoading(true);
        setMedicineDetails(null);
        setAyurvedaDetails(null);
        setSymptomDetails(null);
        setNotFoundMessage('');

        const foundMedicine = allData.find((item) => {
            if (searchCategory === 'allopath') {
                return item.allopath_data.some((data) => data.name.toLowerCase() === searchTerm.toLowerCase());
            }
            if (searchCategory === 'ayurveda') {
                return item.ayurveda_data?.name.toLowerCase() === searchTerm.toLowerCase();
            }
            if (searchCategory === 'symptoms') {
                return item.symptoms_data.some((symptom) => symptom.name.toLowerCase() === searchTerm.toLowerCase());
            }
            return false;
        });

        if (foundMedicine) {
            setNotFoundMessage('');
            if (searchCategory === 'allopath') {
                const specificMedicine = foundMedicine.allopath_data.find(
                    (data) => data.name.toLowerCase() === searchTerm.toLowerCase()
                );
                setMedicineDetails(specificMedicine);
                setAyurvedaDetails(foundMedicine.ayurveda_data);
            }
            if (searchCategory === 'ayurveda' && foundMedicine.ayurveda_data) {
                setAyurvedaDetails(foundMedicine.ayurveda_data);
            }
            if (searchCategory === 'symptoms') {
                const specificSymptom = foundMedicine.symptoms_data.find(
                    (symptom) => symptom.name.toLowerCase() === searchTerm.toLowerCase()
                );
                setSymptomDetails(specificSymptom);
                setAyurvedaDetails(foundMedicine.ayurveda_data || null);
            }
        } else {
            setNotFoundMessage('No results found for the given search term and category.');
        }

        setLoading(false);
    };


    const renderMedicineDetails = () => {
        if (!medicineDetails) return null;
        const { name, description, sideeffect_data = [] } = medicineDetails;

        return (
            <div className="bg-gradient-to-r from-white via-gray-50 to-gray-100 shadow-xl rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-6 border-b-2 border-blue-300 pb-2">
                    Allopathic Medicine Details
                </h3>
                <p className="text-lg font-medium text-gray-800 mb-4">
                    <span className="font-semibold text-blue-700">Name:</span> {name || 'N/A'}
                </p>
                <p className="text-gray-700 mb-4">
                    <span className="font-semibold text-blue-700">Description:</span>{' '}
                    <span className="text-gray-600">{description || 'No description available'}</span>
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold text-red-600">Side Effects:</span>
                    {sideeffect_data.length > 0 ? (
                        <ul className="mt-3 pl-5 space-y-2 text-red-500 list-disc">
                            {sideeffect_data.map((effect) => (
                                <li key={effect.id} className="text-yellow-600">
                                    {effect.name}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <span className="text-gray-600"> No side effects listed</span>
                    )}
                </p>
            </div>
        );
    };


    const renderAyurvedaDetails = () => {
        if (!ayurvedaDetails) return null;

        // Generate the purchase link
        const purchaseLink = `https://www.bkarogyam.store/e-store/productdetails/${ayurvedaDetails.id}`;

        return (
            <div className="bg-gradient-to-r from-green-100 via-green-50 to-green-100 shadow-xl rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-6 border-b-2 border-green-300 pb-2">
                    Alternate Ayurvedic Medicine
                </h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    {/* Medicine Image */}
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <Image
                            src={`https://healdiway.bkarogyam.com/media/${ayurvedaDetails.thumbnail}`}
                            alt={ayurvedaDetails.name || "Ayurvedic Medicine"}
                            width={500}
                            height={300}
                            className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    {/* Medicine Details */}
                    <div className="sm:ml-6 w-full">
                        {/* Medicine Name */}
                        <p className="text-lg font-medium text-gray-800 mb-4">
                            <span className="text-green-700 font-semibold">Name:</span> {ayurvedaDetails.name || 'N/A'}
                        </p>
                        {/* Medicine Description */}
                        <p className="text-gray-700 mb-4">
                            <span className="text-green-700 font-semibold">Description:</span>{' '}
                            <span
                                className="text-gray-600"
                                dangerouslySetInnerHTML={{
                                    __html: ayurvedaDetails.description || 'No description available',
                                }}
                            />
                        </p>
                        {/* Medicine Benefits */}
                        {ayurvedaDetails.benefits && (
                            <p className="text-gray-700 mb-4">
                                <span className="text-green-700 font-semibold">Benefits:</span>{' '}
                                <span className="text-gray-600">{ayurvedaDetails.benefits.join(', ')}</span>
                            </p>
                        )}
                        {/* Purchase Link */}
                        <a
                            href={purchaseLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            Purchase Now
                        </a>
                    </div>
                </div>
            </div>
        );
    };


    const renderSymptomDetails = () => {
        if (!symptomDetails) return null;
        const { name, description } = symptomDetails;

        return (
            <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 shadow-xl rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-yellow-800 mb-6 border-b-2 border-yellow-300 pb-2">
                    Symptom Details
                </h3>
                <p className="text-lg font-medium text-gray-800 mb-4">
                    <span className="font-semibold text-yellow-700">Name:</span> {name || 'N/A'}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold text-yellow-700">Description:</span>{' '}
                    <span className="text-gray-600">{description || 'No description available'}</span>
                </p>
            </div>
        );
    };


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 md:py-32">
            <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-8">
                    Search Allopathic, Ayurvedic Medicines & Symptoms
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <input
                        type="text"
                        placeholder="Enter search term"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full sm:w-auto flex-grow bg-white border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                    <select
                        value={searchCategory}
                        onChange={(e) => setSearchCategory(e.target.value)}
                        className="w-full sm:w-auto bg-white border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    >
                        <option value="allopath">Search by Allopath</option>
                        <option value="ayurveda">Search by Ayurveda</option>
                        <option value="symptoms">Search by Symptoms</option>
                    </select>
                    <button
                        onClick={handleSearch}
                        disabled={loading}
                        className={`w-full sm:w-auto flex items-center justify-center py-2 px-6 bg-blue-500 text-white rounded-lg shadow-md font-semibold ${loading ? 'cursor-not-allowed bg-blue-300' : 'hover:bg-blue-600'
                            }`}
                    >
                        {loading ? 'Searching...' : 'Search'}
                    </button>
                </div>
                {loading ? (
                    <div className="flex items-center justify-center py-16">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"></div>
                    </div>
                ) : (
                    <>
                        {notFoundMessage && (
                            <div className="text-center mt-8 text-red-600 font-medium">
                                {notFoundMessage}
                            </div>
                        )}
                        {renderMedicineDetails()}
                        {renderSymptomDetails()}
                        {renderAyurvedaDetails()}
                    </>
                )}
            </div>
        </div>
    );
};


export default AllopathMedicineDetails;
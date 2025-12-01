'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import ApointmentSection from '../homepage/apointmentsection';
import Image from 'next/image';

function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const testimonialsPerPage = 12;

    useEffect(() => {
        axios
            .get('https://main.bkarogyam.com/bkapitestimonials/')
            .then((response) => {
                const data = response.data;
                setTestimonials(data);

                // Extract unique categories
                const uniqueCategories = ['All', ...new Set(data.map((item) => item.category_name))];
                setCategories(uniqueCategories);
            })
            .catch((error) => {
                console.error('Error fetching testimonials:', error);
            });
    }, []);

    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };

    // Filter testimonials by search query and selected category
    const filteredTestimonials = testimonials.filter((testimonial) => {
        const matchesCategory =
            selectedCategory === 'All' || testimonial.category_name === selectedCategory;
        const matchesSearch = testimonial.Patient_Name.toLowerCase().includes(
            searchQuery.toLowerCase()
        );
        return matchesCategory && matchesSearch;
    });

    const indexOfLastTestimonial = currentPage * testimonialsPerPage;
    const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
    const currentTestimonials = filteredTestimonials.slice(
        indexOfFirstTestimonial,
        indexOfLastTestimonial
    );

    const totalPages = Math.ceil(filteredTestimonials.length / testimonialsPerPage);
    const handlePageChange = (page) => setCurrentPage(page);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="testimonials-container pt-5 md:pt-16">
            {/* Banner */}
            <div className="banner mb-8">
                <Image
                    src="/images/banner2.jpg"
                    alt="Testimonials Banner"
                    className="w-full h-auto object-cover rounded-md md:pt-12"
                    width={1920}
                    height={1080}
                />
            </div>

            {/* Category Tabs */}
            <div className="category-tabs flex justify-center gap-4 mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            setSelectedCategory(category);
                            setCurrentPage(1);
                        }}
                        className={`px-4 py-2 rounded ${selectedCategory === category
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-blue-300'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Search Bar */}
            <div className="search-bar text-center mb-6 px-5 md:px-0">
                <input
                    type="text"
                    placeholder="Search testimonials..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="text-black border p-2 rounded w-full max-w-md"
                />
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:px-20 px-3 md:py-10 mt-10 bg-gradient-to-t from-green-100 to-orange-50">
                {currentTestimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="testimonial-card border p-4 shadow-lg flex flex-col justify-between items-center text-center bg-white rounded-lg h-full"
                    >
                        {testimonial.Profile_Pic && (
                            <Image
                                src={testimonial.Profile_Pic}
                                alt={testimonial.Patient_Name}
                                className="w-24 h-24 rounded-full mb-4 object-cover"
                                width={96}
                                height={96}
                            />
                        )}

                        <h2 className="text-xl font-semibold text-blue-600">
                            {testimonial.Patient_Name}
                        </h2>
                        <p className="text-gray-600">{testimonial.Patient_Location}</p>
                        {testimonial.Diseases && (
                            <p className="text-red-500 font-medium">{testimonial.Diseases}</p>
                        )}
                        <p className="text-gray-700 mt-2">{truncateText(testimonial.Description, 50)}</p>

                        <div className="flex justify-center gap-4 mt-auto w-full pt-2">
                            <Link
                                href={{
                                    pathname: `/testimonials/${testimonial.id}`,
                                    query: {
                                        Patient_Name: testimonial.Patient_Name.toLowerCase().replace(
                                            /[^a-z0-9\s-]/g,
                                            ''
                                        )
                                            .replace(/\s+/g, '-')
                                            .replace(/-+/g, '-'),
                                    },
                                }}
                            >
                                <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    Read More
                                </button>
                            </Link>
                            <button className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                                Share
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="pagination flex justify-center items-center gap-4 py-3">
                    {currentPage > 1 && (
                        <button
                            onClick={handlePrevious}
                            className="px-4 py-1 rounded bg-gray-200 hover:text-white text-gray-800 hover:bg-blue-600"
                        >
                            Previous
                        </button>
                    )}

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-1 rounded ${currentPage === index + 1
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-800 hover:bg-blue-300'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    {currentPage < totalPages && (
                        <button
                            onClick={handleNext}
                            className="px-4 py-1 rounded bg-gray-200 text-gray-800 hover:text-white hover:bg-blue-600"
                        >
                            Next
                        </button>
                    )}
                </div>
            )}

            <ApointmentSection />
        </div>
    );
}

export default Testimonials;

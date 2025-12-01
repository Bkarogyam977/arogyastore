"use client";
import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaTimes } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import TopRecentReviews from "./top_recent_reviews";
import { motion } from "framer-motion";

function CustomerReviews() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const product = {
        rating: 4.5,
        reviews: 105,
        ratings: [81, 1, 1, 0, 2],
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleHoverRating = (hoverValue) => {
        setHoverRating(hoverValue);
    };

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleSubmitReview = (event) => {
        event.preventDefault();
        // Here you would typically send the review to your backend
        console.log({ rating, reviewText });
        setRating(0);
        setReviewText("");
        setIsFormVisible(false);
    };

    const renderStars = (average) => {
        const stars = [];
        const fullStars = Math.floor(average);
        const hasHalfStar = average % 1 >= 0.5;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FaStar key={i} className="text-yellow-400 w-5 h-5" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 w-5 h-5" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400 w-5 h-5" />);
            }
        }
        
        return stars;
    };

    const renderInteractiveStars = () => {
        return [...Array(5)].map((_, i) => {
            const ratingValue = i + 1;
            return (
                <label key={i} className="cursor-pointer">
                    <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => handleRatingChange(ratingValue)}
                        className="hidden"
                    />
                    <FaStar
                        className={`w-8 h-8 transition-colors duration-200 ${
                            (hoverRating || rating) >= ratingValue 
                                ? "text-yellow-400" 
                                : "text-gray-300"
                        }`}
                        onMouseEnter={() => handleHoverRating(ratingValue)}
                        onMouseLeave={() => handleHoverRating(0)}
                    />
                </label>
            );
        });
    };

    const calculateAverageRating = () => {
        const totalRatings = product.ratings.reduce(
            (acc, rating, index) => acc + rating * (index + 1),
            0
        );
        const totalReviews = product.ratings.reduce(
            (acc, rating) => acc + rating,
            0
        );
        return totalReviews > 0 ? totalRatings / totalReviews : 0;
    };

    // const averageRating = calculateAverageRating();
    const averageRating = 4.5;  //temperory

    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-8 text-gray-800"
                >
                    Customer Reviews
                </motion.h1>

                {/* Rating Summary */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        {/* Average Rating */}
                        <div className="text-center md:text-left">
                            <div className="text-5xl font-bold text-gray-800 mb-2">
                                {averageRating.toFixed(1)}
                            </div>
                            <div className="flex justify-center md:justify-start">
                                {renderStars(averageRating)}
                            </div>
                            <div className="text-gray-600 mt-1">
                                Based on {product.reviews} reviews
                            </div>
                        </div>

                        {/* Rating Breakdown */}
                        <div className="flex-1">
                            {product.ratings.map((count, index) => (
                                <div key={index} className="flex items-center mb-2">
                                    <div className="w-16 text-gray-700">
                                        {5 - index} star
                                    </div>
                                    <div className="flex-1 mx-2">
                                        <div className="bg-gray-200 h-3 rounded-full overflow-hidden">
                                            <div
                                                className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full"
                                                style={{
                                                    width: `${(count / product.reviews) * 100}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="w-10 text-right text-gray-600">
                                        {count}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Write Review Button */}
                        <div className="w-full md:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300"
                                onClick={() => setIsFormVisible(true)}
                            >
                                Write a Review
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Review Form */}
                {isFormVisible && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-xl shadow-md p-6 mb-8"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Write Your Review
                            </h2>
                            <button 
                                onClick={() => setIsFormVisible(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <FaTimes className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmitReview}>
                            {/* Rating */}
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-3">
                                    Your Rating
                                </label>
                                <div className="flex items-center space-x-2">
                                    {renderInteractiveStars()}
                                    <span className="ml-2 text-gray-600">
                                        {rating > 0 ? `${rating} star${rating !== 1 ? 's' : ''}` : "Select rating"}
                                    </span>
                                </div>
                            </div>

                            {/* Review Title */}
                            <div className="mb-6">
                                <label 
                                    htmlFor="reviewTitle"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Review Title
                                </label>
                                <input
                                    type="text"
                                    id="reviewTitle"
                                    name="reviewTitle"
                                    value={reviewText}
                                    onChange={handleReviewTextChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    placeholder="Summarize your experience"
                                    required
                                />
                            </div>

                            {/* Review Text */}
                            <div className="mb-6">
                                <label 
                                    htmlFor="review"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Your Review
                                </label>
                                <textarea
                                    id="review"
                                    name="review"
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    value={reviewText}
                                    onChange={handleReviewTextChange}
                                    placeholder="Share details about your experience with this product"
                                    required
                                ></textarea>
                            </div>

                            {/* Media Upload */}
                            <div className="mb-6">
                                <label 
                                    htmlFor="media"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Add Photos/Videos (Optional)
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                                    <FiUpload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                                    <p className="text-gray-500 mb-2">
                                        Drag & drop files here or click to browse
                                    </p>
                                    <input
                                        type="file"
                                        id="media"
                                        name="media"
                                        accept="image/*,video/*"
                                        className="hidden"
                                        multiple
                                    />
                                    <label 
                                        htmlFor="media"
                                        className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg cursor-pointer transition"
                                    >
                                        Select Files
                                    </label>
                                </div>
                            </div>

                            {/* Personal Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label 
                                        htmlFor="name"
                                        className="block text-gray-700 font-medium mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        placeholder="How you'll appear"
                                        required
                                    />
                                </div>
                                <div>
                                    <label 
                                        htmlFor="email"
                                        className="block text-gray-700 font-medium mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        placeholder="Your email address"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Form Actions */}
                            <div className="flex justify-end space-x-4">
                                <motion.button
                                    type="button"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
                                    onClick={() => setIsFormVisible(false)}
                                >
                                    Cancel
                                </motion.button>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md transition-all"
                                >
                                    Submit Review
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                )}

                {/* Recent Reviews */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Recent Customer Reviews
                    </h2>
                    <TopRecentReviews />
                </div>
            </div>
        </div>
    );
}

export default CustomerReviews;
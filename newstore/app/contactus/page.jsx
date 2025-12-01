"use client";
import { FaPhoneAlt, FaEnvelope, FaBriefcase, FaHeadset } from "react-icons/fa";


const ContactForm = () => {
    return (
        <div className="bg-white md:mt-28 mt-5">
            {/* Updated Header Section */}
            <div className="w-full h-[250px] bg-gradient-to-r from-green-800 via-green-600 to-green-800 flex flex-col justify-center items-center text-white shadow-lg rounded-b-3xl mb-10">
                <h1 className="md:text-6xl text-2xl font-extrabold mb-4 tracking-wide text-center leading-tight">
                    Connect with Arogya Bharat
                </h1>
                <p className="md:text-2xl text-xl mb-6 max-w-4xl text-center font-medium">
                    Have questions, need support, or want to know more about our services? Reach out to us, and we&apos;ll be happy to assist!
                </p>
            </div>

            <hr className="font-bold border-t-2 border-green-600 mt-5" />


            {/* Contact Form Section */}
            <div className="md:mt-16 mt-5 md:px-6 pb-10">
                <h2 className="text-4xl font-extrabold text-green-600 mb-6 text-center">
                    Send Us a Message
                </h2>
                <form className="max-w-3xl mx-auto space-y-4 md:px-1 px-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-lg font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-lg font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-lg font-medium text-gray-700"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-all"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Contact Info Section */}
            <div className="pb-5 md:mt-10">
                <div className="flex flex-col items-center text-center mb-8">
                    <h2 className="md:text-4xl text-2xl font-extrabold text-green-600 mb-4">
                        Reach Us Directly
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <a
                            href="tel:+918081222333"
                            className="text-green-600 font-bold md:text-3xl text-xl hover:text-green-800 transition-all flex items-center gap-2"
                        >
                            <FaPhoneAlt size={30} /> <span className="text-yellow-600">Call Us:</span> +91 8081222333
                        </a>
                        <a
                            href="mailto:doctor@bkarogyam.com"
                            className="text-white py-3 px-6 rounded-lg text-lg md:text-xl font-semibold bg-green-600 hover:bg-green-700 transition-all flex items-center gap-2"
                        >
                            <FaEnvelope size={30} /> doctor@bkarogyam.com
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 px-6">
                    {/* Sales Inquiry */}
                    <div className="md:p-6 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
                        <FaBriefcase size={80} className="text-green-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-green-600">
                            Sales Inquiry
                        </h3>
                        <p className="text-sm md:text-base text-gray-700 mb-2 text-center">
                            Email:{" "}
                            <a href="mailto:doctor@bkarogyam.com" className="text-green-500">
                                doctor@bkarogyam.com
                            </a>
                        </p>
                        <p className="text-sm md:text-base text-center text-black">
                            Phone No:{" "}
                            <a href="tel:+918081222333" className="text-green-500">
                                +91 8081222333
                            </a>
                        </p>
                    </div>

                    {/* Customer Support */}
                    <div className="md:p-6 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
                        <FaHeadset size={80} className="text-green-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-green-600">
                            Customer Support
                        </h3>
                        <p className="text-sm md:text-base text-gray-700 mb-2 text-center">
                            Email:{" "}
                            <a
                                href="mailto:doctor@bkarogyam.com"
                                className="text-green-500"
                            >
                                doctor@bkarogyam.com
                            </a>
                        </p>
                        <p className="text-sm md:text-base text-center text-black">
                            Phone No:{" "}
                            <a href="tel:+918081222333" className="text-green-500">
                                +91 8081222333
                            </a>
                        </p>
                    </div>

                    {/* Career */}
                    <div className="md:p-6 bg-white rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
                        <FaBriefcase size={80} className="text-green-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-green-600">Career</h3>
                        <p className="text-sm md:text-base text-gray-700 mb-2 text-center">
                            Email:{" "}
                            <a
                                href="mailto:doctor@bkarogyam.com"
                                className="text-green-500"
                            >
                                doctor@bkarogyam.com
                            </a>
                        </p>
                        <p className="text-sm md:text-base text-center text-black">
                            Phone No:{" "}
                            <a href="tel:+918081222333" className="text-green-500">
                                +91 8081222333
                            </a>
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ContactForm;

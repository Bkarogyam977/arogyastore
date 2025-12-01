"use client";
import React from 'react';
import Image from 'next/image';
import TestimonialSection from '@/app/homepage/testomonials';
import Treatmentphilosophy from '../treatmentphilosophy';
import OurDoctorsSlider from '@/app/homepage/doctorssliders';
import ConditionsTreated from '@/app/homepage/conditionstreated';
import ApointmentBooking from '@/app/homepage/apointmentbooking';


function PainManagement() {
    return (
        <div>
            <div className="md:pt-28 pt-6" style={{ position: 'relative', width: '100%', height: 'auto' }}>
                <Image
                    src="/images/hops/disease_joint_cover.webp"
                    layout="responsive"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    style={{ width: '100%', height: 'auto' }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '95%',
                        left: '10%',
                    }}
                >
                    <h2
                        className="w-full md:w-auto md:text-xl text-sm md:px-10 px-2 py-1 rounded-xl text-white font-bold bg-orange-500 to-blue-300 cursor-pointer"
                        onClick={() => {
                            const element = document.getElementById("id_book_apointment");
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        Book an Appointment to Consult Our Doctor
                    </h2>
                </div>
            </div>

            <div className="mx-1 md:mx-14 mt-10 flex flex-col md:flex-row gap-5" id="id_book_apointment">
                {/* Right: Content */}
                <div className="p-5  flex-grow max-w-[60em]">
                    <h2 className="md:text-4xl text-3xl font-bold mb-2 text-orange-700">Join & Muscle Pain</h2>
                    <p className='text-sm mt-3 text-black'>Restrictive of movement, and causing some disabling ache, joint and muscle ache can drastically intrude a person&apos;s lifestyle. BK Arogyam understands this pain and provides a natural Ayurvedic manner to manage pain.</p>
                    <p className='mt-3 text-black font-bold text-xl'>Understanding Common Causes of Pain:</p>
                    <p className='text-sm mt-3 text-black'> <span className='text-black font-bold text-xl'>Arthritis (Rheumatoid Arthritis, Osteoarthritis):</span> Inflammation of the joints that leads to pain, stiffness, and swelling.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Muscle Strain:</span>Overexertion or misuse that can lead to torn muscle fibers.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Sprain</span>A stretching or tearing of ligaments holding bones together, resulting in pain, swelling, and instability.</p>
                    <p className='text-sm mt-3 text-black'> <span className='text-black font-bold text-xl'>Tendonitis:</span>Inflammation of a tendon (connective tissue attaching muscle to bone), which causes pain and tenderness.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl' >Bursitis: </span>Inflammation of a bursa, that fluid-filled sack helping in the movement of joints, causing pain and swelling.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Fibromyalgia: </span><br />A chronic condition defined by widespread pain throughout the body, plus excessive fatigue and problems sleeping.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Lower Back Pain, Neck Pain, Knee Pain, Shoulder Pain:</span><br />Severe pains in major joints for various reasons.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Inflammation:</span><br />Body&apos;s response to injury or irritation, with pain, swelling, and redness.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Reduced Inflammation and Pain:</span><br />Ayurvedic herbs and treatments treat the cause of pain and facilitate natural healing.</p>
                </div>
                {/* Left: Form */}
                <div className="enquire-form bg-white shadow-md rounded-lg max-w-sm">
                    <div className="top-part bg-blue-200 p-5">
                        <h2 className="text-4xl font-bold text-black">24,324</h2>
                        <p className="text-clack font-bold text-black">Achieved Cardio Goals: Consultation Success</p>
                    </div>
                    <div className="form-prt p-5">
                        <p className="text-gray-600 mt-2">Fill in your details, a doctor&apos;s assistant will contact you within a hours to book your consultation</p>
                        <div className="form mt-3">
                            <ApointmentBooking />
                        </div>
                    </div>
                </div>
            </div>

            <ConditionsTreated />


            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4 text-center">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Protect Your Joints with Ayurveda
                        </h2>
                        <p className="text-gray-600 mt-4 text-lg">
                            Discover effective Ayurvedic treatments and preventive measures for joint health.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 md:px-20">
                        <div
                            className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500 transform hover:scale-105 transition-transform duration-300">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                70% of people above 65 have joint problems.
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Joint problems often start earlier than expected. Take preventive measures and protect your knees with Ayurveda. Early intervention with Ayurvedic approaches like herbal treatments, personalized therapies, and a tailored lifestyle can ensure joint health remains optimal. Protect yourself from discomfort and the potential for more severe conditions by understanding the importance of prevention. Start young to stay active longer. Ayurveda offers natural solutions that nourish the joints, strengthen bones, and reduce inflammation without side effects. Stay proactive about your joint health today.
                            </p>
                        </div>

                        <div
                            className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500 transform hover:scale-105 transition-transform duration-300">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                BK Arogyam Joint Disorder Treatments
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Doctors at BK Arogyam have successfully treated 43,434 cases of joint disorders by addressing root causes with personalized diets, therapies, and lifestyle changes. From natural herbs to modern therapeutic techniques, BK Arogyam ensures holistic treatment that resolves underlying issues. Their approach combines expert diagnostics, dietary adjustments, and stress-relieving yoga to manage chronic joint pain effectively. With a focus on long-term health and prevention, BK Arogyam builds better lifestyles for patients. Book a consultation today to understand how tailored Ayurveda can help you regain mobility and live pain-free.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            <OurDoctorsSlider />

            <div className="flex flex-col md:flex-row items-center justify-between md:py-20 px-6 md:px-40 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-lg">
                {/* Left Section */}
                <div className="text-center md:text-left md:mr-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-6">
                        Getting relief from <br />
                        Cardio problems is <br />
                        just 3 steps away!
                    </h2>
                    <button
                        onClick={() => {
                            const element = document.getElementById("id_book_apointment");
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="px-8 py-3 bg-green-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-green-600 transform hover:scale-105 transition-all duration-300"
                    >
                        Book Appointment
                    </button>
                </div>

                {/* Right Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-0">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="icon flex justify-center items-center h-24 w-24 bg-blue-100 rounded-full mb-4">
                            <Image
                                src="/images/hops/relief-1.png"
                                alt="Share your Details"
                                title="Share your Details"
                                width={64}
                                height={64}
                                className="w-16 h-16"
                            />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">
                            <span className="block">Share your</span> Details
                        </h4>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="icon flex justify-center items-center h-24 w-24 bg-green-100 rounded-full mb-4">
                            <Image
                                src="/images/hops/relief-2.png"
                                alt="Consult a BK Arogyam Doctor"
                                title="Consult a BK Arogyam Doctor"
                                width={64}
                                height={64}
                                className="w-16 h-16"
                            />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">
                            <span className="block">Consult a</span> Doctor
                        </h4>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="icon flex justify-center items-center h-24 w-24 bg-yellow-100 rounded-full mb-4">
                            <Image
                                src="/images/hops/relief-3.png"
                                alt="Get a complete health Package"
                                title="Get a complete health Package"
                                width={64}
                                height={64}
                                className="w-16 h-16"
                            />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">
                            <span className="block">Get a complete health</span> Package
                        </h4>
                    </div>
                </div>
            </div>

            <Treatmentphilosophy />


            <TestimonialSection />
        </div>
    )
}

export default PainManagement

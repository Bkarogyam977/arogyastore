"use client";
import React from 'react';
import Image from 'next/image';
import ApointmentBooking from '@/app/homepage/apointmentbooking';
import OurDoctorsSlider from '@/app/homepage/doctorssliders';
import Treatmentphilosophy from '../treatmentphilosophy';
import TestimonialSection from '@/app/homepage/testomonials';

function Obesity() {
    return (
        <div>
            <div className="md:pt-28 pt-6" style={{ position: 'relative', width: '100%', height: 'auto' }}>
                <Image
                    src="/images/hops/obesity_banner.webp"
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
                    <h2 className="md:text-4xl text-3xl font-bold mb-2 text-orange-700">Ayurvedic Treatment for Obesity</h2>
                    <p className='text-sm mt-3 text-black'> Weight is more than the number on the scale. It represents a healthy well-being and constitution of the body. In BK Arogyam, we are aware that the need to gain or lose weight can be tough. Ayurveda presents an integrated strategy for attaining a healthy body weight and quality of life.</p>
                    <p className='mt-3 text-black font-bold text-xl'>Causes of Unhealthy Weight Gain:</p>
                    <p className='text-sm mt-3 text-black underline'>Several factors can contribute to weight gain</p>
                    <p className='text-sm mt-3 text-black'> <span className='text-black font-bold text-xl'>Unbalanced Diet:</span> More calories, unhealthy fats, sugars, and processed foods can cause weight gain.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Lack of Exercise:</span>Less calorie burn due to a sedentary lifestyle, encouraging storing up of fat.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Stress:</span>Continuous stress can be a cause for hormone imbalance and increases the desire for food and weight gain.</p>
                    <p className='text-sm mt-3 text-black'> <span className='text-black font-bold text-xl'>Improper Sleep:</span>Poor sleeping is known to bring about the effect of imbalance of appetite and metabolism hormones.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl' >Underlying Health Conditions: </span>Severe medical conditions can influence weight gain or loss.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Finding Your Healthy Weight:</span><br />According to Ayurveda, a healthy weight is so much more than how a person looks. As with body mass index, a number can be determined, but an Ayurvedic practitioner would look at the type of body you have, or dosha, so you could be targeted individually for optimal results. </p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Ayurveda and Yoga: Your Route to Weight Management</span><br />BK Arogyam&apos;s Ayurveda is well beyond the ancient weight-reduction program, though. We aim to achieve that perfectly fit weight in a sustainable and holistic manner. Here is how:</p>
                    <p className='italic text-black'>BK Arogyam&apos;s Ayurveda is well beyond the ancient weight-reduction program, though. We aim to achieve that perfectly fit weight in a sustainable and holistic manner. Here is how:</p>
                    <p className='text-black'>&apos;At BK Arogyam, you have us as your supporters on this healthy weight journey and even healthier you. In the effective Ayurvedic programs tailored for you, shedding some pounds become the discovery of and holistic wellness journey.&apos;</p>
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


            <div className="bg-gray-100 py-10">
                <div className="head-bx text-center mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800">Early Diagnosis Means Early Treatment!</h2>
                    <h3 className="text-xl text-gray-600 mt-4">Are You Experiencing These Symptoms?</h3>
                </div>
                <div className="inner-treat md:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1"> {/* Decreased gap */}
                        <div className="col-md-3 col-sm-6 text-center relative rounded-xl overflow-hidden">
                            <Image
                                src="/images/hops/Pain during defecation.png"
                                alt="Pain during defecation"
                                title="Pain during defecation"
                                width={200}
                                height={200}
                                className="mx-auto mt-4 rounded-xl transform transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute top-5 left-0 w-full text-black text-center py-2 rounded-t-xl">
                                <h4 className="text-lg font-semibold">Pain during defecation</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center relative rounded-xl overflow-hidden">
                            <Image
                                src="/images/hops/Rectal bleeding.png"
                                alt="Rectal bleeding"
                                title="Rectal bleeding"
                                width={200}
                                height={200}
                                className="mx-auto mt-4 rounded-xl transform transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute top-5 left-0 w-full text-black text-center py-2 rounded-t-xl">
                                <h4 className="text-lg font-semibold">Rectal bleeding</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center relative rounded-xl overflow-hidden">
                            <Image
                                src="/images/hops/Constipation.jpeg"
                                alt="Constipation"
                                title="Constipation"
                                width={200}
                                height={200}
                                className="mx-auto mt-4 rounded-xl transform transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute top-5 left-0 w-full text-black text-center py-2 rounded-t-xl">
                                <h4 className="text-lg font-semibold">Constipation</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center relative rounded-xl overflow-hidden">
                            <Image
                                src="/images/hops/Itching & swelling.png"
                                alt="Itching & swelling"
                                title="Itching & swelling"
                                width={200}
                                height={200}
                                className="mx-auto mt-4 rounded-xl transform transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute top-5 left-0 w-full text-black text-center py-2 rounded-t-xl">
                                <h4 className="text-lg font-semibold">Itching & swelling</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ayurveda-choose py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">Why Choose Ayurveda for Obesity Management?</h2>
                        <p className="text-lg text-gray-600 mt-4">What special Ayurveda does in obesity treatment?</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-20">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center justify-center w-16 h-16 bg-[#591717] text-white rounded-full mb-4">
                                <h2 className="text-2xl font-semibold">01.</h2>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Treats the root cause</h4>
                            <p className="text-gray-600">Ayurveda is a holistic treatment approach that will not only look at the cause of the disease but treat the root cause, not just the symptoms. It cleanses your body to make it more receptive to properly targeted therapies that will alter and effect the root cause of the disease. That way, the detox will enable the path toward healing and wellness to be more substantial and sustainable.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center justify-center w-16 h-16 bg-[#591717] text-white rounded-full mb-4">
                                <h2 className="text-2xl font-semibold">02.</h2>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">More than medicine</h4>
                            <p className="text-gray-600">Diet and lifestyle also play a long way in maximizing the potentials of these treatments as well as maintaining their fruits after the course of medication is already over. Ayurveda encourages optimization of diet and lifestyle choices to facilitate general wellness and successful treatment.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center justify-center w-16 h-16 bg-[#591717] text-white rounded-full mb-4">
                                <h2 className="text-2xl font-semibold">03.</h2>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Reduces subsequent health risks</h4>
                            <p className="text-gray-600">Since Ayurveda points out the basic causes of diseases, its cure really involves relatively few risks of serious health complications that may be developed by avoiding certain problems from being treated. Patients on proper Ayurvedic treatments have less likely chances to face health complications afterwards.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="diabetic-sec bg-[#591717] py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold text-white">Obesity? Live healthy with Ayurveda</h2>
                        <p className="text-lg text-gray-200 mt-4">
                            Understand how BK Arogyam helps you live a healthy &amp; happy life
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-20">
                        {/* Grade I */}
                        <div className="relative bg-white rounded-xl shadow-lg p-6 text-center overflow-hidden h-auto py-10">
                            <Image
                                src="/images/hops/number1.jpg"
                                alt="Grade I"
                                title="Grade I"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                            <div className="relative z-10 p-4">
                                <h3 className="text-xl font-semibold text-gray-800 bg-yellow-300 inline-block px-2 py-1 rounded-md">
                                    Grade I
                                </h3>
                                <p className="text-gray-600 mt-4">
                                    Slightly Overweight Up to 7 kgs. Treatment in Ayurveda includes herbal Lekhana medicines, yoga, and body exercises to support metabolism and detoxification.
                                </p>
                            </div>
                        </div>
                        {/* Grade II */}
                        <div className="relative bg-white rounded-xl shadow-lg p-6 text-center overflow-hidden h-auto py-10 my-10">
                            <Image
                                src="/images/hops/number2.jpg"
                                alt="Grade II"
                                title="Grade II"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg py-5"
                            />
                            <div className="relative z-10 p-4 py-10">
                                <h3 className="text-xl font-semibold text-gray-800 bg-yellow-300 inline-block px-2 py-1 rounded-md">
                                    Grade II
                                </h3>
                                <p className="text-gray-600 mt-4">
                                    Grade II Obesity (7-15 kg overweight). Special herbs like Lekhana and therapies like Panchakarma are used to improve metabolism and support weight control.
                                </p>
                            </div>
                        </div>
                        {/* Grade III */}
                        <div className="relative bg-white rounded-xl shadow-lg p-6 text-center overflow-hidden h-auto py-10">
                            <Image
                                src="/images/hops/number3.jpg"
                                alt="Grade III"
                                title="Grade III"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                            <div className="relative z-10 p-4">
                                <h3 className="text-xl font-semibold text-gray-800 bg-yellow-300 inline-block px-2 py-1 rounded-md">
                                    Grade III
                                </h3>
                                <p className="text-gray-600 mt-4">
                                    Grade III Obesity (15 kg overweight). Intensive Panchakarma therapies like udvartana and basti help detoxify and improve circulation for better weight management.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="btm-tag mt-12 text-center">
                        <h3 className="text-xl font-semibold text-white">
                            Personalized consultation with your doctor is just one click away!
                        </h3>
                        <div className="consult-btn mt-6">
                            <a
                                onClick={() => {
                                    const element = document.getElementById("id_book_apointment");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-[#9b2d2f] transition-colors"
                            >
                                Consult A Doctor
                            </a>
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
    );
}

export default Obesity;

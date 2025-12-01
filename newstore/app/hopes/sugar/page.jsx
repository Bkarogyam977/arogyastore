"use client";
import React from 'react';
import Image from 'next/image';
import ApointmentBooking from '@/app/homepage/apointmentbooking';
import OurDoctorsSlider from '@/app/homepage/doctorssliders';
import Treatmentphilosophy from '../treatmentphilosophy';
import TestimonialSection from '@/app/homepage/testomonials';


function SugerManagement() {
    return (
        <div>
            <div className="md:pt-28 pt-6" style={{ position: 'relative', width: '100%', height: 'auto' }}>
                <Image
                    src="/images/hops/suger.webp"
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
                    <h2 className="md:text-4xl text-3xl font-bold mb-2 text-orange-700">Ayurvedic Treatment for Diabetes</h2>
                    <p className='text-sm mt-3 text-black'>Diabetes disables the body from controlling glucose blood concentration. Our team at BK Arogyam understands this challenge and is well-equipped to give a holistic approach through Ayurveda for managing your problem.</p>
                    <p className='mt-3 text-black font-bold text-xl'>Types of Diabetes:</p>
                    <p className='text-sm mt-3 text-black'> <span className='text-black font-bold text-xl'>Type 1 Diabetes:</span>Insulin production in the body is negligible.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Type 2 Diabetes:</span>Body either cannot provide insulin or becomes resistant to its action.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Gestational Diabetes:</span>Developing in pregnancy due to high levels of blood glucose.</p>

                    <p className='text-sm mt-3 text-black'>Ayurveda to Regulate and Control Blood Sugar:</p>
                    <p className='text-sm mt-3 text-black underline'>This is because though it has no cure for diabetes, Ayurveda can help you greatly in your well-being through:</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl' >Dietary Guidance: </span>Specific herbs prescribed according to your case promote healthy metabolism of blood sugar.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Panchakarma Therapy:</span><br />It helps eliminate the toxins associated with diabetes.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Lifestyle Modifications:</span><br />Regular exercises, stress management, and adequate sleep are necessary.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Blood Sugar Monitoring:</span><br />Teach you to monitor your blood sugar levels effectively.</p>
                    <p className='text-black font-bold text-xl'>Living Well with Diabetes:</p>
                    <p className='text-black font-bold text-xl underline'>Ayurveda enables you to be in control of diabetes and its complications</p>
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
                    <h2 className="text-3xl font-semibold text-gray-800">Early Diagnosis Means Early Treatment! </h2>
                    <h3 className="text-xl text-gray-600 mt-4">Are You Experiencing These Symptoms?</h3>
                </div>
                <div className="inner-treat md:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
                        <div className="col-md-3 col-sm-6 text-center relative rounded-xl overflow-hidden">
                            <Image
                                src="/images/hops/Excessive-urination.jpeg"
                                alt="Pain during defecation"
                                title="Pain during defecation"
                                width={200}
                                height={200}
                                className="mx-auto mt-4 rounded-xl transform transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute top-5 left-0 w-full text-black text-center py-2 rounded-t-xl">
                                <h4 className="text-lg font-semibold">Excessive urination</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center relative rounded-xl overflow-hidden">
                            <Image
                                src="/images/hops/Sudden-weight-loss.jpeg"
                                alt="Rectal bleeding"
                                title="Rectal bleeding"
                                width={200}
                                height={200}
                                className="mx-auto mt-4 rounded-xl transform transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute top-5 left-0 w-full text-black text-center py-2 rounded-t-xl">
                                <h4 className="text-lg font-semibold">Sudden weight-loss</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center relative rounded-xl overflow-hidden">
                            <Image
                                src="/images/hops/Blurred-vision.jpeg"
                                alt="Constipation"
                                title="Constipation"
                                width={200}
                                height={200}
                                className="mx-auto mt-4 rounded-xl transform transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute top-5 left-0 w-full text-black text-center py-2 rounded-t-xl">
                                <h4 className="text-lg font-semibold">Blurred vision</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center relative rounded-xl overflow-hidden">
                            <Image
                                src="/images/hops/Constant-fatigue.jpeg"
                                alt="Itching & swelling"
                                title="Itching & swelling"
                                width={200}
                                height={200}
                                className="mx-auto mt-4 rounded-xl transform transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute top-5 left-0 w-full text-black text-center py-2 rounded-t-xl">
                                <h4 className="text-lg font-semibold">Constant fatigue</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="ayurveda-choose py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-5xl font-semibold text-gray-800">Why you should choose Ayurveda?</h2>
                        <p className="text-lg text-gray-600 mt-4">What special Ayurveda does in diabetes treatment?</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-20">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center justify-center w-16 h-16 bg-[#591717] text-white rounded-full mb-4">
                                <h2 className="text-2xl font-semibold">01.</h2>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Works on the root-cause!</h4>
                            <p className="text-gray-600">Unlike other treatment procedures that jump straight to symptom management, Ayurveda plans to address the root-cause of the disease. It begins by detoxifying the body so that medicines can work better towards treating the actual root-cause of the disease. </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center justify-center w-16 h-16 bg-[#591717] text-white rounded-full mb-4">
                                <h2 className="text-2xl font-semibold">02.</h2>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">More than just medicines</h4>
                            <p className="text-gray-600">Other than medicines, the diet and lifestyle play a very important role in complementing the effect of medicines as well as sustaining the benefit of treatment after the medicines have ended. So, Ayurveda equally focuses on your diet & lifestyle.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center justify-center w-16 h-16 bg-[#591717] text-white rounded-full mb-4">
                                <h2 className="text-2xl font-semibold">03.</h2>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Reduces future health risks</h4>
                            <p className="text-gray-600">Since Ayurveda focuses on the root-cause of the disease, it effectively reduces the risk of severe health complications arising out of the untreated underlying cause. Patients who complete their Ayurveda treatment have a reduced risk of health complications later.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="diabetic-sec bg-[#591717] py-12">
                <div className="container mx-auto px-4">
                    {/* Section Heading */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold text-white">Diabetes? Live healthy with Ayurveda</h2>
                        <p className="text-lg text-gray-200 mt-4">Understand how BK Arogyam helps you live a healthy & happy life</p>
                    </div>

                    {/* Grid Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-20">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-lg text-center overflow-hidden">
                            <Image
                                src="/images/hops/dibtis1.jpg"
                                alt="Grade I"
                                title="Grade I"
                                width={500}
                                height={192}
                                className="w-full h-48 object-cover rounded-t-xl"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 bg-yellow-300 inline-block px-2 py-1 rounded-md">
                                    Pre-Diabetic & Initial Stage
                                </h3>
                                <p className="text-gray-600 mt-4">
                                    In the initial stage of Diabetes, BK Arogyam treatment works on preventing further increase in blood sugar levels through diet and lifestyle management along with herbal medicines. This helps in avoiding life-long dependency on insulin and significantly reduces risk of organ damage at later stage.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-lg text-center overflow-hidden">
                            <Image
                                src="/images/hops/dibtis2.jpg"
                                alt="Grade II"
                                title="Grade II"
                                width={500}
                                height={192}
                                className="w-full h-48 object-cover rounded-t-xl"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 bg-yellow-300 inline-block px-2 py-1 rounded-md">
                                    Chronic Diabetes
                                </h3>
                                <p className="text-gray-600 mt-4">
                                    Treatment for chronic Diabetes focuses on reducing dosage of insulin, while managing blood sugar levels and keeping metabolism high to prevent fatigue. Special herbs and Rasayanas are prescribed to rejuvenate the body and to ensure that no further complication is caused.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-lg text-center overflow-hidden">
                            <Image
                                src="/images/hops/dibtis3.jpg"
                                alt="Grade III"
                                title="Grade III"
                                width={500}
                                height={192}
                                className="w-full h-48 object-cover rounded-t-xl"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 bg-yellow-300 inline-block px-2 py-1 rounded-md">
                                    Advanced stage with other complications
                                </h3>
                                <p className="text-gray-600 mt-4">
                                    Treatment for the advanced stage, especially with comorbidities (complications), works on improving the overall quality of life through customized Rasayanic treatment, diets and simple lifestyle modifications. Special attention is also given to reduce risk of further deterioration.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Tag */}
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

export default SugerManagement

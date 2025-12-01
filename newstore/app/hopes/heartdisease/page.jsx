'use client';
import Image from 'next/image';
import Treatmentphilosophy from '../treatmentphilosophy';
import ApointmentBooking from '@/app/homepage/apointmentbooking';
import ConditionsTreated from '@/app/homepage/conditionstreated';
import OurDoctorsSlider from '@/app/homepage/doctorssliders';
import TestimonialSection from '@/app/homepage/testomonials';

function Heartdisease() {
    return (
        <div>
            <div className='md:pt-28 pt-6' style={{ position: 'relative', width: '100%', height: 'auto' }}>
                <Image
                    src="/images/hops/heartdesis.webp"
                    layout="responsive"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    style={{ width: '100%', height: 'auto' }}
                />


                <div style={{
                    position: 'absolute',
                    top: '95%',
                    left: '10%',
                }}>
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



            {/* Form Section */}
            <div className="mx-1 md:mx-14 mt-10 flex flex-col md:flex-row gap-5" id="id_book_apointment">
                {/* Right: Content */}
                <div className="p-5  flex-grow max-w-[60em]">
                    <h2 className="text-4xl font-bold mb-2 text-orange-700">Heart Disease</h2>
                    <p className='text-sm mt-3 text-black'>We realize heart disease is a spectrum, and every patient&apos;s situation is unique. We honor the uniqueness of every journey and ensure care is differentiated to meet unique needs. Here, you&apos;ll find everything you need to navigate heart health-from preventing conditions to managing existing ones.</p>
                    <p className='mt-3 text-black font-bold text-xl'>BK Arogyam empowers you to know and offer a natural approach to heart health through Ayurveda.</p>
                    <p className='text-sm mt-3 text-black underline'>How We Help You Fight Cardiovascular Disease:</p>
                    <p className='text-sm mt-3 text-black'> <span className='text-black font-bold text-xl'>Diagnosis and Evaluation:</span> We diagnose any of the specific types of heart disease, such as CAD, hypertension, atherosclerosis, or arrhythmia, using state-of-the-art diagnostics. These tests consist of heart attack (myocardial infarction), stroke, congestive heart failure, cardiomyopathy, PAD, high cholesterol, heart valve disease, and rheumatic heart disease.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Treatment and Management:</span>Our cardiologists have years of experience and design treatment plans based on your needs. This could include management of medications, the minimally invasive procedures, or even open surgeries for endocarditis or problems with heart valves.</p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl'>Advanced Procedures:</span>BK Arogyam now boasts state-of-the-art procedures not only for ventricular fibrillation but also other conditions.</p>
                    <p className='text-sm mt-3 text-black'> <span className='text-black font-bold text-xl'>Preventative Care:</span>Our belief is prevention is the way, so our team will work on risk factors for an individual to better help them decrease their chances of heart disease. It&apos;s managing elevated blood pressure and cholesterol levels, the identification of any murmurs with their hearts, and encouraging lifestyle habits that support a healthy heart. </p>
                    <p className='text-sm mt-3 text-black'><span className='text-black font-bold text-xl' >Ongoing Support:</span>We understand that heart disease is not easily managed. This is a lifelong process. We offer support in three ways: routine checkups, educational material for our patients, and access to support groups. </p>
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
    )
}

export default Heartdisease

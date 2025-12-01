

'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import AppointmentBooking from './AppointmentBooking';

const doctors = [
    { 
      id: "57", 
      name: "Dr. JK Tiwari", 
      specialization: "Nephrologist, Diabetese Specialist", 
      experience: "10 years", 
      rating: 4.7, 
      bio: "Dr. JK Tiwari is an experienced General Physician providing personalized medical care to patients of all ages.",
      phone: "+91 87654 32109",
      email: "JK.Tiwari@bkarogyam.com",
      image: "/images/imageBox/doctors/dr_jitendra.jpg",
      education: "MBBS, MD (General Medicine)",
      languages: "Hindi, English",
      awards: "Excellence in General Medicine 2021",
      consultationFee: "₹600"
    },
    { 
      id: "600", 
      name: "Dr. Abhishek", 
      specialization: "General Physician", 
      experience: "8 years", 
      rating: 4.7, 
      bio: "Dr. Anil is an experienced General Physician providing personalized medical care to patients of all ages.",
      phone: "+91 87654 32109",
      email: "Anil@bkarogyam.com",
      image: "/images/imageBox/doctors/drRatanesh.png",
      education: "MBBS, MD (General Medicine)",
      languages: "Hindi, English",
      awards: "Best General Practitioner 2020",
      consultationFee: "₹600"
    },
    { 
      id: "8", 
      name: "Dr. Ritesh Chaurasia", 
      specialization: "Naturopathy Expert", 
      experience: "15 years", 
      rating: 4.9, 
      bio: "Dr. Ritesh Chaurasia specializes in naturopathy and holistic healing. With his expertise, he offers sustainable health solutions.",
      phone: "+91 76543 21098",
      email: "Ritesh.Chaurasia@bkarogyam.com",
      image: "/images/imageBox/doctors/Dr-Ritesh.jpeg",
      education: "BNYS (Bachelor of Naturopathy and Yogic Sciences)",
      languages: "Hindi, English",
      awards: "Top Naturopathy Expert 2023",
      consultationFee: "₹700"
    },
    { 
      id: "413", 
      name: "Dr. NL Chaurasia", 
      specialization: "Ayurveda Specialist", 
      experience: "44 years", 
      rating: 4.8, 
      bio: "Dr. NL Chaurasia is a well-renowned Ayurveda Specialist with over 12 years of experience. She has successfully treated thousands of patients with her holistic approach.",
      phone: "+91 98765 43210",
      email: "NL.Chaurasia@bkarogyam.com",
      image: "/images/imageBox/doctors/Dr.nl.jpeg",
      education: "MD in Ayurveda, BAMS",
      languages: "Hindi, English",
      awards: "Ayurveda Excellence Award 2021",
      consultationFee: "₹800"
    },
    { 
      id: "566", 
      name: "Dr. Anshu", 
      specialization: "Weight Management", 
      experience: "5 years", 
      rating: 4.8, 
      bio: "Dr. Anshu is experienced ",
      phone: "+91 98765 43210",
      email: "Anshu@bkarogyam.com",
      image: "/images/imageBox/doctors/doctor1.png",
      education: "BAMS",
      languages: "Hindi, English",
      awards: "Ayurveda Excellence Award 2021",
      consultationFee: "₹800"
    },
    { 
      id: "6", 
      name: "Dr. Shashi chaurasia", 
      specialization: "Cardiologiest", 
      experience: "18 years", 
      rating: 4.8, 
      bio: "Dr. Anshu is experienced ",
      phone: "+91 98765 43210",
      email: "Shashi@bkarogyam.com",
      image: "/images/imageBox/doctors/Dr.Sashi.jpeg",
      education: "BAMS",
      languages: "Hindi, English",
      awards: "Ayurveda Excellence Award 2021",
      consultationFee: "₹600"
    },
    { 
      id: "165", 
      name: "Dr. Vandana chaurasia", 
      specialization: "Cardiologiest", 
      experience: "18 years", 
      rating: 4.8, 
      bio: "Dr. Anshu is experienced ",
      phone: "+91 98765 43210",
      email: "Vandana@bkarogyam.com",
      image: "/images/imageBox/doctors/Dr.Vandana.jpeg",
      education: "BAMS",
      languages: "Hindi, English",
      awards: "Ayurveda Excellence Award 2021",
      consultationFee: "₹600"
    }
];

const DoctorProfile = () => {
  const { Id } = useParams();
  const doctor = doctors.find((doc) => doc.id === Id);
  const [doctorTiming, setDoctorTiming] = useState(null);
  const [loadingTiming, setLoadingTiming] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchDoctorTiming = async () => {
      try {
        setLoadingTiming(true);
        const response = await fetch(
          `https://healdiway.bkarogyam.com/erp-api/clinics/1/doctor_timing/?doctor=${Id}`,
           {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${JSON.parse(localStorage.getItem('token')).data}`
            }
          }
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch doctor timing');
        }
        
        const data = await response.json();
        if (data.length > 0) {
          console.log(data[0]);
          setDoctorTiming(data[0]); // Assuming the API returns an array
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching doctor timing:', err);
      } finally {
        setLoadingTiming(false);
      }
    };

    if (Id) {
      fetchDoctorTiming();
    }
  }, [Id]);

  const formatTime = (timeString) => {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${period}`;
  };


  const getAvailableTimeText = () => {
    if (loadingTiming) return 'Loading availability...';
    if (error) return 'Availability information not available';
    if (!doctorTiming) return 'Not currently available';

    if (doctorTiming.is_two_sessions) {
      return `Available: ${formatTime(doctorTiming.first_start_time)} - ${formatTime(doctorTiming.first_end_time)} and ${formatTime(doctorTiming.second_start_time)} - ${formatTime(doctorTiming.second_end_time)}`;
    } else {
      // Handle single session case
      if (doctorTiming.first_start_time && doctorTiming.second_end_time) {
        return `Available: ${formatTime(doctorTiming.first_start_time)} - ${formatTime(doctorTiming.second_end_time)}`;
      } else if (doctorTiming.first_start_time) {
        return `Available from ${formatTime(doctorTiming.first_start_time)}`;
      } else {
        return 'Not currently available';
      }
    }
  };

  if (!doctor) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 ">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
          <div className="w-20 h-20 mx-auto mb-4 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Doctor Not Found</h1>
          <p className="text-gray-600 mb-6">The requested doctor profile does not exist or may have been moved.</p>
          <a 
            href="/doctors" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Browse Our Doctors
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 md:py-28">
      {/* Doctor Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:mr-8 mb-6 md:mb-0">
              <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full border-4 border-white shadow-lg overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold">{doctor.name}</h1>
              <p className="text-xl md:text-2xl font-medium mt-1">{doctor.specialization}</p>
              
              {/* Doctor Rating */}
              <div className="flex items-center mt-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${i < Math.floor(doctor.rating) ? 'text-yellow-300' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-lg">
                  {doctor.rating} ({Math.floor(Math.random() * 500) + 100} reviews)
                </span>
              </div>
              
              {/* Doctor Availability */}
              <div className="mt-3">
                <p className="text-white/90 font-medium">
                  {getAvailableTimeText()}
                </p>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {doctor.experience} experience
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {doctor.consultationFee} consultation
                </span>
                {doctor.awards && (
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {doctor.awards.split(' ')[0]} Award
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Doctor Info */}
          <div className="lg:w-2/3">
            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'overview'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('experience')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'experience'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'reviews'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Reviews
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-6">
                {activeTab === 'overview' && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">About Dr. {doctor.name.split(' ').pop()}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{doctor.bio}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-5 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                          </svg>
                          Education
                        </h3>
                        <p className="text-gray-700">{doctor.education}</p>
                      </div>
                      
                      <div className="bg-green-50 p-5 rounded-lg">
                        <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Experience
                        </h3>
                        <p className="text-gray-700">{doctor.experience} of professional experience</p>
                        {doctor.awards && (
                          <p className="mt-2 text-gray-700">
                            <span className="font-medium">Awards:</span> {doctor.awards}
                          </p>
                        )}
                      </div>
                      
                      <div className="bg-purple-50 p-5 rounded-lg">
                        <h3 className="text-lg font-semibold text-purple-700 mb-3 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                          </svg>
                          Languages
                        </h3>
                        <p className="text-gray-700">{doctor.languages}</p>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'experience' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Professional Experience</h2>
                    <div className="space-y-6">
                      <div className="border-l-4 border-blue-500 pl-4 py-2">
                        <h3 className="text-xl font-semibold text-gray-800">Senior {doctor.specialization}</h3>
                        <p className="text-gray-600">BKArogyam Ayurveda Center</p>
                        <p className="text-gray-500 text-sm mt-1">{doctor.experience} of experience</p>
                      </div>
                      {doctor.awards && (
                        <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
                          <h3 className="text-lg font-semibold text-yellow-700 mb-2">Awards & Recognition</h3>
                          <p className="text-gray-700">{doctor.awards}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Patient Testimonials</h2>
                    <div className="space-y-6">
                      {[1, 2].map((item) => (
                        <div key={item} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-4">
                            <div>
                              <h4 className="font-medium text-gray-800">Rajesh</h4>
                              <div className="flex mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-4 h-4 ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 italic">
                            &quot;Dr. {doctor.name.split(' ').pop()} provided excellent care and attention. The treatment was effective and the staff was very professional.&quot;
                          </p>
                          <div className="mt-4 text-sm text-gray-500">
                            Reviewed on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Appointment Card */}
          <div className="lg:w-1/3">
              <AppointmentBooking 
                doctorId={doctor.id} 
                doctorName={doctor.name} 
                consultationFee={doctor.consultationFee} 
                doctorTiming={doctorTiming}
              />
          </div>
        </div>
      </div>
    </div>
  );
};


export default DoctorProfile;






















// 'use client';
// import React, { useState } from 'react';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import AppointmentBooking from './AppointmentBooking';



// const doctors = [
//     { 
//       id: "57", 
//       name: "Dr. JK Tiwari", 
//       specialization: "Nephrologist, Diabetese Specialist", 
//       experience: "10 years", 
//       rating: 4.7, 
//       bio: "Dr. JK Tiwari is an experienced General Physician providing personalized medical care to patients of all ages.",
//       phone: "+91 87654 32109",
//       email: "JK.Tiwari@bkarogyam.com",
//       image: "/images/imageBox/doctors/dr_jitendra.jpg",
//       education: "MBBS, MD (General Medicine)",
//       languages: "Hindi, English",
//       awards: "Excellence in General Medicine 2021",
//       consultationFee: "₹600"
//     },
//     { 
//       id: "600", 
//       name: "Dr. Abhishek", 
//       specialization: "General Physician", 
//       experience: "8 years", 
//       rating: 4.7, 
//       bio: "Dr. Anil is an experienced General Physician providing personalized medical care to patients of all ages.",
//       phone: "+91 87654 32109",
//       email: "Anil@bkarogyam.com",
//       image: "/images/imageBox/doctors/drRatanesh.png",
//       education: "MBBS, MD (General Medicine)",
//       languages: "Hindi, English",
//       awards: "Best General Practitioner 2020",
//       consultationFee: "₹600"
//     },
//     { 
//       id: "8", 
//       name: "Dr. Ritesh Chaurasia", 
//       specialization: "Naturopathy Expert", 
//       experience: "15 years", 
//       rating: 4.9, 
//       bio: "Dr. Ritesh Chaurasia specializes in naturopathy and holistic healing. With his expertise, he offers sustainable health solutions.",
//       phone: "+91 76543 21098",
//       email: "Ritesh.Chaurasia@bkarogyam.com",
//       image: "/images/imageBox/doctors/Dr-Ritesh.jpeg",
//       education: "BNYS (Bachelor of Naturopathy and Yogic Sciences)",
//       languages: "Hindi, English",
//       awards: "Top Naturopathy Expert 2023",
//       consultationFee: "₹700"
//     },
//     { 
//       id: "413", 
//       name: "Dr. NL Chaurasia", 
//       specialization: "Ayurveda Specialist", 
//       experience: "44 years", 
//       rating: 4.8, 
//       bio: "Dr. NL Chaurasia is a well-renowned Ayurveda Specialist with over 12 years of experience. She has successfully treated thousands of patients with her holistic approach.",
//       phone: "+91 98765 43210",
//       email: "NL.Chaurasia@bkarogyam.com",
//       image: "/images/imageBox/doctors/Dr.nl.jpeg",
//       education: "MD in Ayurveda, BAMS",
//       languages: "Hindi, English",
//       awards: "Ayurveda Excellence Award 2021",
//       consultationFee: "₹800"
//     },
//     { 
//       id: "566", 
//       name: "Dr. Anshu", 
//       specialization: "Weight Management", 
//       experience: "5 years", 
//       rating: 4.8, 
//       bio: "Dr. Anshu is experienced ",
//       phone: "+91 98765 43210",
//       email: "Anshu@bkarogyam.com",
//       image: "/images/imageBox/doctors/doctor1.png",
//       education: "BAMS",
//       languages: "Hindi, English",
//       awards: "Ayurveda Excellence Award 2021",
//       consultationFee: "₹800"
//     },
//     { 
//       id: "6", 
//       name: "Dr. Shashi chaurasia", 
//       specialization: "Cardiologiest", 
//       experience: "18 years", 
//       rating: 4.8, 
//       bio: "Dr. Anshu is experienced ",
//       phone: "+91 98765 43210",
//       email: "Shashi@bkarogyam.com",
//       image: "/images/imageBox/doctors/Dr.Sashi.jpeg",
//       education: "BAMS",
//       languages: "Hindi, English",
//       awards: "Ayurveda Excellence Award 2021",
//       consultationFee: "₹600"
//     },
//     { 
//       id: "165", 
//       name: "Dr. Vandana chaurasia", 
//       specialization: "Cardiologiest", 
//       experience: "18 years", 
//       rating: 4.8, 
//       bio: "Dr. Anshu is experienced ",
//       phone: "+91 98765 43210",
//       email: "Vandana@bkarogyam.com",
//       image: "/images/imageBox/doctors/Dr.Vandana.jpeg",
//       education: "BAMS",
//       languages: "Hindi, English",
//       awards: "Ayurveda Excellence Award 2021",
//       consultationFee: "₹600"
//     }
// ];



// const DoctorProfile = () => {
//   const { Id } = useParams();
//   const doctor = doctors.find((doc) => doc.id === Id);
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     date: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [activeTab, setActiveTab] = useState('overview');


//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     console.log('Form submitted:', formData);
//     setTimeout(() => {
//       alert(`Appointment booked with ${doctor.name} on ${formData.date}`);
//       setIsSubmitting(false);
//     }, 1500);
//   };


//   if (!doctor) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-50 ">
//         <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
//           <div className="w-20 h-20 mx-auto mb-4 text-red-500">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//             </svg>
//           </div>
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">Doctor Not Found</h1>
//           <p className="text-gray-600 mb-6">The requested doctor profile does not exist or may have been moved.</p>
//           <a 
//             href="/doctors" 
//             className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//             </svg>
//             Browse Our Doctors
//           </a>
//         </div>
//       </div>
//     );
//   }


  
//   return (
//     <div className="min-h-screen bg-gray-50 md:py-28">
//       {/* Doctor Header */}
//       <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:mr-8 mb-6 md:mb-0">
//               <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full border-4 border-white shadow-lg overflow-hidden">
//                 <Image
//                   src={doctor.image}
//                   alt={doctor.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//             <div className="text-white">
//               <h1 className="text-3xl md:text-4xl font-bold">{doctor.name}</h1>
//               <p className="text-xl md:text-2xl font-medium mt-1">{doctor.specialization}</p>
//               <div className="flex items-center mt-3">
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       className={`w-6 h-6 ${i < Math.floor(doctor.rating) ? 'text-yellow-300' : 'text-gray-300'}`}
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <span className="ml-2 text-lg">
//                   {doctor.rating} ({Math.floor(Math.random() * 500) + 100} reviews)
//                 </span>
//               </div>
//               <div className="mt-4 flex flex-wrap gap-2">
//                 <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
//                   {doctor.experience} experience
//                 </span>
//                 <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
//                   {doctor.consultationFee} consultation
//                 </span>
//                 {doctor.awards && (
//                   <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
//                     {doctor.awards.split(' ')[0]} Award
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left Column - Doctor Info */}
//           <div className="lg:w-2/3">
//             {/* Navigation Tabs */}
//             <div className="border-b border-gray-200 mb-8">
//               <nav className="-mb-px flex space-x-8">
//                 <button
//                   onClick={() => setActiveTab('overview')}
//                   className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//                     activeTab === 'overview'
//                       ? 'border-blue-500 text-blue-600'
//                       : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   Overview
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('experience')}
//                   className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//                     activeTab === 'experience'
//                       ? 'border-blue-500 text-blue-600'
//                       : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   Experience
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('reviews')}
//                   className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//                     activeTab === 'reviews'
//                       ? 'border-blue-500 text-blue-600'
//                       : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   Reviews
//                 </button>
//               </nav>
//             </div>

//             {/* Tab Content */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
//               <div className="p-6">
//                 {activeTab === 'overview' && (
//                   <>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">About Dr. {doctor.name.split(' ').pop()}</h2>
//                     <p className="text-gray-600 leading-relaxed mb-6">{doctor.bio}</p>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="bg-blue-50 p-5 rounded-lg">
//                         <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path d="M12 14l9-5-9-5-9 5 9 5z" />
//                             <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
//                           </svg>
//                           Education
//                         </h3>
//                         <p className="text-gray-700">{doctor.education}</p>
//                       </div>
                      
//                       <div className="bg-green-50 p-5 rounded-lg">
//                         <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                           </svg>
//                           Experience
//                         </h3>
//                         <p className="text-gray-700">{doctor.experience} of professional experience</p>
//                         {doctor.awards && (
//                           <p className="mt-2 text-gray-700">
//                             <span className="font-medium">Awards:</span> {doctor.awards}
//                           </p>
//                         )}
//                       </div>
                      
//                       <div className="bg-purple-50 p-5 rounded-lg">
//                         <h3 className="text-lg font-semibold text-purple-700 mb-3 flex items-center">
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
//                           </svg>
//                           Languages
//                         </h3>
//                         <p className="text-gray-700">{doctor.languages}</p>
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 {activeTab === 'experience' && (
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Professional Experience</h2>
//                     <div className="space-y-6">
//                       <div className="border-l-4 border-blue-500 pl-4 py-2">
//                         <h3 className="text-xl font-semibold text-gray-800">Senior {doctor.specialization}</h3>
//                         <p className="text-gray-600">BKArogyam Ayurveda Center</p>
//                         <p className="text-gray-500 text-sm mt-1">{doctor.experience} of experience</p>
//                       </div>
//                       {doctor.awards && (
//                         <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
//                           <h3 className="text-lg font-semibold text-yellow-700 mb-2">Awards & Recognition</h3>
//                           <p className="text-gray-700">{doctor.awards}</p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === 'reviews' && (
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Patient Testimonials</h2>
//                     <div className="space-y-6">
//                       {[1, 2].map((item) => (
//                         <div key={item} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
//                           <div className="flex items-center mb-4">
//                             {/* <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
//                               <Image
//                                 src={`/images/patients/patient-${item}.jpg`}
//                                 alt={`Patient ${item}`}
//                                 width={48}
//                                 height={48}
//                                 className="object-cover"
//                               />
//                             </div> */}
//                             <div>
//                               <h4 className="font-medium text-gray-800">Rajesh</h4>
//                               <div className="flex mt-1">
//                                 {[...Array(5)].map((_, i) => (
//                                   <svg
//                                     key={i}
//                                     className={`w-4 h-4 ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`}
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                   >
//                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                                   </svg>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                           <p className="text-gray-600 italic">
//                             &quot;Dr. {doctor.name.split(' ').pop()} provided excellent care and attention. The treatment was effective and the staff was very professional.&quot;
//                           </p>
//                           <div className="mt-4 text-sm text-gray-500">
//                             Reviewed on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Appointment Card */}
//           <div className="lg:w-1/3">
//               <AppointmentBooking 
//                 doctorId={doctor.id} 
//                 doctorName={doctor.name} 
//                 consultationFee={doctor.consultationFee} 
//               />
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorProfile;


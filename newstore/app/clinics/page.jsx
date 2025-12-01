'use client';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ApointmentSection from '../homepage/apointmentsection';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

function OurClinics() {
  const [clinics, setClinics] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [activeTab, setActiveTab] = useState('all');
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await axios.get('https://main.bkarogyam.com/bkapiclinics/');

        // REMOVE DELHI IDs 6 & 7
        const filtered = response.data.filter(c => !(c.Clinic_Name === "Delhi" && (c.id === 6 || c.id === 7)));

        setClinics(filtered);
      } catch (error) {
        console.error('Error fetching clinics:', error);
      }
    };

    fetchClinics();

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) setSlidesPerView(3);
      else if (screenWidth >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // FIXED FILTER
  const filteredClinics =
    activeTab === 'all'
      ? clinics
      : clinics.filter(
          (clinic) => clinic.Clinic_Name.toLowerCase().trim() === activeTab
        );

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: { trigger: headingRef.current, start: "top 80%" }
    });

    gsap.utils.toArray('.clinic-card').forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: { trigger: card, start: "top 90%" }
      });
    });

    gsap.to(sectionRef.current, {
      backgroundPosition: '50% 30%',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, [clinics]);

  return (
    <div className="relative overflow-hidden">

      {/* HERO SECTION */}
      <div 
        ref={sectionRef}
        className="relative h-[40vh] md:h-[60vh] bg-gradient-to-r from-blue-900 to-teal-800 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/medical-pattern.svg')",
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-teal-300">Clinics</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            State-of-the-art facilities with expert care professionals across multiple locations
          </p>
        </div>
      </div>


      {/* LOCATION TABS */}
      <div className="bg-white py-8 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full font-medium ${
                activeTab === 'all' ? 'bg-teal-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              All Locations
            </button>

            {['Varanasi', 'Mirzapur', 'Lucknow', 'Mumbai', 'Delhi'].map((city) => (
              <button
                key={city}
                onClick={() => setActiveTab(city.toLowerCase())}
                className={`px-6 py-2 rounded-full font-medium ${
                  activeTab === city.toLowerCase()
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =========================
          CLINICS SLIDER SECTION
      =========================== */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredClinics.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={slidesPerView}
              autoplay={{ delay: 5000 }}
              loop
              className="pb-12"
            >
              {filteredClinics.map((clinic) => (
                <SwiperSlide key={clinic.id}>
                  <div className="clinic-card bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition">
                    <div className="relative h-48">
                      <Image
                        src={clinic.clinic_Image}
                        alt={clinic.Clinic_Name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70"></div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {clinic.Clinic_Name}
                      </h3>

                      <p className="text-gray-600 mb-3">{clinic.Clinic_Location}</p>

                      <p className="text-gray-600 mb-4">{clinic.Phone}</p>

                      <div className="flex space-x-3">
                        <a 
                          href={clinic.clinic_map_url}
                          target="_blank"
                          className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg"
                        >
                          View Map
                        </a>
                        <a 
                          href={`tel:${clinic.Phone}`}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                        >
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No clinics found</h3>
            </div>
          )}
        </div>
      </div>


     
      <div className="py-16 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '50+', label: 'Expert Doctors' },
            { number: '15+', label: 'Specialties' },
            { number: '24/7', label: 'Emergency Care' },
            { number: '200K+', label: 'Happy Patients' }
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-4xl font-bold">{stat.number}</div>
              <div className="mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>


      {/* APPOINTMENT SECTION (Your Original Section) */}
      <ApointmentSection />

    </div>
  );
}

export default OurClinics;










// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import gsap from 'gsap';
// import ApointmentSection from '../homepage/apointmentsection';
// import Image from 'next/image';

// function OurClinics() {
//   const [clinics, setClinics] = useState([]);
//   const [slidesPerView, setSlidesPerView] = useState(1);
//   const [showNavigation, setShowNavigation] = useState(false);
//   const clinicsSectionRef = useRef(null);

//   useEffect(() => {
//     const fetchClinics = async () => {
//       try {
//         const response = await axios.get('https://main.bkarogyam.com/bkapiclinics/');
//         setClinics(response.data);
//       } catch (error) {
//         console.error('Error fetching clinics:', error);
//       }
//     };

//     fetchClinics();

//     const calculateSlidesPerView = () => {
//       const screenWidth = window.innerWidth;
//       if (screenWidth >= 1024) {
//         setSlidesPerView(4);
//         setShowNavigation(true);
//       } else if (screenWidth >= 768) {
//         setSlidesPerView(2);
//         setShowNavigation(false);
//       } else {
//         setSlidesPerView(1);
//         setShowNavigation(false);
//       }
//     };

//     calculateSlidesPerView();
//     window.addEventListener('resize', calculateSlidesPerView);

//     return () => {
//       window.removeEventListener('resize', calculateSlidesPerView);
//     };
//   }, []);

//   // GSAP animation function for clinic cards
//   const animateClinicCard = (card) => {
//     gsap.fromTo(
//       card,
//       { opacity: 0, y: 100 },
//       { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
//     );
//   };

//   // Use Intersection Observer to trigger animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const cards = document.querySelectorAll('.clinic-card');
//             cards.forEach((card) => animateClinicCard(card));
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     if (clinicsSectionRef.current) observer.observe(clinicsSectionRef.current);

//     return () => {
//       if (clinicsSectionRef.current) observer.unobserve(clinicsSectionRef.current);
//     };
//   }, []);

//   return (
//     <div className="md:mt-28 mt-6">
//       {/* Top Image Section */}
//       <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
//         <Image
//           src="/images/citys/cities.png"
//           alt="City View"
//           style={{ width: '100%', height: 'auto' }}
//           width={1200}
//           height={800}
//           layout="responsive"
//         />
//       </div>

//       {/* Banner Section */}
//       <div className="relative bg-cover bg-center md:mt-5 mt-12 py-10" style={{ backgroundImage: "url('/images/clinic-banner.jpg')" }}>
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
//           <h2 className="text-white px-10 bg-green-500 rounded-lg md:text-3xl text-2xl font-bold">Our Clinics</h2>
//           <p className="md:px-48 px-4 md:text-lg text-sm text-black">
//             Discover the best healthcare facilities near you. Our clinics are committed to providing quality care for all your needs.
//           </p>
//         </div>
//       </div>

//       {/* Clinics List */}
//       <div ref={clinicsSectionRef} className="mt-8 md:px-20">
//         <Swiper
//           modules={[Navigation]}
//           navigation={showNavigation}
//           spaceBetween={30}
//           slidesPerView={slidesPerView}
//         >
//           {clinics.map((clinic) => (
//             <SwiperSlide key={clinic.id}>
//               <div className="clinic-card rounded-xl bg-white shadow-lg overflow-hidden flex flex-col min-h-[400px] max-h-[400px]">
//                 <div className="flex justify-center items-center">
//                   <Image
//                     src={clinic.clinic_Image || '/images/placeholder-clinic.png'}
//                     alt={clinic.Clinic_Name}
//                     className="object-contain"
//                     width={200}
//                     height={192}
//                     layout="intrinsic"
//                   />
//                 </div>
//                 <div className="flex-1 px-5 text-center">
//                   <p className="text-xl font-semibold text-gray-900">{clinic.Clinic_Name}</p>
//                   <p className="text-md text-gray-600">{clinic.Clinic_Location}</p>
//                   <p className="text-md text-gray-600">{clinic.Phone}</p>
//                 </div>
//                 <a href={clinic.clinic_map_url} target="_blank" rel="noopener noreferrer">
//                   <button className="bg-blue-600 text-white p-2 mt-auto rounded-md w-full">
//                     View on Map
//                   </button>
//                 </a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Appointment Section */}
//       <ApointmentSection />
//     </div>
//   );
// }

// export default OurClinics;



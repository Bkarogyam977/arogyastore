import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import gsap from 'gsap';
import Image from 'next/image';

function Clinics() {
  const [clinics, setClinics] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [showNavigation, setShowNavigation] = useState(false);
  const clinicsSectionRef = useRef(null);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await axios.get('https://bkarogyam.com/bkapiclinics/');
        setClinics(response.data);
      } catch (error) {
        console.error("Error fetching clinics:", error);
      }
    };

    fetchClinics();

    const calculateSlidesPerView = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        setSlidesPerView(4);
        setShowNavigation(true);
      } else {
        setSlidesPerView(1);
        setShowNavigation(false);
      }
    };

    calculateSlidesPerView();
    const handleResize = () => {
      calculateSlidesPerView();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // GSAP animation function
  const animateClinicCard = (card) => {
    gsap.fromTo(card, {
      opacity: 0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    });
  };

  // Intersection Observer callback function
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Animate clinics when the section comes into view
        const cards = document.querySelectorAll('.clinic-card');
        cards.forEach((card, index) => {
          animateClinicCard(card);
        });
      }
    });
  };

  // Create Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    if (clinicsSectionRef.current) {
      observer.observe(clinicsSectionRef.current);
    }

    return () => {
      if (clinicsSectionRef.current) {
        observer.unobserve(clinicsSectionRef.current);
      }
    };
  }, []);

  return (
    <div className='container mx-auto p-2 m-2 md:px-20'>
      <p className="font-bold text-center mt-8 text-3xl mb-5">Explore Our High-Tech Clinics</p>
      <div ref={clinicsSectionRef}>
        <Swiper
          modules={[Navigation]}
          navigation={showNavigation ? true : false}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          onSlideChange={() => console.log('Slide changed')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {clinics.map((clinic) => (
            <SwiperSlide key={clinic.id}>
              <div className='clinic-card rounded-xl bg-white shadow-lg overflow-hidden flex flex-col min-h-[400px] max-h-[400px]'>
                <div className="flex justify-center items-center">
                  <Image
                    src={clinic.clinic_Image}
                    alt={clinic.Clinic_Name}
                    width={500}
                    height={192}
                    className="w-auto max-h-48 object-contain"
                  />
                </div>
                <div className="flex-1 px-5 text-center">
                  <p className="text-xl font-semibold text-gray-900">{clinic.Clinic_Name}</p>
                  <p className="text-md text-gray-600">{clinic.Clinic_Location}</p>
                  <p className="text-md text-gray-600">{clinic.Phone}</p>
                </div>
                <a href={clinic.clinic_map_url} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-600 text-white p-2 mt-auto rounded-md w-full">
                    View on Map
                  </button>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export { Clinics };

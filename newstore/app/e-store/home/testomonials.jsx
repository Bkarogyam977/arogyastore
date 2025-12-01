'use client'
import React, { useEffect, useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';


export function SliderPartenerSay({ url, name, about, profile }) {
  return (


    <div className='flex flex-col rounded-lg py-3 my-[4em] bg-blue-200 shadow-xl mx-auto relative pt-20 px-4 gap-3'>

      <div className='absolute flex mx-auto left-0 right-0 -top-[4em]'>
        <div className='  mx-auto flex justify-center  items-center p-3 shadow-xl rounded-full'>
          <Image
            className="rounded-full overflow-clip p-2"
            width={90}
            height={90}
            src={url}
            alt=""
            layout="intrinsic"
          />
        </div>

      </div>


      <div className='flex text-center '>
        {about}
      </div>

      <div className="text-xl font-bold text-center">
        {name}
      </div>
      <div className='text-center'>
        {profile}
      </div>


    </div>

  )
}



const Testomonial = () => {

  const doctReveiwSay = [
    {
      name: `Dr Minakshi`,
      url: `/images/images55.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `Ram Gopal`,
      url: `/images/doctortej.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorveda &apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },

    {
      name: `Tarak Ram`,
      url: `/images/photo-1612349317150-e413f6a5b16d.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `Nilam Bano`,
      url: `/images/medical-concept-indian-beautiful-female-600nw-1635029716.jpg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `Vinod Singh`,
      url: `/images/doctortendu.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `John Morgan`,
      url: `/images/doctorrahul.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `Ellie Anderson`,
      url: `/images/doctorpatel.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `Dr. Suresh Kumar`,
      url: `/images/doctorarvind.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `Dr Sivani`,
      url: `/images/doctyorswqe.jpeg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
    {
      name: `Dr Salini`,
      url: `/images/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg`,
      profile: 'Ayourveda Doctor',
      about: ' Online consultations are made even easier with Ayorved&apos;s Partnership Program, which has potentially increased the number of patients and generated additional income.'

    },
  ]

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    // Define your logic to determine the number of slides per view based on screen width or other conditions
    const calculateSlidesPerView = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        return 4;
      } else {
        return 1;
      }
    };

    // Update the state with the calculated value
    setSlidesPerView(calculateSlidesPerView);

    // Attach an event listener to window resize to dynamically update the slidesPerView
    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 
  return (
    <div className='mx-2'  >
      <p className='text-black md:text-4xl text-xl text-center font-bold'>What Our Customers Say</p>
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay
        //  navigation
        spaceBetween={50}
        slidesPerView={slidesPerView} >
        {doctReveiwSay.map((e, i) => (
          <SwiperSlide key={i}>
            < SliderPartenerSay url={e.url} about={e.about} name={e.name} profile={e.profile} />
          </SwiperSlide>

        ))}

      </Swiper>
    </div>
  );

}

export { Testomonial };


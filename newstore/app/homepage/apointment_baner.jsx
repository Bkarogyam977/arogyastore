'use client'
import React from 'react';
import { Button } from "@nextui-org/react";
import Image from 'next/image';


function Apointment_Baner() {
  return (
    <div className='item-center md:px-20 px-4 rounded-xl relative text-white text-center mb-10 md:  mt-10'>
      <Image
        src="/images/nirogstreet-background-img-web.jpeg"
        width={1920}
        height={1080}
        className="rounded-xl w-full h-56 md:h-full md:w-full"
        alt="NirogStreet Background"
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-2xl md:text-4xl font-bold mt-6 md:mt-10'>Are you a Doctor/Chemist?</h1>
        <div className='flex flex-row gap-2 mt-2 md:flex-row'>
          <p className='text-lg md:text-lg text-black'>Buy Medicines at Best Prices</p>
          <p className='text-lg md:text-lg text-red-700'>Network with Doctors</p>
          <p className='text-lg md:text-lg'>Participate in Clinical Discussions</p>
        </div>
        <div className='flex justify-center mt-4 md:mt-12'>
          <a href='/register'><Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-6 md:px-12">Register Now</Button></a>
        </div>
      </div>
    </div>
  )
}

export default Apointment_Baner;
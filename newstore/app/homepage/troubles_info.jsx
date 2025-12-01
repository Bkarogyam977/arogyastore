'use client'
import Image from 'next/image';
import React from 'react';
import { IoCloudDoneOutline } from "react-icons/io5";



function Troubles_Info() {
  return (
    <div className='relative md:px-20 px-4 rounded-xl text-white mb-10 md:mt-10'>
      <Image
        src='/images/homepage/troubles_take/diabetes_banner.webp'
        className='md:hidden rounded-xl w-full h-56 object-cover'
        alt='NirogStreet Background Mobile'
        width={500}
        height={224}
      />
      <Image
        src='/images/homepage/troubles_take/diabetes_bannerd.webp'
        className='hidden md:block rounded-xl w-full md:h-full md:w-full object-cover'
        alt='NirogStreet Background'
        width={800}
        height={400}
      />
      <div className='absolute inset-0 flex flex-col justify-center md:left-[10em] p-10 md:p-0'>
        <h1 className='text-xl md:text-4xl font-bold mt-12 md:mt-0'>Kidney troubles take a hike, embrace a life you truly like!</h1>
        <p className='text-base md:text-lg mt-2'>Kick Kidney Troubles Out—Embrace the Vibrant Life You Deserve!</p>
        <div className='flex flex-row gap-4 items-center mt-2'>
          <div className='flex items-center gap-2 md:text-lg'>
            <IoCloudDoneOutline /><span>Address Root Causes</span>
          </div>
          <div className='flex items-center gap-2 md:text-lg'>
            <IoCloudDoneOutline /><span>Personalised Nutrition</span>
          </div>
          <div className='flex items-center gap-2 md:text-lg'>
            <IoCloudDoneOutline /><span>100% Natural & Safe</span>
          </div>
        </div>
        <div className='mt-1 flex md:justify-start justify-center'>
          <button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-6 py-2 rounded-full">
            Consult an Expert
          </button>
        </div>
      </div>
    </div>
  )
}

export default Troubles_Info;
'use client'
import { Layout } from 'antd';
import React from 'react'
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import Image from 'next/image';




function Webinar() {
  const router = useRouter()
  return (
    <Layout>

      <div className='relative md:mt-24 mt-5'>
        <Image
          className='w-full h-auto object-cover hidden md:block'
          src="/images/feed-banner-bg.jpg"
          alt="Background image"
          layout="responsive"
          width={1920}
          height={1080}
        />
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className="relative md:absolute inset-0 items-center justify-left md:left-20 p-4 md:p-10">
            <p className="text-lg md:text-xl md:mt-10">
              <a className="text-blue-500">Home</a><a className='text-black'> / Webinar</a>
            </p>
            <p className="text-4xl md:text-5xl mt-4 md:mt-10 text-black">Join the latest Webinar</p>
            <p className="text-lg mt-2 text-black">Resolve your queries with expert Vaidyas through webinars?</p>
            <p className="text-lg mt-2 text-black">Verify to join live!</p>
            <Button onClick={() => router.push('/register')} color="primary" className='mt-8 md:w-[20vw] text-lg'>Login/Signup</Button>
          </div>

          <div className=' lg:mr-[-40vw]'>
            <div className='md:absolute bottom-24 bg-gradient-to-r from-blue-300 to-transparent right-44 md:px-20 px-5 md:py-9 py-3 rounded-2xl'>
              <p className="text-black text-xl">Watch the latest webinar </p>
              <h2 className='text-3xl mt-3 text-black'>Ayurveda Management<br /> of Obesity</h2>
              <p className="text-black mt-5 text-xl">By Dr. BK Chaurasia</p>
            </div>
          </div>

          <div className='relative lg:mr-[-40vw'>


            <div className='md:absolute bottom-16 right-0 p-10 rounded-2xl'>
              <Image
                className='w-full h-auto object-cover rounded-3xl'
                src="/images/newsiteimg/dr-brijesh-chaurasia-1476286069-57fe56758be3f.jpg"
                alt="Logged out view"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>

          </div>

        </div>
      </div>


      <div>
      <Image
          className='w-full h-auto object-cover'
          src="/images/webinar-logged-out-view.webp"
          alt="Logged out view"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>

      <div className='text-center mb-20'>
        <Button onClick={() => router.push('/register')} className='mt-8 md:w-[20vw] text-lg bg-transparent text-blue-500'>
          Login/Signup to continue ...
        </Button>
      </div>

    </Layout>
  )
}

export default Webinar;



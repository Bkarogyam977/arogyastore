'use client'
import { Layout } from 'antd';
import React from 'react'
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import Image from 'next/image';




function Feed() {
  const router = useRouter()
  return (
    <Layout>

      <div className='relative md:mt-24'>
        <Image
          className="w-full h-auto object-cover hidden md:block"
          src="/images/feed-banner-bg.jpg"
          alt="Background image"
          width={1200}
          height={600}
          layout="responsive"
        />
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className="relative md:absolute inset-0 items-center justify-left md:left-20 p-4 md:p-10">
            <p className="text-lg md:text-xl mt-4 md:mt-10">
              <a className="text-blue-500">Home</a><a className='text-black'> / Feed</a>
            </p>
            <p className="text-4xl md:text-2xl mt-4 md:mt-10 text-black">Personalized Feed, just for you!</p>
            <p className="text-lg mt-2 text-black">Connect with fellow Ayurveda Doctors from across the country</p>
            <p className="text-lg mt-2 text-black">Engage in meaningful clinical discussions by sharing your Knowledge & opinions</p>
            <p className="text-lg mt-2 text-black">Personalized Feed, just for you!</p>
            <Button onClick={() => router.push('/register')} color="primary" className='mt-8 md:w-[20vw] text-lg'>Login/Signup</Button>
          </div>

          <div className='relative lg:mr-[-40vw]'>
            <Image
              className="md:absolute bottom-0 right-[0vw] w-full md:w-[38vw] h-auto object-cover"
              src="/images/feed-banner.jpeg"
              alt="Overlay image"
              width={640}
              height={400}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>

      <div>
        <Image
          className="w-full h-auto object-cover"
          src="/images/feed-logged-out-view.jpeg"
          alt="Logged out view"
          width={1920}
          height={1080}
          layout="responsive"
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

export default Feed;
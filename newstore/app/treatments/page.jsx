'use client'
import { Layout } from 'antd';
import React from 'react'
import { useRouter } from 'next/navigation';
import Accordian from '../accordions/page';
import Image from 'next/image';



function Treatments() {
    const router = useRouter()
    return (
        <Layout>

            {/* main heading end */}
            <div className='px-2 ml-5 md:px-20 md:ml-32 p-10'>
                <h2 className="text-3xl font-bold">Rheumatoid Arthritis</h2>
            </div>
            {/* main heading end */}


            {/* firs card start */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 md:mx-40 bg-white rounded-2xl mb-10">
                <div className="block md:hidden p-0">
                    <Image
                        src="/images/arthritis.webp"
                        alt="Rheumatoid Arthritis"
                        className="w-full h-auto rounded-lg"
                        layout="responsive"
                        width={1920}
                        height={1080}
                    />
                </div>

                <div className="p-2 md:p-10">
                    <h2 className="text-2xl font-bold mb-5">Overview</h2>
                    <p className='text-xl'>Rheumatoid arthritis is an autoimmune disorder where immunity kills its own healthy cells.Here the immunity attacks the lining of the tissue joints from both the sides of body.Since it is autoimmune so the exact cause of it is not known.we can only prevent and manage it be the means of physical therapy,lifestyle management,nutritional therapy and at last surgery.</p>
                </div>

                <div className="hidden md:block p-0 md:p-6">
                    <Image
                        src="/images/arthritis.webp"
                        alt="Rheumatoid Arthritis"
                        className="w-full h-auto rounded-lg"
                        layout="responsive"
                        width={1920}
                        height={1080}
                    />
                </div>
            </div>
            {/* firs card end */}



            {/* second card start */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 md:mx-40 bg-white rounded-2xl">
                <div className="p-0 md:p-6">
                    <Image
                        src="/images/arthritis.webp"
                        alt="Rheumatoid Arthritis"
                        className="w-full h-auto rounded-lg"
                        layout="responsive"
                        width={1920}
                        height={1080}
                    />
                </div>

                <div className="p-2 md:p-10">
                    <h2 className="text-3xl font-bold mb-5">About Rheumatoid arthritis</h2>
                    <p className='text-xl'>Rheumatoid arthritis is an autoimmune disease of chronic occurance.It occurs in joints of both the sides so it makes rheumatoid arthritis different from other types of
                        arthritis,basically it results in inflammation of various parts of limbs and exhibits the symptom of pain at the site of inflammation. The common sites are
                        Fingers,hands,feet,toes,wrists,ankles,knees etc.Uncontrolled inflammation of joints results in the damage to the cartilages which acts as a natural shock absorber of joints ,so absence of shock absorbent can lead to deformity in joints. As our body and bones deriotes by itself ,it results in protection of joints from continuous irritation.
                        Specific immune cells initiates this process.A specific substance is secreted in our joints and by blood it is circulated to the entire body and cause symptoms throughout the body such as Eyes, Skin, Mouth, Lungs and Heart</p>
                </div>
            </div>
            {/* second card end */}


            {/* second card start */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-5 md:mx-40 bg-gradient-to-tr from-yellow-300 via-yellow-100 to-yellow-300 rounded-2xl mt-7 mb-10">
                <div className="p-2 md:p-10 col-span-3">
                    <h2 className="text-3xl font-bold mb-5">Why should you visit a doctor?</h2>
                    <p className='text-lg'>Rheumatoid is a disease associated by hyperactivation of immunity and due to the process of self bone deterioration due to age, but pain and symptoms associated with it must not be ignored. Contact to your nearest rheumatologist, visit to our clinic or visit our official website which is www.nirogstreet.com to consult for experts advice.</p>
                </div>

                <div className="p-0 md:p-6 flex justify-center md:justify-end col-span-1">
                    <Image
                        src="/images/arthritis.webp"
                        alt="Rheumatoid Arthritis"
                        className="w-full h-auto rounded-lg"
                        layout="responsive"
                        width={1920}
                        height={1080}
                    />
                </div>
            </div>

            {/* second card end */}


            <Accordian />


        </Layout>
    )
}

export default Treatments;
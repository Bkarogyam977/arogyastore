// app/LabTests/page.jsx
'use client';
import Image from "next/image";

import OfferCardScroller from "../homepage/ArogyaAppCompnents/OfferCards";
import DoctorApprovedPackages from './components/DoctorApprovedPackages';
import FullBodyCheckupPackages from "./components/FullBodyCheckupPackages";
import OfferBanner from "./components/OfferBanner";
import { UploadOutlined, PhoneOutlined, WhatsAppOutlined, RightOutlined } from '@ant-design/icons';
import PopularLabTestsAndProfiles from "./components/PopularLabTestsAndProfiles";
import MostBookedCheckups from "./components/MostBookedCheckups";
import PopularRadiologyCategory from "./components/PopularRadiologyCategory";
import HomeSampleCollection from "./components/HomeSampleCollection";
import LabFeaturesSection from "./components/LabFeaturesSection";


export default async function LabTestsPage() {

  return (
    <div className="lab-tests-page pt-4">

      <section className="single-banner w-full pt-24 hidden md:block">
        <div className="w-full h-auto">
          <div className="w-full h-48 md:h-72 lg:h-[350px] relative">
            <Image
              src="/images/imageBox/OfferCards/LabTests-Banner.png"
              alt="LabTests-Banner"
              width={1920}  // actual image width
              height={400}  // actual image height
              className="object-cover w-full h-full"
              priority
              quality={100}
            />
          </div>
        </div>
      </section>


        <section className="search-section">
          {/* <SearchBar /> */}
        </section>

        {/* <PopularLabTests  /> */}

        <OfferCardScroller/>

        <section className="md:hidden bg-white py-4 px-4">
          <div className="space-y-3">
            {/* 1. Upload Prescription */}
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <UploadOutlined className="text-blue-600 text-xl mr-3" />
                <div>
                  <p className="font-medium">Upload Prescription</p>
                  <p className="text-xs text-gray-500">Our team will place order for you</p>
                </div>
              </div>
              <RightOutlined className="text-gray-400" />
            </div>

            {/* 2. Call Health Advisor */}
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <PhoneOutlined className="text-green-600 text-xl mr-3" />
                <div>
                  <p className="font-medium">Call our Health Advisor</p>
                  <p className="text-xs text-gray-500">Our team of experts will guide you</p>
                </div>
              </div>
              <RightOutlined className="text-gray-400" />
            </div>

            {/* 3. Book Through WhatsApp */}
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <WhatsAppOutlined className="text-green-500 text-xl mr-3" />
                <div>
                  <p className="font-medium">Book Through WhatsApp</p>
                  <p className="text-xs text-gray-500">Quick booking via WhatsApp</p>
                </div>
              </div>
              <RightOutlined className="text-gray-400" />
            </div>
          </div>
        </section>

        <DoctorApprovedPackages/>
        <OfferBanner/>
        <FullBodyCheckupPackages/>


        <section className="single-banner">
          <div className="container mx-auto">
            <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden shadow-md">
              <Image
                src="/images/imageBox/OfferCards/OfferCard3.png" // Replace with your actual banner image path
                alt="Comprehensive Lab Tests Available"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </section>

        <MostBookedCheckups />

        <section className="single-banner ">
          <div className="container mx-auto ">
            <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden shadow-md">
              <Image
                src="/images/imageBox/OfferCards/OfferCard3.png" // Replace with your actual banner image path
                alt="Comprehensive Lab Tests Available"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </section>

        <PopularLabTestsAndProfiles />

        <PopularRadiologyCategory />

        <HomeSampleCollection/>

        <LabFeaturesSection />
    </div>
  );
}
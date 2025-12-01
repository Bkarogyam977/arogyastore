"use client";
import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

function Learning() {
  const router = useRouter();
  return (
    <Layout>
      <div className="relative mt-4 md:mt-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-5 max-w-7xl mx-auto">
          {/* Content Section */}
          <div className="flex flex-col justify-center p-4 md:p-10 ">
            <p className="text-lg md:text-xl ">
              <a className="text-blue-500">Home</a>
              <a className="text-black"> /Learning</a>
            </p>
            <h1 className="text-3xl md:text-4xl mt-4  text-black font-bold">
              Let&apos;s learn with Bk Arogyam
            </h1>
            <p className="text-lg mt-2 text-black">
              Top Ayurveda gurus offer knowledge, experience, and hands-on
              learning for practitioners, scholars, and students
            </p>
            <p className="text-lg mt-2 text-black select-none">
              Discover our free courses to enhance your knowledge and clinical
              practice now!
            </p>
          </div>

          {/* Video Section */}
          <div className="flex items-center justify-center p-4 md:p-10">
            <div className="w-full max-w-[600px] h-auto">
              <iframe
                width="100%"
                height="300px"
                className="rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/ZVNb45H3ITw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black">
        {" "}
        {/* Added bg-white here */}
        <Image
          className="w-full h-auto object-cover py-10 bg-white"
          src="/images/learning-logged-out-view.jpeg"
          alt="Logged out view"
          width={500}
          height={300}
        />
      </div>

      <div className="text-center mb-20 bg-white">
        <Button
          onClick={() => router.push("/register")}
          className="mt-8 md:w-[20vw] text-lg bg-white text-blue-500 border border-blue-500"
        >
          Login/Signup to continue ...
        </Button>
      </div>
    </Layout>
  );
}

export default Learning;

function Scoring_Participants() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    // Define your logic to determine the number of slides per view based on screen width or other conditions
    const calculateSlidesPerView = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        return 8;
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

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); //

  const Scoring_Participants_data = [
    {
      img: `/images/newsiteimg/participent.jpg`,
    },
    {
      img: `/images/newsiteimg/participent.jpg`,
    },
    {
      img: `/images/newsiteimg/participent.jpg`,
    },
    {
      img: `/images/newsiteimg/participent.jpg`,
    },
    {
      img: `/images/newsiteimg/participent.jpg`,
    },
    {
      img: `/images/newsiteimg/participent.jpg`,
    },
    {
      img: `/images/newsiteimg/participent.jpg`,
    },
    {
      img: `/images/newsiteimg/participent.jpg`,
    },
    {
      img: `/images/newsiteimg/participent.jpg`,
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-10 m-4">
      <p className="text-black mb-10 text-2xl">Top Scoring Participants</p>
      <Swiper
        modules={[Autoplay]}
        autoplay={true}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Scoring_Participants_data.map((d, id) => (
          <SwiperSlide key={id} className="">
            <div className="flex flex-col shadow-xl rounded-3xl bg-white justify-center items-center mb-5">
              <Image
                src={d.img}
                alt=""
                className="shadow-xl rounded-full p-16 md:p-0"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
        ))}
        {/* ... Other slides */}
      </Swiper>
    </div>
  );
}
export { Scoring_Participants };

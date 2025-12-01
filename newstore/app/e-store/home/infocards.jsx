"use client"; // ✅ Needed in app/ directory for hooks

import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ App Router

const cardVariants = {
  hover: {
    y: -5,
    transition: { duration: 0.2 },
  },
};

const InfoCards = () => {
  const router = useRouter(); // ✅ Now works

  const cardData = [
    {
      title: "Labs",
      subtitle: "Smart Reports",
      description:
        "Fast, accurate lab results with detailed analysis and expert recommendations for better health insights.",
      color: "#6985C2",
      imagePath: "/images/labs.png",
      onClick: () => console.log("Navigating to Labs"),
    },
    {
      title: "Consult",
      subtitle: "Consult a Doctor",
      description:
        "Instant video consultations with certified doctors for diagnosis and treatment plans anytime, anywhere.",
      color: "#468556",
      imagePath: "/images/bksir.png",
      // ✅ Internal navigation
      onClick: () => router.push("/HealthConsultation"),
    },
    {
      title: "Order With Prescription",
      subtitle: "Order Now",
      description:
        "Upload prescriptions for quick home delivery of authentic medicines with pharmacist support included.",
      color: "#F5F5F5",
      imagePath: "/images/priscription.png",
      textColor: "#333",
      // ✅ Internal navigation
      onClick: () => router.push("/e-store/allproducts"),
    },
  ];

  return (
    <div className="flex justify-center p-2 md:pt-5">
      {/* Desktop View (3 columns) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-8 w-full">
        {cardData.map((data, index) => (
          <motion.div
            key={index}
            whileHover="hover"
            variants={cardVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full"
          >
            <Card
              className={`relative p-4 cursor-pointer rounded-xl border-none shadow-md hover:shadow-lg transition-all ${
                data.textColor ? "text-gray-800" : "text-black"
              } h-full`}
              style={{
                backgroundColor: data.color,
                minHeight: "180px",
              }}
              onClick={data.onClick}
              bodyStyle={{ height: "100%", padding: 0 }}
            >
              <div className="flex flex-col h-full justify-between p-4">
                <div>
                  {data.icon && <div className="mb-2">{data.icon}</div>}
                  <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
                  <p className="text-xl font-medium mb-2">{data.subtitle}</p>
                  <p className="text-sm">{data.description}</p>
                </div>
                {data.imagePath && (
                  <div className="absolute top-0 right-0 overflow-hidden rounded-br-xl">
                    <Image
                      src={data.imagePath}
                      alt={data.title}
                      className="object-contain object-right-bottom"
                      width={112}
                      height={112}
                    />
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Mobile View (Labs and Consult in one row, Prescription below) */}
      <div className="grid grid-cols-1 gap-0 w-full md:hidden">
        <div className="grid grid-cols-2 gap-2">
          {cardData.slice(0, 2).map((data, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              variants={cardVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <Card
                className={`relative rounded-lg cursor-pointer border-none shadow-none ${
                  data.textColor ? "text-gray-800" : "text-white"
                } h-full`}
                style={{
                  backgroundColor: data.color,
                  minHeight: "80px",
                }}
                onClick={data.onClick}
                bodyStyle={{
                  height: "100%",
                  padding: 0,
                  margin: 0,
                }}
              >
                <div className="flex p-2 flex-col h-full justify-between relative">
                  <div className="p-0 m-0">
                    {data.icon && <div className="m-0">{data.icon}</div>}
                    <h2 className="text-xl font-bold m-0">{data.title}</h2>
                    <p className="text-sm font-medium m-0">{data.subtitle}</p>
                  </div>
                  {data.imagePath && (
                    <div className="absolute bottom-0 right-0">
                      <Image
                        src={data.imagePath}
                        alt={data.title}
                        className="object-contain"
                        width={64}
                        height={64}
                      />
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Prescription Card - full width on mobile */}
        <motion.div
          whileHover="hover"
          variants={cardVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="h-full"
        >
          <Card
            className="relative cursor-pointer mt-3 rounded-lg border-none shadow-none h-full bg-slate-200 min-h-[60px]"
            onClick={cardData[2].onClick}
            bodyStyle={{
              height: "100%",
              padding: 0,
              margin: 0,
              display: "flex",
              alignItems: "center",
              backgroundColor: "inherit",
            }}
          >
            {/* Image on the left */}
            {cardData[2].imagePath && (
              <div className="w-1/5 flex items-center justify-center">
                <Image
                  src={cardData[2].imagePath}
                  alt={cardData[2].title}
                  className="object-contain"
                  width={48}
                  height={48}
                />
              </div>
            )}

            {/* Text content */}
            <div className="flex-1 overflow-hidden text-black">
              <h2 className="text-base font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                {cardData[2].title}
              </h2>
            </div>

            {/* Order Now button */}
            <div className="pr-1">
              <button
                className="px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap bg-white text-blue-600 hover:bg-blue-50 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  cardData[2].onClick();
                }}
              >
                Order Now
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default InfoCards;


"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeftOutlined,
  UserOutlined,
  WalletOutlined,
  TeamOutlined,
  SolutionOutlined,
  CalendarOutlined,
  DashboardOutlined,
  CrownOutlined
} from "@ant-design/icons";
import BottomNavBar from "../AdvisorComponents/BottomNavBar";

const ProfilePage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header Section */}
      <div className="flex items-center space-x-3 mb-5">
        <button onClick={() => router.back()} className="text-2xl text-gray-700">
          <ArrowLeftOutlined />
        </button>
        <h2 className="text-lg font-semibold text-gray-800">My Profile</h2>
      </div>

        {/* Profile Card */}
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
                <Image
                    src="/images/vatar.png" // Replace with actual profile image URL
                    alt="Profile Image"
                    width={64}
                    height={64}
                    className="object-cover"
                />
            </div>
            <div className="ml-4 flex-1">
                <h3 className="text-xl font-semibold">Aswinatham</h3>
                <p className="text-gray-600 text-sm">aswinatham@gmail.com</p>
                <p className="text-green-600 font-semibold text-sm">AsWPq1824b</p>
            </div>
        </div>
        <div className="bg-black shadow-md rounded-lg p-4 flex items-center justify-center">
            <button className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center justify-center">
                <CrownOutlined className="mr-2" /> Become Pro-Advisor
            </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4 my-5">
            <div className="bg-white p-3 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold">20</h3>
            <p className="text-gray-600">Affiliates</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold">₹1000</h3>
            <p className="text-gray-600">Wallet Balance</p>
            </div>
        </div>

        {/* Profile Completion */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-700 flex items-center">
                <UserOutlined className="text-lg text-gray-600 mr-2" />
                My Profile
            </h3>
            <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">33% completed</span>
            </div>
        </div>

        {/* Profile Options */}
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center py-3 border-b border-gray-200">
            <WalletOutlined className="text-lg text-gray-600 mr-3" />
            <p className="text-gray-700">My Wallet</p>
            </div>
            <div className="flex items-center py-3">
            <TeamOutlined className="text-lg text-gray-600 mr-3" />
            <p className="text-gray-700">My Teams</p>
            </div>
        </div>

        {/* More Options */}
        <div className="bg-white p-4 rounded-lg shadow-md mt-4 mb-24">
            <h3 className="text-green-600 font-semibold mb-3">More</h3>
            <div className="flex items-center py-3 border-b border-gray-200">
            <SolutionOutlined className="text-lg text-gray-600 mr-3" />
            <p className="text-gray-700">My Patients</p>
            </div>
            <div className="flex items-center py-3 border-b border-gray-200">
            <CalendarOutlined className="text-lg text-gray-600 mr-3" />
            <p className="text-gray-700">My Meetings</p>
            </div>
            <div className="flex items-center py-3">
            <DashboardOutlined className="text-lg text-gray-600 mr-3" />
            <p className="text-gray-700">Dashboard</p>
            </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavBar />
    </div>
  );
};


export default ProfilePage;

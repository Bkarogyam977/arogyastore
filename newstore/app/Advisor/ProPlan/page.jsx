
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftOutlined,CrownOutlined } from "@ant-design/icons";
import BottomNavBar from "../AdvisorComponents/BottomNavBar";

const ProAdvisorsPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-gray-200 p-4">
      {/* Header Section */}
      <div className="flex items-center space-x-3 mb-5">
        <button onClick={() => router.back()} className="text-2xl text-white">
          <ArrowLeftOutlined />
        </button>
        <h2 className="text-xl font-semibold">Pro-Advisors</h2>
      </div>

      {/* Title */}
      <h1 className="text-center text-2xl font-bold text-white">AROGYAM</h1>
      <h2 className="text-center text-2xl font-semibold text-yellow-400"> <CrownOutlined/> Pro-Advisors</h2>

      {/* Plans Section */}
      <div className="mt-6 space-y-6 mb-24">

        {/* Free Plan */}
        <div className="border border-yellow-500 p-5 rounded-lg">
          <h3 className="text-2xl font-bold text-yellow-400">₹0/-</h3>
          <p className="text-gray-300">Free Plan</p>
          <ul className="mt-2 space-y-2 text-sm text-gray-300">
            <li>⭐ Limited App Access</li>
            <li>⭐ 10% commission on sales</li>
            <li>⭐ Sales Dashboard</li>
            <li>⭐ Direct Selling, Affiliate Links</li>
            <li>⭐ Basic Sales Training, Marketing Materials</li>
          </ul>
          <button className="mt-3 w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold">
            JOIN NOW
          </button>
        </div>

        {/* Pro-Advisor Plan */}
        <div className="border border-yellow-500 p-5 rounded-lg">
          <h3 className="text-2xl font-bold text-yellow-400">₹7999/-</h3>
          <p className="text-gray-300">Pro-Advisor Plan</p>
          <ul className="mt-2 space-y-2 text-sm text-gray-300">
            <li>⭐ Team Building</li>
            <li>⭐ App Access</li>
            <li>⭐ 15% commission (sales + team)</li>
            <li>⭐ Direct Selling, Team Sales, Referrals</li>
            <li>⭐ CRM & Team Management Tools</li>
            <li>⭐ Advanced Marketing Support, Ads Training</li>
          </ul>
          <button className="mt-3 w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold">
            JOIN NOW
          </button>
        </div>

        {/* Stockist Plan */}
        <div className="border border-yellow-500 p-5 rounded-lg">
          <h3 className="text-2xl font-bold text-yellow-400">₹50,000 – ₹1,00,000</h3>
          <p className="text-gray-300">Stockist Plan</p>
          <ul className="mt-2 space-y-2 text-sm text-gray-300">
            <li>⭐ Team Building</li>
            <li>⭐ App Access</li>
            <li>⭐ 15% commission (sales + team) + 40-50% retail margin</li>
            <li>⭐ Direct Selling, Team Sales, Retail, Bulk Orders</li>
            <li>⭐ Inventory Management System</li>
            <li>⭐ Business Training, Local Marketing Support</li>
          </ul>
          <button className="mt-3 w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold">
            JOIN NOW
          </button>
        </div>

      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
};

export default ProAdvisorsPage;


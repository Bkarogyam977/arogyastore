
"use client";
import useUserStore from "../doctor/justand";
import { FiDownload, FiMail, FiPhone, FiMapPin, FiUser, FiCalendar, FiAward } from "react-icons/fi";
import { BsGenderMale, BsGooglePlay, BsShieldCheck } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const ProfilePage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const userdata = useUserStore((state) => state.currentPatient);
    const userAvatar = userdata?.image
      ? `https://healdiway.bkarogyam.com/media/${userdata.image}`
      : "/images/vatar.png";
  

    useEffect(() => {
      // Check if userdata exists after giving it time to load
      const timer = setTimeout(() => {
        if (!userdata) {
          router.push('/login');
        } else {
          setIsLoading(false);
        }
      }, 500); // Wait 500ms for data to load
  
      return () => clearTimeout(timer);
    }, [userdata, router]);
  
    
    if (isLoading) return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-pulse text-gray-500">Loading profile data...</div>
      </div>
    );
  

    if (!userdata) return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-pulse text-gray-500">Redirecting to login...</div>
      </div>
    );

    
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 md:mt-24">

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-24 md:h-28"></div>
            <div className="px-6 pb-8 relative">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between -mt-20">
                <div className="flex flex-col md:flex-row items-center md:items-end">
                <div className="relative group">
                    <img 
                    src={userAvatar} 
                    alt="Profile"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white object-cover shadow-lg"
                    />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {userdata.user.first_name} {userdata.user.last_name}
                    </h1>
                    <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                        <BsShieldCheck className="mr-1" />
                        {userdata.role_data?.value || "Patients"}
                    </span>
                    {userdata.is_agent && (
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                        <FaUserTie className="mr-1" />
                        Advisor
                        </span>
                    )}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
            {/* Personal Information Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InfoItem 
                    icon={<FiUser className="text-blue-600" />}
                    label="Full Name"
                    value={`${userdata.user.first_name} ${userdata.user.last_name}`}
                />
                
                <InfoItem 
                    icon={<BsGenderMale className="text-blue-600" />}
                    label="Gender"
                    value={userdata.gender ? userdata.gender.charAt(0).toUpperCase() + userdata.gender.slice(1) : "Not specified"}
                />
                
                <InfoItem 
                    icon={<FiCalendar className="text-blue-600" />}
                    label="Date of Birth"
                    value={userdata.dob ? new Date(userdata.dob).toLocaleDateString('en-IN') : "Not specified"}
                />
                
                <InfoItem 
                    icon={<FiMail className="text-blue-600" />}
                    label="Email"
                    value={userdata.user.email}
                    isEmail={true}
                />
                
                <InfoItem 
                    icon={<FiPhone className="text-blue-600" />}
                    label="Mobile"
                    value={userdata.user.mobile}
                    isPhone={true}
                />
                
                <InfoItem 
                    icon={<FiMapPin className="text-blue-600" />}
                    label="Address"
                    value={`${userdata.address || "Not specified"}, ${userdata.city_data?.name || ""}, ${userdata.state_data?.name || ""} - ${userdata.pincode || ""}`}
                />
                </div>
            </div>

            {/* Medical History Card */}
            {userdata.medical_history_data?.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Medical History</h2>
                <div className="space-y-4">
                    {userdata.medical_history_data.map((item, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <FiAward className="text-blue-600" />
                        </div>
                        <div>
                        <p className="font-medium text-gray-800">{item.name}</p>
                        {item.details && (
                            <p className="text-sm text-gray-600 mt-1">{item.details}</p>
                        )}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            )}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
            {/* Referral Card */}
            {userdata.user.referer_code && (
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800">Your Referral Code</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5 text-center">
                    <p className="text-sm text-gray-600 mb-2">Share with friends & family</p>
                    <p className="text-3xl font-bold text-blue-600 tracking-wider">
                    {userdata.user.referer_code}
                    </p>
                    <p className="text-xs text-gray-500 mt-3">
                    Earn rewards when they sign up using your code
                    </p>
                </div>
                </div>
            )}

            {/* Practices Card */}
            {userdata.active_practiceId?.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-semibold mb-5 text-gray-800">Associated Centers</h3>
                <div className="space-y-4">
                    {userdata.active_practiceId.map((practice, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-4 hover:border-blue-200 transition">
                        <h4 className="font-medium text-gray-800">{practice.practice.name}</h4>
                        <p className="text-sm text-gray-600 mt-2">
                        <FiMapPin className="inline mr-1" />
                        {practice.practice.address}
                        </p>
                        <p className="text-sm text-gray-600">
                        {practice.practice.city}, {practice.practice.state} - {practice.practice.pincode}
                        </p>
                        <div className="mt-3">
                        <a 
                            href={`tel:${practice.practice.contact}`}
                            className="text-blue-600 text-sm font-medium hover:underline flex items-center"
                        >
                            <FiPhone className="mr-1" /> {practice.practice.contact}
                        </a>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            )}
            </div>
        </div>
        </div>
    );
};


// Reusable InfoItem component
const InfoItem = ({ icon, label, value, isEmail = false, isPhone = false }) => (
  <div className="flex items-start">
    <div className="bg-blue-50 p-2 rounded-lg mr-4">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      {isEmail ? (
        <a href={`mailto:${value}`} className="font-medium text-gray-800 hover:text-blue-600 hover:underline">
          {value}
        </a>
      ) : isPhone ? (
        <a href={`tel:${value}`} className="font-medium text-gray-800 hover:text-blue-600 hover:underline">
          {value}
        </a>
      ) : (
        <p className="font-medium text-gray-800">{value || "Not specified"}</p>
      )}
    </div>
  </div>
);


export default ProfilePage;



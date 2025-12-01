"use client";
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';



const DoctorProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [editMode, setEditMode] = useState(false);
  
  // Sample user data
  const [userData, setUserData] = useState({
    name: 'Dr. Ramesh Kumar',
    email: 'ramesh.kumar@arogyabharat.org',
    phone: '+91 9876543210',
    specialization: 'Cardiologist',
    hospital: 'AIIMS Delhi',
    registrationId: 'MH-12345',
    experience: '12 years',
    address: '123 Health Street, New Delhi, India',
    bio: 'Senior Cardiologist with extensive experience in non-invasive procedures. Committed to providing quality healthcare through ArogyaBharat initiative.',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setEditMode(false);
    // Here you would typically make an API call to save the data
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ArogyaBharat - My Profile</title>
      </Head>

      {/* Header */}
      <header className="bg-green-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">ArogyaBharat</Link>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-green-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="hidden md:flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-green-700 flex items-center justify-center">
                {userData.name.charAt(0)}
              </div>
              <span className="font-medium">{userData.name}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Sidebar */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-600 h-20"></div>
              <div className="px-4 pb-6 relative">
                <div className="flex justify-center -mt-12">
                  <div className="h-24 w-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-3xl font-bold text-green-800">
                    {userData.name.charAt(0)}
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h2 className="text-xl font-semibold text-gray-800">{userData.name}</h2>
                  <p className="text-green-600">{userData.specialization}</p>
                  <p className="text-sm text-gray-500 mt-1">{userData.hospital}</p>
                </div>
                
                <div className="mt-6">
                  <button 
                    onClick={() => setEditMode(!editMode)}
                    className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-200"
                  >
                    {editMode ? 'Cancel Editing' : 'Edit Profile'}
                  </button>
                </div>
                
                <div className="mt-6 border-t pt-4">
                  <h3 className="text-sm font-medium text-gray-500 uppercase">Account</h3>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <button 
                        onClick={() => setActiveTab('personal')}
                        className={`w-full text-left px-2 py-1 rounded ${activeTab === 'personal' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
                      >
                        Personal Information
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('professional')}
                        className={`w-full text-left px-2 py-1 rounded ${activeTab === 'professional' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
                      >
                        Professional Details
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('settings')}
                        className={`w-full text-left px-2 py-1 rounded ${activeTab === 'settings' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
                      >
                        Settings
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b">
                <h2 className="text-xl font-semibold text-gray-800">
                  {activeTab === 'personal' && 'Personal Information'}
                  {activeTab === 'professional' && 'Professional Details'}
                  {activeTab === 'settings' && 'Account Settings'}
                </h2>
              </div>

              <div className="p-6">
                {activeTab === 'personal' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        {editMode ? (
                          <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        ) : (
                          <p className="text-gray-900">{userData.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        {editMode ? (
                          <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        ) : (
                          <p className="text-gray-900">{userData.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        {editMode ? (
                          <input
                            type="tel"
                            name="phone"
                            value={userData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        ) : (
                          <p className="text-gray-900">{userData.phone}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        {editMode ? (
                          <input
                            type="text"
                            name="address"
                            value={userData.address}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        ) : (
                          <p className="text-gray-900">{userData.address}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                      {editMode ? (
                        <textarea
                          name="bio"
                          value={userData.bio}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      ) : (
                        <p className="text-gray-900">{userData.bio}</p>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'professional' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                        {editMode ? (
                          <input
                            type="text"
                            name="specialization"
                            value={userData.specialization}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        ) : (
                          <p className="text-gray-900">{userData.specialization}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Hospital/Clinic</label>
                        {editMode ? (
                          <input
                            type="text"
                            name="hospital"
                            value={userData.hospital}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        ) : (
                          <p className="text-gray-900">{userData.hospital}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Registration ID</label>
                        <p className="text-gray-900">{userData.registrationId}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                        {editMode ? (
                          <input
                            type="text"
                            name="experience"
                            value={userData.experience}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        ) : (
                          <p className="text-gray-900">{userData.experience}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Change Password</h3>
                      <div className="mt-4 space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                      </div>
                      <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                        Update Password
                      </button>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium text-gray-900">Account Actions</h3>
                      <div className="mt-4 space-y-3">
                        <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                          Deactivate Account
                        </button>
                        <p className="text-xs text-gray-500">Temporarily disable your ArogyaBharat account</p>
                      </div>
                    </div>
                  </div>
                )}

                {editMode && activeTab !== 'settings' && (
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorProfile;
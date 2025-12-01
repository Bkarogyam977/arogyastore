"use client";
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PatientProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [editMode, setEditMode] = useState(false);
  
  // Sample patient data
  const [patientData, setPatientData] = useState({
    name: 'Priya Sharma',
    age: 32,
    gender: 'Female',
    bloodGroup: 'B+',
    email: 'priya.sharma@example.com',
    phone: '+91 9876543210',
    address: '456 Wellness Lane, Mumbai, Maharashtra',
    emergencyContact: 'Rahul Sharma (+91 8765432109)',
    medicalHistory: [
      { id: 1, date: '2023-05-15', condition: 'Hypertension', treatment: 'Medication prescribed' },
      { id: 2, date: '2022-11-03', condition: 'Seasonal Allergy', treatment: 'Antihistamines' },
    ],
    currentMedications: [
      { id: 1, name: 'Lisinopril', dosage: '10mg daily', for: 'Blood pressure' },
      { id: 2, name: 'Cetirizine', dosage: '5mg as needed', for: 'Allergies' },
    ],
    upcomingAppointments: [
      { id: 1, date: '2023-06-20', time: '10:30 AM', doctor: 'Dr. Ramesh Kumar', purpose: 'Follow-up' },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setEditMode(false);
    // API call to save data would go here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ArogyaBharat - Patient Profile</title>
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
                {patientData.name.charAt(0)}
              </div>
              <span className="font-medium">{patientData.name}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Patient Sidebar */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-600 h-20"></div>
              <div className="px-4 pb-6 relative">
                <div className="flex justify-center -mt-12">
                  <div className="h-24 w-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-3xl font-bold text-green-800">
                    {patientData.name.charAt(0)}
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h2 className="text-xl font-semibold text-gray-800">{patientData.name}</h2>
                  <p className="text-gray-600">{patientData.age} years • {patientData.gender}</p>
                  <p className="text-sm text-gray-500 mt-1">Patient ID: ABP-{Math.floor(Math.random() * 10000)}</p>
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
                  <h3 className="text-sm font-medium text-gray-500 uppercase">Medical Profile</h3>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <button 
                        onClick={() => setActiveTab('overview')}
                        className={`w-full text-left px-2 py-1 rounded ${activeTab === 'overview' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
                      >
                        Overview
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('medical-history')}
                        className={`w-full text-left px-2 py-1 rounded ${activeTab === 'medical-history' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
                      >
                        Medical History
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('medications')}
                        className={`w-full text-left px-2 py-1 rounded ${activeTab === 'medications' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
                      >
                        Medications
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('appointments')}
                        className={`w-full text-left px-2 py-1 rounded ${activeTab === 'appointments' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
                      >
                        Appointments
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Patient Content */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b">
                <h2 className="text-xl font-semibold text-gray-800">
                  {activeTab === 'overview' && 'Patient Overview'}
                  {activeTab === 'medical-history' && 'Medical History'}
                  {activeTab === 'medications' && 'Current Medications'}
                  {activeTab === 'appointments' && 'Upcoming Appointments'}
                </h2>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            {editMode ? (
                              <input
                                type="text"
                                name="name"
                                value={patientData.name}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                              />
                            ) : (
                              <p className="text-gray-900">{patientData.name}</p>
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                              {editMode ? (
                                <input
                                  type="number"
                                  name="age"
                                  value={patientData.age}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                              ) : (
                                <p className="text-gray-900">{patientData.age} years</p>
                              )}
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                              {editMode ? (
                                <select
                                  name="gender"
                                  value={patientData.gender}
                                  onChange={handleInputChange}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Other">Other</option>
                                </select>
                              ) : (
                                <p className="text-gray-900">{patientData.gender}</p>
                              )}
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
                            {editMode ? (
                              <select
                                name="bloodGroup"
                                value={patientData.bloodGroup}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                              >
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                              </select>
                            ) : (
                              <p className="text-gray-900">{patientData.bloodGroup}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            {editMode ? (
                              <input
                                type="email"
                                name="email"
                                value={patientData.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                              />
                            ) : (
                              <p className="text-gray-900">{patientData.email}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            {editMode ? (
                              <input
                                type="tel"
                                name="phone"
                                value={patientData.phone}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                              />
                            ) : (
                              <p className="text-gray-900">{patientData.phone}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                            {editMode ? (
                              <input
                                type="text"
                                name="address"
                                value={patientData.address}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                              />
                            ) : (
                              <p className="text-gray-900">{patientData.address}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact</label>
                            {editMode ? (
                              <input
                                type="text"
                                name="emergencyContact"
                                value={patientData.emergencyContact}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                              />
                            ) : (
                              <p className="text-gray-900">{patientData.emergencyContact}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {editMode && (
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
                )}

                {activeTab === 'medical-history' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-gray-900">Medical Records</h3>
                      <button className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700">
                        Add New Record
                      </button>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Treatment</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {patientData.medicalHistory.map((record) => (
                            <tr key={record.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.date}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.condition}</td>
                              <td className="px-6 py-4 text-sm text-gray-900">{record.treatment}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button className="text-green-600 hover:text-green-900 mr-3">View</button>
                                <button className="text-blue-600 hover:text-blue-900">Edit</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'medications' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-gray-900">Current Medications</h3>
                      <button className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700">
                        Add Medication
                      </button>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medication</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosage</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">For</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {patientData.currentMedications.map((med) => (
                            <tr key={med.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{med.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{med.dosage}</td>
                              <td className="px-6 py-4 text-sm text-gray-900">{med.for}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button className="text-green-600 hover:text-green-900 mr-3">Refill</button>
                                <button className="text-blue-600 hover:text-blue-900">Edit</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'appointments' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-gray-900">Upcoming Appointments</h3>
                      <Link href="/book-appointment" className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700">
                        Book New Appointment
                      </Link>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {patientData.upcomingAppointments.map((appt) => (
                            <tr key={appt.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appt.date}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appt.time}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appt.doctor}</td>
                              <td className="px-6 py-4 text-sm text-gray-900">{appt.purpose}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button className="text-green-600 hover:text-green-900 mr-3">Details</button>
                                <button className="text-red-600 hover:text-red-900">Cancel</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
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

export default PatientProfilePage;
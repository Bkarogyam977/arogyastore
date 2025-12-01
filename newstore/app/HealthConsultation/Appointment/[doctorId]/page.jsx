
'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Button, Typography, message, Card, Tag, Rate, Divider } from 'antd';
import dayjs from 'dayjs';
import 'antd/dist/reset.css';
import AppointmentFormSubmitter from './AppointmentFormSubmitter';


const { Title, Text } = Typography;

const doctors = [
  {
    id: 1,
    name: "Dr. BK Chaurasia",
    specialization: "Nephrologist, Ayurveda Specialist",
    experience: "24 years",
    rating: 4.8,
    image: "/images/bksir.png",
    location: "BKArogyam Research Pvt. Ltd, Shivadaspur",
    availableSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"]
  },
  // ... other doctors
];

export default function AppointmentPage() {
  const params = useParams();
  const doctorId = parseInt(params.doctorId);
  const doctor = doctors.find(doc => doc.id === doctorId);

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedSlot, setSelectedSlot] = useState(null);

  if (!doctor) return <div className="p-8 text-center text-xl font-bold">Doctor not found</div>;

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBookAppointment = () => {
    if (!selectedSlot) {
      message.error("Please select a time slot!");
      return;
    }
    message.success(`Appointment booked with ${doctor.name} on ${selectedDate.format("DD MMM YYYY")} at ${selectedSlot}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <Text className="text-indigo-600 font-medium tracking-widest">BOOK YOUR APPOINTMENT</Text>
        <Title level={1} className="!text-4xl !font-light !mt-2 !text-gray-800">Schedule with {doctor.name.split(' ')[0]}</Title>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Doctor Profile Card */}
        <div className="w-full lg:w-2/5">
          <Card className="rounded-2xl shadow-sm border-0 overflow-hidden bg-gradient-to-br from-indigo-50 to-gray-50">
            <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
                style={{ filter: 'brightness(0.95) contrast(1.05)' }}
              />
            </div>
            
            <div className="px-4 pb-6">
              <div className="flex justify-between items-start">
                <div>
                  <Tag color="#4f46e5" className="text-xs font-medium px-3 py-1 rounded-full mb-3 bg-indigo-100 text-indigo-700 border-0">
                    {doctor.specialization}
                  </Tag>
                  <Title level={2} className="!text-2xl !font-medium !text-gray-800 !mb-1">{doctor.name}</Title>
                  <Text className="text-gray-500">{doctor.location}</Text>
                </div>
                <div className="items-center bg-white px-3 py-1 rounded-full shadow-sm hidden md:flex">
                  <Text className="text-gray-700 ml-2 text-sm">★{doctor.rating}</Text>
                </div>
              </div>

              <Divider className="my-4 border-gray-200" />

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <Text className="block text-gray-500 text-sm">Experience</Text>
                    <Text className="font-medium">{doctor.experience}</Text>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <Text className="block text-gray-500 text-sm">Location</Text>
                    <Text className="font-medium">{doctor.location}</Text>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Booking Section */}
        <div className="w-full lg:w-3/5">
          <Card className="rounded-2xl shadow-sm border-0 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Calendar */}
              <div>
                <Title level={4} className="!text-lg !font-medium !text-gray-700 !mb-4">Select Date</Title>
                <Calendar 
                  fullscreen={false} 
                  value={selectedDate} 
                  onChange={handleDateChange} 
                  className="border-none"
                  headerRender={({ value, onChange }) => (
                    <div className="flex justify-between items-center mb-4">
                      <Button 
                        type="text" 
                        shape="circle" 
                        size="small"
                        icon={<span className="text-gray-500">‹</span>}
                        onClick={() => onChange(value.subtract(1, 'month'))}
                        className="hover:bg-gray-100"
                      />
                      <Text strong className="text-gray-700">
                        {value.format('MMMM YYYY')}
                      </Text>
                      <Button 
                        type="text" 
                        shape="circle" 
                        size="small"
                        icon={<span className="text-gray-500">›</span>}
                        onClick={() => onChange(value.add(1, 'month'))}
                        className="hover:bg-gray-100"
                      />
                    </div>
                  )}
                />
              </div>

              {/* Time Slots */}
              <div>
                <Title level={4} className="!text-lg !font-medium !text-gray-700 !mb-4">
                  Available Time Slots
                </Title>
                <div className="grid grid-cols-2 gap-3">
                  {doctor.availableSlots.map((slot, index) => (
                    <Button
                      key={index}
                      type={selectedSlot === slot ? "primary" : "text"}
                      shape="round"
                      size="middle"
                      className={`font-normal ${selectedSlot === slot ? '!bg-indigo-600 !border-indigo-600' : 'border-gray-200 hover:bg-gray-50'}`}
                      onClick={() => handleSlotSelection(slot)}
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <Divider className="my-6 border-gray-200" />

            {/* Summary */}
            <div className="mb-6">
              <Title level={4} className="!text-lg !font-medium !text-gray-700 !mb-3">Appointment Summary</Title>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <Text className="text-gray-500">Date:</Text>
                  <Text className="font-medium">{selectedDate.format("ddd, MMM DD YYYY")}</Text>
                </div>
                <div className="flex justify-between mb-2">
                  <Text className="text-gray-500">Time:</Text>
                  <Text className="font-medium">{selectedSlot || "Not selected"}</Text>
                </div>
                <div className="flex justify-between">
                  <Text className="text-gray-500">Doctor:</Text>
                  <Text className="font-medium">{doctor.name}</Text>
                </div>
              </div>
            </div>

            {/* Book Button */}
            <Button 
              type="primary" 
              size="large" 
              shape="round"
              block
              className="!bg-indigo-600 !border-indigo-600 hover:!bg-indigo-700 !h-12 !text-base !font-medium"
              onClick={handleBookAppointment}
              disabled={!selectedSlot}
            >
              Confirm Appointment
            </Button>

            <Text className="block mt-4 text-center text-gray-400 text-sm">
              <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Average wait time: 15 mins • Free cancellation
            </Text>
          </Card>
        </div>
      </div>
    </div>
  );
}
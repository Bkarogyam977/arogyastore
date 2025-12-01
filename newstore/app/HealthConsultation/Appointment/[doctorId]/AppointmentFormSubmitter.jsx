'use client';
import React, { useState } from 'react';
import { message } from 'antd';

const AppointmentFormSubmitter = ({ 
  selectedDate, 
  selectedSlot, 
  doctorId, 
  patientData,
  onSuccess,
  onError 
}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    
    try {
      const parsedDate = new Date(selectedDate);
      if (isNaN(parsedDate.getTime())) {
        throw new Error("Invalid date format.");
      }

      // Parse the time slot
      const [time, modifier] = selectedSlot.split(" ");
      let [hours, minutes] = time.split(":").map(Number);
      if (modifier === "PM" && hours !== 12) hours += 12;
      if (modifier === "AM" && hours === 12) hours = 0;

      // Combine date and time
      parsedDate.setHours(hours, minutes);
      const schedule_at = parsedDate.toISOString();

      const dataToSubmit = {
        schedule_at,
        slot: 20,
        doctor: doctorId,
        category: patientData.category,
        notes: patientData.notes,
        patient: {
          user: {
            first_name: patientData.name,
            email: "enqury@gmail.com",
            mobile: patientData.phone,
          },
        },
        practice: 1,
        applyonweb: true,
      };

      const response = await fetch('https://healdiway.bkarogyam.com/erp-api/appointment/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit),
      });

      const result = await response.json();
      
      if (response.status === 200 || response.status === 201) {
        message.success('Appointment booked successfully!');
        if (onSuccess) onSuccess(result);
      } else {
        throw new Error(result.message || 'An error occurred while booking the appointment.');
      }
    } catch (error) {
      message.error(error.message);
      if (onError) onError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleSubmit}
      disabled={loading}
      className={`w-full bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 transition-colors ${
        loading ? 'opacity-70 cursor-not-allowed' : ''
      }`}
    >
      {loading ? 'Processing...' : 'Confirm Appointment'}
    </button>
  );
};

export default AppointmentFormSubmitter;
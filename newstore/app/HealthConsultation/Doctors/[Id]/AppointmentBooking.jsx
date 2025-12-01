// // components/AppointmentBooking.jsx
// 'use client';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const AppointmentBooking = ({ doctorId, doctorName, consultationFee }) => {
//       const [loading, setLoading] = useState(true);
//       const [error, setError] = useState(null);
//       const [doctorTiming, setDoctorTiming] = useState(null);
//       const [selectedDate, setSelectedDate] = useState('');
//       const [availableSlots, setAvailableSlots] = useState([]);
//       const [selectedTime, setSelectedTime] = useState('');
//       const [formData, setFormData] = useState({
//         name: '',
//         mobile: '',
//       });
//       const [isSubmitting, setIsSubmitting] = useState(false);
//       const [submissionMessage, setSubmissionMessage] = useState(null);



//       useEffect(() => {
//         const fetchDoctorTiming = async () => {
//           try {
//             setLoading(true);
//             setError(null); // Clear previous errors

//             const storedToken = localStorage.getItem('token');
//             let parsedToken = null;

//             if (storedToken) {
//               try {
//                 parsedToken = JSON.parse(storedToken).data;
//               } catch (e) {
//                 console.error('Error parsing token from local storage:', e);
//                 setError('Authentication error: Could not parse token. Please log in again.');
//                 setLoading(false);
//                 return;
//               }
//             }

//             if (!parsedToken) {
//               setError('Authentication token not found. Please log in to book an appointment.');
//               setLoading(false);
//               return;
//             }

//             const response = await axios.get(
//               `https://healdiway.bkarogyam.com/erp-api/clinics/1/doctor_timing/?doctor=${doctorId}`,
//               {
//                 headers: {
//                   Authorization: `Token ${parsedToken}`,
//                 },
//               }
//             );

//             if (response.data && response.data.length > 0) {
//               setDoctorTiming(response.data[0]);
//             } else {
//               setDoctorTiming(null);
//               setError('No general timing information found for this doctor in the API.');
//             }

//           } catch (e) {
//             if (e.response) {
//               if (e.response.status === 401 || e.response.status === 403) {
//                 setError('Unauthorized access. Please log in again.');
//               } else {
//                 setError(`Failed to fetch doctor timing: ${e.response.status} - ${e.response.statusText}`);
//               }
//             } else if (e.request) {
//               setError('Network error: No response from server. Please check your internet connection.');
//             } else {
//               setError(`Error fetching doctor timing: ${e.message}`);
//             }
//           } finally {
//             setLoading(false);
//           }
//         };

//         if (doctorId) {
//           fetchDoctorTiming();
//         }
//       }, [doctorId]);



//       useEffect(() => {
//         if (selectedDate && doctorTiming) {
//           generateTimeSlots(selectedDate, doctorTiming);
//         }
//         else if (selectedDate && !doctorTiming && !loading) {
//           setAvailableSlots([]); // Clear slots if date is selected but no doctorTiming was loaded
//         }
//       }, [selectedDate, doctorTiming, loading]);


//       const generateTimeSlots = (date, timing) => {
//         const todayDate = new Date();
//           const isSelectedDateToday = new Date(date).toDateString() === todayDate.toDateString();
          
//           const slots = [];
//           const slotDuration = 30; // 30-minute slots

//           // For this specific API response structure, we need to handle the unusual time configuration
//           const effectiveStartTime = timing.first_start_time || "09:00:00"; // Default fallback
//           const effectiveEndTime = timing.second_end_time || "18:00:00"; // Default fallback

//           console.log('Using times:', {
//             effectiveStartTime,
//             effectiveEndTime,
//             isTwoSessions: timing.is_two_sessions
//           });

//           const addSlots = (startStr, endStr) => {
//             if (!startStr || !endStr) {
//               console.warn(`Skipping slot generation - missing time: Start=${startStr}, End=${endStr}`);
//               return;
//             }

//             // Remove seconds if present (handle both "HH:MM" and "HH:MM:SS" formats)
//             const cleanTime = (timeStr) => timeStr.split(':').slice(0, 2).join(':');
//             startStr = cleanTime(startStr);
//             endStr = cleanTime(endStr);

//             let startHour, startMinute, endHour, endMinute;
//             try {
//               [startHour, startMinute] = startStr.split(':').map(Number);
//               [endHour, endMinute] = endStr.split(':').map(Number);
//             } catch (e) {
//               console.error('Error parsing time:', e);
//               return;
//             }

//             // Validate parsed times
//             if (isNaN(startHour) || isNaN(startMinute) || isNaN(endHour) || isNaN(endMinute)) {
//               console.error('Invalid time format:', { startStr, endStr });
//               return;
//             }

//             const selectedDateObj = new Date(date);
//             let currentSlotTime = new Date(
//               selectedDateObj.getFullYear(),
//               selectedDateObj.getMonth(),
//               selectedDateObj.getDate(),
//               startHour,
//               startMinute
//             );
//             const endSlotTime = new Date(
//               selectedDateObj.getFullYear(),
//               selectedDateObj.getMonth(),
//               selectedDateObj.getDate(),
//               endHour,
//               endMinute
//             );

//             // Adjust for current time if the selected date is today
//             if (isSelectedDateToday) {
//               const now = new Date();
//               const bufferMinutes = 30; // Don't show slots that are too close to current time
//               const adjustedNow = new Date(now.getTime() + bufferMinutes * 60000);

//               // Skip to the first slot after current time
//               while (currentSlotTime < adjustedNow && currentSlotTime < endSlotTime) {
//                 currentSlotTime.setMinutes(currentSlotTime.getMinutes() + slotDuration);
//               }
//             }

//             // Generate slots
//             while (currentSlotTime.getTime() < endSlotTime.getTime()) {
//               const slotTime = `${String(currentSlotTime.getHours()).padStart(2, '0')}:${String(currentSlotTime.getMinutes()).padStart(2, '0')}`;
//               slots.push(slotTime);
//               currentSlotTime.setMinutes(currentSlotTime.getMinutes() + slotDuration);
//             }
//           };

//           // For this specific API response, we'll treat it as a single session from first_start_time to second_end_time
//           // Since is_two_sessions is false but the times are split between first and second session fields
//           if (effectiveStartTime && effectiveEndTime) {
//             addSlots(effectiveStartTime, effectiveEndTime);
//           }

//           console.log("Generated slots:", slots);
//           setAvailableSlots(slots);
//       };


//       const handleDateChange = (e) => {
//         setSelectedDate(e.target.value);
//         setSelectedTime(''); // Reset selected time when date changes
//       };

//       const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//           ...prev,
//           [name]: value,
//         }));
//       };

//       const handleTimeSlotClick = (time) => {
//         setSelectedTime(time);
//       };

//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         setSubmissionMessage(null);

//         if (!selectedDate || !selectedTime) {
//           setSubmissionMessage({ type: 'error', message: 'Please select both a date and a time slot.' });
//           setIsSubmitting(false);
//           return;
//         }

//         const appointmentData = {
//           doctorId,
//           doctorName,
//           patientName: formData.name,
//           patientMobile: formData.mobile,
//           appointmentDate: selectedDate,
//           appointmentTime: selectedTime,
//           consultationFee,
//         };

//         console.log('Booking appointment:', appointmentData);

//         // Simulate API call
//         try {
//           await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

//           setSubmissionMessage({ type: 'success', message: `Appointment booked successfully with Dr. ${doctorName} on ${selectedDate} at ${selectedTime}.` });
//           setFormData({ name: '', mobile: '' });
//           setSelectedDate('');
//           setSelectedTime('');
//           setAvailableSlots([]);
//           setSelectedTime(''); // Ensure selected time is also cleared after successful booking

//         } catch (err) {
//           setSubmissionMessage({ type: 'error', message: `Booking failed: ${err.message}` });
//         } finally {
//           setIsSubmitting(false);
//         }
//       };

//       if (loading) {
//         return (
//           <div className="flex items-center justify-center p-6">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
//             <p className="ml-3 text-gray-600">Loading doctor's schedule...</p>
//           </div>
//         );
//       }

//       if (error) {
//         return (
//           <div className="text-center p-6 text-red-600">
//             <p>Error loading schedule: {error}</p>
//             <p>Please try again later or contact support.</p>
//           </div>
//         );
//       }


//       if (!doctorTiming) {
//         // This state means API returned no data or an error occurred during fetch.
//         // The 'error' state above usually handles API errors, so this means
//         // the API returned an empty array for doctor_timing for this doctorId.
//         return (
//           <div className="text-center p-6 text-gray-600">
//             <p>No schedule information available for this doctor.</p>
//             <p>This doctor might not have a schedule set up yet, or there was an issue retrieving it.</p>
//           </div>
//         );
//       }


//       const today = new Date().toISOString().split('T')[0];


//       return (
//         <div className="bg-white rounded-xl shadow-md sticky top-6 overflow-hidden">
//           <div className="bg-blue-600 px-6 py-4">
//             <h3 className="text-xl font-bold text-white">Book an Appointment</h3>
//             <p className="text-blue-100">Consultation Fee: ₹{consultationFee}</p>
//           </div>
//           <div className="p-6">
//             <form onSubmit={handleSubmit}>
//               <div className="space-y-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     required
//                     placeholder="Enter your full name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
//                     Mobile Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="mobile"
//                     name="mobile"
//                     value={formData.mobile}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     required
//                     placeholder="Enter 10-digit mobile number"
//                     pattern="[0-9]{10}"
//                     maxLength="10"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
//                     Preferred Date
//                   </label>
//                   <input
//                     type="date"
//                     id="date"
//                     name="date"
//                     value={selectedDate}
//                     onChange={handleDateChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     required
//                     min={today} // Prevents selecting past dates
//                   />
//                 </div>

//                 {selectedDate && availableSlots.length > 0 && (
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Available Time Slots
//                     </label>
//                     <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
//                       {availableSlots.map((slot) => (
//                         <button
//                           key={slot}
//                           type="button"
//                           onClick={() => handleTimeSlotClick(slot)}
//                           className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors
//                             ${selectedTime === slot ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
//                           }`}
//                         >
//                           {slot}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {selectedDate && availableSlots.length === 0 && (
//                     <div className="text-orange-600 bg-orange-50 border-l-4 border-orange-400 p-4 rounded-md">
//                         No time slots available for the selected date. Please choose another date.
//                     </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={isSubmitting || !selectedDate || !selectedTime || !formData.name || !formData.mobile}
//                   className={`w-full mt-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all flex items-center justify-center
//                     ${isSubmitting || !selectedDate || !selectedTime || !formData.name || !formData.mobile ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Processing...
//                     </>
//                   ) : (
//                     'Confirm Appointment'
//                   )}
//                 </button>


//                 {submissionMessage && (
//                     <div className={`mt-4 p-3 rounded-lg text-sm ${submissionMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//                         {submissionMessage.message}
//                     </div>
//                 )}

//                 <div className="flex items-center mt-4">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   <span className="text-sm text-gray-500">Average wait time: 15 mins</span>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       );

// };


// export default AppointmentBooking;


'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentBooking = ({ doctorId, doctorName, consultationFee }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [doctorTiming, setDoctorTiming] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    purpose: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState(null);
  const [categories, setCategories] = useState([]);

  
  useEffect(() => {
    // Fetch doctor timing
    const fetchDoctorTiming = async () => {
      try {
        setLoading(true);
        const storedToken = localStorage.getItem('token');
        let parsedToken = null;

        if (storedToken) {
          try {
            parsedToken = JSON.parse(storedToken).data;
          } catch (e) {
            console.error('Error parsing token:', e);
            setError('Authentication error. Please log in again.');
            setLoading(false);
            return;
          }
        }

        if (!parsedToken) {
          setError('Authentication token not found. Please log in.');
          setLoading(false);
          return;
        }

        const [timingResponse, categoriesResponse] = await Promise.all([
          axios.get(
            `https://healdiway.bkarogyam.com/erp-api/clinics/1/doctor_timing/?doctor=${doctorId}`,
            { headers: { Authorization: `Token ${parsedToken}` } }
          ),
          axios.get('https://healdiway.bkarogyam.com/erp-api/clinics/1/appointment_category/')
        ]);

        if (timingResponse.data?.length > 0) {
          setDoctorTiming(timingResponse.data[0]);
        } else {
          setError('No schedule found for this doctor.');
        }

        if (categoriesResponse.data) {
          setCategories(categoriesResponse.data);
        }

      } catch (e) {
        setError(e.response?.data?.message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    if (doctorId) fetchDoctorTiming();
  }, [doctorId]);


  useEffect(() => {
    if (selectedDate && doctorTiming) {
      generateTimeSlots(selectedDate, doctorTiming);
    }
  }, [selectedDate, doctorTiming]);


  const generateTimeSlots = (date, timing) => {
    const todayDate = new Date();
    const isSelectedDateToday = new Date(date).toDateString() === todayDate.toDateString();
    const slots = [];
    const slotDuration = 30;

    const effectiveStartTime = timing.first_start_time || "09:00:00";
    const effectiveEndTime = timing.second_end_time || "18:00:00";

    const addSlots = (startStr, endStr) => {
      if (!startStr || !endStr) return;

      const cleanTime = (timeStr) => timeStr.split(':').slice(0, 2).join(':');
      startStr = cleanTime(startStr);
      endStr = cleanTime(endStr);

      let [startHour, startMinute] = startStr.split(':').map(Number);
      let [endHour, endMinute] = endStr.split(':').map(Number);

      const selectedDateObj = new Date(date);
      let currentSlotTime = new Date(
        selectedDateObj.getFullYear(),
        selectedDateObj.getMonth(),
        selectedDateObj.getDate(),
        startHour,
        startMinute
      );
      const endSlotTime = new Date(
        selectedDateObj.getFullYear(),
        selectedDateObj.getMonth(),
        selectedDateObj.getDate(),
        endHour,
        endMinute
      );

      if (isSelectedDateToday) {
        const now = new Date();
        const bufferMinutes = 30;
        const adjustedNow = new Date(now.getTime() + bufferMinutes * 60000);

        while (currentSlotTime < adjustedNow && currentSlotTime < endSlotTime) {
          currentSlotTime.setMinutes(currentSlotTime.getMinutes() + slotDuration);
        }
      }

      while (currentSlotTime.getTime() < endSlotTime.getTime()) {
        const slotTime = `${String(currentSlotTime.getHours()).padStart(2, '0')}:${String(currentSlotTime.getMinutes()).padStart(2, '0')}`;
        slots.push(slotTime);
        currentSlotTime.setMinutes(currentSlotTime.getMinutes() + slotDuration);
      }
    };

    if (effectiveStartTime && effectiveEndTime) {
      addSlots(effectiveStartTime, effectiveEndTime);
    }

    setAvailableSlots(slots);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage(null);

    if (!selectedDate || !selectedTime || !formData.name || !formData.mobile || !formData.purpose) {
      setSubmissionMessage({ type: 'error', message: 'Please fill all required fields.' });
      setIsSubmitting(false);
      return;
    }

    const appointmentData = {
      schedule_at: `${selectedDate}T${selectedTime}:00`, // Combine date and time
      slot: 30, // Fixed 30-minute slot as in reference
      doctor: doctorId,
      category: formData.purpose,
      notes: formData.description,
      patient: {
        user: {
          first_name: formData.name,
          email: formData.email,
          mobile: formData.mobile
        }
      },
      practice: 1,
      applyonweb: true
    };


    try {
      const response = await axios.post(
        'https://healdiway.bkarogyam.com/erp-api/appointment/',
        appointmentData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${JSON.parse(localStorage.getItem('token')).data}`
          }
        }
      );


      setSubmissionMessage({
        type: 'success',
        message: `Appointment booked successfully with Dr. ${doctorName} on ${selectedDate} at ${selectedTime}.`
      });
      
      // Reset form
      setFormData({
        name: '',
        mobile: '',
        email: '',
        purpose: '',
        description: ''
      });
      setSelectedDate('');
      setSelectedTime('');

    } catch (err) {
      setSubmissionMessage({
        type: 'error',
        message: err.response?.data?.message || 'Booking failed. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-600">{error}</div>;
  }

  if (!doctorTiming) {
    return <div className="text-center p-4">No schedule available for this doctor.</div>;
  }


  const today = new Date().toISOString().split('T')[0];


  return (
    <div className="bg-white rounded-xl shadow-md sticky top-6 overflow-hidden">
      <div className="bg-blue-600 px-6 py-4">
        <h3 className="text-xl font-bold text-white">Book an Appointment</h3>
        <p className="text-blue-100">Consultation Fee: ₹{consultationFee}</p>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Enter your full name"
              />
            </div>


            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Enter 10-digit mobile number"
                pattern="[0-9]{10}"
                maxLength="10"
              />
            </div>


            {/* Email */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div> */}


            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                min={today}
              />
            </div>


            {/* Time Slots */}
            {selectedDate && availableSlots.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {availableSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors
                        ${selectedTime === slot ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'}`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}


            {/* Purpose */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Purpose of Visit
              </label>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select a purpose</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>


            {/* Description */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your symptoms or concerns"
                rows="3"
              />
            </div> */}


            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all"
            >
              {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
            </button>


            {/* Messages */}
            {submissionMessage && (
              <div className={`mt-4 p-3 rounded-lg text-sm ${
                submissionMessage.type === 'success' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {submissionMessage.message}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};


export default AppointmentBooking;
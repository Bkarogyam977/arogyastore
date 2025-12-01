// "use client";
// import React, { useState, useEffect } from 'react';


// function AppointmentBooking() {
//     const [doctors, setDoctors] = useState([]);
//     const [category, setCategory] = useState([]);
//     const [slots, setSlots] = useState([]);
//     const [fullName, setFullName] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [email, setEmail] = useState('');
//     const [datetime, setDatetime] = useState('');
//     const [slot, setSlot] = useState('10');
//     const [doctor, setDoctor] = useState('');
//     const [purpose, setPurpose] = useState('');
//     const [description, setDescription] = useState('');
//     const [error, setError] = useState('');
//     const [message, setMessage] = useState('');


//     useEffect(() => {
//         // URL for the doctor data API
//         const urldoc = 'https://healdiway.bkarogyam.com/erp-api/clinics/1/practice_staff/?role=3';
//         const urlcat = 'https://healdiway.bkarogyam.com/erp-api/clinics/1/appointment_category/';

//         // Fetch data from the API
//         fetch(urldoc)
//             .then((response) => response.json())
//             .then((data) => {
//                 const staffList = data.staff;
//                 const staffNames = staffList.map((staff) => ({
//                     id: staff.id,
//                     firstName: staff.user.first_name,
//                 }));
//                 setDoctors(staffNames); // Set the doctor names in state
//             })
//             .catch((error) => console.error('Error fetching doctors:', error));

//         fetch(urlcat)
//             .then((response) => response.json())
//             .then((data) => {
//                 const categories = data.map((cat) => ({
//                     id: cat.id,
//                     CategoriesName: cat.name,
//                 }));
//                 setCategory(categories); // Set the categories in state
//             })
//             .catch((error) => console.error('Error fetching categories:', error));
//     }, []);

//     const selectSlot = [10, 20, 30, 40, 50, 60]

//     // Handle form submission
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         // Validate the required fields
//         if (!datetime || !fullName || !mobile || !email || !doctor || !purpose || !description) {
//             setError('Please fill in all required fields.');
//             return;
//         }

//         // Prepare the data for submission
//         const formData = {
//             schedule_at: datetime, // Correct field name
//             slot: slot,             // Correct field name
//             doctor: doctor,         // Correct field name
//             category: purpose,      // Correct field name
//             notes: description,     // Correct field name
//             patient: {
//                 user: {
//                     first_name: fullName, // Correct field name
//                     email: email,         // Correct field name
//                     mobile: mobile,       // Correct field name
//                 }
//             },
//             practice: 1,            // Assuming the practice is 1 (static value)
//             applyonweb: true        // Static value indicating it's a web-based booking
//         };


//         try {
//             const response = await fetch('https://healdiway.bkarogyam.com/erp-api/appointment/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const data = await response.json();
//             console.log(data);
//             if (response.status === 200 || response.status === 201) {
//                 setMessage('Appointment booked successfully!'); // Set success message
//                 setError('');
//                 setTimeout(() => setMessage(''), 5000);
//             } else {
//                 setError(data.message || 'An error occurred.');
//             }
//         } catch (error) {
//             setError('An error occurred while submitting the form.');
//             console.error('Error:', error);
//         }
//     };


//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 {/* Full Name */}
//                 <div className="mb-3">
//                     <input
//                         type="text"
//                         id="fullName"
//                         className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm"
//                         placeholder="Enter your full name"
//                         value={fullName}
//                         onChange={(e) => setFullName(e.target.value)}
//                     />
//                 </div>

//                 {/* Mobile Number */}
//                 <div className="mb-3">
//                     <input
//                         type="text"
//                         id="mobile"
//                         maxLength="10"
//                         className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm"
//                         placeholder="Enter 10 digit mobile number"
//                         pattern="[0-9]{10}"
//                         value={mobile}
//                         onChange={(e) => setMobile(e.target.value)}
//                         required
//                     />
//                 </div>

//                 {/* Email */}
//                 <div className="mb-3">
//                     <input
//                         type="email"
//                         id="email"
//                         className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm"
//                         placeholder="Enter your email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>

//                 {/* Date and Time Selection */}
//                 <div className="mb-3">
//                     <input
//                         type="datetime-local"
//                         id="datetime"
//                         className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm"
//                         value={datetime}
//                         onChange={(e) => setDatetime(e.target.value)}
//                         required
//                     />
//                 </div>

//                 {/* Slot Selection */}
//                 <div className="mb-3">
//                     <select
//                         id="slot"
//                         className="mt-1 block w-full px-3 py-1 border text-black border-gray-300 rounded-md shadow-sm text-sm"
//                         value={slot}
//                         onChange={(e) => setSlot(e.target.value)}
//                         required
//                     >
//                         {selectSlot.map((slotValue) => (
//                             <option key={slotValue} value={slotValue}>
//                                 {slotValue}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* Select Doctor */}
//                 <div className="mb-3">
//                     <select
//                         id="doctor"
//                         className="mt-1 block w-full px-3 py-1 border text-black border-gray-300 rounded-md shadow-sm text-sm"
//                         value={doctor}
//                         onChange={(e) => setDoctor(e.target.value)}
//                         required
//                     >
//                         <option value="">Select a doctor</option>
//                         {doctors.map((doctor) => (
//                             <option key={doctor.id} value={doctor.id}>
//                                 {doctor.firstName}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* Select Purpose */}
//                 <div className="mb-3">
//                     <select
//                         id="categoryName"
//                         className="mt-1 block w-full px-3 py-1 border text-black border-gray-300 rounded-md shadow-sm text-sm"
//                         value={purpose}
//                         onChange={(e) => setPurpose(e.target.value)}
//                         required
//                     >
//                         <option value="">Select a purpose</option>
//                         {category.map((cat) => (
//                             <option key={cat.id} value={cat.id}>
//                                 {cat.CategoriesName}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* Description */}
//                 <div className="mb-3">
//                     <textarea
//                         id="description"
//                         className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm"
//                         placeholder="Describe your symptoms or concerns"
//                         rows="2"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                     />
//                 </div>



//                 {/* Submit Button */}
//                 <div>
//                     <button
//                         type="submit"
//                         className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
//                     >
//                         Book Appointment
//                     </button>
//                 </div>

//                 {/* Error Message */}
//                 {error && <div className="text-red-500 text-center mb-4">{error}</div>}
//                 {message && <div className="text-white text-center mb-4">{message}</div>}
//             </form>
//         </div>
//     );
// }


// export default AppointmentBooking;



"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function AppointmentBooking() {
    const [doctors, setDoctors] = useState([]);
    const [category, setCategory] = useState([]);
    const [fullName, setFullName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [datetime, setDatetime] = useState('');
    const [slot, setSlot] = useState('10');
    const [doctor, setDoctor] = useState('');
    const [purpose, setPurpose] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const urldoc = 'https://healdiway.bkarogyam.com/erp-api/clinics/1/practice_staff/?role=3';
        const urlcat = 'https://healdiway.bkarogyam.com/erp-api/clinics/1/appointment_category/';

        Promise.all([
            fetch(urldoc).then(res => res.json()),
            fetch(urlcat).then(res => res.json())
        ])
        .then(([doctorData, categoryData]) => {
            setDoctors(doctorData.staff.map(staff => ({
                id: staff.id,
                firstName: staff.user.first_name,
            })));
            setCategory(categoryData.map(cat => ({
                id: cat.id,
                CategoriesName: cat.name,
            })));
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setError('Failed to load doctor/category data');
        });
    }, []);

    const selectSlot = [10, 20, 30, 40, 50, 60];

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setError('');
        setMessage('');

        if (!datetime || !fullName || !mobile || !email || !doctor || !purpose) {
            setError('Please fill in all required fields');
            setIsSubmitting(false);
            return;
        }

        const formData = {
            schedule_at: datetime,
            slot: slot,
            doctor: doctor,
            category: purpose,
            notes: description,
            patient: {
                user: {
                    first_name: fullName,
                    email: email,
                    mobile: mobile,
                }
            },
            practice: 1,
            applyonweb: true
        };

        try {
            const response = await fetch('https://healdiway.bkarogyam.com/erp-api/appointment/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            
            if (response.ok) {
                setMessage('Appointment booked successfully!');
                // Reset form
                setFullName('');
                setMobile('');
                setEmail('');
                setDatetime('');
                setDoctor('');
                setPurpose('');
                setDescription('');
            } else {
                setError(data.message || 'An error occurred while booking');
            }
        } catch (error) {
            setError('Network error. Please try again later.');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
        >
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Mobile Number */}
                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                            Mobile <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            maxLength="10"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                            placeholder="10 digit mobile number"
                            pattern="[0-9]{10}"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                {/* Appointment Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Date and Time */}
                    <div>
                        <label htmlFor="datetime" className="block text-sm font-medium text-gray-700 mb-1">
                            Date & Time <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="datetime-local"
                            id="datetime"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                            value={datetime}
                            onChange={(e) => setDatetime(e.target.value)}
                        />
                    </div>

                    {/* Slot Duration */}
                    <div>
                        <label htmlFor="slot" className="block text-sm font-medium text-gray-700 mb-1">
                            Session Duration (mins)
                        </label>
                        <select
                            id="slot"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                            value={slot}
                            onChange={(e) => setSlot(e.target.value)}
                        >
                            {selectSlot.map((slotValue) => (
                                <option key={slotValue} value={slotValue}>
                                    {slotValue} minutes
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Doctor and Purpose Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Select Doctor */}
                    <div>
                        <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">
                            Select Doctor <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="doctor"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                            value={doctor}
                            onChange={(e) => setDoctor(e.target.value)}
                        >
                            <option value="">-- Select Doctor --</option>
                            {doctors.map((doctor) => (
                                <option key={doctor.id} value={doctor.id}>
                                    Dr. {doctor.firstName}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Select Purpose */}
                    <div>
                        <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700 mb-1">
                            Consultation Purpose <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="categoryName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                            value={purpose}
                            onChange={(e) => setPurpose(e.target.value)}
                        >
                            <option value="">-- Select Purpose --</option>
                            {category.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.CategoriesName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information
                    </label>
                    <textarea
                        id="description"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                        placeholder="Describe your symptoms or concerns"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-6 rounded-lg font-medium text-white transition ${isSubmitting ? 'bg-teal-400' : 'bg-teal-600 hover:bg-teal-700'}`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </span>
                        ) : (
                            'Book Appointment Now'
                        )}
                    </button>
                </div>

                {/* Messages */}
                {error && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-red-50 text-red-600 rounded-lg text-sm"
                    >
                        {error}
                    </motion.div>
                )}
                {message && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-teal-50 text-teal-600 rounded-lg text-sm"
                    >
                        {message}
                    </motion.div>
                )}
            </form>
        </motion.div>
    );
}

export default AppointmentBooking;
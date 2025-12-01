
// 'use client';
// import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// const PopUpScreen = () => {
//     const router = useRouter();
//     const [isOpen, setIsOpen] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         mobile: '',
//         category: 'ArogyaBharat'
//     });
//     const [loading, setLoading] = useState(false);
//     const [isSuccess, setIsSuccess] = useState(false);

//     useEffect(() => {
//         console.log('Popup component mounted'); // Debugging line
//         const lastClosedTimestamp = localStorage.getItem('popupClosedAt');
//         const currentTime = Date.now();

//         console.log('Last closed:', lastClosedTimestamp, 'Current time:', currentTime); // Debugging

//         if (!lastClosedTimestamp || currentTime - parseInt(lastClosedTimestamp) > 24 * 60 * 60 * 1000) {
//             console.log('Showing popup'); // Debugging
//             setIsOpen(true);
//         } else {
//             console.log('Not showing popup - within 24h period'); // Debugging
//         }
//     }, []);

//     const closePopup = useCallback(() => {
//         console.log('Closing popup'); // Debugging
//         setIsOpen(false);
//         localStorage.setItem('popupClosedAt', Date.now().toString()); // Ensure string storage
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!formData.name || !formData.mobile) {
//             alert("Please fill in all fields");
//             return;
//         }

//         setLoading(true);
//         try {
//             const response = await axios.post("https://main.bkarogyam.com/bkapienquiry/", formData);
//             if (response.status === 200 || response.status === 201) {
//                 setIsSuccess(true);
//                 setFormData({ name: "", mobile: "", category: "ArogyaBharat" });
                
//                 setTimeout(() => {
//                     closePopup();
//                 }, 3000);
//             } else {
//                 alert("Failed to submit form. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error submitting form", error);
//             alert("Something went wrong! Please try again later.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Debugging - log current state
//     console.log('Current popup state:', { isOpen, loading, isSuccess });

//     return (
//         <div className="fixed z-50 bottom-12 left-4">
//             {isOpen && (
//                 <div className="animate-fade-in-up">
//                     <div className="relative bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-xl shadow-xl w-80 border border-amber-300">
//                         <button
//                             onClick={closePopup}
//                             className="absolute top-2 right-2 text-amber-700 hover:text-amber-900 text-lg font-bold"
//                         >
//                             &times;
//                         </button>

//                         <div className="text-center mb-3">
//                             <div className="w-14 h-14 mx-auto mb-2 relative">
//                                 <Image
//                                     src="/favicon.ico"
//                                     alt="Arogyabharat"
//                                     fill
//                                     className="rounded-full object-cover border-2 border-white"
//                                 />
//                             </div>
//                             <h2 className="text-lg font-bold text-amber-800">Become Health Partner</h2>
//                             <p className="text-xs text-amber-700">Join our wellness mission</p>
//                         </div>

//                         {!isSuccess ? (
//                             <form onSubmit={handleSubmit} className="space-y-2">
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     required
//                                     className="w-full px-3 py-2 text-sm rounded border border-amber-300 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none"
//                                     placeholder="Your Name"
//                                 />
//                                 <input
//                                     type="tel"
//                                     name="mobile"
//                                     value={formData.mobile}
//                                     onChange={handleChange}
//                                     required
//                                     pattern="[0-9]{10}"
//                                     className="w-full px-3 py-2 text-sm rounded border border-amber-300 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none"
//                                     placeholder="Mobile Number"
//                                 />
//                                 <input type="hidden" name="category" value="ArogyaBharat"/>
//                                 <button
//                                     type="submit"
//                                     disabled={loading}
//                                     className={`w-full py-2 text-sm rounded font-medium text-white ${loading ? 'bg-amber-600' : 'bg-amber-500 hover:bg-amber-600'}`}
//                                 >
//                                     {loading ? 'Submitting...' : 'Join Arogyabharat'}
//                                 </button>
//                             </form>
//                         ) : (
//                             <div className="text-center py-2">
//                                 <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                     </svg>
//                                 </div>
//                                 <h3 className="text-md font-bold text-green-700">Thank You!</h3>
//                                 <p className="text-xs text-green-600">We&apos;ll contact you soon</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PopUpScreen;




'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const PopUpScreen = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: ''
    });
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const lastClosedTimestamp = localStorage.getItem('popupClosedAt');
        const currentTime = Date.now();

        if (!lastClosedTimestamp || currentTime - parseInt(lastClosedTimestamp) > 24 * 60 * 60 * 1000) {
            setIsOpen(true);
        }
    }, []);

    const closePopup = useCallback(() => {
        setIsOpen(false);
        localStorage.setItem('popupClosedAt', Date.now().toString());
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.mobile) {
            alert("Please fill in all fields");
            return;
        }

        setLoading(true);
        try {
            const leadData = {
                name: formData.name,
                mobile: formData.mobile,
                source: "ArogyaBharat",
                lead_name: "Associates",
                // Add any other default fields you need
                hot: false,
                worm: false,
                cold: false
            };

            const response = await axios.post(
                "https://healdiway.bkarogyam.com/erp-api/funnel-lead/", 
                leadData
            );

            if (response.status === 200 || response.status === 201) {
                setIsSuccess(true);
                setFormData({ name: "", mobile: "" });
                
                setTimeout(() => {
                    closePopup();
                }, 3000);
            } else {
                alert("Failed to submit form. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            alert("Something went wrong! Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed z-50 bottom-12 left-4">
            {isOpen && (
                <div className="animate-fade-in-up">
                    <div className="relative bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-xl shadow-xl w-80 border border-amber-300">
                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 text-amber-700 hover:text-amber-900 text-lg font-bold"
                        >
                            &times;
                        </button>

                        <div className="text-center mb-3">
                            <div className="w-14 h-14 mx-auto mb-2 relative">
                                <Image
                                    src="/favicon.ico"
                                    alt="Arogyabharat"
                                    fill
                                    className="rounded-full object-cover border-2 border-white"
                                />
                            </div>
                            <h2 className="text-lg font-bold text-amber-800">Become Health Partner</h2>
                            <p className="text-xs text-amber-700">Join our wellness mission</p>
                        </div>

                        {!isSuccess ? (
                            <form onSubmit={handleSubmit} className="space-y-2">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 text-sm rounded border border-amber-300 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none"
                                    placeholder="Your Name"
                                />
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                    pattern="[0-9]{10}"
                                    className="w-full px-3 py-2 text-sm rounded border border-amber-300 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none"
                                    placeholder="Mobile Number"
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full py-2 text-sm rounded font-medium text-white ${loading ? 'bg-amber-600' : 'bg-amber-500 hover:bg-amber-600'}`}
                                >
                                    {loading ? 'Submitting...' : 'Join Arogyabharat'}
                                </button>
                            </form>
                        ) : (
                            <div className="text-center py-2">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-md font-bold text-green-700">Thank You!</h3>
                                <p className="text-xs text-green-600">We&apos;ll contact you soon</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopUpScreen;
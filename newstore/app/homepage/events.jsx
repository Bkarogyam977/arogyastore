import { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaTimes } from 'react-icons/fa';
import Image from "next/image";

const UpcommitEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [profession, setProfession] = useState('');
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('https://main.bkarogyam.com/bkapievents/');
                const eventsData = response.data;

                const filteredEvents = eventsData.filter(event => event.category.id === 2);
                setEvents(filteredEvents);
                setLoading(false);
            } catch (err) {
                setError('Error fetching events');
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const getCountdown = (eventDate) => {
        const eventTime = new Date(eventDate).getTime();
        const currentTime = new Date().getTime();
        const timeDifference = eventTime - currentTime;

        if (timeDifference <= 0) {
            return 'Event Started';
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    const [timers, setTimers] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimers(timers => {
                return events.map(event => {
                    return {
                        id: event.id,
                        countdown: getCountdown(event.event_date),
                    };
                });
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [events]);

    const openModal = (event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Validate form inputs
        if (!fullName || !phoneNumber || !city || !profession) {
            setFormError('All fields are required');
            return;
        }

        const formData = {
            event: selectedEvent.id,
            full_name: fullName,
            phone_number: phoneNumber,
            city: city,
            profession: profession,
        };

        try {
            // Submit form data to API
            const response = await axios.post('https://main.bkarogyam.com/bkapieventbookings/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Booking successful:', response.data);

            // Reset form fields
            setFullName('');
            setPhoneNumber('');
            setCity('');
            setProfession('');

            // Show success message
            setFormError('');
            setFormSuccess('Booking successful!');

            setTimeout(() => {
                // Close the form/modal
                closeModal();

                // Redirect to the event URL after 3 seconds
                window.location.href = selectedEvent.url;
            }, 3000); // 3000ms = 3 seconds

        } catch (err) {
            console.error('Error submitting form:', err);
            setFormError('Error submitting booking. Please try again.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='md:px-20 px-2 mb-5 rounded-xl justify-center items-center hidden md:block'>
            <h1 className='text-black md:text-4xl text-xl text-center md:p-5 md:mt-5 md:py-5 font-bold'>Our Upcoming Events and Webinars</h1>
            <p className='text-black md:px-36 text-center md:pb-5 pb-3 text-sm md:text-xl'>
                <span className="md:hidden px-2">Join us for our upcoming events and webinars designed to keep you at the forefront of your industry! Explore insightful sessions on emerging trends...</span>
                <span className="hidden md:inline">
                    Join us for our upcoming events and webinars designed to keep you at the forefront of your industry! Explore insightful sessions on emerging trends, engage with expert speakers, and participate in interactive discussions. Don&apos;t miss this opportunity to network, enhance your skills, and connect with professionals worldwide. Register now to elevate your expertise!
                </span>
            </p>
            <Swiper
                spaceBetween={50}
                slidesPerView={1} // Always show one slide at a time
                loop={events.length > 1} // Enable loop only for multiple events
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1, // Single slide view on mobile
                    },
                    1024: {
                        slidesPerView: events.length === 1 ? 1 : 2, // Show one slide centrally for single event, two slides for multiple events on larger screens
                    },
                }}
                className="flex justify-center items-center"
            >
                {events.map((event) => {
                    const eventTimer = timers.find(timer => timer.id === event.id)?.countdown || getCountdown(event.event_date);

                    return (
                        <SwiperSlide key={event.id}>
                            <div
                                className={`relative event-card-${event.id} bg-orange-50 flex flex-col items-center`}
                                style={{ maxWidth: '800px', margin: 'auto' }}
                            >
                                <Image
                                    className="w-full h-auto rounded-lg"
                                    src={event.eventbanner}
                                    alt={event.title}
                                    width={800}
                                    height={400} 
                                    style={{ maxHeight: "400px", objectFit: "contain" }}
                                />
                                <div className="absolute top-0 right-0 m-2 bg-black text-white text-2xl p-2 rounded-md">
                                    {eventTimer}
                                </div>
                                <div className="py-5">
                                    <h2 className="text-center text-black text-xl mt-3 font-bold">{event.title}</h2>
                                    <p className="text-center text-black px-5">
                                        {event.description.split(' ').slice(0, 10).join(' ')}...
                                    </p>
                                    <div className="text-center pt-5">
                                        <button
                                            onClick={() => openModal(event)}
                                            className="text-white bg-orange-900 hover:bg-orange-800 py-2 px-4 rounded-md"
                                        >
                                            Book Your Webinars
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>



            {isModalOpen && selectedEvent && (
                <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="modal-content bg-white p-8 rounded-lg relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-black bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
                        >
                            <FaTimes size={24} />
                        </button>
                        <h2 className="text-2xl font-bold text-center mb-4">Register for {selectedEvent.title}</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-lg font-medium">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phoneNumber" className="block text-lg font-medium">Phone Number</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block text-lg font-medium">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="profession" className="block text-lg font-medium">Profession</label>
                                <input
                                    type="text"
                                    id="profession"
                                    value={profession}
                                    onChange={(e) => setProfession(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    required
                                />
                            </div>

                            {formError && <p className="text-red-500 text-center">{formError}</p>}
                            {formSuccess && <p className="text-green-500 text-center">{formSuccess}</p>}

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="text-white bg-orange-900 hover:bg-orange-800 py-2 px-4 rounded-md"
                                >
                                    Submit Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default UpcommitEvents;

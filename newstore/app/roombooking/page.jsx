"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const RoomBookingPage = () => {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: "",
    requests: ""
  });

  const [availabilityData, setAvailabilityData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "1",
    roomType: "Standard Room"
  });

  const [showAvailableRooms, setShowAvailableRooms] = useState(false);
  const [availabilityError, setAvailabilityError] = useState("");
  const formRef = useRef(null);

  // Set minimum date for date inputs (today)
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    // Reset available rooms when dates change
    setShowAvailableRooms(false);
  }, [availabilityData.checkIn, availabilityData.checkOut]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAvailabilityChange = (e) => {
    const { name, value } = e.target;
    setAvailabilityData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Booking submitted:", bookingData);
    alert("Room booking request received! We will contact you shortly.");
    setBookingData({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      roomType: "",
      guests: "",
      requests: ""
    });
  };

  const handleBookNowClick = (roomType, price) => {
    setBookingData(prev => ({
      ...prev,
      roomType: roomType,
      // Pre-fill check-in and check-out dates from availability check
      checkIn: availabilityData.checkIn,
      checkOut: availabilityData.checkOut,
      guests: availabilityData.guests
    }));
    
    // Scroll to form
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const checkAvailability = (e) => {
    e.preventDefault();
    
    // Validate dates
    if (!availabilityData.checkIn || !availabilityData.checkOut) {
      setAvailabilityError("Please select both check-in and check-out dates");
      return;
    }
    
    if (availabilityData.checkIn < today) {
      setAvailabilityError("Check-in date cannot be in the past");
      return;
    }
    
    if (availabilityData.checkOut <= availabilityData.checkIn) {
      setAvailabilityError("Check-out date must be after check-in date");
      return;
    }
    
    // If validation passes, show available rooms
    setAvailabilityError("");
    setShowAvailableRooms(true);
    
    // Scroll to rooms section
    document.getElementById("rooms-section").scrollIntoView({ behavior: "smooth" });
  };

  const roomTypes = [
    {
      id: 1,
      type: "Standard",
      price: "₹2,500/night",
      description: "Comfortable bed, Ayurvedic ambiance, attached bath, and more.",
      image: "/imgBox/room-1.jpg"
    },
    {
      id: 2,
      type: "Deluxe",
      price: "₹4,000/night",
      description: "Spacious room with sitting area, enhanced amenities, and garden view.",
      image: "/imgBox/room-2.jpg"
    },
    {
      id: 3,
      type: "AC Cottage",
      price: "₹6,500/night",
      description: "Private cottage with AC, separate living area, and premium amenities.",
      image: "/imgBox/room-3.jpg"
    }
  ];

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center w-full min-h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/imgBox/room-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 p-6 md:p-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Book Your Ayurvedic Stay
          </h1>
          <p className="text-lg md:text-xl">
            Experience healing and relaxation in our comfortable and serene
            rooms, tailored for Ayurvedic rejuvenation.
          </p>
        </div>
      </section>

      {/* Check Availability */}
      <section className="bg-gray-100 py-10 px-4 md:px-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Check Availability
        </h2>
        <form onSubmit={checkAvailability} className="grid gap-4 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Check-in Date</label>
              <input 
                type="date" 
                name="checkIn"
                className="p-3 border rounded w-full" 
                min={today}
                value={availabilityData.checkIn}
                onChange={handleAvailabilityChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Check-out Date</label>
              <input 
                type="date" 
                name="checkOut"
                className="p-3 border rounded w-full" 
                min={availabilityData.checkIn || today}
                value={availabilityData.checkOut}
                onChange={handleAvailabilityChange}
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Guests</label>
              <select 
                name="guests"
                className="p-3 border rounded w-full"
                value={availabilityData.guests}
                onChange={handleAvailabilityChange}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3+ Guests</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Room Type</label>
              <select 
                name="roomType"
                className="p-3 border rounded w-full"
                value={availabilityData.roomType}
                onChange={handleAvailabilityChange}
              >
                <option value="Standard Room">Standard Room</option>
                <option value="Deluxe Room">Deluxe Room</option>
                <option value="AC Cottage">AC Cottage</option>
              </select>
            </div>
          </div>
          
          {availabilityError && (
            <div className="text-red-500 text-center p-2 bg-red-50 rounded">
              {availabilityError}
            </div>
          )}
          
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700"
          >
            Check Availability
          </button>
        </form>
      </section>

      {/* Room Types Section */}
      <section id="rooms-section" className="py-10 px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          {showAvailableRooms ? "Available Rooms" : "Our Rooms"}
        </h2>
        
        {showAvailableRooms && (
          <div className="mb-6 p-4 bg-green-50 rounded-lg text-center max-w-2xl mx-auto">
            <p className="text-green-700">
              Rooms available for {availabilityData.checkIn} to {availabilityData.checkOut}
            </p>
          </div>
        )}
        
        <div className="grid gap-6 md:grid-cols-3">
          {roomTypes.map((room, idx) => (
            <div
              key={idx}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg flex flex-col"
            >
              <Image
                src={room.image}
                alt={room.type}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{room.type} Room</h3>
                <p className="text-green-600 font-bold mb-2">{room.price}</p>
                <p className="text-sm mb-4">
                  {room.description}
                </p>
                {showAvailableRooms && (
                  <div className="mb-4 p-2 bg-green-100 text-green-700 text-center rounded">
                    Available for your dates
                  </div>
                )}
              </div>
              <div className="p-4">
                <button 
                  onClick={() => handleBookNowClick(room.type, room.price)}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {!showAvailableRooms && (
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Check availability above to see room options for your selected dates
            </p>
          </div>
        )}
      </section>

      {/* Room Booking Form Section */}
      <section ref={formRef} className="py-10 px-4 md:px-16 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Complete Your Booking
        </h2>
        <form onSubmit={handleSubmit} className="grid gap-4 max-w-2xl mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-3 border rounded"
            value={bookingData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="p-3 border rounded"
            value={bookingData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="p-3 border rounded"
            value={bookingData.phone}
            onChange={handleInputChange}
            required
          />
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Check-in Date</label>
              <input
                type="date"
                name="checkIn"
                className="p-3 border rounded w-full"
                value={bookingData.checkIn}
                onChange={handleInputChange}
                min={today}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Check-out Date</label>
              <input
                type="date"
                name="checkOut"
                className="p-3 border rounded w-full"
                value={bookingData.checkOut}
                onChange={handleInputChange}
                min={bookingData.checkIn || today}
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Room Type</label>
              <select 
                name="roomType"
                className="p-3 border rounded w-full" 
                value={bookingData.roomType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Room Type</option>
                {roomTypes.map((room) => (
                  <option key={room.id} value={room.type}>
                    {room.type} Room ({room.price})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Guests</label>
              <select 
                name="guests"
                className="p-3 border rounded w-full" 
                value={bookingData.guests}
                onChange={handleInputChange}
                required
              >
                <option value="">Number of Guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4+">4+ Guests</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Special Requests (optional)</label>
            <textarea
              name="requests"
              rows={4}
              className="p-3 border rounded w-full"
              value={bookingData.requests}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700"
          >
            Book Room
          </button>
        </form>
      </section>

      {/* Amenities Section */}
      <section className="py-10 px-4 md:px-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Room Amenities</h2>
        <div className="grid gap-6 md:grid-cols-3 text-center">
          {[
            { icon: "📶", label: "Free WiFi" },
            { icon: "🛏️", label: "Comfortable Bed" },
            { icon: "🧼", label: "Daily Cleaning" },
            { icon: "🧴", label: "Premium Toiletries" },
            { icon: "📍", label: "Peaceful Location" },
            { icon: "🚿", label: "Attached Bathroom" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded shadow">
              <div className="mb-2 text-3xl">{item.icon}</div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-green-50 py-10 px-4 md:px-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Guest Reviews</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <p className="italic mb-2">
              &quot;A very peaceful and healing place. The rooms were spotless and
              cozy.&quot;
            </p>
            <p className="font-semibold">— Priya S.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p className="italic mb-2">
              &quot;Loved the Ayurvedic treatments and the stay. Very rejuvenating.&quot;
            </p>
            <p className="font-semibold">— Rahul M.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 px-4 md:px-16">
        <h2 className="text-2xl font-bold mb-6 text-center">FAQs</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <details className="bg-gray-100 p-4 rounded">
            <summary className="font-medium cursor-pointer">
             What&apos;s included in the room booking?
            </summary>
            <p className="mt-2 text-sm">
              Stay, daily cleaning, Ayurvedic meals, and use of healing spaces.
            </p>
          </details>
          <details className="bg-gray-100 p-4 rounded">
            <summary className="font-medium cursor-pointer">
              Can family members stay together?
            </summary>
            <p className="mt-2 text-sm">
              Yes, we offer double and family-sized rooms upon request.
            </p>
          </details>
          <details className="bg-gray-100 p-4 rounded">
            <summary className="font-medium cursor-pointer">
              How early should I book?
            </summary>
            <p className="mt-2 text-sm">
              At least 7 days before your planned arrival is recommended.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default RoomBookingPage;
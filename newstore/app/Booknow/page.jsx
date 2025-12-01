'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';

export default function BookNowPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const formRef = useRef(null);

  // Get today's date in YYYY-MM-DD format for the min attribute
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate date
    if (formData.date < today) {
      alert('Please select a date from today onwards.');
      return;
    }
    
    // Handle form submission (e.g., API call)
    console.log('Booking submitted:', formData);
    alert('Booking request received! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: ''
    });
  };

  const handleBookNowClick = (serviceName) => {
    setFormData(prev => ({
      ...prev,
      service: serviceName
    }));
    
    // Scroll to form
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 1,
      name: 'Revive Package',
      description: 'Abyangam, Chun Pind Swed',
      price: '₹3,500',
      duration: '90 mins',
      image: '/revive-package.jpg'
    },
    {
      id: 2,
      name: 'Stress Booster Package',
      description: 'Shirodhara, Shirobhyam',
      price: '₹2,800',
      duration: '75 mins',
      image: '/stress-booster.jpg'
    },
    {
      id: 3,
      name: 'Eye Booster Package',
      description: 'Netra Danpan, Netra Prachalan',
      price: '₹1,800',
      duration: '45 mins',
      image: '/eye-booster.jpg'
    },
    {
      id: 4,
      name: 'Relaxing Package',
      description: 'Abyangam, Shirodhara',
      price: '₹3,200',
      duration: '80 mins',
      image: '/relaxing-package.jpg'
    },
    {
      id: 5,
      name: 'Rejuration Package',
      description: 'Shirodhara, Abyangam, Swedan',
      price: '₹4,200',
      duration: '100 mins',
      image: '/rejuration-package.jpg'
    },
    {
      id: 6,
      name: 'Holistic Package',
      description: 'Nasya, Abyangam, Patra Potli Sek',
      price: '₹3,800',
      duration: '95 mins',
      image: '/holistic-package.jpg'
    },
    {
      id: 7,
      name: 'Head Package',
      description: 'Shirodhara, Abyangam, Swedan, Nasya',
      price: '₹4,500',
      duration: '110 mins',
      image: '/head-package.jpg'
    },
    {
      id: 8,
      name: 'Herbal Facial',
      description: 'Natural facial treatment with Ayurvedic herbs',
      price: '₹1,500',
      duration: '45 mins',
      image: '/herbal-facial.jpg'
    },
    {
      id: 9,
      name: 'Navara Glow Facial',
      description: 'Rejuvenating facial with Navara rice',
      price: '₹2,200',
      duration: '60 mins',
      image: '/navara-facial.jpg'
    },
    {
      id: 10,
      name: 'Shoulder Massage',
      description: 'Therapeutic shoulder massage',
      price: '₹1,200',
      duration: '30 mins',
      image: '/shoulder-massage.jpg'
    },
    {
      id: 11,
      name: 'Head Massage',
      description: 'Relaxing head massage with medicated oils',
      price: '₹900',
      duration: '25 mins',
      image: '/head-massage.jpg'
    },
    {
      id: 12,
      name: 'Neck Massage',
      description: 'Therapeutic neck massage',
      price: '₹1,000',
      duration: '25 mins',
      image: '/neck-massage.jpg'
    },
    {
      id: 13,
      name: 'Back Massage',
      description: 'Therapeutic back massage',
      price: '₹1,800',
      duration: '40 mins',
      image: '/back-massage.jpg'
    },
    {
      id: 14,
      name: 'Foot Massage',
      description: 'Relaxing foot massage',
      price: '₹1,500',
      duration: '35 mins',
      image: '/foot-massage.jpg'
    },
    {
      id: 15,
      name: 'Full Body Massage',
      description: 'Complete body massage with herbal oils',
      price: '₹3,500',
      duration: '90 mins',
      image: '/full-body-massage.jpg'
    },
    {
      id: 16,
      name: 'Heart Regeneration Package',
      description: '1 Setting treatment for heart health',
      price: '₹5,000',
      duration: '120 mins',
      image: '/heart-package.jpg'
    },
    {
      id: 17,
      name: 'Joint Therapy',
      description: '1 Setting treatment for joint health',
      price: '₹3,200',
      duration: '75 mins',
      image: '/joint-therapy.jpg'
    },
    {
      id: 18,
      name: 'Diabetes Beta Cell Regeneration Package',
      description: '1 Setting treatment for diabetes management',
      price: '₹4,800',
      duration: '110 mins',
      image: '/diabetes-package.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 w-full">
        <Image
          src="/ayurveda-hero.jpg" // Replace with your hero image path
          alt="Ayurvedic Treatment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Book Your Ayurvedic Treatment</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Experience authentic Ayurveda with our expert practitioners. Book your session today.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto lg:px-32">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-green-600">{service.price}</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button
                  onClick={() => handleBookNowClick(service.name)}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Section */}
      <section ref={formRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Book Your Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Select Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">-- Choose a service --</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name} ({service.price})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Have Questions?</h2>
          <p className="text-lg mb-6">
            Our team is ready to help you choose the perfect treatment for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <a href="tel:+918081222333" className="text-green-400 hover:underline">
                +91 8081222333
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <a href="mailto:info@bkarogyam.com" className="text-green-400 hover:underline">
                info@bkarogyam.com
              </a>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
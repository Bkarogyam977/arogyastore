

"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import useUserStore from "../../doctor/justand";


export default function EventDetailsPage() {
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [registering, setRegistering] = useState(false);
    const [registrationError, setRegistrationError] = useState(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(false);
    const [loadingStatus, setLoadingStatus] = useState('');
    const router = useRouter();
    const { eventId } = useParams();
    const userdata = useUserStore((state) => state.currentPatient);
  

    useEffect(() => {
      const fetchEvent = async () => {
        try {
          // Get token from localStorage if it exists
          const storedToken = localStorage.getItem('token');
          const parsedToken = storedToken ? JSON.parse(storedToken).data : null;

          // Prepare headers object
          const headers = {
            'Content-Type': 'application/json',
          };

          // Add Authorization header only if token exists
          if (parsedToken) {
            headers['Authorization'] = `Token ${parsedToken}`;
          }

          const response = await fetch(
            `https://healdiway.bkarogyam.com/erp-api/event-webinor/${eventId}/`,
            {
              headers: headers
            }
          );

          if (!response.ok) throw new Error('Event not found');
          const data = await response.json();
          setEvent(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchEvent();
    }, [eventId]);


    const formatDate = (dateString) => {
      try {
        return format(parseISO(dateString), "EEEE, MMMM d, yyyy");
      } catch {
        return dateString;
      }
    };


    const formatTime = (dateString) => {
      try {
        return format(parseISO(dateString), 'h:mm a');
      } catch {
        return dateString;
      }
    };

    const registerForZoomWebinar = async (meetingId) => {
      try {
        const storedToken = localStorage.getItem('token');
        const parsedToken = storedToken ? JSON.parse(storedToken).data : null;

        const zoomResponse = await fetch(
          `https://healdiway.bkarogyam.com/erp-api/event-webinor/zoom-request/`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${parsedToken}`
            },
            body: JSON.stringify({
              url: `/webinars/${meetingId}/registrants`,
              method: "POST",
              data: {
                first_name: userdata.user.first_name,
                last_name: userdata.user.last_name || "___",
                email: userdata.user.email,
                phone: userdata.user.mobile || ""
              }
            })
          }
        );

        if (!zoomResponse.ok) {
          throw new Error('Failed to register for Zoom webinar');
        }
      } catch (error) {
        console.error("Zoom registration error:", error);
        throw error;
      }
    };

    const extractZoomIdFromUrl = (url) => {
      try {
        const parts = url.split('/');
        const idPart = parts.find(part => 
          /^\d+$/.test(part) && part.length >= 9
        );
        return idPart || null;
      } catch {
        return null;
      }
    };

    const handleRegistration = async () => {
      if (!userdata?.user) {
        sessionStorage.setItem('preLoginUrl', window.location.pathname);
        router.push('/login');
        return;
      }

      if (event.payment_type !== 'FREE') {
        setShowPaymentModal(true);
        return;
      }

      await registerForEvent();
    };

    
    const registerForEvent = async () => {
      setRegistering(true);
      setRegistrationError(null);

      try {
        const storedToken = localStorage.getItem('token');
        const parsedToken = storedToken ? JSON.parse(storedToken).data : null;

        if (!parsedToken) {
          throw new Error('Authentication token missing. Please log in again.');
        }

        const response = await fetch(
          `https://healdiway.bkarogyam.com/erp-api/event-webinor/${eventId}/register/`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${parsedToken}`
            },
            body: JSON.stringify({
              first_name: userdata.user.first_name,
              last_name: userdata.user.last_name,
              email: userdata.user.email,
              phone: userdata.user.mobile || '',
              user_id: userdata.user.id
            })
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Registration failed');
        }

        if (event.meeting_url) {
          const zoomId = event.meetingId || extractZoomIdFromUrl(event.meeting_url);
          
          if (zoomId) {
            await registerForZoomWebinar(zoomId);
          } else {
            console.warn('No valid Zoom ID found');
          }
        }

        const updatedEventResponse = await fetch(
          `https://healdiway.bkarogyam.com/erp-api/event-webinor/${eventId}/`,
          {
            headers: {
              'Authorization': `Token ${parsedToken}`
            }
          }
        );
        
        if (!updatedEventResponse.ok) {
          throw new Error('Failed to fetch updated event details');
        }
        
        const updatedEvent = await updatedEventResponse.json();
        setEvent(updatedEvent);

      } catch (err) {
        setRegistrationError(err.message);
        
        if (err.message.includes('token') || err.message.includes('Authentication')) {
          sessionStorage.setItem('preLoginUrl', window.location.pathname);
          router.push('/login');
        }
      } finally {
        setRegistering(false);
        setShowPaymentModal(false);
      }
    };


    const initiatePayment = async () => {
      if (paymentProcessing) return;
      
      setPaymentProcessing(true);
      setLoadingStatus('initializing-payment');
      setIsLoadingModalOpen(true);

      try {
        const storedToken = localStorage.getItem('token');
        const parsedToken = storedToken ? JSON.parse(storedToken).data : null;

        if (!parsedToken) {
          throw new Error('Authentication token missing. Please log in again.');
        }

        // First create registration with pending status
        const registrationResponse = await fetch(
          `https://healdiway.bkarogyam.com/erp-api/event-webinor/${eventId}/register/`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${parsedToken}`
            },
            body: JSON.stringify({
              first_name: userdata.user.first_name,
              last_name: userdata.user.last_name || '___',
              email: userdata.user.email,
              phone: userdata.user.mobile || '',
              user_id: userdata.user.id,
              payment_status: 'PENDING'
            })
          }
        );

        if (!registrationResponse.ok) {
          const errorData = await registrationResponse.json();
          throw new Error(errorData.detail || 'Registration failed');
        }

        const registrationData = await registrationResponse.json();


        // Prepare ICICI payment request
          const reqdata = {
            "TxnRefNo": `webinar-${event.id}-${Date.now()}`,
            "Amount": event.price,
            "OrderInfo": event.id.toString(),
            "Email": userdata.user.email,
            "Phone": userdata.user.mobile,
          };
        
          const paymentResponse = await fetch(
            'https://healdiway.bkarogyam.com/erp-api/payment-order-icici/', // Note the /erp-api/ path
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${parsedToken}`,
                'Accept': 'application/json',
              },
              mode: 'cors', // Explicitly set CORS mode
              body: JSON.stringify(reqdata)
            }
          );


          if (!paymentResponse.ok) {
            throw new Error('Payment initialization failed');
          }

        const responseData = await paymentResponse.json();
        handlePaymentResponse(responseData);

      } catch (err) {
        setPaymentProcessing(false);
        setIsLoadingModalOpen(false);
        setRegistrationError(err.message);
        
        if (err.message.includes('token') || err.message.includes('Authentication')) {
          sessionStorage.setItem('preLoginUrl', window.location.pathname);
          router.push('/login');
        }
      }
    };

    
    const handlePaymentResponse = (responseData) => {
      setPaymentProcessing(false);
      setIsLoadingModalOpen(false);
      
      const baseUrl = "https://payment.bkarogyam.com/process_data/";
      const queryParams = {
        EncData: responseData.EncData,
        MerchantId: responseData.MerchantId,
        BankId: responseData.BankId,
        TerminalId: responseData.TerminalId,
      };
      const queryString = new URLSearchParams(queryParams).toString();
      window.open(`${baseUrl}?${queryString}`, "_blank");
    };


    const LoadingModal = ({ isOpen, status }) => {
      const getContent = () => {
        switch(status) {
          case 'initializing-payment':
            return (
              <div className="flex flex-col items-center">
                <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="mt-4 text-gray-700">Initializing payment system...</p>
              </div>
            );
          default:
            return null;
        }
      };

      return (
        <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50 ${!isOpen && 'hidden'}`}>
          <div className="bg-white rounded-lg shadow-xl p-6 w-64">
            {getContent()}
          </div>
        </div>
      );
    };

    
    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-red-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={() => router.push('/our-events')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Events
            </button>
          </div>
        </div>
      );
    }

    if (!event) {
      return (
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Event Not Found</h2>
            <p className="text-gray-600 mb-6">The requested event could not be found</p>
            <button
              onClick={() => router.push('/our-events')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Events
            </button>
          </div>
        </div>
      );
    }


    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button
              onClick={() => router.push('/our-events')}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              All Events
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            {/* Event Image */}
            {event.thumbnail && (
              <div className="relative h-64 sm:h-80 lg:h-96 w-full">
                <img
                  src={`https://healdiway.bkarogyam.com/media/${event.thumbnail}`}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute bottom-4 right-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium shadow-sm ${
                      event.payment_type === 'FREE'
                        ? 'bg-green-50 text-green-700 border border-green-100'
                        : 'bg-blue-50 text-blue-700 border border-blue-100'
                    }`}
                  >
                    {event.payment_type === 'FREE'
                      ? 'Free Event'
                      : `Paid Event - ${event.currency} ${event.price}`}
                  </span>
                </div>
              </div>
            )}

            {/* Event Details */}
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h1>
                {event.organizer_name && (
                  <p className="text-gray-600">Hosted by {event.organizer_name}</p>
                )}
              </div>

              {/* Event Meta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500">Date</h3>
                      <p className="text-sm font-semibold text-gray-900">
                        {formatDate(event.start_datetime)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500">Time</h3>
                      <p className="text-sm font-semibold text-gray-900">
                        {formatTime(event.start_datetime)} - {formatTime(event.end_datetime)}
                      </p>
                    </div>
                  </div>
                </div>

                {event.location && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-500">Location</h3>
                        <p className="text-sm font-semibold text-gray-900">
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {event.online_event && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-500">Format</h3>
                        <p className="text-sm font-semibold text-gray-900">
                          Online Event
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Event Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Event</h2>
                <div
                  className="prose max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {event.is_registered ? (
                  <Link
                    href={event.meeting_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    Join Now
                  </Link>
                ) : (
                  <button
                    onClick={handleRegistration}
                    disabled={registering || paymentProcessing}
                    className="flex-1 text-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:bg-blue-400 disabled:cursor-not-allowed"
                  >
                    {registering || paymentProcessing ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Register Now'
                    )}
                  </button>
                )}
                <button className="flex-1 px-6 py-3 border border-gray-300 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                  Share Event
                </button>
              </div>

              {registrationError && (
                <div className="mt-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">{registrationError}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Payment Confirmation Modal */}
        {showPaymentModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Payment</h3>
                <p className="text-gray-600 mb-6">
                  You are about to register for <span className="font-semibold">{event.title}</span>.
                  This is a paid event costing <span className="font-semibold">{event.currency} {event.price}</span>.
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowPaymentModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={initiatePayment}
                    disabled={paymentProcessing}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
                  >
                    {paymentProcessing ? 'Processing...' : 'Proceed to Payment'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loading Modal */}
        <LoadingModal 
          isOpen={isLoadingModalOpen} 
          status={loadingStatus} 
        />
      </div>
    );
}



































// //--------------------------------------------------------------------
// "use client";
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useParams, useRouter } from 'next/navigation';
// import { format, parseISO } from 'date-fns';
// import useUserStore from "../../doctor/justand";


// export default function EventDetailsPage() {
//     const [event, setEvent] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [registering, setRegistering] = useState(false);
//     const [registrationError, setRegistrationError] = useState(null);
//     const [showPaymentModal, setShowPaymentModal] = useState(false);
//     const [paymentProcessing, setPaymentProcessing] = useState(false);
//     const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(false);
//     const [loadingStatus, setLoadingStatus] = useState('');
//     const [paymentInitiated, setPaymentInitiated] = useState(false);
//     const [paymentStatus, setPaymentStatus] = useState(null);
//     const [retryCount, setRetryCount] = useState(0);
//     const router = useRouter();
//     const { eventId } = useParams();
//     const userdata = useUserStore((state) => state.currentPatient);


//     useEffect(() => {
//         const fetchEvent = async () => {
//             try {
//                 const storedToken = localStorage.getItem('token');
//                 const parsedToken = storedToken ? JSON.parse(storedToken).data : null;

//                 const headers = {
//                     'Content-Type': 'application/json',
//                     ...(parsedToken && { 'Authorization': `Token ${parsedToken}` })
//                 };

//                 const response = await fetch(
//                     `https://healdiway.bkarogyam.com/erp-api/event-webinor/${eventId}/`,
//                     { headers }
//                 );

//                 if (!response.ok) throw new Error('Event not found');
//                 const data = await response.json();
//                 setEvent(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchEvent();
//     }, [eventId]);


//     const formatDate = (dateString) => {
//         try {
//             return format(parseISO(dateString), "EEEE, MMMM d, yyyy");
//         } catch {
//             return dateString;
//         }
//     };


//     const formatTime = (dateString) => {
//         try {
//             return format(parseISO(dateString), 'h:mm a');
//         } catch {
//             return dateString;
//         }
//     };


//     // Payment verification with retry logic
//     const verifyPaymentWithRetry = async (paymentData, maxAttempts = 30) => {
//         let attempts = 0;
//         let delay = 5000; // Initial delay of 2 seconds
        
//         while (attempts < maxAttempts) {
//             attempts++;
//             setRetryCount(attempts);
            
//             try {
//                 const result = await attemptPaymentVerification(paymentData);
//                 if (result) return result;
                
//                 // Exponential backoff
//                 await new Promise(resolve => setTimeout(resolve, delay));
//                 // delay += 2;
//             } catch (error) {
//                 if (attempts >= maxAttempts) throw error;
//             }
//         }
        
//         return null;
//     };


//     // Single verification attempt
//     const attemptPaymentVerification = async (paymentResponse) => {
//         const encodedResponse = encodeURIComponent(JSON.stringify(paymentResponse));

//         try {
//             const verifyResponse = await fetch(
//                 `https://healdiway.bkarogyam.com/erp-api/payment-order-icici/?paymentResponse=${
//                     encodedResponse}&format=json`
//             );

//             if (verifyResponse.status === 500) {
//                 return null; // Indicates payment still processing
//             }

//             if (!verifyResponse.ok) {
//                 throw new Error('Verification failed');
//             }
            
//             return await verifyResponse.json();
//         } catch (error) {
//             if (error.message.includes('500')) {
//                 return null; // Retryable error
//             }
//             throw error;
//         }
//     };


//     // Complete payment verification flow
//     const verifyPaymentCompletion = async (paymentData) => {
//         setLoadingStatus('verifying-payment');
        
//         try {
//             const paymentResponse = {
//                 EncData: paymentData.EncData,
//                 TerminalId: paymentData.TerminalId,
//                 MerchantId: paymentData.MerchantId,
//                 BankId: paymentData.BankId
//             };

//             const result = await verifyPaymentWithRetry(paymentResponse);
            
//             if (!result) {
//                 throw new Error('Payment verification timed out. Please check your payment status.');
//             }
            
//             const pgData = parsePaymentResponse(result.dataFromPG);
            
//             if (pgData.ResponseCode === '00') {
//                 setPaymentStatus('success');
//                 await completeRegistration(pgData);
//             } else {
//                 throw new Error(pgData.Message || 'Payment not completed yet');
//             }
//         } catch (error) {
//             setPaymentStatus('failed');
//             setRegistrationError(
//                 error.message.includes('500') 
//                     ? 'Payment still processing. Please check back later.' 
//                     : error.message
//             );
//         } finally {
//             setIsLoadingModalOpen(false);
//             setPaymentProcessing(false);
//             setRetryCount(0);
//         }
//     };


//     // Parse payment gateway response
//     const parsePaymentResponse = (responseString) => {
//         const parts = responseString.split('::');
//         const result = {};
        
//         parts.forEach(part => {
//             const [key, value] = part.split('||');
//             result[key] = value;
//         });
        
//         return result;
//     };


//     // Complete registration process
//     const completeRegistration = async (paymentDetails) => {
//         setRegistering(true);
        
//         try {
//             const response = await fetch(
//                 `https://healdiway.bkarogyam.com/erp-api/event-webinor/${eventId}/register/`,
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Token ${localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')).data : ''}`
//                     },
//                     body: JSON.stringify({
//                         first_name: userdata.user.first_name,
//                         last_name: userdata.user.last_name || '___',
//                         email: userdata.user.email,
//                         phone: userdata.user.mobile || '',
//                         user_id: userdata.user.id,
//                         payment_status: 'PAID',
//                         payment_details: {
//                             amount: paymentDetails.Amount,
//                             transaction_id: paymentDetails.RetRefNo,
//                             payment_date: paymentDetails.RespDate
//                         }
//                     })
//                 }
//             );

//             if (!response.ok) {
//                 throw new Error('Registration failed after payment');
//             }

//             // Handle Zoom registration if needed
//             if (event.meeting_url) {
//                 await registerForZoomWebinar();
//             }

//             // Refresh event data
//             const updatedEvent = await fetchEventDetails();
//             setEvent(updatedEvent);
//         } catch (error) {
//             setRegistrationError(error.message);
//         } finally {
//             setRegistering(false);
//         }
//     };


//     // Zoom webinar registration
//     const registerForZoomWebinar = async () => {
//         try {
//             const meetingId = event.meetingId || extractZoomIdFromUrl(event.meeting_url);
//             if (!meetingId) return;

//             await fetch(
//                 `https://healdiway.bkarogyam.com/erp-api/event-webinor/zoom-request/`,
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Token ${localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')).data : ''}`
//                     },
//                     body: JSON.stringify({
//                         url: `/webinars/${meetingId}/registrants`,
//                         method: "POST",
//                         data: {
//                             first_name: userdata.user.first_name,
//                             last_name: userdata.user.last_name || "___",
//                             email: userdata.user.email,
//                             phone: userdata.user.mobile || ""
//                         }
//                     })
//                 }
//             );
//         } catch (error) {
//             console.error("Zoom registration error:", error);
//         }
//     };


//     // Extract Zoom ID from URL
//     const extractZoomIdFromUrl = (url) => {
//         try {
//             const parts = url.split('/');
//             return parts.find(part => /^\d+$/.test(part) && part.length >= 9);
//         } catch {
//             return null;
//         }
//     };


//     // Fetch updated event details
//     const fetchEventDetails = async () => {
//         const response = await fetch(
//             `https://healdiway.bkarogyam.com/erp-api/event-webinor/${eventId}/`,
//             {
//                 headers: {
//                     'Authorization': `Token ${localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')).data : ''}`
//                 }
//             }
//         );

//         if (!response.ok) throw new Error('Failed to fetch updated event details');
//         return await response.json();
//     };

//     // Initiate payment process
//     const initiatePayment = async () => {
//         setPaymentProcessing(true);
//         setLoadingStatus('initializing-payment');
//         setIsLoadingModalOpen(true);

//         try {
//             const reqdata = {
//                 TxnRefNo: `webinar-${event.id}-${Date.now()}`,
//                 Amount: event.price,
//                 OrderInfo: event.id.toString(),
//                 Email: userdata.user.email,
//                 Phone: userdata.user.mobile,
//             };

//             const paymentResponse = await fetch(
//                 'https://healdiway.bkarogyam.com/erp-api/payment-order-icici/',
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Token ${localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')).data : ''}`
//                     },
//                     body: JSON.stringify(reqdata)
//                 }
//             );

//             if (!paymentResponse.ok) throw new Error('Payment initialization failed');
            
//             const responseData = await paymentResponse.json();
//             setPaymentInitiated(true);
//             handlePaymentGateway(responseData);
//         } catch (err) {
//             setPaymentProcessing(false);
//             setIsLoadingModalOpen(false);
//             setRegistrationError(err.message);
//         }
//     };


//     // Handle payment gateway redirection
//     const handlePaymentGateway = (responseData) => {
//         const paymentParams = new URLSearchParams({
//             EncData: responseData.EncData,
//             MerchantId: responseData.MerchantId,
//             BankId: responseData.BankId,
//             TerminalId: responseData.TerminalId
//         });

//         const paymentWindow = window.open(
//             `https://payment.bkarogyam.com/process_data/?${paymentParams}`,
//             "_blank"
//         );

//         const paymentCheckInterval = setInterval(async () => {
//             if (paymentWindow.closed) {
//                 clearInterval(paymentCheckInterval);
//                 await verifyPaymentCompletion(responseData);
//             }
//         }, 1000);
//     };


//     // Handle registration button click
//     const handleRegistration = async () => {
//         if (!userdata?.user) {
//             sessionStorage.setItem('preLoginUrl', window.location.pathname);
//             router.push('/login');
//             return;
//         }

//         if (event.payment_type !== 'FREE') {
//             setShowPaymentModal(true);
//             return;
//         }

//         await registerForEvent();
//     };


//     // Loading Modal Component
//     const LoadingModal = ({ isOpen, status, retryCount = 0 }) => {
//         const Spinner = () => (
//             <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//         );

//         const getContent = () => {
//             switch(status) {
//                 case 'initializing-payment':
//                     return (
//                         <div className="flex flex-col items-center">
//                             <Spinner />
//                             <p className="mt-4">Connecting to payment gateway...</p>
//                         </div>
//                     );
//                 case 'verifying-payment':
//                     return (
//                         <div className="flex flex-col items-center">
//                             <Spinner />
//                             <p className="mt-4">Verifying your payment...</p>
//                             {retryCount > 0 && (
//                                 <p className="text-sm text-gray-500">
//                                     Attempt {retryCount} - This may take a moment
//                                 </p>
//                             )}
//                         </div>
//                     );
//                 default:
//                     return null;
//             }
//         };

//         return (
//             <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${!isOpen && 'hidden'}`}>
//                 <div className="bg-white rounded-lg p-6 min-w-[300px]">
//                     {getContent()}
//                 </div>
//             </div>
//         );
//     };

//     // Loading state
//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//             </div>
//         );
//     }

//     // Error states
//     if (error) {
//         return (
//             <div className="max-w-2xl mx-auto px-4 py-20 text-center">
//                 <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
//                     <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-red-100 rounded-full">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                         </svg>
//                     </div>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
//                     <p className="text-gray-600 mb-6">{error}</p>
//                     <button
//                         onClick={() => router.push('/our-events')}
//                         className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                         Back to Events
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     if (!event) {
//         return (
//             <div className="max-w-2xl mx-auto px-4 py-20 text-center">
//                 <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
//                     <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                     </div>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Event Not Found</h2>
//                     <p className="text-gray-600 mb-6">The requested event could not be found</p>
//                     <button
//                         onClick={() => router.push('/our-events')}
//                         className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                         Browse Events
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Header */}
//             <div className="bg-white shadow-sm">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//                     <button
//                         onClick={() => router.push('/our-events')}
//                         className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5 mr-2"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
//                                 clipRule="evenodd"
//                             />
//                         </svg>
//                         All Events
//                     </button>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                 <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
//                     {/* Payment Status Messages */}
//                     {paymentStatus === 'success' && (
//                         <div className="p-4 bg-green-50 border-l-4 border-green-500">
//                             <div className="flex items-center">
//                                 <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                                 </svg>
//                                 <p>Payment successful! You're now registered for this event.</p>
//                             </div>
//                         </div>
//                     )}

//                     {paymentStatus === 'failed' && (
//                         <div className="p-4 bg-red-50 border-l-4 border-red-500">
//                             <div className="flex items-center">
//                                 <svg className="h-5 w-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                                 </svg>
//                                 <p>{registrationError || 'Payment failed. Please try again or contact support.'}</p>
//                             </div>
//                             {registrationError && !registrationError.includes('processing') && (
//                                 <button
//                                     onClick={initiatePayment}
//                                     className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                                 >
//                                     Retry Payment
//                                 </button>
//                             )}
//                         </div>
//                     )}

//                     {/* Event Image */}
//                     {event.thumbnail && (
//                         <div className="relative h-64 sm:h-80 lg:h-96 w-full">
//                             <img
//                                 src={`https://healdiway.bkarogyam.com/media/${event.thumbnail}`}
//                                 alt={event.title}
//                                 className="w-full h-full object-cover"
//                                 onError={(e) => {
//                                     e.target.src = 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80';
//                                 }}
//                             />
//                             <div className="absolute bottom-4 right-4">
//                                 <span
//                                     className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium shadow-sm ${
//                                         event.payment_type === 'FREE'
//                                             ? 'bg-green-50 text-green-700 border border-green-100'
//                                             : 'bg-blue-50 text-blue-700 border border-blue-100'
//                                     }`}
//                                 >
//                                     {event.payment_type === 'FREE'
//                                         ? 'Free Event'
//                                         : `Paid Event - ${event.currency} ${event.price}`}
//                                 </span>
//                             </div>
//                         </div>
//                     )}

//                     {/* Event Details */}
//                     <div className="p-6 sm:p-8">
//                         <div className="mb-6">
//                             <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//                                 {event.title}
//                             </h1>
//                             {event.organizer_name && (
//                                 <p className="text-gray-600">Hosted by {event.organizer_name}</p>
//                             )}
//                         </div>

//                         {/* Event Meta */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//                             {/* Date */}
//                             <div className="bg-gray-50 p-4 rounded-lg">
//                                 <div className="flex items-center">
//                                     <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="h-6 w-6 text-blue-600"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                                             />
//                                         </svg>
//                                     </div>
//                                     <div className="ml-4">
//                                         <h3 className="text-sm font-medium text-gray-500">Date</h3>
//                                         <p className="text-sm font-semibold text-gray-900">
//                                             {formatDate(event.start_datetime)}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Time */}
//                             <div className="bg-gray-50 p-4 rounded-lg">
//                                 <div className="flex items-center">
//                                     <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="h-6 w-6 text-blue-600"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                                             />
//                                         </svg>
//                                     </div>
//                                     <div className="ml-4">
//                                         <h3 className="text-sm font-medium text-gray-500">Time</h3>
//                                         <p className="text-sm font-semibold text-gray-900">
//                                             {formatTime(event.start_datetime)} - {formatTime(event.end_datetime)}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Location */}
//                             {event.location && (
//                                 <div className="bg-gray-50 p-4 rounded-lg">
//                                     <div className="flex items-center">
//                                         <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 className="h-6 w-6 text-blue-600"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 stroke="currentColor"
//                                             >
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     strokeWidth={2}
//                                                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                                                 />
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     strokeWidth={2}
//                                                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                                                 />
//                                             </svg>
//                                         </div>
//                                         <div className="ml-4">
//                                             <h3 className="text-sm font-medium text-gray-500">Location</h3>
//                                             <p className="text-sm font-semibold text-gray-900">
//                                                 {event.location}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}

//                             {/* Online Event */}
//                             {event.online_event && (
//                                 <div className="bg-gray-50 p-4 rounded-lg">
//                                     <div className="flex items-center">
//                                         <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 className="h-6 w-6 text-blue-600"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 stroke="currentColor"
//                                             >
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     strokeWidth={2}
//                                                     d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                                                 />
//                                             </svg>
//                                         </div>
//                                         <div className="ml-4">
//                                             <h3 className="text-sm font-medium text-gray-500">Format</h3>
//                                             <p className="text-sm font-semibold text-gray-900">
//                                                 Online Event
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Event Description */}
//                         <div className="mb-8">
//                             <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Event</h2>
//                             <div
//                                 className="prose max-w-none text-gray-700"
//                                 dangerouslySetInnerHTML={{ __html: event.description }}
//                             />
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-4">
//                             {event.is_registered ? (
//                                 <Link
//                                     href={event.meeting_url}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="flex-1 text-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
//                                 >
//                                     Join Now
//                                 </Link>
//                             ) : (
//                                 <button
//                                     onClick={handleRegistration}
//                                     disabled={registering || paymentProcessing}
//                                     className="flex-1 text-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:bg-blue-400 disabled:cursor-not-allowed"
//                                 >
//                                     {registering || paymentProcessing ? (
//                                         <span className="flex items-center justify-center">
//                                             <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                             </svg>
//                                             Processing...
//                                         </span>
//                                     ) : (
//                                         'Register Now'
//                                     )}
//                                 </button>
//                             )}
//                             <button className="flex-1 px-6 py-3 border border-gray-300 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
//                                 Share Event
//                             </button>
//                         </div>

//                         {registrationError && !paymentStatus && (
//                             <div className="mt-4">
//                                 <div className="bg-red-50 border-l-4 border-red-500 p-4">
//                                     <div className="flex">
//                                         <div className="flex-shrink-0">
//                                             <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                                             </svg>
//                                         </div>
//                                         <div className="ml-3">
//                                             <p className="text-sm text-red-700">{registrationError}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </main>

//             {/* Payment Confirmation Modal */}
//             {showPaymentModal && (
//                 <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
//                     <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
//                         <div className="p-6">
//                             <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Payment</h3>
//                             <p className="text-gray-600 mb-6">
//                                 You are about to register for <span className="font-semibold">{event.title}</span>.
//                                 This is a paid event costing <span className="font-semibold">{event.currency} {event.price}</span>.
//                             </p>
//                             <div className="flex justify-end space-x-3">
//                                 <button
//                                     onClick={() => setShowPaymentModal(false)}
//                                     className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                     onClick={initiatePayment}
//                                     disabled={paymentProcessing}
//                                     className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
//                                 >
//                                     {paymentProcessing ? 'Processing...' : 'Proceed to Payment'}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Loading Modal */}
//             <LoadingModal 
//                 isOpen={isLoadingModalOpen} 
//                 status={loadingStatus} 
//                 retryCount={retryCount}
//             />
//         </div>
//     );
// }
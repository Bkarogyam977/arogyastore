// 'use client'
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

// const EventDisplay = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const eventIds = [7, 8];
//         const eventPromises = eventIds.map(id =>
//           fetch(`https://healdiway.bkarogyam.com/erp-api/event-webinor/${id}/`)
//             .then(res => res.json())
//         );

//         const fetchedEvents = await Promise.all(eventPromises);
//         setEvents(fetchedEvents);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-40">
//         <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
//         Error loading events
//       </div>
//     );
//   }

//   if (!events.length) {
//     return (
//       <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded text-sm">
//         No events found
//       </div>
//     );
//   }

//   return (
//     <div className="w-full px-2 py-4  bg-white md:hidden">
//       <h2 className="text-xl font-bold mb-4 text-gray-800 px-2">Upcoming Events</h2>

//       <div className="flex space-x-2 overflow-x-auto pb-4 hide-scrollbar">
//         {events.map((event) => (
//           <div key={event.id} className="flex-none w-[45vw] bg-white rounded-lg shadow-sm border border-gray-100">
//             {event.thumbnail && (
//               <div className="h-32 overflow-hidden">
//                 <img
//                   src={`https://healdiway.bkarogyam.com/media/${event.thumbnail}`}
//                   alt={event.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             )}

//             <div className="p-3">
//               <div className="flex justify-between items-start mb-1">
//                 <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
//                   {event.title}
//                 </h3>
//               </div>

//               <div className="flex items-center text-xs text-gray-500 mb-2">
//                 <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//                 {new Date(event.start_datetime).toLocaleDateString('en-IN', {
//                   day: 'numeric',
//                   month: 'short'
//                 })}
//               </div>

//               <div className="flex justify-between items-center">
//                 <span className="text-xs font-medium text-blue-600">
//                   {event.payment_type === 'FREE' ? 'Free' : `${event.currency} ${event.price}`}
//                 </span>

//                 <Link
//                   href={`/our-events/${event.id}`}
//                   className="text-xs bg-blue-50 text-blue-600 font-medium py-1 px-2 rounded transition-colors duration-300"
//                 >
//                   Know More
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventDisplay;

// // Add this to your global CSS
// <style jsx global>{`
//   .hide-scrollbar::-webkit-scrollbar {
//     display: none;
//   }
//   .hide-scrollbar {
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//   }
// `}</style>

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const EventDisplay = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventIds = [7, 8];
        const eventPromises = eventIds.map((id) =>
          fetch(
            `https://healdiway.bkarogyam.com/erp-api/event-webinor/${id}/`
          ).then((res) => res.json())
        );

        const fetchedEvents = await Promise.all(eventPromises);
        setEvents(fetchedEvents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm md:text-base">
        Error loading events
      </div>
    );
  }

  if (!events.length) {
    return (
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded text-sm md:text-base">
        No events found
      </div>
    );
  }

  return (
    <div className="w-full px-2 py-4 bg-white md:bg-gray-100">
      <h2 className="text-xl mx-4 md:mx-24 md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 px-2 text-center md:text-left">
        Upcoming Events
      </h2>

      {/* Mobile View (side-by-side cards) */}
      <div className="md:hidden">
        <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-none w-[45vw] bg-white rounded-lg shadow-sm border border-gray-100"
            >
              {event.thumbnail && (
                <div className="h-28 w-auto overflow-hidden">
                  <img
                    src={`https://healdiway.bkarogyam.com/media/${event.thumbnail}`}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xs font-semibold text-gray-800 line-clamp-2">
                    {event.title}
                  </h3>
                </div>

                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {new Date(event.start_datetime).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                  })}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-blue-600">
                    {event.payment_type === "FREE"
                      ? "Free"
                      : `${event.currency} ${event.price}`}
                  </span>

                  <Link
                    href={`/our-events/${event.id}`}
                    className="text-xs bg-blue-50 text-blue-600 font-medium py-1 px-2 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View - Stacked Layout (Image above, content below) */}
      <div className="hidden md:block mx-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              {/* Full-width landscape image container */}
              {event.thumbnail && (
                <div className="w-full overflow-hidden">
                  <img
                    src={`https://healdiway.bkarogyam.com/media/${event.thumbnail}`}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: "center center",
                    }}
                  />
                </div>
              )}

              {/* Content area below image */}
              <div className="p-6 bg-green-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {event.title}
                  </h3>
                  <div className="flex space-x-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {event.event_type}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {event.payment_type === "FREE"
                        ? "Free"
                        : `${event.currency} ${event.price}`}
                    </span>
                  </div>
                </div>

                {/* <div 
                  className="text-gray-600 mb-4 text-sm line-clamp-3" 
                  dangerouslySetInnerHTML={{ __html: event.description }} 
                /> */}

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700 text-sm">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {new Date(event.start_datetime).toLocaleString("en-IN", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>

                  {event.online_event && event.meeting_url && (
                    <div className="flex items-center text-gray-700 text-sm">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Online Event</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-end">
                  <Link
                    href={`/our-events/${event.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 text-sm"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDisplay;

// Add this to your global CSS
<style jsx global>{`
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>;

// "use client";

// import { useEffect, useState } from 'react';
// import Link from 'next/link';


// const EventsPage =() => {
//   const [webinars, setWebinars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWebinars = async () => {
//       try {
//         const response = await fetch(
//           'https://healdiway.bkarogyam.com/erp-api/event-webinor/'
//         );
//         if (!response.ok) throw new Error('Failed to fetch webinars');
//         const data = await response.json();
//         setWebinars(data.results);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWebinars();
//   }, []);


//   const formatDate = (dateString) => {
//     const options = {
//       weekday: 'short',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//     };
//     return new Date(dateString).toLocaleString('en-US', options);
//   };


//   const getTimeRange = (start, end) => {
//     const startTime = new Date(start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     const endTime = new Date(end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     return `${startTime} - ${endTime}`;
//   };


//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gray-50">
//         <div className="space-y-4 text-center">
//           <div className="animate-pulse flex space-x-4 justify-center">
//             <div className="rounded-full h-12 w-12 bg-blue-400"></div>
//           </div>
//           <p className="text-gray-600">Loading webinars...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4">
//         <div className="max-w-md text-center p-6 bg-white rounded-xl shadow-md">
//           <div className="text-red-500 mb-4">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//             </svg>
//           </div>
//           <h2 className="text-xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
//           <p className="text-gray-600 mb-6">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }


//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
//             Upcoming Webinars
//           </h1>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Join our expert-led sessions to expand your knowledge and skills
//           </p>
//         </div>

//         {webinars.length === 0 ? (
//           <div className="text-center py-16 bg-white rounded-xl shadow-sm max-w-2xl mx-auto">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <h3 className="text-xl font-medium text-gray-900 mb-2">No webinars scheduled</h3>
//             <p className="text-gray-500">Check back later for upcoming events</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {webinars.map((webinar) => (
//               <div
//                 key={webinar.id}
//                 className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
//               >
//                 {webinar.thumbnail && (
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={`https://healdiway.bkarogyam.com/media/${webinar.thumbnail}`}
//                       alt={webinar.title}
//                       className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                       onError={(e) => {
//                         e.target.src = 'https://via.placeholder.com/400x200?text=Webinar+Image';
//                       }}
//                     />
//                     <div className="absolute top-4 right-4">
//                       <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
//                         webinar.payment_type === 'FREE' 
//                           ? 'bg-green-100 text-green-800' 
//                           : 'bg-purple-100 text-purple-800'
//                       }`}>
//                         {webinar.payment_type === 'FREE' ? 'FREE' : `${webinar.currency} ${webinar.price}`}
//                       </span>
//                     </div>
//                   </div>
//                 )}
//                 <div className="p-6 flex flex-col flex-grow">
//                   <div className="flex items-start justify-between mb-3">
//                     <h2 className="text-xl font-bold text-gray-900 line-clamp-2">
//                       {webinar.title}
//                     </h2>
//                   </div>

//                   <div className="space-y-3 mt-auto">
//                     <div className="flex items-start">
//                       <svg className="flex-shrink-0 h-5 w-5 text-gray-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
//                       </svg>
//                       <div className="ml-3">
//                         <p className="text-sm text-gray-500">
//                           {formatDate(webinar.start_datetime)}
//                         </p>
//                         <p className="text-sm font-medium text-gray-900">
//                           {getTimeRange(webinar.start_datetime, webinar.end_datetime)}
//                         </p>
//                       </div>
//                     </div>

//                     {webinar.organizer_name && (
//                       <div className="flex items-center">
//                         <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                           <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                         </svg>
//                         <p className="ml-3 text-sm text-gray-500">
//                           Hosted by <span className="font-medium text-gray-900">{webinar.organizer_name}</span>
//                         </p>
//                       </div>
//                     )}
//                   </div>

//                   <div className="mt-6">
//                     <Link
//                       href={`/our-events/${webinar.id}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-sm"
//                     >
//                         <>
//                           <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
//                           </svg>
//                            Know More
//                         </>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default EventsPage;



"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';

const EventsPage = () => {
  const [webinars, setWebinars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const response = await fetch(
          'https://healdiway.bkarogyam.com/erp-api/event-webinor/'
        );
        if (!response.ok) throw new Error('Failed to fetch webinars');
        const data = await response.json();
        setWebinars(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWebinars();
  }, []);

  const formatDate = (dateString) => {
    return format(parseISO(dateString), "MMM d, yyyy");
  };

  const formatTime = (dateString) => {
    return format(parseISO(dateString), 'h:mm a');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-center space-y-4">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          <p className="text-gray-600 font-medium">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Oops! Something went wrong</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="w-full max-w-xs mx-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Upcoming Events
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover and join our upcoming expert-led sessions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {webinars.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-medium text-gray-900 mt-4 mb-2">
              No events scheduled
            </h3>
            <p className="text-gray-500">Please check back later</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinars.map((webinar) => (
              <div
                key={webinar.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Event Image */}
                {webinar.thumbnail && (
                  <div className="relative aspect-video bg-gray-100">
                    <img
                      src={`https://healdiway.bkarogyam.com/media/${webinar.thumbnail}`}
                      alt={webinar.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute top-3 right-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          webinar.payment_type === 'FREE'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {webinar.payment_type === 'FREE'
                          ? 'Free'
                          : `${webinar.currency} ${webinar.price}`}
                      </span>
                    </div>
                  </div>
                )}

                {/* Event Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {webinar.title}
                    </h2>

                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 h-4 w-4 mr-1.5"
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
                      <span>
                        {formatDate(webinar.start_datetime)} •{' '}
                        {formatTime(webinar.start_datetime)}
                      </span>
                    </div>

                    {webinar.organizer_name && (
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 h-4 w-4 mr-1.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>By {webinar.organizer_name}</span>
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/our-events/${webinar.id}`}
                    className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 -mr-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default EventsPage;
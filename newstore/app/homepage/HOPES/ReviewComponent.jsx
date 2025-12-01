// import Image from 'next/image';
// import React from 'react';

// const reviews = [
//   {
//     image: '/images/swiperbanner/marketing3.png"',
//     name: 'Rahul Sharma',
//     rating: 4,
//     content: 'Great product! Highly recommend to everyone.'
//   },
//   {
//     image: '/images/swiperbanner/marketing3.png',
//     name: 'Priya Verma',
//     rating: 5,
//     content: 'Amazing quality and excellent customer service.'
//   },
//   {
//     image: '/images/swiperbanner/marketing3.png',
//     name: 'Amit Gupta',
//     rating: 3,
//     content: 'Good product but delivery took longer than expected.'
//   }
// ];

// const ReviewComponent = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//       {reviews.map((review, index) => (
//         <div key={index} className="bg-white shadow-md rounded-lg p-4">
//           <div className="flex items-center mb-4">
//             <Image
//               src={review.image}
//               alt={review.name}
//               width={48}
//               height={48}
//               className="w-12 h-12 rounded-full object-cover mr-4"
//             />
//             <div>
//               <h3 className="text-lg font-semibold">{review.name}</h3>
//               <div className="flex">
//                 {[...Array(5)].map((_, i) => (
//                   <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
//                     ★
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <p className="text-gray-600">{review.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewComponent;


import Image from 'next/image';
import React from 'react';

const reviews = [
  {
    image: '/images/swiperbanner/marketing3.png',
    name: 'Rahul Sharma',
    rating: 4,
    content: 'Great product! Highly recommend to everyone. My kidney function has improved significantly after using KidneyVeda for just 3 months.',
    date: '2 weeks ago'
  },
  {
    image: '/images/swiperbanner/marketing3.png',
    name: 'Priya Verma',
    rating: 5,
    content: 'Amazing quality and excellent customer service. The natural approach really works - my creatinine levels are now in normal range.',
    date: '1 month ago'
  },
  {
    image: '/images/swiperbanner/marketing3.png',
    name: 'Amit Gupta',
    rating: 3,
    content: 'Good product but delivery took longer than expected. However, I can feel the difference in my energy levels after using it consistently.',
    date: '3 months ago'
  }
];


const ReviewComponent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        What Our <span className="text-green-600">Customers Say</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full"
          >
            <div className="flex items-center mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-green-100 shadow-sm">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">{review.name}</h3>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-lg ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 flex-grow">{review.content}</p>
            
            <div className="mt-auto pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Verified Purchase</span>
                <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* <div className="text-center mt-12">
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full shadow-md transition-colors duration-300 inline-flex items-center">
          View All Testimonials
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default ReviewComponent;
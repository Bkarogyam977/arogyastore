"use client";
import Image from 'next/image';
import Link from 'next/link'; // Add this import
import React, { useEffect, useState } from 'react';

const OurSegment = ({ parentId }) => {
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://healdiway.bkarogyam.com/erp-api/inv_category');
        const data = await response.json();
        const filteredData = data.filter(item => item.parent_id === parentId);
        setSegments(filteredData);
      } catch (error) {
        console.error('Error fetching segments:', error);
      }
    };

    fetchData();
  }, [parentId]);

  const bgColors = ['bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100', 'bg-pink-100', 'bg-indigo-100'];

  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Mobile View */}
      <div className="md:hidden overflow-x-auto py-4">
        <div className="flex space-x-6 w-max">
          {segments.map((segment, index) => (
            <div key={segment.id} className="flex flex-col items-center">
              <Link href="/e-store/categoryproduct/295"> {/* <- Replace with your actual path */}
                <div className={`rounded-full p-3 ${bgColors[index % bgColors.length]}`}>
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={`https://healdiway.bkarogyam.com/media/${segment.image}`}
                      alt={segment.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Link>
              <h3 className="text-center mt-2 text-sm font-medium text-gray-700">{segment.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-wrap justify-center gap-24 py-4 px-4">
        {segments.map((segment, index) => (
          <div key={segment.id} className="flex flex-col items-center">
            <Link href="/e-store/categoryproduct/295"> {/* <- Replace with your actual path */}
              <div className={`rounded-full p-3 ${bgColors[index % bgColors.length]}`}>
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src={`https://healdiway.bkarogyam.com/media/${segment.image}`}
                    alt={segment.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Link>
            <h3 className="text-center mt-3 text-sm font-medium text-gray-700">{segment.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSegment;




// "use client";
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';

// const OurSegment = ({ parentId }) => {
//   const [segments, setSegments] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://healdiway.bkarogyam.com/erp-api/inv_category');
//         const data = await response.json();
//         const filteredData = data.filter(item => item.parent_id === parentId);
//         setSegments(filteredData);
//       } catch (error) {
//         console.error('Error fetching segments:', error);
//       }
//     };

//     fetchData();
//   }, [parentId]);

//   return (
//     <div className="mx-auto max-w-7xl">
//       {/* Mobile View (horizontal scrolling) */}
//       <div className="md:hidden mx-4 overflow-x-auto">
//         <div className="flex space-x-2 py-2 w-max">
//           {segments.map((segment) => (
//             <div key={segment.id} className="min-w-[100px] p-2">
//               <div className="bg-white shadow-md rounded-lg border border-lime-400 overflow-hidden">
//                 <Image
//                   src={`https://healdiway.bkarogyam.com/media/${segment.image}`}
//                   alt={segment.name}
//                   width={400}
//                   height={300}
//                   className="w-full h-24 object-cover"
//                 />
//               </div>
//               <h3 className="text-center mt-2 text-sm font-semibold">{segment.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Desktop View (grid layout) */}
//       <div className="hidden md:flex flex-wrap justify-center gap-6 py-4 px-4">
//         {segments.map((segment) => (
//           <div key={segment.id} className="w-[150px] lg:w-[180px] p-2 flex flex-col items-center">
//             <div className="bg-white shadow-md rounded-lg border-2 border-lime-400 overflow-hidden w-full aspect-square">
//               <Image
//                 src={`https://healdiway.bkarogyam.com/media/${segment.image}`}
//                 alt={segment.name}
//                 width={500}
//                 height={500}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-center mt-3 text-md font-semibold text-gray-800">{segment.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurSegment;
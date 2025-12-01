'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

function DoctorsMarque() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://healdiway.bkarogyam.com/erp-api/doctorprofile')
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          const uniqueDoctors = Array.from(
            new Map(response.data.map((doctor) => [doctor.userid, doctor])).values()
          );
          setDoctors(uniqueDoctors);
        } else {
          console.error('Unexpected doctor data format:', response.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching doctor data:', error);
        setLoading(false);
      });
  }, []);

  const truncateDescription = (description) => {
    const words = description.split(' ');
    return words.slice(0, 10).join(' ') + (words.length > 10 ? '...' : '');
  };

  return (
    <div className="h-full px-4">
      {loading ? (
        <p className="text-center text-gray-600">Loading doctors...</p>
      ) : doctors.length > 0 ? (
        <div className="flex md:space-x-4 space-x-2">
          {Array.from({ length: 3 }).map((_, groupIndex) => (
            <div key={groupIndex} className="overflow-hidden w-full md:h-[35em] h-[20em]">
              <div
                className="marquee-vertical"
                style={{
                  animationDuration: `${10 + groupIndex * 5}s`,
                  animationDelay: `${groupIndex * 1}s`,
                }}
              >
                <div className="grid grid-cols-1 gap-4">
                  {doctors
                    .slice(
                      (groupIndex * doctors.length) / 3,
                      ((groupIndex + 1) * doctors.length) / 3
                    )
                    .map((doctor) => (
                      <div
                        key={doctor.userid}
                        className="card md:w-48 w-24 md:p-4 p-2 border shadow-md bg-gradient-to-t from-green-200 to-blue-100 relative rounded-tl-3xl rounded-br-3xl"
                      >
                        {/* Image Container */}
                        <div className="absolute top-2 left-2 w-16 h-16 rounded-full overflow-hidden">
                          {doctor.user_imageurl ? (
                            <Image
                              src={`https://patient.bkarogyam.com/media/${doctor.user_imageurl}`}
                              alt={doctor.name || 'Doctor'}
                              layout="intrinsic"
                              width={64}
                              height={64}
                              objectFit="cover"
                              className="rounded-full"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-full">
                              <Image
                                src="/images/swiperbanner/busines.png"
                                alt="Default Doctor"
                                layout="intrinsic"
                                width={64}
                                height={64}
                                objectFit="cover"
                                className="rounded-full"
                              />
                            </div>
                          )}
                        </div>

                        {/* Doctor Name and Details */}
                        <h2 className="md:text-xl text-sm font-semibold text-center mt-20">{doctor.name || 'Doctor Name'}</h2>
                        <p className="text-xs md:text-sm text-gray-500 text-center">{doctor.specialization || 'Specialization'}</p>
                        <p className="mt-2 text-gray-700 text-xs md:text-sm break-words text-center">
                          {truncateDescription(doctor.discription || 'No description available.')}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No doctors found</p>
      )}

      <style jsx>{`
        .marquee-vertical {
          display: flex;
          flex-direction: column;
          animation: marquee-vertical 7s linear infinite;
          height: 100%;
        }

        @keyframes marquee-vertical {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
      `}</style>
    </div>
  );
}

export default DoctorsMarque;

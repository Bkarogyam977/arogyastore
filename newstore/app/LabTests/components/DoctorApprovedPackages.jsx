
// components/LabTests/DoctorApprovedPackages.jsx
"use client";
import Image from "next/image";
import Link from "next/link";


const DoctorApprovedPackages = () => {
  // Static data for doctor approved packages
  const packages = [
    {
      id: 1,
      name: 'Complete Health Checkup',
      image: '/images/imageBox/hopes/FullBodyCheckup.png',
      link: '#'
    },
    {
      id: 2,
      name: 'FullBody With Scans',
      image: '/images/imageBox/hopes/FullBodyWithScans.png',
      link: '#'
    },
    {
      id: 3,
      name: 'Diabetes-Heart-Health',
      image: '/images/imageBox/hopes/Diabetes-Heart-Health.png',
      link: '#'
    },
    {
      id: 4,
      name: 'BloodStudies',
      image: '/images/imageBox/hopes/BloodStudies.png',
      link: '#'
    },
    {
      id: 5,
      name: 'Infections',
      image: '/images/imageBox/hopes/Infections.png',
      link: '#'
    },
    {
      id: 6,
      name: 'AllergyProfiles',
      image: '/images/imageBox/hopes/AllergyProfiles.png',
      link: '#'
    },
    {
      id: 7,
      name: 'ThyroidsTest',
      image: '/images/imageBox/hopes/ThyroidsTest.png',
      link: '#'
    },
    {
      id: 8,
      name: 'FitnessPackages',
      image: '/images/imageBox/hopes/FitnessPackages.png',
      link: '#'
    },
    {
      id: 9,
      name: 'Gastro-Intestinal-Disorder',
      image: '/images/imageBox/hopes/Gastro-Intestinal-Disorder.png',
      link: '#'
    }
  ];

  return (
    <div className="w-full p-5 rounded-lg shadow-md bg-white">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-blue-600 px-2">Doctor Approved Lab Packages</h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-9 lg:grid-cols-9 gap-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="flex flex-col items-center">
            <Link 
              href={pkg.link} 
              className="w-full aspect-square flex items-center justify-center bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <Image
                src={pkg.image}
                alt={pkg.name}
                width={80}
                height={80}
                className="rounded-md object-cover w-full h-full"
              />
            </Link>
            <span className="mt-2 text-xs text-center text-gray-700 font-medium line-clamp-2">
              {pkg.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default DoctorApprovedPackages;
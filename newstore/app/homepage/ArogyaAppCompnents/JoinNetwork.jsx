'use client';
import { useRouter } from "next/navigation";
import Image from "next/image";

const JoinNetwork = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center p-6 mb-28 border-2 border-green-500 rounded-lg mx-4 bg-white shadow-sm max-w-md md:hidden">
      {/* Title */}
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
        India&apos;s Largest Health Network
      </h2>
      {/* Handshake Image - made smaller */}
      <div className="mb-4 w-40 h-40 relative">
        <Image 
          src="/images/imageBox/Advisor-handshake.png" // Replace with your actual image path
          alt="Health professionals handshaking"
          fill
          className="object-contain"
        />
      </div>
      
      {/* Button - made more compact */}
      <button
        onClick={() => router.push("/business-opportunity")}
        className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-all text-sm"
      >
        Become a Health Partner
      </button>
    </div>
  );
};

export default JoinNetwork;
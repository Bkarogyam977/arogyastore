'use client';
import Link from "next/link";
import Image from "next/image";


const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">

      <Image
        src="/images/undercunstruction.png"
        alt="Under Construction"
        width={400}
        height={300}
        className="mb-6 w-[400px] h-auto"
      />
      <h1 className="text-4xl font-bold text-gray-700">Under Construction</h1>
      <p className="text-gray-600 mt-2 text-lg">
        We are working hard to bring you this feature soon. Stay tuned!
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};


export default UnderConstruction;

'use client';
import { useRouter } from "next/navigation";

const TabsNavigation = () => {
  const router = useRouter();

  const tabs = [
    { name: "Education", path: "/homepage/Education" },
    { name: "Prevention", path: "/homepage/Prevention" },
    { name: "Treatment", path: "/homepage/Treatment" },
  ];

  
  return (
    <div className="flex justify-center space-x-4 p-4 md:hidden">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => router.push(tab.path)}
          className="px-6 py-2 border-2 border-green-500 text-gray-700 font-semibold rounded-md hover:bg-green-100 transition-all"
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};


export default TabsNavigation;

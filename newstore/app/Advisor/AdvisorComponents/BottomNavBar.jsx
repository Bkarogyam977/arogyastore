// "use client";
// import { useRouter } from "next/navigation";
// import {
//   HomeOutlined,
//   ReadOutlined,
//   PlayCircleOutlined,
//   TeamOutlined,
//   BookOutlined,
// } from "@ant-design/icons";

// const menuItems = [
//   { name: "Home", icon: <HomeOutlined />, path: "/" },
//   { name: "Grow", icon: <ReadOutlined />, path: "/" },
//   { name: "GoLive", icon: <PlayCircleOutlined />, path: "/" },
//   { name: "Teams", icon: <TeamOutlined />, path: "/" },
//   { name: "Academy", icon: <BookOutlined />, path: "/" },
// ];

// const Ad_BottomNavBar = () => {
//   const router = useRouter();

//   return (
//     <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg md:hidden flex justify-around items-center py-2 z-50">
//       {menuItems.map((item, index) => (
//         <button
//           key={index}
//           onClick={() => router.push(item.path)}
//           className="flex flex-col items-center text-gray-600 hover:text-green-600 transition-all px-3 py-1"
//         >
//           <div className="text-2xl bg-gray-200 p-2 rounded-full hover:bg-green-100 transition-all shadow-md">
//             {item.icon}
//           </div>
//           <span className="text-xs font-semibold mt-1">{item.name}</span>
//         </button>
//       ))}
//     </div>
//   );
// };
// export default Ad_BottomNavBar;


"use client";
import { useRouter } from "next/navigation";
import {
  HomeOutlined,
  ReadOutlined,
  PlayCircleOutlined,
  TeamOutlined,
  BookOutlined,
} from "@ant-design/icons";

const menuItems = [
  { name: "Home", icon: <HomeOutlined />, path: "/" },
  { name: "Grow", icon: <ReadOutlined />, path: "/" },
  { name: "GoLive", icon: <PlayCircleOutlined />, path: "/" },
  { name: "Teams", icon: <TeamOutlined />, path: "/" },
  { name: "Academy", icon: <BookOutlined />, path: "/" },
];

const Ad_BottomNavBar = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-sm md:hidden flex justify-around items-center z-50">
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => router.push(item.path)}
          className="flex flex-col items-center group relative transition-all duration-300 px-2 py-1"
        >
          <div className="relative">
            <div className="text-xl rounded-full transition-all duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-600 text-gray-500 group-hover:scale-110">
              {item.icon}
            </div>
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </div>
          <span className="text-xs font-medium text-gray-500 group-hover:text-indigo-600 mt-1 transition-all duration-300">
            {item.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Ad_BottomNavBar;

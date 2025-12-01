
// "use client";
// import React, { useState } from "react";
// import { Drawer, Space } from "antd";
// import { 
//   MenuOutlined, HomeOutlined, DashboardOutlined, PhoneOutlined,
//   CalendarOutlined, UserOutlined, MedicineBoxOutlined, TeamOutlined, GiftOutlined,
//   FormOutlined, BookOutlined, LogoutOutlined, FacebookOutlined, YoutubeOutlined, InstagramOutlined
// } from "@ant-design/icons";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const router = useRouter();

//   const menuItems = [
//     { icon: <HomeOutlined />, label: "Home", path: "/" },
//     { icon: <DashboardOutlined />, label: "Dashboard", path: "/dashboard" },
//     { icon: <PhoneOutlined />, label: "Conference Call", path: "/conference" },
//     { icon: <CalendarOutlined />, label: "Camp Booking", path: "/camp" },
//     { icon: <UserOutlined />, label: "Offline Appointment", path: "/appointment" },
//     { icon: <MedicineBoxOutlined />, label: "Our Services", path: "/services" },
//     { icon: <TeamOutlined />, label: "Connection with Doctor", path: "/doctors" },
//     { icon: <GiftOutlined />, label: "Scheme & Offers", path: "/offers" },
//     { icon: <FormOutlined />, label: "Suggestions", path: "/suggestions" },
//     { icon: <BookOutlined />, label: "EGyanshala", path: "/egyanshala" },
//   ];

//   const socialItems = [
//     { icon: <FacebookOutlined />, path: "https://facebook.com" },
//     { icon: <YoutubeOutlined />, path: "https://youtube.com" },
//     { icon: <InstagramOutlined />, path: "https://instagram.com" },
//   ];

//   return (
//     <nav className="w-full flex items-center justify-between px-5 py-2 bg-white shadow-md">
//       {/* Left: Hamburger Menu + Namaste, Vivek */}
//       <div className="flex items-center space-x-3">
//         <button
//           onClick={() => setDrawerOpen(true)}
//           className="text-2xl text-gray-700 md:hidden"
//         >
//           <MenuOutlined />
//         </button>
//         <h2 className="text-lg font-semibold text-gray-800">Namaste, Vivek 🙏</h2>
//       </div>

//       {/* Right: User Avatar */}
//       <div
//         className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer"
//         onClick={() => router.push("/Advisor/Profile")}
//       >
//         <Image
//           src="/images/vatar.png"
//           alt="User Avatar"
//           width={40}
//           height={40}
//           className="object-cover"
//         />
//       </div>

//       {/* Drawer for Mobile Menu */}
//       <Drawer
//         title={
//           <div className="flex items-center">
//             <Image
//               src="/images/vatar.png"
//               alt="User Avatar"
//               width={40}
//               height={40}
//               className="object-cover rounded-full mr-3"
//             />
//             <span className="text-lg font-medium">Vivek</span>
//           </div>
//         }
//         placement="left"
//         onClose={() => setDrawerOpen(false)}
//         open={drawerOpen}
//         width={280}
//         bodyStyle={{ padding: 0 }}
//         headerStyle={{ padding: '16px 24px' }}
//         closeIcon={<MenuOutlined />}
//       >
//         <div className="flex flex-col h-full">
//           <ul className="flex-grow">
//             {menuItems.map((item, index) => (
//               <li key={index} className="border-b border-gray-100 last:border-b-0">
//                 <a
//                   href={item.path}
//                   className="flex items-center px-6 py-4 text-gray-800 hover:text-green-600 hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="mr-3 text-lg">{item.icon}</span>
//                   <span>{item.label}</span>
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <div className="p-4 border-t border-gray-200">
//             <a
//               href="/logout"
//               className="flex items-center px-2 py-3 text-gray-800 hover:text-red-600"
//             >
//               <LogoutOutlined className="mr-3 text-lg" />
//               <span>Sign Out</span>
//             </a>

//             <Space size="large" className="flex justify-center mt-4">
//               {socialItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.path}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-xl text-gray-600 hover:text-blue-500"
//                 >
//                   {item.icon}
//                 </a>
//               ))}
//             </Space>
//           </div>
//         </div>
//       </Drawer>
//     </nav>
//   );
// };

// export default Navbar;



"use client";
import React, { useState ,useEffect} from "react";
import { Drawer, Space } from "antd";
import { 
  MenuOutlined, HomeOutlined, DashboardOutlined, PhoneOutlined,
  CalendarOutlined, UserOutlined, MedicineBoxOutlined, TeamOutlined, GiftOutlined,
  FormOutlined, BookOutlined, LogoutOutlined, FacebookOutlined, YoutubeOutlined, InstagramOutlined
} from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useUserStore from '../../doctor/justand'; // Import your user store


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  // Get user data directly from the store
  const currentPatient = useUserStore((state) => state.currentPatient);
  const user = currentPatient?.user || {};
  const userAvatar = currentPatient?.image 
  ? `https://healdiway.bkarogyam.com/media/${currentPatient.image}`
  : "/images/vatar.png";
  
  // console.log("userdata-->",user.first_name)

  // useEffect(() => {
  //   if(!(user?.is_active)) {
  //     router.push("/");
  //   }
  // }, [user]);
  

  const menuItems = [
    { icon: <HomeOutlined />, label: "Home", path: "/Adviosr" },
    { icon: <DashboardOutlined />, label: "Dashboard", path: "/homepage/UnderConstruction" },
    { icon: <PhoneOutlined />, label: "Conference Call", path: "/homepage/UnderConstruction" },
    { icon: <CalendarOutlined />, label: "Camp Booking", path: "/homepage/UnderConstruction" },
    { icon: <UserOutlined />, label: "Offline Appointment", path: "/homepage/UnderConstruction" },
    { icon: <MedicineBoxOutlined />, label: "Our Services", path: "/homepage/UnderConstruction" },
    { icon: <TeamOutlined />, label: "Connection with Doctor", path: "/homepage/UnderConstruction" },
    { icon: <GiftOutlined />, label: "Scheme & Offers", path: "/homepage/UnderConstruction" },
    { icon: <FormOutlined />, label: "Suggestions", path: "/homepage/UnderConstruction" },
    { icon: <BookOutlined />, label: "EGyanshala", path: "/homepage/UnderConstruction" },
  ];

  const socialItems = [
    { icon: <FacebookOutlined />, path: "https://facebook.com" },
    { icon: <YoutubeOutlined />, path: "https://youtube.com" },
    { icon: <InstagramOutlined />, path: "https://instagram.com" },
  ];

  return (
    <nav className="w-full flex items-center justify-between px-5 py-2 bg-white shadow-md">
      {/* Left: Hamburger Menu + Namaste, Vivek */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-2xl text-gray-700 md:hidden"
        >
          <MenuOutlined />
        </button>
        <h2 className="text-lg font-semibold text-gray-800">Namaste, {user.first_name || "user"} 🙏</h2>
      </div>

      {/* Right: User Avatar */}
      <div
        className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer"
        onClick={() => router.push("/Advisor/Profile")}
      >
        <Image
          src={userAvatar}
          alt="User Avatar"
          width={40}
          height={40}
          className="object-cover"
        />
      </div>

      {/* Drawer for Mobile Menu */}
      <Drawer
        title={
          <div className="flex items-center">
            <Image
              src={userAvatar}
              alt="User Avatar"
              width={40}
              height={40}
              className="object-cover rounded-full mr-3"
            />
            <span className="text-lg font-medium">{user.first_name || "user"}</span>
          </div>
        }
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={280}
        bodyStyle={{ padding: 0 }}
        headerStyle={{ padding: '16px 24px' }}
        closeIcon={<MenuOutlined />}
      >
        <div className="flex flex-col h-full">
          <ul className="flex-grow">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-gray-100 last:border-b-0">
                <a
                  href={item.path}
                  className="flex items-center px-6 py-4 text-gray-800 hover:text-green-600 hover:bg-gray-50 transition-colors"
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="p-4 border-t border-gray-200">
            <a
              href="/Advisor/signout"
              className="flex items-center px-2 py-3 text-gray-800 hover:text-red-600"
            >
              <LogoutOutlined className="mr-3 text-lg" />
              <span>Sign Out</span>
            </a>

            <Space size="large" className="flex justify-center mt-4">
              {socialItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-600 hover:text-blue-500"
                >
                  {item.icon}
                </a>
              ))}
            </Space>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Drawer, Button, Dropdown, Menu, Badge } from "antd";
import { ImCart } from "react-icons/im";
import useUserStore from "../doctor/justand";
import { getAPI } from "@/dataarrange/utils/common";
import { motion, AnimatePresence } from "framer-motion";
import { SearchOutlined } from "@ant-design/icons";
import ProductsSearch from "../e-store/productssearch";
import {
  HomeOutlined, DashboardOutlined, PhoneOutlined,
  CalendarOutlined, UserOutlined, MedicineBoxOutlined,
  TeamOutlined, GiftOutlined, FormOutlined, BookOutlined,
  LogoutOutlined, FacebookOutlined, YoutubeOutlined,
  InstagramOutlined, MenuOutlined
} from "@ant-design/icons";
import { WalletOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { FiShoppingCart } from "react-icons/fi";
import { useAppContext } from "../providers";


const HeaderSection = ({ domainuser }) => {
  const userdata = useUserStore((state) => state.currentPatient);
    const { cart } = useAppContext();
  const { setCustomer } = useUserStore();
  const [customerdata, setCustomerdata] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();


  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [cartDropdownVisible, setCartDropdownVisible] = useState(false);
  const [cartData, setCartData] = useState([]);
  const dropdownRef = useRef(null);
  const cartRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menu = (
    <Menu className="w-40" onClick={(e) => e.domEvent.stopPropagation()}>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link href="/Advisor/Profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="wallet" icon={<WalletOutlined />}>
        <Link href="/Advisor/Wallet">Wallet</Link>
      </Menu.Item>
      <Menu.Item key="teams" icon={<TeamOutlined />}>
        <Link href="/Advisor/Teams">My Teams</Link>
      </Menu.Item>
      <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
        <Link href="/e-store/productdetails/addtocart/">My Cart</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="signout" icon={<LogoutOutlined />}>
        <Link href="/Advisor/signout">Sign Out</Link>
      </Menu.Item>
    </Menu>
  );

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const menuItems = [
    { icon: <HomeOutlined />, label: "Home", path: "/", showAlways: true },
    {
      icon: <DashboardOutlined />,
      label: "Dashboard",
      path: "/Advisor",
      showWhenActive: true
    },
    {
      icon: <PhoneOutlined />,
      label: "Conference Call",
      path: "/homepage/UnderConstruction",
      showWhenActive: true
    },
    {
      icon: <MedicineBoxOutlined />,
      label: "Our Services",
      path: "/services",
      showAlways: true
    },
    {
      icon: <CalendarOutlined />,
      label: "Camp Booking",
      path: "/homepage/UnderConstruction",
      showWhenActive: true
    },
    {
      icon: <UserOutlined />,
      label: "Offline Appointment",
      path: "/HealthConsultation/Offline",
      showAlways: true
    },
    {
      icon: <GiftOutlined />,
      label: "Scheme & Offers",
      path: "/homepage/UnderConstruction",
      showAlways: true
    },
    {
      icon: <FormOutlined />,
      label: "Suggestions",
      path: "/homepage/UnderConstruction",
      showWhenActive: true
    },
    {
      icon: <BookOutlined />,
      label: "EGyanshala",
      path: "/homepage/UnderConstruction",
      showWhenActive: true
    },
  ];

  const treatmentItems = [
    { label: "Heart Disease", path: "/homepage/HOPES/Heart" },
    { label: "Obesity", path: "/homepage/HOPES/Obesity" },
    { label: "Pain Management", path: "/homepage/HOPES/Pain" },
    { label: "Kidney Disease", path: "/homepage/HOPES/EveryKidney" },
    { label: "Sugar/BP", path: "/homepage/HOPES/Sugar" },
  ];

  const socialItems = [
    { icon: <FacebookOutlined />, path: "https://www.facebook.com/profile.php?id=61559701375758" },
    { icon: <YoutubeOutlined />, path: "https://www.youtube.com/@ArogyaBharat" },
    { icon: <InstagramOutlined />, path: "https://www.instagram.com/arogyabharatofficial" },
  ];

  const userAvatar = userdata?.image
    ? `https://healdiway.bkarogyam.com/media/${userdata.image}`
    : "/images/vatar.png";

  const toggleSearch = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f2f9f1] lg:bg-[#5b974f]">
      <div className="flex justify-between items-center px-2 lg:px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div onClick={() => router.push("/")} className="relative cursor-pointer">
            <Image
              width={70}
              height={70}
              src="/favicon.ico"
              alt="Logo Arogyam"
              className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] hidden lg:flex"
            />
          </div>
          <div
            onClick={() => router.push("/")}
            className="cursor-pointer mx-2 my-2 pl-8 lg:pl-0 text-lg lg:text-2xl font-bold capitalize text-gray-800 lg:text-white hover:text-gray-500 transition-colors duration-300"
          >
            {domainuser?.domainname || "Arogya Bharat"}
          </div>
        </div>

        {/* Search Button - Styled as search box */}
        <motion.div
          className="hidden lg:block flex-1 lg:max-w-xl lg:mx-4"
          layout
        >
          <button
            onClick={toggleSearch}
            className="w-full flex items-center px-4 py-2 rounded-lg bg-white text-gray-600 border border-gray-300 hover:border-blue-500 shadow-sm transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>  
            <span className="text-sm text-gray-400 hidden lg:block">Search your health solution here...</span>
          </button>
        </motion.div>

        {/* Animated Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl z-50"
            >
              {/* Add close button here */}
              <button
                onClick={handleSearchClose}
                className="absolute top-4 right-4 z-50 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close search"
              >
                <svg
                  className=" w-6 h-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                > 
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Scrollable Results Container */}
              <div className="max-h-[60vh] overflow-y-auto">
                <ProductsSearch
                  isNavbarSearch={true}
                  onClose={handleSearchClose}
                  showResultsInContainer={true}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Drawer Button and Cart */}
        <div className="flex items-center space-x-4 lg:space-x-6">

          <div
            className="text-black text-xl lg:hidden"
            onClick={toggleSearch}
          >
            <SearchOutlined/>
          </div>  

          <Link href={'/e-store/productdetails/cart/'}>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative text-black lg:text-white text-2xl p-2 lg:p-2 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            >
                <FiShoppingCart className=" lg:text-xl transform group-hover:scale-110 transition-transform" />
                {cart.items.length > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 bg-gray-200 text-rose-500 text-xs font-bold h-5 w-5 lg:h-6 lg:w-6 flex items-center justify-center rounded-full shadow-sm"
                  >
                    {cart.getCartItemCount()}
                  </motion.span>
                )}
            </motion.button>
          </Link>
          
          {userdata ? (
            <div className="flex items-center" ref={dropdownRef}>
              <span className="text-sm lg:text-white font-medium mx-2 hidden lg:block">Hi, {userdata.user.first_name}</span>
              <Dropdown
                overlay={menu}
                trigger={['click']}
                visible={dropdownVisible}
                onVisibleChange={(visible) => setDropdownVisible(visible)}
                placement="bottomRight"
              >
                <div className="flex items-center cursor-pointer">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white mr-2">
                    <Image
                      src={userAvatar}
                      alt="User Avatar"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                </div>
              </Dropdown>
            </div>
          ) : (
              <div
                className="text-black shadow-lg mr-0 m-2"
                onClick={() => router.push("/login")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
          )}

          <div
            className="fixed top-0 left-1 mt-3 lg:hidden p-0"
            onClick={toggleDrawer}
          >
            <MenuOutlined style={{ fontSize: '24px', color: '#050505' }} />
          </div>
        </div>
      </div>

      {/* Drawer Section */}
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
            <span className="text-lg font-medium">
              {userdata ? userdata.user.first_name : "Guest"}
            </span>
          </div>
        }
        placement="left"
        onClose={closeDrawer}
        open={open}
        width={280}
        bodyStyle={{
          padding: 0,
          background: "#f0f9ff",
          display: "flex",
          flexDirection: "column",
          height: "calc(100% - 55px)"
        }}
        headerStyle={{
          padding: '16px 24px',
          borderBottom: "1px solid #e5e7eb"
        }}
        closeIcon={<MenuOutlined />}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <ul className="flex-grow">
            {menuItems.map((item, index) => {
              if ((item.showAlways) ||
                (item.showWhenActive && userdata?.user?.is_active)) {
                return (
                  <li key={index} className="border-b border-gray-100 last:border-b-0">
                    <Link
                      href={item.path}
                      className="flex items-center px-6 py-4 text-gray-800 hover:text-green-600 hover:bg-gray-50 transition-colors"
                      onClick={closeDrawer}
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              }
              return null;
            })}

            {/* Treatment Section */}
            <li className="border-b border-gray-100">
              <div className="px-6 py-3 font-medium text-gray-800">
                Treatments
              </div>
              <ul>
                {treatmentItems.map((item, index) => (
                  <li key={index} className="border-t border-gray-100">
                    <Link
                      href={item.path}
                      className="flex items-center px-9 py-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                      onClick={closeDrawer}
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* Footer Section */}
          <div className="p-4 border-t border-gray-200 mt-auto">
            {userdata ? (
              <Link
                href="/Advisor/signout"
                className="flex items-center px-2 py-3 text-gray-800 hover:text-red-600"
                onClick={closeDrawer}
              >
                <LogoutOutlined className="mr-3 text-lg" />
                <span>Sign Out</span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="flex items-center px-2 py-3 text-gray-800 hover:text-blue-600"
                onClick={closeDrawer}
              >
                <span>Login/Signup</span>
              </Link>
            )}

            <div className="flex justify-center space-x-6 mt-4">
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
            </div>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default HeaderSection;
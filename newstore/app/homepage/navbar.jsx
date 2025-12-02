"use client";
import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ScrolebleNav } from "./scroleblenavigation";
import ForIndividuals from "./navmenu/ForIndividuals";
import For_Doctors_Comist from "./navmenu/for_doctors_comist";
import Shop_By_Catagory from "./navmenu/shop_by_catagory";
import Best_Seller from "./navmenu/best_seller";
import { FaGooglePlay } from "react-icons/fa";
import { IoIosAppstore } from "react-icons/io";
import useUserStore from "../doctor/justand";
import Link from "next/link";
import { ImCart } from "react-icons/im";
import { getAPI } from "@/dataarrange/utils/common";
import HeaderSection from "./header";
import axios from "axios";

// Start Header Nav Bar Component
const NavBar = () => {
  const userdata = useUserStore((state) => state.currentPatient);
  const { setCustomer, setSubdomain } = useUserStore();
  const [customerdata, setCustomerdata] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [subdomain, setSubdomainname] = useState(null);
  const [domainuser, setDomainUser] = useState(null);

  useEffect(() => {
    const host = window.location.hostname;
    const parts = host.split(".");
    if (parts.length > 2) {
      setSubdomainname(parts[0]);
      console.log(parts); // Subdomain is the first part
      // Domain is the rest
    } else {
      // setDomain(host);
      console.log(`get by ${host}`);
    }
    if (userdata) {
      checkUserInCart();
    }
  }, [userdata]);

  useEffect(() => {
    if (subdomain !== null && subdomain !== undefined) {
      fetchDomainUser(subdomain);
    }
  }, [subdomain]);

  const checkUserInCart = () => {
    setIsloading(true);
    const successfn = (data) => {
      setCustomer(data);
      setCustomerdata(data);
      setIsloading(false);
    };
    const errorfn = (data) => {
      console.log(data);
      setIsloading(false);
      setIsError(true);
    };
    getAPI(
      `inv_customer/userTocust/?user_id=${userdata.user.id}`,
      successfn,
      errorfn
    );
  };

  const fetchDomainUser = async (name) => {
    setIsloading(true);

    try {
      const response = await axios.get(
        `https://healdiway.bkarogyam.com/erp-api/domain-advisor/get_domain/`,
        {
          params: { domain_name: name },
          headers: {
            // 'Authorization': 'Bearer your_token_here', // Replace 'your_token_here' with the actual token
            "Content-Type": "application/json", // Adjust content type if needed
          },
        }
      );

      // Handle success
      setDomainUser(response.data);
      setSubdomain(response.data);
    } catch (error) {
      // Handle error
      // console.error('Error fetching domain user:', error);
    } finally {
      setIsloading(false);
    }
  };

  const router = useRouter();

  // Manage selected keys to highlight the active item
  const [selectedKey, setSelectedKey] = useState("for-individuals");

  const handleMenuClick = (key) => {
    setSelectedKey(key);
    if (key === "e-store") {
      router.push("/e-store");
    } else if (key === "business-opportunity") {
      router.push("/business-opportunity");
    }
  };

  return (
    <div className="layout overflow-hidden">
      <div id="scrollable-navbar" className="lg:hidden mt-16">
        <ScrolebleNav />
      </div>

      <HeaderSection domainuser={domainuser} />

      {/* Start header menu section */}
      <div
        id="header-menu"
        className="hidden lg:block mt-16 rounded-xl md:rounded-none fixed w-full top-1 left-0 z-10 bg-white shadow-md md:shadow-none "
      >
        <Menu
          theme="light"
          mode="horizontal"
          className="flex items-center justify-between text-black md:py-3 py-0 "
          selectedKeys={[selectedKey]} // Set the active key
        >
          <div className="flex font-bold text-sm md:text-xl">
            {/* <Menu.Item
              key="for-individuals"
              style={{
                color: selectedKey === "for-individuals" ? "blue" : undefined,
              }}
              onClick={() => handleMenuClick("for-individuals")}
            >
              <ForIndividuals />
            </Menu.Item>
            <Menu.Item
              key="for-doctors-chemist"
              style={{
                color:
                  selectedKey === "for-doctors-chemist" ? "blue" : undefined,
              }}
              onClick={() => handleMenuClick("for-doctors-chemist")}
            >
              <For_Doctors_Comist />
            </Menu.Item> */}

            {/* New Menu Items Added Here */}
            <Menu.Item
              key="shop-by-category"
              style={{
                color: selectedKey === "shop-by-category" ? "blue" : undefined,
              }}
              onClick={() => handleMenuClick("shop-by-category")}
            >
              <Shop_By_Catagory />
            </Menu.Item>

            <Menu.Item
              key="best-seller"
              style={{
                color: selectedKey === "best-seller" ? "blue" : undefined,
              }}
              onClick={() => handleMenuClick("best-seller")}
            >
              <Best_Seller />
            </Menu.Item>

            {/* <Menu.Item
              key="business-opportunity"
              style={{ color: selectedKey === "blog" ? "blue" : undefined }}
            >
              <Link
                href="/business-opportunity"
                onClick={() => handleMenuClick("blog")}
              >
                Business Opportunity with Us
              </Link>
            </Menu.Item> */}

            {/* <Menu.Item key="clinics" style={{ color: selectedKey === "clinics" ? 'blue' : undefined }}>
              <Link href="/clinics" onClick={() => handleMenuClick("clinics")}>
                Find Clinics
              </Link>
            </Menu.Item> */}

            {/* <Menu.Item key="ourdoctors" style={{ color: selectedKey === "ourdoctors" ? 'blue' : undefined }}>
              <Link href="/homepage/ourdoctors" onClick={() => handleMenuClick("ourdoctors")}>
                Find Doctors
              </Link>
            </Menu.Item> */}

            <Menu.Item
              key="e-store"
              style={{ color: selectedKey === "e-store" ? "blue" : undefined }}
              onClick={() => handleMenuClick("e-store")}
            >
              Our Products
            </Menu.Item>
            {/* <Menu.Item
              key="business-opportunity"
              style={{ color: selectedKey === "business-opportunity" ? 'blue' : undefined }}
              onClick={() => handleMenuClick("business-opportunity")}
            >
              Business Opportunity
            </Menu.Item> */}

            <Menu.Item
              key="aboutus"
              style={{ color: selectedKey === "aboutus" ? "blue" : undefined }}
            >
              <Link href="/aboutus" onClick={() => handleMenuClick("aboutus")}>
                AboutUs
              </Link>
            </Menu.Item>
          </div>

          <div className="flex  space-x-4 font-bold md:text-lg ">
            <Menu mode="horizontal" className="flex items-center space-x-4">
              <Menu.Item key="blog">
                Health Blogs &nbsp;
                <a href="/blog" rel="noopener noreferrer">
                  <span className=" top-1 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-1 py-1 rounded-xl">
                    Click Here
                  </span>
                </a>
              </Menu.Item>
              <div className="flex items-center space-x-2 font-bold">
                <div className="flex space-x-4 items-center">
                  <a href="https://play.google.com/store/apps/details?id=com.arogyatalk&hl=en_IN&gl=US">
                    <FaGooglePlay size={18} color="#4DA0A3" />{" "}
                  </a>
                  <a href="https://www.apple.com/app-store/">
                    <IoIosAppstore size={25} color="black" />{" "}
                  </a>
                </div>
              </div>
            </Menu>
          </div>
        </Menu>
      </div>

      <style jsx>{`
        .ant-menu-item:hover {
          color: blue; /* Change hover color to blue */
        }
      `}</style>
    </div>
  );
};

export default NavBar;
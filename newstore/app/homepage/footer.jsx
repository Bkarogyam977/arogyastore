'use client'
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import { Space } from 'antd';
import { createFromIconfontCN, YoutubeFilled, LinkedinFilled, InstagramFilled, PinterestFilled } from '@ant-design/icons';
import Link from 'next/link';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

function WebFooter() {
  const [expandedSection, setExpandedSection] = useState(null); // Tracks the open section

  const individualsRef = useRef(null);
  const servicesRef = useRef(null);

  // Close the menu if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        individualsRef.current && !individualsRef.current.contains(event.target) &&
        servicesRef.current && !servicesRef.current.contains(event.target)
      ) {
        setExpandedSection(null); // Close all sections when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle function for expanding/collapsing sections
  const handleToggle = (section) => {
    setExpandedSection(expandedSection === section ? null : section); // Toggle the clicked section
  };

  return (
    <div className='w-full m-auto hidden md:inline-block'>
      <footer className="text-black" style={{ backgroundColor: 'rgb(222, 237, 238)' }}>
        <div className="container mx-auto py-4">
          <div className="flex flex-wrap mx-4 md:mx-0 px-3">

            {/* Logo and Contact Info Section */}
            <div className="w-full md:w-1/2 lg:w-1/6 flex flex-col">
              <div className="flex justify-center items-center" style={{ width: '150px', height: '150px' }}>
                <Link href='/'>
                  <div className='relative flex justify-center items-center'>
                    <Image width={100} height={100} src='/favicon.ico' alt='Logo Arogyam' />
                    <div className='w-[100px] h-[100px] animate-ping absolute bg-green-300 rounded-full'></div>
                  </div>
                </Link>
              </div>
              <p>
                <a href="tel:8081222333" className="text-blue-500 hover:underline mt-10">Phone: 8112777888</a>
              </p>
              <p>
                <a href="mailto:doctor@bkarogyam.com" className="text-blue-500 hover:underline">missionarogyam@gmail.com</a>
              </p>
            </div>

            {/* For Individuals and Services Section */}
            <div className="w-full md:w-1/2 lg:w-1/6 mt-4">
              {/* For Individuals Section */}
              <div ref={individualsRef}>
                <h3
                  className="text-black text-xl mb-3 cursor-pointer flex items-center"
                  onClick={() => handleToggle("individuals")}
                >
                  For Individuals{" "}
                  <span className="text-blue-600 ml-2">
                    {expandedSection === "individuals" ? "-" : "+"}
                  </span>
                </h3>
                {expandedSection === "individuals" && (
                  <ul className="space-y-2">
                    <li><Link className="hover:text-blue-700" href="/hopes/heartdisease">Heart Disease</Link></li>
                    <li><Link className="hover:text-blue-700" href="/hopes/obesity">Obesity</Link></li>
                    <li><Link className="hover:text-blue-700" href="/hopes/painmanagement">Pain Management</Link></li>
                    <li><Link className="hover:text-blue-700" href="/hopes/every-kidney">Kidney Disease</Link></li>
                    <li><Link className="hover:text-blue-700" href="/hopes/sugar">Sugar/BP</Link></li>
                  </ul>
                )}
              </div>

              {/* Services Section */}
              <div ref={servicesRef} className="mt-6">
                <h3
                  className="text-black text-xl mb-3 cursor-pointer flex items-center"
                  onClick={() => handleToggle("services")}
                >
                  Services{" "}
                  <span className="text-blue-600 ml-2">
                    {expandedSection === "services" ? "-" : "+"}
                  </span>
                </h3>
                {expandedSection === "services" && (
                  <ul className="space-y-2">
                    <li><Link className="hover:text-blue-700" href="/services/arogyadham">Arogyadham</Link></li>
                    <li><Link className="hover:text-blue-700" href="/services/panchkarma">Panchakarma</Link></li>
                    <li>
                      <Link className="hover:text-blue-700" href="https://www.yogyabharat.com/" target="_blank" rel="noopener noreferrer">
                        Our Academy Yogya Bharat
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Additional Links */}
              <Link className="hover:text-blue-700 mt-4 block" href="/testimonials">Testimonials</Link>
              <Link className="block hover:text-blue-700 mt-2" href="/webinar">Webinar</Link>
              <Link className="block hover:text-blue-700 mt-2" href="/learning">Learning</Link>
            </div>

            {/* For Doctors/Chemists Section */}
            <div className="w-full md:w-1/2 lg:w-1/6 mt-4">
              <h3 className="text-black text-xl mb-4">For Doctors/Chemists</h3>
              <Link className="block hover:text-blue-700 mt-2" href="/e-store">Buy Medicines</Link>
              <Link className="block hover:text-blue-700 mt-2" href="/login">Bk Partner</Link>
              <Link className="block hover:text-blue-700 mt-2" href="/doctor">Arogyam Doctor</Link>
              <a className="block hover:text-blue-700 mt-2" href="https://healdiway.bkarogyam.com/">Arogyam Tool</a>
              <Link className="block hover:text-blue-700 mt-2" href="/feed">Feed</Link>
            </div>

            {/* Resources Section */}
            <div className="w-full md:w-1/2 lg:w-1/6 mt-4">
              <h3 className="text-black text-xl mb-4">Company & Resources</h3>
              <Link className="block hover:text-blue-700 mt-2" href="/aboutus">About Us</Link>
              <Link className="block hover:text-blue-700 mt-2" href="/blog">Health Blogs</Link>
              <Link className="block hover:text-blue-700 mt-2" href="/clinics">Find Clinics</Link>
              <Link className="block hover:text-blue-700 mt-2" href="/homepage/ourdoctors">Find Doctors</Link>
              <Link className="block hover:text-blue-700 mt-2" href="/contactus">Contact Us</Link>
              <Link className="block hover:text-blue-700 mt-2" href="/careers">Careers</Link>
            </div>

            {/* Company Section */}
            <div className="w-full md:w-1/2 lg:w-1/6 mt-4">
              <h3 className="text-black text-xl mb-3">Terms & Policy</h3>
              <Link className="block hover:text-blue-700 mt-2" href="/privacypolicy">Privacy Policy</Link>
              <Link className="block hover:text-blue-700 mt-2" href="/termsandconditions">Terms & Conditions</Link>
              <Link className="block hover:text-blue-700 mt-2" href="/cancellationpolicy">Cancellation Policy</Link>
              <Link className="block hover:text-blue-700 mt-2" href="/shippingpolicy">Shipping Policy</Link>
              <Link className="block hover:text-blue-700 mt-2" href="/returnpolicy">Return Policy</Link>
              <Link className="block hover:text-blue-700 mt-2" href="/refundpolicy">Refund Policy</Link>
            </div>

            {/* App Section */}
            <div className="w-full md:w-1/2 lg:w-1/6 mt-4">
              <h3 className='text-black text-xl mb-3'>Experience Bkarogyam on Mobile</h3>
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                  <a href="https://play.google.com/store/apps/details?id=com.arogyatalk&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/newsiteimg/google-play-apple-store.jpeg"
                      alt="App Store Logo"
                      width={300}
                      height={100}
                      className="w-full h-auto"
                    />
                  </a>
                  <h3 className='text-black text-xl mt-6'>Follow Us</h3>
                  <Space>
                    <a href="https://www.facebook.com/profile.php?id=61559701375758" target="_blank" rel="noopener noreferrer">
                      <IconFont type="icon-facebook" style={{ fontSize: '20px', color: 'blue' }} />
                    </a>
                    {/* <a href="https://x.com/i/flow/login?redirect_after_login=%2Fbkkidneycare" target="_blank" rel="noopener noreferrer">
                      <Image style={{ maxWidth: '28px' }} width={65} height={65} src="/images/twitterx--v1.png" alt="twitterx--v1" />                    </a>
                    <a href="https://in.linkedin.com/company/bk-arogyam" target="_blank" rel="noopener noreferrer">
                      <LinkedinFilled style={{ fontSize: '24px', color: 'blue' }} />
                    </a> */}
                    <a href="https://www.youtube.com/@ArogyaBharat" target="_blank" rel="noopener noreferrer">
                      <YoutubeFilled style={{ fontSize: '30px', color: 'red' }} />
                    </a>
                    <a href="https://www.instagram.com/arogyabharatofficial?igsh=MWdwaWl3dG5sOWZi" target="_blank" rel="noopener noreferrer">
                      <InstagramFilled style={{ fontSize: '24px', color: 'purple' }} />
                    </a>
                    {/* <a href="https://www.pinterest.com/bkarogyam/" target="_blank" rel="noopener noreferrer">
                      <PinterestFilled style={{ fontSize: '24px', color: 'red' }} />
                    </a> */}
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default WebFooter;

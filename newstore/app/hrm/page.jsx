// 'use client'
// import { getOuterAPI } from '@/dataarrange/utils/common'
// import { set } from 'lockr'
// import Link from 'next/link'
// import { useSearchParams } from 'next/navigation'
// import React, { useEffect, useState } from 'react'
// import { useRouter } from 'next/router';

//  const Hrm = () => {

//   // const route=useRouter()
//   const route = useSearchParams()
//   const id = route.get('id')

//   const [jobdata , setJobdata] = useState();
//   const [isloading , setIsloading] = useState(false);

//  const fetch_Jobdetails = (id) => {
//   setIsloading(true)
//    const successfn = (data) => {
//     console.log(data)

//       setJobdata(data)
//       setIsloading(false)

//    }
//    const errorfn = (data) => {

//     setIsloading(false)

//    }

//    getOuterAPI(`https://healdiway.bkarogyam.com/erp-api/hr_job_opening/${id}`, successfn, errorfn)

//   }

//   useEffect(() => {
//     if (id){

//       fetch_Jobdetails(id)
//     }
//   },[id])

//   return (   isloading ? (
//     <div>
//       Loading...
//     </div>
//   ) : (
//     jobdata && ( <div className="max-w-4xl mx-auto bg-card text-foreground p-6 rounded-lg shadow-lg py-16">
//               <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
//                   <h1 className="text-2xl font-bold">B.K.AROGYAM & RESEARCH PRIVATE LIMITED | { jobdata ?  jobdata.requistion_data.job_type_data.name : ''}</h1>
//                   <Link href={`/hrm/interested?id=${id}`} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg mt-4 md:mt-0 md:ml-4 order-last md:order-none"   >I&apos;m interested</Link>
//               </header>
//               <h2 className="text-xl font-semibold">{jobdata.requistion_data.job_title}</h2>
//               <p className="text-muted-foreground">{jobdata.requistion_data.place_of_posting_data.map(e => e.name)}, India | Posted on {jobdata.modified_at.substring(0,10)}</p>
//               <div className="flex space-x-4 mt-4">
//                   <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1 rounded">Share job via email</button>
//                                   <div class="flex space-x-4 mt-4">
//                     <a href="#" class="text-muted-foreground hover:text-foreground">
//                       <img aria-hidden="true" alt="Share on Facebook" src="https://openui.fly.dev/openui/facebook.svg?text=🔗" />
//                     </a>
//                     <a href="#" class="text-muted-foreground hover:text-foreground">
//                       <img aria-hidden="true" alt="Share on Twitter" src="https://openui.fly.dev/openui/twitter.svg?text=🔗" />
//                     </a>
//                     <a href="#" class="text-muted-foreground hover:text-foreground">
//                       <img aria-hidden="true" alt="Share on LinkedIn" src="https://openui.fly.dev/openui/linkedin.svg?text=🔗" />
//                     </a>
//                     <a href="#" class="text-muted-foreground hover:text-foreground">
//                       <img aria-hidden="true" alt="Share via WhatsApp" src="https://openui.fly.dev/openui/whatsapp.svg?text=🔗" />
//                     </a>
//                     <a href="#" class="text-muted-foreground hover:text-foreground">
//                       <img aria-hidden="true" alt="Copy link" src="https://openui.fly.dev/openui/link.svg?text=🔗" />
//                     </a>
//                   </div>
//               </div>
//               <nav className="mt-6">
//                   <a href="#" className="text-muted-foreground hover:underline">Job listing</a> &gt;
//                   <a href="#" className="text-muted-foreground hover:underline">Job details</a>
//               </nav>
//               <section className="mt-6">
//                   <h3 className="text-lg font-semibold">Job Description</h3>
//                   <ul className="list-disc list-inside mt-2">

//                     <div  dangerouslySetInnerHTML={{__html : jobdata.job_description}}  >

//                     </div>

//                   </ul>
//               </section>

//               {
//                 jobdata.job_benifit &&   <section className="mt-6">
//                 <h3 className="text-lg font-semibold">Job Benifit</h3>
//                 <ul className="list-disc list-inside mt-2">

//                   <div  dangerouslySetInnerHTML={{__html : jobdata.job_benifit}}  >

//                   </div>

//                 </ul>
//             </section>
//               }

//               {
//                     jobdata.job_requirements &&

//                     <section className="mt-6">
//                     <h3 className="text-lg font-semibold">Job Requirements</h3>
//                     <ul className="list-disc list-inside mt-2">

//                       <div  dangerouslySetInnerHTML={{__html : jobdata.job_requirements}}  >

//                       </div>

//                     </ul>
//                 </section>
//               }

//               <section className="mt-6">
//                   <h3 className="text-lg font-semibold">Job Information</h3>
//                   <div className="mt-2">
//                       <p><strong>Industry:</strong> Health Care</p>
//                       <p><strong>Work Experience:</strong> {jobdata.requistion_data.experiance_range_data.name}</p>
//                       <p><strong>Salary:</strong> {Math.round(jobdata.requistion_data.min_annual)} - {Math.round(jobdata.requistion_data.max_annual)}</p>
//                       <p><strong>City:</strong> {jobdata.requistion_data.location_data.name}</p>
//                       <p><strong>Gender:</strong> {jobdata.requistion_data.gender}</p>
//                       <p><strong>Position Quantity:</strong> {jobdata.requistion_data.position_quantity} </p>
//                       <p><strong>Skills:</strong>  {jobdata.requistion_data.skill_data.map(e => `${e.name}, ` )} </p>
//                       <p><strong>Qualification:</strong>  {jobdata.requistion_data.qualification_data.map(e => `${e.name}, `)}   </p>
//                       <p><strong>Position:</strong> {jobdata.requistion_data.position_type_data.map(e => `${e.name}. `)} </p>

//                   </div>
//               </section>
//           </div>

//     ) )

//   )
// }

// export default Hrm;



"use client";
import { getOuterAPI } from "@/dataarrange/utils/common";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import { FiLink, FiMapPin, FiCalendar, FiDollarSign, FiUser, FiBook, FiAward } from "react-icons/fi";

const Hrm = () => {
  const route = useSearchParams();
  const id = route.get("id");
  const [jobdata, setJobdata] = useState();
  const [isloading, setIsloading] = useState(false);

  const fetch_Jobdetails = (id) => {
    setIsloading(true);
    const successfn = (data) => {
      setJobdata(data);
      setIsloading(false);
    };
    const errorfn = (data) => {
      setIsloading(false);
    };

    getOuterAPI(
      `https://healdiway.bkarogyam.com/erp-api/hr_job_opening/${id}`,
      successfn,
      errorfn
    );
  };

  useEffect(() => {
    if (id) {
      fetch_Jobdetails(id);
    }
  }, [id]);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return isloading ? (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ) : (
    jobdata && (
      <div className="max-w-4xl mx-auto bg-white text-gray-800 p-6 rounded-xl shadow-lg md:py-12 py-8 my-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                B.K.AROGYAM & RESEARCH PRIVATE LIMITED
              </h1>
              <p className="text-blue-600 font-medium mt-1">
                {jobdata.requistion_data.job_type_data.name}
              </p>
            </div>
            
            <Link href={`/hrm/interested?id=${id}`}>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 transition duration-200 transform hover:-translate-y-1 shadow-md"
              >
                I&apos;m interested
              </button>
            </Link>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-4">
            {jobdata.requistion_data.job_title}
          </h2>
          
          <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-600">
            <div className="flex items-center">
              <FiMapPin className="mr-1" />
              <span>{jobdata.requistion_data.place_of_posting_data.map((e) => e.name).join(', ')}, India</span>
            </div>
            <div className="flex items-center">
              <FiCalendar className="mr-1" />
              <span>Posted on {new Date(jobdata.modified_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Share this job</h3>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors">
              <FaRegEnvelope />
              <span>Share via email</span>
            </button>

            <div className="flex items-center justify-center md:justify-end gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900 transition-colors"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Check out this job: ' + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp size={18} />
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  alert('Link copied to clipboard!');
                }}
                className="bg-gray-600 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <FiLink size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8 flex items-center">
          <a href="#" className="hover:text-blue-600 transition-colors">Job listing</a>
          <span className="mx-2">/</span>
          <a href="#" className="text-blue-600 font-medium">Job details</a>
        </nav>

        {/* Job Description */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
            <h3 className="text-xl font-semibold text-gray-900">Job Description</h3>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: jobdata.job_description }}
            ></div>
          </div>
        </section>

        {/* Job Benefits */}
        {jobdata.job_benifit && (
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-6 bg-green-600 rounded-full"></div>
              <h3 className="text-xl font-semibold text-gray-900">Job Benefits</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: jobdata.job_benifit }}
              ></div>
            </div>
          </section>
        )}

        {/* Job Requirements */}
        {jobdata.job_requirements && (
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
              <h3 className="text-xl font-semibold text-gray-900">Job Requirements</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: jobdata.job_requirements }}
              ></div>
            </div>
          </section>
        )}

        {/* Job Information */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-6 bg-purple-600 rounded-full"></div>
            <h3 className="text-xl font-semibold text-gray-900">Job Information</h3>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full mt-1">
                <FiAward className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="font-medium text-gray-700">Industry</p>
                <p className="text-gray-900">Health Care</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full mt-1">
                <FiUser className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="font-medium text-gray-700">Work Experience</p>
                <p className="text-gray-900">{jobdata.requistion_data.experiance_range_data.name}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full mt-1">
                <FiDollarSign className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="font-medium text-gray-700">Salary</p>
                <p className="text-gray-900">
                  ₹{Math.round(jobdata.requistion_data.min_annual).toLocaleString()} - ₹{Math.round(jobdata.requistion_data.max_annual).toLocaleString()}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full mt-1">
                <FiMapPin className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="font-medium text-gray-700">City</p>
                <p className="text-gray-900">{jobdata.requistion_data.location_data.name}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full mt-1">
                <FiUser className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="font-medium text-gray-700">Gender</p>
                <p className="text-gray-900">{jobdata.requistion_data.gender}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full mt-1">
                <FiUser className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="font-medium text-gray-700">Position Quantity</p>
                <p className="text-gray-900">{jobdata.requistion_data.position_quantity}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 md:col-span-2">
              <div className="bg-blue-100 p-2 rounded-full mt-1">
                <FiAward className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="font-medium text-gray-700">Skills</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {jobdata.requistion_data.skill_data.map((e, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {e.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 md:col-span-2">
              <div className="bg-blue-100 p-2 rounded-full mt-1">
                <FiBook className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="font-medium text-gray-700">Qualification</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {jobdata.requistion_data.qualification_data.map((e, index) => (
                    <span key={index} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                      {e.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 md:col-span-2">
              <div className="bg-blue-100 p-2 rounded-full mt-1">
                <FiAward className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="font-medium text-gray-700">Position</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {jobdata.requistion_data.position_type_data.map((e, index) => (
                    <span key={index} className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                      {e.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-gray-200 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Ready to apply?</h3>
          <p className="text-gray-700 mb-4">Join our team at B.K.AROGYAM & RESEARCH PRIVATE LIMITED</p>
          <Link href={`/hrm/interested?id=${id}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-3 transition duration-200 transform hover:-translate-y-1 shadow-md">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    )
  );
};

export default Hrm;

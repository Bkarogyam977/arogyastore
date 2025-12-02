"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const page = 1;

  const shuffleArray = (array) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://healdiway.bkarogyam.com/erp-api/arogyam_post/?page=${page}`
        );
        const data = await response.json();
        if (data.results) {
          setBlogs(shuffleArray(data.results.slice(0, 10)));
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto px-4 pt-6 pb-16">
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="font-bold md:text-2xl text-xl text-green-600">Trending Blogs</h2>
        <Link href="/blog/allBlog" className="text-green-600 hover:text-orange-500 transition">
          <p className="font-bold text-sm">View More</p>
        </Link>
      </div>

      <div className="relative">
        <Swiper
          spaceBetween={12}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-blog",
            prevEl: ".swiper-button-prev-blog",
          }}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 10 },
            480: { slidesPerView: 1.6, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 12 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 25 },
          }}
        >
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <Link href={`/blog/${blog.id}?title=${encodeURIComponent(blog.title)}`}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-lime-300 hover:shadow-xl transition-shadow duration-300">
                    
                    {/* Fully responsive image box */}
                    <div className="relative w-full aspect-[4/3] md:aspect-[6/3]">
                      <Image
                        src={`https://healdiway.bkarogyam.com/media/${blog.featured_image}`}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-3">
                      <h3 className="text-sm md:text-base font-semibold text-center text-black line-clamp-2">
                        {blog.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <div className="text-center text-gray-500 p-6">Loading blogs...</div>
          )}
        </Swiper>

        
      </div>
    </div>
  );
}

export { Blogs };





// "use client";
// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import Image from "next/image";
// import Link from "next/link";

// function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const page = 1;

//   // Function to shuffle an array
//   const shuffleArray = (array) => {
//     return array
//       .map((item) => ({ item, sort: Math.random() }))
//       .sort((a, b) => a.sort - b.sort)
//       .map(({ item }) => item);
//   };

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch(
//           `https://healdiway.bkarogyam.com/erp-api/arogyam_post/?page=${page}`
//         );
//         const data = await response.json();
//         if (data.results) {
//           setBlogs(shuffleArray(data.results.slice(0, 10)));
//         }
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <div className="container mx-auto p-2 pt-4 pb-14">
//       <div className="flex flex-row justify-between">
//         <p className="font-bold md:text-2xl text-xl text-green-500 px-4">Trending Blogs</p>
//         <Link href="/blog/allBlog">
//           <p className="font-bold text-sm mt-2 text-green-500 px-4 cursor-pointer">
//             View More
//           </p>
//         </Link>
//       </div>

//       <div className="relative">
//         {/* Swiper Component */}
//         <Swiper
//           spaceBetween={10}
//           breakpoints={{
//             320: { slidesPerView: 2, spaceBetween: 5 },
//             768: { slidesPerView: 2, spaceBetween: 10 },
//             1024: { slidesPerView: 4, spaceBetween: 15 },
//           }}
//         >
//           {blogs.length > 0 ? (
//             blogs.map((blog) => (
//               <SwiperSlide key={blog.id}>
//                 <Link href={`/blog/${blog.id}?title=${encodeURIComponent(blog.title)}`}>
//                   <div className="rounded-xl bg-white m-4 shadow-lg border border-lime-300 cursor-pointer">
//                     <Image
//                       src={`https://healdiway.bkarogyam.com/media/${blog.featured_image}`}
//                       alt={blog.title}
//                       className="p-3 rounded-t-xl"
//                       width={500}
//                       height={300}
//                       layout="intrinsic"
//                     />
//                     <p className="text-sm md:text-lg p-2 font-semibold text-center text-black line-clamp-2">
//                       {blog.title}
//                     </p>
//                   </div>
//                 </Link>
//               </SwiperSlide>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 p-4">Loading blogs...</p>
//           )}
//         </Swiper>
//       </div>
//     </div>
//   );
// }

// export { Blogs };
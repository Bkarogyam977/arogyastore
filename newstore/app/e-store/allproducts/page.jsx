"use client";

import React, { useEffect, useState, useRef } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import noImage from "@/public/images/e-store/No-Image-Placeholder.svg.png";
import { useSearchParams } from "next/navigation";
import { getAPI } from "@/dataarrange/utils/common";
import { useCustContext } from "../provider";
import LoginModal from "./loginmodal";
import { useAppContext } from "@/app/providers";
import { motion } from "framer-motion";

const AllProducts = () => {
  const { customerdata, userdata, loading, error } = useCustContext();
  const { state, cart } = useAppContext();

  const [visibleProducts, setVisibleProducts] = useState(12);
  const [productss, setProductss] = useState([]);
  const [page, setPage] = useState(1);
  const [practice, setPractice] = useState(null);
  const [categoryproduct, setCategoryproduct] = useState([]);
  const [latestproduct, setLatestproduct] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchParams = useSearchParams();
  const practice_id = searchParams.get("practice");
  const category_id = searchParams.get("category_id");

  const getCanonicalUrl = () => {
    const baseUrl = "https://arogyamission.com/e-store/allproducts";
    const params = new URLSearchParams();

    if (practice_id) params.append("practice", practice_id);
    if (category_id) params.append("category_id", category_id);

    return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl;
  };

  const getPractive = () => {
    setIsloading(true);
    let successfn = (data) => {
      const filteredData = data.find((e) =>
        e.name.toLowerCase().includes("online")
      );
      setPractice(() => filteredData);
      setIsloading(false);
    };
    let errorfn = (data) => {
      console.log("error");
    };
    getAPI("clinics", successfn, errorfn);
  };

  const fetchlatestProduct = () => {
    setIsloading(true);
    const succesfn = (data) => {
      setLatestproduct(data.results);
      setIsloading(false);
    };
    const errorfn = (data) => {
      console.log(data);
    };
    getAPI(
      `inventory_item/?practice=${practice.id}&maintain_inventory=true`,
      succesfn,
      errorfn
    );
  };

  useEffect(() => {
    fetchProductcategory();
    getPractive();
  }, []);

  useEffect(() => {
    if (practice) {
      fetchlatestProduct();
    }
  }, [practice]);

  const fetchProductcategory = () => {
    setIsloading(true);
    const successfn = (data) => {
      setCategoryproduct(data);
      setIsloading(false);
    };
    const errorfn = (data) => {
      console.log(data);
      setIsloading(false);
    };
    getAPI("inv_category", successfn, errorfn);
  };

  const observer = useRef();
  const prevcatgoryid = category_id;

  useEffect(() => {
    fetchAllProduct(page);
  }, []);

  useEffect(() => {
    if (prevcatgoryid) {
      fetchAllbycategory(1);
    }
  }, [prevcatgoryid]);

  const fetchAllbycategory = (pageNumber) => {
    if (observer.current) observer.current.disconnect();
    let successFn = function (data) {
      setPage(data.next);
      setProductss((e) => [...data.results]);
    };
    let errorFn = function () {
      console.log("Something went wrong");
    };

    getAPI(
      `inventory_item/?practice=5&page=${pageNumber}&category_id=${
        category_id ?? ""
      }&maintain_inventory=true`,
      successFn,
      errorFn
    );
  };

  useEffect(() => {
    if (isLoading) return;

    const currentObserver = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && page !== null && page > 1) {
          fetchAllProduct(page);
        }
      },
      { rootMargin: "20px" }
    );

    if (observer.current) observer.current.disconnect();
    observer.current = currentObserver;

    const lastProductElement = document.querySelector(".last-product-element");
    if (lastProductElement) {
      observer.current.observe(lastProductElement);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [isLoading, page]);

  const fetchAllProduct = (pageNumber) => {
    if (observer.current) observer.current.disconnect();
    let successFn = function (data) {
      setPage(data.next);
      setProductss((e) => [...e, ...data.results]);
    };
    let errorFn = function () {
      console.log("Something went wrong");
    };

    getAPI(
      `inventory_item/?practice=${practice_id}&page=${pageNumber}&category_id=${
        category_id ?? ""
      }&maintain_inventory=true`,
      successFn,
      errorFn
    );
  };

 const handleAddToCart = (product, tracking_id, domaintracking) => {
  // check if discount available
  const finalPrice =
    product.retail_with_tax_with_discount &&
    product.retail_with_tax_with_discount < product.retail_with_tax
      ? product.retail_with_tax_with_discount
      : product.retail_with_tax;

  cart.addToCart({
    id: product.id,
    name: product.name,
    price: finalPrice, // ✅ yaha ab hamesha correct price jayega
    image: product.thumbnail,
    tracking_id: tracking_id ?? null,
    domaintracking: domaintracking ?? null,
  });
};
  const renderStars = (rating, name) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      practice !== null &&
      practice !== undefined && (
        <div className="flex items-center text-sm lg:text-xl">
          {Array.from({ length: fullStars }, (_, index) => (
            <FaStar
              className="text-sm text-yellow-500"
              key={`${name}-full-${index}`}
            />
          ))}
          {halfStar && (
            <FaStarHalfAlt
              className="text-sm text-yellow-500"
              key={`${name}-half`}
            />
          )}
          {Array.from({ length: emptyStars }, (_, index) => (
            <FaRegStar
              className="text-sm text-yellow-500"
              key={`${name}-empty-${index}`}
            />
          ))}
        </div>
      )
    );
  };

  return (
    <>
      <Head>
        <title>Our Best Ayurvedic Products | Arogyam Mission</title>
        <meta
          name="description"
          content="Browse our collection of authentic Ayurvedic products for holistic health and wellness"
        />
        <link rel="canonical" href={getCanonicalUrl()} />
      </Head>

      <div className="overflow-hidden md:my-16 py-5 md:pt-10">
        <div className="mx-auto md:px-8 lg:px-20 px-2">
          <p className="md:p-10 p-5 text-xl md:text-4xl font-bold">
            Our Best Ayurvedic Products
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {productss.map((product, index) => {
              const hasDiscount =
                product.retail_with_tax > product.retail_with_tax_with_discount;
              const discountPercentage = hasDiscount
                ? Math.round(
                    ((product.retail_with_tax -
                      product.retail_with_tax_with_discount) /
                      product.retail_with_tax) *
                      100
                  )
                : 0;

              return (
                <motion.div
                  key={`${product.id}-${index}`}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col border border-gray-100 relative overflow-hidden"
                >
                  {product.isSpecialOffer && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 animate-pulse">
                      SALE!
                    </div>
                  )}

                  <div
                    className={`absolute md:top-2 top-1 right-0 text-white md:text-xs text-[7px] font-bold px-3 py-1 rounded-full  mr-2 ${
                      hasDiscount
                        ? "bg-gradient-to-r from-green-500 to-blue-600"
                        : "bg-gradient-to-r from-red-500 to-pink-500"
                    }`}
                  >
                    {hasDiscount
                      ? `${discountPercentage}% OFF`
                      : "HOT DEAL"}
                  </div>

                  <Link
                    href={`/e-store/productdetails/${product.id}`}
                    className="block"
                  >
                    <div className="relative aspect-square w-full">
                      <Image
                        src={
                          product.thumbnail
                            ? `https://healdiway.bkarogyam.com/media/${product.thumbnail}`
                            : noImage
                        }
                        alt={product.name}
                        fill
                        className="object-contain p-4 hover:scale-105 transition-transform"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                        onError={(e) => {
                          e.target.src =
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";
                          e.target.style.objectFit = "contain";
                          e.target.style.backgroundColor = "#f3f4f6";
                        }}
                      />
                      <div className="absolute bottom-0 md:bottom-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full ">
                        IN STOCK
                      </div>
                    </div>
                  </Link>

                  <div className="p-3 flex flex-col flex-grow mt-2 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px]">
                      {product.name.split(" ").slice(0, 8).join(" ")}
                    </h3>

                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        <span className="font-bold text-gray-400 text-sm line-through">
                          ₹{Math.trunc(product.retail_with_tax)}
                        </span>
                        <span className="ml-2 font-bold text-green-600 text-lg">
                          ₹{Math.trunc(
                            product.retail_with_tax_with_discount
                          )}
                        </span>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-xs md:text-xl bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:px-5 px-3 py-1 rounded-full shadow-md"
                        onClick={() =>
                          handleAddToCart(
                            product,
                            null,
                            state.domaindata?.id || null
                          )
                        }
                      >
                        Add
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        {isModalOpen && (
          <LoginModal isVisible={isModalOpen} setmodal={setIsModalOpen} />
        )}
      </div>
    </>
  );
};

export default AllProducts;













// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import Link from "next/link";
// import Image from "next/image";
// import noImage from "@/public/images/e-store/No-Image-Placeholder.svg.png";
// import { useSearchParams } from "next/navigation";
// import { getAPI } from "@/dataarrange/utils/common";
// import { useCustContext } from "../provider";
// import LoginModal from "./loginmodal";
// import { useAppContext } from "@/app/providers";
// import { motion } from "framer-motion";


// const AllProducts = () => {
//   const { customerdata, userdata, loading, error } = useCustContext();
//   const { state, cart } = useAppContext();
//   const [visibleProducts, setVisibleProducts] = useState(12);
//   const [productss, setProductss] = useState([]);
//   const [page, setPage] = useState(1);
//   const [practice, setPractice] = useState(null);
//   const [categoryproduct, setCategoryproduct] = useState([]);
//   const [latestproduct, setLatestproduct] = useState([]);
//   const [isLoading, setIsloading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);


//   const getPractive = () => {
//     setIsloading(true);

//     let successfn = (data) => {
//       const filteredData = data.find((e) =>
//         e.name.toLowerCase().includes("online")
//       );

//       console.log(filteredData);

//       setPractice(() => filteredData);

//       setIsloading(false);
//     };
//     let errorfn = (data) => {
//       console.log("error");
//     };

//     getAPI("clinics", successfn, errorfn);
//   };

//   const fetchlatestProduct = () => {
//     setIsloading(true);
//     const succesfn = (data) => {
//       setLatestproduct(data.results);
//       setIsloading(false);
//     };
//     const errorfn = (data) => {
//       console.log(data);
//     };
//     getAPI(
//       `inventory_item/?practice=${practice.id}&maintain_inventory=true`,
//       succesfn,
//       errorfn
//     );
//   };

//   useEffect(() => {
//     fetchProductcategory();
//     getPractive();
//   }, []);

//   useEffect(() => {
//     if (practice) {
//       fetchlatestProduct();
//     }
//   }, [practice]);

//   const fetchProductcategory = () => {
//     setIsloading(true);
//     const successfn = (data) => {
//       setCategoryproduct(data);
//       setIsloading(false);
//     };
//     const errorfn = (data) => {
//       console.log(data);
//       setIsloading(false);
//     };
//     getAPI("inv_category", successfn, errorfn);
//   };

//   const observer = useRef();
//   const searchParams = useSearchParams();
//   const search = searchParams.get("practice");
//   const catgoryid = searchParams.get("category_id");
//   const prevcatgoryid = catgoryid;

//   useEffect(() => {
//     fetchAllProduct(page);
//   }, []);

//   useEffect(() => {
//     return fetchAllbycategory(1);
//   }, [prevcatgoryid]);

//   const fetchAllbycategory = (pageNumber) => {
//     if (observer.current) observer.current.disconnect();
//     let successFn = function (data) {
//       setPage(data.next);
//       setProductss((e) => [...data.results]);
//     };
//     let errorFn = function () {
//       console.log("Something went wrong");
//     };

//     getAPI(
//       `inventory_item/?practice=${search}&page=${pageNumber}&category_id=${catgoryid ?? ""
//       }&maintain_inventory=true`,
//       successFn,
//       errorFn
//     );
//   };

//   useEffect(() => {
//     if (isLoading) return;

//     const currentObserver = new IntersectionObserver(
//       (entries) => {
//         const first = entries[0];
//         if (first.isIntersecting && page !== null && page > 1) {
//           fetchAllProduct(page);
//         }
//       },
//       {
//         rootMargin: "20px"
//       }
//     );

//     if (observer.current) observer.current.disconnect();
//     observer.current = currentObserver;

//     const lastProductElement = document.querySelector(".last-product-element");
//     if (lastProductElement) {
//       observer.current.observe(lastProductElement);
//     }
//   }, [isLoading, page]);

//   const fetchAllProduct = (pageNumber) => {
//     if (observer.current) observer.current.disconnect();
//     let successFn = function (data) {
//       setPage(data.next);
//       setProductss((e) => [...e, ...data.results]);
//     };
//     let errorFn = function () {
//       console.log("Something went wrong");
//     };

//     getAPI(
//       `inventory_item/?practice=${search}&page=${pageNumber}&category_id=${catgoryid ?? ""
//       }&maintain_inventory=true`,
//       successFn,
//       errorFn
//     );
//   };

//   const handleAddToCart = (product, tracking_id, domaintracking) => {
//     cart.addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.retail_with_tax,
//       image: product.thumbnail,
//       tracking_id: tracking_id ?? null,
//       domaintracking: domaintracking ?? null
//     });
//   };

//   const renderStars = (rating, name) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       (practice !== null) & (practice !== undefined) &&
//       props.latestproduct && (
//         <div className="flex items-center text-sm lg:text-xl">
//           {Array.from({ length: fullStars }, (_, index) => (
//             <FaStar
//               className="text-sm text-yellow-500"
//               key={`${name}-full-${index}`}
//             />
//           ))}
//           {halfStar && (
//             <FaStarHalfAlt
//               className="text-sm text-yellow-500"
//               key={`${name}-half`}
//             />
//           )}
//           {Array.from({ length: emptyStars }, (_, index) => (
//             <FaRegStar
//               className="text-sm text-yellow-500"
//               key={`${name}-empty-${index}`}
//             />
//           ))}
//         </div>
//       )
//     );
//   };

//   return (
//     <div className="overflow-hidden md:my-16 py-5 md:pt-10">
//       <div className="mx-auto md:px-40 px-2">
//         <p className="md:p-10 p-5 text-xl md:text-4xl font-bold">
//           Our Best Ayurvedic Products
//         </p>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
//           {productss.map((product, index) => (
//             <motion.div
//               key={`${product.name}-${index}`}
//               whileHover={{ y: -5 }}
//               className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col border border-gray-100 relative overflow-hidden"
//             >
//               {/* Special Offer Tag */}
//               {product.isSpecialOffer && (
//                 <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 animate-pulse">
//                   SALE!
//                 </div>
//               )}


//               {/* Hot Deal Tag */}
//               <div className="absolute md:top-1 top-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white md:text-xs text-[7px] font-bold px-2 py-0 rounded-full z-10">
//                 HOT DEAL
//               </div>
//               {/* Product Image */}
//               <Link href={`/e-store/productdetails/${product.id}`} className="block">
//                 <div className="relative aspect-square w-full">
//                   <Image
//                     src={product.thumbnail ?
//                       `https://healdiway.bkarogyam.com/media/${product.thumbnail}` :
//                       noImage}
//                     alt={product.name}
//                     fill
//                     className="object-contain p-4 hover:scale-105 transition-transform"
//                     sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                     placeholder="blur"
//                     blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
//                     onError={(e) => {
//                       e.target.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';
//                       e.target.style.objectFit = 'contain';
//                       e.target.style.backgroundColor = '#f3f4f6';
//                     }}
//                   />
//                   {/* In Stock Tag */}
//                   <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
//                     IN STOCK
//                   </div>
//                 </div>
//               </Link>

//               {/* Product Info */}
//               <div className="p-3 flex flex-col flex-grow">
//                 <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px]">
//                   {product.name.split(" ").slice(0, 8).join(" ")}
//                 </h3>


//                 <div className="mt-auto flex items-center justify-between">
//                   <div>
//                     <span className="font-bold text-green-600 text-lg">
//                       ₹{product.retail_with_tax}
//                     </span>
//                     {product.originalPrice && (
//                       <span className="ml-1 text-xs text-gray-400 line-through">
//                         ₹{product.originalPrice}
//                       </span>
//                     )}
//                   </div>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="text-xs bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-3 py-1 rounded-full shadow-md"
//                     onClick={() => {handleAddToCart(product, null, state.domaindata !== null || state.domaindata ? state.domaindata.id : null)}}
//                   >
//                     Add
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       {isModalOpen && <LoginModal isVisible={isModalOpen} setmodal={setIsModalOpen} />}
//     </div>
//   );
// };

// export default AllProducts;
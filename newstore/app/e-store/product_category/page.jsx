"use client";
import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Discover_Our_Products from "./products_categories_swiper_menu";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { getAPI } from "@/dataarrange/utils/common";
import noImage from '@/public/images/e-store/No-Image-Placeholder.svg.png'
import { Button } from "@nextui-org/react";

const products = [
  {
    id: 1,
    name: "Kidney Nagarjun BP Package",
    sellingPrice: "Rs 2,100",
    offPrice: "Rs 2,800",
    image: "/images/e-store/productcategory/Nagarjun Package BP-200x200.png",
    rating: 4.0,
    reviews: 2015,
  },
  {
    id: 2,
    name: "Liver Care Package",
    sellingPrice: "Rs 2,800",
    offPrice: "Rs 3,500",
    image: "/images/e-store/productcategory/Paramshakti 200ml -262x262.png",
    rating: 4.0,
    reviews: 200,
  },
  {
    id: 3,
    name: "NARI CARE PACKAGE",
    sellingPrice: "Rs 2,800",
    offPrice: "Rs 3,500",
    image: "/images/e-store/productcategory/NARI CARE-262x262.jpg",
    rating: 4.5,
    reviews: 100,
  },
  {
    id: 4,
    name: "SKIN CARE PACKAGE",
    sellingPrice: "Rs 2,800",
    offPrice: "Rs 3,500",
    image: "/images/e-store/productcategory/SKIN CARE-262x262.png",
    rating: 4.5,
    reviews: 500,
  },
  {
    id: 5,
    name: "SHILAJIT TABLET",
    sellingPrice: "Rs 70.00",
    offPrice: "Rs 399.00",
    image: "/images/e-store/productcategory/Shilajit 30 Tab-262x262.png",
    rating: 4.5,
    reviews: 150,
  },
  {
    id: 6,
    name: "Slim Green Tea Tablet for Men & Women | Weight Loss & Fitness Support",
    sellingPrice: "Rs 799.00",
    offPrice: "Rs 1500.00",
    image: "/images/e-store/productcategory/slim-262x262.jpg",
    rating: 4.0,
    reviews: 280,
  },
  {
    id: 7,
    name: "Paramshakti Syrup 200ml",
    sellingPrice: "Rs 300.00",
    offPrice: "Rs 899.00",
    image: "/images/e-store/productcategory/Paramshakti 200ml -262x262.png",
    rating: 4.5,
    reviews: 168,
  },
  {
    id: 8,
    name: "Green Tea Tablet Weight Loss Improve Immunity Unflavoured Pack of 3",
    sellingPrice: "Rs 1797.00",
    offPrice: "Rs 2699.00",
    image: "/images/e-store/productcategory/17-200x200.png",
    rating: 4.0,
    reviews: 286,
  },
  {
    id: 9,
    name: "Kidney Basic Diabetes Package",
    sellingPrice: "Rs 11,000",
    offPrice: "Rs 14999",
    image: "/images/e-store/productcategory/Basic Package Diabetes-200x200.png",
    rating: 4.5,
    reviews: 356,
  },
];

const Product_Category1 = () => {
  const searchParams = useSearchParams()
 
  const productname = searchParams.get('productname')
  const practice = searchParams.get('practice')
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const [catproduct, setCatproduct] = useState([])
  const [current, setCurrent] = useState(null)
  const [next, setNext ] = useState(null)

  useEffect(() =>{
      if(practice){
        fetchbycatProduct(1 ,practice)
      }
  },[practice])


  const fetchbycatProduct = (page=1, practice) => {
   
    const successfn = (data) =>{
      setNext(data.next)
      setCurrent(data.current)
      if(page === 1){
          setCatproduct(data.results)
      }
      else{
        
        setCatproduct(e => [...e, ...data.results])
      }

    }
    const errorfn = (data) =>{

      console.log('something went wrong in product category ')

    }
    getAPI(`inventory_item/?item_name=${productname}&practice=${practice}&page=${page}`, successfn, errorfn)
  }

  const goToPage = (page) => {
    setCurrentPage(page);
    setVisibleProducts(page * productsPerPage);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <FaStar className="text-yellow-500" key={index} />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <FaRegStar className="text-yellow-500" key={index} />
          ))}
      </div>
    );
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-3 py-1 mx-1 rounded-lg ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center space-x-4">
        {currentPage > 1 && (
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="px-3 py-1 rounded-lg bg-blue-500 text-white"
          >
            Previous
          </button>
        )}
        {pageNumbers}
        {currentPage < totalPages && (
          <button
            onClick={() => goToPage(currentPage + 1)}
            className="px-3 py-1 rounded-lg bg-blue-500 text-white"
          >
            Next
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto my-5">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {catproduct.map((product, index) => (
            <div key={`${product.name} + ${index.toString()}`} className={`bg-white p-2 rounded-xl flex flex-col flex-grow justify-between shadow-md text-center relative ${index === catproduct.length - 1? 'last-product-element' : ''} `}>

              <div className=''>
              <Link href={`/e-store/productdetails/${product.id}`}>
                <div className="flex justify-center items-center p-2">
                 {product.thumbnail !== null && product.thumbnail !== '' ? <Image  src={`https://healdiway.bkarogyam.com/media/${product.thumbnail}`} alt={noImage} width={150} height={50} className="object-cover rounded-t-lg cursor-pointer transition-transform hover:scale-150" /> : <Image src={noImage} alt={'no Image'} width={150} height={50} className="object-cover rounded-t-lg cursor-pointer transition-transform hover:scale-150"  />} 
                </div>
              </Link>

              </div>

              <div className='flex flex-col '>
                <div className='flex h-[30px] text-ellipsis overflow-hidden'>

              <div className="   text-sm   lg:text-xl font-semibold">{product.name}</div>
                </div>

              <div className='flex flex-row items-center justify-between'>

              <h2 className="text-green-600 font-bold"> &#x20B9;{product.retail_with_tax}</h2>
              <div className=" flex justify-center items-center space-x-2 text-xm lg:text-xl">
                {renderStars(Math.floor(Math.random() * 5) + 1, `${product.id}`)}
                <span className="text-gray-600 text-sm md:text-sm lg:xl">({Math.floor(Math.random() * 10) + 1} reviews)</span>
              </div>
              </div>

              <Button className='flex w-full  mt-3' >
              <Link href={`/e-store/productdetails/${product.id}`}>
                  Add to Cart
                </Link>
              </Button>
              </div>


              {/* <div className="mt-2 flex justify-center items-center space-x-2">
                <p className="text-red-600 font-bold">{product.sellingPrice}</p>
                <p className="text-gray-600 line-through">{product.offPrice}</p>
                <Link href={`/e-store/productdetails/${product.id}`}>
                  <button className="bg-orange-900 text-white px-4 py-2 rounded-lg">Buy Now</button>
                </Link>
              </div> */}
            </div>
          ))}
        </div>

    <div className="flex mx-auto justify-center my-5">

     {next  && <Button onClick={() => fetchbycatProduct(current + 1, practice)}>Load More</Button> }
    </div>
    </div>
  );
};

export default Product_Category1;

"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

const RupamProduct = ({ categoryproduct, practice }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (categoryproduct && practice) {
      const category = categoryproduct.find((e) => e.name.includes("Skin & Hair Care"));
      if (category) {
        fetchCategoryProducts(category.id, practice.id);
      }
    }
  }, [categoryproduct, practice]);

  const fetchCategoryProducts = (category_id, practice_id) => {
    fetch(
      `https://healdiway.bkarogyam.com/api/inventory_item/?category_id=${category_id}&practice=${practice_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.results.slice(0, 10)); // Limit to 10 products
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  if (!productList.length) return null; // Return nothing if no products

  return (
    <div className="md:hidden w-full bg-white py-5">
      <h2 className="text-lg font-bold mb-3">💆 Skin & Hair Care</h2>

      <Swiper spaceBetween={10} slidesPerView={2} className="px-3">
        {productList.map((product) => (
          <SwiperSlide key={product.id}>
            <Link href={`/e-store/productdetails/${product.id}`}>
              <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-2">
                <Image
                  src={`https://healdiway.bkarogyam.com/media/${product.thumbnail}`}
                  width={100}
                  height={120}
                  alt={product.name}
                  className="w-24 h-28 object-cover rounded"
                />
                <p className="text-xs font-semibold mt-1 text-center truncate w-full">{product.name}</p>
                <p className="text-sm font-bold text-green-600">₹{product.retail_with_tax}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RupamProduct;

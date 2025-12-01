"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAPI } from "@/dataarrange/utils/common";

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    const successFn = (data) => {
      setCategories(data);
    };
    const errorFn = (err) => {
      console.error("API Error:", err);
    };
    getAPI("inv_category", successFn, errorFn);
  };

  return (
    <div className="w-full p-5 md:p-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Product Categories
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
        {categories.slice(0, showAll ? categories.length : 12).map((category, index) => (
          <Link key={index} href={`/e-store/allproducts/?category_id=${category.id}`}>
            <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
              <Image
                src={`https://healdiway.bkarogyam.com/media/${category.image}`}
                alt={category.name}
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
              <p className="mt-3 text-center text-sm md:text-lg font-semibold">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>

      {!showAll && categories.length > 12 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};


export default ProductCategories;

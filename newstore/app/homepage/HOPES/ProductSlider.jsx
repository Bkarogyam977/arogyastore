"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const ProductSlider = ({ categoryId, title }) => {
  const [products, setProducts] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [showNavigation, setShowNavigation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Responsive Slider Setup
  useEffect(() => {
    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setSlidesPerView(5);
        setShowNavigation(true);
      } else if (screenWidth >= 768) {
        setSlidesPerView(3);
        setShowNavigation(true);
      } else {
        setSlidesPerView(2);
        setShowNavigation(false);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  // Fetch Products Data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://healdiway.bkarogyam.com/erp-api/inventory_item/?practice=5&page=1&category_id=${categoryId}&maintain_inventory=true`
        );
        setProducts(response.data?.results || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  // Navigate to Product Details
  const goToProductDetails = (productId) => {
    window.location.href = `/e-store/productdetails/${productId}`;
  };

  // Handle Loading and Error States
  if (loading) return <p className="text-center text-blue-500">Loading Products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (products.length === 0) return <p className="text-center text-gray-500">No products found.</p>;

  return (
    <div className="p-6 rounded-lg shadow-md">
      {/* Product Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={showNavigation}
        spaceBetween={20}
        slidesPerView={slidesPerView}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id || product.name}>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">

              <Image
                src={`https://healdiway.bkarogyam.com/media/${product.thumbnail}`}
                alt={product.name}
                width={500} 
                height={160}
                className="w-full h-40 object-contain mb-4 cursor-pointer"
                onClick={() => goToProductDetails(product.id)}
              />
              {/* Product Name */}
              <h3 className="text-sm md:text-lg font-semibold text-gray-700 min-h-[80px]">
                {product.name}
              </h3>

              {/* Price & Buy Now Button (Aligned) */}
              <div className="flex flex-row justify-between items-center">
                <p className="text-green-600 font-bold text-1xl">
                  ₹{product.retail_with_tax}
                </p>
                {/* ✅ Clickable Buy Now Button */}
                <button
                  onClick={() => goToProductDetails(product.id)}
                  className="bg-green-500 text-white px-1 py-1 rounded-lg hover:bg-green-600 transition-all"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;

"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";
import AddtoCartproduct from "./addtocartfn";
import { useCustContext } from "./provider";
import LoginModal from "./allproducts/loginmodal";
import { useAppContext } from "@/app/providers";
import { motion } from "framer-motion";

function TopSellingProducts(props) {
  const { customerdata, userdata, loading, error } = useCustContext();
  const { state, cart } = useAppContext();
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [practice, setPractice] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product, tracking_id, domaintracking) => {
    const originalPrice = parseFloat(product.retail_with_tax);
    const discountedPrice = parseFloat(product.retail_with_tax_with_discount);

    const finalPrice =
      discountedPrice && discountedPrice < originalPrice
        ? discountedPrice
        : originalPrice;

    cart.addToCart({
      id: product.id,
      name: product.name,
      price: finalPrice, // ✅ Only final price is used
      mrp: originalPrice, // ✅ Optional: store original MRP separately
      image: product.thumbnail,
      tracking_id: tracking_id ?? null,
      domaintracking: domaintracking ?? null,
    });
  };

  useEffect(() => {
    setPractice(props.practice);
  }, [props.practice]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Mobile
        setIsMobile(true);
        setSlidesPerView(2);
      } else if (width >= 640 && width < 1024) {
        // Tablet
        setIsMobile(false);
        setSlidesPerView(2);
      } else {
        // Desktop
        setIsMobile(false);
        setSlidesPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //test to re build

  const handleWhatsAppShare = (product) => {
    const message = `Check out this product: ${product.name} - ${window.location.origin}/e-store/productdetails/${product.id}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (!practice || !props.latestproduct || props.latestproduct.length === 0)
    return null;

  return (
    <div className="w-full md:my-10 py-5">
      <div className="md:px-10 px-2">
        {/* Header */}
        <div className="flex flex-row flex-wrap justify-between items-center mb-8 gap-4 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                Top Selling Products
              </span>
            </h2>
            <p className="text-gray-500 mt-1 sm:mt-2">Most Loved by Shoppers</p>
          </motion.div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`e-store/allproducts/?practice=${practice.id}`}
            className="md:px-20 px-8 md:py-1 md:text-xl bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            See All
          </motion.a>
        </div>

        {/* Products Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation]}
            navigation={!isMobile}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            className="pb-12"
          >
            {props.latestproduct.map((product) => {
              const originalPrice = parseFloat(product.retail_with_tax);
              const discountedPrice = parseFloat(
                product.retail_with_tax_with_discount
              );
              const hasDiscount =
                discountedPrice && discountedPrice < originalPrice;

              const discountPercentage = hasDiscount
                ? Math.round(
                    ((originalPrice - discountedPrice) / originalPrice) * 100
                  )
                : 0;

              return (
                <SwiperSlide key={product.id}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden relative h-full flex flex-col"
                  >
                    {/* Special Offer Tag */}
                    {product.isSpecialOffer && (
                      <div className="absolute top-1 lg:top-2 right-1 lg:right-2 bg-red-500 text-white text-xs font-bold px-1 lg:px-2 py-0.5 lg:py-1 rounded-full z-10 animate-pulse">
                        SALE!
                      </div>
                    )}

                    {/* Conditional Hot Deal / Discount Tag */}
                    <div
                      className={`absolute md:top-2 top-1 right-0 text-white md:text-xs text-[7px] font-bold px-3 py-1 rounded-full z-10 mr-2 ${
                        hasDiscount
                          ? "bg-gradient-to-r from-green-500 to-blue-600"
                          : "bg-gradient-to-r from-red-500 to-pink-500"
                      }`}
                    >
                      {hasDiscount ? `${discountPercentage}% OFF` : "HOT DEAL"}
                    </div>
                    <Link
                      href={`/e-store/productdetails/${product.id}`}
                      className="flex flex-col h-full"
                    >
                      <div className="relative aspect-square top-4 mb-5 ">
                        <Image
                          src={
                            product.thumbnail
                              ? `https://healdiway.bkarogyam.com/media/${product.thumbnail}`
                              : "/images/e-store/combo2.png"
                          }
                          alt={product.name}
                          fill
                          className="object-cover "
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
                        {/* In Stock Tag */}
                        <div className="absolute bottom-0 lg:bottom-0 mt-3 left-1 lg:left-2 bg-green-500 text-white text-xs font-bold px-1 lg:px-2 py-0.5 lg:py-1 rounded-full z-10">
                          IN STOCK
                        </div>
                      </div>
                      <div className="p-2 lg:p-4 flex-grow flex flex-col">
                        <h3 className="font-medium text-gray-900 truncate text-sm lg:text-base">
                          {product.name}
                        </h3>
                        <p
                          className="text-gray-500 text-xs lg:text-sm mt-1 line-clamp-2"
                          dangerouslySetInnerHTML={{
                            __html: product.description,
                          }}
                        />
                        <div className="lg:mt-3 flex items-center justify-between mt-auto">
                          <span className="font-bold text-sm lg:text-base">
                            {hasDiscount ? (
                              <>
                                <span className="text-gray-400 line-through">
                                  ₹{originalPrice.toFixed(2)}
                                </span>
                                <span className="ml-2 text-green-900">
                                  ₹{discountedPrice.toFixed(2)}
                                </span>
                              </>
                            ) : (
                              <span className="text-blue-600">
                                ₹{originalPrice.toFixed(2)}
                              </span>
                            )}
                          </span>



                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-2 md:mt-3 lg:mt-0 text-xs md:text-base md:font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 lg:px-4 py-1 md:py-1 rounded-full transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              handleAddToCart(
                                product,
                                null,
                                state.domaindata
                                  ? state.domaindata.id
                                  : null
                              );
                            }}
                          >
                            Add
                          </motion.button>
 
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>

      {/* Login Modal */}
      {isModalOpen && (
        <LoginModal isVisible={isModalOpen} setmodal={setIsModalOpen} />
      )}
    </div>
  );
}

export default TopSellingProducts;

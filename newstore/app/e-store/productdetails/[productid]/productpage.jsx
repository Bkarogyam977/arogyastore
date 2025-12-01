"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Modal } from "antd";
import { FaTruck, FaEye } from "react-icons/fa";

import {
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaShare,
  FaHeart,
  FaExpand,
  FaChevronLeft,
  FaChevronRight,
  FaShoppingCart,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FiPackage, FiCheckCircle } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useAppContext } from "@/app/providers";
import CustomerReviews from "../customer_reviews";
import TopSellingProducts from "../../topsellingproducts";
import Offers from "../product_details";
import Discover_Our_Products from "../../product_category/products_categories_swiper_menu";
import { getAPI } from "@/dataarrange/utils/common";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import CatalogImage from "../AplusComponent";
import YouTubeVideo from "../YutubeVideoComponent";

const ProductPage = ({ params }) => {
  const searchparam = useSearchParams();
  const tokendata = searchparam.get("tokendata");
  const { state, cart } = useAppContext();
  const [productdetails, setProductdetails] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [image, setImage] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tracking_data, setTrackingdata] = useState(null);
  const [viewers, setViewers] = useState(64);

  // Dummy rating data (UI ke liye)
  const product = {
    rating: 4.5,
    reviews: 105,
    ratings: [81, 1, 1, 0, 2],
  };

  const discountedPrice =
    productdetails?.retail_with_tax_with_discount ?? 0;
  const originalPrice = productdetails?.retail_with_tax ?? 0;
  const discountPercentage =
    originalPrice > 0
      ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
      : 0;

  // ✅ Meta Pixel: VIEWCONTENT EVENT (jab product load ho jaye)
  useEffect(() => {
    if (!productdetails) return;

    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      const idForPixel = productdetails.sku ?? productdetails.id;

      window.fbq("track", "ViewContent", {
        content_type: "product",
        content_ids: [String(idForPixel)], // SKU ya ID, dono me se jo mile
        value: Number(
          productdetails.retail_with_tax_with_discount ??
            productdetails.retail_with_tax ??
            0
        ),
        currency: "INR",
        content_name: productdetails.name,
      });
      // console.log("Meta Pixel ViewContent fired", productdetails);
    }
  }, [productdetails]);

  // Data fetch
  useEffect(() => {
    fetchSingleProduct(params);
    if (tokendata) fetchaffiliate(tokendata);
  }, [params, tokendata]);

  const fetchaffiliate = (trackingid) => {
    const successfn = (data) => setTrackingdata(data[0]);
    const errorfn = () => {};
    getAPI(`affiliate_product/?tracking_id=${trackingid}`, successfn, errorfn);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1; // 1 to 100
      setViewers(randomNumber);
    }, 3000); // har 3 second me update

    return () => clearInterval(interval);
  }, []);

  const fetchSingleProduct = (product_id) => {
    const successfn = (data) => {
      setProductdetails(data);
      setImage([{ image: data.thumbnail }, ...(data.image_data || [])]);
    };
    const errorfn = (err) => console.error(`Error fetching product: ${err}`);
    getAPI(`inventory_item/${product_id}/`, successfn, errorfn);
  };

  // ✅ Meta Pixel: ADD TO CART EVENT (button click par)
  const handleAddToCart = () => {
    if (!productdetails) return;

    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      const idForPixel = productdetails.sku ?? productdetails.id;

      window.fbq("track", "AddToCart", {
        content_ids: [String(idForPixel)],
        content_type: "product",
        value: Number(
          productdetails.retail_with_tax_with_discount ??
            productdetails.retail_with_tax ??
            0
        ),
        currency: "INR",
        content_name: productdetails.name,
      });
      // console.log("Meta Pixel AddToCart fired", productdetails);
    }

    // ✅ Yahan tum apna real cart logic laga sakte ho
    // Example (agar context me koi addToCart fn ho):
    // state?.addToCart?.(productdetails);
    console.log("Product added to cart (UI only):", productdetails);
  };

  // Star rating render
  const renderStars = () => {
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar className="text-yellow-400 w-4 h-4" key={`full-${i}`} />
        ))}
        {hasHalfStar && (
          <FaStarHalfAlt className="text-yellow-400 w-4 h-4" key="half" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar className="text-yellow-400 w-4 h-4" key={`empty-${i}`} />
        ))}
        <span className="ml-2 text-gray-600 text-sm">
          {product.rating.toFixed(1)} ({product.reviews} reviews)
        </span>
      </div>
    );
  };

  // Loading state
  if (!productdetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  const paymentMethods = [
    { name: "UPI", src: "/images/upi.png" },
    { name: "Visa", src: "/images/visa.png" },
    { name: "MasterCard", src: "/images/mastercard.webp" },
    { name: "PayPal", src: "/images/paypal.jpg" },
    { name: "Paytm", src: "/images/paytm.webp" },
    { name: "Google Pay", src: "/images/PayU.jpg" },
  ];

  return (
    <div className="bg-gray-50 md:mt-16 pt-3">
      {/* Main Product Section */}
      <div className="container mx-auto px-4  lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Gallery Column */}
          <div className="lg:w-1/2">
            <div className="sticky top-6">
              {/* Main Image */}
              <div className="relative bg-white rounded-xl overflow-hidden mb-4 aspect-square border border-gray-200 shadow-sm">
                <Swiper
                  style={{ "--swiper-navigation-color": "#3b82f6" }}
                  spaceBetween={10}
                  initialSlide={activeImageIndex}
                  onSlideChange={(swiper) =>
                    setActiveImageIndex(swiper.activeIndex)
                  }
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="h-full w-full rounded-xl"
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                >
                  {image.map((e, i) => (
                    <SwiperSlide
                      key={i}
                      className="flex items-center justify-center bg-white"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          onClick={() => {
                            setIsModalOpen(true);
                          }}
                          src={`https://healdiway.bkarogyam.com/media/${e.image}`}
                          alt={productdetails.name}
                          fill
                          className="object-contain p-8 cursor-zoom-in hover:scale-105 transition-transform duration-300"
                          quality={100}
                          priority={i === 0}
                        />
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition"
                        >
                          <FaExpand className="text-gray-600" />
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}

                  {/* Custom Navigation Arrows */}
                  <div className="swiper-button-prev bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition">
                    <FaChevronLeft className="text-gray-700" />
                  </div>
                  <div className="swiper-button-next bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition">
                    <FaChevronRight className="text-gray-700" />
                  </div>
                </Swiper>

                {/* Wishlist button */}
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`absolute top-4 right-4 p-3 rounded-full ${
                    isWishlisted
                      ? "bg-red-50 text-red-500"
                      : "bg-white text-gray-600"
                  } shadow-lg hover:bg-gray-50 transition z-10`}
                >
                  <FaHeart
                    className={isWishlisted ? "fill-current animate-pulse" : ""}
                  />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="mt-4 px-2">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={12}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="thumbnail-gallery"
                >
                  {image.map((e, i) => (
                    <SwiperSlide
                      key={i}
                      className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIndex === i
                          ? "border-blue-500 scale-105"
                          : "border-transparent hover:border-gray-200"
                      }`}
                      onClick={() => setActiveImageIndex(i)}
                    >
                      <div className="aspect-square bg-gray-100 relative group">
                        <Image
                          src={`https://healdiway.bkarogyam.com/media/${e.image}`}
                          alt={`Thumbnail ${i}`}
                          fill
                          className="object-cover group-hover:opacity-90 transition"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Product Details Column */}
          <div className="lg:w-1/2">
            <div className="space-y-6">
              {/* Product Title and Rating */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h1 className=" text-xl md:text-3xl font-bold text-gray-900">
                  {productdetails.name}
                </h1>

                {/* Rating (optional) */}
                {/* <div className="mt-3 flex items-center">
                  {renderStars()}
                  <button className="ml-4 flex items-center text-sm text-gray-500 hover:text-blue-600 transition">
                    <FaShare className="mr-1" /> Share
                  </button>
                </div> */}

                <div className="mt-4 flex items-center text-gray-600">
                  <FaTruck className="text-green-600 mr-2 text-lg md:text-xl" />
                  <span className="text-md md:text-xl font-semibold">
                    Get Delivery in 3–5 Working Days
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <p className="text-2xl font-bold text-blue-600">
                    ₹{Math.round(
                      productdetails.retail_with_tax_with_discount ??
                        productdetails.retail_with_tax ??
                        0
                    )}
                  </p>
                  {productdetails.retail_with_tax && (
                    <p className="text-gray-400 line-through">
                      ₹{Math.round(productdetails.retail_with_tax)}
                    </p>
                  )}
                  {discountPercentage > 0 && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                      Save{" "}
                      {Math.round(
                        (productdetails.retail_with_tax || 0) -
                          (productdetails.retail_with_tax_with_discount || 0)
                      )}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center text-gray-600">
                  <FaEye className="text-blue-600 mr-2 text-lg md:text-xl" />
                  <span className="text-md md:text-xl font-semibold">
                    {viewers} people are viewing this right now
                  </span>
                </div>

                {/* ✅ Add to Cart Button (Meta Pixel event yahin se fire hoga) */}
                <button
                  onClick={handleAddToCart}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition duration-300"
                >
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>

              {/* Price and Offer Section */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <Offers
                  product_id={params}
                  tokendata={tokendata}
                  productdetail={productdetails}
                />
              </div>

              {/* Product Highlights */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Product Highlights
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <FiPackage className="text-blue-500 mr-2" />
                    <span className="text-gray-600">Fast Shipping</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-2" />
                    <span className="text-gray-600">Authentic Product</span>
                  </div>
                  <div className="flex items-center">
                    <BsShieldCheck className="text-amber-500 mr-2" />
                    <span className="text-gray-600">
                      Play Store Availability
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaWhatsapp className="text-green-500 mr-2" />
                    <span className="text-gray-600">24/7 Support</span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Features
                </h2>
                <div
                  className="prose prose-sm text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: productdetails.short_description,
                  }}
                />
              </div>

              {/* Product Description */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Product Details
                </h2>
                <div
                  className="prose text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: productdetails.description,
                  }}
                />
              </div>

              {productdetails.video_url && (
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Product Video
                  </h2>
                  <YouTubeVideo videoIdOrUrl={productdetails.video_url} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* APlus Catalog Image */}
      <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-1  gap-4 p-4">
          {productdetails.aimage_data?.map((product) => (
            <div
              key={product.id}
              className="relative w-full group overflow-hidden rounded-lg transition-all duration-300 hover:shadow-md"
            >
              <CatalogImage
                imageUrl={product.image}
                altText={product.name}
                size="md"
                onClick={() => console.log("Add to catalog", product.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="bg-white md:py-12 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <CustomerReviews />
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white py-4 md:py-8 mb-16 md:mb-4">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center">
            We Accept
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className=" w-12 h-8 md:w-20 md:h-12 relative flex items-center justify-center p-2 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={method.src}
                  alt={method.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width="90%"
        centered
        className="product-image-modal"
      >
        <div className="relative w-full h-[80vh]">
          <Image
            className="object-contain w-full h-full"
            src={`https://healdiway.bkarogyam.com/media/${
              image[activeImageIndex]?.image
            }`}
            alt="Product Image"
            fill
            quality={100}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ProductPage;

"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import { useCustContext } from "../provider";
import AddtoCartproduct from "../addtocartfn";
import LoginModal from "../allproducts/loginmodal";
import { useAppContext } from "@/app/providers";
import { motion } from "framer-motion";

const PRODUCTS_PER_CATEGORY = 10;
const INITIAL_LOAD_COUNT = 3;
const LOAD_MORE_COUNT = 2;

const SubcategoryProductView = ({ practice }) => {
  const { userdata } = useCustContext();
  const { state, cart } = useAppContext();
  const [subcategories, setSubcategories] = useState([]);
  const [productsBySubcategory, setProductsBySubcategory] = useState({});
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [loadedCategoriesCount, setLoadedCategoriesCount] =
    useState(INITIAL_LOAD_COUNT);
  const [allCategoriesLoaded, setAllCategoriesLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  // Fetch subcategories
  useEffect(() => {
    if (!practice) return;

    const fetchCategories = async () => {
      try {
        const categoriesRes = await fetch(
          "https://healdiway.bkarogyam.com/erp-api/inv_category"
        );
        const categoriesData = await categoriesRes.json();
        const subcats = categoriesData.filter((cat) => cat.parent_id !== null);
        setSubcategories(subcats);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [practice]);

  // Fetch products for visible categories
  useEffect(() => {
    if (!practice || subcategories.length === 0) return;

    const fetchProductsForVisibleCategories = async () => {
      const isInitialLoad = Object.keys(productsBySubcategory).length === 0;
      if (isInitialLoad) {
        setLoadingInitial(true);
      } else {
        setLoadingMore(true);
      }

      try {
        const categoriesToLoad = subcategories.slice(0, loadedCategoriesCount);
        const newProductsBySubcategory = { ...productsBySubcategory };

        for (const subcat of categoriesToLoad) {
          if (!newProductsBySubcategory[subcat.id]) {
            const productsRes = await fetch(
              `https://healdiway.bkarogyam.com/erp-api/inventory_item/?practice=${practice.id}&category_id=${subcat.id}&page_size=${PRODUCTS_PER_CATEGORY}&maintain_inventory=true`
            );
            const productsData = await productsRes.json();
            newProductsBySubcategory[subcat.id] = productsData.results.slice(
              0,
              PRODUCTS_PER_CATEGORY
            );
          }
        }

        setProductsBySubcategory(newProductsBySubcategory);

        if (loadedCategoriesCount >= subcategories.length) {
          setAllCategoriesLoaded(true);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoadingInitial(false);
        setLoadingMore(false);
      }
    };

    fetchProductsForVisibleCategories();
  }, [practice, subcategories, loadedCategoriesCount]);

  // Handle scroll and load more categories when near bottom
  useEffect(() => {
    if (allCategoriesLoaded || loadingMore) return;

    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const threshold = document.documentElement.offsetHeight - 500;

      if (scrollPosition >= threshold) {
        setLoadedCategoriesCount((prev) =>
          Math.min(prev + LOAD_MORE_COUNT, subcategories.length)
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [subcategories.length, allCategoriesLoaded, loadingMore]);

  // Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        // Mobile
        setSlidesPerView(1.5);
      } else if (width < 1024) {
        // Tablet
        setSlidesPerView(2);
      } else {
        // Desktop
        setSlidesPerView(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // run once on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loadingInitial && Object.keys(productsBySubcategory).length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-2">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="w-full md:my-10 py-5">
      {subcategories.slice(0, loadedCategoriesCount).map((subcategory) => {
        const products = productsBySubcategory[subcategory.id] || [];
        if (products.length === 0) return null;

        return (
          <div key={subcategory.id} className="mb-16">
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
                      {subcategory.name}
                    </span>
                  </h2>
                </motion.div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`/e-store/allproducts/?practice=${practice.id}&category_id=${subcategory.id}`}
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
                  {products.map((product) => {
                    // Calculate discount percentage
                    const originalPrice = product.retail_with_tax;
                    const discountedPrice =
                      product.retail_with_tax_with_discount;
                    let discountPercentage = 0;

                    if (originalPrice > discountedPrice) {
                      discountPercentage = (
                        ((originalPrice - discountedPrice) / originalPrice) *
                        100
                      ).toFixed(0); // 0 decimal places
                    }

                    return (
                      <SwiperSlide key={product.id}>
                        <motion.div
                          whileHover={{ y: -5 }}
                          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden relative h-full flex flex-col"
                        >
                          {/* Special Offer Tag */}
                          {product.is_special_offer && (
                            <div className="absolute top-1 lg:top-2 right-1 lg:right-2 bg-red-500 text-white text-xs font-bold px-1 lg:px-2 py-0.5 lg:py-1 rounded-full z-10 animate-pulse">
                              SALE!
                            </div>
                          )}

                          {/* Conditional Hot Deal / Discount Tag */}
                          <div
                            className={`absolute top-2 right-2 md:text-xs text-[7px] font-bold px-2 py-0 rounded-full z-10 ${
                              discountPercentage > 0
                                ? "bg-gradient-to-r from-green-500 to-blue-600"
                                : "bg-gradient-to-r from-red-500 to-pink-500"
                            } text-white`}
                          >
                            {discountPercentage > 0
                              ? `${discountPercentage}% OFF`
                              : "HOT DEAL"}
                          </div>
                          <Link
                            href={`/e-store/productdetails/${product.id}`}
                            className="flex flex-col h-full"
                          >
                            <div className="relative aspect-square">
                              <Image
                                src={
                                  product.thumbnail
                                    ? `https://healdiway.bkarogyam.com/media/${product.thumbnail}`
                                    : "/images/e-store/combo2.png"
                                }
                                alt={product.name}
                                fill
                                className="object-contain p-2"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                                onError={(e) => {
                                  e.target.src =
                                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNNqAcAAYUAk0u8yY0AAAAASUVORK5CYII=";
                                  e.target.style.objectFit = "contain";
                                  e.target.style.backgroundColor = "#f3f4f6";
                                }}
                              />
                              {/* In Stock Tag */}
                              <div className="absolute bottom-0 lg:bottom-0 mt-3 left-1 lg:left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 lg:py-1 rounded-full z-10">
                                IN STOCK
                              </div>
                            </div>
                            <div className="p-2 lg:p-4 flex-grow flex flex-col ">
                              <h3 className=" text-gray-900 truncate text-sm lg:text-base font-bold">
                                {product.name}
                              </h3>
                              <p
                                className="text-gray-500 text-xs md:text-sm font-bold mt-1 line-clamp-2"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    product.short_description ||
                                    product.description,
                                }}
                              />
                              <div className="lg:mt-3 flex items-center justify-between mt-auto py-2">
                                <span className="font-bold text-sm lg:text-base text-gray-400">
                                  {/* Original Price with line-through */}
                                  <span className="line-through text-red-500">
                                    ₹
                                    {Math.round(product.retail_with_tax) ||
                                      "0.00"}
                                  </span>
                                  {/* Discounted Price */}
                                  { Math.round(product.retail_with_tax) && (
                                    <span className="ml-1 lg:ml-2 text-green-900 font-bold">
                                      ₹
                                      {Math.round(product.retail_with_tax_with_discount)
                                      }
                                    </span>
                                  )}
                                </span>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="text-xs lg:text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-5 lg:px-5 py-1 rounded-full transition-colors"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleAddToCart(
                                      product,
                                      null,
                                      state.domaindata !== null ||
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
          </div>
        );
      })}

      {loadingMore && (
        <div className="w-full flex justify-center my-8">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500 mb-2"></div>
            <p className="text-gray-600">Loading more products...</p>
          </div>
        </div>
      )}

      {allCategoriesLoaded && subcategories.length > INITIAL_LOAD_COUNT && (
        <div className="w-full text-center py-6">
          <p className="text-gray-500">All products loaded</p>
        </div>
      )}

      <LoginModal isVisible={isModalOpen} setmodal={setIsModalOpen} />
    </div>
  );
};

export default SubcategoryProductView;

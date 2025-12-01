"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAppContext } from "../providers";
import { ShoppingCart, Heart, Eye, ChevronLeft, ChevronRight } from "lucide-react";

// =================== PRODUCT CARD ===================
const ProductCard = ({ product, onClick, onAddToCart, trackingData }) => {
  const [imageSrc, setImageSrc] = useState(
    product.thumbnail
      ? `https://healdiway.bkarogyam.com/media/${product.thumbnail}`
      : "/placeholder-product.jpg"
  );
  const [retryCount, setRetryCount] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageError = () => {
    if (retryCount < 2) {
      setRetryCount(retryCount + 1);
      setImageSrc(
        `https://healdiway.bkarogyam.com/media/${product.thumbnail}?retry=${retryCount}`
      );
    } else {
      setImageSrc("/placeholder-product.jpg");
    }
  };

  const originalPrice = product.retail_with_tax;
  const discountedPrice = product.retail_with_tax_with_discount;

  const discountPercentage =
    originalPrice > discountedPrice
      ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
      : 0;

  const finalPrice =
    discountedPrice && discountedPrice < originalPrice
      ? discountedPrice
      : originalPrice;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 sm:border-gray-200 overflow-hidden h-full flex flex-col"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount Ribbon */}
      {discountPercentage > 0 && (
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-20">
          <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full shadow-sm sm:shadow-md">
            {discountPercentage}% OFF
          </div>
        </div>
      )}

      {/* Wishlist Button */}
      <button
        className="absolute top-2 sm:top-3 right-2 sm:right-3 z-20 w-6 h-6 sm:w-7 sm:h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-sm sm:shadow-md transition-all duration-300 hover:scale-110"
        onClick={(e) => {
          e.stopPropagation();
          setIsWishlisted(!isWishlisted);
        }}
      >
        <Heart
          size={12}
          className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}
        />
      </button>

      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden flex-shrink-0">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={handleImageError}
          unoptimized
        />
        
        {/* Overlay on Hover */}
        <div className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* Quick View Button - Only on desktop */}
        <button
          className={`hidden sm:flex absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white/90 hover:bg-white text-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold items-center space-x-1 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <Eye size={12} />
          <span>Quick View</span>
        </button>

        {/* Stock Status */}
        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-green-500 text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
          IN STOCK
        </div>
      </div>

      {/* Content Section */}
      <div className="p-2 sm:p-3 md:p-4 flex-1 flex flex-col">
        {/* Product Name */}
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2 mb-1 sm:mb-2 leading-tight group-hover:text-blue-600 transition-colors flex-1">
          {product.name}
        </h3>

        {/* Description */}
        <div
          className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2 leading-relaxed flex-1"
          dangerouslySetInnerHTML={{
            __html: product.short_description || product.description || "",
          }}
        />

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mt-auto gap-2">
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-1 lg:space-x-2 gap-0.5 sm:gap-0">
              {discountPercentage > 0 && (
                <span className="text-xs sm:text-sm font-semibold text-gray-400 line-through whitespace-nowrap">
                  ₹{Math.round(originalPrice)}
                </span>
              )}
              <span className="text-base sm:text-lg font-bold text-green-600 whitespace-nowrap">
                ₹{Math.round(finalPrice)}
              </span>
            </div>
            {discountPercentage > 0 && (
              <span className="text-[10px] sm:text-xs text-green-500 font-medium mt-0.5 whitespace-nowrap">
                Save ₹{Math.round(originalPrice - finalPrice)}
              </span>
            )}
          </div>

          {/* Add to Cart Button - Original desktop style, improved mobile */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm sm:shadow-md hover:shadow-lg whitespace-nowrap flex-shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product, trackingData);
            }}
          >
            <ShoppingCart size={12} className="sm:w-4 sm:h-4" />
            <span>Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// =================== MOBILE GRID LAYOUT ===================
const MobileProductGrid = ({ products, onCardClick, onAddToCart, trackingData, onViewAll }) => {
  return (
    <div className="sm:hidden">
      {/* First Row - 2 products */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
        {products.slice(0, 2).map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard
              product={product}
              trackingData={trackingData}
              onClick={() => onCardClick(product)}
              onAddToCart={onAddToCart}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Second Row - 2 products */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
        {products.slice(2, 4).map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
          >
            <ProductCard
              product={product}
              trackingData={trackingData}
              onClick={() => onCardClick(product)}
              onAddToCart={onAddToCart}
            />
          </motion.div>
        ))}
      </div>

      {/* View All Button - Centered below products for mobile */}
      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onViewAll}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg w-full max-w-[200px]"
        >
          View All
        </motion.button>
      </div>
    </div>
  );
};

// =================== MAIN SECTION ===================
const Newfile = ({ title, practice, subcategories }) => {
  const { cart, state } = useAppContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const PRODUCTS_PER_CATEGORY = 4;

  const trackingData = {
    tracking_id: null,
    domain_id: state.domaindata?.id || null,
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        if (!practice?.id || !subcategories?.length) {
          return setProducts([]);
        }

        const allProducts = [];
        const categoriesToFetch = subcategories.slice(0, 3);

        for (const subcat of categoriesToFetch) {
          try {
            const url = `https://healdiway.bkarogyam.com/erp-api/inventory_item/?practice=${practice.id}&category_id=${subcat.id}&page_size=${PRODUCTS_PER_CATEGORY}&maintain_inventory=true`;

            const productsRes = await fetch(url);

            if (productsRes.ok) {
              const data = await productsRes.json();
              if (data.results?.length > 0) {
                allProducts.push(...data.results.slice(0, PRODUCTS_PER_CATEGORY));
              }
            }
          } catch (err) {
            console.error("Category fetch error:", err);
          }
        }

        const shuffled = allProducts.sort(() => Math.random() - 0.5);
        setProducts(shuffled.slice(0, 8));
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [practice, subcategories]);

  const handleAddToCart = (product, trackingData) => {
    const originalPrice = product.retail_with_tax;
    const discountedPrice = product.retail_with_tax_with_discount;

    const finalPrice =
      discountedPrice && discountedPrice < originalPrice
        ? discountedPrice
        : originalPrice;

    cart.addToCart({
      id: product.id,
      name: product.name,
      price: finalPrice,
      image: product.thumbnail,
      mrp: originalPrice,
      discount: Math.round(
        ((originalPrice - finalPrice) / originalPrice) * 100
      ),
      domaintracking: trackingData.domain_id,
    });
  };

  const handleCardClick = (product) => {
    router.push(`/e-store/productdetails/${product.id}`);
  };

  // View All button click handler
  const handleViewAll = () => {
    if (practice?.id && subcategories?.length > 0) {
      const firstCategoryId = subcategories[0].id;
      router.push(`/e-store/allproducts?practice=${practice.id}&category_id=${firstCategoryId}`);
    } else {
      router.push("/e-store/allproducts");
    }
  };

  if (loading) return (
    <div className="text-center py-8">
      <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
      <p className="mt-2 text-sm text-gray-600">Loading products...</p>
    </div>
  );
  
  if (!products.length)
    return (
      <div className="text-center py-8">
        <div className="text-gray-400 text-4xl mb-3">📦</div>
        <p className="text-gray-600 text-sm">No products available at the moment</p>
      </div>
    );

  return (
    <div className="w-full bg-white py-4 sm:py-6 px-3 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0"
      >
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {title || "🔥 Trending Products"}
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">Discover our most popular items</p>
        </div>

        {/* Desktop View All Button - Hidden on mobile */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleViewAll}
          className="hidden sm:flex bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 md:px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
        >
          View All
        </motion.button>
      </motion.div>

      {/* Desktop Grid Layout - 4 cards per row */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {products.slice(0, 4).map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full"
          >
            <ProductCard
              product={product}
              trackingData={trackingData}
              onClick={() => handleCardClick(product)}
              onAddToCart={handleAddToCart}
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile Grid Layout - 2x2 grid with View All button below */}
      <MobileProductGrid
        products={products.slice(0, 4)}
        onCardClick={handleCardClick}
        onAddToCart={handleAddToCart}
        trackingData={trackingData}
        onViewAll={handleViewAll}
      />
    </div>
  );
};

export default Newfile;
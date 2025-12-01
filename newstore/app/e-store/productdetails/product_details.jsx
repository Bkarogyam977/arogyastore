import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import ProductReport from "./product_report";
import { useCustContext } from "../provider";
import { postAPI } from "@/dataarrange/utils/common";
import { Modal } from "antd";
import { ShareSocial } from "react-share-social";
import { useAppContext } from "@/app/providers";
import { useRouter } from "next/navigation";
import LoginModal from "../allproducts/loginmodal";

import {
  FaShare,
  FaShoppingCart,
  FaWhatsapp,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import {
  FiPackage,
  FiCheckCircle,
  FiMessageSquare,
  FiMinus,
  FiPlus,
} from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";

function Offers({ productdetail, product_id, tokendata }) {
  const { customerdata, userdata } = useCustContext();
  const { state, cart } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [opensharemodal, setOpensharemodal] = useState(false);
  const [shareurl, setShareurl] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();
  // ✅ Check if this product is already in the cart
  const cartItem = cart.items.find((item) => item.id === productdetail.id);

  // Keep quantity in sync with cart (if user comes back to product)
  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);

  // Format date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // Calculate discount percentage
  const discountPercentage = useMemo(() => {
    if (
      productdetail.retail_with_tax > 0 &&
      productdetail.retail_with_tax_with_discount > 0
    ) {
      const originalPrice = parseFloat(productdetail.retail_with_tax);
      const discountedPrice = parseFloat(
        productdetail.retail_with_tax_with_discount
      );
      if (originalPrice > discountedPrice) {
        const discount =
          ((originalPrice - discountedPrice) / originalPrice) * 100;
        return Math.round(discount);
      }
    }
    return 0;
  }, [productdetail]);

  const handleAddToCart = (product, tracking_id, domaintracking) => {
    cart.addToCart({
      id: product.id,
      name: product.name,
      price: product.retail_with_tax_with_discount,
      mrp: product.retail_with_tax,
      image: product.thumbnail,
      tracking_id: tracking_id ?? null,
      domaintracking: domaintracking ?? null,
      quantity: quantity, // ✅ Add current quantity
    });
  };

  const handleCheckout = () => {
    if (cart.items.length === 0) return;
    setIsCartOpen(false);
    router.push("/e-store/productdetails/addtocart/");
  };

  const postAffilieateProduct = (product, customer) => {
    const data = {
      product_id: product,
      customer_id: customer.id,
    };
    const successfn = (data) => {
      const url = `https://arogya.bkarogyam.com/e-store/productdetails/${data.product_id}?tokendata=${data.tracking_id}`;
      setShareurl(url);
      setOpensharemodal(true);
    };
    postAPI("affiliate_product/", data, successfn, () => {});
  };

  // ✅ Quantity handlers (also update cart when already added)
  // ✅ Quantity handlers - also add to cart when cart is empty
  const increaseQuantity = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);

    if (cartItem) {
      // ✅ If already in cart, just update
      cart.updateQuantity(productdetail.id, newQty);
    } else {
      // ✅ If not in cart (e.g. empty cart), add product with current quantity
      cart.addToCart({
        id: productdetail.id,
        name: productdetail.name,
        price: productdetail.retail_with_tax_with_discount,
        mrp: productdetail.retail_with_tax,
        image: productdetail.thumbnail,
        tracking_id: tokendata ?? null,
        domaintracking: state.domaindata?.id ?? null,
        quantity: newQty,
      });
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);

      if (cartItem) {
        cart.updateQuantity(productdetail.id, newQty);
      }
    } else if (quantity === 1 && cartItem) {
      // ✅ Optional: Remove product from cart when quantity hits 0
      cart.removeFromCart(productdetail.id);
      setQuantity(1);
    }
  };

  //   const decreaseQuantity = () => {
  //     if (quantity > 1) {
  //       const newQty = quantity - 1;
  //       setQuantity(newQty);
  //       if (cartItem) cart.updateQuantity(productdetail.id, newQty);
  //     }
  //   };

  return (
    <div>
      {/* Discount Banner */}
      {/* <div className="flex justify-between items-center mb-6 bg-gradient-to-r from-blue-600 to-blue-500 p-4 rounded-lg">
        <div>
          {discountPercentage > 0 && (
            <h2 className="text-xl font-bold text-white">
              {discountPercentage}% OFF
            </h2>
          )}
          <p className="text-blue-100 text-sm">On orders over ₹50</p>
        </div>
        <div className="bg-white text-blue-600 rounded-md py-1 px-3 font-medium text-sm">
          Offer ends: {formattedDate}
        </div>
      </div> */}

      {/* Product Info */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          {/* <h3 className="text-xl font-bold text-gray-900">
            {productdetail.name}
          </h3> */}

          {/* Price */}
          {/* <div className="mt-3 flex items-center gap-3">
            <p className="text-2xl font-bold text-blue-600">
              ₹{Math.round(productdetail.retail_with_tax_with_discount)}
            </p>
            <p className="text-gray-400 line-through">
              ₹{Math.round(productdetail.retail_with_tax)}
            </p>
            {discountPercentage > 0 && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                Save{" "}
                {Math.round(
                  productdetail.retail_with_tax -
                    productdetail.retail_with_tax_with_discount
                )}
              </span>
            )}
          </div> */}

          {/* Rating */}
          <div className="mt-2 flex items-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) =>
                star <= 4 ? (
                  <FaStar key={star} className="text-yellow-400 w-4 h-4" />
                ) : (
                  <FaRegStar key={star} className="text-yellow-400 w-4 h-4" />
                )
              )}
            </div>
            <span className="ml-2 text-sm text-gray-500">(105 reviews)</span>
          </div>

          {/* Product Details */}
          <div className="mt-4 space-y-2 text-sm">
            {/* <div className="flex items-center">
              <FiPackage className="text-gray-400 mr-2" />
              <span className="text-gray-600">
                <span className="font-medium">Product Code:</span>{" "}
                {productdetail?.hsn_data?.code}
              </span>
            </div> */}
            {/* <div className="flex items-center">
              <FiCheckCircle className="text-gray-400 mr-2" />
              <span className="text-gray-600">
                <span className="font-medium">Availability:</span>{" "}
                {productdetail.total_quantity} in stock
              </span>
            </div> */}
            {/* <div className="flex items-center">
              <BsShieldCheck className="text-gray-400 mr-2" />
              <span className="text-gray-600">
                <span className="font-medium">Brand:</span>{" "}
                {productdetail.manufacturer_data?.name}
              </span>
            </div> */}
          </div>

          {/* ✅ Quantity Selector - synced with cart */}
          <div className="flex items-center justify-between mt-4 md:mt-5 w-full">
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden w-full">
              {/* Minus Button */}
              <button
                onClick={decreaseQuantity}
                className="p-3 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 transition-colors disabled:opacity-30"
                disabled={quantity <= 1}
              >
                <FiMinus className="text-base" />
              </button>

              {/* Quantity */}
              <span className="flex-1 text-center font-medium text-gray-700 text-base md:text-lg py-2 bg-white">
                {quantity}
              </span>

              {/* Plus Button - shifted to right */}
              <button
                onClick={increaseQuantity}
                className="p-3 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              >
                <FiPlus className="text-base" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center"
            onClick={() => {
              handleAddToCart(
                productdetail,
                tokendata ?? null,
                state.domaindata?.id ?? null
              );
            }}
          >
            <FaShoppingCart className="mr-2" />
            Add To Cart
          </button>

          {/* Buy Now Button */}
          <button
            className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center"
            onClick={() => {
              handleCheckout(
                productdetail,
                tokendata ?? null,
                state.domaindata?.id ?? null
              );
            }}
          >
            Buy It Now
          </button>

          {/* Quick Actions */}
          <div className="mt-4 flex justify-between">
            <button
              className="flex items-center text-blue-600 hover:text-blue-800 transition"
              onClick={() => {
                if (!userdata) {
                  setIsModalOpen(true);
                } else {
                  postAffilieateProduct(product_id, customerdata);
                }
              }}
            >
              <FaShare className="mr-1" />
              <span>Share</span>
            </button>

            <button className="flex items-center text-gray-600 hover:text-gray-800 transition">
              <FiMessageSquare className="mr-1" />
              <span>Chat</span>
            </button>

            <button className="flex items-center text-gray-600 hover:text-gray-800 transition">
              <FaWhatsapp className="mr-1" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Report */}
      <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
        <p className="text-sm text-gray-600">Any problem with this product?</p>
        <div className="bg-blue-50 hover:bg-blue-100 rounded-lg px-3 py-1 transition">
          <ProductReport />
        </div>
      </div>

      {/* Modals */}
      <Modal
        open={opensharemodal}
        onCancel={() => setOpensharemodal(false)}
        footer={null}
        centered
        className="share-modal"
      >
        <div className="p-4">
          <h3 className="text-lg font-medium mb-4">Share this product</h3>
          <ShareSocial
            url={shareurl}
            socialTypes={[
              "facebook",
              "twitter",
              "reddit",
              "linkedin",
              "whatsapp",
            ]}
          />
        </div>
      </Modal>

      {isModalOpen && (
        <LoginModal isVisible={isModalOpen} setmodal={setIsModalOpen} />
      )}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918081222333?text=Hello%2C%20I%20want%20to%20know%20more%20about%20this%20product."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 left-4 bg-green-700 text-white p-2 rounded-full shadow-lg 
             z-50 sm:hidden hover:bg-green-600 transition-all 
             animate-[bounce_2s_infinite_alternate]"
      >
        <FaWhatsapp className="text-3xl " />
      </a>

      {/* Floating Add to Cart Button */}
      <div className="fixed bottom-0 left-0 w-full sm:hidden z-50">
        <div className="bg-white shadow-lg p-2 flex justify-center">
          <button
            className="w-[90%] bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 
                 text-white font-semibold py-2 px-4 rounded-3xl flex items-center justify-center 
                 transition-all duration-300"
            onClick={() => {
              handleAddToCart(
                productdetail,
                tokendata ?? null,
                state.domaindata?.id ?? null
              );
            }}
          >
            <FaShoppingCart className="mr-2" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Offers;

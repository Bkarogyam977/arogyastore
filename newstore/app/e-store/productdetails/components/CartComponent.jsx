'use client'
import React from 'react';
import { FiShoppingBag, FiX, FiPlus, FiMinus, FiChevronRight, FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';

// import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAppContext } from '@/app/providers';
import { SiPhonepe, SiVisa } from 'react-icons/si';
import { RiMastercardFill } from 'react-icons/ri';
import { FaGooglePay } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const { cart } = useAppContext();
  const router = useRouter();

  const handleCheckout = () => {
    if (cart.items.length === 0) return;
    // setIsCartOpen(false);
    router.push('/e-store/productdetails/addtocart/');
  };

  return (
    <div id='CartFloatButton' className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
            <FiArrowLeft className="mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Your Shopping Bag</h1>
          <p className="text-gray-500 mt-2">
            {cart.items.length} {cart.items.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            {cart.items.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <div className="mx-auto h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <FiShoppingBag className="text-3xl text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Your bag is empty</h3>
                <p className="mt-2 text-gray-500">Start adding some premium products to your bag</p>
                <Link href="/e-store/categoryproduct/" className="mt-6 inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                  Browse Products
                </Link>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <ul className="divide-y divide-gray-200">
                  {cart.items.map((item) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-6 hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row gap-6">
                        <div className="w-full sm:w-40 h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative flex-shrink-0">
                          <Image
                            height={80}
                            width={80}
                            src={`https://healdiway.bkarogyam.com/media/${item.image}`} 
                            alt={item.name}
                            className="object-cover"
                           
                            // layout="intrinsic"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </div>

                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                              <p className="text-indigo-600 font-medium mt-1">₹{item.price.toFixed(2)}</p>
                            </div>
                            <button
                              onClick={() => cart.removeFromCart(item.id)}
                              className="text-gray-400 hover:text-rose-500 transition-colors h-8 w-8 flex items-center justify-center rounded-full hover:bg-rose-50"
                            >
                              <FiX />
                            </button>
                          </div>

                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                              <button
                                onClick={() => cart.updateQuantity(item.id, item.quantity - 1)}
                                className="px-3 py-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <FiMinus className={`text-sm ${item.quantity <= 1 ? 'opacity-30' : ''}`} />
                              </button>
                              <span className="px-4 text-center font-medium text-gray-700">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => cart.updateQuantity(item.id, item.quantity + 1)}
                                className="px-3 py-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                              >
                                <FiPlus className="text-sm" />
                              </button>
                            </div>

                            <span className="font-medium text-gray-900">
                              ₹{(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          {cart.items.length > 0 && (
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="bg-white rounded-xl shadow-sm p-6 sticky top-8"
              >
                <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4 border-b border-gray-200 pb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{cart.calculateTotal().subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-green-600">₹{cart.calculateTotal().deliveryCharge}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex justify-between mt-6 mb-8">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-xl font-bold text-indigo-600">₹{cart.calculateTotal().total}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <FiChevronRight />
                </motion.button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Secure checkout powered by our payment partners
                </p>

                <div className="mt-6 flex justify-center gap-4">
                  {[
                    { icon: <SiVisa className="text-[#1A1F71] w-6 h-6" />, key: 'visa' },
                    { icon: <RiMastercardFill className="text-[#EB001B] w-6 h-6" />, key: 'mastercard' },
                    { icon: <SiPhonepe className="text-[#5F259F] w-6 h-6" />, key: 'phonepe' },
                    { icon: <FaGooglePay className="text-[#4285F4] w-6 h-6" />, key: 'gpay' }
                  ].map(({ icon, key }) => (
                    <motion.div
                      key={key}
                      whileHover={{ scale: 1.05 }}
                      className="h-10 w-14 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-all"
                    >
                      {icon}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
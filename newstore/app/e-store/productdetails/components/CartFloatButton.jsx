'use client'
import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiX, FiPlus, FiMinus, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '@/app/providers';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CartFloatButton = ({ onCheckout }) => {
  const router = useRouter();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useAppContext();
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCheckout = () => {
    if (cart.items.length === 0) return;
    setIsCartOpen(false);
    router.push('/e-store/productdetails/addtocart/');
  };
  

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isCartOpen && !e.target.closest('.cart-container')) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isCartOpen]);

  if (!isMounted) return null;

  return (
    <div id='CartFloatButton' className="fixed right-2 bottom-16 md:right-6 md:bottom-6 z-50 cart-container">
      {/* Floating Cart Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="relative bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
      >
        <FiShoppingCart className="text-xl md:text-2xl transform group-hover:scale-110 transition-transform" />
        {cart.items.length > 0 && (
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-rose-500 text-white text-xs font-bold h-5 w-5 md:h-6 md:w-6 flex items-center justify-center rounded-full shadow-sm"
          >
            {cart.getCartItemCount()}
          </motion.span>
        )}
      </motion.button>

      {/* Premium Cart Panel */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            className={`absolute right-0 w-[90vw] max-w-md md:w-96 bg-white shadow-2xl overflow-hidden border border-gray-100 ${
              isMobile 
                ? 'bottom-full mb-2 rounded-t-2xl h-[85vh]' 
                : 'bottom-[calc(100%+1rem)] rounded-2xl max-h-[80vh]'
            }`}
          >
            {/* Cart Header */}
            <div className="p-4 md:p-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative sticky top-0 z-10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-amber-400"></div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg md:text-xl font-bold">Your Shopping Cart</h3>
                  <p className="text-xs md:text-sm opacity-90 mt-1">
                    {cart.items.length} {cart.items.length === 1 ? 'item' : 'items'}
                  </p>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-white hover:text-gray-200 p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  <FiX className="text-lg md:text-xl" />
                </button>
              </div>
            </div>

            {/* Cart Items - Scrollable Area */}
            <div 
              className={`overflow-y-auto ${
                isMobile ? 'h-[calc(75vh-180px)]' : 'max-h-[calc(80vh-180px)]'
              }`}
            >
              {cart.items.length === 0 ? (
                <div className="p-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <FiShoppingCart className="text-2xl md:text-3xl text-gray-400" />
                  </div>
                  <h4 className="text-base md:text-lg font-medium text-gray-700">Your cart is empty</h4>
                  <p className="text-gray-500 text-sm md:text-base mt-1">Start adding premium products</p>
                </div>
              ) : (
                <ul className="divide-y divide-gray-100  md:max-h-[calc(60vh-180px)]">
                  {cart.items.map(item => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-3 md:p-4 hover:bg-gray-50/50 transition-colors group"
                    >
                      <div className="flex gap-3 md:gap-4">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-lg overflow-hidden border border-gray-100 relative flex-shrink-0">
                          <Image 
                            height={80}
                            width={80}
                            src={`https://healdiway.bkarogyam.com/media/${item.image}`} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between">
                            <h4 className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors truncate">
                              {item.name}
                            </h4>
                            <button 
                              onClick={() => cart.removeFromCart(item.id)}
                              className="text-gray-400 hover:text-rose-500 transition-colors p-1 -mr-2"
                            >
                              <FiX />
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">₹{item.price.toFixed(2)}</p>
                          
                          <div className="flex items-center justify-between mt-2 md:mt-3">
                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                              <button
                                onClick={() => cart.updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 md:p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <FiMinus className={`text-xs md:text-sm ${item.quantity <= 1 ? 'opacity-30' : ''}`} />
                              </button>
                              <span className="px-2 md:px-3 text-center font-medium text-gray-700 text-sm md:text-base">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => cart.updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 md:p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                              >
                                <FiPlus className="text-xs md:text-sm" />
                              </button>
                            </div>
                            <span className="font-medium text-gray-800 text-sm md:text-base">
                              ₹{(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Cart Footer */}
            {cart.items.length > 0 && (
              <div className="border-t border-gray-100 p-4 md:p-5 bg-gray-50 sticky bottom-0">
                <div className="space-y-2 md:space-y-3">
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{cart.calculateTotal().subtotal}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm md:text-base">
                    <div className="flex items-center">
                      <span className="text-gray-600">Delivery</span>
                      <span className="ml-2 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        Standard
                      </span>
                    </div>
                    <span className="font-medium">₹{cart.calculateTotal().deliveryCharge}</span>
                  </div>
                  
                  <div className="flex justify-between text-base md:text-lg font-bold pt-2 md:pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span className="text-indigo-600">₹{cart.calculateTotal().total}</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 md:py-3 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-1 md:gap-2 mt-3 md:mt-4 text-sm md:text-base"
                >
                  Proceed to Checkout
                  <FiChevronRight className="text-base md:text-lg" />
                </motion.button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartFloatButton;
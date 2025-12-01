// consultation.jsx
"use client";
import React from 'react'
import { motion } from 'framer-motion';

function Consultation() {
  return (
    <div>
      {/* "मुफ्त परामर्श लें" button */}
      <motion.a
        href="https://arogyamission.com/e-store/productdetails/3141" // Ye line badli gayi hai
        className="fixed bottom-24 md:bottom-28 left-1  z-50 flex items-center bg-green-700 hover:bg-[#0056b3] text-white rounded-full py-2 px-4 shadow-xl transition-all duration-300 transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-sm md:text-md font-semibold whitespace-nowrap">
          Order Now
        </span>
      </motion.a>
    </div>
  )
}

export default Consultation
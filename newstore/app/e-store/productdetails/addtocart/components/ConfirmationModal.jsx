'use client'
import React from "react";
import { Modal } from "antd";
import Image from "next/image";
import { RiSecurePaymentLine } from "react-icons/ri";

const ConfirmationModal = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  total, 
  deliveryCharge, 
  totalAmount,
  onConfirmOrder 
}) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width={600}
    >
      <div className="p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmation</h2>
          <p className="text-gray-600">Please review your order details before confirming</p>
        </div>

        <div className="border border-gray-100 rounded-lg overflow-hidden mb-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-4">
                <Image
                  src={`https://healdiway.bkarogyam.com/media/${item.image}`}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{item.name}</h3>
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>Qty: {item.quantity}</span>
                  <span>₹{item.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">₹{total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Delivery</span>
            <span className="font-medium">₹{deliveryCharge.toLocaleString()}</span>
          </div>
          <div className="border-t border-gray-200 my-3"></div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-800">Total Amount</span>
            <span className="text-xl font-bold text-green-600">₹{totalAmount.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-6 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            Cancel
          </button>
          <button
            onClick={onConfirmOrder}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white font-medium hover:shadow-md transition-all flex items-center justify-center"
          >
            Confirm Order
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center">
          <RiSecurePaymentLine className="text-2xl text-blue-500 mr-2" />
          <span className="text-sm text-gray-600">Secure Payment • 100% Authentic Products</span>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
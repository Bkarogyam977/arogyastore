import { Button } from "@nextui-org/react";
import React from "react";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FiShield, FiPackage, FiTruck } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

function ProductPriceDetails({
  totalPrice,
  discount,
  deliveryCharges,
  packagingFee,
  totalAmount,
  savings,
  totalquantity,
  onclick,
  isProcessing
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4">
        <h2 className="text-xl font-bold text-white">Order Summary</h2>
      </div>

      {/* Price Breakdown */}
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Price ({totalquantity} items)</span>
          <span className="font-medium">₹{Math.round(totalPrice).toLocaleString()}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Discount</span>
            <span className="text-green-600 font-medium">- ₹{Math.round(discount).toLocaleString()}</span>
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className="text-gray-600 flex items-center">
            <FiTruck className="mr-2" /> Delivery
          </span>
          <span className={deliveryCharges === "FREE" ? "text-green-600 font-medium" : "font-medium"}>
            {deliveryCharges === 0 ? "FREE" : `₹${deliveryCharges}`}
          </span>
        </div>

        {packagingFee > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600 flex items-center">
              <FiPackage className="mr-2" /> Packaging
            </span>
            <span className="font-medium">₹{packagingFee.toLocaleString()}</span>
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300 my-3"></div>

        {/* Total Amount */}
        <div className="flex justify-between items-center pt-2">
          <span className="text-lg font-bold text-gray-800">Total Amount</span>
          <span className="text-xl font-bold text-blue-600">₹{Math.round(totalAmount).toLocaleString()}</span>
        </div>

        {savings > 0 && (
          <div className="bg-blue-50 rounded-md p-3 mt-3 flex items-center">
            <FiShield className="text-blue-500 mr-2" />
            <span className="text-blue-700 text-sm">
              You saved ₹{savings.toLocaleString()} on this order
            </span>
          </div>
        )}
      </div>

      {/* Place Order Button */}
      <div className="px-5 pb-5">
        <Button 
          onPress={onclick}
          disabled={isProcessing}
          loading={isProcessing}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-6 rounded-lg shadow-md hover:shadow-lg transition-all"
          endContent={<BsArrowRight className="text-xl" />}
        >
          Place Your Order
        </Button>
      </div>

      {/* Security Badge */}
      <div className="bg-gray-50 p-4 border-t border-gray-200 flex items-center">
        <div className="bg-white p-2 rounded-full shadow-sm mr-3">
          <RiSecurePaymentLine className="text-blue-500 text-2xl" />
        </div>
        <div>
          <p className="text-sm text-gray-600 font-medium">
            Safe & Secure Payments
          </p>
          <p className="text-xs text-gray-500">
            100% Authentic Products | Easy Returns
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductPriceDetails;
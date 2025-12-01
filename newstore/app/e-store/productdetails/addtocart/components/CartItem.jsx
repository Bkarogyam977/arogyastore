"use client";
import React from "react";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";

const CartItem = ({ product, onQuantityPlus, onQuantityMinus, onRemove }) => {
  const hasDiscount = product.mrp && product.mrp > product.price;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 border-b border-gray-100 last:border-0">
      <div className="w-full md:w-1/4">
        <Image
          src={`https://healdiway.bkarogyam.com/media/${product.image}`}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>

      <div className="w-full md:w-3/4">
        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          {hasDiscount ? (
            <div className="flex items-center gap-2">
              {/* Original price (line-through) */}
              <span className="text-gray-500 line-through">
                ₹{Math.round(product.mrp).toLocaleString()}
              </span>
              {/* Discounted price */}
              <span className="text-green-600 font-medium">
                ₹{Math.round(product.price).toLocaleString()}
              </span>
            </div>
          ) : (
            <div>
              {/* No discount → show only original price */}
              <span className="text-green-600 font-medium">
                ₹{Math.round(product.price).toLocaleString()}
              </span>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => onQuantityMinus(product, 1)}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                disabled={product.quantity <= 1}
              >
                -
              </button>
              <span className="w-12 text-center border-x border-gray-300 py-1">
                {product.quantity}
              </span>
              <button
                onClick={() => onQuantityPlus(product, 1)}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => onRemove(product.id)}
            className="text-gray-600 hover:text-red-600 transition-colors flex items-center text-sm"
          >
            <BsTrash className="h-4 w-4 mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

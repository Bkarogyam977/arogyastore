"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductPriceDetails from "../addtocart/productpricedetails";

function PlaceOrder() {
  const initialAddresses = [
    {
      id: 1,
      name: "John",
      phone: "+91 9170475552",
      house_number: "126",
      street: "Mirjapur",
      state: "Uttar Pradesh",
      city: "Mirzapur",
      area: "Mirzapur Tahsil Ke Samne",
      "nearby_famous_shop/mail/landmark": "",
      zip: "62701"
    }
  ];

  const products = [
    {
      id: 1,
      image: "/images/e-store/products.png",
      name: "Kidney Nagarjun Sugar+BP Package",
      description: "Seller: BK Arogyam",
      originalPrice: 10,
      discountedPrice: 7,
      discount: 30,
      offers: "6 offers applied",
      packagingFee: 5,
      delivery: "Delivery by Thu Jun 20 | ₹40 Free"
    }
  ];

  const [addresses, setAddresses] = useState(initialAddresses);
  const [quantity, setQuantity] = useState(1);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(
    initialAddresses[0].id
  );
  const [newAddress, setNewAddress] = useState({
    id: addresses.length + 1,
    name: "",
    phone: "",
    house_number: "",
    street: "",
    state: "",
    city: "",
    area: "",
    "nearby_famous_shop/mail/landmark": "",
    zip: ""
  });

  const handleAddAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }));
  };

  const handleAddNewAddress = () => {
    setAddresses([...addresses, newAddress]);
    setNewAddress({
      id: addresses.length + 1,
      name: "",
      phone: "",
      house_number: "",
      street: "",
      state: "",
      city: "",
      area: "",
      "nearby_famous_shop/mail/landmark": "",
      zip: ""
    });
    setShowAddAddress(false);
  };

  const handleSelectAddress = (id) => {
    setSelectedAddressId(id);
  };

  const totalPrice = quantity * products[0].originalPrice;
  const discount = (totalPrice * products[0].discount) / 100;
  const deliveryCharges = products[0].delivery.includes("Free")
    ? "₹0 (Free)"
    : "₹40";
  const packagingFee = products[0].packagingFee;
  const totalAmount = totalPrice - discount + packagingFee;
  const savings = discount + packagingFee;

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded shadow-md md:col-span-2">
        <div className="bg-white p-4 rounded shadow-md md:col-span-3 mb-4 relative">
          <h2 className="text-2xl font-bold mb-2">LOGIN</h2>
          <p className="text-l pl-5">Customer Name, +91 9170477867</p>

          <button className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md mt-7">
            Change
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4 pl-5 text-white bg-blue-600 p-3">
          Delivery Address
        </h2>

        <div className="px-5 md:px-10">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="bg-gray-100 p-4 mb-4 rounded flex items-center relative"
            >
              <input
                type="checkbox"
                checked={selectedAddressId === address.id}
                onChange={() => handleSelectAddress(address.id)}
                className="mr-4"
              />
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex flex-col justify-between">
                  <p className="text-l pl-5">
                    <span className="font-bold">{address.name}</span>{" "}
                    {address.phone}
                  </p>
                  <p className="text-l pl-5">
                    {address.house_number}, {address.street}, {address.area},{" "}
                    {address.city}, {address.state}, {address.zip}
                  </p>
                </div>
                {selectedAddressId === address.id && (
                  <button
                    className="bg-green-500 text-xl text-white px-4 py-1 rounded-md ml-auto md:ml-40"
                    onClick={() => console.log("Deliver Here clicked")}
                  >
                    Deliver Here
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {showAddAddress && (
          <div className="px-5 md:px-40">
            <div className="bg-gray-100 p-4 mb-4 rounded md:p-10">
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex flex-col justify-between w-full">
                  <input
                    type="text"
                    name="name"
                    value={newAddress.name}
                    onChange={handleAddAddressChange}
                    placeholder="Name"
                    className="mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={newAddress.phone}
                    onChange={handleAddAddressChange}
                    placeholder="Phone"
                    className="mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="house_number"
                    value={newAddress.house_number}
                    onChange={handleAddAddressChange}
                    placeholder="House Number"
                    className="mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="street"
                    value={newAddress.street}
                    onChange={handleAddAddressChange}
                    placeholder="Street"
                    className="mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="state"
                    value={newAddress.state}
                    onChange={handleAddAddressChange}
                    placeholder="State"
                    className="mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="city"
                    value={newAddress.city}
                    onChange={handleAddAddressChange}
                    placeholder="City"
                    className="mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="area"
                    value={newAddress.area}
                    onChange={handleAddAddressChange}
                    placeholder="Area"
                    className="mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="nearby_famous_shop/mail/landmark"
                    value={newAddress["nearby_famous_shop/mail/landmark"]}
                    onChange={handleAddAddressChange}
                    placeholder="Nearby Famous Shop/Landmark"
                    className="mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="zip"
                    value={newAddress.zip}
                    onChange={handleAddAddressChange}
                    placeholder="ZIP Code"
                    className="mb-2 p-2 border rounded"
                  />
                  <div className="flex justify-center">
                    <button
                      onClick={handleAddNewAddress}
                      className="bg-blue-500 text-white px-4 py-2 md:w-40 text-center items-center justify-center rounded-md mt-10"
                    >
                      Add Address
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <ProductPriceDetails
          totalPrice={totalPrice}
          discount={discount}
          deliveryCharges={deliveryCharges}
          packagingFee={packagingFee}
          totalAmount={totalAmount}
          savings={savings}
        />
      </div>

      <div className="bg-white rounded shadow-md md:col-span-2">
        <div className="bg-white p-4 rounded shadow-md md:col-span-3 mb-4 relative">
          <div className="p-3 px-10 bg-slate-200 pr-5 md:pr-10 mt-10 md:col-span-2">
            <button
              className=" text-blue-800 px-3 py-1 rounded-lg text-xl p-5 font-bold"
              onClick={() => setShowAddAddress(!showAddAddress)}
            >
              {showAddAddress ? "Cancel" : "+ Add New Address"}
            </button>
          </div>

          <div className="px-10 bg-slate-200 mt-3 p-3">
            <button className=" text-gray-400 px-3 py-1 rounded-lg text-xl p-5 font-bold">
              ORDER SUMMARY
            </button>
          </div>

          <div className="p-3 px-10 bg-slate-200 mt-3">
            <button className=" text-gray-400 px-3 py-1 rounded-lg text-xl p-5 font-bold">
              PAYMENT OPTIONS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;

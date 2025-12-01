"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";

function AddAddress() {
  const [newAddress, setNewAddress] = useState({
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

  const router = useRouter();

  const handleAddAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }));
  };

  const handleAddNewAddress = () => {
    const addresses = JSON.parse(localStorage.getItem("addresses")) || [];
    addresses.push(newAddress);
    localStorage.setItem("addresses", JSON.stringify(addresses));
    router.push("/place-order");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Address</h2>
      <div className="bg-gray-100 p-4 mb-4 rounded">
        <div className="flex flex-col items-start">
          <input
            type="text"
            name="name"
            value={newAddress.name}
            onChange={handleAddAddressChange}
            placeholder="Name"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="phone"
            value={newAddress.phone}
            onChange={handleAddAddressChange}
            placeholder="Phone"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="house_number"
            value={newAddress.house_number}
            onChange={handleAddAddressChange}
            placeholder="House Number"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="street"
            value={newAddress.street}
            onChange={handleAddAddressChange}
            placeholder="Street"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="state"
            value={newAddress.state}
            onChange={handleAddAddressChange}
            placeholder="State"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="city"
            value={newAddress.city}
            onChange={handleAddAddressChange}
            placeholder="City"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="area"
            value={newAddress.area}
            onChange={handleAddAddressChange}
            placeholder="Area"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="nearby_famous_shop/mail/landmark"
            value={newAddress["nearby_famous_shop/mail/landmark"]}
            onChange={handleAddAddressChange}
            placeholder="Nearby Famous Shop/Landmark"
            className="mb-2 p-2 border rounded w-full"
          />
          <input
            type="text"
            name="zip"
            value={newAddress.zip}
            onChange={handleAddAddressChange}
            placeholder="ZIP Code"
            className="mb-2 p-2 border rounded w-full"
          />
          <button
            onClick={handleAddNewAddress}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Add Address
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAddress;

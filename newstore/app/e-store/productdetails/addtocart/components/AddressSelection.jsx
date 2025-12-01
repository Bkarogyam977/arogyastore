'use client'
import React from "react";
import { Button, Empty } from "antd";
import { PlusOutlined, UserOutlined, HomeOutlined, EnvironmentOutlined, GlobalOutlined, PhoneOutlined, DeleteOutlined, StarOutlined } from "@ant-design/icons";
import { CiLocationOn } from "react-icons/ci";

const AddressSelection = ({ 
  customeraddress, 
  onDeleteAddress, 
  onSetDefaultAddress, 
  onOpenForm 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 m-4">
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg mb-6">
        <div className="flex items-center">
          <CiLocationOn className="text-xl mr-3" />
          <span className="text-lg font-medium">Need to add a new delivery address?</span>
        </div>
        <Button 
          type="primary" 
          className="flex items-center bg-white text-blue-600 hover:bg-gray-100 font-medium"
          icon={<PlusOutlined />}
          onClick={onOpenForm}
        >
          Add New Address
        </Button>
      </div>

      <div className="address-grid grid grid-cols-1 md:grid-cols-2 gap-4">
        {customeraddress.map((address) => (
          <div key={address.id} className={`address-card relative p-5 rounded-xl border transition-all duration-300 ${address.is_default ? 'border-2 border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
            {address.is_default && (
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                DEFAULT
              </div>
            )}

            <div className="flex items-start mb-3">
              <UserOutlined className="text-gray-500 mr-2 mt-1" />
              <h3 className="text-lg font-semibold text-gray-800">{address.fullname}</h3>
            </div>

            <div className="space-y-2 text-gray-600">
              <div className="flex">
                <HomeOutlined className="text-gray-400 mr-2 mt-0.5" />
                <span>{address.building}, {address.street}</span>
              </div>
              <div className="flex">
                <EnvironmentOutlined className="text-gray-400 mr-2 mt-0.5" />
                <span>{address.city}, {address.state} - {address.pincode}</span>
              </div>
              <div className="flex">
                <GlobalOutlined className="text-gray-400 mr-2 mt-0.5" />
                <span>India</span>
              </div>
              <div className="flex">
                <PhoneOutlined className="text-gray-400 mr-2 mt-0.5" />
                <span>{address.mobile}</span>
              </div>
            </div>

            <div className="flex flex-col justify-end space-x-3 mt-4">
              <Button 
                danger 
                type="text" 
                icon={<DeleteOutlined />}
                onClick={() => onDeleteAddress(address)}
                className="text-red-500 hover:bg-red-50"
              >
                Remove
              </Button>
              
              {!address.is_default && (
                <Button 
                  type="text" 
                  icon={<StarOutlined />}
                  onClick={() => onSetDefaultAddress(address)}
                  className="text-blue-500 hover:bg-blue-50"
                >
                  Set Default
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {customeraddress.length === 0 && (
        <div className="text-center py-10">
          <Empty
            image={<CiLocationOn className="text-5xl text-gray-400" />}
            description={<span className="text-gray-500">No addresses saved yet</span>}
          >
            <Button 
              type="primary" 
              icon={<PlusOutlined />}
              onClick={onOpenForm}
              className="mt-4"
            >
              Add Your First Address
            </Button>
          </Empty>
        </div>
      )}
    </div>
  );
};

export default AddressSelection;
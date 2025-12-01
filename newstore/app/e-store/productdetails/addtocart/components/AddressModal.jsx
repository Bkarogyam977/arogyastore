'use client'
import React from "react";
import { Modal } from "antd";
import AddressSelection from "./AddressSelection";
import NewAddressForm from "./NewAddressForm";

const AddressModal = ({ 
  isOpen, 
  onClose, 
  customeraddress,
  onDeleteAddress,
  onSetDefaultAddress,
  isFormOpen,
  onOpenForm,
  onCloseForm,
  onSubmitAddress,
  country
}) => {
  return (
    <Modal open={isOpen} onCancel={onClose} footer={null} width={800}>
      <div className="address-selection-container">
        <AddressSelection 
          customeraddress={customeraddress}
          onDeleteAddress={onDeleteAddress}
          onSetDefaultAddress={onSetDefaultAddress}
          onOpenForm={onOpenForm}
        />
        
        <NewAddressForm 
          isOpen={isFormOpen}
          onClose={onCloseForm}
          onSubmit={onSubmitAddress}
          country={country}
        />
      </div>
    </Modal>
  );
};

export default AddressModal;
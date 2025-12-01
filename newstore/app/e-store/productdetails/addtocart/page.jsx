'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProductPriceDetails from "./productpricedetails";
import { useAppContext } from "@/app/providers";
import { Button, Empty, Modal, Spin, Space } from "antd";
import { displayMessage, getAPI, postAPI, putAPI } from "@/dataarrange/utils/common";
import { SUCCESS_MSG_TYPE } from "@/dataarrange/constants/dataKeys";
import { FaRegUserCircle, FaLocationPin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { PiPencilCircleDuotone } from "react-icons/pi";
import { BsTrash } from "react-icons/bs";
import { HiOutlineLocationMarker, HiOfficeBuilding, HiPhoneIncoming } from "react-icons/hi";
import { useCustContext } from "../../provider";
import AddressModal from "./components/AddressModal";
import ConfirmationModal from "./components/ConfirmationModal";
import CartItem from "./components/CartItem"; 
import NewAddressForm from "./components/NewAddressForm";
import { NewAddressFormSimple } from "./components/NewAddressFormSimple";
import { toast } from "react-toastify";
import { LoadingOutlined } from '@ant-design/icons';

const LoadingModal = ({ isOpen, status }) => {
  const getContent = () => {
    switch(status) {
      case 'generating-order':
        return (
          <Space direction="vertical" align="center">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
            <p className="mt-4">Generating your order...</p>
          </Space>
        );
      case 'initializing-payment':
        return (
          <Space direction="vertical" align="center">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
            <p className="mt-4">Initializing payment system...</p>
          </Space>
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      open={isOpen}
      footer={null}
      closable={false}
      centered
      width={350}
    >
      <div className="p-6 text-center">
        {getContent()}
      </div>
    </Modal>
  );
};

const AddToCart = () => {
  const { cart } = useAppContext();
  const { customerdata, userdata, loading, error, onlineclinic } = useCustContext();
  const [customeraddress, setCustomeraddress] = useState([]);
  const [defaultaddress, setDefaultaddresss] = useState(null);
  const [orderstatus, setOrderstatus] = useState([]);
  const [ordercreatedata, setOrdercreatedata] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [successstatus_id, setSuccessstatus_id] = useState(null);
  const [failedstatus_id, setfailedstatus_id] = useState(null);
  const [paymentorder_id, setPaymentorder_id] = useState(null);
  const [country, setCountry] = useState([]);
  const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate totals from cart context
  const total = cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalproductquantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  const deliveryCharge = 150;
  const totalAmount = total + deliveryCharge;

  useEffect(() => {
    if (userdata) {
      fetchcustomeraddress();
      fetchOrderStatusfull();
    }
    fetchcountry();
  }, [userdata]);

  const fetchOrderStatusfull = () => {
    const successfn = (data) => {
      setOrderstatus(data);
      setSuccessstatus_id(data.find((e) => e.name === 'Payment Success')?.id);
      setfailedstatus_id(data.find((e) => e.name === 'Payment Failed')?.id);
    }
    getAPI(`inv_order_status`, successfn, () => {});
  }

  const fetchcustomeraddress = () => {
    const successfn = (data) => {
      setCustomeraddress(data);
      setDefaultaddresss(data.find((e) => e.is_default === true));
    }
    getAPI(`inv_customeraddress?user_id=${userdata?.user?.id}`, successfn, () => {});
  }

  const fetchcountry = () => {
    const sucessfn = (data) => {
      setCountry(data.map(e => ({
        label: e.name,
        value: e.id,
        key: e.id
      })));
    }
    getAPI('patients/country', sucessfn, () => {});
  }

  const handleQuantityPlus = (product, change) => {
    cart.updateQuantity(product.id, product.quantity + change);
  };

  const handleQuantityMinus = (product, change) => {
    if (product.quantity > 1) {
      cart.updateQuantity(product.id, product.quantity - change);
    }
  };

  const removeFromCart = (id) => {
    cart.removeFromCart(id);
  };

  const delteAddress = (data) => {
    const datap = { ...data, is_active: false };
    putAPI(`inv_customeraddress/${data.id}/`, datap, () => fetchcustomeraddress(), () => {});
  }

  const setdefaultAddress = (datas) => {
    const data = { ...datas, is_default: true };
    putAPI(`inv_customeraddress/${data.id}/`, data, () => fetchcustomeraddress(), () => {});
  }

  const submitAddress = (datacome) => {
    const data = {
      ...datacome,
      customer_id: customerdata?.id,
      country: 1
    };
    postAPI('inv_customeraddress/', data, () => {
      displayMessage(SUCCESS_MSG_TYPE, "Successfully Added");
      fetchcustomeraddress();
      setIsFormOpen(false);
    }, () => {});
  }

  const postAPIPromise = (url, data) => {
    return new Promise((resolve, reject) => {
      postAPI(url, data, resolve, reject);
    });
  };

  const initOrder = async () => {
    if (isProcessing) return;
    
    if (!defaultaddress) {
      displayMessage("error", "Please select/add a shipping address");
      return;
    }

    setIsProcessing(true);
    setLoadingStatus('generating-order');
    setIsLoadingModalOpen(true);

    try {
      const orderdata = {
        "store_name": "Arogyamission.com",
        "first_name": userdata ? userdata?.user?.first_name?.trim() : defaultaddress.fullname,
        "email": userdata?.user?.email ?? '',
        "mobile": userdata ? userdata?.user?.mobile : defaultaddress.mobile,
        "total": totalAmount,
        "deliverycharge": deliveryCharge,
        "order_status_id": orderstatus.find((e) => e.name === 'Initiated')?.id,
        "accept_language": 'English',
        "currency_code": 'Rs',
        'shipping_city': defaultaddress.city,
        'shipping_firstname': defaultaddress.fullname,
        'shipping_address1': `${defaultaddress.building}, ${defaultaddress.street}`,
        'shipping_postcode': defaultaddress.pincode,
        'shipping_zone': defaultaddress.state,
      };

      const fdata = {
        addressdata: defaultaddress,
        cart_list: cart.items,
        order_data: orderdata
      }

      setLoadingStatus('initializing-payment');
      const response = await postAPIPromise('inv_order_product/bulkorderproductWithoutCart/', fdata);
      icicipaymentgatecheckout(response.order);
    } catch (error) {
      setIsProcessing(false);
      setIsLoadingModalOpen(false);
      displayMessage("error", "Failed to create order");
    }
  };

  const icicipaymentgatecheckout = async (orderdata) => {
    try {
      const reqdata = {
        "TxnRefNo": `orderId${orderdata.id}`,
        "Amount": totalAmount,
        "OrderInfo": orderdata.id,
        "Email": orderdata.email ?? '',
        "Phone": orderdata.mobile
      };
      
      const response = await postAPIPromise('payment-order-icici/', reqdata);
      handleApiResponse(response);
    } catch (error) {
      setIsProcessing(false);
      setIsLoadingModalOpen(false);
      displayMessage("error", "Failed to initialize payment");
    }
  };

  const handleApiResponse = (responseData) => {
    setIsProcessing(false);
    setIsLoadingModalOpen(false);
    
    const baseUrl = "https://payment.bkarogyam.com/process_data/";
    const queryParams = {
      EncData: responseData.EncData,
      MerchantId: responseData.MerchantId,
      BankId: responseData.BankId,
      TerminalId: responseData.TerminalId,
    };
    const queryString = new URLSearchParams(queryParams).toString();
    window.open(`${baseUrl}?${queryString}`, "_blank");
  };

  return (
    <div className="mt-4 md:mt-20">
      <LoadingModal 
        isOpen={isLoadingModalOpen} 
        status={loadingStatus} 
      />

      <AddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        customeraddress={customeraddress}
        onDeleteAddress={delteAddress}
        onSetDefaultAddress={setdefaultAddress}
        isFormOpen={isFormOpen}
        onOpenForm={() => setIsFormOpen(true)}
        onCloseForm={() => setIsFormOpen(false)}
        onSubmitAddress={submitAddress}
        country={country}
      />

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        cartItems={cart.items}
        total={total}
        deliveryCharge={deliveryCharge}
        totalAmount={totalAmount}
        onConfirmOrder={icicipaymentgatecheckout}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 relative">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Shipping Address</h2>
                    {defaultaddress ? (
                      <div className="space-y-2 text-gray-700">
                        <p className="flex items-center">
                          <FaRegUserCircle className="h-5 w-5 text-gray-400 mr-2" />
                          {defaultaddress.fullname}
                        </p>
                        <p className="flex items-center">
                          <HiOutlineLocationMarker className="h-5 w-5 text-gray-400 mr-2" />
                          {defaultaddress.building}, {defaultaddress.street}
                        </p>
                        <p className="flex items-center">
                          <HiOfficeBuilding className="h-5 w-5 text-gray-400 mr-2" />
                          {defaultaddress.city}, {defaultaddress.state} - {defaultaddress.pincode}
                        </p>
                        <p className="flex items-center">
                          <HiPhoneIncoming className="h-5 w-5 text-gray-400 mr-2" />
                          {defaultaddress.mobile}
                        </p>
                      </div>
                    ) : (
                      <p className="text-gray-500">No default address selected</p>
                    )}
                  </div>
                 {userdata && <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <PiPencilCircleDuotone className="h-5 w-5 mr-1" />
                    {defaultaddress ? "Change" : "Add Address"}
                  </button> }
                </div>
              </div>
            </div>

            {userdata == null ?  <NewAddressFormSimple country={country} onSubmit={(data) => { setDefaultaddresss(data);
              toast.success('Added Customer Address Successfull !')
            }} />: ''}

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Order ({cart.items.length})</h2>
                
                {cart.items.length === 0 ? (
                  <div className="text-center py-10">
                    <Empty
                      description={<span className="text-gray-500">Your cart is empty</span>}
                    />
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.items.map((product) => (
                      <CartItem
                        key={product.id}
                        product={product}
                        onQuantityPlus={handleQuantityPlus}
                        onQuantityMinus={handleQuantityMinus}
                        onRemove={removeFromCart}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 sticky top-6">
              <ProductPriceDetails
                totalPrice={total}
                discount={0}
                deliveryCharges={deliveryCharge}
                packagingFee={0}
                totalAmount={totalAmount}
                savings={0}
                totalquantity={totalproductquantity}
                onclick={initOrder}
                isProcessing={isProcessing}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
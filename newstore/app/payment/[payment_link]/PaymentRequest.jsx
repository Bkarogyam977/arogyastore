'use client'
import { useState, useEffect } from "react";
import { Input, Button, Card } from "antd";
import { FaRupeeSign } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { toast } from "react-toastify";
import { postOuterAPI } from "@/dataarrange/utils/common";


export default function PaymentRequest({ data }) {
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [finaldata, setFinalData] = useState(null);

  useEffect(() => {
    if (finaldata) {
      icicipaymentgatecheckout();
    }
  }, [finaldata]); // Trigger the function only when finaldata updates

  const payment_information = () => {
    if (mobile && mobile.length === 10 && name) {
      createPaymentInitate();
    } else {
      toast.error("Please provide full information");
    }
  };

  const createPaymentInitate = () => {
    const successfn = (data) => {
      setFinalData(data); // This will now trigger the useEffect
    };

    const errorfn = () => {
      console.log("Error in initiating payment");
    };

    postOuterAPI(
      "https://healdiway.bkarogyam.com/erp-api/payment-completed-payment/",
      {
        paymentcreate: data.id,
        mobile: mobile,
        name: name,
        amount: data.amount.toFixed(2),
      },
      successfn,
      errorfn
    );
  };

  const icicipaymentgatecheckout = () => {
    if (!finaldata) return; // Prevent calling with null data

    const reqdata = {
      TxnRefNo: `${finaldata.order_id}`,
      Amount: finaldata.amount,
      OrderInfo: finaldata.order_id,
      Email: finaldata.email ?? "",
      Phone: finaldata.mobile,
    };

    const successfn = (data) => {
      handleApiResponse(data);
    };

    const errorfn = () => {
      console.log("Error in ICICI Payment Gateway");
    };

    postOuterAPI("https://healdiway.bkarogyam.com/erp-api/payment-order-icici/", reqdata, successfn, errorfn);
  };

  const handleApiResponse = (responseData) => {
    const baseUrl = "https://payment.bkarogyam.com/process_data/";
    const queryParams = {
      EncData: responseData.EncData,
      MerchantId: responseData.MerchantId,
      BankId: responseData.BankId,
      TerminalId: responseData.TerminalId,
    };

    const queryString = new URLSearchParams(queryParams).toString();
    const finalUrl = `${baseUrl}?${queryString}`;
    console.log(finalUrl);

    window.open(finalUrl, "_blank");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full" viewBox="0 0 1665 665" preserveAspectRatio="none">
          <polygon fill="#fafafa" points="40 50 1665 210 1665 346 220 545 -150 150"></polygon>
          <polygon fill="#f5f5f5" transform="translate(0, -40)" points="-40 215 1865 0 1965 450 1550 730 0 680"></polygon>
        </svg>
      </div>

      <div className="max-w-lg w-full p-4">
        <Card className="p-6 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold">Payment Request from {data.shopName}</h2>
          <div className="mt-4 text-sm text-gray-600">
            <p className="font-semibold">PAYMENT FOR</p>
            <p>{data.paymentFor}</p>
            <p className="font-semibold mt-2">RECEIPT</p>
            <p>{data.receipt}</p>
            <p className="font-semibold mt-2">EXPIRE BY</p>
            <p>{data.expiryDate} (11:59 PM)</p>
            <p className="font-semibold mt-2">AMOUNT PAYABLE</p>
            <p className="text-lg font-bold text-green-600 flex items-center">
              <FaRupeeSign className="mr-1" /> {data.amount.toFixed(2)}
            </p>
          </div>
        </Card>

        <div className="relative mt-6 p-6 bg-blue-600 text-white rounded-lg shadow-lg">
          <div className="absolute top-4 right-4 text-white text-lg">
            <IoLanguage />
          </div>
          <div className="text-center">
            <div className="text-xl font-bold">{data.shopName}</div>
            <div className="mt-2 text-2xl flex justify-center items-center">
              <FaRupeeSign className="mr-1" /> {data.amount.toFixed(2)}
            </div>
          </div>
          <div className="mt-6 bg-white p-4 rounded-lg shadow-md text-black">
            <p className="font-semibold">Contact details</p>
            <p className="text-sm text-gray-600">Enter mobile number to continue</p>
            <div className="mt-3 flex items-center border rounded-lg overflow-hidden">
              <span className="px-3 bg-gray-200">🇮🇳 +91</span>
              <Input
                type="text"
                placeholder="Mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="flex-1 p-2 border-none focus:ring-0"
              />
            </div>
            <div className="mt-3 flex items-center border rounded-lg overflow-hidden">
              <Input
                type="text"
                placeholder="Name (Full Name)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 p-2 border-none focus:ring-0"
              />
            </div>
            <Button htmlType="button" onClick={payment_information} type="primary" className="mt-4 w-full bg-black text-white">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

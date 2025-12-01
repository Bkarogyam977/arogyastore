// 'use client'
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useSearchParams } from 'next/navigation';
// import Image from 'next/image';

// const PaymentSuccess = () => {
//   const [paymentData, setPaymentData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const paymentResponse = searchParams.get('paymentResponse');

//     if (paymentResponse) {
//       fetchPaymentData(paymentResponse);
//     }
//   }, [searchParams]);

//   const fetchPaymentData = async (paymentResponse) => {
//     try {
//       const decodedPaymentResponse = encodeURIComponent(paymentResponse);

//       const response = await axios.get(
//         `https://healdiway.bkarogyam.com/erp-api/payment-order-icici/?paymentResponse=${decodedPaymentResponse}&format=json`
//       );

//       let parsedData;
//       try {
//         const catchdata = response.data.dataFromPG;
//         parsedData = parsePaymentResponse(catchdata);
//       } catch (jsonError) {
//         setError('Invalid JSON response from the server.');
//         return;
//       }

//       if (parsedData.ResponseCode === '00') {
//         setPaymentData(parsedData);
//       } else {
//         setError(parsedData.Message || 'Payment failed');
//       }
//     } catch (err) {
//       setError('An error occurred while processing payment');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const parsePaymentResponse = (responseString) => {
//     const parsedObject = {};

//     const keyValuePairs = responseString.split('::');

//     keyValuePairs.forEach((pair) => {
//       const [key, value] = pair.split('||');
//       if (key && value) {
//         parsedObject[key.trim()] = value.trim();
//       }
//     });

//     return parsedObject;
//   };

//   return (
//     <div className="payment-success mt-36 flex flex-col items-center justify-center px-4">
//       {loading && <p className="text-lg font-semibold text-blue-500">Loading...</p>}

//       {error && (
//         <div className="text-center my-8">
//           <Image
//             src="/images/image-removebg-preview.png"
//             alt="Payment Failed"
//             className="w-64 mx-auto mb-4"
//             width={256}
//             height={256}
//             layout="intrinsic"
//           />
//           <p className="text-xl font-bold text-red-500">{error}</p>
//         </div>
//       )}

//       {paymentData && (
//         <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-md">
//           <Image
//             src="/images/image.png"
//             alt="Payment Successful"
//             className="w-64 mx-auto mb-6"
//             width={256}
//             height={256}
//             layout="intrinsic"
//           />
//           <h1 className="text-2xl font-bold text-green-600">{paymentData.Message}</h1>
//           <p className="text-lg font-semibold text-gray-700 mt-4">
//             Transaction ID: <span className="text-gray-900">{paymentData.RetRefNo}</span>
//           </p>
//           <p className="text-lg font-semibold text-gray-700">
//             Amount: <span className="text-gray-900">Rs.{parseFloat(paymentData.Amount).toFixed(2)}</span>
//           </p>
//           <p className="text-lg font-semibold text-gray-700">
//             Email: <span className="text-gray-900">{paymentData.Email}</span>
//           </p>
//           <p className="text-lg font-semibold text-gray-700">
//             Phone: <span className="text-gray-900">{paymentData.Phone}</span>
//           </p>
//           <p className="text-lg font-semibold text-gray-700">
//             Date: <span className="text-gray-900">{paymentData.RespDate}</span>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentSuccess;







'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Result, Button, Spin } from 'antd';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';

const PaymentSuccess = () => {
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const paymentResponse = searchParams.get('paymentResponse');

    if (paymentResponse) {
      fetchPaymentData(paymentResponse);
    } else {
      setLoading(false);
      setError('No payment response found');
    }
  }, [searchParams]);

  const fetchPaymentData = async (paymentResponse) => {
    try {
      const decodedPaymentResponse = encodeURIComponent(paymentResponse);

      const response = await axios.get(
        `https://healdiway.bkarogyam.com/erp-api/payment-order-icici/?paymentResponse=${decodedPaymentResponse}&format=json`
      );

      let parsedData;
      try {
        const catchdata = response.data.dataFromPG;
        parsedData = parsePaymentResponse(catchdata);
      } catch (jsonError) {
        setError('Invalid JSON response from the server.');
        setLoading(false);
        return;
      }

      if (parsedData.ResponseCode === '00') {
        setPaymentData(parsedData);
        // Redirect to success page if not already there
        if (!window.location.pathname.includes('/success')) {
          router.push('/e-store/payment/success');
        }
      } else {
        setError(parsedData.Message || 'Payment failed');
        // Redirect to failed page if not already there
        if (!window.location.pathname.includes('/failed')) {
          router.push('/e-store/payment/failed');
        }
      }
    } catch (err) {
      setError('An error occurred while processing payment');
      if (!window.location.pathname.includes('/failed')) {
        router.push('/e-store/payment/failed');
      }
    } finally {
      setLoading(false);
    }
  };

  const parsePaymentResponse = (responseString) => {
    const parsedObject = {};
    const keyValuePairs = responseString.split('::');

    keyValuePairs.forEach((pair) => {
      const [key, value] = pair.split('||');
      if (key && value) {
        parsedObject[key.trim()] = value.trim();
      }
    });

    return parsedObject;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spin size="large" tip="Processing Payment...">
          <div className="content p-12" />
        </Spin>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Spin spinning={loading}>
        {error && !paymentData ? (
          <Result
            icon={<FrownOutlined />}
            status="error"
            title="Payment Processing Error"
            subTitle={error}
            extra={[
              <Button type="primary" key="console" onClick={() => router.push('/e-store')}>
                Go Back to Store
              </Button>,
            ]}
          />
        ) : paymentData ? (
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
            <Result
              icon={<SmileOutlined />}
              status="success"
              title="Payment Successful!"
              subTitle="Thank you for your purchase"
              extra={[
                <Button type="primary" key="console" onClick={() => router.push('/e-store')}>
                  Continue Shopping
                </Button>,
              ]}
            />
            <div className="mt-6 space-y-2 text-left">
              <p><strong>Transaction ID:</strong> {paymentData.RetRefNo}</p>
              <p><strong>Amount:</strong> Rs.{parseFloat(paymentData.Amount).toFixed(2)}</p>
              <p><strong>Email:</strong> {paymentData.Email}</p>
              <p><strong>Phone:</strong> {paymentData.Phone}</p>
              <p><strong>Date:</strong> {paymentData.RespDate}</p>
            </div>
          </div>
        ) : null}
      </Spin>
    </div>
  );
};

export default PaymentSuccess;
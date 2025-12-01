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

        // ⭐⭐⭐ PURCHASE EVENT (Simple Mode — Works 100% with your current flow)
        if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
          window.fbq('track', 'Purchase', {
            value: Number(parsedData.Amount),
            currency: 'INR',
            content_type: 'product',
            content_ids: ['payment_success'], // No SKU or orderId available
            content_name: 'ICICI Payment',
            transaction_id: parsedData.RetRefNo
          });

          // (Optional) Lead Event
          window.fbq('track', 'Lead', {
            value: Number(parsedData.Amount),
            currency: 'INR'
          });
        }

        // Redirect to success page if not already there
        if (!window.location.pathname.includes('/success')) {
          router.push('/e-store/payment/success');
        }
      } else {
        setError(parsedData.Message || 'Payment failed');
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
              subTitle="Thank you for your purchase."
              extra={[
                <Button type="primary" key="console" onClick={() => router.push('/e-store')}>
                  Continue Shopping
                </Button>,
              ]}
            />

            {/* Payment Summary */}
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

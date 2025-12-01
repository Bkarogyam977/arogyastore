'use client'
import { Result, Button } from 'antd';
import { FrownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function PaymentFailedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full">
        <Result
          icon={<FrownOutlined />}
          status="error"
          title="Payment Failed"
          subTitle="Sorry, your payment could not be processed. Please try again."
          extra={[
            <Button 
              type="primary" 
              key="retry" 
              onClick={() => router.push('/e-store/cart')}
              className="bg-red-600 hover:bg-red-700"
            >
              Try Again
            </Button>,
            <Button 
              key="home" 
              onClick={() => router.push('/e-store')}
            >
              Back to Store
            </Button>,
          ]}
        />
      </div>
    </div>
  );
}
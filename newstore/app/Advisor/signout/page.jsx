'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Result, Button, Spin, Modal, message } from 'antd'
import { LogoutOutlined, CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons'


export default function SignOutPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSignOut = () => {
    Modal.confirm({
      title: 'Confirm Sign Out',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to sign out?',
      okText: 'Sign Out',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        performSignOut()
      },
    })
  }

  const performSignOut = () => {
    setLoading(true)
    
    // Clear authentication data
    localStorage.removeItem('authdata')
    localStorage.removeItem('token')
    
    // Simulate API call delay
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      message.success('Signed out successfully')
      
      // Redirect after delay
      setTimeout(() => router.replace('/'), 100)
    }, 200)
  }


  // Auto-trigger on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile) performSignOut()
  }, [])


  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8">
        {!loading && !success && (
          <Result
            icon={<LogoutOutlined className="text-blue-500" />}
            title="Ready to sign out?"
            subTitle="You'll need to sign in again to access your account."
            extra={[
              <Button
                type="primary"
                danger
                key="signout"
                icon={<LogoutOutlined />}
                onClick={handleSignOut}
                size="large"
                className="w-full sm:w-auto"
              >
                Sign Out
              </Button>,
              <Button
                key="back"
                onClick={() => router.back()}
                size="large"
                className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-3"
              >
                Go Back
              </Button>
            ]}
          />
        )}

        {loading && (
          <div className="text-center py-8">
            <Spin indicator={<LogoutOutlined style={{ fontSize: 36 }} spin />} />
            <p className="mt-4 text-gray-600">Signing you out securely...</p>
          </div>
        )}

        {success && (
          <Result
            status="success"
            icon={<CheckCircleOutlined className="text-green-500" />}
            title="Successfully signed out!"
            subTitle="Redirecting to login page..."
          />
        )}
      </div>

      <p className="mt-8 text-gray-500 text-center">
        Need help? <a href="/support" className="text-blue-500">Contact support</a>
      </p>
    </div>
  )
}
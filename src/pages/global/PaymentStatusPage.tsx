import Button from '@/components/ui/button/Button'
import { ACCESS_PUBLIC_PATH } from '@/const/router/access-path'
import { useState } from 'react'
import { useNavigate } from 'react-router'

type StatusConfig = {
   color: string,
   bgGradient: string,
   bgLight: string,
   textColor: string,
   borderColor: string,
   title: string,
   message: string,
   emoji: string
}

export default function PaymentStatusPage() {
  const [status] = useState('success')
  const navigate = useNavigate()
  const statusConfig: Record<string, StatusConfig> = {
    success: {
      color: 'green',
      bgGradient: 'from-green-500 to-emerald-600',
      bgLight: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-200',
      title: 'Thanh toán thành công!',
      message: 'Bạn đã thanh toán thành công',
      emoji: '🎉'
    },
    failed: {
      color: 'red',
      bgGradient: 'from-red-500 to-rose-600',
      bgLight: 'bg-red-50',
      textColor: 'text-red-600',
      borderColor: 'border-red-200',
      title: 'Thanh toán thất bại',
      message: 'Đã xảy ra lỗi trong quá trình thanh toán',
      emoji: '😔'
    }
  }

  const currentStatus = statusConfig[status]

  const transactionDetails = {
    transactionId: 'TXN-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    date: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    amount: '$34.87',
    method: 'Visa •••• 4242',
    merchant: 'Premium Subscription'
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full">
        {/* Main Status Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
          {/* Header with gradient */}
          <div className={`bg-gradient-to-r ${currentStatus.bgGradient} p-8 text-center text-white`}>
            <div className="flex justify-center mb-4">
            </div>
            <h1 className="text-3xl font-bold mb-2">{currentStatus.title}</h1>
            <p className="text-white text-opacity-90">{currentStatus.message}</p>
          </div>

          {/* Transaction Details */}
          <div className="p-8">
            <div className={`${currentStatus.bgLight} ${currentStatus.borderColor} border-2 rounded-xl p-6 mb-6`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-600">Mã hàng</span>
                <span className="font-mono text-sm font-bold text-gray-900">{transactionDetails.transactionId}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-600">Ngày</span>
                <span className="text-sm text-gray-900">{transactionDetails.date}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-600">Số tiền</span>
                <span className="text-2xl font-bold text-gray-900">{transactionDetails.amount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Chi tiết</span>
                <span className="text-sm text-gray-900">{transactionDetails.merchant}</span>
              </div>
            </div>

            {/* Status-specific messages */}
            {/* {status === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <p className="text-sm text-green-800">
                  ✓ A confirmation email has been sent to your registered email address.
                </p>
              </div>
            )} */}

            {/* {status === 'failed' && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                <p className="text-sm text-red-800 font-medium mb-2">Reason for failure:</p>
                <p className="text-sm text-red-700">Insufficient funds or card declined. Please try another payment method.</p>
              </div>
            )} */}

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {status === 'failed' && (
                <>
                  <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-xl font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    Retry Payment
                  </button>
                  <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                    Contact Support
                  </button>
                </>
              )}
            </div>

            {/* Back to Home */}
            <Button size='md' type='normal' variant='inactive' onClick={() => navigate(ACCESS_PUBLIC_PATH.HOME)}>
              Quay lại trang chủ
            </Button>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Cần giúp đỡ ? Hãy liên hệ tới gmail:
            <a href="#" className="text-blue-600 hover:underline"> StudyPath23@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
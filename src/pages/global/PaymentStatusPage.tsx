import Button from '@/components/ui/button/Button'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'
import { ACCESS_PUBLIC_PATH } from '@/const/router/access-path'
import useUpdatePaymentStatus from '@/features/payments/hooks/useUpdatePaymentStatus'
import type { UpdatePaymentType } from '@/features/payments/types/payment-types'
import { formatDate } from '@/utils/formatDate'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

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
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState('pending')
  const { updatePaymentStatus, loading, paymentData } = useUpdatePaymentStatus()
  
  const orderCode = searchParams.get('orderCode')
  const paymentStatus = searchParams.get('status')

  const statusConfig: Record<string, StatusConfig> = {
    paid: {
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
    },
    cancelled: {
      color: 'gray-800',
      bgGradient: 'from-gray-500 to-gray-600',
      bgLight: 'bg-gray-600',
      textColor: 'text-gray-primary',
      borderColor: 'border-gray-200',
      title: 'Hủy thanh toán',
      message: 'Bạn đã hủy thanh toán',
      emoji: '😔'
    },
     pending: {
      color: 'gray-800',
      bgGradient: 'from-gray-500 to-gray-600',
      bgLight: 'bg-gray-600',
      textColor: 'text-gray-primary',
      borderColor: 'border-gray-200',
      title: 'Đang lấy thông tin đơn hàng',
      message: 'Bạn đã thanh toán thành công. Hãy đợi 1 lát nhé',
      emoji: '🎉'
    }
  }

  const currentStatus = useMemo(() => {
    return statusConfig[status.toLowerCase()]
  }, [status])


  useEffect(() => {
    if (orderCode && paymentStatus) {
      const data: UpdatePaymentType = {
        orderCode: Number(searchParams.get('orderCode')),
        status: paymentStatus.charAt(0).toUpperCase() + paymentStatus.slice(1).toLowerCase()
      }
      updatePaymentStatus(data)
    }
  }, [orderCode, paymentStatus])

  useEffect(() => {
    setStatus(paymentData ? paymentData.status : 'pending')
  }, [paymentData])


  if (loading) {
    return <LoadingScreen/>
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

          {paymentData && 
            <>
            <div className="p-8">
              <div className={`${currentStatus.bgLight} ${currentStatus.borderColor} border-2 rounded-xl p-6 mb-6`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">Mã hàng</span>
                  <span className="font-mono text-sm font-bold text-gray-900">{paymentData?.id}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">Ngày</span>
                  <span className="text-sm text-gray-900">
                    {formatDate(new Date(paymentData.createAt))}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">Số tiền</span>
                  <span className="text-2xl font-bold text-gray-900">{paymentData?.amount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Gói thành viên id</span>
                  <span className="text-sm text-gray-900">{paymentData?.memberShipPlanId}</span>
                </div>
              </div>

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

              <Button size='md' type='normal' variant='inactive' onClick={() => navigate(ACCESS_PUBLIC_PATH.HOME)}>
                Quay lại trang chủ
              </Button>
            </div>
            
            </>
          }
        </div>

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
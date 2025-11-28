import { useState } from 'react'
import type { PaymentUrlType } from '../types/payment-types'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import { PaymentApi } from '../api/api.payment.status'
import type { LoginResponse } from '@/features/auth/types/login-type'
import { toast } from 'react-toastify'

export default function useGetPaymentUrl() {
  const [paymentUrlData, setPaymentUrlData] = useState<PaymentUrlType>()
  const [loading, setLoading] = useState(false)
  const { getItem } = useLocalStorage('user-info')
  const getPaymentUrl = async (membershipPlanId: string) => {
      const userId = getItem<LoginResponse>()?.userId
      if (!userId) {
        toast.error('Hãy đăng nhập để mua gói')
        return
      }
      try {
        setLoading(true)
        const response = await PaymentApi.createPaymentLinks(membershipPlanId, userId)  
        setPaymentUrlData(response)
      } catch (error) {
        toast.error(error as string)    
      } finally {
        setLoading(false)
      }
  }
  return {
      paymentUrlData,
      getPaymentUrl,
      loading
  }
}

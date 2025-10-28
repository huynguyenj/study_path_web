import { useState } from 'react'
import { PaymentApi } from '../api/api.payment.status'
import type { PaymentTypes, UpdatePaymentType } from '../types/payment-types'

export default function useUpdatePaymentStatus() {
  const [paymentData, setPaymentData] = useState<PaymentTypes>()
  const [loading, setLoading] = useState(false)
  const updatePaymentStatus = async (updatePaymentData: UpdatePaymentType) => {
    try {
      setLoading(true)
      const response = await PaymentApi.updatePaymentStatus(updatePaymentData)
      setPaymentData(response.data) 
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return {
      updatePaymentStatus,
      paymentData,
      loading
  }
}

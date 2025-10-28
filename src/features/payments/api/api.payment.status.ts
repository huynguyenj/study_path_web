import { apiPublic } from '@/services/config/axios.config'
import type { PaymentTypes, PaymentUrlType, UpdatePaymentType } from '../types/payment-types'
import type { ResponseStructure } from '@/types/data-response/response'

export const PaymentApi = {
   createPaymentLinks: async (membershipId: string, userId: string): Promise<PaymentUrlType> => await apiPublic.get(`/payment/create-payment-link-by/${membershipId}/${userId}`),
   updatePaymentStatus: async (paymentData: UpdatePaymentType): Promise<ResponseStructure<PaymentTypes>> => await apiPublic.put('/payment/update-status', paymentData) 
}
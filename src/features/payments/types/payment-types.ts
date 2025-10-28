export type UpdatePaymentType = {
  orderCode: number
  status: string
}

export type PaymentUrlType = {
  checkoutUrl: string
}

export type PaymentTypes = {
  id: string
  createAt: Date
  amount: number
  status: string
  orderCode: number
  memberShipPlanId: string
}
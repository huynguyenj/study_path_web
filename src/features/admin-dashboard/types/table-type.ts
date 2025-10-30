export type TableMembershipType = {
      userId: string | number
      membership: string
      type: string
      date: string
      amount: number
}

export type TopCourseType = {
      name: string
      star: number
      price: number
      image: string
}

export type RecentPaymentsType = {
  id: string
  createAt: Date
  amount: number
  status: string
  userId: string
  orderCode: string
  memberShipPlanId: string
}
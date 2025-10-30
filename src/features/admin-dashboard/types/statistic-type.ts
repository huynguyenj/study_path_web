export type StatisticType = {
      name: string
      data: number
}

export type AdminStatisticsType = {
  userCount: number
  totalAmount: number
  paymentFail: number
  memberShip: number
}

export type RevenueLineChartType = {
  month: number
  totalAmount: number
}

export type RevenueYearlyType = {
  chartData: RevenueLineChartType[]
  year: number[]
}
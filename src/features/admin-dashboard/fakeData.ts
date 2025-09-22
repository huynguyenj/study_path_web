import type { PieChartDataType } from './types/chart-type'
import type { StatisticType } from './types/statistic-type'

export const dataStatistic: StatisticType[] = [
      { name: 'users', data: 178 },
      { name: 'courses', data: 20 },
      { name: 'revenue', data: 5000000 },
      { name: 'sponsors', data: 12 }
]

export const chartData = [
      700000, 500000, 400000, 300000, 200000, 1100000, 8000000, 300000, 400000, 600000, 500000, 400000
]

export const doughnutChartData: PieChartDataType[] = [
      { id: 1, value: 30, label: 'Membership' },
      { id: 2, value: 70, label: 'Affiliate' }
]
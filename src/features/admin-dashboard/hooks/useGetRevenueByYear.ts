import { useEffect, useState } from 'react'
import type { RevenueLineChartType } from '../types/statistic-type'
import { toast } from 'react-toastify'
import { AnalyticApis } from '../api/api.analytics'

export default function useGetRevenueByYear(year: number) {
  const [revenueInYearData, setRevenueInYear] = useState<RevenueLineChartType[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchRevenueByYear = async () => {
      try {
        setLoading(true)
        const response = await AnalyticApis.getRevenueByYear(year)
        setRevenueInYear(response.data)    
      } catch (error) {
        console.log(error)
        toast.error('Lấy dữ liệu doanh thu thất bại')    
      } finally {
        setLoading(false)
      }
    }
    fetchRevenueByYear()
  }, [year])
  return {
      loading,
      revenueInYearData
  }
}

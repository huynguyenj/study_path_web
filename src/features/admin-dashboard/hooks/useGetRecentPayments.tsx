import { useEffect, useState } from 'react'
import type { RecentPaymentsType } from '../types/table-type'
import { AnalyticApis } from '../api/api.analytics'
import type { PaginationResponse } from '@/types/data-response/response'

export default function useGetRecentPayments(currentPage: number) {
  const [recentPayments, setRecentPayments] = useState<PaginationResponse<RecentPaymentsType>>()
  const [loading, setLoading] = useState(false)
  const fetchRecentPayments = async () => {
    try {
      setLoading(true)
      const response = await AnalyticApis.getRecentPayments(currentPage)
      setRecentPayments(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
      fetchRecentPayments()
  }, [currentPage])
  return {
      recentPayments,
      loading
  }
}

import { useEffect, useState } from 'react'
import type { RecentPaymentsType } from '../types/table-type'
import { AnalyticApis } from '../api/api.analytics'

export default function useGetRecentPayments() {
  const [recentPayments, setRecentPayments] = useState<RecentPaymentsType[]>([])
  const [loading, setLoading] = useState(false)
  const fetchRecentPayments = async () => {
    try {
      setLoading(true)
      const response = await AnalyticApis.getRecentPayments()
      setRecentPayments(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
      fetchRecentPayments()
  }, [])
  return {
      recentPayments,
      loading
  }
}

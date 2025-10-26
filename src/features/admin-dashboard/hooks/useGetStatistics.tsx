import { useEffect, useState } from 'react'
import type { AdminStatisticsType } from '../types/statistic-type'
import { AnalyticApis } from '../api/api.analytics'

export default function useGetStatistics() {
  const [statistics, setStatistic] = useState<AdminStatisticsType>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
     const fetchStatisticData = async () => {
       try {
         setLoading(true)
         const response = await AnalyticApis.getAdminStatistics()
         setStatistic(response.data)
       } catch (error) {
         console.log(error)
       } finally {
         setLoading(false)
       }
     }
     fetchStatisticData()
  }, [])
  return { statistics, loading }
}

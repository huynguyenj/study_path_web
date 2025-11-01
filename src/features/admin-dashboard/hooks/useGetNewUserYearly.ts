import { useEffect, useState } from 'react'
import type { GoogleAnalyticsNewUserType } from '../types/google-analytics-type'
import { AnalyticApis } from '../api/api.analytics'

export default function useGetNewUserYearly(year: string) {
  const [newUserYearlyData, setNewUserYearlyData] = useState<GoogleAnalyticsNewUserType[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
      const fetchNewUserYearly = async () => {
        try {
          setLoading(true)
          const response = await AnalyticApis.getGoogleAnalyticsDataNewUserYearly(year) 
          setNewUserYearlyData(response.data) 
        } catch (error) {
          console.log(error)  
        } finally {
          setLoading(false)  
        }
      }
      fetchNewUserYearly()
  }, [year])
  return {
      loading,
      newUserYearlyData
  }
}

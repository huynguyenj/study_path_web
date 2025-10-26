import { useEffect, useState } from 'react'
import type { GoogleAnalyticsType } from '../types/google-analytics-type'
import { AnalyticApis } from '../api/api.analytics'
import { toast } from 'react-toastify'

export default function useGetActiveAndSessionData() {
  const [userActiveAndSessionDataDaily, setUserActiveAndSessionDaily] = useState<GoogleAnalyticsType>()
  const [loading, setLoading] = useState(false)
  const fetchUserDailyData = async () => {
      try {
         setLoading(true)
         const response = await AnalyticApis.getGoogleAnalyticsDataUserWeekly()
         setUserActiveAndSessionDaily(response.data)   
      } catch (error) {
        console.log(error)
        toast.error('Lấy dữ liệu số lượng người dùng hoạt động và số lượng truy cập trang không thành công')    
      } finally {
        setLoading(false)
      }
  }
  useEffect(() => {
      fetchUserDailyData()
  }, [])
  return {
      userActiveAndSessionDataDaily,
      loading
  }
}

import { useState } from 'react'
import type { UserDashboardStatistic } from '../types/dashboard-statistic-type'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import { type LoginResponse } from '@/features/auth/types/login-type'
import { toast } from 'react-toastify'
import { UserDashboardApi } from '../api/api.user.dashboard'

export default function useGetStatistic() {
  const [dashboardStatistic, setDashboardStatistic] = useState<UserDashboardStatistic>()
  const [loading, setLoading] = useState(false)
  const { getItem } = useLocalStorage('user-info')
  const getStatistic = async (scheduleId: string) => {
    const userId = getItem<LoginResponse>()?.userId
    if (!userId) {
      toast.error('Lấy thông kê dữ liệu thất bại. Hãy đăng nhập để thử lại.')
      return
    }
    try {
      setLoading(true)
      const response = await UserDashboardApi.getStatisticPersonalSchedule(userId, scheduleId)
      setDashboardStatistic(response.data)
    } catch (error) {
      console.log(error)
      toast.error('Lấy dữ liệu thống kê thất bại')
    } finally {
      setLoading(false)
    }
  }
  return {
      getStatistic,
      loading,
      dashboardStatistic
  }
}
